import "../styles/skillsPage.css";
import {
  PythonIcon,
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  CIcon,
  RIcon,
  ReactIcon,
  NodeIcon,
  ExpressIcon,
  TailwindIcon,
  BootstrapIcon,
  FigmaIcon,
  GitIcon,
  WordpressIcon,
  MySqlIcon,
  PostgresIcon,
  MongoDbIcon,
  OracleIcon,
  TimeIcon,
  QaIcon,
  CleancodeIcon,
  ThinkIcon,
  IaIcon,
  PlanejamentoIcon,
  TesteIcon,
  PesquisaIcon,
  EscritaIcon,
  CriatividadeIcon,
  AgeisIcon,
  PrototipoIcon,
  DesignIcon,
  JavaIcon, 
  MetricasIcon,
  UxResearchIcon,
  DockerIcon,
  BoasIcon,
  FocosIcon,
} from "../components/icons";

function Skill({ icon, label }) {
  return (
    <div className="cvIconItem">
      <div className="cvIcon" aria-hidden="true">
        {icon}
      </div>
      <span className="cvIconLabel">{label}</span>
    </div>
  );
}

function SkillTag({ label }) {
  return <span className="cvTag">{label}</span>;
}

function SkillCard({ title, subtitle, children, tags }) {
  return (
    <article className="cvSkillCard">
      <header className="cvSkillCardHeader">
        <h3 className="cvSkillCardTitle">{title}</h3>
        {subtitle ? <p className="cvSkillCardSubtitle">{subtitle}</p> : null}
      </header>

      <div className="cvSkillCardBody">{children}</div>

      {tags?.length ? (
        <div className="cvTags">
          {tags.map((t) => (
            <SkillTag key={t} label={t} />
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function Skills() {
  return (
    <section className="cvSection cvSection--skills" id="skills">
      <div className="cvInner">
        <h2 className="cvTitle">Skills</h2>
        <p className="cvSubtitle">
          Hard skills e soft skills aplicadas em projetos de engenharia de software, design e pesquisa.
        </p>

        <div className="cvSkillsCardsGrid">
          {/* LINGUAGENS */}
          <SkillCard
            title="Linguagens de Programação"
            subtitle="Base técnica para desenvolvimento, pesquisa e automação."
            tags={[
              "Lógica",
              "Boas práticas",
              "Projetos acadêmicos e profissionais",
            ]}
          >
            <div className="cvIcons">
              <Skill icon={<PythonIcon />} label="Python" />
              <Skill icon={<JavaScriptIcon />} label="JavaScript" />
              <Skill icon={<HtmlIcon />} label="HTML" />
              <Skill icon={<CssIcon />} label="CSS" />
              <Skill icon={<CIcon />} label="C" />
              <Skill icon={<RIcon />} label="R" />
            </div>
          </SkillCard>

          {/* FRONT-END */}
          <SkillCard
            title="Front-end"
            subtitle="Interfaces responsivas, acessíveis e com componentização."
            tags={[
              "React",
              "Design responsivo",
              "Acessibilidade",
              "Componentização",
            ]}
          >
            <div className="cvIcons">
              <Skill icon={<ReactIcon />} label="React" />
              <Skill icon={<TailwindIcon />} label="TailwindCSS" />
              <Skill icon={<BootstrapIcon />} label="Bootstrap" />
              <Skill icon={<WordpressIcon />} label="WordPress" />
            </div>

            <p className="cvSkillCardText">
              Desenvolvimento de páginas e aplicações com foco em UX, consistência visual,
              boas práticas de UI e integração com APIs.
            </p>
          </SkillCard>

          {/* BACK-END */}
          <SkillCard
            title="Back-end"
            subtitle="APIs e integrações para dar suporte a aplicações e dashboards."
            tags={["Node", "Express", "REST", "Integração Front ↔ Back"]}
          >
            <div className="cvIcons">
              <Skill icon={<NodeIcon />} label="Node.js" />
              <Skill icon={<ExpressIcon />} label="Express" />
              <Skill icon={<JavaIcon />} label="Java" />
              <Skill icon={<CIcon />} label="C" />
            </div>

            <p className="cvSkillCardText">
              Construção de endpoints e integrações para projetos acadêmicos e sistemas web,
              incluindo comunicação e telemetria (ex.: MQTT em projetos IoT).
            </p>
          </SkillCard>

          {/* DADOS & BANCOS */}
          <SkillCard
            title="Dados & Bancos de Dados"
            subtitle="Modelagem, consultas e suporte a aplicações."
            tags={[
              "SQL",
              "Modelagem",
              "Integração com aplicações",
              "Análise exploratória",
            ]}
          >
            <div className="cvIcons">
              <Skill icon={<MySqlIcon />} label="MySQL" />
              <Skill icon={<PostgresIcon />} label="PostgreSQL" />
              <Skill icon={<MongoDbIcon />} label="MongoDB" />
              <Skill icon={<OracleIcon />} label="Oracle" />
            </div>

            <p className="cvSkillCardText">
              Experiência com bancos relacionais e NoSQL, organização de dados e suporte
              a fluxos de produto, pesquisa e sistemas web.
            </p>
          </SkillCard>

          {/* PESQUISA & ESCRITA */}
          <SkillCard
            title="Pesquisa, Escrita Científica & Métricas"
            subtitle="Produção acadêmica e análise de dados para tomada de decisão."
            tags={[
              "Artigos internacionais",
              "Revisão bibliográfica",
              "Métricas",
              "Análise de dados",
            ]}
          >
            <div className="cvIcons">
              <Skill icon={<PesquisaIcon />} label="Pesquisa" />
              <Skill icon={<EscritaIcon />} label="Escrita" />
              <Skill icon={<CriatividadeIcon />} label="Criatividade" />
              <Skill icon={<MetricasIcon />} label="Métricas" />
            </div>
            <p className="cvSkillCardText">
              Escrita e publicação científica, revisão bibliográfica, análise de métricas,
              estudo de perfis motivacionais, avaliação de engajamento e relatórios técnicos.
            </p>

            <div className="cvTags">
              {[
                "Escrita científica",
                "Relatórios técnicos",
                "Análise quantitativa",
                "Coeficiente de Pearson",
                "Gamificação (Octalysis)",
              ].map((t) => (
                <SkillTag key={t} label={t} />
              ))}
            </div>
          </SkillCard>

          {/* UX/UI */}
          <SkillCard
            title="UX/UI & Design"
            subtitle="Do conceito ao protótipo, com foco em clareza e consistência."
            tags={[
              "Figma",
              "Protótipos navegáveis",
              "Design System",
              "UX Research",
            ]}
          >
            <div className="cvIcons">
              <Skill icon={<FigmaIcon />} label="Figma" />
              <Skill icon={<PrototipoIcon />} label="Protótipo" />
              <Skill icon={<DesignIcon />} label="Design" />
              <Skill icon={<UxResearchIcon />} label="UX Research" />
            </div>

            <p className="cvSkillCardText">
              Criação de fluxos, jornadas, protótipos e componentes reutilizáveis.
              Trabalho com acessibilidade e padronização visual para produtos digitais.
            </p>

            <div className="cvTags">
              {[
                "Wireframes",
                "Jornada do usuário",
                "Testes de usabilidade",
                "Acessibilidade digital",
                "Documentação de UI",
              ].map((t) => (
                <SkillTag key={t} label={t} />
              ))}
            </div>
          </SkillCard>

          {/* DEVOPS & FERRAMENTAS */}
          <SkillCard
            title="Ferramentas & Workflow"
            subtitle="Fluxo de trabalho, versionamento e organização."
            tags={[
              "Git",
              "Docker",
              "Linux",
              "Documentação",
              "Código aberto",
            ]}
          >
            <div className="cvIcons">
              <Skill icon={<GitIcon />} label="Git" />
              <Skill icon={<AgeisIcon />} label="Scrum" />
              <Skill icon={<PlanejamentoIcon />} label="Planejamento" />
              <Skill icon={<DockerIcon />} label="Docker" />
            </div>

            <p className="cvSkillCardText">
              Versionamento, trabalho colaborativo, organização de repositórios,
              documentação e contribuição em comunidades (ex.: Debian).
            </p>
          </SkillCard>

          <SkillCard
              title="Arquitetura, Qualidade & Boas Práticas"
              subtitle="Base para software sustentável, escalável e confiável."
              tags={[
                "Qualidade de Software",
                "Boas práticas",
                "Sustentabilidade digital",
                "Manutenibilidade",
              ]}
            >

            <div className="cvIcons">
              <Skill icon={<TesteIcon />} label="Teste" />
              <Skill icon={<QaIcon />} label="Qualidade" />
              <Skill icon={<CleancodeIcon />} label="Clean Code" />
              <Skill icon={<BoasIcon />} label="Boas Práticas" />
            </div>
              <p className="cvSkillCardText">
                Atuação com princípios de qualidade de software, organização de código,
                documentação técnica, testes conceituais e preocupação com impacto,
                manutenção e sustentabilidade das soluções desenvolvidas.
              </p>

              <div className="cvTags">
                {[
                  "Arquitetura de software",
                  "Clean Code",
                  "Documentação técnica",
                  "Testes e validação",
                  "Sustentabilidade digital",
                  "Software livre",
                ].map((t) => (
                  <SkillTag key={t} label={t} />
                ))}
              </div>
            </SkillCard>

          {/* SOFT SKILLS */}
          <SkillCard
            title="Soft Skills (aplicadas)"
            subtitle="Habilidades comportamentais que impactam diretamente a execução."
            tags={["Comunicação", "Organização", "Autonomia", "Colaboração"]}
          >

            <div className="cvIcons">
              <Skill icon={<ThinkIcon />} label="Comunicação" />
              <Skill icon={<IaIcon />} label="Organização" />
              <Skill icon={<TimeIcon />} label="Autonomia" />
              <Skill icon={<FocosIcon />} label="Foco" />
            </div>
            <div className="cvTags">
              {[
                "Comunicação técnica (PT/EN)",
                "Escrita clara e estruturada",
                "Trabalho em equipe multidisciplinar",
                "Pensamento analítico",
                "Resolução de problemas",
                "Autonomia em pesquisa",
                "Gestão de tempo",
                "Atenção a detalhes",
              ].map((t) => (
                <SkillTag key={t} label={t} />
              ))}
            </div>
          </SkillCard>
        </div>
      </div>
    </section>
  );
}
