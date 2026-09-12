"use client";

import {
  clearGoogleCookies,
  useAnalyticsConsent,
  writeConsent,
} from "../../lib/consent";
import Button from "../Button/Button";
import { useLanguage } from "../Language/LanguageProvider";

const ConsentControls = () => {
  const { language } = useLanguage();
  const consent = useAnalyticsConsent();
  const pt = language === "pt";
  const granted = consent === "granted";

  const status = granted
    ? pt
      ? "aceite"
      : "accepted"
    : consent === "denied"
      ? pt
        ? "recusado"
        : "declined"
      : pt
        ? "sem resposta"
        : "no response";

  const handleConsent = () => {
    if (granted) {
      writeConsent("denied");
      clearGoogleCookies();
      return;
    }

    writeConsent("granted");
  };

  return (
    <div className="mt-6 rounded-[16px] border border-white/20 p-5">
      <p className="text-sm text-white/70">
        {pt ? "Estado atual" : "Current status"}: {status}
      </p>
      <Button
        type="button"
        size="sm"
        onClick={handleConsent}
        className="mt-4 border-white text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
      >
        {granted
          ? pt
            ? "Retirar consentimento"
            : "Withdraw consent"
          : pt
            ? "Aceitar cookies de analytics"
            : "Accept analytics cookies"}
      </Button>
    </div>
  );
};

export default ConsentControls;
