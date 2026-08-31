"use client";

import type { ReactNode } from "react";
import type { Project } from "../../data/projects";
import { useLanguage } from "../Language/LanguageProvider";

const creditLinkClassName =
  "inline-flex min-h-11 items-center underline decoration-white/35 underline-offset-4 transition-colors hover:text-blue hover:decoration-blue focus-visible:text-blue focus-visible:decoration-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink";

function renderCreditValue(
  value: string,
  links?: { text: string; url: string }[],
) {
  if (!links?.length) return value;

  const linkedNames = new Map(links.map((link) => [link.text, link.url]));
  const pattern = new RegExp(
    `(${links.map(({ text }) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g",
  );

  return value.split(pattern).map((part, index) => {
    const url = linkedNames.get(part);
    return url ? (
      <a
        key={`${part}-${index}`}
        href={url}
        target="_blank"
        rel="noreferrer"
        className={creditLinkClassName}
      >
        {part}
      </a>
    ) : (
      part
    );
  });
}

export default function ProjectCredits({ project }: { project: Project }) {
  const { language } = useLanguage();
  const translateLabel = (value: string) => language === "pt" ? ({
    Client: "Cliente",
    Work: "Trabalho",
    Agency: "Agência",
    Year: "Ano",
    Strategy: "Estratégia",
    Branding: "Branding",
    "Film & Photography": "Filme e Fotografia",
    "Social Media Strategy & Content": "Estratégia e Conteúdo para Redes Sociais",
    "Visual design": "Design visual",
    Designer: "Designer",
    "Made the static visuals look good": "Design dos conteúdos estáticos",
  } as Record<string, string>)[value] ?? value : value;
  const defaultCredits: [string, ReactNode][] = [
    [
      translateLabel("Client"),
      project.clientUrl ? (
        <a
          key="client"
          href={project.clientUrl}
          target="_blank"
          rel="noreferrer"
          className={creditLinkClassName}
        >
          {project.creditClient ?? project.client ?? project.title}
        </a>
      ) : (
        project.creditClient ?? project.client ?? project.title
      ),
    ],
    ...(project.creditWork
      ? ([
          [translateLabel("Work"), project.creditWork],
        ] as [string, ReactNode][])
      : project.developedAt
      ? ([
          [
            translateLabel("Agency"),
            project.agencyUrl ? (
              <a
                key="agency"
                href={project.agencyUrl}
                target="_blank"
                rel="noreferrer"
                className={creditLinkClassName}
              >
                {project.developedAt}
              </a>
            ) : (
              project.developedAt
            ),
          ],
        ] as [string, ReactNode][])
      : []),
    ...(project.visualCredit
      ? ([
          [
            translateLabel(project.visualCreditLabel ?? "Visual design"),
            project.visualCreditUrl ? (
              <a
                key="visual-credit"
                href={project.visualCreditUrl}
                target="_blank"
                rel="noreferrer"
                className={creditLinkClassName}
              >
                {project.visualCredit}
              </a>
            ) : (
              project.visualCredit
            ),
          ],
        ] as [string, ReactNode][])
      : []),
    ...(project.year
      ? ([[translateLabel("Year"), project.year]] as [string, ReactNode][])
      : []),
  ];
  const credits: [string, ReactNode][] = project.credits?.length
    ? project.credits.map(({ label, value, links }) => [
        translateLabel(label),
        renderCreditValue(value, links),
      ])
    : defaultCredits;

  return (
    <section aria-label={language === "pt" ? "Bastidores" : "Behind the scenes"} className="mt-16 md:mt-24">
      <div className="py-4 md:py-5">
        <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-pink">
          {language === "pt" ? "Bastidores" : "Behind the scenes"}
        </h2>
      </div>
      <dl className="md:grid md:grid-cols-2 md:gap-x-10">
        {credits.map(([label, value]) => (
          <div
            key={label}
            className="grid gap-1.5 py-4 md:min-h-20 md:grid-cols-[minmax(8rem,0.8fr)_minmax(0,1.2fr)] md:items-center md:gap-5"
          >
            <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50">
              {label}
            </dt>
            <dd className="text-sm leading-snug text-white md:text-base">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
