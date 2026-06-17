import SectionHeader from "@/components/section-header";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/project-card";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects turning ideas into working systems."
          description="A growing collection of full-stack development, AI systems, business operations, and workflow projects."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}