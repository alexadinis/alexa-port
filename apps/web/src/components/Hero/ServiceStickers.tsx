"use client";

import { useLanguage } from "../Language/LanguageProvider";

/**
 * The services, scattered as stickers around the headline. They sit above
 * the mascot and below the copy: on a narrow phone a sticker may slide
 * under a line of text, which reads as layering rather than collision.
 * The same services are listed properly in the About section, so these are
 * decoration for the eye, not the only place the offer is stated.
 */
const STICKERS = [
  {
    pt: "estratégia",
    en: "strategy",
    position:
      "top-[9%] left-[2%] -rotate-6 bg-green text-white sm:top-[13%] sm:left-[5%]",
  },
  {
    pt: "conteúdo",
    en: "content",
    position:
      "top-[17%] right-[2%] rotate-6 bg-pink text-black sm:top-[16%] sm:right-[6%]",
  },
  {
    pt: "design",
    en: "design",
    position:
      "bottom-[9%] left-[2%] rotate-3 bg-blue text-white sm:top-[46%] sm:bottom-auto sm:left-[3%]",
  },
  {
    pt: "copywriting",
    en: "copywriting",
    position:
      "bottom-[9%] right-[2%] -rotate-3 bg-red text-white sm:bottom-[13%] sm:right-auto sm:left-[11%] sm:rotate-3",
  },
  {
    pt: "gestão de redes",
    en: "community",
    position:
      "hidden top-[50%] right-[3%] -rotate-3 bg-black text-white lg:flex",
  },
  {
    pt: "branding",
    en: "branding",
    position:
      "hidden bottom-[11%] right-[13%] -rotate-6 bg-black text-yellow sm:flex",
  },
];

export default function ServiceStickers() {
  const { language } = useLanguage();

  return (
    <ul className="pointer-events-none absolute inset-0 z-[1] m-0 list-none p-0">
      {STICKERS.map((sticker) => (
        <li
          key={sticker.en}
          className={`absolute flex items-center rounded-full px-3.5 py-2 text-xs font-semibold tracking-[-0.01em] whitespace-nowrap md:px-6 md:py-3 md:text-[17px] ${sticker.position}`}
        >
          {language === "pt" ? sticker.pt : sticker.en}
        </li>
      ))}
    </ul>
  );
}
