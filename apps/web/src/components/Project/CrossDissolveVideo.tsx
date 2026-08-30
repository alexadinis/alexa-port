"use client";

import Image from "next/image";
import { useState } from "react";

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
  const [isDissolving, setIsDissolving] = useState(false);

  return (
    <div className="relative size-full overflow-hidden">
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
        onTimeUpdate={(event) => {
          const video = event.currentTarget;
          const shouldDissolve =
            Number.isFinite(video.duration) &&
            video.duration - video.currentTime <= 0.7;
          setIsDissolving(shouldDissolve);
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
