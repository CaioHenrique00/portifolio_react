"use client";

import React from "react";

import { FadeIn } from "../animations/FadeIn";
import { ExperienceCard } from "../experience-card";
import { AuroraText } from "../ui/AuroraText";

import { experiencesData } from "@/data/experience";

export const ExperienceSection = () => {
  return (
    <section className="py-20" id="experiencia ">
      <div className="container mx-auto px-6">
        <FadeIn direction="up">
          <h2 className="text-4xl font-bold mb-16 tracking-tighter uppercase text-center">
            <AuroraText>Experiência Profissional</AuroraText>
          </h2>
        </FadeIn>

        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
          {experiencesData.map((exp, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <FadeIn
                className="w-[calc(100%-4rem)] md:w-[45%]"
                direction={index % 2 === 0 ? "right" : "left"}
              >
                <ExperienceCard {...exp} />
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
