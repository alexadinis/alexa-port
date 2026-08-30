export const LANGUAGES = ["pt", "en"] as const;

export type Language = (typeof LANGUAGES)[number];

/** Portuguese is the primary audience, so it is served unprefixed at the root. */
export const DEFAULT_LANGUAGE: Language = "pt";

/** BCP 47 tags, used for `<html lang>` and hreflang annotations. */
export const LOCALE_TAGS: Record<Language, string> = {
  pt: "pt-PT",
  en: "en",
};

export const isLanguage = (value: string): value is Language =>
  (LANGUAGES as readonly string[]).includes(value);

/**
 * Route segments spelled differently per language. Callers everywhere pass the
 * internal English form, which is the key; the value is what ships in the URL.
 */
const LOCALIZED_SEGMENTS: Record<string, Partial<Record<Language, string>>> = {
  projects: { pt: "projetos" },
};

/**
 * Turn an internal app-relative path into the URL for one language: translate
 * the leading segment, then prefix the language. The default language has no
 * prefix, so `/projects/x` becomes `/projetos/x` in Portuguese and
 * `/en/projects/x` in English.
 */
export const localizeHref = (href: string, language: Language) => {
  if (!href.startsWith("/")) return href;

  const prefix = language === DEFAULT_LANGUAGE ? "" : `/${language}`;
  if (href === "/") return prefix || "/";

  const [head = "", ...rest] = href.slice(1).split("/");
  const segment = LOCALIZED_SEGMENTS[head]?.[language] ?? head;

  return `${prefix}/${[segment, ...rest].join("/")}`;
};

/**
 * The inverse of `localizeHref`: recover the internal form from a real URL path
 * in `language`. Needed wherever a rendered pathname has to be re-localized,
 * because the segments no longer match across languages.
 */
export const internalizeHref = (pathname: string, language: Language) => {
  if (!pathname.startsWith("/")) return pathname;

  const unprefixed =
    language === DEFAULT_LANGUAGE
      ? pathname
      : pathname.replace(new RegExp(`^/${language}(?=/|$)`), "") || "/";
  if (unprefixed === "/") return "/";

  const [head = "", ...rest] = unprefixed.slice(1).split("/");
  const internal =
    Object.keys(LOCALIZED_SEGMENTS).find(
      (key) => LOCALIZED_SEGMENTS[key]?.[language] === head,
    ) ?? head;

  return `/${[internal, ...rest].join("/")}`;
};

/** The same page in the other language, for the language toggle. */
export const alternateLanguage = (language: Language): Language =>
  language === "pt" ? "en" : "pt";
