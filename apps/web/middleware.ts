import { NextResponse, type NextRequest } from "next/server";
import {
  acceptsMarkdown,
  markdownResponseHeaders,
  parseMarkdownResource,
  renderMarkdown,
} from "./src/markdown/representation";

const appendVary = (headers: Headers, value: string) => {
  const current = headers.get("Vary");
  const values = new Set(
    current
      ?.split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  );
  values.add(value);
  headers.set("Vary", [...values].join(", "));
};

export function middleware(request: NextRequest) {
  const resource = parseMarkdownResource(request.nextUrl.pathname);
  if (!resource) return NextResponse.next();

  if (acceptsMarkdown(request.headers.get("Accept"))) {
    return new Response(renderMarkdown(resource), {
      headers: markdownResponseHeaders(resource.language),
    });
  }

  const response = NextResponse.next();
  appendVary(response.headers, "Accept");
  return response;
}

export const config = {
  matcher: ["/pt", "/en", "/pt/projetos/:path*", "/en/projects/:path*"],
};
