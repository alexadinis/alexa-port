"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageToggle from "../Language/LanguageToggle";
import { useLanguage } from "../Language/LanguageProvider";
import { localizeHref } from "../../lib/i18n";
import WalkingLogo from "./WalkingLogo";

interface NavLink {
  label: string;
  href: string;
}

const PORTUGUESE_NAV_LABELS: Record<string, string> = {
  Home: "Início",
  "About me": "Sobre mim",
  Projects: "Projetos",
  "Get in touch": "Fala comigo",
};

interface NavbarProps {
  navLinks: NavLink[];
}

const Navbar = ({ navLinks }: NavbarProps) => {
  const { language } = useLanguage();
  const [isWorkActive, setIsWorkActive] = useState(false);

  useEffect(() => {
    const workSection = document.getElementById("work");
    if (!workSection) return;

    let frame: number | null = null;
    const updateNavbarTheme = () => {
      const bounds = workSection.getBoundingClientRect();
      setIsWorkActive(bounds.top <= 64 && bounds.bottom > 64);
      frame = null;
    };
    const scheduleUpdate = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(updateNavbarTheme);
      }
    };

    updateNavbarTheme();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav className={`main-navbar main-navbar--${language} fixed top-0 right-0 left-0 z-20 flex h-16 items-center justify-between px-4 transition-colors duration-300 sm:px-6 ${isWorkActive ? "bg-black text-white" : "bg-white text-black"}`}>
      <Link
        href={localizeHref("/#home", language)}
        aria-label={language === "pt" ? "Ir para a página inicial" : "Go to homepage"}
        className={`block w-max shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 ${language === "pt" ? "focus-visible:outline-green" : "focus-visible:outline-blue"}`}
      >
        <WalkingLogo inverted={isWorkActive} />
      </Link>
      <div className="flex items-center gap-3 md:gap-6">
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const label =
              language === "pt"
                ? (PORTUGUESE_NAV_LABELS[link.label] ?? link.label)
                : link.label;

            return (
              <Link
                key={link.href}
                href={localizeHref(link.href, language)}
                className={`nav-color-link py-3 focus-visible:outline-2 focus-visible:outline-offset-2 ${language === "pt" ? "focus-visible:outline-green" : "focus-visible:outline-blue"}`}
              >
                <span>{label.toLowerCase()}</span>
                <span className="nav-color-link-accent" aria-hidden="true">
                  {label.toLowerCase()}
                </span>
              </Link>
            );
          })}
        </div>
        <span className="hidden text-current opacity-55 md:block" aria-hidden="true">
          |
        </span>
        <LanguageToggle />
      </div>
    </nav>
  );
};

export default Navbar;
