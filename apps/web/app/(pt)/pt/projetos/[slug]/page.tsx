import ProjectRoute from "../../../../../src/routes/ProjectRoute";
import {
  buildProjectMetadata,
  projectJsonLd,
  projectStaticParams,
} from "../../../../../src/routes/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = projectStaticParams;

export const generateMetadata = async ({ params }: ProjectPageProps) =>
  buildProjectMetadata("pt", (await params).slug);

export default async function Page({ params }: ProjectPageProps) {
  const { slug } = await params;
  const jsonLd = projectJsonLd("pt", slug);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ProjectRoute language="pt" slug={slug} />
    </>
  );
}
