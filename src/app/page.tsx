"use client";

import { Button, Link, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import MaxHeightWrapper from "./components/max-height-wrapper";

export default function Home() {
  return (
    <>
      <MaxHeightWrapper className="flex min-h-screen flex-col items-center justify-center space-y-8">
        <Tooltip
          content="Você será enviado para Dash Interactives"
          showArrow
          delay={500}
        >
          <Button
            as={Link}
            href="https://dashinteractives.com"
            isExternal
            color="primary"
            variant="shadow"
            radius="full"
            className="absolute top-12 lg:top-32"
          >
            Atualmente em Dash Interactives
          </Button>
        </Tooltip>
        <div className="flex w-full flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-8">
          <div className="flex items-center justify-center">
            <Image
              alt="Luis Felipe"
              src="/pfp.jpeg"
              width={128}
              height={128}
              quality={100}
              className="z-10 rounded-full"
            />
            <Image
              alt="Luis Felipe"
              src="/pfp.jpeg"
              width={128}
              height={128}
              quality={100}
              className="pointer-events-none absolute scale-110 rounded-full blur-md"
            />
          </div>
          <h1 className="bg-gradient-to-r from-foreground-800 to-foreground-500 bg-clip-text text-6xl font-extrabold text-transparent">
            felipes
          </h1>
        </div>
        <div>
          <p className="max-w-prose text-center text-lg text-foreground-600">
            Olá 😄! Meu nome é Luis Felipe, tenho{" "}
            {new Date().getFullYear() - new Date("2008-10-04").getFullYear()}{" "}
            anos e sou movido por uma paixão inabalável pela tecnologia. Tudo o
            que faço é resultado de um desejo ardente de inovação. Sinta-se
            muito bem-vindo ao meu site, onde você pode explorar meus{" "}
            <Link href="/projects" className="text-lg text-blue-500">
              projetos
            </Link>{" "}
            e conhecer mais sobre{" "}
            <Link href="/aboutme" className="text-lg text-blue-500">
              minha jornada
            </Link>
            .
          </p>
        </div>
      </MaxHeightWrapper>
    </>
  );
}
