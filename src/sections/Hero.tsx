import { motion } from "framer-motion";
import { MessageCircle, Images } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { resolveImage } from "@/lib/images";
import { buildWhatsAppLink } from "@/config/site";
import siteData from "@/data/site.json";

const { hero } = siteData;

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={resolveImage("hero.jpg")}
        alt="Piscina com cascata da casa de temporada em Caraguatatuba"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/85 via-graphite-900/40 to-graphite-900/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite-900/50 via-transparent to-transparent" />

      <Container className="relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="mb-5 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            {hero.eyebrow}
          </span>

          <h1 className="text-balance text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/85">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              href={buildWhatsAppLink("reserva")}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle size={20} fill="white" strokeWidth={0} />}
            >
              {hero.primaryCta}
            </Button>
            <Button href="#galeria" variant="outline" size="lg" icon={<Images size={20} />}>
              {hero.secondaryCta}
            </Button>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/20 pt-8 sm:grid-cols-4"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs uppercase tracking-wider text-white/60">{stat.label}</dt>
              <dd className="mt-1 text-2xl font-semibold text-white">{stat.value}</dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
