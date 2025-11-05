export default function ThankYou() {
  return (
    <main>
      <div className="container">
        <div className="thank">
          <h1 style={{ color: "#08704D" }}>
            Danke — Ihre Nachricht wurde gesendet!
          </h1>
          <p style={{ marginTop: 10 }}>
            Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei
            Ihnen.
          </p>

          <p style={{ marginTop: 18 }}>
            <a href="/" style={{ color: "#08704D", fontWeight: 700 }}>
              Zurück zur Startseite
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
