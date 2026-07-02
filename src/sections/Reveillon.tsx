import { motion } from "framer-motion";
import { PartyPopper, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { resolveImage } from "@/lib/images";
import { useCountdown } from "@/hooks/useCountdown";
import { buildWhatsAppLink } from "@/config/site";
import siteData from "@/data/site.json";

const { reveillon } = siteData;

const units: Array<{ key: "days" | "hours" | "minutes" | "seconds"; label: string }> = [
  { key: "days", label: "dias" },
  { key: "hours", label: "horas" },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "seg" },
];

export function Reveillon() {
  const countdown = useCountdown(reveillon.targetDate);

  return (
    <section className="relative overflow-hidden bg-graphite-900 py-24 text-white sm:py-32">
      <img
        src={resolveImage("entorno-01.svg")}
        alt="Pôr do sol na região da casa"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-graphite-900 via-graphite-900/85 to-graphite-900" />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            <PartyPopper size={14} /> {reveillon.badge}
          </span>

          <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            {reveillon.eyebrow}
          </span>

          <h2 className="mx-auto mt-3 max-w-2xl text-balance text-3xl font-semibold sm:text-5xl">
            {reveillon.title}
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-balance text-white/70">
            {reveillon.subtitle}
          </p>

          <p className="mt-10 text-xs uppercase tracking-[0.2em] text-white/50">
            {reveillon.countdownLabel}
          </p>

          <div className="mx-auto mt-4 grid max-w-md grid-cols-4 gap-3">
            {units.map((unit) => (
              <div
                key={unit.key}
                className="rounded-2xl border border-gold-500/20 bg-white/5 py-4 backdrop-blur-sm"
              >
                <span className="block text-3xl font-semibold tabular-nums text-gold-400 sm:text-4xl">
                  {String(countdown[unit.key]).padStart(2, "0")}
                </span>
                <span className="mt-1 block text-[11px] uppercase tracking-wider text-white/50">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button
              href={buildWhatsAppLink("reveillon")}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle size={20} fill="white" strokeWidth={0} />}
            >
              {reveillon.cta}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
