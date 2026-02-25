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
import relataImg from "../img/RelataHome.png";
import atloriaImg from "../img/AtloriaHome.png";
import gaimingoImg from "../img/GaiaMingHome.png";

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
    title: "Relata",
    subtitle: "Aprimoramento de acessibilidade e conformidade WCAG em plataforma digital",
    categories: ["Acessibilidade", "UX/UI Design", "Auditoria", "Desenvolvimento Frontend", "Wordpress"],
    year: "2026",
    status: "Em andamento", 
    context: "Voluntário", 
    tags: ["WCAG", "Acessibilidade Digital", "UX Review", "Inclusão", "Heurísticas", "Conformidade"],
    image: relataImg,

    brief:
      "Atuação na adequação de acessibilidade com base nas diretrizes WCAG em projeto digital em desenvolvimento.",
    description:
      "Projeto em andamento no qual atuo na frente de acessibilidade digital. O design da plataforma já estava previamente definido e minha atuação está focada na análise, auditoria e adequação da interface às diretrizes internacionais de acessibilidade (WCAG). O trabalho envolve revisão de contraste, hierarquia semântica, navegação por teclado, foco visível, rotulagem adequada de componentes, leitura por tecnologias assistivas e recomendações técnicas para implementação acessível. A atuação busca garantir inclusão, conformidade normativa e melhoria da experiência para usuários com diferentes necessidades.",

    confidentiality: "Projeto em andamento sob confidencialidade (NDA). Detalhes técnicos e visuais não podem ser divulgados.",
    related: ["Apita Cidadão", "Altoria"],
  },

  {
    title: "Atloria",
    subtitle: "Realidade Aumentada + Gamificação para aprender Estruturas de Dados",
    categories: ["Gamificação", "AR/VR", "Engenharia de Software", "UX/UI Design", "Desenvolvimento Fullstack"],
    year: "2025 | 2026",
    status: "Em andamento (Implementação)", 
    context: "Projeto acadêmico", 
    tags: ["Educação", "Estruturas de Dados", "Realidade Aumentada", "Pesquisa"],
    image: atloriaImg,

    brief:
      "Projeto de TCC: plataforma gamificada para visualização e exploração de estruturas de dados em Realidade Aumentada.",
    description:
      "Atloria é uma proposta acadêmica que combina Realidade Aumentada e gamificação para apoiar o aprendizado de Estruturas de Dados. A solução foi desenhada para tornar conceitos abstratos mais visuais e interativos, com foco em motivação, experiência do usuário e progressão por desafios. O projeto envolve pesquisa, definição de mecânicas de engajamento, modelagem da experiência e prototipação navegável para validação do fluxo de aprendizagem.",

    confidentiality: null,
    branding: {
      palette: ["#F875AA", "#EDFFF0", "#AEDEFC", "#323232", "#FDEDED", "#F5CB58"],
      rationale: "Paleta vibrante e educativa, equilibrando tecnologia, ludicidade e contraste para leitura.",
    },
    prototype: {
      type: "iframe",
      url: "https://embed.figma.com/proto/L1r7o5kEQF9r5giGw9fr2C/Atloria?node-id=15-3635&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=15%3A3635&show-proto-sidebar=1&embed-host=share",
      note: "Interaja com a preview no Figma. Para versão mobile expanda",
    },
    links: { repo: "", demo: "", article: "" },
    related: ["Jornada Galáctica (Canal Ciência)", "ERA"],
  },

    {
    title: "Apita Cidadão",
    subtitle: "Plataforma GovTech para acesso à informação e organização de jornadas",
    categories: ["UX/UI Design", "Acessibilidade","Desenvolvimento Fullstack","Inteligência artificial", "Engenharia de Software"],
    year: "2025",
    status: "Finalizado", 
    context: "Projeto acadêmico", 
    tags: ["Arquitetura", "GovTech", "Visualização de dados", "Segurança"],
    image: apitaImg,

    brief: "Plataforma de acesso à informação e organização de fluxos para serviços públicos.",
    description:
      "O Apita Cidadão é uma plataforma GovTech voltada à denúncia e ao acesso estruturado à informação pública, desenvolvida em parceria com a Polícia Federal. A iniciativa busca oferecer um canal digital organizado, seguro e orientado ao cidadão para registro de denúncias e consulta de informações relevantes. O projeto concentra-se na modelagem da arquitetura da informação, organização de fluxos sensíveis e definição de jornadas claras, garantindo orientação adequada ao usuário durante o envio de dados. A solução prioriza transparência, confiabilidade e redução de ambiguidade informacional, contribuindo para a melhoria da comunicação entre instituição e sociedade.",

    confidentiality: "Projeto Open Source",
    branding: { palette: ["#1351B4", "#168821", "#FFCD07", "#E52207", "#333333", "#64748b"], rationale: "Paleta inspirada na identidade visual do Governo Digital Federal, buscando alinhamento institucional, credibilidade e reconhecimento visual imediato no contexto de serviços públicos." },
    prototype: { 
      type: "iframe",
      url: "https://embed.figma.com/proto/c3R2u1JvblHfORyRejceM6/Apita-Cidad%C3%A3o?node-id=399-26698&p=f&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=399%3A26698&embed-host=share",
      note: "Interaja com a preview no Figma. Para melhor visualização expanda", },
    links: { repo: "", demo: "", article: "" },
    related: ["Listen the Sign", "Recrutamento inteligente"],
  },

  {
    title: "GaiaMing",
    subtitle: "Plataforma inteligente para mensuração e engajamento em sustentabilidade",
    year: "2025",
    status: "Concluído",
    context: "Hackathon",

    categories: ["Sustentabilidade", "Inteligência Artificial", "Engenharia de Software", "UX/UI Design"],
    tags: [
      "Machine Learning",
      "NLP",
      "IoT Integration",
      "Big Data & Analytics",
      "Carbon Footprint",
      "Smart Cities",
      "ESG",
      "Green Technology"
    ],

    image: gaimingoImg,

    brief:
      "Solução desenvolvida em hackathon para tornar a sustentabilidade mensurável, engajadora e integrada para indivíduos, empresas e governos.",
      
    description:
      "GaiaMing aborda um dos desafios mais urgentes da atualidade: tornar a sustentabilidade tangível, mensurável e envolvente para indivíduos e organizações. A proposta integra Inteligência Artificial (IA/ML), Processamento de Linguagem Natural (NLP), integração com IoT e análise de dados para monitoramento de pegada de carbono e geração de relatórios ESG. A plataforma foi concebida para atuar em múltiplos cenários. Para indivíduos, permite acompanhar a pegada de carbono a partir de dados de estilo de vida e dispositivos conectados. Para empresas, funciona como uma solução SaaS para consolidação de relatórios ESG e engajamento de colaboradores. Para governos e ONGs, pode ser aplicada em campanhas educativas, programas de conscientização e desafios comunitários. Entre os principais problemas endereçados estão: a baixa percepção do impacto ambiental individual, a dificuldade corporativa em mensurar e reportar indicadores ESG de forma engajadora, e a fragmentação de soluções existentes no mercado. A inovação central do GaiaMing está na unificação de rastreamento ambiental, gamificação, marketplace sustentável e relatórios ESG em uma única plataforma escalável. O conceito de micro-offsets de carbono torna a ação climática acessível e participativa. Ao combinar tecnologia avançada com valores culturais e engajamento coletivo, o projeto transforma a sustentabilidade de um conceito abstrato em uma experiência prática, mensurável e recompensadora. Atuei no desenvolvimento do protótipo e na definição da interface e experiência do usuário (UI/UX), estruturando fluxos, jornadas e visualizações voltadas à clareza de dados e engajamento sustentável.",

    confidentiality: null,

    branding: {
      palette: ["#429547", "#CAF7E3","#E4BAD4", "#025366", "#26BAEE", "#E6BF4A", "#F6F6F6", "#333333"],
      rationale: "Identidade visual própria inspirada no conceito de Gaia (Terra) e no caractere chinês 'Ming', que remete à ideia de clareza e iluminação. A proposta visual combina tecnologia e natureza, refletindo inovação orientada à consciência ambiental."
    },

    prototype: {
      type: "iframe",
      url: "https://embed.figma.com/proto/shQkugBHG7xRLLrfLKPgiv/GaiaMing?node-id=5-812&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A812&embed-host=share",
      note: "Interaja com a preview no Figma. Para melhor visualização expanda"
    },

    links: { repo: "", demo: "", article: "" },

    related: ["ERA", "SolarBanyu"]
  },

  {
  title: "Recrutamento Inteligente",
  subtitle: "Plataforma SaaS de recrutamento inteligente orientado a Inteligência Artificial",
  year: "2025",
  status: "Concluído",
  context: "Projeto Profissional",

  categories: ["UX/UI Design", "Acessibilidade", "Engenharia de Software", "Wordpress"],
  tags: [
    "Landing Page",
    "UX",
    "Arquitetura da Informação",
    "HTML",
    "CSS",
    "JavaScript",
    "SaaS"
  ],
  image: recrutamentoImg,

  brief:
    "Interface SaaS desenvolvida com foco em clareza estratégica, hierarquia visual e otimização da conversão.",

  description:
    "Projeto profissional sob confidencialidade (NDA) voltado ao desenvolvimento de uma interface SaaS para recrutamento. A atuação concentrou-se na estruturação da arquitetura da informação, organização de seções estratégicas e definição de CTAs orientados à conversão. Foram trabalhados princípios de hierarquia visual, escaneabilidade, clareza de proposta de valor e redução de fricção na jornada do usuário. A implementação front-end priorizou consistência visual, responsividade e melhoria da usabilidade, com foco em experiência fluida tanto para recrutadores quanto para candidatos. A solução foi concebida para comunicar autoridade, eficiência e modernidade, alinhando identidade visual e performance de interface aos objetivos de negócio.",

  confidentiality:
    "Projeto desenvolvido sob confidencialidade (NDA). Informações detalhadas sobre cliente e métricas não podem ser divulgadas.",

  branding: {
    palette: [],
    rationale:
      "Identidade visual orientada ao universo SaaS: estética limpa, forte hierarquia visual e contraste para reforçar credibilidade e clareza informacional."
  },

  prototype: {
    type: "link",
    url: "",
    note:
      "Entregáveis e protótipo não públicos devido à confidencialidade do projeto."
  },



  related: ["Website de Imobiliária", "Fintech de saúde"],
},
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

    {
    title: "Confiar",
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

      {
    title: "S.E.R",
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

      {
    title: "Gaia Ming",
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

      {
    title: "Spryte",
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
      {
    title: "Boto",
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

      {
    title: "Novo BCE Pergamum",
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
              {(selected.year || selected.status || selected.context) && (
              <div className="pfModal__meta">
                {selected.year && <span>{selected.year}</span>}
                {selected.status && <span> • {selected.status}</span>}
                {selected.context && <span> • {selected.context}</span>}
              </div>
            )}
            </header>

            {/* HERO (imagem + brief/descrição + alerta) */}
            <section className="pfModal__hero">
              <div className="pfModal__heroImg">
                <img
                  className="pfModal__imgEl"
                  src={selected.image}
                  alt={selected.title}
                />

                {/* TAGS abaixo da imagem */}
                {selected.tags?.length > 0 && (
                  <div className="pfModal__tags pfModal__tags--underImage">
                    {selected.tags.map((tag) => (
                      <span key={tag} className="pfTag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
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
            {(selected.branding?.rationale || selected.branding?.palette?.length) && (
              <section className="pfModal__section">
                <h3 className="pfModal__h3">Paleta de cores (Branding)</h3>

                {/* RATIONALE primeiro */}
                {selected.branding?.rationale && (
                  <p className="pfModal__p" style={{ marginBottom: 14 }}>
                    {selected.branding.rationale}
                  </p>
                )}

                {/* Depois as cores */}
                {selected.branding?.palette?.length > 0 && (
                  <div className="pfPalette">
                    {selected.branding.palette.map((hex) => (
                      <div key={hex} className="pfSwatch">
                        <span
                          className="pfSwatch__color"
                          style={{ background: hex }}
                        />
                        <span className="pfSwatch__hex">{hex}</span>
                      </div>
                    ))}
                  </div>
                )}
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
