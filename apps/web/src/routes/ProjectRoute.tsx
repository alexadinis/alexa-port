import {
  ArrowLeft,
  Atom,
  FireSimple,
  Lightning,
  Planet,
  Seal,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import InstagramPosts from "../components/Project/InstagramPosts";
import ProjectBannerVideo from "../components/Project/ProjectBannerVideo";
import ProjectCredits from "../components/Project/ProjectCredits";
import ProjectFeedTracker from "../components/Project/ProjectFeedTracker";
import ProjectScrollProgress from "../components/Project/ProjectScrollProgress";
import ProjectVisualStory from "../components/Project/ProjectVisualStory";
import RelatedProjects from "../components/Project/RelatedProjects";
import SectionLineMarquees from "../components/SectionLineMarquees/SectionLineMarquees";
import VideoReels from "../components/Project/VideoReels";
import { getProject, PROJECTS } from "../data/projects";
import { localizeHref, type Language } from "../lib/i18n";
import { localizeProject } from "../data/projectTranslations";
import BrandEyeMark from "../icons/BrandEyeMark";
import Mushroom from "../icons/Mushroom";

const getRelatedProjects = (projectIndex: number) => {
  const currentProject = PROJECTS[projectIndex]!;
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length]!;
  const seed = Array.from(currentProject.slug).reduce(
    (total, character) => total + character.charCodeAt(0),
    0,
  );

  return PROJECTS.filter(
    (candidate) =>
      candidate.slug !== currentProject.slug &&
      candidate.slug !== nextProject.slug,
  )
    .map((candidate, index) => ({
      candidate,
      order: (seed * (index + 3) + candidate.slug.length * 17) % 101,
    }))
    .sort((a, b) => a.order - b.order)
    .slice(0, 3)
    .map(({ candidate }) => candidate);
};

const FEED_SEPARATORS = [
  {
    colors: ["bg-blue", "bg-green"] as [string, string],
    icons: [Seal, FireSimple],
  },
  {
    colors: ["bg-red", "bg-pink"] as [string, string],
    icons: [Lightning, Planet],
  },
  {
    colors: ["bg-red", "bg-yellow"] as [string, string],
    icons: [Atom, Mushroom],
  },
];

