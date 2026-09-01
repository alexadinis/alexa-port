"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import Button from "../Button/Button";
import { useLanguage } from "../Language/LanguageProvider";
import { localizeHref } from "../../lib/i18n";

/**
 * The pair of actions under the copy. Mail is the point of the page, so it
 * is the only filled button; the projects link is the way down the page for
 * anyone not ready to write yet.
 */
export default function Footer() {
  const { language } = useLanguage();

  return (
    <div className="mt-2 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
      <Button
        size="lg"
        variant="solid"
        className="hero-talk-button bg-red flex min-h-14 w-full items-center justify-center gap-2 overflow-hidden whitespace-nowrap sm:w-max"
        onClick={() => {
          window.location.href = "mailto:hello@alexandrabarbosa.pt";
        }}
      >
        {language === "pt" ? "vamos falar?" : "let's talk"}
        <ArrowRight className="hero-talk-arrow h-6 w-6" />
      </Button>
      <Link
        href={localizeHref("/#work", language)}
        className="flex min-h-14 w-full items-center justify-center rounded-full border-2 border-black/25 px-8 py-3 text-lg font-medium text-black/70 transition-colors duration-300 hover:border-black/60 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black/60 sm:w-max"
      >
        {language === "pt" ? "ver projetos" : "see projects"}
      </Link>
    </div>
  );
}
