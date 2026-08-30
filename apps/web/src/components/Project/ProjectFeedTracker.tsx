"use client";

import { useEffect } from "react";

export default function ProjectFeedTracker() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-project-slug]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const slug = (visible?.target as HTMLElement | undefined)?.dataset
          .projectSlug;

        if (!slug || window.location.pathname.endsWith(`/${slug}`)) return;
        window.history.replaceState(null, "", `/projects/${slug}`);
      },
      { rootMargin: "-18% 0px -62%", threshold: [0, 0.1, 0.25] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
