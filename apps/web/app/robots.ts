import type { MetadataRoute } from "next";
import { PRODUCTION_URL, SITE_URL } from "../src/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Preview deployments must stay out of the index.
  const isProduction = SITE_URL === PRODUCTION_URL;

  return {
    rules: isProduction
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
