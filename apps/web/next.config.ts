import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * The Portuguese route moved to /projetos. These URLs are indexed under the
   * old English segment, so they redirect permanently rather than 404. The
   * English route is unprefixed by `/en`, so it never matches this source.
   */
  async redirects() {
    return [
      {
        source: "/projects/:slug",
        destination: "/projetos/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
