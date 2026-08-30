"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const isPortuguese = language === "pt";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`Switch website language to ${isPortuguese ? "English" : "Português"}`}
      title={`Switch to ${isPortuguese ? "English" : "Português"}`}
      className={`relative flex h-8 w-[3.75rem] shrink-0 items-center rounded-full p-1 text-[0.65rem] font-semibold uppercase tracking-[0.04em] text-white transition-colors duration-300 before:absolute before:-inset-1.5 before:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow ${
        isPortuguese ? "bg-green" : "bg-blue"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute left-1 size-6 rounded-full bg-white transition-transform duration-300 ease-out ${
          isPortuguese ? "translate-x-0" : "translate-x-7"
        }`}
      />
      <span
        className={`relative z-10 w-full transition-[padding] duration-300 ease-out ${
          isPortuguese ? "pl-7 text-center" : "pr-7 text-center"
        }`}
      >
        {isPortuguese ? "PT" : "EN"}
      </span>
    </button>
  );
}
