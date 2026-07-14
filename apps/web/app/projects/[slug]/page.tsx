import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { Paytone_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, PROJECTS } from "../../../src/data/projects";

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  PROJECTS.map((project) => ({ slug: project.slug }));

export const generateMetadata = async ({
  params,
}: ProjectPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} | Alexandra Barbosa`,
    description: project.summary,
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((item) => item.slug === project.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length]!;

  return (
    <main className="min-h-screen bg-black pt-24 text-white">
      <article className="mx-auto w-full max-w-[1600px] px-6 pb-24 sm:px-10 md:px-16 md:pb-32 lg:px-24">
        <Link
          href="/#work"
          className="mb-16 inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white md:mb-24"
        >
          <ArrowLeft size={18} weight="bold" />
          Back to selected work
        </Link>

        <header className="mb-14 flex flex-col gap-10 md:mb-20">
          <p className="text-sm font-medium text-white/65">{project.focus}</p>
          <h1
            className={`${paytoneOne.className} max-w-[12ch] text-[clamp(3.75rem,9vw,6rem)] leading-[0.9] tracking-[-0.03em]`}
          >
            {project.title}
          </h1>

          <div className="grid gap-10 border-y border-white/25 py-8 md:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.6fr)]">
            <p className="max-w-[38ch] text-pretty text-2xl font-medium leading-tight md:text-4xl">
              {project.summary}
            </p>
            <div>
              <p className="mb-4 text-sm text-white/60">Contribution</p>
              <ul className="flex flex-col gap-2 text-lg">
                {project.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </header>

        <div
          className="relative aspect-[4/5] w-full overflow-hidden"
          style={{ backgroundColor: project.accent }}
        >
          <Image
            src={project.image}
            alt={`${project.title} project artwork`}
            fill
            sizes="(max-width: 1600px) 100vw, 1400px"
            className="object-contain"
            priority
          />
        </div>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="group mt-20 flex items-end justify-between gap-8 border-t border-white/25 pt-10 md:mt-28"
        >
          <div>
            <p className="mb-4 text-sm text-white/60">Next project</p>
            <p className="text-3xl font-bold tracking-[-0.03em] md:text-5xl">
              {nextProject.title}
            </p>
          </div>
          <ArrowUpRight
            size={36}
            weight="bold"
            className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </Link>
      </article>
    </main>
  );
}
