import "../styles/home.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__left">
          <p className="hero__kicker">UX / UI Designer e Engenheira de software</p>

          <h1 className="hero__title">
            Olá, Eu sou a <br />
            <span className="hero__titleAccent">Mylena Angélica</span>
          </h1>

          <p className="hero__desc">
            Este é meu portifólio de experiências em design e desenvolvimento de software.
            Projetos digitais pensados do conceito à implementação.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="/curriculo">
              Baixar CV
            </a>
            <a className="btn btn--ghost" href="/portifolio">
              Portifólio
            </a>
          </div>
        </div>

        <div className="hero__right" aria-hidden="true">

          <div className="hero__imgWrap">
            <img className="hero__img" src="/img/hero.png" alt="" />
          </div>
          
            <span />
            <span />
            <span />
          </div>       
      </div>
    </section>
  );
}
