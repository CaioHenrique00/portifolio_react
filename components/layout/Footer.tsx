"use client";

import React from "react";
import { Button, Divider } from "@heroui/react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { AuroraText } from "@/components/ui/AuroraText";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <Github size={18} />,
      href: "https://github.com/CaioHenrique00",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/in/caio-alves-barbosa-155416205/",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={18} />,
      href: "mailto:dev.caiohalves@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative pt-16 md:pt-20 pb-8 md:pb-10 bg-background overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-10 mb-14 md:mb-16 text-center md:text-left">
          
          {/* Branding */}
          <div className="space-y-4 max-w-md">
            <h2 className="text-xl sm:text-2xl font-black italic tracking-tight uppercase">
              <AuroraText>Caio Henrique Alves Barbosa</AuroraText>
            </h2>

            <p className="text-sm sm:text-base text-default-500 leading-relaxed">
              Este portfólio ainda está em desenvolvimento! Em breve,
              haverá mais conteúdo e atualizações frequentes.
            </p>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                as="a"
                href={link.href}
                target="_blank"
                radius="full"
                variant="flat"
                startContent={link.icon}
                className="bg-content1/60 hover:bg-primary hover:text-white transition-all text-sm px-4"
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>

        <Divider className="opacity-10" />

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-5 text-default-400 text-xs sm:text-sm text-center md:text-left">
          <p>
            © {currentYear} • Feito com Next.js, HeroUI, GSAP e Supabase
          </p>

          <Button
            variant="light"
            onPress={scrollToTop}
            endContent={<ArrowUp size={14} />}
            className="hover:text-primary transition-colors text-xs sm:text-sm"
          >
            Voltar ao topo
          </Button>
        </div>
      </div>

      {/* Glow controlado */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[250px] sm:h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};
