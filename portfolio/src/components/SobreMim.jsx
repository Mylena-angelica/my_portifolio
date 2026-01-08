import "../styles/home.css";


export default function SobreMim() {
  return (
    <section className="about">
      <div className="about__inner">
        <h2 className="about__title">Sobre Mim</h2>

        <p className="about__text">
          Sou Mylena Angélica, designer UX/UI e engenheira de software, dedicada a criar
          experiências digitais intuitivas, funcionais e bem estruturadas. Com forte atuação
          em design centrado no usuário e conhecimento em desenvolvimento front-end, contribuo
          para transformar ideias em soluções bem projetadas e tecnicamente viáveis, apoiando
          equipes de desenvolvimento na implementação.
        </p>

        <div className="about__stats">
          <div className="stat">
            <div className="stat__num">10+</div>
            <div className="stat__label">Projetos realizados</div>
          </div>

          <div className="stat">
            <div className="stat__num">5+</div>
            <div className="stat__label">Anos de experiência</div>
          </div>
        </div>

        <div className="about__dot" aria-hidden="true" />
      </div>
    </section>
  );
}
