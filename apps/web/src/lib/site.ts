import { DEFAULT_LANGUAGE, LANGUAGES, localizeHref, type Language } from "./i18n";

/** Official public origin used by canonical URLs, sitemap and structured data. */
export const PRODUCTION_URL = "https://www.alexandrabarbosa.pt";

/**
 * Vercel exposes the deployment host but not a full URL, and previews need to
 * resolve their own origin so Open Graph images are not pinned to production.
 * The NEXT_PUBLIC_ variants are used so the value is identical on both sides
 * of the render.
 */
const resolveSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") return PRODUCTION_URL;
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.NEXT_PUBLIC_VERCEL_URL)
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  return "http://localhost:3000";
};

export const SITE_URL = resolveSiteUrl();

export const SITE_NAME = "Alexandra Barbosa";

export const SOCIAL_PROFILES = [
  "https://linkedin.com/in/alexadinis",
  "https://behance.net/alexadinis",
  "https://www.instagram.com/alexandrabarbosa.pt/",
];

export const CONTACT_EMAIL = "hello@alexandrabarbosa.pt";

export const SITE_COPY: Record<
  Language,
  { title: string; tagline: string; description: string; jobTitle: string }
> = {
  pt: {
    title: "Alexandra B. | Especialista Social Media & Design | Porto",
    tagline: "Gestão de redes sociais, conteúdo e design",
    description:
      "Social media manager e designer no Porto com +7 anos de experiência. Já trabalhei com marcas como KFC, Endesa, Cockburn’s e Munchie BK. Vê o portfólio.",
    jobTitle: "Gestora de redes sociais e designer",
  },
  en: {
    title: "Alexandra B. | Social Media & Design Specialist | Porto",
    tagline: "Social media management, content and design",
    description:
      "Social media manager and designer based in Porto with 7+ years of experience. Worked with brands like KFC, Endesa, Cockburn's and Munchie BK. See the portfolio.",
    jobTitle: "Social media manager and designer",
  },
};

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

/**
 * Canonical plus hreflang map for a page. `path` is the unprefixed (Portuguese)
 * path; the canonical is this language's own URL, and Portuguese doubles as
 * x-default since it is the primary audience.
 */
export const languageAlternates = (path: string, language: Language) => ({
  canonical: absoluteUrl(localizeHref(path, language)),
  languages: {
    ...Object.fromEntries(
      LANGUAGES.map((language) => [
        language === "pt" ? "pt-PT" : language,
        absoluteUrl(localizeHref(path, language)),
      ]),
    ),
    "x-default": absoluteUrl(localizeHref(path, DEFAULT_LANGUAGE)),
  },
});

/**
 * Default social card. Page-level `openGraph` replaces the layout's object
 * wholesale rather than merging, so every page that sets one must re-declare
 * its image.
 */
export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Alexandra Barbosa — social media and design portfolio",
};
