import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "../src/components/Navbar/Navbar";
import { LanguageProvider } from "../src/components/Language/LanguageProvider";
import { getLanguage } from "../src/lib/getLanguage";

const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About me",
    href: "/#about",
  },
  {
    label: "Projects",
    href: "/#work",
  },
  {
    label: "Get in touch",
    href: "/#contact",
  },
];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Alexa Portfolio",
  description: "Alexa Portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = await getLanguage();

  return (
    <html lang={language === "pt" ? "pt-PT" : "en"}>
      <body className={poppins.className}>
        <LanguageProvider initialLanguage={language}>
          <Navbar navLinks={NAV_LINKS} />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
