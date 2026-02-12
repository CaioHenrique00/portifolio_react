"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";

import { FadeIn } from "./animations/FadeIn";

export const NavbarMain = () => {
  return (
    <Navbar
      isBlurred
      className="bg-background/20"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarBrand>
        <FadeIn direction="none" duration={0.5}>
          <p className="font-bold text-inherit text-xl tracking-tighter">
            <span className="text-blue-200"> Portifólio </span>
          </p>
        </FadeIn>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {["Sobre", "Projetos", "Contacto"].map((item, index) => (
          <NavbarItem key={item}>
            <FadeIn delay={0.1 * index} direction="down" distance={10}>
              <Link
                className="text-sm font-medium"
                color="foreground"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </Link>
            </FadeIn>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <FadeIn delay={0.4} direction="left">
            <Button
              as={Link}
              color="primary"
              href="#"
              radius="full"
              variant="flat"
            >
              Currículo
            </Button>
          </FadeIn>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
