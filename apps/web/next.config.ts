import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
