import SectionHeader from "@/components/section-header";

const steps = [
  {
    title: "Push to Git",
    description:
      "Commit your changes and push to GitHub, GitLab, or Bitbucket.",
  },
  {
    title: "Import to Vercel",
    description:
      "Connect the repo on Vercel — the Next.js framework preset is detected automatically.",
  },
  {
    title: "Ship",
    description:
      "Every push triggers a production build. Run npm run build locally first to catch issues early.",
  },
];

export default function Deployment() {
  return (
    <section id="deploy" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Deployment"
          title="Ready to ship from the first commit."
          description="No databases, auth, or external services to configure — clone, edit, and deploy."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-sm font-medium text-white/40">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/60">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
