"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill out every field before submitting.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.message || "Something went wrong. Please try again.");
        return;
      }

      setStatus(data.message);
      setForm(initialFormState);
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
          Demo Form
        </p>

        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              A working client-to-API form.
            </h2>

            <p className="mt-4 max-w-2xl text-white/60">
              This form manages state with useState, validates input on the
              client, posts JSON to <code>/api/contact</code>, and renders the
              response. Swap the handler for your own email service or database.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-white/60">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-white/60">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-white/60">
                Message
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                className="min-h-32 w-full resize-none rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
                placeholder="What are you working on?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/80 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Submit Message"}
            </button>

            {status && <p className="text-sm text-white/60">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
