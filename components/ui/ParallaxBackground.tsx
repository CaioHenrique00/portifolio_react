// Em desenvolimento

"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const ParallaxBackground = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const patternRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Efeito nas luzes de fundo
      gsap.to(".bg-blob", {
        y: (i, target) => -ScrollTrigger.maxScroll(window) * 0.2,
        ease: "none",
        scrollTrigger: {
          start: 0,
          end: "max",
          scrub: true,
        },
      });

      gsap.to(patternRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          start: 0,
          end: "max",
          scrub: true,
        },
      });
    },
    { scope: bgRef },
  );

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div
        ref={patternRef}
        className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-repeat"
      />

      <div className="bg-blob absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
      <div className="bg-blob absolute top-[60%] -right-[5%] w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full" />
      <div className="bg-blob absolute top-[110%] left-[20%] w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full" />
    </div>
  );
};
