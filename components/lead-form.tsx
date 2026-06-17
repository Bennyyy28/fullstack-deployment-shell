"use client";

import { useActionState } from "react";
import {
  createLead,
  initialLeadFormState,
} from "@/app/lab/leads/actions";
import { LEAD_STATUSES } from "@/content/leads";

// Shared styling for text inputs so every field looks identical.
const fieldClasses =
  "w-full rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/30";

export default function LeadForm() {
  const [state, formAction, pending] = useActionState(
    createLead,
    initialLeadFormState
  );

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <Field label="Name" error={state.errors.name}>
        <input
          name="name"
          type="text"
          placeholder="Jane Doe"
          className={fieldClasses}
        />
      </Field>

      <Field label="Email" error={state.errors.email}>
        <input
          name="email"
          type="email"
          placeholder="jane@acme.com"
          className={fieldClasses}
        />
      </Field>

      <Field label="Company" error={state.errors.company}>
        <input
          name="company"
          type="text"
          placeholder="Acme Inc."
          className={fieldClasses}
        />
      </Field>

      <Field label="Status" error={state.errors.status}>
        <select name="status" defaultValue="New" className={fieldClasses}>
          {LEAD_STATUSES.map((status) => (
            <option key={status} value={status} className="bg-black">
              {status}
            </option>
          ))}
        </select>
      </Field>

      <button
        type="submit"
        disabled={pending}
        className="mt-1 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {pending ? "Saving…" : "Add lead"}
      </button>

      {state.status !== "idle" && (
        <p
          aria-live="polite"
          className={
            state.status === "success"
              ? "text-sm text-emerald-400"
              : "text-sm text-red-400"
          }
        >
          {state.message}
        </p>
      )}
    </form>
  );
}

// Small wrapper that pairs a label with its field and an optional error line.
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
        {label}
      </span>
      {children}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </label>
  );
}
