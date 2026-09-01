"use client";

import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "../Language/LanguageProvider";

/**
 * The typed word changes length ("marcas" then "empresas"), and a growing
 * word reflows the sentence around it — enough to push the last words onto
 * a new line and shift the whole hero mid-animation. An invisible copy of
 * the longest word holds the box open and the animation is painted over it,
 * so the paragraph is laid out once and never moves again.
 */
const TypingWord = ({ words }: { words: string[] }) => {
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a));

  return (
    <span className="relative inline-block text-left">
      <span aria-hidden className="invisible font-bold">
        {longest}
      </span>
      <TypeAnimation
        sequence={words.flatMap((word) => [word, 2500])}
        preRenderFirstString
        wrapper="span"
        speed={20}
        style={{ color: "#44985a" }}
        repeat={Infinity}
        className="absolute top-0 left-0 font-bold whitespace-nowrap"
      />
    </span>
  );
};

/**
 * Centred under the headline. The typing word is the only coloured thing
 * in the paragraph, so it carries the movement on its own.
 */
const Description = () => {
  const { language } = useLanguage();

  if (language === "pt") {
    return (
      <div className="flex w-full max-w-[46rem] flex-col gap-3 text-center">
        <p className="text-lg font-semibold text-black/75 md:text-xl">
          Social media manager e designer freelance no Porto.
        </p>
        <p className="text-base leading-relaxed text-balance text-black/70 md:text-lg">
          Curiosa e criativa por natureza, com{" "}
          <strong className="font-bold">mais de 7 anos de experiência</strong> a
          transformar ideias em conteúdo que conta histórias e a ajudar{" "}
          <TypingWord words={["marcas", "sonhos", "empresas"]} /> a crescer.
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-[46rem] flex-col gap-3 text-center">
      <p className="text-lg font-semibold text-black/75 md:text-xl">
        Freelance social media manager and designer based in Porto.
      </p>
      <p className="text-base leading-relaxed text-balance text-black/70 md:text-lg">
        Curious and creative by nature, with{" "}
        <strong className="font-bold">7+ years of experience</strong> turning
        ideas into content that tells stories and helps{" "}
        <TypingWord words={["brands", "dreams", "companies"]} /> grow.
      </p>
    </div>
  );
};

export default Description;
