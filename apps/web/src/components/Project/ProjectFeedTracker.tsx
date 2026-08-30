"use client";

import { useEffect } from "react";

export default function ProjectFeedTracker() {
  useEffect(() => {
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

    const observedSections = new Set<HTMLElement>();
    const observeProjectSections = () => {
      document
        .querySelectorAll<HTMLElement>("[data-project-slug]")
        .forEach((section) => {
          if (observedSections.has(section)) return;
          observedSections.add(section);
          observer.observe(section);
        });
    };

    observeProjectSections();

    const projectFeed = document.querySelector("main");
    const mutationObserver = new MutationObserver(observeProjectSections);
    if (projectFeed) {
      mutationObserver.observe(projectFeed, { childList: true, subtree: true });
    }

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
