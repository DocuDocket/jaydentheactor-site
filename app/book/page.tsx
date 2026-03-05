"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";

export default function BookPage() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      project: String(formData.get("project") || ""),
      message: String(formData.get("message") || ""),
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

        <div className="card p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Send a message</h3>
          <p className="mt-2 text-sm text-slate-600">
            Messages are delivered directly to Michael.
          </p>

          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="text-sm font-medium">Your name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Jane Producer"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Your email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="jane@productionco.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Project / role (optional)
              </label>
              <input
                name="project"
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Project name, role, shoot dates"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
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

            {status === "sent" ? (
              <p className="text-sm text-green-700">
                Sent! We’ll get back to you shortly.
              </p>
            ) : null}

            {status === "error" ? (
              <p className="text-sm text-red-700">{error}</p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
