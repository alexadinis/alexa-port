import { PRODUCTION_URL, SITE_URL } from "../../src/lib/site";

const AI_AND_SEARCH_CRAWLERS = [
  "GPTBot",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
  "OAI-SearchBot",
  "CCBot",
  "Bingbot",
];

const CONTENT_SIGNAL = "Content-Signal: ai-train=no, search=yes, ai-input=yes";

const crawlerGroup = [
  ...AI_AND_SEARCH_CRAWLERS.map((crawler) => `User-agent: ${crawler}`),
  "Allow: /",
  CONTENT_SIGNAL,
].join("\n");

const publicRobotsTxt = [
  crawlerGroup,
  ["User-agent: *", "Allow: /", CONTENT_SIGNAL].join("\n"),
  `Sitemap: ${PRODUCTION_URL}/sitemap.xml`,
  `Host: ${PRODUCTION_URL}`,
].join("\n\n");

const previewRobotsTxt = [
  "User-agent: *",
  "Disallow: /",
  `Sitemap: ${SITE_URL}/sitemap.xml`,
  `Host: ${SITE_URL}`,
].join("\n");

export function GET() {
  const isProduction = SITE_URL === PRODUCTION_URL;

  return new Response(
    `${isProduction ? publicRobotsTxt : previewRobotsTxt}\n`,
    {
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=86400",
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
