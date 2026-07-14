"use client";

import { useEffect, useRef, useState } from "react";

interface ProjectRevealProps {
  children: React.ReactNode;
  className?: string;
}

const ProjectReveal = ({ children, className = "" }: ProjectRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (
      !element ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    if (element.getBoundingClientRect().top <= window.innerHeight * 0.88)
      return;

    setIsWaiting(true);

    const reveal = () => setIsWaiting(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        reveal();
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    observer.observe(element);
    const fallback = window.setTimeout(reveal, 12000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${className} transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        isWaiting ? "translate-y-16 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {children}
    </div>
  );
};

export default ProjectReveal;
