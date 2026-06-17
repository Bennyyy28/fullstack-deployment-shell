import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Benny Goldberg",
    };
  }

  return {
    title: `${project.title} | Benny Goldberg`,
    description: project.description,
  };
}
type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/#projects" className="text-sm text-white/50 hover:text-white">
          ← Back to projects
        </Link>

        <div className="mt-12">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            {project.category}
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/70"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">
              Status
            </p>

            <p className="mt-4 text-2xl font-semibold">{project.status}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/80"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}