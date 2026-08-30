"use client";

import {
  BookmarkSimple,
  CaretLeft,
  CaretRight,
  ChatCircle,
  DotsThree,
  Heart,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import { type CSSProperties, useState } from "react";

export interface PostSlide {
  image?: string;
  eyebrow?: string;
  title?: string;
  colors?: string;
}

export interface Post {
  caption: string;
  slides: PostSlide[];
}

const POSTS: Post[] = [
  {
    caption:
      "👉 Indução ou vitrocerâmica?\nCada cozinha tem as suas necessidades e escolher a placa ideal é mais fácil quando conheces os prós e os contras de cada uma. 🧑‍🍳\nDescobre o que cada tipo de placa pode oferecer e conta-nos: qual é a tua favorita? 🤩",
    slides: [
      { image: "/endesa/social/cooktop-1.jpg" },
      { image: "/endesa/social/cooktop-2.jpg" },
      { image: "/endesa/social/cooktop-3.jpg" },
    ],
  },
  {
    caption:
      "Cada casa tem um estilo único, e os candeeiros podem fazer toda a diferença nos espaços. Deixa-te inspirar pelas nossas sugestões e partilha connosco nos comentários o teu estilo favorito 👇",
    slides: [
      { image: "/endesa/social/lamps-1.jpg" },
      { image: "/endesa/social/lamps-2.jpg" },
      { image: "/endesa/social/lamps-3.jpg" },
      { image: "/endesa/social/lamps-4.jpg" },
      { image: "/endesa/social/lamps-5.jpg" },
    ],
  },
  {
    caption:
      "Este ano, vamos celebrar os Santos Populares com ainda mais energia, alegria e... sustentabilidade! ♻️🎈\nDesliza para conheceres 5 dicas que te vão ajudar a celebrar os Santos Populares com responsabilidade e respeito pelo nosso planeta. 👉",
    slides: [
      { image: "/endesa/social/festivities-1.jpg" },
      { image: "/endesa/social/festivities-2.jpg" },
      { image: "/endesa/social/festivities-3.jpg" },
      { image: "/endesa/social/festivities-4.jpg" },
      { image: "/endesa/social/festivities-5.jpg" },
      { image: "/endesa/social/festivities-6.jpg" },
    ],
  },
];

interface InstagramIdentity {
  accountName: string;
  location: string;
  profileImage: string;
  imageAltPrefix: string;
  ringColor: string;
}

function InstagramPost({
  post,
  identity,
  mediaAspectRatio,
}: {
  post: Post;
  identity: InstagramIdentity;
  mediaAspectRatio: "square" | "portrait";
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [captionExpanded, setCaptionExpanded] = useState(false);
  const hasLongCaption = post.caption.length > 100;

  return (
    <article className="min-w-[82vw] snap-center overflow-hidden rounded-2xl bg-[#181818] sm:min-w-[22rem] lg:min-w-0">
      <header className="flex items-center gap-3 px-4 py-3">
        <div
          className="size-9 overflow-hidden rounded-full bg-white ring-2 ring-offset-2 ring-offset-[#181818]"
          style={{ "--tw-ring-color": identity.ringColor } as CSSProperties}
        >
          <img
            src={identity.profileImage}
            alt={`${identity.imageAltPrefix} profile logo`}
            className="size-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1 leading-tight">
          <p className="truncate text-xs font-semibold">{identity.accountName}</p>
          <p className="text-[10px] text-white/55">{identity.location}</p>
        </div>
        <DotsThree size={22} weight="bold" aria-hidden="true" />
      </header>

      <div
        className={`relative overflow-hidden bg-white ${
          mediaAspectRatio === "portrait" ? "aspect-[4/5]" : "aspect-square"
        }`}
      >
        <div
          className="flex size-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ transform: `translate3d(-${activeSlide * 100}%, 0, 0)` }}
        >
          {post.slides.map((item, index) => (
            <div
              key={item.image ?? item.title ?? index}
              className={`relative size-full min-w-full shrink-0 bg-gradient-to-br ${item.colors ?? "from-white to-white"}`}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={`${identity.imageAltPrefix} carousel image ${index + 1}`}
                  className="size-full object-cover"
                />
              ) : (
                <div className="flex h-full flex-col justify-between p-7">
                  <span className="w-fit rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-black">
                    endesa
                  </span>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/75">{item.eyebrow}</p>
                    <p className="max-w-[10ch] text-[clamp(1.75rem,3vw,2.7rem)] font-bold leading-[0.98] tracking-[-0.04em] text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {activeSlide > 0 && (
          <button
            type="button"
            onClick={() => setActiveSlide((current) => current - 1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black shadow-md transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <CaretLeft size={17} weight="bold" />
          </button>
        )}
        {activeSlide < post.slides.length - 1 && (
          <button
            type="button"
            onClick={() => setActiveSlide((current) => current + 1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black shadow-md transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <CaretRight size={17} weight="bold" />
          </button>
        )}

        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {post.slides.map((item, index) => (
            <span
              key={item.image ?? item.title ?? index}
              className={`size-1.5 rounded-full ${index === activeSlide ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="mb-3 flex items-center gap-3">
          <Heart size={22} />
          <ChatCircle size={22} />
          <PaperPlaneTilt size={22} />
          <BookmarkSimple size={22} className="ml-auto" />
        </div>
        <p className={`whitespace-pre-line text-xs leading-relaxed ${hasLongCaption && !captionExpanded ? "line-clamp-2" : ""}`}>
          <strong className="font-semibold">{identity.accountName}</strong>{" "}
          <span className="text-white/75">{post.caption}</span>
        </p>
        {hasLongCaption && !captionExpanded && (
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

interface InstagramPostsGalleryProps {
  posts: Post[];
  accountName: string;
  location: string;
  profileImage: string;
  imageAltPrefix: string;
  ringColor: string;
  ariaLabel: string;
  mediaAspectRatio?: "square" | "portrait";
}

export function InstagramPostsGallery({
  posts,
  accountName,
  location,
  profileImage,
  imageAltPrefix,
  ringColor,
  ariaLabel,
  mediaAspectRatio = "square",
}: InstagramPostsGalleryProps) {
  const identity = {
    accountName,
    location,
    profileImage,
    imageAltPrefix,
    ringColor,
  };

  return (
    <section aria-label={ariaLabel} className="pb-8 md:pb-16">
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
        {posts.map((post) => (
          <InstagramPost
            key={post.caption}
            post={post}
            identity={identity}
            mediaAspectRatio={mediaAspectRatio}
          />
        ))}
      </div>
    </section>
  );
}

export default function InstagramPosts() {
  return (
    <InstagramPostsGallery
      posts={POSTS}
      accountName="endesaportugalclientes"
      location="Portugal"
      profileImage="/endesa/social/profile-logo.jpg"
      imageAltPrefix="Endesa"
      ringColor="#3476ee"
      ariaLabel="Endesa social media posts"
    />
  );
}
