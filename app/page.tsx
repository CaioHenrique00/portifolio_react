import { NavbarMain } from "@/components/navbar-main";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      {/* A Navbar fica fixa no topo via layout ou aqui */}
      <NavbarMain />
      
      <div className="flex flex-col w-full">
        {/* Nossa primeira seção com impacto visual */}
        <HeroSection />
        <AboutSection /> {/* Nova seção adicionada aqui */}
        <ExperienceSection />
        <EducationSection />

        {/* Espaçador temporário para testar o Scroll/Parallax */}
        <section className="h-screen flex items-center justify-center bg-content1/50">
          <p className="text-default-400 animate-pulse">
            Role para baixo para ver o efeito Parallax
          </p>
        </section>
      </div>
    </>
  );
}