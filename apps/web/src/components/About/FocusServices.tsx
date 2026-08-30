"use client";

import { Paytone_One } from "next/font/google";
import { useState } from "react";
import BrandEyeMark from "../../icons/BrandEyeMark";
import { useLanguage } from "../Language/LanguageProvider";

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const SERVICE_GROUPS = [
  {
    number: "01",
    title: "Social Media",
    accent: "green",
    services: [
      {
        name: "Content Creation",
        titleNote: "(the fun part and also the whole point)",
        description: [
          "Reels, carousels, captions that don’t sound like a robot wrote them.",
          "I plan it, write it, design it and make sure it actually sounds like you.",
        ],
      },
      {
        name: "Social Media Strategy",
        description: [
          "Because “just posting stuff” isn’t a plan.",
          "Content calendars, tone of voice, growth goals … the BTS thinking that makes the content actually work.",
        ],
        animatedFace: true,
      },
      {
        name: "Copywriting",
        description: [
          "Words that make sense and sound like an actual human because they were written by one",
        ],
        italicTail: "(hello, that’s me).",
      },
      {
        name: "Community Management",
        description: [
          "Replies, DMs, sending memes and keeping the conversation going.",
        ],
      },
      {
        name: "Paid Media",
        description: [
          "Meta Ads that reach the right people.",
          "Creation, targeting, tracking the whole thing and making sure it works.",
        ],
      },
      {
        name: "Analytics & Reporting",
        description: [
          "Numbers and stuff, but they actually make sense.",
          "I turn the data into “okay, here’s what we do next.”",
        ],
      },
    ],
  },
  {
    number: "02",
    title: "Design",
    accent: "yellow",
    services: [
      {
        name: "Graphic Design",
        description: [
          "Visuals for socials, campaigns and everyday brand life.",
        ],
      },
      {
        name: "Branding & Art Direction",
        titleNote:
          "(Still building this portfolio, but the eye for it is already there.)",
        description: [
          "Helping brands figure out who they are, visually speaking.",
          "Mood, concept, identity and the whole vibe.",
        ],
      },
      {
        name: "Photography & Video",
        description: ["Original content shot specifically for social."],
      },
      {
        name: "Audiovisual Editing",
        description: [
          "Reels and TikToks that don’t feel like a chore to watch.",
        ],
      },
    ],
  },
] as const;

const WinkyFace = () => (
  <span className="focus-winky" role="img" aria-label="winking face">
    <span
      className="focus-winky-face focus-winky-face--wink"
      aria-hidden="true"
    >
      ;)
    </span>
    <span
      className="focus-winky-face focus-winky-face--smile"
      aria-hidden="true"
    >
      :)
    </span>
  </span>
);

