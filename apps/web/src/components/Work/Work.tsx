"use client";

import { Paytone_One } from "next/font/google";
import { PROJECTS } from "../../data/projects";
import ProjectPolaroid from "./ProjectPolaroid";
import ProjectReveal from "./ProjectReveal";
import { useLanguage } from "../Language/LanguageProvider";
import { localizeProject } from "../../data/projectTranslations";

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const PROJECT_ORDER = [
  "endesa-portugal",
  "kfc-portugal",
  "psicomorfose-psicologia",
  "lr-opticas",
  "cockburns",
  "munchie",
  "authentic-classical-pilates",
  "feel-better",
  "padaria-alianca",
] as const;

const ORDERED_PROJECTS = PROJECT_ORDER.flatMap((slug) => {
  const project = PROJECTS.find((item) => item.slug === slug);
  return project ? [project] : [];
});

const Work = () => {
  const { language } = useLanguage();

  return (
    <section
      id="work"
      className="w-full scroll-mt-20 overflow-hidden bg-white text-black"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
        <header className="mb-16 flex flex-col gap-6 border-b border-black/25 pb-10 md:mb-20 md:flex-row md:items-end md:justify-between">
          <h2
            className={`${paytoneOne.className} max-w-[10ch] text-[clamp(3.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.03em]`}
          >
            {language === "pt" ? "Projetos" : "Some of my work."}
          </h2>
          <p className="max-w-[34ch] text-base leading-relaxed text-black/70 md:text-right md:text-lg">
            {language === "pt" ? <>Desce para veres o que interessa.<br />Clica para veres ainda melhor.</> : <>Scroll down for the good stuff.<br />Click for even the better stuff.</>}
          </p>
        </header>

        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
          {ORDERED_PROJECTS.map((project) => (
            <ProjectReveal key={project.slug} className="h-full min-w-0">
              <ProjectPolaroid
                project={localizeProject(project, language)}
                accent={project.accent}
                titleFontClassName={paytoneOne.className}
              />
            </ProjectReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
