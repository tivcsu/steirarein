"use client";

import Logo from "./Logo";
import { useTranslations } from "next-intl";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const t = useTranslations("header");

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <Logo size={40} />
          <LanguageSelector />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" aria-label="Steirarein hero">
        <div className="hero-left">
          <h1 className="title">{t("title")}</h1>
          <p className="subtitle">{t("subtitle")}</p>
          <p>{t("description")}</p>
        </div>

        <img
          src="/hero-image_v2.jpg"
          alt="Steirarein cleaning"
          className="hero-img"
        />
      </header>
    </>
  );
}
