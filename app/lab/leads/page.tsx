import LeadForm from "@/components/lead-form";
import LeadList from "@/components/lead-list";
import { getLeads } from "@/lib/leads";

// Read the JSON file fresh on every request instead of caching at build time.
// Without this, Next.js would try to statically render the page during
// `npm run build`, which conflicts with reading/writing local JSON at runtime.
export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const leads = await getLeads();

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/45">
            Lab
          </p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Lead Tracker
          </h1>
          <p className="mt-3 text-sm leading-6 text-white/55">
            A full-stack smoke test. Add a lead and it persists to a local JSON
            file on the server.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
          <LeadForm />
        </div>

        <div className="mt-12">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-lg font-semibold">Saved leads</h2>
            <span className="text-xs uppercase tracking-[0.18em] text-white/35">
              {leads.length} total
            </span>
          </div>
          <LeadList leads={leads} />
        </div>
      </div>
    </main>
  );
}
