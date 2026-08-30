"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

interface WalkingLogoProps {
  showName?: boolean;
  className?: string;
  markClassName?: string;
  inverted?: boolean;
  trackingAreaId?: string;
}

const RESTING_PUPIL = { x: 582.21, y: 358.75 };

export default function WalkingLogo({
  showName = true,
  className = "",
  markClassName = "",
  inverted = false,
  trackingAreaId,
}: WalkingLogoProps) {
  const logoRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<SVGSVGElement>(null);
  const pupilRef = useRef<SVGCircleElement>(null);
  const pupilPositionRef = useRef(RESTING_PUPIL);
  const pupilTargetRef = useRef(RESTING_PUPIL);
  const pupilFrameRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const logo = logoRef.current;

    if (!logo || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(Boolean(entry?.isIntersecting)),
      { threshold: 0.1 },
    );

    observer.observe(logo);
    return () => {
      observer.disconnect();
      if (pupilFrameRef.current !== null) {
        window.cancelAnimationFrame(pupilFrameRef.current);
      }
    };
  }, []);

  // Every one of these reads and writes refs only, so an empty dependency
  // list is honest: they never need to be rebuilt.
  const animatePupil = useCallback(function step() {
    const current = pupilPositionRef.current;
    const target = pupilTargetRef.current;
    const next = {
      x: current.x + (target.x - current.x) * 0.14,
      y: current.y + (target.y - current.y) * 0.14,
    };

    pupilPositionRef.current = next;
    pupilRef.current?.setAttribute("cx", next.x.toFixed(2));
    pupilRef.current?.setAttribute("cy", next.y.toFixed(2));

    if (
      Math.abs(target.x - next.x) > 0.08 ||
      Math.abs(target.y - next.y) > 0.08
    ) {
      pupilFrameRef.current = window.requestAnimationFrame(step);
    } else {
      pupilPositionRef.current = target;
      pupilRef.current?.setAttribute("cx", target.x.toString());
      pupilRef.current?.setAttribute("cy", target.y.toString());
      pupilFrameRef.current = null;
    }
  }, []);

  const movePupilTo = useCallback(
    (target: typeof RESTING_PUPIL) => {
      pupilTargetRef.current = target;

      if (pupilFrameRef.current === null) {
        pupilFrameRef.current = window.requestAnimationFrame(animatePupil);
      }
    },
    [animatePupil],
  );

  const followPointer = useCallback(
    (
      event:
        | Pick<PointerEvent, "clientX" | "clientY" | "pointerType">
        | ReactPointerEvent<HTMLDivElement>,
    ) => {
      if (event.pointerType === "touch") return;

      const mark = markRef.current;
      if (!mark) return;

      const bounds = mark.getBoundingClientRect();
      const normalizedX = Math.max(
        -1,
        Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2),
      );
      const normalizedY = Math.max(
        -1,
        Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2),
      );

      movePupilTo({
        x: 582.21 + normalizedX * 84,
        y: 396.87 + normalizedY * 20,
      });
    },
    [movePupilTo],
  );

  useEffect(() => {
    if (!trackingAreaId) return;

    const trackingArea = document.getElementById(trackingAreaId);
    if (!trackingArea) return;

    const resetPupil = () => movePupilTo(RESTING_PUPIL);
    const handlePointerMove = (event: PointerEvent) => {
      const selection = window.getSelection();
      if (selection && !selection.isCollapsed) {
        resetPupil();
        return;
      }

      followPointer(event);
    };
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      const anchorNode = selection?.anchorNode;

      if (
        selection &&
        !selection.isCollapsed &&
        anchorNode &&
        trackingArea.contains(anchorNode)
      ) {
        resetPupil();
      }
    };

    trackingArea.addEventListener("pointermove", handlePointerMove);
    trackingArea.addEventListener("pointerleave", resetPupil);
    trackingArea.addEventListener("pointerdown", resetPupil);
    document.addEventListener("selectionchange", handleSelectionChange);

    return () => {
      trackingArea.removeEventListener("pointermove", handlePointerMove);
      trackingArea.removeEventListener("pointerleave", resetPupil);
      trackingArea.removeEventListener("pointerdown", resetPupil);
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, [trackingAreaId, followPointer, movePupilTo]);

  return (
    <div
      ref={logoRef}
      className={`walking-logo ${isVisible ? "walking-logo--active" : ""} flex w-max items-center gap-2.5 ${className}`}
      onPointerMove={trackingAreaId ? undefined : followPointer}
      onPointerLeave={
        trackingAreaId ? undefined : () => movePupilTo(RESTING_PUPIL)
      }
    >
      <svg
        ref={markRef}
        viewBox="0 0 1168.5 1080"
        className={`walking-logo-character shrink-0 ${markClassName || "size-11 sm:size-12"}`}
        aria-hidden="true"
      >
        <g className="walking-logo-left-leg">
          <path
            fill="currentColor"
            d="M528.34,919.64l-35.86-8.35c-19.59-4.56-31.77-24.15-27.21-43.74l57.81-248.15c4.56-19.59-7.62-39.17-27.21-43.74l-17.44-4.06c-19.59-4.56-39.17,7.62-43.74,27.21l-77.15,331.18c-4.56,19.59,7.62,39.17,27.21,43.74l26.53,6.18,26.38,6.15,71.34,16.62c22.83,5.32,45.87-9.01,51.19-31.84,5.32-22.83-9.01-45.87-31.84-51.19Z"
          />
        </g>
        <g className="walking-logo-body">
          <path
            fill="currentColor"
            d="M592.72,82.57l60.87,115.82,117.33-57.92c8.57-4.23,18.37,2.89,16.99,12.35l-18.83,129.48,128.97,22.1c9.42,1.61,13.16,13.13,6.49,19.98l-91.34,93.69,91.34,93.69c6.67,6.84,2.93,18.36-6.49,19.98l-128.97,22.1,18.83,129.48c1.38,9.46-8.42,16.58-16.99,12.35l-117.33-57.92-60.87,115.82c-4.45,8.46-16.56,8.46-21,0l-60.87-115.82-117.33,57.92c-8.57,4.23-18.37-2.89-16.99-12.35l18.83-129.48-128.97-22.1c-9.42-1.61-13.16-13.13-6.49-19.98l91.34-93.69-91.34-93.69c-6.67-6.84-2.93-18.36,6.49-19.98l128.97-22.1-18.83-129.48c-1.38-9.46,8.42-16.58,16.99-12.35l117.33,57.92,60.87-115.82c4.45-8.46,16.56-8.46,21,0Z"
          />
          <ellipse
            fill={inverted ? "#101010" : "#ececec"}
            cx="582.21"
            cy="396.87"
            rx="141.78"
            ry="67.27"
          />
          <circle
            ref={pupilRef}
            fill="currentColor"
            cx={RESTING_PUPIL.x}
            cy={RESTING_PUPIL.y}
            r="55.58"
          />
        </g>
        <g className="walking-logo-right-leg">
          <path
            fill="currentColor"
            d="M861.85,890.6l-36.12,6.57c-19.73,3.59-38.65-9.55-42.25-29.35l-45.62-250.78c-3.6-19.8-22.52-32.94-42.25-29.35l-17.56,3.2c-19.73,3.59-32.81,22.55-29.21,42.35l60.89,334.69c3.6,19.8,22.52,32.94,42.25,29.35l26.72-4.86,26.57-4.83,71.85-13.07c23-4.18,38.38-26.49,34.18-49.56-4.2-23.08-26.45-38.53-49.45-34.35Z"
          />
        </g>
      </svg>
      {showName && (
        <span className="whitespace-nowrap text-base font-bold tracking-[-0.03em] text-current sm:text-lg">
          alexandra barbosa.
        </span>
      )}
    </div>
  );
}
