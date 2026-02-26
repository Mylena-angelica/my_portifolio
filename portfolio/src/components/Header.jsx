import "../styles/header.css";
import { NAV_LINKS } from "./navLinks";
import { ThemeIcon, LanguageIcon } from "./icons";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="hdr">
      <div className="hdr__inner">
        <NavLink to="/" className="hdr__brand" aria-label="Ir para início">
          <span className="hdr__mark">MA</span>
          <span className="hdr__name">Mylena Angélica</span>
        </NavLink>

        <nav className="hdr__nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `hdr__link ${isActive ? "is-active" : ""}`
              }
              end
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
{/*
        <div className="hdr__right">
          <button className="hdr__iconBtn" aria-label="Alternar tema">
            <ThemeIcon />
          </button>

          <button className="hdr__iconBtn" aria-label="Idioma">
            <LanguageIcon />
          </button>

          <NavLink className="hdr__cta" to="/contato">
            Entre em contato
          </NavLink>
        </div> */}
      </div>
    </header>
  );
}
