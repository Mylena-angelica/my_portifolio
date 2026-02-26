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
import jornadaImg from "../img/JornadaGalacticaHome.png";
import pisacImg from "../img/Pisac.png";
import spryteImg from "../img/labs.png";
import bceImg from "../img/bce.png";
import simpleImg from "../img/simplenote.png";
import botoImg from "../img/boto.png";
import confiarImg from "../img/confiar.png";
import serImg from "../img/ser.png";

// placeholders (use o que você tiver)
import placeholderImg from "../img/ApitaHome.png";

const ALL = "Todos";

/* =========================
   DADOS 
   - prototype.type: "link" ou "iframe"
   - confidentiality: string ou null
========================= */
const PROJECTS = [
 /* {
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
  },*/

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
      title: "Website de Imobiliária",
      subtitle: "Plataforma imobiliária com foco em navegação e conversão",
      year: "2025", 
      status: "Concluído",
      context: "Projeto Profissional",

      categories: ["UX/UI Design", "Acessibilidade", "Engenharia de Software", "Wordpress"],
      tags: [
        "Elementor",
        "Mobile",
        "Integração com plugings de imóveis",
        "Arquitetura da Informação",
        "Conversão"
      ],
      image: imobiliariaImg,

      brief:
        "Website imobiliário estruturado para facilitar busca, visualização de imóveis e geração de contatos qualificados.",

      description:
        "Projeto profissional sob confidencialidade (NDA) voltado ao desenvolvimento e organização de um website imobiliário. A atuação concentrou-se na estruturação de páginas estratégicas, definição da arquitetura da informação e organização de listagens de imóveis com foco em clareza e escaneabilidade. Foram trabalhados fluxos de contato e agendamento, priorizando redução de fricção na navegação e melhoria da experiência do usuário. A implementação foi realizada com WordPress e Elementor, garantindo responsividade, consistência visual e facilidade de atualização por parte do cliente. A proposta buscou equilibrar estética, confiabilidade e objetividade, elementos essenciais no setor imobiliário para geração de leads e tomada de decisão.",

      confidentiality:
        "Projeto desenvolvido sob confidencialidade (NDA). Informações detalhadas sobre cliente e métricas não podem ser divulgadas.",

      branding: {
        palette: [],
        rationale:
          "Paleta orientada ao setor imobiliário, priorizando confiança, sobriedade e leitura rápida das informações essenciais."
      },

          prototype: {
      type: "link",
      url: "",
      note:
        "Entregáveis e protótipo não públicos devido à confidencialidade do projeto."
      },

      links: { repo: "", demo: "", article: "" },

      related: ["Recrutamento Inteligente", "Fintech de saúde"],
    },

    {
      title: "Fintech de Saúde",
      subtitle: "Product Design para plataforma internacional de saúde e serviços financeiros",
      year: "2025",
      status: "Concluído",
      context: "Projeto Profissional Internacional",

      categories: ["UX/UI Design", "Acessibilidade", "Engenharia de Software", "Wordpress"],
      tags: [
        "Figma",
        "Elementor",
        "JavaScript",
        "Product Design",
        "Jornada do Usuário",
        "Arquitetura da Informação"
      ],
      image: fintechImg,

      brief:
        "Projeto de design de produto focado em confiança, clareza e estruturação estratégica da jornada do usuário.",

      description:
        "Projeto internacional desenvolvido sob confidencialidade (NDA), voltado ao design de produto para uma fintech na área de saúde. A atuação envolveu definição de fluxos, organização da arquitetura da informação e criação de protótipos navegáveis no Figma. O trabalho concentrou-se na construção de jornadas orientadas à conversão e credibilidade, equilibrando clareza informacional, hierarquia visual e consistência de interface. Foram estruturados fluxos críticos relacionados à compreensão de serviços, contratação e interação com o produto, priorizando redução de fricção e experiência fluida. A proposta visual buscou transmitir segurança, estabilidade e modernidade — atributos essenciais em ambientes digitais que combinam saúde e finanças — mantendo coerência entre identidade, funcionalidade e objetivos de negócio.",

      confidentiality:
        "Projeto desenvolvido sob confidencialidade (NDA). Informações detalhadas sobre cliente, métricas e implementação técnica não podem ser divulgadas.",

      branding: {
        palette: [],
        rationale:
          "Paleta orientada à confiança e estabilidade, com contraste adequado para leitura em ambientes sensíveis como saúde e finanças."
      },

           prototype: {
      type: "link",
      url: "",
      note:
        "Entregáveis e protótipo não públicos devido à confidencialidade do projeto."
      },

      links: { repo: "", demo: "", article: "" },

      related: ["Recrutamento Inteligente", "Website de Imobiliária"],
    },

    {
      title: "ERA",
      subtitle: "Plataforma de gestão de recursos para sustentabilidade em obras",
      year: "2025", 
      status: "Concluído",
      context: "Projeto Profissional",

      categories: ["Dados", "UX/UI Design", "Acessibilidade", "Engenharia de Software"],
      tags: [
        "React",
        "Data Visualization",
        "Design System",
        "Dashboard",
        "Sustentabilidade Digital"
      ],
      image: eraImg,

      brief:
        "Plataforma web para monitoramento e gestão de recursos (água, energia e resíduos) em canteiros de obras.",

      description:
        "Projeto profissional desenvolvido sob confidencialidade (NDA), voltado à criação de uma plataforma digital para monitoramento e gestão de recursos em ambientes de construção civil. Atuei no desenvolvimento do front-end em React, estruturando componentes reutilizáveis e uma biblioteca interna (design system) para garantir consistência visual, escalabilidade e manutenção simplificada. Foram implementadas visualizações de dados orientadas à clareza e tomada de decisão, com foco em indicadores ambientais. A solução prioriza legibilidade, organização da informação e acessibilidade, garantindo que diferentes perfis de usuários possam interpretar métricas de consumo e impacto ambiental de forma intuitiva. O projeto combina sustentabilidade digital, engenharia de dados e experiência do usuário aplicada ao contexto de obras.",

      confidentiality:
        "Projeto desenvolvido sob confidencialidade (NDA). Informações detalhadas sobre cliente, arquitetura interna e métricas não podem ser divulgadas.",

      branding: {
        palette: [],
        rationale:
          "A paleta combina verde para representar sustentabilidade e impacto ambiental positivo, azul para transmitir credibilidade e tecnologia, e tons neutros para garantir contraste, legibilidade e organização das visualizações de dados."
      },

      prototype: {
      type: "link",
      url: "",
      note:
        "Entregáveis e protótipo não públicos devido à confidencialidade do projeto."
      },

      links: { repo: "", demo: "", article: "" },

      related: ["SolarBanyu", "Jornada Galáctica (Canal Ciência)"],
    },

    {
      title: "PISAC",
      subtitle: "UI/UX e reestruturação de portal institucional em WordPress",
      year: "2025", 
      status: "Concluído",
      context: "Projeto de Pesquisa e Suporte Institucional",

      categories: ["UX/UI Design", "Acessibilidade", "Engenharia de Software"],
      tags: [
        "WordPress",
        "Arquitetura da Informação",
        "Análise Heurística",
        "Reestruturação"
      ],
      image: pisacImg, 

      brief:
        "Reestruturação visual e melhoria da experiência do usuário em portal institucional baseado em WordPress.",

      description:
        "Atuação na análise e melhoria da experiência do usuário do portal PISAC, com foco na organização da informação, clareza estrutural e ajustes de layout em ambiente WordPress. O trabalho envolveu diagnóstico de problemas de hierarquia visual, inconsistências de navegação e limitações técnicas decorrentes do uso de tema proprietário. Foram propostas melhorias na estrutura de páginas, organização de conteúdos e usabilidade geral, considerando princípios de interação humano-computador e boas práticas de design. A atuação combinou análise crítica, ajustes incrementais e suporte à pesquisa institucional, contribuindo para maior clareza, legibilidade e coerência no ambiente digital.",

      confidentiality: null,

      branding: null,

      prototype: null,

      links: { repo: "", demo: "", article: "" , website: "https://pisac.unb.br/"},

      related: ["Jornada Galáctica (Canal Ciência)", "ERA"]
    },

        {
          title: "Labs – Plataforma de Recrutamento",
          subtitle: "UI/UX Design para SaaS internacional com foco em recrutamento Tech",
          year: "2025",
          status: "Concluído",
          context: "Projeto Profissional Internacional",

          categories: ["UX/UI Design", "Engenharia de software"],
          tags: [
            "Figma",
            "User Journey",
            "SaaS",
            "UX Research",
            "Arquitetura da Informação",
            "Design de Conversão"
          ],
          image: spryteImg, 

          brief:
            "Design de interface e estruturação de jornadas para plataforma SaaS de recrutamento internacional.",

          description:
            "Projeto internacional desenvolvido sob confidencialidade (NDA), voltado ao design de uma plataforma SaaS de recrutamento. A atuação concentrou-se na definição de fluxos, organização da arquitetura da informação e construção de protótipos navegáveis no Figma. Foram estruturadas jornadas para diferentes perfis de usuário, priorizando clareza, escaneabilidade e conversão. O trabalho envolveu definição de hierarquia visual, organização estratégica de seções e melhoria da experiência em pontos críticos da interação. A proposta buscou equilibrar credibilidade, eficiência e modernidade, atributos essenciais em produtos SaaS voltados à gestão de talentos e processos seletivos.",

          confidentiality:
            "Projeto desenvolvido sob confidencialidade (NDA). Informações detalhadas sobre cliente, dados internos e métricas não podem ser divulgadas.",

      prototype: {
      type: "link",
      url: "",
      note:
        "Entregáveis e protótipo não públicos devido à confidencialidade do projeto."
      },


          links: { repo: "", demo: "", article: "" },

          related: ["Recrutamento Inteligente", "Fintech de Saúde"]
        },

    {
      title: "SolarBanyu",
      subtitle: "Sistema IoT para dessalinização solar com monitoramento em tempo real",
      year: "2024", 
      status: "Concluído",
      context: "Projeto Acadêmico Multidisciplinar",

      categories: ["IoT", "UX/UI Design", "Acessibilidade", "Engenharia de Software", "Desenvolvimento Fullstack"],
      tags: ["ESP32", "Node.js", "React", "Dashboard", "Monitoramento Ambiental", "Sustentabilidade"],
      image: solarBanyuImg,

      brief:
        "Sistema de dessalinização por energia solar com telemetria via ESP32 e dashboard analítico em tempo real.",

      description:
        "SolarBanyu é um projeto acadêmico multidisciplinar voltado à dessalinização de água por meio de energia solar e osmose reversa. A solução integra hardware e software para monitoramento contínuo e análise de desempenho do sistema. A arquitetura combina ESP32 para coleta de dados de sensores, comunicação via protocolo MQTT, backend em Node.js e visualização analítica em React. O sistema permite acompanhamento de métricas operacionais em tempo real, apoiando validação experimental, eficiência energética e sustentabilidade. O projeto envolveu integração entre camadas embarcadas, mensageria, backend e interface web, com foco em confiabilidade, organização modular e clareza na visualização de dados ambientais.",

      confidentiality: null,

      branding: {
        palette: ["#4FC273", "#7695FF", "#FF9874", "#963CBD", "#FCEFA6","#323232", "#FCFEFF" ],
        rationale:
      "A paleta integra cores associadas à sustentabilidade e à inovação tecnológica. O verde simboliza preservação ambiental; os diferentes tons de azul representam monitoramento, dados e confiabilidade; laranja e amarelo remetem à energia solar e transformação; e os neutros asseguram contraste e clareza na visualização analítica. A combinação foi pensada para equilibrar impacto visual, legibilidade e coerência com o propósito sustentável do projeto."
      },

      prototype: {
        type: "iframe",
        url: "https://embed.figma.com/proto/W0RttkC4v5LXwot38szEjq/SolarBanyu?node-id=1-815&scaling=min-zoom&content-scaling=fixed&page-id=1%3A545&starting-point-node-id=1%3A815&embed-host=share",
        note: "Protótipo interativo do dashboard e fluxos principais do sistema.Para melhor visualização expanda",
      },

      links: {
        repo: "https://github.com/Mylena-angelica/SolarBanyu-UnB",
        demo: "",
        article: "",
        figma: "https://www.figma.com/design/W0RttkC4v5LXwot38szEjq/SolarBanyu?node-id=0-1&t=laC1BQNRlsXn1oH6-1"
      },

      related: ["ERA", "Apita Cidadão", "Debian (Contribuições)"],
    },

    {
      title: "Jornada Galáctica (Canal Ciência)",
      subtitle: "Gamificação aplicada à divulgação científica com análise de dados",
      year: "2024", 
      status: "Concluído",
      context: "Projeto de Pesquisa",

      categories: [ "Gamificação", "Wordpress", "Engenharia de software"],
      tags: [
        "R",
        "Análise Estatística",
        "Perfis Motivacionais",
        "Gamificação",
        "Plugings",
        "Engajamento"
      ],
      image: jornadaImg,

      brief:
        "Sistema de missões gamificadas com narrativa interativa para engajar o público na divulgação científica.",

      description:
        "Projeto de pesquisa aplicado ao portal Canal Ciência (IBICT), voltado à implementação de um sistema de gamificação com narrativa, missões e desafios interativos para ampliar o engajamento do público com conteúdos científicos. Atuei no design da estratégia de gamificação, definição das mecânicas, construção da narrativa e estruturação das páginas no WordPress. O projeto foi fundamentado em métricas de comportamento e perfis motivacionais, buscando compreender diferentes padrões de engajamento. Foram realizadas análises estatísticas em R — incluindo correlação de Pearson e estudo de métricas de interação — para investigar relações entre participação, progressão nas missões e comportamento do usuário. A iniciativa combinou design de experiência, ciência de dados e pesquisa aplicada para avaliar o impacto da gamificação na divulgação científica.",

      confidentiality: null,

      branding: {
        palette: [],
        rationale:
          "Paleta que equilibra contraste e ludicidade, mantendo legibilidade e foco na narrativa científica, sem comprometer clareza informacional."
      },

      prototype: {
        type: "link",
        url: "https://canalciencia.ibict.br/jornada-galactica/",
        note: "Implementação pública disponível no portal Canal Ciência."
      },

      links: {
        repo: "",
        website: "https://canalciencia.ibict.br/jornada-galactica/",
        article: ""
      },

      related: ["Atloria", "ERA"]
    },

      {
        title: "BCE Pergamum – Remodelação ",
        subtitle: "Redesign baseado em princípios de IHC para sistema universitário",
        year: "2023",
        status: "Concluído",
        context: "Projeto Acadêmico ",

        categories: ["Engenharia de software", "Redesign", "UX/UI Design", "Acessibilidade"],
        tags: [
          "Interação Humano-Computador",
          "Análise Heurística",
          "Arquitetura da Informação",
          "Usabilidade"
        ],
        image: bceImg, 

        brief:
          "Remodelação do sistema BCE Pergamum com base em princípios de usabilidade e Interação Humano-Computador.",

        description:
          "Projeto acadêmico desenvolvido na disciplina de Interação Humano-Computador (IHC), com foco na análise e remodelação do sistema BCE Pergamum utilizado no contexto universitário. A iniciativa partiu de um diagnóstico heurístico do design existente, identificando problemas relacionados à hierarquia visual, organização informacional, consistência e fluxo de navegação. Com base em princípios de usabilidade e boas práticas de IHC, foi proposta uma reestruturação da arquitetura da informação e um redesign da interface. O projeto incluiu análise crítica, definição de melhorias estruturais e prototipação das novas telas, visando tornar a experiência mais intuitiva, acessível e eficiente para estudantes e usuários do sistema bibliotecário.",

        confidentiality: null,

           branding: {
      palette: ["#1C4179", "#BC2121", "#CCDBE2", "#1E1E1E", "#2885d3", "#3FF23F"],
      rationale:
  "A paleta foi estruturada para reforçar identidade institucional e melhorar a hierarquia visual. O azul principal comunica credibilidade e estabilidade; o vermelho atua como cor de destaque para chamadas e alertas; tons claros organizam áreas de conteúdo; o cinza escuro garante contraste adequado; e o verde sinaliza estados positivos. A combinação prioriza legibilidade, consistência e orientação visual ao usuário."
    },

        prototype: {
        type: "iframe",
        url: "https://embed.figma.com/proto/MuRdL6GsGxRZ5ZOKegXCG9/novo-bce-pergamum?node-id=1-2&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&embed-host=share",
        note: "Protótipo interativo do dashboard e fluxos principais do sistema. Para melhor visualização expanda",
      },

        links: {
          repo: "https://github.com/Mylena-angelica/IHC-2023.1-BCE",
          demo: "",
          article: ""
        },

        related: ["PISAC", "Jornada Galáctica (Canal Ciência)"]
      },

     /* {
        title: "SimpleNote – Estudo de Requisitos",
        subtitle: "Engenharia de Requisitos e validação por prototipação",
        year: "2023",
        status: "Concluído",
        context: "Projeto Acadêmico",

        categories: ["Engenharia de software", "Redesign", "UX/UI Design", "Acessibilidade"],
        tags: [
          "Engenharia de Requisitos",
          "Elicitação",
          "Validação",
          "Remodelação",
        ],
        image: simpleImg, 

        brief:
          "Estudo e validação de requisitos a partir da análise e remodelação da aplicação SimpleNote.",

        description:
          "Projeto acadêmico voltado ao estudo de Engenharia de Requisitos, utilizando a aplicação SimpleNote como base para análise, elicitação e validação de requisitos. O trabalho envolveu identificação de requisitos funcionais e não funcionais, análise de lacunas no sistema existente e proposição de melhorias estruturais. Como estratégia de validação, foram desenvolvidos protótipos navegáveis no Figma para testar ajustes propostos e verificar aderência às necessidades do usuário. A iniciativa combinou modelagem conceitual, análise crítica e prototipação, reforçando a importância da validação visual e iterativa no ciclo de desenvolvimento de software.",

        confidentiality: null,

          branding: {
            palette: ["#3460CB", "#A6AAAD", "#6474D0", "#1E2327", ],
            rationale:
              "A escolha da paleta prioriza funcionalidade e legibilidade. Os tons de azul estruturam a hierarquia de ações e reforçam o caráter tecnológico do sistema, enquanto os neutros organizam áreas de conteúdo e reduzem ruído visual. O contraste com o cinza escuro assegura leitura confortável e acessibilidade, alinhando estética e usabilidade."
          },
        prototype: {
          type: "iframe",
          url: "https://embed.figma.com/proto/Paxc8fGXPbj5mccr7I1uVE/simplenote?node-id=1-462&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A462&embed-host=share",
          note: "Protótipo utilizado para validação dos requisitos propostos. Para melhor visualização expanda"
        },

        links: {
          repo: "https://github.com/Mylena-angelica/2023.1-Simplenote",
          demo: "",
          article: ""
        },

        related: ["BCE Pergamum – Remodelação de Interface"]
      },*/

