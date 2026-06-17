import SectionHeader from "@/components/section-header";
import FeatureCard from "@/components/feature-card";
import { features } from "@/content/features";

export default function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Patterns"
          title="Everything a full-stack app needs, ready to extend."
          description="Each card maps to a working pattern already wired up in this starter."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
