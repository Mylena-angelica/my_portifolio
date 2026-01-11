import Hero from "../components/Hero";
import SobreMim from "../components/SobreMim";
import SkillsSection from "../components/SkillsSection";
import PortfolioSection from "../components/PortfolioSection";
import ExperienceSection from "../components/ExperienciasHome";
import Contact from "../components/Contato";

export default function Home() {
  return (
    <>
      <Hero />
      <SobreMim />
      <SkillsSection />
      <PortfolioSection />
      <ExperienceSection />
      <Contact />
    </>
  );
}
