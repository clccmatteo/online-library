interface HeaderProps {
  cta: string;
  ctaOnClick: () => void;
}

export default function Header({ cta, ctaOnClick }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="logo">Biblioteca Corso Europa</h1>
      <div className="main-nav-list">
        <a className="main-nav-link" href="/">
          Home Page
        </a>
        <a className="main-nav-link" href="/">
          Utenti
        </a>
        <button onClick={ctaOnClick} className="main-nav-link nav-cta">
          {cta}
        </button>
      </div>
    </header>
  );
}
