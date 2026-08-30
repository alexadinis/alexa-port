"use client";

import { type RefObject, useEffect, useState } from "react";

// Every project page renders the whole nine-project feed, so a video that is
// tens of thousands of pixels down the page costs exactly as much as one in
// view. Start loading a little before the element is reachable rather than at
// mount, so the file is ready by the time it is scrolled to.
const PRELOAD_MARGIN = "200% 0px";

/**
 * True once the element has come within roughly two viewports of the screen.
 * Never returns to false: once a video has been paid for, hiding it again
 * would only throw the bytes away.
 */
export function useNearViewport(ref: RefObject<HTMLElement | null>): boolean {
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const element = ref.current;

    // Without IntersectionObserver there is no way to know when the element is
    // reachable, so load everything rather than leave the page with dead video.
    if (!element || !("IntersectionObserver" in window)) {
      setIsNear(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setIsNear(true);
        observer.disconnect();
      },
      { rootMargin: PRELOAD_MARGIN },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return isNear;
}
