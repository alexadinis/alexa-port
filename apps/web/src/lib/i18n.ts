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
 * Prefix an app-relative path with its language segment. The default language
 * has no prefix, so `/projects/x` stays put while `en` becomes `/en/projects/x`.
 */
export const localizeHref = (href: string, language: Language) => {
  if (language === DEFAULT_LANGUAGE) return href;
  if (!href.startsWith("/")) return href;
  return href === "/" ? `/${language}` : `/${language}${href}`;
};

/** The same page in the other language, for the language toggle. */
export const alternateLanguage = (language: Language): Language =>
  language === "pt" ? "en" : "pt";
