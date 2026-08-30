"use client";

import { useEffect, useState } from "react";

export default function ProjectScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-project-slug]"),
      );
      const viewportMarker = window.scrollY + window.innerHeight * 0.2;
      const activeSection =
        sections.find((section) => {
          const top = section.offsetTop;
          return (
            viewportMarker >= top && viewportMarker < top + section.offsetHeight
          );
        }) ?? sections.at(-1);

      if (!activeSection) {
        setProgress(0);
        return;
      }

      const sectionStart = activeSection.offsetTop;
      const sectionScrollableHeight = Math.max(
        activeSection.offsetHeight - window.innerHeight,
        1,
      );
      const nextProgress =
        (window.scrollY - sectionStart) / sectionScrollableHeight;

      setProgress(Math.min(Math.max(nextProgress, 0), 1));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-30 h-1 bg-white/10"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left transition-transform duration-100 ease-out motion-reduce:transition-none"
        style={{
          transform: `scaleX(${progress})`,
          backgroundImage:
            "linear-gradient(90deg, var(--color-blue), var(--color-green), var(--color-yellow), var(--color-red), var(--color-pink))",
        }}
      />
    </div>
  );
}
