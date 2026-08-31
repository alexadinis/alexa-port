import type { MetadataRoute } from "next";
import { PROJECTS } from "../src/data/projects";
import { LANGUAGES, localizeHref } from "../src/lib/i18n";
import { absoluteUrl, languageAlternates } from "../src/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/privacy",
    ...PROJECTS.map((project) => `/projects/${project.slug}`),
  ];

  return paths.flatMap((path) =>
    LANGUAGES.map((language) => ({
      url: absoluteUrl(localizeHref(path, language)),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
      alternates: { languages: languageAlternates(path, language).languages },
    })),
  );
}
