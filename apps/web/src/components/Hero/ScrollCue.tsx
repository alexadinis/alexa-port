"use client";

import { CaretDown } from "@phosphor-icons/react";
import Link from "next/link";
import { useLanguage } from "../Language/LanguageProvider";
import { localizeHref } from "../../lib/i18n";

/**
 * Mobile-only affordance pinned to the bottom of the hero card. The card
 * now ends exactly at the fold, so without this nothing signals that the
 * page continues.
 */
export default function ScrollCue() {
  const { language } = useLanguage();

  return (
    <Link
      href={localizeHref("/#work", language)}
      className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.06em] text-black/45 md:hidden"
    >
      {language === "pt" ? "ver projetos" : "see projects"}
      <CaretDown className="h-4 w-4" aria-hidden />
    </Link>
  );
}
