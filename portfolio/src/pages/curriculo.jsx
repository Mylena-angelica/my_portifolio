// src/pages/curriculo.jsx
import "../styles/curriculo.css";
import foto from "../img/curriculo/Mylena.png";
import debianImg from "../img/curriculo/Debian.png";
import eraImg from "../img/curriculo/Era.png";
import solarbanyuImg from "../img/curriculo/SolarBanyu.png";
import jornadaImg from "../img/curriculo/Jornada.png";
import listenImg from "../img/curriculo/Listen.png";
import apitaImg from "../img/curriculo/Apita.png";
import atloriaImg from "../img/curriculo/Atloria.png";
import fintechImg from "../img/curriculo/Fintech.png";
import recrutamentoImg from "../img/curriculo/Recrutamento.png";
import imobiliariaImg from "../img/curriculo/Imobiliaria.png";

import { PythonIcon, HtmlIcon, CssIcon, JavaScriptIcon, CIcon, RIcon } from "../components/icons";
import { ReactIcon, NodeIcon, ExpressIcon,  TailwindIcon,  BootstrapIcon,  FigmaIcon, GitIcon, WordpressIcon,DockerIcon,  MySqlIcon,PostgresIcon,
  MongoDbIcon, OracleIcon, WindowsIcon, LinuxIcon, ChinaFlag, BrazilFlag, ArgentinaFlag, UkFlag,} from "../components/icons";

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
                    <Skill icon={<DockerIcon />} label="Docker" />

                </div>
            </div>

            {/* DATABASES */}
            <div className="cvSkillBlock">
                <h3 className="cvSkillTitle">Bancos de Dados</h3>
                <div className="cvIcons">
                    <Skill icon={<MySqlIcon />} label="MySQL" />
                    <Skill icon={<PostgresIcon />} label="PostgreSQL" />
                    <Skill icon={<MongoDbIcon />} label="MongoDB" />
                    <Skill icon={<OracleIcon />} label="Oracle" />
                </div>
                </div>

            {/* SISTEMAS */}
            <div className="cvSkillBlock">
                <h3 className="cvSkillTitle">Sistemas Operacionais</h3>
                <div className="cvIcons">
                    <Skill icon={<WindowsIcon />} label="Windows" />
                    <Skill icon={<LinuxIcon />} label="Linux" />
                </div>
            </div>

            {/* IDIOMAS */}
            <div className="cvSkillBlock">
                <h3 className="cvSkillTitle">Idiomas</h3>
                <div className="cvIcons">
                    <Skill icon={<ChinaFlag />} label="Chinês Básico" />
                    <Skill icon={<BrazilFlag />} label="Português Nativo" />
                    <Skill icon={<ArgentinaFlag />} label="Espanhol Intermediário" />
                    <Skill icon={<UkFlag />} label="Inglês Fluente" />

                </div>
            </div>

            </div>
        </div>
        </section>



            {/* EXPERIÊNCIA */}
        <section className="cvSection cvSection--experience">
        <div className="cvInner">
            <h2 className="cvTitle">Experiência</h2>
            <p className="cvSubtitle">
            Atuo na interseção entre design, engenharia de software e implementação.
            </p>

            <div className="cvTimeline">
            {/* Workoast */}
            <div className="cvTimelineItem">
                <div className="cvTimelineYear">Abr 2025 — Jul 2025</div>

                <div className="cvTimelineContent">
                <div className="cvTimelineTitle">UI/UX Designer e Desenvolvedora Front-end</div>
                <div className="cvTimelineMeta">Workoast | Remoto</div>

                <ul className="cvTimelineList">
                    <li>Criação de interfaces para três plataformas digitais internacionais (recrutamento SaaS, imobiliária e fintech de seguros).</li>
                    <li>Protótipos navegáveis no Figma com foco em responsividade, acessibilidade e clareza na jornada do usuário.</li>
                    <li>Estruturação e escrita de conteúdos em inglês para páginas institucionais.</li>
                    <li>Modelagem de fluxos e jornadas completas, da descoberta à conversão.</li>
                    <li>Implementação front-end com HTML, CSS e JavaScript, seguindo boas práticas de responsividade e design visual.</li>
                    <li>Colaboração na montagem de landing pages e seções personalizadas via Elementor (WordPress).</li>
                    <li>Reuniões de briefing com stakeholders internacionais para coleta de requisitos e validação de protótipos.</li>
                    <li>Organização visual e lógica de sistemas (ex.: listagem de imóveis e fluxos de agendamento).</li>
                    <li>Documentação com imagens e links para coleta de feedbacks visuais e apoio ao processo iterativo.</li>
                </ul>
                </div>
            </div>

            {/* UNB / PISAC */}
            <div className="cvTimelineItem">
                <div className="cvTimelineYear">Out 2024 — Jul 2025</div>

                <div className="cvTimelineContent">
                <div className="cvTimelineTitle">Pesquisadora de Design e Front-end</div>
                <div className="cvTimelineMeta">Universidade de Brasília (UnB) e PISAC | Brasília, Brasil</div>

                <ul className="cvTimelineList">
                    <li>Análise de UI/UX com foco em usabilidade e acessibilidade do site institucional.</li>
                    <li>Elaboração de relatórios para monitoramento de desempenho e melhorias contínuas.</li>
                    <li>Proposição e desenvolvimento de soluções visuais e funcionais de interface.</li>
                    <li>Implementação front-end em WordPress com temas personalizados e ferramentas de criação.</li>
                    <li>Suporte técnico em WordPress, orientando a equipe e solucionando dúvidas.</li>
                    <li>Personalizações com plugins, HTML e CSS para ajuste de funcionalidades.</li>
                    <li>Atualização de conteúdo garantindo clareza, acessibilidade e consistência.</li>
                    <li>Desenvolvimento de aplicação front-end utilizando React.</li>
                </ul>
                </div>
            </div>

            {/* CEDIS */}
            <div className="cvTimelineItem">
                <div className="cvTimelineYear">Jun 2023 — Presente</div>

                <div className="cvTimelineContent">
                <div className="cvTimelineTitle">Pesquisadora de Inovação e Gamificação</div>
                <div className="cvTimelineMeta">CEDIS | Brasília, Brasil</div>

                <ul className="cvTimelineList">
                    <li>Desenvolvimento de estratégias de gamificação, do design inicial à implementação prática.</li>
                    <li>Análise de métricas e dados com foco em engajamento e comportamento do usuário.</li>
                    <li>Participação em eventos e grupos de gamificação para troca de conhecimentos e aprimoramento.</li>
                    <li>Produção de artigos científicos.</li>
                    <li>Projeto: Gamificação do Canal Ciência, com foco em inovação e disseminação do conhecimento científico.</li>
                </ul>
                </div>
            </div>

            {/* IBICT */}
            <div className="cvTimelineItem">
                <div className="cvTimelineYear">Jun 2023 — Dez 2024</div>

                <div className="cvTimelineContent">
                <div className="cvTimelineTitle">Pesquisadora de Graduação em Inovação e Gamificação</div>
                <div className="cvTimelineMeta">IBICT | Brasília, Brasil</div>

                <ul className="cvTimelineList">
                    <li>Análise bibliográfica para embasar estratégias de gamificação, métricas e avaliação.</li>
                    <li>Análise de métricas para mensurar impacto e engajamento do público.</li>
                    <li>Análise de dados para identificação de padrões e comportamentos.</li>
                    <li>Design de gamificação com base na metodologia Octalysis.</li>
                    <li>Escrita de artigos científicos internacionais e apoio à divulgação dos resultados.</li>
                    <li>Implementação de gamificação em WordPress com ferramentas e plugins específicos.</li>
                    <li>Projeto: Gamificação do Canal Ciência, com foco em inovação e disseminação do conhecimento científico.</li>
                </ul>
                </div>
            </div>

            {/* SpryteLabs */}
            <div className="cvTimelineItem">
                <div className="cvTimelineYear">Mar 2024 — Jun 2024</div>

                <div className="cvTimelineContent">
                <div className="cvTimelineTitle">UI/UX Design Junior</div>
                <div className="cvTimelineMeta">SpryteLabs | Remoto (Nova Iorque, EUA)</div>

                <ul className="cvTimelineList">
                    <li>Reuniões diárias com desenvolvedores para alinhar necessidades e viabilidade técnica.</li>
                    <li>Contato com stakeholders para discutir requisitos e alinhar expectativas de design.</li>
                    <li>Criação de novas páginas e recursos, apoiando evolução do produto.</li>
                    <li>Refino de designs existentes com foco em melhoria contínua de UX.</li>
                    <li>Colaboração para resolver problemas de design e UX com soluções práticas.</li>
                    <li>Testes de usabilidade e ajustes baseados em feedback.</li>
                </ul>
                </div>
            </div>

            {/* INSS */}
            <div className="cvTimelineItem">
                <div className="cvTimelineYear">Nov 2022 — Mai 2023</div>

                <div className="cvTimelineContent">
                <div className="cvTimelineTitle">Estagiária de Informática</div>
                <div className="cvTimelineMeta">INSS | Brasília, Brasil</div>

                <ul className="cvTimelineList">
                    <li>Apoio no Congresso Internacional de Gestão da Previdência Social.</li>
                    <li>Construção de portais no SharePoint e em sistemas de gerenciamento de conteúdo (CMS).</li>
                    <li>Desenvolvimento de interfaces com foco em acessibilidade.</li>
                    <li>Organização e criação de relatórios, planilhas e apoio operacional.</li>
                </ul>
                </div>
            </div>

            {/* Orc’estra Gamificação */}
            <div className="cvTimelineItem">
                <div className="cvTimelineYear">Set 2021 — Set 2022</div>

                <div className="cvTimelineContent">
                <div className="cvTimelineTitle">Coordenadora de Tráfego e Comunicação</div>
                <div className="cvTimelineMeta">Orc’estra Gamificação (Empresa Júnior) | Brasília, Brasil</div>

                <ul className="cvTimelineList">
                    <li>Gestão de mídias sociais, campanhas e fluxo de comunicação entre diretorias.</li>
                    <li>Administração do website e atualização de conteúdos.</li>
                    <li>Desenvolvimento de design e implementação no site em WordPress.</li>
                    <li>Endomarketing: experiências internas e materiais de comunicação para campanhas.</li>
                    <li>Coordenação de equipe e negociação de parcerias.</li>
                    <li>Relatórios de campanhas e acompanhamento de performance.</li>
                    <li>Planejamento de gamificação personalizada, análise de perfis de jogadores e estratégias de engajamento.</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </section>

        {/* EDUCAÇÃO */}
        <section className="cvSection cvSection--education">
        <div className="cvInner">
            <h2 className="cvTitle">Educação</h2>
            <p className="cvSubtitle">Formação acadêmica e trilhas de desenvolvimento.</p>

            <div className="cvTimeline">
            <div className="cvTimelineItem">
                <div className="cvTimelineYear">Jul 2021 — Jul 2026</div>

                <div className="cvTimelineContent">
                <div className="cvTimelineTitle">Bacharelado em Engenharia de Software</div>
                <div className="cvTimelineMeta">Universidade de Brasília (UnB) | Brasília, Brasil</div>

                <p className="cvTimelineText">
                    Formação com foco em desenvolvimento de software, engenharia de requisitos, arquitetura,
                    qualidade/testes, UI/UX e pesquisa aplicada.
                </p>
                </div>
            </div>

            <div className="cvTimelineItem">
                <div className="cvTimelineYear">2025</div>

                <div className="cvTimelineContent">
                <div className="cvTimelineTitle">Cambridge English: C1 (Advanced)</div>
                <div className="cvTimelineMeta">Certificação de Proficiência em Inglês</div>

                <p className="cvTimelineText">
                    Proficiência avançada para comunicação profissional e acadêmica (leitura, escrita e conversação).
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>


            {/* ARTIGOS PUBLICADOS */}
            <section className="cvSection cvSection--articles">
            <div className="cvInner">
                <h2 className="cvTitle">Artigos publicados</h2>
                <p className="cvSubtitle">Produção científica e contribuições acadêmicas internacionais.</p>

                <div className="cvArticlesGrid">    
                <article className="cvArticleCard">
                    <h3 className="cvArticleTitle">
                    A Process to Identify Players’ Motivational Profiles for Designing a Gamification Project
                    </h3>

                    <p className="cvArticleMeta">
                    ICCSA — International Conference on Computational Science and Its Applications | Vietnã · Julho, 2024
                    </p>

                    <p className="cvArticleText">
                    Autores: Cristiane Soares Ramos, Mylena Angélica Silva Farias, Sergio Antônio Andrade de Freitas,
                    Marcus Vinícius Paiva Martins, Juan Mangueira Alves & Leda Cardoso Sampson Pinto.
                    </p>

                    <p className="cvArticleDoi">
                    DOI:{" "}
                    <a
                        href="https://doi.org/10.1007/978-3-031-64608-9_4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        10.1007/978-3-031-64608-9_4
                    </a>
                    </p>
                </article>

                <article className="cvArticleCard">
                    <h3 className="cvArticleTitle">
                    Crafting Personalized Learning Environments Through Motivational Profiling
                    </h3>

                    <p className="cvArticleMeta">
                    FIE — Frontiers in Education | Estados Unidos · Outubro, 2024
                    </p>

                    <p className="cvArticleText">
                    Autores: Sergio Antônio Andrade de Freitas, Mylena Angélica Silva Farias, Cristiane Soares Ramos,
                    Marcus Vinícius Paiva Martins, Juan Mangueira Alves & Leda Cardoso Sampson Pinto.
                    </p>

                    <p className="cvArticleDoi">
                    DOI:{" "}
                    <a
                        href="https://doi.org/10.1109/FIE61694.2024.10893473"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        10.1109/FIE61694.2024.10893473
                    </a>
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

                {/* Destaques */}
                <div className="cvCourseCard">
                    <div className="cvTimelineTitle">Certificação Cambridge C1</div>
                    <p className="cvCourseMeta">
                    Universidade de Cambridge — Reino Unido | Dezembro, 2025
                    </p>
                </div>

                <div className="cvCourseCard">
                    <div className="cvTimelineTitle">Mulheres na Ciência e Inovação — Fazendo Acontecer</div>
                    <p className="cvCourseMeta">
                    Museu do Amanhã — Rio de Janeiro | Maio, 2025
                    </p>
                </div>

                <div className="cvCourseCard">
                    <div className="cvTimelineTitle">Mulheres na Ciência e Inovação — 6ª edição</div>
                    <p className="cvCourseMeta">
                    Museu do Amanhã — Rio de Janeiro | Novembro, 2024
                    </p>
                </div>

                <div className="cvCourseCard">
                    <div className="cvTimelineTitle">Certificado Profissional em Gerenciamento de Projetos</div>
                    <p className="cvCourseMeta">
                    Google (Coursera) | Outubro, 2023
                    </p>
                </div>

                <div className="cvCourseCard">
                    <div className="cvTimelineTitle">Certificado Profissional em Análise de Dados</div>
                    <p className="cvCourseMeta">
                    Google (Coursera) | Fevereiro, 2023
                    </p>
                </div>

                <div className="cvCourseCard">
                    <div className="cvTimelineTitle">Green Skills Certificate</div>
                    <p className="cvCourseMeta">
                    INCO Academy | Junho, 2023
                    </p>
                </div>

                <div className="cvCourseCard">
                    <div className="cvTimelineTitle">HSK – Level 1 (Mandarim)</div>
                    <p className="cvCourseMeta">
                    CLEC — China | Maio, 2023
                    </p>
                </div>

                <div className="cvCourseCard">
                    <div className="cvTimelineTitle">eMAG — Conteudista e Desenvolvedor</div>
                    <p className="cvCourseMeta">
                    ENAP — Brasília | Fevereiro, 2023
                    </p>
                </div>

                <div className="cvCourseCard">
                    <div className="cvTimelineTitle">Metodologias Ágeis na Prática (Lean, Scrum e Squads)</div>
                    <p className="cvCourseMeta">
                    Escola Conquer | Junho, 2022
                    </p>
                </div>

                <div className="cvCourseCard">
                    <div className="cvTimelineTitle">HCIA-AI Course</div>
                    <p className="cvCourseMeta">
                    Huawei | Maio, 2022
                    </p>
                </div>

                <div className="cvCourseCard">
                    <div className="cvTimelineTitle">UI/UX Web & App</div>
                    <p className="cvCourseMeta">
                    Cel.Lep | Junho, 2021
                    </p>
                </div>

                </div>
            </div>
            </section>

     {/* PREMIAÇÕES (FFFFFF) */}
    <section className="cvSection cvSection--awards">
    <div className="cvInner">
        <h2 className="cvTitle">Premiações</h2>
        <p className="cvSubtitle">Reconhecimentos e conquistas acadêmicas e tecnológicas.</p>

        <div className="cvAwardsGrid">
        {/* ICCSA */}
        <div className="cvAwardCard">
            <div className="cvTimelineTitle" style={{ color: "#1f1f1f" }}>
            Best Paper Award
            </div>

            <p className="cvText" style={{ marginTop: 6, opacity: 0.75 }}>
            ICCSA — International Conference on Computational Science and Its Applications  
            <br />
            Hanoi, Vietnã • 2024
            </p>

            <p className="cvText" style={{ marginTop: 12, opacity: 0.85 }}>
            Premiação de melhor artigo concedida ao trabalho
            <em> “A Process to Identify Players’ Motivational Profiles for Designing a Gamification Project”</em>,
            reconhecendo a contribuição científica na área de gamificação e perfis motivacionais.
            </p>
        </div>

        {/* HUAWEI */}
        <div className="cvAwardCard">
            <div className="cvTimelineTitle" style={{ color: "#1f1f1f" }}>
            Seeds for the Future – Huawei
            </div>

            <p className="cvText" style={{ marginTop: 6, opacity: 0.75 }}>
            Huawei Technologies  
            <br />
            Brasil e Portugal • 2022
            </p>

            <p className="cvText" style={{ marginTop: 12, opacity: 0.85 }}>
            Premiação concedida à equipe vencedora do programa internacional
            <strong> Seeds for the Future</strong>, com o projeto
            <em> “Listen the Sign”</em>, voltado à inovação tecnológica com impacto social.
            </p>
        </div>
        </div>
    </div>
    </section>

    {/* PROJETOS */}
