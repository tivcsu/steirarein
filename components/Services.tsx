"use client";

import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("services");

  return (
    <div className="services">
      <span className="kicker">{t("kicker")}</span>
      <h2>{t("title")}</h2>
      <ul className="bullet-list">
        <li>{t("list.cleaning")}</li>
        <li>{t("list.laundry")}</li>
        <li>{t("list.shopping")}</li>
        <li>{t("list.cooking")}</li>
        <li>{t("list.organization")}</li>
        <li>{t("list.support")}</li>
      </ul>

      <div className="price">{t("price")}</div>

      <h3>{t("cookingTitle")}</h3>
      <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
        {t("cookingDescription")}
      </p>
    </div>
  );
}
