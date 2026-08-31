import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const llmsTxtLink = {
  key: "Link",
  value: '</llms.txt>; rel="describedby"; type="text/plain"',
};

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/:language(pt|en)", headers: [llmsTxtLink] },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "alexandrabarbosa.pt" }],
        destination: "https://www.alexandrabarbosa.pt/:path*",
        permanent: true,
      },
      { source: "/", destination: "/pt", permanent: true },
      {
        source: "/projects/:slug",
        destination: "/pt/projetos/:slug",
        permanent: true,
      },
      {
        source: "/projetos/:slug",
        destination: "/pt/projetos/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
