"use client";

import React from "react";
import { Card, CardBody } from "@heroui/react";
import { LucideIcon } from "lucide-react";

import { HoverScale } from "../animations/HoverScale";

export type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "secondary";

export interface CustomCardProps {
  title: string;
  subtitle: string;
  badge?: { label: string; variant?: BadgeVariant };
  icon?: LucideIcon;
  iconColor?: string;
  footerIcon?: LucideIcon;
  footerText?: string;
  onClick?: () => void;
  isClickable?: boolean;
  className?: string;
  minHeight?: string;
  children?: React.ReactNode;
}

export const CustomCard = React.memo(
  ({
    title,
    subtitle,
    badge,
    icon: Icon,
    iconColor = "text-emerald-400",
    footerIcon: FooterIcon,
    footerText,
    onClick,
    isClickable = false,
    className = "",
    minHeight = "220px",
    children,
  }: CustomCardProps) => {
    const shouldBeClickable = isClickable || !!onClick;

    const badgeStyles: Record<BadgeVariant, string> = {
      primary: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      success: "bg-success/10 text-success border-success/20",
      warning: "bg-warning/10 text-warning border-warning/20",
      secondary: "bg-secondary/10 text-secondary border-secondary/20",
      default: "bg-default-100 text-default-400 border-default-200",
    };

    return (
      <HoverScale className={`h-full ${className}`}>
        <Card
          className="w-full h-full border border-white/10 bg-content1/20 hover:border-emerald-500/40 transition-all duration-300"
          isPressable={shouldBeClickable}
          onPress={shouldBeClickable ? onClick : undefined}
        >
          <CardBody
            className="p-6 flex flex-col w-full overflow-hidden"
            style={{ minHeight }}
          >
            <div className="flex justify-between items-start w-full mb-6">
              {Icon && (
                <div className={`p-2.5 rounded-xl bg-white/5 ${iconColor}`}>
                  <Icon size={22} strokeWidth={2.5} />
                </div>
              )}
              {badge && (
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                    badgeStyles[badge.variant || "default"]
                  }`}
                >
                  {badge.label}
                </span>
              )}
            </div>

            <div className="flex-grow space-y-2 text-left">
              <h3 className="text-xl font-bold tracking-tight text-white">
                {title}
              </h3>
              <p className="text-default-400 font-medium leading-relaxed">
                {subtitle}
              </p>
              {children && <div className="mt-2">{children}</div>}
            </div>

            {(FooterIcon || footerText) && (
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-default-500 text-[10px] font-bold uppercase tracking-tighter">
                  {FooterIcon && (
                    <FooterIcon className="opacity-70" size={14} />
                  )}
                  {footerText && <span>{footerText}</span>}
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </HoverScale>
    );
  },
);

CustomCard.displayName = "CustomCard";
