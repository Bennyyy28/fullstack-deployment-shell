import { stack } from "@/content/stack";

export default function TechStack() {
  return (
    <section id="stack" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
            Stack
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Tools I’m learning to build useful systems.
          </h2>

          <p className="mt-4 max-w-2xl text-white/60">
            My current development stack is focused on building modern web apps,
            business tools, AI workflows, and practical automation systems.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {stack.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}