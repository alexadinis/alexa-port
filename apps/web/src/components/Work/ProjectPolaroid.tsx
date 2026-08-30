"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import type { Project } from "../../data/projects";
import BrandEyeMark from "../../icons/BrandEyeMark";
import { useLanguage } from "../Language/LanguageProvider";
import { localizeHref } from "../../lib/i18n";

interface ProjectPolaroidProps {
  project: Project;
  accent: string;
  titleFontClassName: string;
}

const ProjectPolaroid = ({
  project,
  accent,
  titleFontClassName,
}: ProjectPolaroidProps) => {
  const { language } = useLanguage();
  const badgeRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const reduceMotionRef = useRef(false);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const renderBadgePosition = () => {
    const badge = badgeRef.current;

    if (!badge) return;

    badge.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;
  };

  const animateBadge = () => {
    const position = positionRef.current;
    const target = targetRef.current;

    position.x += (target.x - position.x) * 0.18;
    position.y += (target.y - position.y) * 0.18;
    renderBadgePosition();

    if (
      Math.abs(target.x - position.x) > 0.15 ||
      Math.abs(target.y - position.y) > 0.15
    ) {
      frameRef.current = window.requestAnimationFrame(animateBadge);
    } else {
      position.x = target.x;
      position.y = target.y;
      renderBadgePosition();
      frameRef.current = null;
    }
  };

  const updateTarget = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    targetRef.current = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };
  };

  const handlePointerEnter = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();

    if (reduceMotionRef.current) {
      positionRef.current = { x: bounds.width / 2, y: bounds.height / 2 };
      targetRef.current = positionRef.current;
    } else {
      updateTarget(event);
      positionRef.current = { ...targetRef.current };
    }

    renderBadgePosition();
    setIsHovering(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === "touch" || reduceMotionRef.current) return;

    updateTarget(event);

    if (frameRef.current === null) {
      frameRef.current = window.requestAnimationFrame(animateBadge);
    }
  };

  return (
    <Link
      href={localizeHref(`/projects/${project.slug}`, language)}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setIsHovering(false)}
      style={{ "--project-accent": accent } as CSSProperties}
      className="project-polaroid group relative flex h-full min-w-0 flex-col rounded-2xl border border-black/25 bg-[#ffffff] p-2 pb-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#ffffff]">
        <Image
          src={project.thumbnail ?? project.image}
          alt={`${project.title} project preview`}
          fill
          quality={95}
          unoptimized={project.slug === "padaria-alianca"}
          sizes="(max-width: 639px) calc(100vw - 64px), (max-width: 767px) calc((100vw - 136px) / 2), (max-width: 895px) calc((100vw - 184px) / 2), (max-width: 1279px) 356px, (max-width: 1343px) calc((100vw - 288px) / 3), 352px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 px-2 pt-3 pb-4">
        <div className="flex items-start gap-3">
          <h3
            className={`${titleFontClassName} project-polaroid-title text-lg leading-[1.05] tracking-[-0.02em] sm:text-xl`}
          >
            {project.title}
          </h3>
        </div>
        <p className="max-w-[58ch] whitespace-pre-line text-sm font-normal leading-relaxed text-black/70">
          {project.summary}
        </p>
      </div>

      <span
        ref={badgeRef}
        aria-hidden="true"
        className={`project-quick-peek pointer-events-none absolute top-0 left-0 z-10 hidden items-center gap-2 rounded-lg bg-yellow px-3 py-2 text-xs font-semibold text-white transition-opacity duration-200 md:flex ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
      >
        <BrandEyeMark className="size-5 shrink-0" />
        {language === "pt" ? "dá uma espreitadela" : "quick peek"}
      </span>
    </Link>
  );
};

export default ProjectPolaroid;
