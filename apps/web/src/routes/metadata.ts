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

const PROJECT_SEO_COPY: Record<
  Language,
  Record<string, { title: string; description: string }>
> = {
  pt: {
    "endesa-portugal": {
      title: "Endesa Portugal | Estratégia de Social Media (+100% Alcance)",
      description:
        "Estratégia de social media para a Endesa Portugal: +100% de alcance e impressões em 8 meses no Instagram e Facebook. Vídeo, copywriting e gestão de comunidade.",
    },
    "kfc-portugal": {
      title: "KFC Portugal | Social Media Meme-First (+40% Engagement)",
      description:
        "Estratégia meme-first para a KFC Portugal: +40% de engagement no Instagram e +268 mil seguidores no TikTok em 8 meses. Copywriting e gestão de comunidade.",
    },
    "padaria-alianca": {
      title: "Padaria Aliança | Fotografia, Vídeo e Social Media",
      description:
        "Estratégia de conteúdo, fotografia e vídeo para a Padaria Aliança: visuais que captam o pão fresco feito diariamente. Gestão de redes sociais e publicidade paga.",
    },
    munchie: {
      title: "Munchie BK | Social Media, Criação de Conteúdo e Estratégia",
      description:
        "Estratégia de conteúdo, fotografia e copywriting para a Munchie BK, a primeira hamburgueria tradicional do Porto. Gestão de redes sociais e publicidade paga.",
    },
    "feel-better": {
      title: "Feel Better Porto | Social Media e Criação de Conteúdo",
      description:
        "Construção do zero de conteúdo, copywriting e redes sociais para a Feel Better by Joana Pereira, tornando a depilação a laser numa marca de bem-estar apelativa.",
    },
    "lr-opticas": {
      title: "L&R Ópticas | Criação e Gestão de Redes Sociais",
      description:
        "Da criação à gestão contínua: desenvolvo o Instagram e Facebook da L&R Ópticas, com conteúdo de marcas premium e saúde ocular, numa voz clara e próxima.",
    },
    "psicomorfose-psicologia": {
      title: "Psicomorfose | Psicologia | Branding e Social Media",
      description:
        "Trabalho de branding e conteúdo para a Psicomorfose, clínica de psicologia: identidade visual, Reels, carrosséis e Stories, com uma voz humana e informada.",
    },
    "authentic-classical-pilates": {
      title: "Authentic Classical Pilates | Estratégia e Vídeo",
      description:
        'Estratégia de conteúdo minimalista e vídeo promocional "return to life" para os estúdios de Pilates clássico no Porto e Paredes. Copywriting e storytelling.',
    },
    cockburns: {
      title: "Cockburn's | Social Media para Vinho do Porto",
      description:
        "Gestão diária de Instagram, Facebook e X para a Cockburn's, dando voz jovem e fresca ao vinho do Porto sem perder a herança da marca. Copywriting, gestão de comunidade.",
    },
  },
  en: {
    "endesa-portugal": {
      title: "Endesa Portugal | Social Media Strategy & Content (+100% Reach)",
      description:
        "Social media strategy for Endesa Portugal: +100% reach and impressions in 8 months across Instagram and Facebook. Video, copywriting and community management.",
    },
    "kfc-portugal": {
      title: "KFC Portugal | Meme-First Social Media (+40% Engagement)",
      description:
        "Meme-first strategy for KFC Portugal: +40% engagement on Instagram and +268K organic followers on TikTok in 8 months. Copywriting and community management.",
    },
    "padaria-alianca": {
      title: "Padaria Aliança | Photography, Video & Social Media",
      description:
        "Content strategy, photography and video for Padaria Aliança: visuals capturing freshly baked bread every day. Social media management and paid media.",
    },
    munchie: {
      title: "Munchie BK | Social Media, Content Creation & Strategy",
      description:
        "Content strategy, photography and copywriting for Munchie BK, Porto's first traditional burger house. Social media management and paid advertising.",
    },
    "feel-better": {
      title: "Feel Better Porto | Social Media & Content Creation",
      description:
        "Built content, copywriting and social media from scratch for Feel Better by Joana Pereira, turning laser hair removal into an approachable wellness brand.",
    },
    "lr-opticas": {
      title: "L&R Ópticas | Social Media Creation & Management",
      description:
        "From creation to ongoing management: I run Instagram and Facebook for L&R Ópticas, with premium brand content and eye health topics, in a clear, close tone.",
    },
    "psicomorfose-psicologia": {
      title: "Psicomorfose | Psychology | Branding & Social Media",
      description:
        "Branding and content work for Psicomorfose, a psychology practice: visual identity, Reels, carousels and Stories, with a warm, informed voice.",
    },
    "authentic-classical-pilates": {
      title: "Authentic Classical Pilates | Strategy & Video",
      description:
        'Minimalist content strategy and "return to life" promo video for the Classical Pilates studios in Porto and Paredes. Copywriting and storytelling.',
    },
    cockburns: {
      title: "Cockburn's | Social Media for Port Wine",
      description:
        "Daily management of Instagram, Facebook and X for Cockburn's, giving Port wine a young, fresh voice without losing its heritage. Copywriting, community management.",
    },
  },
};

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

