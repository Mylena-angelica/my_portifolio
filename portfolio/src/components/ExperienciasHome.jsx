import "../styles/experienciaHome.css";

const SKILLS_LEFT = [
  { label: "UI / UX design", value: 90 },
  { label: "Teste de usabilidade", value: 70 },
  { label: "User Research", value: 50 },
];

const SKILLS_RIGHT = [
  { label: "Figma", value: 95 },
  { label: "Prototipação", value: 80 },
  { label: "Engenharia de software", value: 90 },
];

function Bar({ label, value }) {
  return (
    <div className="expBar">
      <div className="expBar__top">
        <span className="expBar__label">{label}</span>
        <span className="expBar__value">{value}%</span>
      </div>

      <div className="expBar__track" aria-hidden="true">
        <div className="expBar__fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="exp">
      <div className="exp__inner">
        <h2 className="exp__title">Experiência</h2>
        <p className="exp__subtitle">
          Atuo na interseção entre design, engenharia de software e implementação,
          desenvolvendo experiências digitais funcionais, bem estruturadas e centradas no usuário.
          Minha experiência envolve desde pesquisa e concepção até o apoio à implementação e
          validação das soluções.
        </p>

        <div className="exp__grid">
          <div className="exp__col">
            {SKILLS_LEFT.map((s) => (
              <Bar key={s.label} label={s.label} value={s.value} />
            ))}
          </div>

          <div className="exp__col">
            {SKILLS_RIGHT.map((s) => (
              <Bar key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
