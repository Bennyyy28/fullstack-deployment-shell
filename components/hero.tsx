import { site } from "@/content/site";

export default function Hero() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
          {site.location}
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
          {site.name}
        </h1>

        <p className="mt-5 max-w-2xl text-xl leading-8 text-white/60">
          {site.role} focused on building practical full-stack applications, AI
          workflows, automation systems, and business tools.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/80"
          >
            View Projects
          </a>

          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}