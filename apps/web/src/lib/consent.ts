"use client";

import { useSyncExternalStore } from "react";

export type AnalyticsConsent = "granted" | "denied";

const CONSENT_STORAGE_KEY = "analytics-consent";
const CONSENT_CHANGE_EVENT = "analytics-consent-change";
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type StoredConsent = {
  value: AnalyticsConsent;
  at: number;
};

const isAnalyticsConsent = (value: unknown): value is AnalyticsConsent =>
  value === "granted" || value === "denied";

export const readConsent = (): AnalyticsConsent | null => {
  if (typeof window === "undefined") return null;

  try {
    const storedValue = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!storedValue) return null;

    const parsed = JSON.parse(storedValue) as Partial<StoredConsent>;
    if (!isAnalyticsConsent(parsed.value) || typeof parsed.at !== "number") {
      return null;
    }

    if (Date.now() - parsed.at > CONSENT_MAX_AGE_MS) return null;

    return parsed.value;
  } catch {
    return null;
  }
};

const dispatchConsentChange = (value: AnalyticsConsent | null) => {
  window.dispatchEvent(
    new CustomEvent<AnalyticsConsent | null>(CONSENT_CHANGE_EVENT, {
      detail: value,
    }),
  );
};

const setGoogleAnalyticsDisabled = (disabled: boolean) => {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;

  const analyticsWindow = window as unknown as Record<string, boolean>;
  analyticsWindow[`ga-disable-${GA_MEASUREMENT_ID}`] = disabled;
};

export const writeConsent = (value: AnalyticsConsent) => {
  if (typeof window === "undefined") return;

  setGoogleAnalyticsDisabled(value !== "granted");

  try {
    const storedConsent: StoredConsent = { value, at: Date.now() };
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify(storedConsent),
    );
    dispatchConsentChange(value);
  } catch {
    // Storage can be unavailable in private or restricted browsing contexts.
  }
};

export const clearConsent = () => {
  if (typeof window === "undefined") return;

  setGoogleAnalyticsDisabled(true);

  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
    dispatchConsentChange(null);
  } catch {
    // Clearing consent is best-effort when browser storage is unavailable.
  }
};

export const clearGoogleCookies = () => {
  if (typeof document === "undefined") return;

  try {
    const cookieNames = document.cookie
      .split(";")
      .map((cookie) => cookie.trim().split("=", 1)[0] ?? "")
      .filter((name) => name === "_ga" || name.startsWith("_ga_"));
    const domains = [undefined, window.location.hostname, ".alexandrabarbosa.pt"];

    for (const name of cookieNames) {
      for (const domain of domains) {
        const domainAttribute = domain ? `; Domain=${domain}` : "";
        document.cookie = `${name}=; Max-Age=0; Path=/${domainAttribute}; SameSite=Lax`;
      }
    }
  } catch {
    // Cookie removal is best-effort in browsers that restrict cookie access.
  }
};

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
  return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
};

const getServerSnapshot = () => null;

export const useAnalyticsConsent = () =>
  useSyncExternalStore(subscribe, readConsent, getServerSnapshot);
