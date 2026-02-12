"use client";

import React, { useRef, useLayoutEffect } from "react";

import { gsap } from "@/config/gsap";

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed = 0.5,
  className = "",
}) => {
  const target = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = target.current;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: () => -window.innerHeight * speed,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, target);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={target} className={className}>
      {children}
    </div>
  );
};
