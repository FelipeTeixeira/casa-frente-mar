import { Camera, MessageCircle, MapPin, House } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig, buildWhatsAppLink } from "@/config/site";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#a-casa", label: "A Casa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#comodidades", label: "Comodidades" },
  { href: "#localizacao", label: "Localização" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#faq", label: "Perguntas frequentes" },
];

export function Footer() {
  return (
    <footer className="bg-graphite-900 py-16 text-white/80">
      <Container className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Casa de temporada no {siteConfig.location.neighborhood},{" "}
            {siteConfig.location.city} — {siteConfig.location.state}. Reserve direto com
            o anfitrião, sem taxas de intermediário.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Navegação
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Contato
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <a
              href={buildWhatsAppLink("default")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <MessageCircle size={18} /> {siteConfig.phoneDisplay}
            </a>
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Camera size={18} /> Instagram
              </a>
            )}
            <a
              href={siteConfig.location.mapsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <MapPin size={18} /> {siteConfig.location.neighborhood},{" "}
              {siteConfig.location.city}
            </a>
            <a
              href={siteConfig.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <House size={18} /> Ver no Airbnb
            </a>
          </div>
        </div>
      </Container>

      <Container className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
      </Container>
    </footer>
  );
}
