import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useScrolledPast } from "@/hooks/useScrollY";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { buildWhatsAppLink } from "@/config/site";
import clsx from "clsx";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#a-casa", label: "A Casa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#comodidades", label: "Comodidades" },
  { href: "#localizacao", label: "Localização" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const scrolled = useScrolledPast(40);
  const [open, setOpen] = useState(false);
  useLockBodyScroll(open);

  const solid = scrolled || open;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "bg-white/95 shadow-soft backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#inicio"
          className={clsx(
            "text-lg font-semibold tracking-tight transition-colors",
            solid ? "text-ocean-800" : "text-white",
          )}
        >
          Casa Frente Mar
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-lagoon-500",
                solid ? "text-graphite-700" : "text-white/90",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={buildWhatsAppLink("reserva")} target="_blank" rel="noopener noreferrer" size="md">
            Reservar
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className={clsx(
            "grid h-10 w-10 place-items-center rounded-full transition-colors lg:hidden",
            solid ? "text-ocean-800" : "text-white",
          )}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 pb-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-graphite-700 hover:bg-sand-100"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href={buildWhatsAppLink("reserva")}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                className="mt-3 w-full"
              >
                Reservar pelo WhatsApp
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
