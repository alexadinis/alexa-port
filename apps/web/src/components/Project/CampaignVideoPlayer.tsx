"use client";

import {
  ArrowsOut,
  Pause,
  Play,
  SpeakerHigh,
  SpeakerSlash,
} from "@phosphor-icons/react";
import { useRef, useState } from "react";
import BrandEyeMark from "../../icons/BrandEyeMark";
import { useNearViewport } from "../../utils/useNearViewport";
import { useLanguage } from "../Language/LanguageProvider";

interface CampaignVideoPlayerProps {
  src: string;
  title: string;
  poster: string;
}

const WAVEFORM_PATH =
  "M0 52 C18 52 18 38 34 38 S53 70 70 48 S91 31 109 49 S135 61 154 50 S180 42 198 54 S228 68 248 47 S277 25 299 52 S329 73 350 49 S382 31 405 51 S434 66 454 48 S484 37 507 54 S538 67 559 43 S589 22 610 51 S642 76 664 47 S697 29 719 53 S748 67 770 45 S800 24 822 50 S853 73 875 48 S907 34 927 52 S960 62 978 45 S992 51 1000 51";

export default function CampaignVideoPlayer({
  src,
  title,
  poster,
}: CampaignVideoPlayerProps) {
  const { language } = useLanguage();
  const playerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isNearViewport = useNearViewport(playerRef);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const playVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    setHasStarted(true);
    await video.play();
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await playVideo();
    } else {
      video.pause();
    }
  };

  const seekTo = (nextProgress: number) => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;

    video.currentTime = nextProgress * video.duration;
    setProgress(nextProgress);
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const enterFullscreen = async () => {
    await playerRef.current?.requestFullscreen();
  };

  return (
    <div ref={playerRef} className="campaign-video-player group relative aspect-video w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={isNearViewport ? src : undefined}
        className="size-full cursor-pointer object-cover"
        aria-label={title}
        playsInline
        preload="metadata"
        poster={poster}
        onClick={togglePlayback}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onTimeUpdate={(event) => {
          const video = event.currentTarget;
          if (Number.isFinite(video.duration) && video.duration > 0) {
            setProgress(video.currentTime / video.duration);
          }
        }}
      />

      {!hasStarted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/15">
          <button
            type="button"
            onClick={playVideo}
            className="group/play inline-flex min-h-12 cursor-pointer items-center gap-3 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-black transition-colors duration-300 hover:bg-yellow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <BrandEyeMark className="size-6 shrink-0" />
            {language === "pt" ? "Ver vídeo" : "Play video"}
          </button>
        </div>
      )}

      {hasStarted && (
        <div className="absolute inset-x-0 bottom-0 grid h-14 grid-cols-[3.5rem_minmax(0,1fr)_3.5rem_3.5rem] items-center bg-black/90 text-white md:h-16 md:grid-cols-[4rem_minmax(0,1fr)_4rem_4rem]">
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={
              isPlaying
                ? language === "pt"
                  ? "Pausar vídeo"
                  : "Pause video"
                : language === "pt"
                  ? "Reproduzir vídeo"
                  : "Play video"
            }
            className="flex size-full cursor-pointer items-center justify-center transition-colors hover:text-yellow focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-yellow"
          >
            {isPlaying ? (
              <Pause size={20} weight="fill" aria-hidden="true" />
            ) : (
              <Play size={20} weight="fill" aria-hidden="true" />
            )}
          </button>

          <div className="relative h-full min-w-0">
            <svg
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 size-full py-3 md:py-4"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="campaign-video-progress" x1="0" x2="1">
                  <stop offset={`${progress * 100}%`} stopColor="#f4c755" />
                  <stop offset={`${progress * 100}%`} stopColor="#ececec" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <path
                d={WAVEFORM_PATH}
                fill="none"
                stroke="url(#campaign-video-progress)"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <input
              type="range"
              min="0"
              max="1000"
              value={Math.round(progress * 1000)}
              onChange={(event) => seekTo(Number(event.currentTarget.value) / 1000)}
              aria-label={language === "pt" ? "Progresso do vídeo" : "Video progress"}
              className="absolute inset-0 size-full cursor-pointer opacity-0"
            />
          </div>

          <button
            type="button"
            onClick={toggleSound}
            aria-label={
              isMuted
                ? language === "pt"
                  ? "Ativar som"
                  : "Unmute video"
                : language === "pt"
                  ? "Desativar som"
                  : "Mute video"
            }
            className="flex size-full cursor-pointer items-center justify-center transition-colors hover:text-yellow focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-yellow"
          >
            {isMuted ? (
              <SpeakerSlash size={22} weight="fill" aria-hidden="true" />
            ) : (
              <SpeakerHigh size={22} weight="fill" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={enterFullscreen}
            aria-label={language === "pt" ? "Ver em ecrã inteiro" : "View fullscreen"}
            className="flex size-full cursor-pointer items-center justify-center transition-colors hover:text-yellow focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-yellow"
          >
            <ArrowsOut size={22} weight="bold" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
