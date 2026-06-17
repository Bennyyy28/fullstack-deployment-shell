type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-white/60">{description}</p>
      )}
    </div>
  );
}