import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="glass max-w-xl rounded-[2rem] p-8 text-center shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Página não encontrada
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          O conteúdo solicitado não existe.
        </h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          Volte para a página inicial e navegue pelo portfólio.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft className="mr-2 size-4" />
              Voltar ao início
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
