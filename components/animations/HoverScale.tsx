"use client";

import React, { useRef } from "react";

import { gsap } from "@/config/gsap";

interface HoverScaleProps {
  children: React.ReactNode;
  scale?: number;
  y?: number;
  glow?: boolean;
  className?: string;
}

export const HoverScale: React.FC<HoverScaleProps> = ({
  children,
  scale = 1.02,
  y = -10,
  glow = true,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    gsap.to(containerRef.current, {
      y,
      scale,
      boxShadow: glow ? "0px 20px 40px rgba(0, 112, 243, 0.15)" : "none",
      borderColor: glow ? "rgba(0, 112, 243, 0.5)" : "transparent",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const onMouseLeave = () => {
    gsap.to(containerRef.current, {
      y: 0,
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      borderColor: "transparent",
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={containerRef}
      className={`will-change-transform border-1 border-transparent rounded-2xl transition-colors ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};
