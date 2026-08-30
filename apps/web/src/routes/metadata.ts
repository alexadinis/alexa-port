import type { Metadata } from "next";
import { getProject, PROJECTS } from "../data/projects";
import { localizeProject } from "../data/projectTranslations";
import type { Language } from "../lib/i18n";
import {
  absoluteUrl,
  languageAlternates,
  OG_IMAGE,
  SITE_COPY,
} from "../lib/site";

export const projectStaticParams = () =>
  PROJECTS.map((project) => ({ slug: project.slug }));

export const buildHomeMetadata = (language: Language): Metadata => {
  const copy = SITE_COPY[language];
  const alternates = languageAlternates("/", language);

  return {
    // The site name is already in this title, so skip the layout template.
    title: { absolute: copy.title },
    description: copy.description,
    alternates,
    openGraph: {
      url: alternates.canonical,
      title: copy.title,
      description: copy.description,
      images: [OG_IMAGE],
    },
  };
};

export const buildProjectMetadata = (
  language: Language,
  slug: string,
): Metadata => {
  const source = getProject(slug);
  if (!source) return {};

  const project = localizeProject(source, language);
  const path = `/projects/${project.slug}`;
  const alternates = languageAlternates(path, language);
  // The case study body is the page copy, not a snippet; only the
  // hand-written metaDescription is length-controlled for the SERP.
  const description =
    project.metaDescription ?? project.description ?? project.summary;
  const image = absoluteUrl(project.detailImage ?? project.image);

  return {
    title: project.title,
    description,
    alternates,
    openGraph: {
      type: "article",
      url: alternates.canonical,
      title: project.title,
      description,
      images: [{ url: image, alt: `${project.title} project artwork` }],
    },
    twitter: { images: [image] },
  };
};

/** Structured data for a single case study. */
export const projectJsonLd = (language: Language, slug: string) => {
  const source = getProject(slug);
  if (!source) return null;

  const project = localizeProject(source, language);

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.description ?? project.summary,
    url: languageAlternates(`/projects/${project.slug}`, language).canonical,
    inLanguage: language === "pt" ? "pt-PT" : "en",
    image: absoluteUrl(project.detailImage ?? project.image),
    dateCreated: project.year,
    author: { "@type": "Person", name: "Alexandra Barbosa" },
    about: project.client ?? project.title,
  };
};
