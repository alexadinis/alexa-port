"use client";

import { Paytone_One } from "next/font/google";
import ContactFormTrigger from "./ContactFormTrigger";
import { useLanguage } from "../Language/LanguageProvider";

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/alexadinis",
  },
  {
    label: "Behance",
    href: "https://behance.net/alexadinis",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/alexandrabarbosa.pt/",
  },
];

const Contact = () => {
  const { language } = useLanguage();
  return (
    <section
      id="contact"
      className="relative w-full scroll-mt-20 overflow-hidden bg-black text-white"
    >
      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col px-6 pt-24 sm:px-10 md:px-16 md:pt-28 lg:px-24">
        <div className="flex flex-col gap-8 pb-8 md:gap-10 md:pb-10">
          <div>
            <p className="max-w-[62ch] text-base leading-relaxed text-white/75 md:text-lg">
              {language === "pt" ? <>Pronto, é isto.<br /><span className="sm:whitespace-nowrap">Queres trabalhar comigo ou só dizer olá? <span className="contact-rainbow-text">Vamos a isso.</span></span></> : <>And that&apos;s a wrap!<br />Wanna work together or just say hi? <span className="contact-rainbow-text">Hit me up.</span></>}
            </p>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12">
            <div className="flex min-w-0 flex-col gap-8 md:gap-10">
              <h2
                className={`${paytoneOne.className} text-[clamp(4rem,11vw,6rem)] leading-[0.88] tracking-[-0.03em]`}
              >
                {language === "pt" ? "Fala comigo." : "Get in touch."}
              </h2>
              <a
                href="mailto:alexandra.dn.barbosa@gmail.com"
                className="max-w-max text-[clamp(1rem,1.8vw,1.75rem)] font-semibold leading-tight tracking-[-0.02em] [overflow-wrap:anywhere] decoration-2 underline-offset-[0.16em] hover:underline"
              >
                alexandra.dn.barbosa@gmail.com
              </a>
            </div>
            <ContactFormTrigger />
          </div>
        </div>

        <footer className="grid gap-3 border-t border-white/30 py-3 text-xs sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <p>© {new Date().getFullYear()} alexadinis</p>

          <nav
            aria-label="Social media"
            className="flex flex-wrap gap-x-4 gap-y-1 lg:justify-center"
          >
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-color-link footer-color-link py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
              >
                <span>{link.label}</span>
                <span className="nav-color-link-accent" aria-hidden="true">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <p className="sm:text-right">
            {language === "pt" ? "Design e desenvolvimento por alexadinis" : "Designed & developed by alexadinis"}
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
