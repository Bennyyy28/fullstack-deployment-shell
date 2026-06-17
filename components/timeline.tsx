import { timeline } from "@/content/timeline";

export default function Timeline() {
  return (
    <section id="timeline" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
            Progress
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            A timeline of what I’m building and learning.
          </h2>

          <p className="mt-4 max-w-2xl text-white/60">
            My path is focused on building real projects, learning modern web
            development, and connecting technical skills with business systems.
          </p>
        </div>

        <div className="space-y-5">
          {timeline.map((item) => (
            <article
              key={`${item.period}-${item.title}`}
              className="grid gap-4 border-l border-white/10 pl-6 md:grid-cols-[180px_1fr] md:gap-8"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
                {item.period}
              </p>

              <div className="pb-8">
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
