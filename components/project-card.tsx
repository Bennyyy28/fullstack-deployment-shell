import Link from "next/link";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25">
      <div className="flex h-full flex-col gap-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/70">
            {project.category}
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
            {project.status}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/65">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-1">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/10"
          >
            View Project
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/10"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/85"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
