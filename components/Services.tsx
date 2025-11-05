export default function Services() {
  return (
    <div className="services">
      <span className="kicker">Unsere Leistungen</span>
      <h2>Haushaltsbetreuung & Reinigung</h2>
      <ul className="bullet-list">
        <li>Gründliche Reinigung von Wohnung oder Haus</li>
        <li>Wäsche waschen und bügeln</li>
        <li>Erledigung von Einkäufen</li>
        <li>Zubereitung einfacher Mahlzeiten</li>
        <li>Organisation des Haushalts (z. B. Rechnungen, Termine)</li>
        <li>Einfühlsame Unterstützung im Alltag</li>
      </ul>

      <div className="price">
        Komplettreinigung einer Wohnung ab 150 € — Stundenpreis ab 28 €
      </div>

      <h3>Koch- & Organisationshilfe</h3>
      <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
        Unterstützung beim Kochen und Servieren — Sorgfalt, Vertrauen und ein
        Auge fürs Detail.
      </p>
    </div>
  );
}
