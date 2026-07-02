import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getIcon } from "@/lib/icons";
import differentials from "@/data/differentials.json";
import type { Differential } from "@/types";

export function Differentials() {
  return (
    <section className="bg-ocean-800 py-24 text-white sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Por que reservar comigo"
          title="Uma experiência diferente de reservar temporada"
          tone="dark"
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {(differentials as Differential[]).map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="flex gap-4"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-lagoon-300">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
