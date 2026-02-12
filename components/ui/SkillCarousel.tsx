"use client";

import React, { useRef, memo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface Skill {
  name: string;
  slug: string;
  color: string;
}

interface SkillCarouselProps {
  skills: Skill[];
  pageIndex: number;
}

const SkillCarouselComponent = ({ skills, pageIndex }: SkillCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.querySelectorAll(".skill-card");

      gsap.fromTo(
        cards,
        {
          y: 40,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "transform",
        },
      );
    },
    { dependencies: [pageIndex], scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
    >
      {skills.slice(0, 4).map((skill) => (
        <div
          key={skill.slug}
          className="skill-card group relative aspect-square p-6 md:p-8 rounded-2xl md:rounded-3xl bg-content1/10 border border-white/5 flex flex-col items-center justify-center gap-3 md:gap-4 transition-all duration-300 cursor-pointer overflow-hidden will-change-transform"
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${skill.color.replace(
                "text-",
                "",
              )}15, transparent 70%)`,
            }}
          />

          <div
            className={`relative z-10 transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
          >
            <img
              alt={skill.name}
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
              src={`https://cdn.simpleicons.org/${skill.slug}/currentColor`}
            />
          </div>

          <span className="relative z-10 font-bold text-[10px] md:text-xs uppercase tracking-widest text-default-400 group-hover:text-white transition-colors duration-300 text-center leading-tight">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
};

SkillCarouselComponent.displayName = "SkillCarousel";

export const SkillCarousel = memo(SkillCarouselComponent);
