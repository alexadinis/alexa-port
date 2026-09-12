"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAnalyticsConsent, writeConsent } from "../../lib/consent";
import { localizeHref } from "../../lib/i18n";
import Button from "../Button/Button";
import { useLanguage } from "../Language/LanguageProvider";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const CookieBanner = () => {
  const { language } = useLanguage();
  const pathname = usePathname();
  const consent = useAnalyticsConsent();
  const privacyHref = localizeHref("/privacy", language);

  if (!measurementId || consent !== null || pathname === privacyHref) {
    return null;
  }

  const pt = language === "pt";

  return (
    <aside
      role="region"
      aria-label="Cookies"
      className="fixed inset-x-0 bottom-0 z-40 rounded-t-[24px] border border-white/20 bg-black p-5 text-white shadow-[0_-12px_40px_rgba(0,0,0,0.35)] sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-[min(24rem,calc(100vw-3rem))] sm:rounded-[24px] sm:shadow-2xl"
    >
      <h2 className="text-lg font-semibold">
        {pt ? "Cookies de analytics" : "Analytics cookies"}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-white/75">
        {pt
          ? "Usamos o Google Analytics para perceber que páginas são vistas. Só é ativado se aceitares."
          : "We use Google Analytics to see which pages are viewed. It only runs if you accept."}
      </p>

      <div className="mt-5 flex gap-3">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => writeConsent("granted")}
          className="flex-1 border-yellow bg-yellow text-black hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
        >
          {pt ? "Aceitar" : "Accept"}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => writeConsent("denied")}
          className="flex-1 border-white text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {pt ? "Recusar" : "Decline"}
        </Button>
      </div>

      <Link
        href={privacyHref}
        className="mt-4 inline-block text-sm underline decoration-white/40 underline-offset-4 transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
      >
        {pt ? "Política de privacidade" : "Privacy policy"}
      </Link>
    </aside>
  );
};

export default CookieBanner;
