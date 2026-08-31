import ProjectsRoute from "../../../../src/routes/ProjectsRoute";
import {
  buildProjectsMetadata,
  projectsJsonLd,
} from "../../../../src/routes/metadata";

export const metadata = buildProjectsMetadata("pt");

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsJsonLd("pt")),
        }}
      />
      <ProjectsRoute />
    </>
  );
}
