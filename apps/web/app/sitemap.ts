import type { MetadataRoute } from "next";
import { PROJECTS, type Project } from "../src/data/projects";
import { localizeProject } from "../src/data/projectTranslations";
import { LANGUAGES, localizeHref, type Language } from "../src/lib/i18n";
import { absoluteUrl, languageAlternates } from "../src/lib/site";

/**
 * A build timestamp would mark all 20 URLs as changed on every deploy, which
 * Google learns to ignore. Each case study carries the date its own copy last
 * changed; a translated page is only as fresh as the newer of the two, since
 * the Portuguese copy overrides the base.
 */
const projectLastModified = (project: Project, language: Language) =>
  [project.updatedAt, localizeProject(project, language).updatedAt]
    .map((date) => new Date(date))
    .reduce((newest, date) => (date > newest ? date : newest));

/** The homepage lists every case study, so it is as fresh as the newest one. */
const homeLastModified = (language: Language) =>
  PROJECTS.map((project) => projectLastModified(project, language)).reduce(
    (newest, date) => (date > newest ? date : newest),
  );

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, language: Language, lastModified: Date) => ({
    url: absoluteUrl(localizeHref(path, language)),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
    alternates: { languages: languageAlternates(path, language).languages },
  });

  return LANGUAGES.flatMap((language) => [
    entry("/", language, homeLastModified(language)),
    entry("/projects", language, homeLastModified(language)),
    entry("/privacy", language, new Date("2026-08-31")),
    ...PROJECTS.map((project) =>
      entry(
        `/projects/${project.slug}`,
        language,
        projectLastModified(project, language),
      ),
    ),
  ]);
}
