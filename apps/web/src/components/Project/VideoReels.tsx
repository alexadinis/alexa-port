"use client";

import {
  BookmarkSimple,
  ChatCircle,
  DotsThree,
  Heart,
  PaperPlaneTilt,
  Play,
  SpeakerHigh,
  SpeakerSlash,
} from "@phosphor-icons/react";
import { type CSSProperties, useEffect, useRef, useState } from "react";

export interface Reel {
  src: string;
  caption: string;
}

const ENDESA_REELS: Reel[] = [
  {
    src: "/endesa/reels/reel-2.mp4",
    caption:
      "Entra na onda da energia sustentável 🏄\n\nSabias que o movimento das marés é capaz de gerar energia renovável e com baixas emissões de CO₂?\nNeste Dia Nacional do Mar, deixamos-te com algumas pistas de reflexão para o futuro do nosso planeta azul 🌏\n\n🔹 Através de turbinas submersas e barragens é possível transformar o movimento das marés em energia elétrica;\n🔹 Esta energia é limpa e renovável;\n🔹 Mas atenção! Há desafios... Os altos custos de instalação e o impacto ambiental na orla costeira são pontos a considerar.\n\nNa Endesa, estás na crista da onda da inovação energética. 🌊",
  },
  {
    src: "/endesa/reels/reel-1.mp4",
    caption:
      "Não é magia, é a luz! 😎 Se precisas de um boost de energia, opta por luz fria. Para relaxar no final do dia, luzes quentes são o truque!\nTesta e vê a diferença no teu bem-estar. 😊",
  },
  {
    src: "/endesa/reels/reel-3.mp4",
    caption:
      "Hoje é o Dia Internacional das Energias Limpas 🌍🌱 Estas energias não só ajudam a proteger o planeta como também têm inúmeras vantagens:\n\n✔️ São 100% renováveis, inesgotáveis e não poluem o ambiente.\n✔️ Reduzem a dependência de combustíveis fósseis.\n✔️ Criam milhares de empregos na economia local.\n✔️ Ajudam a combater as alterações climáticas.\n\nO futuro é verde, renovável e está nas nossas mãos! 💡",
  },
];

interface VideoReelProps {
  reel: Reel;
  index: number;
  isActive: boolean;
  identity: VideoReelsIdentity;
  onPlay: () => void;
  onPause: () => void;
  onEnded: () => void;
}

interface VideoReelsIdentity {
  accountName: string;
  location: string;
  profileImage: string;
  imageAltPrefix: string;
  ringColor: string;
}

function VideoReel({ reel, index, isActive, identity, onPlay, onPause, onEnded }: VideoReelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.7);
  const [captionExpanded, setCaptionExpanded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  const toggleSound = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
      if (!nextMuted) void videoRef.current.play();
    }
  };

  const updateVolume = (nextVolume: number) => {
    setVolume(nextVolume);
    setMuted(nextVolume === 0);
    if (videoRef.current) {
      videoRef.current.volume = nextVolume;
      videoRef.current.muted = nextVolume === 0;
    }
  };

  return (
    <article className="min-w-[82vw] snap-center overflow-hidden rounded-2xl border border-white/10 bg-[#181818] sm:min-w-[22rem] lg:min-w-0">
      <header className="flex items-center gap-3 px-4 py-3">
        <div
          className="size-9 overflow-hidden rounded-full bg-white ring-2 ring-offset-2 ring-offset-[#181818]"
          style={{ "--tw-ring-color": identity.ringColor } as CSSProperties}
        >
          <img src={identity.profileImage} alt={`${identity.imageAltPrefix} profile logo`} className="size-full object-cover" />
        </div>
        <div className="min-w-0 flex-1 leading-tight">
          <p className="truncate text-xs font-semibold">{identity.accountName}</p>
          <p className="text-[10px] text-white/55">{identity.location}</p>
        </div>
        <DotsThree size={22} weight="bold" aria-hidden="true" />
      </header>

      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={reel.src}
          aria-label={`${identity.imageAltPrefix} reel ${index + 1}`}
          muted={muted}
          onEnded={onEnded}
          playsInline
          preload="metadata"
          onClick={onPause}
          className="size-full cursor-pointer object-cover"
        />

        {!isActive && (
          <button
            type="button"
            onClick={onPlay}
            aria-label={`Play ${identity.imageAltPrefix} reel ${index + 1}`}
            className="absolute inset-0 z-10 grid place-items-center bg-black/45 transition-colors hover:bg-black/35 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-white"
          >
            <span className="grid size-16 place-items-center rounded-full bg-black/65 text-white shadow-xl backdrop-blur-sm transition-transform hover:scale-105">
              <Play size={27} weight="fill" className="translate-x-0.5" />
            </span>
          </button>
        )}

        <div className={`absolute bottom-4 right-3 z-20 flex flex-col items-center gap-2 rounded-full bg-black/55 px-2 py-2 backdrop-blur-sm ${isActive ? "" : "pointer-events-none opacity-0"}`}>
          {!muted && (
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(event) => updateVolume(Number(event.target.value))}
              aria-label="Volume"
              className="h-20 w-1 cursor-pointer accent-white [writing-mode:vertical-lr] [direction:rtl]"
            />
          )}
          <button
            type="button"
            onClick={toggleSound}
            aria-label={muted ? "Turn sound on" : "Mute video"}
            className="grid size-8 place-items-center rounded-full text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {muted ? <SpeakerSlash size={19} weight="fill" /> : <SpeakerHigh size={19} weight="fill" />}
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-3 flex items-center gap-3">
          <Heart size={22} />
          <ChatCircle size={22} />
          <PaperPlaneTilt size={22} />
          <BookmarkSimple size={22} className="ml-auto" />
        </div>
        <p className={`whitespace-pre-line text-xs leading-relaxed ${captionExpanded ? "" : "line-clamp-2"}`}>
          <strong className="font-semibold">{identity.accountName}</strong>{" "}
          <span className="text-white/75">{reel.caption}</span>
        </p>
        {!captionExpanded && (
          <button
            type="button"
            onClick={() => setCaptionExpanded(true)}
            className="mt-1 text-xs text-white/45 transition-colors hover:text-white/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
          >
            ler mais
          </button>
        )}
      </div>
    </article>
  );
}

interface VideoReelsProps extends VideoReelsIdentity {
  reels?: Reel[];
  ariaLabel?: string;
}

export default function VideoReels({
  reels = ENDESA_REELS,
  accountName = "endesaportugalclientes",
  location = "Portugal",
  profileImage = "/endesa/social/profile-logo.jpg",
  imageAltPrefix = "Endesa",
  ringColor = "#3476ee",
  ariaLabel = "Endesa video reels",
}: Partial<VideoReelsProps> = {}) {
  const [activeReel, setActiveReel] = useState<number | null>(0);
  const identity = {
    accountName,
    location,
    profileImage,
    imageAltPrefix,
    ringColor,
  };

  return (
    <section aria-label={ariaLabel}>
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
        {reels.map((reel, index) => (
          <VideoReel
            key={reel.src}
            reel={reel}
            index={index}
            isActive={activeReel === index}
            identity={identity}
            onPlay={() => setActiveReel(index)}
            onPause={() => setActiveReel(null)}
            onEnded={() => setActiveReel((index + 1) % reels.length)}
          />
        ))}
      </div>
    </section>
  );
}
