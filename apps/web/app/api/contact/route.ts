import { Resend } from "resend";
import { CONTACT_EMAIL } from "../../../src/lib/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

// This rate limit is per serverless instance, which is acceptable for this form.
const requestsByIp = new Map<string, number[]>();

const errorResponse = (
  error: "invalid" | "rate_limited" | "unconfigured" | "send_failed",
  status: 400 | 429 | 502 | 503,
) => Response.json({ error }, { status });

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return errorResponse("invalid", 400);
  }

  if (!body || typeof body !== "object") {
    return errorResponse("invalid", 400);
  }

  const { name, email, message, website, startedAt, language } = body as Record<
    string,
    unknown
  >;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    typeof website !== "string" ||
    typeof startedAt !== "number"
  ) {
    return errorResponse("invalid", 400);
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (
    trimmedName.length < 1 ||
    trimmedName.length > 120 ||
    trimmedMessage.length < 1 ||
    trimmedMessage.length > 5000 ||
    trimmedEmail.length > 254 ||
    !EMAIL_PATTERN.test(trimmedEmail) ||
    website !== "" ||
    !Number.isFinite(startedAt) ||
    Date.now() - startedAt < 3000
  ) {
    return errorResponse("invalid", 400);
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const recentRequests = (requestsByIp.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestsByIp.set(ip, recentRequests);
    return errorResponse("rate_limited", 429);
  }

  recentRequests.push(now);
  requestsByIp.set(ip, recentRequests);

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return errorResponse("unconfigured", 503);
  }

  const subject =
    language === "pt"
      ? `Contacto do portefólio — ${trimmedName}`
      : `Portfolio enquiry from ${trimmedName}`;
  const text = `${trimmedMessage}\n\nFrom: ${trimmedName} <${trimmedEmail}>`;

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: "Alexandra Barbosa <contact@alexandrabarbosa.pt>",
      to: CONTACT_EMAIL,
      replyTo: trimmedEmail,
      subject,
      text,
    });

    if (error) {
      console.error("Resend contact email failed", error);
      return errorResponse("send_failed", 502);
    }
  } catch (error) {
    console.error("Resend contact email failed", error);
    return errorResponse("send_failed", 502);
  }

  return Response.json({ ok: true });
}
