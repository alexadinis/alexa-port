"use client";

import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "../Language/LanguageProvider";

const StoryTypewriter = () => {
  const { language } = useLanguage();
  const words = language === "pt" ? ["ler", 1600, "contar", 1600, "aprender", 1600, "partilhar", 1600, "ouvir", 1600, "descobrir", 1600, "viver", 1600] : ["tell", 1600, "learn", 1600, "share", 1600, "read", 1600];
  return (
    <>
      <span className="text-yellow" aria-hidden="true">
        <TypeAnimation
          sequence={words}
          wrapper="span"
          speed={24}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
      </span>
      <span className="sr-only">{language === "pt" ? "ler, contar, aprender, partilhar, ouvir, descobrir, viver" : "tell, learn, share, read"}</span>
    </>
  );
};

export default StoryTypewriter;
