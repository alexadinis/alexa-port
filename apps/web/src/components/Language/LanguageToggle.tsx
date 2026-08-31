"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "./LanguageProvider";
import { Switch } from "../ui/Switch";
import {
  alternateLanguage,
  delocalizePathname,
  localizeHref,
} from "../../lib/i18n";

export default function LanguageToggle() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const isPortuguese = language === "pt";
  const target = alternateLanguage(language);
  const basePath = delocalizePathname(pathname, language);
  const targetHref = localizeHref(basePath, target);
  const accessibleLabel = isPortuguese
    ? "PT / EN — idioma atual: português; mudar para inglês"
    : "PT / EN — current language: English; switch to Portuguese";

  return (
    <div className="flex min-h-11 shrink-0 items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.04em]">
      <span
        aria-hidden="true"
        className={isPortuguese ? "opacity-100" : "opacity-60"}
      >
        PT
      </span>
      <Switch
        checked={!isPortuguese}
        onCheckedChange={() => router.push(targetHref)}
        aria-label={accessibleLabel}
        title={isPortuguese ? "Mudar para inglês" : "Switch to Portuguese"}
      />
      <span
        aria-hidden="true"
        className={isPortuguese ? "opacity-60" : "opacity-100"}
      >
        EN
      </span>
    </div>
  );
}
