"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "../../data/projects";
import { useLanguage } from "../Language/LanguageProvider";

interface RelatedProjectsProps {
  projects: Project[];
}

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  const { language } = useLanguage();
  return (
    <section
      aria-label={language === "pt" ? "Projetos relacionados" : "Related work"}
      className="mt-20 border-t border-white/25 pt-10 md:mt-28 md:pt-12"
    >
      <div className="mb-7 flex items-end justify-between gap-6 md:mb-9">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-yellow">
            {language === "pt" ? "Continua a explorar" : "Keep exploring"}
          </p>
          <h2 className="text-2xl font-medium tracking-[-0.025em] md:text-3xl">
            {language === "pt" ? "Projetos relacionados" : "Related work"}
          </h2>
        </div>
        <Link
          href="/#work"
          className="text-sm text-white/60 underline decoration-white/25 underline-offset-4 transition-colors hover:text-blue hover:decoration-blue focus-visible:text-blue focus-visible:outline-none"
        >
          {language === "pt" ? "Ver todos os projetos" : "View all work"}
        </Link>
      </div>

      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="related-project-card group min-w-0 focus-visible:outline-none"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white/5">
              <Image
                src={project.relatedThumbnail ?? project.image}
                alt={language === "pt" ? `Pré-visualização do projeto ${project.title}` : `${project.title} project preview`}
                fill
                quality={95}
                unoptimized={project.slug === "padaria-alianca"}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.03] group-hover:blur-[5px] group-focus-visible:scale-[1.03] group-focus-visible:blur-[5px] motion-reduce:transition-none"
              />
              <div className="absolute inset-0 hidden items-end bg-black/45 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:flex">
                <p className="translate-y-2 whitespace-pre-line text-sm leading-relaxed text-white transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 motion-reduce:transition-none">
                  {project.summary}
                </p>
              </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] transition-colors group-hover:text-blue group-focus-visible:text-blue">
              {project.title}
            </h3>
            <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-white/60 sm:hidden">
              {project.summary}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
