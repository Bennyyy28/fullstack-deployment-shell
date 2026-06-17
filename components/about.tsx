export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.5fr]">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
            About
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Building toward technical leverage.
          </h2>
        </div>

        <div className="space-y-6 text-base leading-8 text-white/60">
          <p>
            I’m focused on learning full-stack development by building practical
            projects that combine software, business operations, automation, and
            AI systems.
          </p>

          <p>
            My goal is not just to learn tools, but to understand how useful
            systems are designed, shipped, improved, and applied to real business
            problems.
          </p>

          <p>
            This portfolio is my working record of that progress: projects,
            experiments, systems, and lessons learned while developing technical
            fluency.
          </p>
        </div>
      </div>
    </section>
  );
}