<section className="cvSection cvSection--projects">
  <div className="cvInner">
    <h2 className="cvTitle">Projetos</h2>
    <p className="cvSubtitle">
      Projetos acadêmicos, open source e produtos digitais desenvolvidos em diferentes contextos.
    </p>

    <div className="cvProjectsList">

      {/* Contribuidora Debian */}
      <div className="cvProjectItem">
        <div className="cvProjectImage">
            <img src={debianImg} alt="Projeto Contribuidora Debian" />
        </div>
        <div className="cvProjectContent">
          <h3 className="cvProjectTitle">Contribuidora Debian</h3>
          <p className="cvProjectMeta">Debian • Janeiro, 2024 – Presente</p>
          <p className="cvProjectText">
            Desenvolvimento e manutenção de pacotes para a comunidade Debian, com foco em empacotamento,
            testes, documentação e boas práticas. Integração ao Debian Women e participação como palestrante
            na DebConf25, abordando sustentabilidade em software livre e diversidade em STEM.
          </p>
        </div>
      </div>

      {/* ERA */}
      <div className="cvProjectItem">
        <div className="cvProjectImage">
            <img src={eraImg} alt="Projeto ERA" />
        </div>
        <div className="cvProjectContent">
          <h3 className="cvProjectTitle">ERA</h3>
          <p className="cvProjectMeta">PISAC / UnB • Abril, 2025 – Presente</p>
          <p className="cvProjectText">
            Plataforma web para gestão sustentável de recursos em canteiros de obras.
            Desenvolvi frontend em React, dashboards analíticos, componentes reutilizáveis,
            biblioteca de estilos e o design completo da experiência do usuário.
          </p>
        </div>
      </div>

      {/* SolarBanyu */}
      <div className="cvProjectItem">
        <div className="cvProjectImage">
            <img src={solarbanyuImg} alt="Projeto SolarBanyu" />
        </div>
        <div className="cvProjectContent">
          <h3 className="cvProjectTitle">SolarBanyu</h3>
          <p className="cvProjectMeta">Universidade de Brasília • 2024</p>
          <p className="cvProjectText">
            Projeto de dessalinização de água utilizando energia solar e osmose reversa.
            Atuei no desenvolvimento do sistema embarcado com ESP32, comunicação MQTT,
            backend em Node.js, dashboard em React e integração entre múltiplas engenharias.
          </p>
        </div>
      </div>

      {/* Jornada Galáctica */}
      <div className="cvProjectItem">
        <div className="cvProjectImage">
            <img src={jornadaImg} alt="Jornada Galáctica – Canal Ciência" />
        </div>
        <div className="cvProjectContent">
          <h3 className="cvProjectTitle">Jornada Galáctica – Canal Ciência</h3>
          <p className="cvProjectMeta">Canal Ciência • Janeiro, 2024 – Dezembro, 2024</p>
          <p className="cvProjectText">
            Projeto de gamificação científica com missões narrativas e desafios interativos.
            Atuei no design da gamificação, análise de dados, simulação de perfis motivacionais
            e análises estatísticas em R.
          </p>
        </div>
      </div>

      {/* Listen the Sign */}
      <div className="cvProjectItem">
        <div className="cvProjectImage">
            <img src={listenImg} alt="Projeto Listen the Sign" />
        </div>
        <div className="cvProjectContent">
          <h3 className="cvProjectTitle">Listen the Sign</h3>
          <p className="cvProjectMeta">TECH4GOOD / Seeds for the Future • 2022</p>
          <p className="cvProjectText">
            Projeto com foco em inclusão e acessibilidade, desenvolvido na competição TECH4GOOD.
            A solução busca facilitar a comunicação entre pessoas surdas e ouvintes no ambiente corporativo,
            utilizando tecnologia com impacto social.
          </p>
        </div>
      </div>

      {/* Apita Cidadão */}
      <div className="cvProjectItem">
        <div className="cvProjectImage">
            <img src={apitaImg} alt="Projeto Apita Cidadão" />
        </div>
        <div className="cvProjectContent">
          <h3 className="cvProjectTitle">Apita Cidadão</h3>
          <p className="cvProjectMeta">Projeto independente • GovTech</p>
          <p className="cvProjectText">
            Plataforma digital voltada à participação cidadã, permitindo registro,
            acompanhamento e visualização de demandas públicas.
            Atuei no design de UX/UI, arquitetura da informação e concepção da solução.
          </p>
        </div>
      </div>

      {/* Atloria */}
      <div className="cvProjectItem">
        <div className="cvProjectImage">
            <img src={atloriaImg} alt="Atloria" />
        </div>
        <div className="cvProjectContent">
          <h3 className="cvProjectTitle">Atloria</h3>
          <p className="cvProjectMeta">Projeto acadêmico • Engenharia de Software</p>
          <p className="cvProjectText">
            Plataforma gamificada para visualização de estruturas de dados,
            utilizando conceitos de jogos, progressão e aprendizagem ativa.
            Projeto com foco em educação, gamificação e experiência do usuário.
          </p>
        </div>
      </div>

      {/* Fintech de Saúde */}
      <div className="cvProjectItem">
        <div className="cvProjectImage">
            <img src={fintechImg} alt="Fintech de saúde" />
        </div>
        <div className="cvProjectContent">
          <h3 className="cvProjectTitle">Fintech de Saúde</h3>
          <p className="cvProjectMeta">Projeto internacional • UI/UX</p>
          <p className="cvProjectText">
            Design de interfaces para plataforma digital de saúde financeira.
            Atuei na criação de fluxos de usuário, protótipos em Figma,
            definição da jornada do usuário e organização visual do produto.
          </p>
        </div>
      </div>

      {/* Recrutamento Inteligente */}
      <div className="cvProjectItem">
        <div className="cvProjectImage">
            <img src={recrutamentoImg} alt="Recrutamento inteligente" />
        </div>
        <div className="cvProjectContent">
          <h3 className="cvProjectTitle">Plataforma de Recrutamento Inteligente</h3>
          <p className="cvProjectMeta">Produto SaaS • UI/UX & Front-end</p>
          <p className="cvProjectText">
            Plataforma de recrutamento com foco em eficiência e experiência do candidato.
            Atuei no design de interfaces, estruturação de conteúdos em inglês,
            criação de landing pages e implementação front-end.
          </p>
        </div>
      </div>

      {/* Imobiliária */}
      <div className="cvProjectItem">
        <div className="cvProjectImage">
            <img src={imobiliariaImg} alt="Website de imobiliária" />
        </div>
        <div className="cvProjectContent">
          <h3 className="cvProjectTitle">Plataforma Imobiliária</h3>
          <p className="cvProjectMeta">Projeto internacional • UI/UX</p>
          <p className="cvProjectText">
            Desenvolvimento de interfaces para sistema de listagem de imóveis.
            Atuei no design visual, organização da informação,
            fluxos de busca e agendamento e suporte à implementação em WordPress.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  );
}
