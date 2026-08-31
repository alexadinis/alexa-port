export const LANGUAGES = ["pt", "en"] as const;

export type Language = (typeof LANGUAGES)[number];

/** Portuguese is the primary audience and the x-default SEO language. */
export const DEFAULT_LANGUAGE: Language = "pt";

/** BCP 47 tags, used for `<html lang>` and hreflang annotations. */
export const LOCALE_TAGS: Record<Language, string> = {
  pt: "pt-PT",
  en: "en",
};

export const isLanguage = (value: string): value is Language =>
  (LANGUAGES as readonly string[]).includes(value);

/** Convert a shared, English-shaped route into its localized public URL. */
export const localizeHref = (href: string, language: Language) => {
  if (!href.startsWith("/")) return href;

  const [path = "/", fragment] = href.split("#", 2);
  const localizedPath =
    language === "pt"
      ? path.replace(/^\/projects(?=\/|$)/, "/projetos")
      : path;
  const suffix = fragment === undefined ? "" : `#${fragment}`;

  return localizedPath === "/"
    ? `/${language}${suffix}`
    : `/${language}${localizedPath}${suffix}`;
};

/** Reduce a localized browser pathname back to the shared route shape. */
export const delocalizePathname = (pathname: string, language: Language) => {
  const withoutLanguage =
    pathname.replace(new RegExp(`^/${language}(?=/|$)`), "") || "/";

  return language === "pt"
    ? withoutLanguage.replace(/^\/projetos(?=\/|$)/, "/projects")
    : withoutLanguage;
};

/** The same page in the other language, for the language toggle. */
export const alternateLanguage = (language: Language): Language =>
  language === "pt" ? "en" : "pt";
