import { localizeProject } from "../../src/data/projectTranslations";
import { PROJECTS } from "../../src/data/projects";
import { localizeHref, type Language } from "../../src/lib/i18n";
import { absoluteUrl, CONTACT_EMAIL, SITE_NAME } from "../../src/lib/site";

const renderProjects = (language: Language) =>
  PROJECTS.map((source) => {
    const project = localizeProject(source, language);
    const url = absoluteUrl(
      localizeHref(`/projects/${project.slug}`, language),
    );
    const description = project.metaDescription ?? project.summary;

    return [
      `### ${project.title}`,
      `- URL: ${url}`,
      `- ${language === "pt" ? "Resumo" : "Summary"}: ${description.replaceAll("\n", " ")}`,
      `- ${language === "pt" ? "Serviços" : "Services"}: ${project.services.join(", ")}`,
    ].join("\n");
  }).join("\n\n");

const content = `# ${SITE_NAME}

> Freelance social media manager and designer based in Porto, Portugal, working across strategy, content creation, copywriting, community management and design.

- Website: ${absoluteUrl("/pt")}
- English website: ${absoluteUrl("/en")}
- Contact: mailto:${CONTACT_EMAIL}
- LinkedIn: https://www.linkedin.com/in/alexadinis
- Behance: https://www.behance.net/alexadinis
- Instagram: https://www.instagram.com/alexandrabarbosa.pt/

## Projetos em português

${renderProjects("pt")}

## Projects in English

${renderProjects("en")}
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
