import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import { LanguageProvider } from "../components/Language/LanguageProvider";
import { LOCALE_TAGS, localizeHref, type Language } from "../lib/i18n";
import {
  absoluteUrl,
  CONTACT_EMAIL,
  SITE_COPY,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  OG_IMAGE,
} from "../lib/site";

const KNOWS_ABOUT = [
  "Social media management",
  "Content creation",
  "Social media strategy",
  "Copywriting",
  "Community management",
  "Paid media",
  "Analytics and reporting",
  "Graphic design",
  "Branding and art direction",
  "Photography and video",
  "Audiovisual editing",
];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Navbar translates these labels itself; the hrefs get their language prefix
// there too, from the active language.
const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About me", href: "/#about" },
  { label: "Projects", href: "/#work" },
  { label: "Get in touch", href: "/#contact" },
];

/** Metadata shared by both language trees; pages add their own canonical. */
export const buildRootMetadata = (language: Language): Metadata => {
  const copy = SITE_COPY[language];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: copy.title,
      template: `%s | ${SITE_NAME}`,
    },
    description: copy.description,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: LOCALE_TAGS[language].replace("-", "_"),
      title: copy.title,
      description: copy.description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [OG_IMAGE.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
};

/**
 * Each language tree is its own root layout, so `<html lang>` is correct in the
 * served HTML rather than being patched in after hydration.
 */
export default function RootShell({
  children,
  language,
}: {
  children: React.ReactNode;
  language: Language;
}) {
  const copy = SITE_COPY[language];

  const personId = absoluteUrl("/#person");
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: SITE_NAME,
        url: absoluteUrl(localizeHref("/", language)),
        email: `mailto:${CONTACT_EMAIL}`,
        jobTitle: copy.jobTitle,
        description: copy.description,
        image: absoluteUrl("/alexandra-barbosa.jpg"),
        knowsAbout: KNOWS_ABOUT,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Porto",
          addressCountry: "PT",
        },
        sameAs: SOCIAL_PROFILES,
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: ["pt-PT", "en"],
        author: { "@id": personId },
      },
    ],
  };

  return (
    <html lang={LOCALE_TAGS[language]}>
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LanguageProvider language={language}>
          <Navbar navLinks={NAV_LINKS} />
          {children}
        </LanguageProvider>
        {/* Both language trees render through this shell, so one mount covers
            /pt and /en. Cookieless, so it needs no consent banner. */}
        <Analytics />
      </body>
    </html>
  );
}
