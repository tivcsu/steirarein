"use client";

import React, { FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function ContactForm() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("contact.form");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [hcaptchaToken, setHcaptchaToken] = useState<string>("");

  const handleVerificationSuccess = (token: string, ekey: string) => {
    setHcaptchaToken(token);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      honeypot: formData.get("honeypot"),
      hcaptchaToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok) {
        setErr(json?.error ?? t("errorDefault"));
        setLoading(false);
        return;
      }

      // success -> redirect to thank-you
      router.push(`/${locale}/thank-you`);
    } catch (error: any) {
      setErr(t("errorNetwork"));
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Contact form">
      <div>
        <label>{t("nameLabel")}</label>
        <input
          name="name"
          type="text"
          placeholder={t("namePlaceholder")}
          required
        />
      </div>

      <div>
        <label>{t("emailLabel")}</label>
        <input
          name="email"
          type="email"
          placeholder={t("emailPlaceholder")}
          required
        />
      </div>

      <div>
        <label>{t("messageLabel")}</label>
        <textarea
          name="message"
          placeholder={t("messagePlaceholder")}
          required
        />
      </div>
      <HCaptcha
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY ?? ""}
        onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
      />
      {/* honeypot */}
      <input name="honeypot" type="text" style={{ display: "none" }} />

      <button type="submit" disabled={loading}>
        {loading ? t("sending") : t("submit")}
      </button>

      {err && (
        <div
          style={{
            padding: "12px",
            background: "#fee",
            color: "#c33",
            borderRadius: "8px",
            fontSize: "14px",
            border: "1px solid #fcc",
          }}
        >
          {err}
        </div>
      )}
    </form>
  );
}

/* 
import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "9fed345c-2c90-43b1-b8b7-8b2ca764fcd5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" required/>
      <input type="email" name="email" required/>
      <textarea name="message" required></textarea>
      <button type="submit">Submit</button>
      <p>{result}</p>
    </form>
  );
} */
