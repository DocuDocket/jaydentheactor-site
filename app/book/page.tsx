"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";

export default function BookPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      project: String(formData.get("project") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await r.json().catch(() => ({}));

      if (!r.ok) {
        setStatus("error");
        setError(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <div className="container-pad py-10">
      <SectionTitle
        kicker="Booking"
        title="Book Jayden"
        subtitle="Send a message directly below — no email app needed."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Contact card */}
        <div className="card p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Booking Contact</h3>
          <p className="mt-2 text-slate-600">Michael Eligon (Parent/Guardian)</p>

          <div className="mt-4 space-y-2 text-sm">
            <p>
              Email:{" "}
              <a className="underline" href="mailto:michael@jaydentheactor.com">
                michael@jaydentheactor.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a className="underline" href="tel:18134554441">
                813-455-4441
              </a>
            </p>
            <p className="text-slate-500">
              Based in Florida • Open to out-of-state work
            </p>
          </div>
        </div>

        {/* Form card */}
        <div className="card p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Send a message</h3>
          <p className="mt-2 text-sm text-slate-600">
            Messages are delivered directly to Michael.
          </p>

          {/* Success message (no auto-reply emails) */}
          {status === "sent" ? (
            <div className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
              Thanks for reaching out—someone will contact you within 48 hours.
            </div>
          ) : null}

          {/* Hide the form after successful submit to prevent duplicates */}
          {status !== "sent" ? (
            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <div>
                <label className="text-sm font-medium">Your name</label>
                <input
                  name="name"
                  required
                  disabled={status === "sending"}
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
                  placeholder="Jane Producer"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Your email</label>
                <input
                  type="email"
                  name="email"
                  required
                  disabled={status === "sending"}
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
                  placeholder="jane@productionco.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Project / role (optional)
                </label>
                <input
                  name="project"
                  disabled={status === "sending"}
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
                  placeholder="Project name, role, shoot dates"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  disabled={status === "sending"}
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
                  placeholder="Hi Michael, we’d like to request a self-tape for Jayden..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "error" ? (
                <p className="text-sm text-red-700">{error}</p>
              ) : null}
            </form>
          ) : null}

          <p className="mt-4 text-xs text-slate-500">
            Prefer email? You can also contact{" "}
            <a className="underline" href="mailto:michael@jaydentheactor.com">
              michael@jaydentheactor.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
