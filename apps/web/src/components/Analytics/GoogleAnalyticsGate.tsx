"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useAnalyticsConsent } from "../../lib/consent";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const GoogleAnalyticsGate = () => {
  const consent = useAnalyticsConsent();

  if (!measurementId || consent !== "granted") return null;

  return <GoogleAnalytics gaId={measurementId} />;
};

export default GoogleAnalyticsGate;
