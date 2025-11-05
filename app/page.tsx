import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Page() {
  return (
    <main>
      <div className="container">
        <Header />

        <section className="section">
          <div>
            <Services />
          </div>

          <aside className="contact-card" aria-labelledby="contact-heading">
            <h3 id="contact-heading">Kontakt</h3>
            <div className="contact-info">
              <span className="contact-info-label">Telefon</span>
              <a className="phone" href="tel:+436605307701">
                0660 530 7701
              </a>
            </div>
            <div style={{ marginBottom: 20, color: "var(--text-secondary)" }}>
              <strong>Oder schreiben Sie uns:</strong>
            </div>

            <ContactForm />

            <p
              style={{
                marginTop: 20,
                fontSize: 14,
                color: "var(--text-muted)",
              }}
            >
              Wir melden uns so bald wie möglich. E-Mail:{" "}
              <a href="mailto:steirarein@gmail.com">steirarein@gmail.com</a>
            </p>
          </aside>
        </section>

        <Footer />
      </div>
    </main>
  );
}
