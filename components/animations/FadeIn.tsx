"use client";

import React, { useRef, useLayoutEffect } from "react";

import { gsap } from "@/config/gsap";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  distance = 50,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = elementRef.current;

    // Configuração das coordenadas iniciais baseada na direção
    const offsets = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
      none: { x: 0, y: 0 },
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          ...offsets[direction],
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, elementRef);

    return () => ctx.revert();
  }, [direction, delay, duration, distance]);

  return (
    <div ref={elementRef} className="will-change-transform">
      {children}
    </div>
  );
};
