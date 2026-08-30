"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

export type Language = "pt" | "en";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const LANGUAGE_STORAGE_KEY = "portfolio-language";

export function LanguageProvider({
  children,
  initialLanguage = "en",
}: {
  children: ReactNode;
  initialLanguage?: Language;
}) {
  const router = useRouter();
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-PT" : "en";
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.cookie = `${LANGUAGE_STORAGE_KEY}=${language}; path=/; max-age=31536000; samesite=lax`;
  }, [language]);

  const setLanguage = useCallback(
    (nextLanguage: Language) => {
      setLanguageState(nextLanguage);
      document.cookie = `${LANGUAGE_STORAGE_KEY}=${nextLanguage}; path=/; max-age=31536000; samesite=lax`;
      router.refresh();
    },
    [router],
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "pt" ? "en" : "pt"),
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
