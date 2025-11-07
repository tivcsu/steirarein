"use client";

import Header from "../../components/Header";
import Services from "../../components/Services";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("contact");

  return (
    <main>
      <div className="container">
        <Header />

        <section className="section">
          <div>
            <Services />
          </div>

          <aside className="contact-card" aria-labelledby="contact-heading">
            <h3 id="contact-heading">{t("title")}</h3>
            <div className="contact-info">
              <span className="contact-info-label">{t("phoneLabel")}</span>
              <a className="phone" href="tel:+436605307701">
                0660 530 7701
              </a>
            </div>
            <div style={{ marginBottom: 20, color: "var(--text-secondary)" }}>
              <strong>{t("orWrite")}</strong>
            </div>

            <ContactForm />

            <p
              style={{
                marginTop: 20,
                fontSize: 14,
                color: "var(--text-muted)",
              }}
            >
              {t("emailNote")}{" "}
              <a href="mailto:ausztriabanmagyarul@gmail.com">
                ausztriabanmagyarul@gmail.com
              </a>
            </p>
          </aside>
        </section>

        <Footer />
      </div>
    </main>
  );
}
