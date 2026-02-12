import "@/styles/globals.css";
import { Metadata } from "next";

import { Providers } from "./providers";

import { SmoothScroll } from "@/components/animations/smooth-scroll";

export const metadata: Metadata = {
  title: "Meu Portfólio Parallax",
  description: "Criado com Next.js, GSAP e HeroUI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <head />
      <body className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
        <Providers>
          <SmoothScroll>
            <main className="container mx-auto max-w-7xl pt-5 px-6 flex-grow">
              {children}
            </main>
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
