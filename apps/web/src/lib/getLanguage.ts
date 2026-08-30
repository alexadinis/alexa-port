import "server-only";

import { cookies } from "next/headers";
import type { Language } from "../components/Language/LanguageProvider";

export async function getLanguage(): Promise<Language> {
  const value = (await cookies()).get("portfolio-language")?.value;
  return value === "pt" ? "pt" : "en";
}
