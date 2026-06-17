import { promises as fs } from "fs";
import path from "path";
import {
  LEAD_STATUSES,
  type Lead,
  type LeadErrors,
  type LeadInput,
  type LeadStatus,
} from "@/content/leads";

// Re-export the shared types so existing server-side imports keep working.
export type { Lead, LeadErrors, LeadInput, LeadStatus } from "@/content/leads";
export { LEAD_STATUSES } from "@/content/leads";

// Absolute path to our local JSON "database" for this smoke test.
const LEADS_PATH = path.join(process.cwd(), "data", "leads.json");

// Basic email shape check. Not RFC-perfect on purpose — just enough to catch
// obviously-bad input without pulling in a validation library.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Read all saved leads from the JSON file.
 * If the file is missing or unreadable, we treat it as "no leads yet"
 * rather than throwing, so the page always renders.
 */
export async function getLeads(): Promise<Lead[]> {
  try {
    const raw = await fs.readFile(LEADS_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Lead[]) : [];
  } catch {
    return [];
  }
}

/**
 * Validate raw form input server-side. Returns a map of field -> error message.
 * An empty object means the input is valid.
 */
export function validateLeadInput(input: LeadInput): LeadErrors {
  const errors: LeadErrors = {};

  if (!input.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!input.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(input.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!input.company.trim()) {
    errors.company = "Company is required.";
  }

  if (!LEAD_STATUSES.includes(input.status as LeadStatus)) {
    errors.status = "Choose a valid status.";
  }

  return errors;
}

/**
 * Validate and persist a new lead. Returns either the created lead or the
 * validation errors. Persistence is a read-modify-write of the JSON file.
 */
export async function addLead(
  input: LeadInput
): Promise<{ lead: Lead } | { errors: LeadErrors }> {
  const errors = validateLeadInput(input);
  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const lead: Lead = {
    id: crypto.randomUUID(),
    name: input.name.trim(),
    email: input.email.trim(),
    company: input.company.trim(),
    status: input.status as LeadStatus,
    createdAt: new Date().toISOString(),
  };

  const leads = await getLeads();
  leads.push(lead);
  await fs.writeFile(LEADS_PATH, JSON.stringify(leads, null, 2), "utf-8");

  return { lead };
}
