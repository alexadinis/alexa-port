"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Button from "../Button/Button";
import { useLanguage } from "../Language/LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();
  return (
    <Button
      size="lg"
      className="hero-talk-button group/button mt-3 flex w-full min-h-14 max-w-none items-center justify-center gap-2 overflow-hidden whitespace-nowrap border-red text-red hover:bg-red hover:text-white md:w-max md:min-h-0 md:justify-start"
      onClick={() => {
        window.location.href = "mailto:hello@alexandrabarbosa.pt";
      }}
    >
      {language === "pt" ? "vamos falar?" : "let's talk"}
      <ArrowRight className="hero-talk-arrow h-6 w-6" />
    </Button>
  );
}
