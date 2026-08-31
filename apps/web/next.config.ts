import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
