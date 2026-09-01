"use client";

import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "../Language/LanguageProvider";

/**
 * The middle sentence is desktop-only. On a phone the paragraph is the
 * tallest thing in the hero, so it collapses to the two claims that earn
 * their place — experience and outcome — without duplicating the copy into
 * a second hidden element.
 */
const Description = () => {
  const { language } = useLanguage();

  if (language === "pt") {
    return (
      <div className="w-full max-w-[46rem] text-left">
        <p className="text-xl font-semibold text-black/70">
          Social media manager e designer freelance no Porto.
        </p>
        <p className="mt-3 text-base leading-relaxed text-black/70 md:text-lg">
          Curiosa e criativa por natureza, com{" "}
          <strong className="font-bold">mais de 7 anos de experiência</strong> a
          transformar ideias em conteúdo
          <span className="hidden md:inline">
            . Trabalhei com{" "}
            <strong className="font-bold">
              clientes de todas as dimensões
            </strong>
            , sempre com o mesmo objetivo: criar conteúdo
          </span>{" "}
          que conta histórias e ajudar{" "}
          <TypeAnimation
            sequence={["marcas", 2500, "empresas", 2500, "sonhos", 2500]}
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
    <div className="w-full max-w-[46rem] text-left">
      <p className="text-xl font-semibold text-black/70">
        Freelance social media manager and designer based in Porto.
      </p>
      <p className="mt-3 text-base leading-relaxed text-black/70 md:text-lg">
        Curious and creative by nature, with{" "}
        <strong className="font-bold">7+ years of experience</strong> turning
        ideas into content
        <span className="hidden md:inline">
          . I&apos;ve worked with{" "}
          <strong className="font-bold">clients of all sizes</strong>, always
          with the same goal: content
        </span>{" "}
        that tells stories and helps{" "}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "brands",
            2500,
            "companies",
            2500,
            "dreams",
            2500,
          ]}
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
