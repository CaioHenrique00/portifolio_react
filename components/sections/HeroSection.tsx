"use client";

import React from "react";
import { Button } from "@heroui/react";
import { ArrowUpRight, Code2 } from "lucide-react";

import { FadeIn } from "../animations/FadeIn";
import { AuroraText } from "../ui/AuroraText";

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden py-20 "
      id="hero"
    >
      {/* Background Sutil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-4xl">
          {/* Título: Foco no Frontend + Transição para Backend */}
          <FadeIn delay={0.2} direction="right">
            <h1 className="text-2xl sm:text-6xl md:text-6xl font-medium text-white leading-[1]">
              <AuroraText>Desenvolvedor Frontend</AuroraText>
            </h1>
            <p className="uppercase">Meu primeiro Portifólio</p>
          </FadeIn>

          {/* Descrição: Narrativa de crescimento e bootcamps */}
          <FadeIn delay={0.3} direction="right">
            <p className="mt-8 text-base md:text-lg text-default-400 max-w-2xl leading-relaxed">
              Desenvolvedor focado em Frontend, atualmente expandindo fronteiras
              para o<span className="text-white"> Backend</span> através de
              bootcamps e estudos intensivos. Meu objetivo é unir a precisão
              visual à robustez lógica do Fullstack.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.4} direction="right">
            <div className="mt-12 flex flex-wrap gap-6 items-center">
              <Button
                className="text-white border-white/30 hover:bg-emerald-400 hover:text-black transition-colors duration-300"
                variant="bordered"
              >
                Ver Projetos
                <ArrowUpRight
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  size={18}
                />
              </Button>
            </div>
          </FadeIn>

          {/* Stats de Aprendizado */}
          <FadeIn delay={0.5} direction="right">
            <div className="mt-12 flex flex-wrap gap-12 border-t border-white/5 pt-8">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">
                  Stacks principais
                </span>
                <span className="text-xl font-medium text-white">
                  React & Next.js
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">
                  Aprendendo
                </span>
                <span className="text-xl font-medium text-white">
                  Node.js & SQL
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">
                  Status
                </span>
                <span className="text-xl font-medium text-white">
                  Dev Junior
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Ícone Decorativo Discreto */}
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-10">
        <Code2 className="text-emerald-500" size={150} strokeWidth={0.5} />
      </div>
    </section>
  );
};
