// src/pages/curriculo.jsx
import "../styles/curriculo.css";
import foto from "../img/Mylena.png";

import { PythonIcon, HtmlIcon, CssIcon, JavaScriptIcon, CIcon, RIcon } from "../components/icons";
import {
  ReactIcon,
  NodeIcon,
  ExpressIcon,
  TailwindIcon,
  BootstrapIcon,
  FigmaIcon,
  GitIcon,
  WordpressIcon,
  ScrumIcon,
} from "../components/icons";

function Skill({ icon, label }) {
  return (
    <div className="cvIconItem">
      <span className="cvIcon">{icon}</span>
      <span className="cvIconLabel">{label}</span>
    </div>
  );
}

export default function Curriculo() {
  return (
    <div className="cvPage">
      {/* HERO */}
    <section className="cvSection cvSection--hero">
      <div className="cvInner">
        <div className="cvHero">
          <h1 className="cvHero__name">Mylena Angélica</h1>
          <p className="cvHero__role">
            UX/UI Designer & Engenheira de Software
          </p>

          {/* Avatar */}
          <div className="cvHero__avatarWrap">
            <div className="cvHero__circle" />
                <img
                src={foto}
                alt="Mylena Angélica"
                className="cvHero__photo"
                />

          </div>

          {/* Contatos */}
          <div className="cvHero__contacts">
            <div>
              <span>Telefone</span>
              <p>(61) 98488-5802</p>
            </div>
            <div>
              <span>Email</span>
              <p>mylena.asf@gmail.com</p>
            </div>
            <div>
              <span>LinkedIn</span>
              <p>mylena-angelica</p>
            </div>
            <div>
              <span>Github</span>
              <p>mylena-angelica</p>
            </div>
            <div>
              <span>Telegram</span>
              <p>@mylena_angelica</p>
            </div>
            <div>
              <span>Localidade</span>
              <p>Brasília - Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </section>



      {/* SKILLS */}
      <section className="cvSection cvSection--skills">
        <div className="cvInner">
            <h2 className="cvTitle">Skills</h2>
            <p className="cvSubtitle">
            Tecnologias, ferramentas e conhecimentos que utilizo no dia a dia.
            </p>

            <div className="cvSkillsGrid">

            {/* LINGUAGENS */}
            <div className="cvSkillBlock">
                <h3 className="cvSkillTitle">Linguagens</h3>
                <div className="cvIcons">
                    <Skill icon={<PythonIcon />} label="Python" />
                    <Skill icon={<HtmlIcon />} label="HTML" />
                    <Skill icon={<CssIcon />} label="CSS" />
                    <Skill icon={<JavaScriptIcon />} label="JavaScript" />
                    <Skill icon={<CIcon />} label="C" />
                    <Skill icon={<RIcon id="r-skill" />} label="R" />
                </div>
            </div>

            {/* FRAMEWORKS */}
            <div className="cvSkillBlock">
                <h3 className="cvSkillTitle">Frameworks & Bibliotecas</h3>
                <div className="cvIcons">
                    <Skill icon={<ReactIcon />} label="React" />
                    <Skill icon={<NodeIcon />} label="Node.js" />
                    <Skill icon={<ExpressIcon />} label="Express" />
                    <Skill icon={<TailwindIcon />} label="TailwindCSS" />
                    <Skill icon={<BootstrapIcon />} label="Bootstrap" />

                </div>
            </div>

            {/* FERRAMENTAS */}
            <div className="cvSkillBlock">
                <h3 className="cvSkillTitle">Ferramentas & Tecnologias</h3>
                <div className="cvIcons">
                    <Skill icon={<GitIcon />} label="Git" />
                    <Skill icon={<FigmaIcon />} label="Figma" />
                    <Skill icon={<WordpressIcon />} label="WordPress" />
                    <Skill icon={<ScrumIcon />} label="Scrum" />

                </div>
            </div>

            {/* DATABASES */}
            <div className="cvSkillBlock">
                <h3 className="cvSkillTitle">Bancos de Dados</h3>
                <div className="cvIcons">

                </div>
            </div>

            {/* SISTEMAS */}
            <div className="cvSkillBlock">
                <h3 className="cvSkillTitle">Sistemas Operacionais</h3>
                <div className="cvIcons">

                </div>
            </div>

            {/* IDIOMAS */}
            <div className="cvSkillBlock">
                <h3 className="cvSkillTitle">Idiomas</h3>
                <div className="cvIcons">

                </div>
            </div>

            </div>
        </div>
        </section>



      {/* EXPERIÊNCIA (1F1F1F) */}
      <section className="cvSection cvSection--experience">
        <div className="cvInner">
          <h2 className="cvTitle">Experiência</h2>
          <p className="cvSubtitle">
            Atuo na interseção entre design, engenharia de software e implementação.
          </p>

          <div className="cvTimeline">
            <div className="cvTimelineItem">
              <div className="cvTimelineYear">2024 — Presente</div>
              <div>
                <div className="cvTimelineTitle">Pesquisa e Design (Canal Ciência / PISAC)</div>
                <p className="cvTimelineText">
                  Atuação com gamificação, UX/UI, análise de dados e apoio à implementação em WordPress,
                  com foco em acessibilidade e experiência do usuário.
                </p>
              </div>
            </div>

            <div className="cvTimelineItem">
              <div className="cvTimelineYear">2024</div>
              <div>
                <div className="cvTimelineTitle">Projetos de UI/UX (Workoast)</div>
                <p className="cvTimelineText">
                  Design de interfaces para produtos SaaS e websites (recrutamento, imobiliária e fintech),
                  com foco em consistência visual e usabilidade.
                </p>
              </div>
            </div>

            <div className="cvTimelineItem">
              <div className="cvTimelineYear">2023 — Presente</div>
              <div>
                <div className="cvTimelineTitle">Engenharia de Software (UnB)</div>
                <p className="cvTimelineText">
                  Desenvolvimento de projetos acadêmicos e pessoais, com foco em boas práticas,
                  arquitetura, testes e desenvolvimento front-end/back-end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCAÇÃO (FFFFFFF) */}
      <section className="cvSection cvSection--education">
        <div className="cvInner">
          <h2 className="cvTitle">Educação</h2>
          <p className="cvSubtitle">Formação acadêmica e trilhas de desenvolvimento.</p>

          <div className="cvTimeline">
            <div className="cvTimelineItem">
              <div className="cvTimelineYear">UnB</div>
              <div>
                <div className="cvTimelineTitle">Engenharia de Software</div>
                <p className="cvTimelineText">
                  Graduação com ênfase em desenvolvimento de software, UX/UI, qualidade e pesquisa aplicada.
                </p>
              </div>
            </div>

            <div className="cvTimelineItem">
              <div className="cvTimelineYear">Cambridge</div>
              <div>
                <div className="cvTimelineTitle">Certificação C1</div>
                <p className="cvTimelineText">
                  Certificação de proficiência em inglês com foco em comunicação avançada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIGOS (EDCFE7) */}
      <section className="cvSection cvSection--articles">
        <div className="cvInner">
          <h2 className="cvTitle">Artigos publicados</h2>
          <p className="cvSubtitle">Publicações e produção acadêmica.</p>

          <div className="cvArticlesGrid">
            <article className="cvArticleCard">
              <h3 className="cvTimelineTitle" style={{ color: "#1f1f1f" }}>
                Artigo 1 (Conferência Internacional)
              </h3>
              <p className="cvText" style={{ marginTop: 10, opacity: 0.85 }}>
                Título / autores / evento — (substitua aqui pelo texto real).
              </p>
            </article>

            <article className="cvArticleCard">
              <h3 className="cvTimelineTitle" style={{ color: "#1f1f1f" }}>
                Artigo 2 (Conferência Internacional)
              </h3>
              <p className="cvText" style={{ marginTop: 10, opacity: 0.85 }}>
                Título / autores / evento — (substitua aqui pelo texto real).
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CURSOS E CERTIFICADOS (1F1F1F) */}
      <section className="cvSection cvSection--courses">
        <div className="cvInner">
          <h2 className="cvTitle">Cursos e certificados</h2>
          <p className="cvSubtitle">Cursos, programas e trilhas concluídas.</p>

          <div className="cvCoursesGrid">
            <div className="cvCourseCard">
              <div className="cvTimelineTitle">Mulheres na Ciência e Inovação (British Council)</div>
              <p className="cvTimelineText" style={{ marginTop: 10 }}>
                Programa com atividades em setembro/outubro de 2024 (24h).
              </p>
            </div>

            <div className="cvCourseCard">
              <div className="cvTimelineTitle">Curso / Certificação (adicione aqui)</div>
              <p className="cvTimelineText" style={{ marginTop: 10 }}>
                Descrição curta do curso.
              </p>
            </div>

            <div className="cvCourseCard">
              <div className="cvTimelineTitle">Curso / Certificação (adicione aqui)</div>
              <p className="cvTimelineText" style={{ marginTop: 10 }}>
                Descrição curta do curso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIAÇÕES (FFFFFFF) */}
      <section className="cvSection cvSection--awards">
        <div className="cvInner">
          <h2 className="cvTitle">Premiações</h2>
          <p className="cvSubtitle">Reconhecimentos e conquistas.</p>

          <div className="cvAwardsGrid">
            <div className="cvAwardCard">
              <div className="cvTimelineTitle" style={{ color: "#1f1f1f" }}>
                Melhor Artigo (Conferência Internacional)
              </div>
              <p className="cvText" style={{ marginTop: 10, opacity: 0.85 }}>
                Premiação recebida pelo trabalho com gamificação e pesquisa aplicada.
              </p>
            </div>

            <div className="cvAwardCard">
              <div className="cvTimelineTitle" style={{ color: "#1f1f1f" }}>
                Premiação / Reconhecimento (adicione aqui)
              </div>
              <p className="cvText" style={{ marginTop: 10, opacity: 0.85 }}>
                Descrição curta da premiação.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
