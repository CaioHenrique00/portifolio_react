import "@/styles/globals.css";
import { Metadata } from "next";

import { Providers } from "./providers";

import { SmoothScroll } from "@/components/animations/smooth-scroll";
//em desenvolvimento
export const metadata: Metadata = {
  title: "Portfólio - Caio Henrique",
  description:
    "Desenvolvedor Frontend especializado em React e Next.js, expandindo para Fullstack com Node.js e SQL.",
  keywords: [
    "Caio Henrique",
    "Desenvolvedor Frontend",
    "React",
    "Next.js",
    "Fullstack",
    "Portfólio",
  ],
  authors: [{ name: "Caio Henrique" }],
  creator: "Caio Henrique",
  themeColor: "#0f172a",

openGraph: {
  title: "Portfólio - Caio Henrique",
  description:
    "Desenvolvedor Frontend especializado em React e Next.js.",
  url: "https://portifolio-caio-henrique-alves.vercel.app/",
  siteName: "Portfólio Caio",
  images: [
    {
      url: "/public/og-image.png",
      width: 1200,
      height: 630,
      alt: "Portfólio de Caio Henrique",
    },
  ],
  locale: "pt_BR",
  type: "website",
},
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
            <main className="w-full max-w-7xl mx-auto pt-5 px-4 sm:px-6 md:px-8 flex-grow">
              {children}
            </main>
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
