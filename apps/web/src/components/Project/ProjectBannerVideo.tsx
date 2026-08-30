"use client";

import { useRef } from "react";
import { useNearViewport } from "../../utils/useNearViewport";

interface ProjectBannerVideoProps {
  src: string;
  poster?: string;
  title: string;
}

/**
 * The banner autoplays and loops, so it is its own component rather than
 * inline JSX: rendered inside the feed's map it could not hold the hook that
 * keeps it from looping forever while far off screen.
 */
export default function ProjectBannerVideo({
  src,
  poster,
  title,
}: ProjectBannerVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isNearViewport = useNearViewport(videoRef);

  return (
    <video
      ref={videoRef}
      className="size-full object-cover"
      aria-label={`${title} project banner`}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={poster}
      src={isNearViewport ? src : undefined}
    />
  );
}
