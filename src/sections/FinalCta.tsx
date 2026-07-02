import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { resolveImage } from "@/lib/images";
import { buildWhatsAppLink } from "@/config/site";
import siteData from "@/data/site.json";

const { finalCta } = siteData;

export function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden py-28 sm:py-36">
      <img
        src={resolveImage("piscina-02.svg")}
        alt="Piscina da casa ao entardecer"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ocean-900/80" />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold text-white sm:text-5xl">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-white/80">
            {finalCta.subtitle}
          </p>
          <div className="mt-10">
            <Button
              href={buildWhatsAppLink("reserva")}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle size={20} fill="white" strokeWidth={0} />}
            >
              {finalCta.cta}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
