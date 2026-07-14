import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Paytone_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "../../data/projects";
import Detail from "../../icons/Detail";
import ProjectReveal from "./ProjectReveal";

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const PROJECT_LAYOUTS = [
  "lg:col-span-6",
  "lg:col-span-3 lg:col-start-10 lg:mt-32",
  "lg:col-span-4 lg:col-start-2 lg:mt-24",
  "lg:col-span-5 lg:col-start-8",
  "lg:col-span-3 lg:mt-28",
  "lg:col-span-5 lg:col-start-7",
  "lg:col-span-4 lg:col-start-5 lg:mt-28",
];

const Work = () => {
  return (
    <section
      id="work"
      className="w-full scroll-mt-20 overflow-hidden bg-[#ececec] text-black"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
        <header className="mb-24 flex flex-col gap-6 border-b border-black/25 pb-10 md:mb-32 md:flex-row md:items-end md:justify-between">
          <h2
            className={`${paytoneOne.className} max-w-[10ch] text-[clamp(3.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.03em]`}
          >
            SOME OF MY WORK
          </h2>
          <p className="max-w-[34ch] text-base leading-relaxed text-black/70 md:text-right md:text-lg">
            Selected social media, content and design projects. Scroll to
            explore, then open any project for the full story.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-y-24 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-40">
          {PROJECTS.map((project, index) => (
            <ProjectReveal
              key={project.slug}
              className={`w-full max-w-[680px] even:ml-auto lg:max-w-none ${PROJECT_LAYOUTS[index]}`}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group flex min-w-0 flex-col gap-5"
              >
                <div className="flex items-end justify-between gap-4 border-b border-black/20 pb-3 text-sm">
                  <span className="font-semibold">
                    ({String(index + 1).padStart(2, "0")})
                  </span>
                  <span className="text-right text-black/65">
                    {project.focus}
                  </span>
                </div>

                <div className="relative aspect-[4/5] w-full overflow-hidden bg-white">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] group-focus-visible:scale-[1.025]"
                  />

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="flex translate-y-3 items-center gap-2 rounded-[10px] bg-blue p-2 pr-4 text-white opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                        <Detail className="h-7 w-7" aria-hidden="true" />
                      </span>
                      <span className="text-lg font-semibold">quick peek</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-3xl font-bold leading-none tracking-[-0.03em] md:text-4xl">
                    {project.title}
                  </h3>
                  <div className="flex items-start justify-between gap-3">
                    <p className="max-w-[38ch] text-sm leading-relaxed text-black/70 md:text-base">
                      {project.summary}
                    </p>
                    <ArrowUpRight
                      size={22}
                      weight="bold"
                      className="mt-0.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </ProjectReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
