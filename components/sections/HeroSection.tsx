'use client';

import React from 'react';
import { Button } from '@heroui/react';
import { ParallaxLayer } from '../animations/ParallaxLayer';
import { FadeIn } from '../animations/FadeIn';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background py-20">
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none">
        <div className="w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[150px]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center">
        <FadeIn direction="up" duration={1}>
          <div className="text-center space-y-4">
            <span className="text-primary font-mono tracking-[0.2em] uppercase text-xs md:text-sm">
              Frontend Developer
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase">
              CRIANDO <br /> 
              <span className="text-primary italic">EXPERIÊNCIAS</span>
            </h1>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="mt-8 text-base md:text-xl text-default-500 max-w-xl text-center leading-relaxed">
            Desenvolvedor focado em <span className="text-white">interfaces de alto impacto</span> e animações fluidas para produtos digitais.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button color="primary" size="lg" radius="full" className="px-8 font-bold h-14 shadow-lg shadow-primary/20 w-full sm:w-auto">
              Ver Projetos
            </Button>
            <Button size="lg" radius="full" variant="bordered" className="px-8 font-bold h-14 w-full sm:w-auto">
              Contato
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};