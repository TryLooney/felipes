import { Button, Link } from "@nextui-org/react";
import { type Metadata } from "next";
import MaxHeightWrapper from "../components/max-height-wrapper";

export const metadata: Metadata = {
  title: "Projetos",
};

export default function Projects() {
  return (
    <>
      <MaxHeightWrapper className="flex min-h-screen flex-col items-center justify-center space-y-8">
        <h2 className="max-w-prose text-center text-4xl font-bold text-foreground-800">
          Esta página ainda está em construção...
        </h2>
        <Button variant="shadow" color="primary" as={Link} href="/">
          Página inicial
        </Button>
      </MaxHeightWrapper>
    </>
  );
}
