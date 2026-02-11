'use client';

import React from 'react';
import { Card, CardBody, Divider } from '@heroui/react';
import { FadeIn } from '../animations/FadeIn';

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background border-t border-default-100">
      <div className="container mx-auto px-6">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tighter uppercase inline-block border-b-2 border-primary pb-2">
            Sobre Mim
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Bio */}
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-white font-medium leading-tight">
                Transformo ideias complexas em <span className="text-primary italic">código limpo</span> e interfaces intuitivas.
              </p>
              
              <div className="space-y-4 text-default-500 text-base md:text-lg">
                <p>
                  Com experiência em <strong>Next.js</strong> e integração de APIs, foco na construção de sistemas escaláveis e componentes reutilizáveis.
                </p>
                <p>
                  Minha atuação une o rigor técnico da engenharia de software com a sensibilidade do design UI/UX.
                </p>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-black text-primary">02+</p>
                  <p className="text-[10px] uppercase tracking-widest text-default-400">Anos Exp.</p>
                </div>
                <Divider orientation="vertical" className="h-10" />
                <div>
                  <p className="text-3xl font-black text-primary">15+</p>
                  <p className="text-[10px] uppercase tracking-widest text-default-400">Projetos</p>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.4}>
            <Card className="bg-content1/30 border border-white/5 shadow-none">
              <CardBody className="p-6 md:p-8 space-y-8">
                <InfoItem title="Formação" text="ADS - UNAMA" sub="Concluído em 2023" />
                <InfoItem title="Local" text="São Paulo - SP" sub="Disponível para remoto" />
                <InfoItem title="Idiomas" text="Português & Inglês" sub="Nativo / Intermediário" />
              </CardBody>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ title, text, sub }: { title: string, text: string, sub: string }) => (
  <div className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors">
    <h3 className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-1">{title}</h3>
    <p className="font-semibold text-white">{text}</p>
    <p className="text-xs text-default-400">{sub}</p>
  </div>
);