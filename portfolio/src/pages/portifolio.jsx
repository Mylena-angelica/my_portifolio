// src/pages/PortfolioPage.jsx
import { useEffect, useMemo, useState } from "react";
import "../styles/portifolioPage.css";

// imagens
import solarBanyuImg from "../img/SolarBanyuHome.png";
import eraImg from "../img/EraHome.png";
import recrutamentoImg from "../img/RecrutamentoHome.png";
import imobiliariaImg from "../img/RealStateHome.png";
import fintechImg from "../img/FintechHome.png";
import apitaImg from "../img/ApitaHome.png";

// placeholders (use o que você tiver)
import placeholderImg from "../img/ApitaHome.png";

const ALL = "Todos";

/* =========================
   DADOS (preencha aos poucos)
   - prototype.type: "link" ou "iframe"
   - confidentiality: string ou null
========================= */
const PROJECTS = [
  {
    title: "SolarBanyu",
    subtitle: "IoT / Sustentabilidade / Multidisciplinar",
    categories: ["IoT", "Sustentabilidade", "Full Stack"],
    tags: ["ESP32", "MQTT", "Node.js", "React", "Dashboard"],
    image: solarBanyuImg,

    brief: "Dessalinização solar com ESP32, telemetria em tempo real e dashboard analítico.",
    description:
      "Projeto acadêmico de dessalinização por energia solar e osmose reversa. Integra ESP32, telemetria via MQTT, backend em Node.js e dashboard em React, com foco em validação, eficiência e sustentabilidade.",

    confidentiality: null,

    branding: {
      palette: ["#0F4C5C", "#F3D9EA", "#1F1F1F", "#FFFFFF"],
      rationale:
        "Azul-petróleo reforça tecnologia e confiança; rosa claro cria leveza; preto melhora contraste; branco mantém sensação de espaço e clareza.",
    },

    prototype: {
      type: "link",
      url: "",
      note: "Fluxos do dashboard e principais telas do sistema.",
    },

    links: { repo: "", demo: "", article: "" },
    related: ["ERA", "Apita Cidadão", "Debian (Contribuições)"],
  },

  {
    title: "ERA",
    subtitle: "Dados / Sustentabilidade Digital / Obras",
    categories: ["Dados", "Sustentabilidade", "Front-end"],
    tags: ["React", "Design System", "Acessibilidade", "DataViz"],
    image: eraImg,

    brief: "Plataforma web para gestão de recursos em canteiros de obras.",
    description:
      "Front-end em React com componentes de visualização de dados e biblioteca reutilizável, mantendo consistência visual e acessibilidade.",

    confidentiality: null,

    branding: {
      palette: ["#0F4C5C", "#7CB342", "#1F1F1F", "#FFFFFF"],
      rationale:
        "Verde remete a sustentabilidade; azul dá credibilidade; preto e branco garantem legibilidade e contraste.",
    },

    prototype: { type: "link", url: "", note: "Protótipo e estrutura de telas do sistema." },
    links: { repo: "", demo: "", article: "" },
    related: ["SolarBanyu", "Jornada Galáctica (Canal Ciência)"],
  },

  {
    title: "Debian (Contribuições)",
    subtitle: "Open Source / Qualidade / Documentação",
    categories: ["Open Source", "Qualidade"],
    tags: ["Packaging", "Docs", "Testing", "DebConf"],
    image: placeholderImg,

    brief: "Empacotamento, testes e documentação para a comunidade Debian.",
    description:
      "Atuação em manutenção e melhoria de pacotes, testes e documentação. Participação em iniciativas como Debian Women e palestras/BoF em eventos da comunidade.",

    confidentiality: null,
    branding: { palette: ["#D70A53", "#FFFFFF", "#1F1F1F"], rationale: "Identidade inspirada no ecossistema Debian." },
    prototype: { type: "link", url: "", note: "Links e materiais podem ser adicionados depois." },
    links: { repo: "", demo: "", article: "" },
    related: ["ERA", "SolarBanyu"],
  },

  {
    title: "Jornada Galáctica (Canal Ciência)",
    subtitle: "Gamificação / Dados / Pesquisa",
    categories: ["Pesquisa", "Gamificação", "Dados"],
    tags: ["R", "Métricas", "Perfis Motivacionais", "WordPress"],
    image: placeholderImg,

    brief: "Missões gamificadas com narrativa e desafios interativos para engajar público com ciência.",
    description:
      "Análise de dados e simulação de perfis motivacionais, incluindo análises em R (ex.: correlação de Pearson) para entender comportamento e engajamento. Design e apoio à implementação das páginas de gamificação.",

    confidentiality: null,
    branding: { palette: ["#0F4C5C", "#F3D9EA", "#1F1F1F"], rationale: "Contraste e tom lúdico mantendo leitura e foco." },
    prototype: { type: "link", url: "", note: "Protótipo/prints e descrição das missões podem ser adicionados depois." },
    links: { repo: "", demo: "", article: "" },
    related: ["Atloria", "ERA"],
  },

  {
    title: "Listen the Sign",
    subtitle: "Seeds for the Future / Tech4Good",
    categories: ["Inovação", "Impacto Social"],
    tags: ["Acessibilidade", "Inclusão", "Produto"],
    image: placeholderImg,

    brief: "Projeto Tech4Good para facilitar comunicação entre surdos e ouvintes no contexto corporativo.",
    description:
      "Criado na competição Tech4Good do Seeds for the Future. Foco em acessibilidade, inclusão e solução orientada ao ambiente profissional.",

    confidentiality: null,
    branding: { palette: ["#0F4C5C", "#FFFFFF", "#1F1F1F"], rationale: "Seriedade + acessibilidade + clareza." },
    prototype: { type: "link", url: "", note: "Protótipo/links do projeto podem ser adicionados depois." },
    links: { repo: "", demo: "", article: "" },
    related: ["Apita Cidadão", "Atloria"],
  },

  {
    title: "Apita Cidadão",
    subtitle: "Acesso à informação / GovTech",
    categories: ["GovTech", "Produto"],
    tags: ["UX", "Front-end", "Arquitetura"],
    image: apitaImg,

    brief: "Plataforma de acesso à informação e organização de fluxos para serviços públicos.",
    description:
      "Projeto com foco em arquitetura da informação, experiência do usuário e organização de jornadas para facilitar interação com serviços e informações públicas.",

    confidentiality: null,
    branding: { palette: ["#0F4C5C", "#F3D9EA", "#1F1F1F"], rationale: "Confiança, proximidade e legibilidade." },
    prototype: { type: "link", url: "", note: "Detalhes do protótipo podem ser adicionados depois." },
    links: { repo: "", demo: "", article: "" },
    related: ["Listen the Sign", "Recrutamento inteligente"],
  },

  {
    title: "Atloria",
    subtitle: "AR / Estruturas de Dados / Gamificação",
    categories: ["Pesquisa", "Gamificação", "AR/VR"],
    tags: ["AR", "Educação", "Interação", "Engenharia"],
    image: placeholderImg,

    brief: "TCC: plataforma gamificada para visualizar estruturas de dados em Realidade Aumentada.",
    description:
      "Foco em motivação, experiência e aprendizagem com elementos de gamificação aplicados ao estudo de estruturas de dados.",

    confidentiality: null,
    branding: { palette: ["#0F4C5C", "#FFFFFF", "#1F1F1F"], rationale: "Tecnologia + educação + contraste." },
    prototype: { type: "link", url: "", note: "Protótipo/prints e documentação podem ser adicionados depois." },
    links: { repo: "", demo: "", article: "" },
    related: ["Jornada Galáctica (Canal Ciência)", "ERA"],
  },

  {
    title: "Fintech de saúde",
    subtitle: "UI/UX / Product Design",
    categories: ["Design", "Produto"],
    tags: ["Figma", "UX", "UI", "Fluxos"],
    image: fintechImg,

    brief: "Design de produto com foco em consistência visual e jornada orientada a conversão.",
    description:
      "Projeto internacional com entregas de UI/UX, fluxos e protótipos navegáveis. Pode incluir aviso de confidencialidade conforme necessário.",

    confidentiality: "Projeto sob confidencialidade (NDA). Mostro apenas visão geral e entregáveis não sensíveis.",
    branding: { palette: ["#0F4C5C", "#FFFFFF", "#1F1F1F"], rationale: "Confiança e foco em produto." },
    prototype: { type: "link", url: "", note: "Protótipo completo restrito; visão geral pode ser adicionada." },
    links: { repo: "", demo: "", article: "" },
    related: ["Recrutamento inteligente", "Website de Imobiliária"],
  },

  {
    title: "Recrutamento inteligente",
    subtitle: "Web Design / SaaS",
    categories: ["Design", "Front-end"],
    tags: ["Landing Page", "HTML", "CSS", "JS", "UX"],
    image: recrutamentoImg,

    brief: "Interface SaaS com foco em conversão e clareza da jornada do usuário.",
    description:
      "Arquitetura de informação, seções e CTAs estruturados para conversão. Implementação front-end e melhorias de usabilidade.",

    confidentiality: "Projeto sob confidencialidade (NDA).",
    branding: { palette: ["#0F4C5C", "#FFFFFF", "#1F1F1F"], rationale: "SaaS: clean, forte em hierarquia visual." },
    prototype: { type: "link", url: "", note: "Entregáveis e protótipo podem ser adicionados depois." },
    links: { repo: "", demo: "", article: "" },
    related: ["Website de Imobiliária", "Fintech de saúde"],
  },

  {
    title: "Website de Imobiliária",
    subtitle: "Web Design / Real State",
    categories: ["Design", "Front-end"],
    tags: ["Elementor", "WordPress", "UI", "UX"],
    image: imobiliariaImg,

    brief: "Site com estrutura de páginas, listagem de imóveis e fluxos de contato/agendamento.",
    description:
      "Organização visual e lógica de seções, consistência e melhoria da experiência do usuário, com suporte a implementação via WordPress/Elementor.",

    confidentiality: "Projeto sob confidencialidade (NDA).",
    branding: { palette: ["#0F4C5C", "#FFFFFF", "#1F1F1F"], rationale: "Imobiliário: confiança e leitura rápida." },
    prototype: { type: "link", url: "", note: "Protótipo/links podem ser adicionados depois." },
    links: { repo: "", demo: "", article: "" },
    related: ["Recrutamento inteligente", "Fintech de saúde"],
  },
];

