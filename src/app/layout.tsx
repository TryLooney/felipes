import "~/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { Footer } from "./components/footer";
import { Providers } from "./components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Felipes",
    template: "%s - Felipes",
  },
  description:
    "Olá! Meu nome é Luis Felipe, e tenho 15 anos. Sou apaixonado por tecnologia e meu trabalho é impulsionado pela vontade constante de inovar. Este é o meu site, onde você pode explorar meus projetos e conhecer mais sobre minha jornada emocionante. Seja bem-vindo!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider headers={headers()}>
          <Providers>
            {children}
            <Footer />
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
