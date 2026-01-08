import "../styles/footer.css";
import { Link } from "react-router-dom";
import {
  LinkedInIcon,
  TelegramIcon,
  GitHubIcon,
  LattesIcon
} from "./icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <nav className="footer__nav">
          <Link to="/skills">Skills</Link>
          <Link to="/curriculo">Currículo</Link>
        </nav>

        <div className="footer__brand">
          <span className="footer__mark">MA</span>
          <span className="footer__name">Mylena Angélica</span>
        </div>

        <nav className="footer__nav">
          <Link to="/portifolio">Portifólio</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </div>

      <div className="footer__social">
        <p>Me siga nas redes sociais:</p>
        <div className="footer__icons">
          <a href="https://www.linkedin.com/in/mylena-angelica/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://t.me/mylena_angelica" target="_blank" rel="noreferrer">
            <TelegramIcon />
          </a>
          <a href="https://github.com/Mylena-angelica/" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a href="http://lattes.cnpq.br/5667918256720594" aria-label="Lattes">
            <LattesIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
