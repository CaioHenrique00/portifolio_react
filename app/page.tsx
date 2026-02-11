import { NavbarMain } from "@/components/navbar-main";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <NavbarMain />
      
      <div className="flex flex-col w-full">
        <HeroSection />
        <AboutSection /> 
        <ExperienceSection />
        <EducationSection />
        <section className="h-screen flex items-center justify-center bg-content1/50">
          <p className="text-default-400 animate-pulse">
            Role para baixo para ver o efeito Parallax
          </p>
        </section>
      </div>
    </>
  );
}