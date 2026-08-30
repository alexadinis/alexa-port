"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useNearViewport } from "../../utils/useNearViewport";

interface CrossDissolveVideoProps {
  src: string;
  poster: string;
  alt: string;
}

export default function CrossDissolveVideo({
  src,
  poster,
  alt,
}: CrossDissolveVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isNearViewport = useNearViewport(containerRef);
  const [isDissolving, setIsDissolving] = useState(false);

  return (
    <div ref={containerRef} className="relative size-full overflow-hidden">
      <Image
        src={poster}
        alt=""
        fill
        quality={95}
        sizes="(max-width: 639px) 100vw, 50vw"
        className="object-cover"
        aria-hidden="true"
      />
      <video
        className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ease-in-out ${
          isDissolving ? "opacity-0" : "opacity-100"
        }`}
        aria-label={alt}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
        src={isNearViewport ? src : undefined}
        onTimeUpdate={(event) => {
          const video = event.currentTarget;
          const shouldDissolve =
            Number.isFinite(video.duration) &&
            video.duration - video.currentTime <= 0.7;
          setIsDissolving(shouldDissolve);
        }}
      />
    </div>
  );
}
