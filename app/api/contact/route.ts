import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  message?: string;
  honeypot?: string | null;
  hcaptchaToken?: string | null;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;

    // basic validation
    const name = (body.name ?? "").toString().trim();
    const email = (body.email ?? "").toString().trim();
    const message = (body.message ?? "").toString().trim();
    const honeypot = (body.honeypot ?? "").toString();
    const hcaptchaToken = (body.hcaptchaToken ?? "").toString();

    if (honeypot) {
      // spam bot
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Fehlende Felder" }, { status: 400 });
    }

    // verify hCaptcha
    const HCAPTCHA_SECRET = process.env.HCAPTCHA_SECRET;
    if (!HCAPTCHA_SECRET) {
      return NextResponse.json(
        { error: "Server misconfiguration (HCAPTCHA_SECRET missing)" },
        { status: 500 }
      );
    }

    if (!hcaptchaToken) {
      return NextResponse.json(
        { error: "Bitte bestätigen Sie das Captcha" },
        { status: 400 }
      );
    }

    const verifyRes = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: HCAPTCHA_SECRET,
        response: hcaptchaToken,
      }),
    });

    const verifyJson = await verifyRes.json();
    if (!verifyJson.success) {
      return NextResponse.json(
        { error: "Captcha-Verifizierung fehlgeschlagen" },
        { status: 400 }
      );
    }

    // forward to Web3Forms
    const WEB3FORMS_KEY = process.env.WEB3FORMS_KEY;
    if (!WEB3FORMS_KEY) {
      return NextResponse.json(
        { error: "Server misconfiguration (WEB3FORMS_KEY missing)" },
        { status: 500 }
      );
    }

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: "Neue Anfrage von Steirarein Webseite",
      reply_to: "vadarti@gmail.com",
      name,
      email,
      message,
    };

    const wRes = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const wjson = await wRes.json();
    if (!wRes.ok) {
      return NextResponse.json(
        { error: "Fehler beim Senden der Nachricht" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error("contact error:", e);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}
