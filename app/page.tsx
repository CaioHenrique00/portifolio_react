import { Footer } from "@/components/layout/Footer";
import { NavbarMain } from "@/components/navbar-main";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";

export default function Home() {
  return (
    <>
      <NavbarMain />
      <ParallaxBackground />
      <main className="flex flex-col w-full relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <Footer />
      </main>
    </>
  );
}
