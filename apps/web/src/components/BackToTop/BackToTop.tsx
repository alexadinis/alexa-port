"use client";

import { useEffect, useState } from "react";
import type { Language } from "../../lib/i18n";

const HERO_TOP_OFFSET = 64;

export default function BackToTop({ language }: { language: Language }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-banner");
    if (!hero) return;
    let frame: number | null = null;

    const updateFromBounds = () => {
      frame = null;
      setIsVisible(hero.getBoundingClientRect().bottom <= HERO_TOP_OFFSET);
    };

    const scheduleUpdate = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(updateFromBounds);
      }
    };

    updateFromBounds();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={language === "pt" ? "Voltar ao topo" : "Back to top"}
      tabIndex={isVisible ? 0 : -1}
      className={`go-to-top fixed right-4 bottom-4 z-30 size-[3.25rem] text-yellow transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red sm:right-6 sm:bottom-6 sm:size-[3.75rem] ${
        isVisible
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-5 scale-75 opacity-0"
      }`}
    >
      <svg
        viewBox="230 55 705 705"
        className="size-full overflow-visible"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M592.72,82.57l60.87,115.82,117.33-57.92c8.57-4.23,18.37,2.89,16.99,12.35l-18.83,129.48,128.97,22.1c9.42,1.61,13.16,13.13,6.49,19.98l-91.34,93.69,91.34,93.69c6.67,6.84,2.93,18.36-6.49,19.98l-128.97,22.1,18.83,129.48c1.38,9.46-8.42,16.58-16.99,12.35l-117.33-57.92-60.87,115.82c-4.45,8.46-16.56,8.46-21,0l-60.87-115.82-117.33,57.92c-8.57,4.23-18.37-2.89-16.99-12.35l18.83-129.48-128.97-22.1c-9.42-1.61-13.16-13.13-6.49-19.98l91.34-93.69-91.34-93.69c-6.67-6.84-2.93-18.36,6.49-19.98l128.97-22.1-18.83-129.48c-1.38-9.46,8.42-16.58,16.99-12.35l117.33,57.92,60.87-115.82c4.45-8.46,16.56-8.46,21,0Z"
        />
        <ellipse
          fill="#ececec"
          cx="582.21"
          cy="396.87"
          rx="141.78"
          ry="67.27"
        />
        <path
          className="go-to-top-arrow"
          fill="none"
          stroke="#101010"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="25"
          d="m535 399 47-47 47 47M582 354v88"
        />
      </svg>
    </button>
  );
}
