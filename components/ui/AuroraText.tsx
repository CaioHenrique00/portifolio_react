"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
}

export const AuroraText: React.FC<AuroraTextProps> = ({
  children,
  className = "",
}) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(textRef.current, {
        "--color-1": "#6366f1",
        "--color-2": "#06b6d4",
        "--color-3": "#ec4899",
        duration: 4,
        ease: "sine.inOut",
      });

      tl.to(
        textRef.current,
        {
          "--color-1": "#8b5cf6",
          "--color-2": "#22d3ee",
          "--color-3": "#f43f5e",
          duration: 4,
          ease: "sine.inOut",
        },
        0,
      );

      gsap.to(textRef.current, {
        backgroundPosition: "300% center",
        duration: 12,
        repeat: -1,
        ease: "none",
      });

      gsap.to(textRef.current, {
        filter: "drop-shadow(0 0 12px rgba(99,102,241,0.6))",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <span
      ref={textRef}
      className={`inline-block py-1 px-1 -my-1 -mx-1 font-semibold tracking-tight ${className}`}
      style={
        {
          "--color-1": "#6366f1",
          "--color-2": "#06b6d4",
          "--color-3": "#ec4899",
          backgroundImage:
            "linear-gradient(120deg, var(--color-1), var(--color-2), var(--color-3), var(--color-1))",
          backgroundSize: "300% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
};