{
  title: "BOTO",
  subtitle: "Projeto de landing page com chatbot integrado para suporte e interação",
  year: "2022",
  status: "Concluído",
  context: "Projeto Acadêmico",

  categories: ["Desenvolvimento fullstack", "UX/UI Design", "Chatbot"],
  tags: [
    "Landing Page",
    "HTML",
    "CSS",
    "JavaScript",
    "Telegram",
    "Interação",

  ],
  image: botoImg, 

  brief:
    "Landing page institucional com integração de chatbot interativo.",

  description:
    "Projeto acadêmico voltado ao desenvolvimento de uma landing page com integração de chatbot para suporte e interação com o usuário. A solução combinou estruturação de conteúdo, organização visual e implementação front-end em HTML, CSS e JavaScript. O chatbot foi integrado como elemento funcional para simular atendimento automatizado, reforçando conceitos de interação homem-computador e experiência do usuário. O projeto explorou clareza comunicacional, organização de seções e foco em navegação simples e objetiva.",

  confidentiality: null,

  branding: {
    palette: ["#F1F0F5", "#832160", "#DA4167", "#FFDBDC"],
    rationale:
  "A escolha dos tons de rosa foi inspirada no boto-cor-de-rosa, reforçando a identidade simbólica do projeto. A variação cromática cria hierarquia visual e dinamismo, enquanto o fundo claro assegura leveza e contraste adequado. A paleta combina identidade temática com funcionalidade e legibilidade."
  },

  prototype: {
    type: "link",
    url: "https://fga-eps-mds.github.io/2022-2-BOTO/",
    note: "Deploy da landing page com chatbot integrado."
  },

  links: {
    repo: "https://github.com/Mylena-angelica/2022-2-BOTO",
    website: "https://fga-eps-mds.github.io/2022-2-BOTO/",
    article: ""
  },

  related: ["SimpleNote – Estudo de Requisitos"]
},

