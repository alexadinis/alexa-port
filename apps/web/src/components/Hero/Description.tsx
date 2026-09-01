"use client";

import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "../Language/LanguageProvider";

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
          transformar ideias em conteúdo que conta histórias e ajuda{" "}
          <TypeAnimation
            sequence={["marcas", 2500, "sonhos", 2500, "empresas", 2500]}
            preRenderFirstString
            wrapper="span"
            speed={20}
            style={{ display: "inline-block", color: "#44985a" }}
            repeat={Infinity}
            className="font-bold"
          />
          <span className="block md:inline"> a crescer.</span>
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
        <TypeAnimation
          sequence={["brands", 2500, "dreams", 2500, "companies", 2500]}
          preRenderFirstString
          wrapper="span"
          speed={20}
          style={{ display: "inline-block", color: "#44985a" }}
          repeat={Infinity}
          className="font-bold"
        />
        <span className="block md:inline"> grow.</span>
      </p>
    </div>
  );
};

export default Description;
