// Shared lead types and status options.
//
// This module is intentionally free of any server-only code (no `fs`), so it
// is safe to import from BOTH server code (lib/leads.ts) and client components
// (components/lead-form.tsx). Server file I/O lives in lib/leads.ts instead.

// Status options for a lead. Keeping this as a const array lets us both
// derive the TypeScript union type AND validate incoming values at runtime.
export const LEAD_STATUSES = ["New", "Contacted", "Qualified"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  status: LeadStatus;
  createdAt: string;
};

// Shape of the raw, unvalidated values coming off the form.
export type LeadInput = {
  name: string;
  email: string;
  company: string;
  status: string;
};

// Per-field validation errors. A missing key means that field is valid.
export type LeadErrors = Partial<Record<keyof LeadInput, string>>;
