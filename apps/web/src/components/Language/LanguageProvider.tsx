"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Language } from "../../lib/i18n";

export type { Language };

/**
 * The active language is decided by the route, not by client state, so each
 * language has its own indexable URL. This provider only carries that value
 * down to the components that render copy.
 */
const LanguageContext = createContext<Language | null>(null);

export function LanguageProvider({
  children,
  language,
}: {
  children: ReactNode;
  language: Language;
}) {
  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const language = useContext(LanguageContext);

  if (!language) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return { language };
}