{
  title: "Confiar",
  subtitle: "Projeto de design de aplicativo com foco em clareza e construção de confiança na experiência",
  year: "2022",
  status: "Concluído",
  context: "Projeto de UI/UX",

  categories: ["UX/UI Design"],
  tags: ["Figma", "Prototipação", "Fluxos", "Mobile", "Aplicativo"],
  image: confiarImg,

  brief:
    "Meu primeiro projeto de UI/UX: design de um aplicativo com foco em clareza e construção de confiança na experiência.",

  description:
    "Confiar foi meu primeiro projeto na área de UI/UX Design, desenvolvido com foco em aplicativo. O trabalho envolveu a estruturação de fluxos principais, organização da experiência do usuário e criação de telas com atenção à hierarquia visual, consistência e usabilidade. O projeto serviu como base para consolidar fundamentos de design de interface e jornada do usuário, com prototipação navegável no Figma para validar a sequência de telas e a clareza da navegação.",

  confidentiality: null,

   branding: {
    palette: ["#161632", "#C7FFD8", "#161D6F", "#CeD4DA", "#AADB84", "#F6F6F6"],
    rationale:
  "Os tons escuros estruturam hierarquia e reforçam sensação de segurança e estabilidade. Os verdes criam contraste positivo e sinalizam ações ou estados favoráveis, enquanto os neutros organizam a interface e reduzem ruído visual. A combinação prioriza contraste, legibilidade e coerência emocional com o conceito de confiança."
  },

  prototype: {
    type: "iframe",
    url: "https://embed.figma.com/proto/BCyLBCzzLQDpTaBiU63blM/Confiar?node-id=1-135&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A135&embed-host=share",
    note: "Protótipo interativo. Para melhor visualização expanda.",
  },

  links: { repo: "", demo: "", article: "" },
  related: ["SimpleNote – Estudo de Requisitos", "BOTO"],
},

