import { Button } from "@/components/ui/Button";

export function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-sand-50 px-6 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-lagoon-600">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-graphite-900">Página não encontrada</h1>
        <p className="mt-3 text-graphite-600">
          O link acessado não existe ou foi movido.
        </p>
        <Button href="/" className="mt-8">
          Voltar ao início
        </Button>
      </div>
    </section>
  );
}
