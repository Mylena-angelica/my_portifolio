import "../styles/skills.css";
import { SKILLS_DATA } from "./SkillsData";

export default function SkillsSection() {
  return (
    <section className="skills" id="skills" aria-label="Skills">
      <div className="skills__inner">
        <header className="skills__head">
          <h2 className="skills__title">Skills</h2>
          <p className="skills__subtitle">
            Explore my design services, from user interface and experience to prototyping and testing.
            Let&apos;s craft exceptional digital experiences together.
          </p>
        </header>

        <div className="skills__grid">
          {SKILLS_DATA.map(({ title, Icon, text }) => (
            <article className="skills__card" key={title}>
              <div className="skills__icon" aria-hidden="true">
                <Icon />
              </div>
              <h3 className="skills__cardTitle">{title}</h3>
              <p className="skills__text">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