export const buildPrivacyMetadata = (language: Language): Metadata => {
  const isPortuguese = language === "pt";
  const title = isPortuguese ? "Política de Privacidade" : "Privacy Policy";
  const description = isPortuguese
    ? "Saiba como são tratados os dados pessoais e de navegação no website de Alexandra Dinis Barbosa."
    : "Learn how personal and browsing data is handled on Alexandra Dinis Barbosa's website.";
  const alternates = languageAlternates("/privacy", language);

  return {
    title,
    description,
    alternates,
    openGraph: {
      url: alternates.canonical,
      title,
      description,
      images: [OG_IMAGE],
    },
  };
};

export const buildProjectsMetadata = (language: Language): Metadata => {
  const isPortuguese = language === "pt";
  const title = isPortuguese
    ? "Projetos de Social Media e Design"
    : "Social Media & Design Projects";
  const description = isPortuguese
    ? "Explora projetos de estratégia, gestão de redes sociais, criação de conteúdo, copywriting e design para marcas em Portugal."
    : "Explore social media strategy, management, content creation, copywriting and design projects for brands in Portugal.";
  const alternates = languageAlternates("/projects", language);

  return {
    title: { absolute: `${title} | Alexandra Barbosa` },
    description,
    alternates,
    openGraph: {
      url: alternates.canonical,
      title,
      description,
      images: [OG_IMAGE],
    },
  };
};

export const projectsJsonLd = (language: Language) => {
  const pageUrl = languageAlternates("/projects", language).canonical;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    name:
      language === "pt"
        ? "Projetos de Alexandra Barbosa"
        : "Alexandra Barbosa's projects",
    url: pageUrl,
    inLanguage: language === "pt" ? "pt-PT" : "en",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: languageAlternates(
          `/projects/${project.slug}`,
          language,
        ).canonical,
      })),
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
  const seo = PROJECT_SEO_COPY[language][slug];
  const path = `/projects/${project.slug}`;
  const alternates = languageAlternates(path, language);
  const title = seo?.title ?? project.title;
  const description =
    seo?.description ?? project.description ?? project.summary;
  const image = absoluteUrl(project.detailImage ?? project.image);

  return {
    title: { absolute: title },
    description,
    alternates,
    openGraph: {
      type: "article",
      url: alternates.canonical,
      title,
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
  const seo = PROJECT_SEO_COPY[language][slug];
  const pageUrl = languageAlternates(
    `/projects/${project.slug}`,
    language,
  ).canonical;
  const startYear = project.year?.match(/\d{4}/)?.[0];
  const homeName = language === "pt" ? "Início" : "Home";
  const clientName = project.client ?? project.title;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${pageUrl}#creative-work`,
        name: project.title,
        headline: seo?.title ?? project.title,
        description: seo?.description ?? project.description ?? project.summary,
        url: pageUrl,
        inLanguage: language === "pt" ? "pt-PT" : "en",
        image: absoluteUrl(project.detailImage ?? project.image),
        ...(startYear ? { dateCreated: startYear } : {}),
        dateModified: project.updatedAt,
        author: {
          "@type": "Person",
          "@id": absoluteUrl("/#person"),
          name: "Alexandra Barbosa",
        },
        about: {
          "@type": "Organization",
          name: clientName,
          ...(project.clientUrl ? { sameAs: project.clientUrl } : {}),
        },
        keywords: project.services,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: homeName,
            item: languageAlternates("/", language).canonical,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: project.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
};