{
  title: "S.E.R",
  subtitle: "Projeto mobile e web sobre produtividade e bem-estar com foco em organização pessoal e redução de estresse",
  year: "2021", 
  status: "Concluído",
  context: "Projeto de Bootcamp UI/UX",

  categories: ["UX/UI Design"],
  tags: [
    "Figma",
    "User Flow",
    "Prototipação",
    "App",

  ],
  image: serImg, 

  brief:
    "Aplicativo focado em organização do tempo e redução de estresse por meio de uma experiência simples e acolhedora.",

  description:
    "S.E.R foi desenvolvido como projeto de UI/UX com foco em organização pessoal e bem-estar. A proposta consistiu em criar uma aplicação que auxiliasse usuários a administrar tarefas e compromissos de forma mais leve, reduzindo sensação de sobrecarga e burnout. O projeto envolveu definição de fluxos principais, construção da arquitetura da informação e criação de protótipos navegáveis no Figma. A experiência foi pensada para ser intuitiva, minimalista e emocionalmente acolhedora, priorizando clareza, hierarquia visual e simplicidade na interação.",

  confidentiality: null,

  branding: {
    palette: ["#9F5F80", "#FF8474", "#FFC996", "#583D72",],
    rationale:
  "A combinação de roxos estruturais e tons quentes cria contraste harmônico e hierarquia visual clara. Os roxos transmitem estabilidade e foco, enquanto os tons quentes estimulam ação e acolhimento. A paleta foi pensada para reduzir sensação de sobrecarga visual, reforçando clareza e conforto na interação."
  },
  prototype: {
    type: "iframe",
    url: "https://embed.figma.com/proto/c3ZOG7VplkAKURuZAH0qzk/S.E.R?node-id=1-1922&p=f&scaling=min-zoom&content-scaling=fixed&page-id=1%3A1841&starting-point-node-id=1%3A2191&embed-host=share",
    note: "Protótipo interativo desenvolvido no Figma."
  },

  links: {
    repo: "",
    demo: "",
    article: "",
    figma: "https://www.figma.com/design/c3ZOG7VplkAKURuZAH0qzk/S.E.R?node-id=1-1841&t=byE2DLecnpEYPJ0M-1"
  },

  related: ["Confiar", "SimpleNote – Estudo de Requisitos"]
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
                  {selected.links?.figma && (
                    <a className="pfLink" href={selected.links.figma} target="_blank" rel="noreferrer">
                      Ver planejamento e identidade visual ↗
                    </a>
                  )}

                {selected.links?.website && (
                    <a className="pfLink" href={selected.links.website} target="_blank" rel="noreferrer">
                      Site oficial ↗
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
              {/* <a className="pfCTA" href="#contato">
                Entre em contato
              </a> */}
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
