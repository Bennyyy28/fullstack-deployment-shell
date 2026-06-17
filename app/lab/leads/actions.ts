"use server";

import { revalidatePath } from "next/cache";
import { addLead, type LeadErrors } from "@/lib/leads";

// The state shape that the form's `useActionState` hook reads from.
export type LeadFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: LeadErrors;
};

export const initialLeadFormState: LeadFormState = {
  status: "idle",
  message: "",
  errors: {},
};

/**
 * Server Action invoked by the lead form.
 *
 * Runs only on the server: it reads the submitted FormData, validates + saves
 * via lib/leads, revalidates the page so the new lead appears in the list,
 * and returns a state object that the client form renders.
 */
export async function createLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const input = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    status: String(formData.get("status") ?? ""),
  };

  const result = await addLead(input);

  if ("errors" in result) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors: result.errors,
    };
  }

  // Tell Next.js the data for this route changed so the server component
  // re-reads the JSON file and re-renders the list with the new lead.
  revalidatePath("/lab/leads");

  return {
    status: "success",
    message: `Saved ${result.lead.name}.`,
    errors: {},
  };
}
