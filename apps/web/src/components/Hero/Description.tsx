"use client";

import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "../Language/LanguageProvider";

const Description = () => {
  const { language } = useLanguage();

  if (language === "pt") {
    return (
      <div className="w-full max-w-[46rem] text-center md:text-left">
        <p className="text-xl font-semibold text-blue">
          Social media manager e designer freelance no Porto.
        </p>
        <p className="mt-3 text-lg leading-relaxed text-black/70">
          Curiosa e criativa por natureza, com{" "}
          <strong className="font-bold">mais de 7 anos de experiência</strong> a
          transformar ideias em conteúdo. Trabalhei com{" "}
          <strong className="font-bold">clientes de todas as dimensões</strong>,
          sempre com o mesmo objetivo: criar conteúdo que conta histórias e
          ajudar{" "}
          <TypeAnimation
            sequence={["marcas", 2500, "empresas", 2500, "sonhos", 2500]}
            preRenderFirstString
            wrapper="span"
            speed={20}
            style={{ display: "inline-block", color: "#44985a" }}
            repeat={Infinity}
            className="font-bold"
          />{" "}
          a crescer.
        </p>
      </div>
    );
  }
  return (
    <div className="w-full max-w-[46rem] text-center md:text-left">
      <p className="text-xl font-semibold text-blue">
        Freelance social media manager and designer based in Porto.
      </p>
      <p className="mt-3 text-lg leading-relaxed text-black/70">
        Curious and creative by nature, with{" "}
        <strong className="font-bold">7+ years of experience</strong> turning
        ideas into content. I&apos;ve worked with{" "}
        <strong className="font-bold">clients of all sizes</strong>, always with
        the same goal: content that tells stories and helps{" "}
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
        grow.
      </p>
    </div>
  );
};

export default Description;
