// app/api/contact/route.ts
import { NextResponse } from "next/server";

type Payload = {
  name: string;
  email: string;
  project?: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<Payload>;

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const project = (body.project || "").trim();
    const message = (body.message || "").trim();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
    }

    // Required env vars
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO = process.env.CONTACT_TO; // michael@jaydentheactor.com
    const CONTACT_FROM = process.env.CONTACT_FROM; // e.g. onboarding@resend.dev (or verified domain sender)

    if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
      return NextResponse.json(
        { ok: false, error: "Server is not configured (missing env vars)." },
        { status: 500 }
      );
    }

    const subject = project
      ? `Booking Inquiry — Jayden E. (${project})`
      : `Booking Inquiry — Jayden E.`;

    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto; line-height: 1.5;">
        <h2 style="margin:0 0 10px;">New booking message from jaydentheactor.com</h2>
        <p style="margin:0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${
          project
            ? `<p style="margin:0 0 8px;"><strong>Project:</strong> ${escapeHtml(
                project
              )}</p>`
            : ""
        }
        <p style="margin:16px 0 6px;"><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap; background:#f8fafc; padding:12px; border-radius:10px; border:1px solid #e2e8f0;">${escapeHtml(
          message
        )}</pre>
      </div>
    `;

    // Send ONLY to you. No auto-response to the visitor.
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        subject,
        html,
        // NOTE: We intentionally do NOT set reply_to and we do NOT send any email to the visitor.
      }),
    });

    if (!r.ok) {
      const details = await r.text();
      return NextResponse.json(
        { ok: false, error: "Email send failed.", details },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
