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
      icon: <Github size={20} />,
      href: "https://github.com/CaioHenrique00",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/caio-alves-barbosa-155416205/",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:dev.caiohalves@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative pt-20 pb-10 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
          {/* Lado Esquerdo: Branding */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black italic tracking-tighter uppercase">
              <span>
                <AuroraText>Caio Henrique</AuroraText>{" "}
              </span>
            </h2>
            <p className="text-default-500 max-w-sm">
              Desenvolvendo experiências digitais de alto impacto com foco em
              performance e design.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                as="a"
                className="bg-content1/50 hover:bg-primary hover:text-white transition-all"
                href={link.href}
                radius="full"
                startContent={link.icon}
                target="_blank"
                variant="flat"
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>

        <Divider className="opacity-10" />

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-default-400 text-sm">
          <p>© {currentYear} • Feito com Next.js, HeroUI, GSAP e Supabase</p>

          <Button
            className="hover:text-primary transition-colors"
            endContent={<ArrowUp size={16} />}
            variant="light"
            onPress={scrollToTop}
          >
            Voltar ao topo
          </Button>
        </div>
      </div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};
