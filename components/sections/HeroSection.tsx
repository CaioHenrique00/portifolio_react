"use client";

import React from "react";
import { Button } from "@heroui/react";
import { ArrowUpRight, Code2 } from "lucide-react";

import { FadeIn } from "../animations/FadeIn";
import { AuroraText } from "../ui/AuroraText";

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-[70vh] md:min-h-screen w-full flex items-center justify-start overflow-hidden py-10 md:py-20"
      id="hero"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl text-center md:text-left">
          {/* Título */}
          <FadeIn delay={0.2} direction="right">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium text-white leading-tight">
              <AuroraText>Desenvolvedor Frontend</AuroraText>
            </h1>
            <p className="mt-3 text-xs sm:text-sm uppercase tracking-widest text-default-400">
              Meu primeiro portfólio
            </p>
          </FadeIn>

          {/* Descrição */}
          <FadeIn delay={0.3} direction="right">
            <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-default-400 leading-relaxed">
              Desenvolvedor focado em Frontend, atualmente expandindo fronteiras
              para o <span className="text-white">Backend</span> através de
              bootcamps e estudos intensivos. Meu objetivo é unir a precisão
              visual à robustez lógica do Fullstack.
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.4} direction="right">
            <div className="mt-8 sm:mt-12 flex justify-center md:justify-start">
              <Button
                className="text-white border-white/30 hover:bg-emerald-400 hover:text-black transition-colors duration-300"
                variant="bordered"
              >
                Ver Projetos
                <ArrowUpRight
                  className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={18}
                />
              </Button>
            </div>
          </FadeIn>

          {/* status */}
          <FadeIn delay={0.5} direction="right">
            <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/5 pt-8 text-center sm:text-left">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">
                  Stacks principais
                </span>
                <p className="text-lg sm:text-xl font-medium text-white mt-1">
                  React & Next.js
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">
                  Aprendendo
                </span>
                <p className="text-lg sm:text-xl font-medium text-white mt-1">
                  Node.js & SQL
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">
                  Status
                </span>
                <p className="text-lg sm:text-xl font-medium text-white mt-1">
                  Dev Junior
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Ícone decorativo */}
      <div className="absolute bottom-6 right-6 hidden lg:block opacity-10">
        <Code2 className="text-emerald-500" size={150} strokeWidth={0.5} />
      </div>
    </section>
  );
};
