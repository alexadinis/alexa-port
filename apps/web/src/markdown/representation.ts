import { getProject, PROJECTS, type Project } from "../data/projects.ts";
import { localizeProject } from "../data/projectTranslations.ts";
import { isLanguage, localizeHref, type Language } from "../lib/i18n.ts";
import {
  CONTACT_EMAIL,
  SITE_COPY,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from "../lib/site.ts";

type MarkdownResource =
  | { kind: "home"; language: Language }
  | { kind: "projects"; language: Language }
  | { kind: "project"; language: Language; slug: string };

const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

const paragraphs = (value?: string) =>
  value
    ?.split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .join("\n\n") ?? "";

const markdownLink = (label: string, href: string) =>
  `[${label.replaceAll("]", "\\]")}](${href})`;

const projectUrl = (project: Project, language: Language) =>
  absoluteUrl(localizeHref(`/projects/${project.slug}`, language));

const projectList = (language: Language) =>
  PROJECTS.map((source) => {
    const project = localizeProject(source, language);
    return `- ${markdownLink(project.title, projectUrl(project, language))} — ${project.summary.replaceAll("\n", " ")}`;
  }).join("\n");

const renderHome = (language: Language) => {
  const copy = SITE_COPY[language];
  const isPortuguese = language === "pt";

  return [
    `# ${SITE_NAME}`,
    copy.description,
    `## ${isPortuguese ? "Serviços" : "Services"}`,
    isPortuguese
      ? "Estratégia e gestão de redes sociais, criação de conteúdo, copywriting, gestão de comunidade, publicidade paga, análise e reporting, design gráfico, branding, direção de arte, fotografia, vídeo e edição audiovisual."
      : "Social media strategy and management, content creation, copywriting, community management, paid media, analytics and reporting, graphic design, branding, art direction, photography, video and audiovisual editing.",
    `## ${isPortuguese ? "Projetos selecionados" : "Selected projects"}`,
    projectList(language),
    `## ${isPortuguese ? "Contacto" : "Contact"}`,
    `- Email: ${markdownLink(CONTACT_EMAIL, `mailto:${CONTACT_EMAIL}`)}`,
    `- LinkedIn: ${SOCIAL_PROFILES[0]}`,
    `- Behance: ${SOCIAL_PROFILES[1]}`,
    `- Instagram: ${SOCIAL_PROFILES[2]}`,
  ].join("\n\n");
};

const renderProjects = (language: Language) =>
  [
    `# ${language === "pt" ? "Projetos" : "Projects"}`,
    language === "pt"
      ? "Projetos de social media, conteúdo, copywriting, design e estratégia de Alexandra Barbosa."
      : "Social media, content, copywriting, design and strategy projects by Alexandra Barbosa.",
    projectList(language),
    markdownLink(
      language === "pt" ? "Contactar Alexandra" : "Contact Alexandra",
      `mailto:${CONTACT_EMAIL}`,
    ),
  ].join("\n\n");

const projectCredits = (project: Project, language: Language) => {
  if (project.credits?.length) {
    return project.credits.map((credit) => {
      const linkedValues = credit.links?.length
        ? credit.links.map((link) => markdownLink(link.text, link.url)).join(", ")
        : credit.value;
      return `- **${credit.label}:** ${linkedValues}`;
    });
  }

  return [
    project.client
      ? `- **${language === "pt" ? "Cliente" : "Client"}:** ${
          project.clientUrl
            ? markdownLink(project.client, project.clientUrl)
            : project.client
        }`
      : null,
    project.developedAt
      ? `- **${language === "pt" ? "Desenvolvido em" : "Developed at"}:** ${
          project.agencyUrl
            ? markdownLink(project.developedAt, project.agencyUrl)
            : project.developedAt
        }`
      : null,
    project.visualCredit
      ? `- **${project.visualCreditLabel ?? (language === "pt" ? "Créditos visuais" : "Visual credit")}:** ${
          project.visualCreditUrl
            ? markdownLink(project.visualCredit, project.visualCreditUrl)
            : project.visualCredit
        }`
      : null,
    project.year
      ? `- **${language === "pt" ? "Ano" : "Year"}:** ${project.year}`
      : null,
  ].filter((line): line is string => Boolean(line));
};

const renderProject = (source: Project, language: Language) => {
  const project = localizeProject(source, language);
  const isPortuguese = language === "pt";
  const sections = [
    project.brandingText
      ? [`## Branding`, paragraphs(project.brandingText)]
      : null,
    project.socialMediaText
      ? [
          `## ${isPortuguese ? "Redes sociais" : "Social media"}`,
          paragraphs(project.socialMediaText),
        ]
      : null,
    project.videoCampaignText
      ? [
          `## ${isPortuguese ? "Campanha de vídeo" : "Video campaign"}`,
          paragraphs(project.videoCampaignText),
        ]
      : null,
    project.storyText
      ? [
          `## ${isPortuguese ? "História" : "Story"}`,
          paragraphs(project.storyText),
        ]
      : null,
  ]
    .filter((section): section is string[] => Boolean(section))
    .flat();

  return [
    `# ${project.title}`,
    project.intro ?? project.summary,
    `## ${isPortuguese ? "Sobre o projeto" : "About the project"}`,
    paragraphs(project.description ?? project.summary),
    `## ${isPortuguese ? "Responsabilidades" : "Responsibilities"}`,
    project.services.map((service) => `- ${service}`).join("\n"),
    ...sections,
    ...(project.reflection
      ? [
          `## ${isPortuguese ? "Reflexão" : "Reflection"}`,
          project.reflection,
        ]
      : []),
    `## ${isPortuguese ? "Créditos" : "Credits"}`,
    projectCredits(project, language).join("\n"),
    `## ${isPortuguese ? "Links" : "Links"}`,
    `- ${markdownLink(isPortuguese ? "Página canónica" : "Canonical page", projectUrl(project, language))}`,
    `- ${markdownLink(isPortuguese ? "Todos os projetos" : "All projects", absoluteUrl(localizeHref("/projects", language)))}`,
    `- ${markdownLink(isPortuguese ? "Contactar Alexandra" : "Contact Alexandra", `mailto:${CONTACT_EMAIL}`)}`,
  ].join("\n\n");
};

export const parseMarkdownResource = (
  pathname: string,
): MarkdownResource | null => {
  const segments = pathname.split("/").filter(Boolean);
  const [language, collection, slug, ...rest] = segments;

  if (!language || !isLanguage(language) || rest.length > 0) return null;
  if (!collection) return { kind: "home", language };

  const expectedCollection = language === "pt" ? "projetos" : "projects";
  if (collection !== expectedCollection) return null;
  if (!slug) return { kind: "projects", language };
  if (!getProject(slug)) return null;

  return { kind: "project", language, slug };
};

export const renderMarkdown = (resource: MarkdownResource) => {
  const body =
    resource.kind === "home"
      ? renderHome(resource.language)
      : resource.kind === "projects"
        ? renderProjects(resource.language)
        : renderProject(getProject(resource.slug)!, resource.language);

  return `${body.trim()}\n`;
};

export const acceptsMarkdown = (acceptHeader: string | null) => {
  if (!acceptHeader) return false;

  return acceptHeader.split(",").some((entry) => {
    const [mediaType, ...parameters] = entry
      .trim()
      .toLowerCase()
      .split(";")
      .map((part) => part.trim());
    if (mediaType !== "text/markdown") return false;

    const quality = parameters.find((parameter) => parameter.startsWith("q="));
    if (!quality) return true;

    const value = Number.parseFloat(quality.slice(2));
    return Number.isFinite(value) && value > 0;
  });
};

export const markdownResponseHeaders = (language: Language) =>
  new Headers({
    "Cache-Control": "public, max-age=0, s-maxage=86400",
    "Content-Language": language === "pt" ? "pt-PT" : "en",
    "Content-Type": "text/markdown; charset=utf-8",
    Vary: "Accept",
  });
