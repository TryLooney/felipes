import { Button, Link } from "@nextui-org/react";
import MaxHeightWrapper from "./components/max-height-wrapper";

export default function NotFound() {
  return (
    <>
      <MaxHeightWrapper className="flex min-h-screen flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <h1 className="max-w-prose text-5xl font-extrabold text-foreground-900">
            Oops! Página não encontrada
          </h1>
          <h2 className="max-w-prose text-3xl font-bold text-foreground-700">
            Parece que você se perdeu...
          </h2>
          <p className="max-w-prose text-lg text-foreground-500">
            Desculpe, mas a página que você procura não foi encontrada. Por
            favor, verifique a ortografia ou explore nossas outras páginas.
          </p>
        </div>
        <Button variant="shadow" color="primary" as={Link} href="/">
          Página inicial
        </Button>
      </MaxHeightWrapper>
    </>
  );
}
