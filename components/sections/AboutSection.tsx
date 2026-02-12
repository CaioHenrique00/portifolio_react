"use client";

import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";

import { FadeIn } from "@/components/animations/FadeIn";
import { AuroraText } from "@/components/ui/AuroraText";

const InfoItem = ({
  title,
  text,
  sub,
}: {
  title: string;
  text: string;
  sub: string;
}) => (
  <div className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors group">
    <h3 className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-1 group-hover:tracking-[0.3em] transition-all">
      {title}
    </h3>
    <p className="font-semibold text-white">{text}</p>
    <p className="text-xs text-default-400 mt-0.5">{sub}</p>
  </div>
);

export const AboutSection = () => {
  return (
    <section className="py-20 border-t border-default-100" id="sobre">
      <div className="container mx-auto px-6">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tighter uppercase inline-block border-b-2 border-primary pb-2">
            <AuroraText>Sobre Mim</AuroraText>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Bio */}
          <FadeIn delay={0.2} direction="right">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-white font-medium leading-tight">
                Da Amazônia para o mundo digital, construo{" "}
                <span className="text-primary italic">
                  experiências que conectam
                </span>{" "}
                pessoas e tecnologia.
              </p>

              <div className="space-y-4 text-default-500 text-base md:text-lg">
                <p>
                  Comecei no suporte técnico diagnosticando problemas, e hoje{" "}
                  <strong className="text-white">projeto soluções</strong>. Essa
                  transição me ensinou que bom código resolve problemas reais de
                  pessoas reais.
                </p>
                <p>
                  Especializado em{" "}
                  <strong className="text-white">React/NextJS</strong>.
                </p>
                <p className="text-sm text-default-400 italic border-l-2 border-primary/30 pl-4">
                  &quot;Atualmente expandindo meus conhecimentos para fullstack
                  com NodeJS, estudando arquitetura de sistemas e Clean
                  Code.&quot;
                </p>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-black text-primary">1+</p>
                  <p className="text-[10px] uppercase tracking-widest text-default-400">
                    Anos Exp.
                  </p>
                </div>
                <Divider className="h-10" orientation="vertical" />
                <div>
                  <p className="text-3xl font-black text-primary">X</p>
                  <p className="text-[10px] uppercase tracking-widest text-default-400">
                    Projetos
                  </p>
                </div>
                <Divider className="h-10" orientation="vertical" />
              </div>
            </div>
          </FadeIn>

          {/* Info Cards */}
          <FadeIn delay={0.4} direction="left">
            <Card className="bg-content1/30 border border-white/5 shadow-none">
              <CardBody className="p-6 md:p-8 space-y-8">
                <InfoItem
                  sub="Análise e Desenvolvimento de Sistemas (2023)"
                  text="ADS - UNAMA"
                  title="Formação"
                />
                <InfoItem
                  sub="100% remoto • Freelancer ativo"
                  text="São Paulo - SP"
                  title="Residente em"
                />
                <InfoItem
                  sub="Nativo / Intermediário (Aslan)"
                  text="Português • Inglês"
                  title="Idiomas"
                />
                <InfoItem
                  sub="TailwindCSS • REST APIs • Supabase"
                  text="React • TypeScript • Next.js"
                  title="Stack Principal"
                />
                <InfoItem
                  sub="Clean Code • Engenharia de Software (FIAP)"
                  text="Arquitetura de Sistemas e NodeJS"
                  title="Estudos em andamento"
                />
              </CardBody>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
