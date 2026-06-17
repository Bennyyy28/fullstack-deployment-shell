import type { Feature } from "@/content/features";

type FeatureCardProps = {
  feature: Feature;
};

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25">
      <div className="flex h-full flex-col gap-4">
        <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/70">
          {feature.tag}
        </span>

        <div>
          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/65">
            {feature.description}
          </p>
        </div>
      </div>
    </article>
  );
}