export default function ProjectRoute({
  language,
  slug,
}: {
  language: Language;
  slug: string;
}) {
  const sourceProject = getProject(slug);

  if (!sourceProject) notFound();
  const project = localizeProject(sourceProject, language);

  const currentIndex = PROJECTS.findIndex((item) => item.slug === project.slug);
  const feedProjects = Array.from({ length: PROJECTS.length }, (_, index) =>
    localizeProject(
      PROJECTS[(currentIndex + index) % PROJECTS.length]!,
      language,
    ),
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <ProjectScrollProgress />
      <ProjectFeedTracker />
      {feedProjects.map((project, feedIndex) => {
        const projectIndex = PROJECTS.findIndex(
          (item) => item.slug === project.slug,
        );
        const relatedProjects = getRelatedProjects(projectIndex).map((item) =>
          localizeProject(item, language),
        );
        const separator =
          FEED_SEPARATORS[
            (feedIndex + FEED_SEPARATORS.length - 1) % FEED_SEPARATORS.length
          ]!;
        const FirstSeparatorIcon = separator.icons[0]!;
        const SecondSeparatorIcon = separator.icons[1]!;

        return (
          <div key={project.slug}>
            {feedIndex > 0 && (
              <div className="relative z-10 h-32 md:h-40" aria-hidden="true">
                <SectionLineMarquees
                  className="h-full"
                  lineColors={separator.colors}
                  icons={[
                    <FirstSeparatorIcon
                      key="first"
                      className="mr-2 size-16 text-black"
                    />,
                    <SecondSeparatorIcon
                      key="second"
                      className="mr-2 size-16 text-black"
                    />,
                  ]}
                />
              </div>
            )}
            <article
              data-project-slug={project.slug}
              className="mx-auto w-full max-w-[1600px] px-6 pt-24 pb-24 sm:px-10 md:px-16 md:pb-32 lg:px-24"
            >
              <Link
                href={localizeHref("/#work", language)}
                className="project-back-link group mb-16 inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white md:mb-24"
              >
                <span
                  className="relative size-[18px] shrink-0"
                  aria-hidden="true"
                >
                  <ArrowLeft
                    size={18}
                    weight="bold"
                    className="project-back-arrow absolute inset-0"
                  />
                  <BrandEyeMark className="project-back-mark absolute inset-0 size-[18px]" />
                </span>
                {language === "pt" ? "Voltar aos projetos" : "Back to project"}
              </Link>

              <header className="mb-14 grid gap-12 md:mb-20 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)] md:gap-16 lg:gap-24">
                <h1 className="max-w-[34ch] text-pretty text-[clamp(1.4rem,2.3vw,2.35rem)] font-medium leading-[1.18] tracking-[-0.025em]">
                  {project.intro ?? project.summary}
                </h1>

                <div className="flex flex-col gap-8 md:pt-1">
                  <dl className="grid grid-cols-[7.5rem_1fr] gap-x-5 text-sm sm:grid-cols-[9rem_1fr]">
                    <dt className="font-medium uppercase tracking-[0.08em] text-white/55">
                      {language === "pt" ? "Cliente" : "Client"}
                    </dt>
                    <dd className="text-right text-base sm:text-lg">
                      {project.client ?? project.title}
                    </dd>
                  </dl>
                  {project.developedAt && (
                    <p className="-mt-5 text-right text-xs text-white/50">
                      {project.developedAt === "Freelance project" ||
                      project.developedAt === "Projeto freelance"
                        ? project.developedAt
                        : `${language === "pt" ? "Desenvolvido na" : "Developed in"} ${project.developedAt}`}
                    </p>
                  )}

                  <div className="grid gap-4 sm:grid-cols-[9rem_1fr]">
                    <p className="text-sm font-medium uppercase tracking-[0.08em] text-white/55">
                      {language === "pt" ? "Serviços" : "Services"}
                    </p>
                    <ul className="flex flex-wrap gap-2 sm:justify-end">
                      {project.services.map((service, index) => (
                        <li
                          key={service}
                          className={`project-service-chip project-service-chip--${(index % 5) + 1}`}
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </header>

              <div
                className={`relative w-full overflow-hidden ${project.detailImage || project.detailVideo ? "aspect-video" : "aspect-[4/5]"}`}
                style={{ backgroundColor: project.accent }}
              >
                {project.detailVideo ? (
                  <ProjectBannerVideo
                    src={project.detailVideo}
                    poster={project.detailImage}
                    title={project.title}
                  />
                ) : (
                  <Image
                    src={project.detailImage ?? project.image}
                    alt={`${project.title} project artwork`}
                    fill
                    quality={95}
                    unoptimized={project.slug === "padaria-alianca"}
                    sizes="(max-width: 1600px) 100vw, 1400px"
                    className={
                      ["lr-opticas", "feel-better"].includes(project.slug)
                        ? "object-cover object-center"
                        : "object-contain"
                    }
                    priority
                  />
                )}
              </div>

              <section
                aria-label={
                  language === "pt" ? "Sobre o projeto" : "About the project"
                }
                className="py-16 md:py-24"
              >
                <div className="max-w-[46rem] md:ml-auto md:w-[65%]">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-pink">
                    {language === "pt"
                      ? "Sobre o projeto"
                      : "About the project"}
                  </p>
                  <p className="whitespace-pre-line text-pretty text-[clamp(1.05rem,1.5vw,1.4rem)] font-normal leading-[1.55] tracking-[-0.015em]">
                    {(project.description ?? project.summary)
                      .split(
                        /(My goal\?|The mission\?|The strategy\?|40% increase|aumento de 40% no engagement|apenas seis meses|marca com maior engagement no TikTok em Portugal|organicamente|268 mil seguidores em apenas 8 meses|engagement|growing 268K followers organically|duplicou as impressões e o alcance \(\+100%\) em apenas 8 meses|return to life)/g,
                      )
                      .map((part, index) =>
                        [
                          "My goal?",
                          "The mission?",
                          "The strategy?",
                          "40% increase",
                          "aumento de 40% no engagement",
                          "apenas seis meses",
                          "marca com maior engagement no TikTok em Portugal",
                          "organicamente",
                          "268 mil seguidores em apenas 8 meses",
                          "engagement",
                          "growing 268K followers organically",
                          "duplicou as impressões e o alcance (+100%) em apenas 8 meses",
                        ].includes(part) ? (
                          <strong
                            key={`${part}-${index}`}
                            className="font-bold"
                          >
                            {part}
                          </strong>
                        ) : language === "pt" && part === "return to life" ? (
                          <em key={`${part}-${index}`}>{part}</em>
                        ) : (
                          <span key={`${part}-${index}`}>{part}</span>
                        ),
                      )}
                  </p>
                </div>
              </section>

              {project.slug === "endesa-portugal" && (
                <>
                  <InstagramPosts />
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src="/endesa/endesa-social-showcase.webp"
                      alt="Endesa social media content showcase"
                      fill
                      sizes="(max-width: 1600px) 100vw, 1400px"
                      className="object-cover"
                    />
                  </div>
                  <div className="py-16 md:py-24">
                    <p className="max-w-[46rem] text-pretty text-[clamp(1.05rem,1.5vw,1.4rem)] font-normal leading-[1.55] tracking-[-0.015em] md:ml-auto md:w-[65%]">
                      {language === "pt"
                        ? "Para além do conteúdo estático, "
                        : "Beyond static content, "}
                      <strong className="font-bold">
                        {language === "pt"
                          ? "o vídeo tornou-se uma parte essencial da estratégia"
                          : "video became a key part of the strategy"}
                      </strong>
                      {language === "pt"
                        ? ". Pensado para tornar a sustentabilidade e a inovação fáceis de ver e de recordar."
                        : ". Designed to make sustainability and inovation easy to watch and easy to remember."}
                    </p>
                  </div>
                  <VideoReels />
                  <section
                    aria-label="Project reflection"
                    className="py-16 md:py-24"
                  >
                    <div className="max-w-[46rem] md:ml-auto md:w-[65%]">
                      <p className="text-pretty text-[clamp(1.05rem,1.5vw,1.4rem)] font-normal leading-[1.55] tracking-[-0.015em]">
                        {language === "pt"
                          ? "A energia não é o tema mais entusiasmante do feed, por isso o meu trabalho foi mudar isso."
                          : "Energy isn't the most exciting topic to scroll past, so my job was to change that."}
                      </p>
                    </div>
                  </section>
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src="/endesa/endesa-final-showcase.webp"
                      alt="Endesa social media campaign showcase"
                      fill
                      sizes="(max-width: 1600px) 100vw, 1400px"
                      className="object-cover"
                    />
                  </div>
                </>
              )}

              {project.slug !== "endesa-portugal" && (
                <ProjectVisualStory project={project} />
              )}

              <ProjectCredits project={project} />

              <RelatedProjects projects={relatedProjects} />
            </article>
          </div>
        );
      })}
    </main>
  );
}
