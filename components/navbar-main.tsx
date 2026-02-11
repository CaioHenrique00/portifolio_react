'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@heroui/react';
import { FadeIn } from './animations/FadeIn';

export const NavbarMain = () => {
  return (
    <Navbar maxWidth="xl" position="sticky" isBlurred className="bg-background/70">
      <NavbarBrand>
        <FadeIn direction="none" duration={0.5}>
          <p className="font-bold text-inherit text-xl tracking-tighter">PORTFÓLIO</p>
        </FadeIn>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {['Sobre', 'Projetos', 'Contacto'].map((item, index) => (
          <NavbarItem key={item}>
            <FadeIn direction="down" delay={0.1 * index} distance={20}>
              <Link color="foreground" href={`#${item.toLowerCase()}`} className="text-sm font-medium">
                {item}
              </Link>
            </FadeIn>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <FadeIn direction="left" delay={0.4}>
            <Button as={Link} color="primary" href="#" variant="flat" radius="full">
              Currículo
            </Button>
          </FadeIn>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};