const FocusServices = () => {
  const { language } = useLanguage();
  const [openServices, setOpenServices] = useState<Set<string>>(new Set());
  const pt: Record<string, string> = {
    "Content Creation": "Criação de Conteúdo",
    "Social Media Strategy": "Estratégia de Redes Sociais",
    "Community Management": "Gestão de Comunidade",
    "Paid Media": "Publicidade Paga",
    "Analytics & Reporting": "Análise e Relatórios",
    "Graphic Design": "Design Gráfico",
    "Branding & Art Direction": "Branding e Direção de Arte",
    "Photography & Video": "Fotografia e Vídeo",
    "Audiovisual Editing": "Edição Audiovisual",
    "(the fun part and also the whole point)": "(a parte divertida e também o objetivo)",
    "(Still building this portfolio, but the eye for it is already there.)": "(Este portfólio ainda está a crescer, mas o olhar já cá está.)",
    "Reels, carousels, captions that don’t sound like a robot wrote them.": "Reels, carrosséis e legendas que não parecem ter sido escritas por um robô.",
    "I plan it, write it, design it and make sure it actually sounds like you.": "Planeio, escrevo, desenho e garanto que tudo soa verdadeiramente à tua marca.",
    "Because “just posting stuff” isn’t a plan.": "Porque publicar só por publicar não é uma estratégia.",
    "Content calendars, tone of voice, growth goals … the BTS thinking that makes the content actually work.": "Calendários de conteúdo, tom de voz, objetivos de crescimento… o trabalho que ninguém vê mas que faz tudo funcionar.",
    "Words that make sense and sound like an actual human because they were written by one": "Palavras que fazem sentido e soam a uma pessoa a sério, porque foram escritas por uma",
    "(hello, that’s me).": "(olá, sou eu).",
    "Replies, DMs, sending memes and keeping the conversation going.": "Respostas, DMs, mandar memes e manter a conversa viva, alguém tem de dar atenção à comunidade.",
    "Meta Ads that reach the right people.": "Anúncios Meta que chegam às pessoas certas.",
    "Creation, targeting, tracking the whole thing and making sure it works.": "Criação, segmentação, acompanhamento e otimização. Tudo tratado e a garantir que funciona.",
    "Numbers and stuff, but they actually make sense.": "Números, dados e essas cenas, mas que fazem sentido.",
    "I turn the data into “okay, here’s what we do next.”": "Transformo dados em “ok, é isto que vamos fazer a seguir”.",
    "Visuals for socials, campaigns and everyday brand life.": "Visuais para redes sociais, campanhas e para o dia a dia das marcas.",
    "Helping brands figure out who they are, visually speaking.": "Ajudo marcas a perceber quem são, visualmente falando.",
    "Mood, concept, identity and the whole vibe.": "Mood, conceito, identidade e personalidade.",
    "Original content shot specifically for social.": "Conteúdo original criado especificamente para as redes sociais.",
    "Reels and TikToks that don’t feel like a chore to watch.": "Reels e TikToks que não são uma seca de ver.",
  };
  const translate = (value: string) => language === "pt" ? pt[value] ?? value : value;

  const toggleService = (serviceId: string) => {
    setOpenServices((currentServices) => {
      const nextServices = new Set(currentServices);

      if (nextServices.has(serviceId)) {
        nextServices.delete(serviceId);
      } else {
        nextServices.add(serviceId);
      }

      return nextServices;
    });
  };

  return (
    <div
      aria-labelledby="focus-heading"
      className="mx-auto w-full max-w-[1600px] px-6 pb-20 sm:px-10 md:px-16 md:pb-24 lg:px-24"
    >
      <h3
        id="focus-heading"
        className={`${paytoneOne.className} text-balance text-[clamp(2.5rem,4.5vw,4rem)] leading-none tracking-[-0.03em]`}
      >
        {language === "pt" ? "FOCO" : "FOCUS"}
      </h3>

      <div className="mt-6 flex max-w-[1160px] flex-col gap-4 md:mt-8 md:gap-5">
        {SERVICE_GROUPS.map((group) => (
          <article
            key={group.number}
            className={`focus-card focus-card--${group.accent} grid rounded-3xl border border-white/25 px-5 py-6 sm:px-6 md:py-7 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-10 lg:px-8 lg:py-8`}
          >
            <header className="lg:pt-1">
              <p className="text-xs font-medium tracking-[0.12em] opacity-60">
                {group.number}
              </p>
              <h3
                className={`${paytoneOne.className} mt-2 text-balance text-[clamp(1.5rem,2.4vw,2.2rem)] leading-[0.98] tracking-[-0.03em] uppercase`}
              >
                {language === "pt" && group.title === "Social Media" ? "Redes Sociais" : group.title}
              </h3>
            </header>

            <div className="mt-6 border-b border-current/25 lg:mt-0">
              {group.services.map((service, serviceIndex) => {
                const serviceId = `${group.number}-${serviceIndex}`;
                const panelId = `focus-service-${serviceId}`;
                const isOpen = openServices.has(serviceId);

                return (
                  <div
                    key={service.name}
                    className="border-t border-current/25"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleService(serviceId)}
                      className="focus-service-trigger flex min-h-16 w-full cursor-pointer items-center justify-between gap-4 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-current"
                    >
                      <span className="flex min-w-0 flex-1 flex-col items-start gap-1 text-[clamp(1.05rem,1.4vw,1.3rem)] font-medium leading-tight tracking-[-0.02em]">
                        <span className="min-w-0">
                          {translate(service.name)}
                        </span>
                        {isOpen && "titleNote" in service && (
                          <span className="focus-service-title-note max-w-[62ch] text-xs font-normal italic leading-relaxed tracking-normal opacity-70 sm:text-sm">
                            {translate(service.titleNote)}
                          </span>
                        )}
                      </span>
                      <span
                        className="focus-service-icon relative grid size-10 shrink-0 place-items-center"
                        aria-hidden="true"
                      >
                        <span className="focus-service-plus" />
                        <BrandEyeMark className="focus-service-flower size-9" />
                      </span>
                    </button>

                    <div
                      id={panelId}
                      aria-hidden={!isOpen}
                      className={`focus-service-panel ${isOpen ? "focus-service-panel--open" : ""}`}
                    >
                      <div className="overflow-hidden">
                        <div className="max-w-none space-y-3 pb-6 pr-14 text-[0.95rem] leading-[1.65] opacity-75 sm:pr-16">
                          {service.description.map((paragraph, index) => (
                            <p key={paragraph}>
                              {translate(paragraph)}
                              {"animatedFace" in service &&
                                service.animatedFace &&
                                index === service.description.length - 1 && (
                                  <>
                                    {" "}
                                    <WinkyFace />
                                  </>
                                )}
                              {"italicTail" in service &&
                                index === service.description.length - 1 && (
                                  <>
                                    {" "}
                                    <em>{translate(service.italicTail)}</em>
                                  </>
                                )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FocusServices;
