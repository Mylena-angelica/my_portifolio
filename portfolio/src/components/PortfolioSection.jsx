// src/components/PortfolioSection.jsx
import "../styles/portfolioSection.css";

// importe cada imagem da pasta src/img (do jeito certo no CRA/Vite)
import solarBanyuImg from "../img/SolarBanyuHome.png";
import eraImg from "../img/EraHome.png";
import recrutamenoImg from "../img/RecrutamentoHome.png";
import imobiliariaImg from "../img/RealStateHome.png";
import fintechImg from "../img/FintechHome.png";
import apitaImg from "../img/ApitaHome.png";

const PROJECTS = [
  {
    title: "SolarBanyu",
    subtitle: "IoT / Sustentabilidade / Multidisciplinar",
    image: solarBanyuImg,
    href: "#contato",
  },
  {
    title: "Apita Cidadão",
    subtitle: " Acesso à informação / GovTech",
    image: apitaImg,
    href: "#contato",
  },
  {
    title: "Recrutamento inteligente",
    subtitle: "Web Design / SaaS",
    image: recrutamenoImg,
    href: "#contato",
  },
  {
    title: "Website de Imobiliária",
    subtitle: "Web Design / Real State",
    image: imobiliariaImg,
    href: "#contato",
  },
  {
    title: "Fintech de saúde",
    subtitle: "UI|UX / Product Design",
    image: fintechImg,
    href: "#contato",
  },
  {
    title: "Sustentabilidade no canteiro de obras",
    subtitle: "Dados / Sustentabilidade Digital / Obras",
    image: eraImg,
    href: "#contato",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portifolio" className="portfolio">
      <div className="portfolio__inner">
        <h2 className="portfolio__title">Meu portfólio</h2>
        <p className="portfolio__subtitle">
          Explore meus projetos em design e engenharia, do conceito à implementação.
        </p>

        <div className="portfolio__grid">
          {PROJECTS.map((p) => (
            <article key={p.title} className="pCard">
              <div className="pCard__img">
                <img className="pCard__imgEl" src={p.image} alt={p.title} />
              </div>

              <div className="pCard__body">
                <div className="pCard__text">
                  <h3 className="pCard__title">{p.title}</h3>
                  <p className="pCard__meta">{p.subtitle}</p>
                </div>

                <a
                  className="pCard__more"
                  href={p.href}
                  aria-label={`Ver mais sobre ${p.title}`}
                  title="Ver mais"
                >
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