function uniqCategories(list) {
  const set = new Set();
  list.forEach((p) => (p.categories || []).forEach((c) => set.add(c)));
  return [ALL, ...Array.from(set).sort((a, b) => a.localeCompare(b))];
}

export default function PortfolioPage() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState(ALL);
  const [selected, setSelected] = useState(null);

  // trava scroll do fundo quando modal abre
  useEffect(() => {
    if (selected) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [selected]);

  const categories = useMemo(() => uniqCategories(PROJECTS), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return PROJECTS.filter((p) => {
      const matchesCat = activeCat === ALL || (p.categories || []).includes(activeCat);

      const hay = [
        p.title,
        p.subtitle,
        p.description,
        p.brief,
        ...(p.tags || []),
        ...(p.categories || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesQuery = !q || hay.includes(q);

      return matchesCat && matchesQuery;
    });
  }, [query, activeCat]);

  return (
    <main className="pf">
      <header className="pf__hero">
        <div className="pf__inner">
          <h1 className="pf__title">Portfólio</h1>
          <p className="pf__subtitle">
            Projetos em design, engenharia e pesquisa — do conceito à implementação.
          </p>

          <div className="pf__controls">
            <div className="pf__search">
              <input
                className="pf__input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por projeto, tecnologia, categoria..."
                aria-label="Buscar projetos"
              />
            </div>

            <div className="pf__filters" role="tablist" aria-label="Filtros do portfólio">
              {categories.map((c) => (
                <button
                  key={c}
                  className={`pf__chip ${activeCat === c ? "isActive" : ""}`}
                  onClick={() => setActiveCat(c)}
                  type="button"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="pf__section">
        <div className="pf__inner">
          <div className="pf__grid">
            {filtered.map((p) => (
              <article key={p.title} className="pfCard">
                <div className="pfCard__img">
                  <img className="pfCard__imgEl" src={p.image} alt={p.title} />
                </div>

                <div className="pfCard__body">
                  <div className="pfCard__top">
                    <h3 className="pfCard__title">{p.title}</h3>
                    <p className="pfCard__meta">{p.subtitle}</p>
                  </div>

                  <div className="pfCard__tags">
                    {(p.tags || []).slice(0, 5).map((t) => (
                      <span key={t} className="pfTag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    className="pfCard__btn"
                    type="button"
                    onClick={() => setSelected(p)}
                    aria-label={`Abrir detalhes do projeto ${p.title}`}
                  >
                    Ver detalhes
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="pf__empty">Nenhum projeto encontrado com esse filtro/busca.</p>
          )}
        </div>
      </section>

      {/* MODAL (case study) */}
      {selected && (
        <div className="pfModal" role="dialog" aria-modal="true">
          <div className="pfModal__overlay" onClick={() => setSelected(null)} />

          <div className="pfModal__card">
            <button
              className="pfModal__close"
              onClick={() => setSelected(null)}
              aria-label="Fechar"
              type="button"
            >
              ✕
            </button>

            {/* HEADER */}
            <header className="pfModal__header">
              <h2 className="pfModal__title">{selected.title}</h2>
              <p className="pfModal__subtitle">{selected.subtitle}</p>
            </header>

            {/* HERO (imagem + brief/descrição + alerta) */}
            <section className="pfModal__hero">
              <div className="pfModal__heroImg">
                <img className="pfModal__imgEl" src={selected.image} alt={selected.title} />
              </div>

              <div className="pfModal__heroText">
                {selected.brief && (
                  <div className="pfModal__block">
                    <h3 className="pfModal__h3">Brief</h3>
                    <p className="pfModal__p">{selected.brief}</p>
                  </div>
                )}

                {selected.description && (
                  <div className="pfModal__block">
                    <h3 className="pfModal__h3">Descrição</h3>
                    <p className="pfModal__p">{selected.description}</p>
                  </div>
                )}

                {selected.confidentiality && (
                  <div className="pfModal__alert">
                    <span className="pfModal__alertDot" aria-hidden="true" />
                    <span>{selected.confidentiality}</span>
                  </div>
                )}

                {/* LINKS rápidos */}
                <div className="pfModal__links">
                  {selected.links?.repo && (
                    <a className="pfLink" href={selected.links.repo} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                  {selected.links?.demo && (
                    <a className="pfLink" href={selected.links.demo} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  )}
                  {selected.links?.article && (
                    <a className="pfLink" href={selected.links.article} target="_blank" rel="noreferrer">
                      Artigo
                    </a>
                  )}
                </div>
              </div>
            </section>

            {/* BRANDING */}
            {(selected.branding?.palette?.length || selected.branding?.rationale) && (
              <section className="pfModal__section">
                <h3 className="pfModal__h3">Paleta de cores (Branding)</h3>

                {selected.branding?.palette?.length > 0 && (
                  <div className="pfPalette">
                    {selected.branding.palette.map((hex) => (
                      <div key={hex} className="pfSwatch">
                        <span className="pfSwatch__color" style={{ background: hex }} />
                        <span className="pfSwatch__hex">{hex}</span>
                      </div>
                    ))}
                  </div>
                )}

                {selected.branding?.rationale && <p className="pfModal__p">{selected.branding.rationale}</p>}
              </section>
            )}

            {/* PROTÓTIPO */}
            {(selected.prototype?.url || selected.prototype?.note) && (
              <section className="pfModal__section">
                <h3 className="pfModal__h3">Protótipo</h3>

                {selected.prototype?.note && <p className="pfModal__p">{selected.prototype.note}</p>}

                {selected.prototype?.url && selected.prototype?.type === "iframe" && (
                  <div className="pfEmbed">
                    <iframe
                      src={selected.prototype.url}
                      title={`Protótipo - ${selected.title}`}
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                )}

                {selected.prototype?.url && selected.prototype?.type === "link" && (
                  <a className="pfLink" href={selected.prototype.url} target="_blank" rel="noreferrer">
                    Abrir protótipo ↗
                  </a>
                )}

                {!selected.prototype?.url && (
                  <p className="pfModal__p" style={{ marginTop: 10 }}>
                    Link/iframe do protótipo ainda não adicionado.
                  </p>
                )}
              </section>
            )}

            {/* OUTROS PROJETOS */}
            {selected.related?.length > 0 && (
              <section className="pfModal__section">
                <h3 className="pfModal__h3">Outros projetos</h3>

                <div className="pfRelated">
                  {selected.related
                    .map((title) => PROJECTS.find((p) => p.title === title))
                    .filter(Boolean)
                    .map((p) => (
                      <button
                        key={p.title}
                        type="button"
                        className="pfRelatedCard"
                        onClick={() => setSelected(p)}
                      >
                        <div className="pfRelatedCard__img">
                          <img src={p.image} alt={p.title} />
                        </div>
                        <div className="pfRelatedCard__txt">
                          <div className="pfRelatedCard__title">{p.title}</div>
                          <div className="pfRelatedCard__meta">{p.subtitle}</div>
                        </div>
                      </button>
                    ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <footer className="pfModal__footer">
              <a className="pfCTA" href="#contato">
                Entre em contato
              </a>
              <button className="pfGhost" type="button" onClick={() => setSelected(null)}>
                Fechar
              </button>
            </footer>
          </div>
        </div>
      )}
    </main>
  );
}
