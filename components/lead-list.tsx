import type { Lead, LeadStatus } from "@/content/leads";

type LeadListProps = {
  leads: Lead[];
};

// Subtle status pill colors, kept within the black/minimal palette.
const STATUS_STYLES: Record<LeadStatus, string> = {
  New: "border-white/20 text-white/80",
  Contacted: "border-amber-400/40 text-amber-300",
  Qualified: "border-emerald-400/40 text-emerald-300",
};

export default function LeadList({ leads }: LeadListProps) {
  if (leads.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-white/10 px-4 py-8 text-center text-sm text-white/40">
        No leads yet. Add one to get started.
      </p>
    );
  }

  // Newest first.
  const ordered = [...leads].reverse();

  return (
    <ul className="flex flex-col gap-3">
      {ordered.map((lead) => (
        <li
          key={lead.id}
          className="rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/25"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white">{lead.name}</p>
              <p className="mt-1 text-sm text-white/55">{lead.email}</p>
              <p className="mt-1 text-sm text-white/40">{lead.company}</p>
            </div>
            <span
              className={`shrink-0 rounded-full border px-3 py-1 text-xs ${STATUS_STYLES[lead.status]}`}
            >
              {lead.status}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
