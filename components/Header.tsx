import Logo from "./Logo";

export default function Header() {
  return (
    <header className="hero" aria-label="Steirarein hero">
      <div className="hero-left">
        <div className="brand">
          <Logo size={48} />
        </div>
        <h1 className="title">Steirarein – Mit Herz, Geduld und Erfahrung</h1>
        <p className="subtitle">
          Sauberkeit mit Herz — Ihr gepflegtes Zuhause in besten Händen
        </p>
        <p>
          Wir wissen, dass ein gepflegter Haushalt nicht nur sauber, sondern
          auch harmonisch sein soll. Mit Geduld, Erfahrung und einem offenen Ohr
          für Ihre Wünsche schaffen wir Ordnung und Wohlbefinden in Ihrem
          Zuhause.
        </p>
      </div>

      <img
        src="/hero-image.jpg"
        alt="Steirarein cleaning"
        className="hero-img"
      />
    </header>
  );
}
