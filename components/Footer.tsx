"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="footer">
      <div>{t("tagline")}</div>
    </footer>
  );
}
