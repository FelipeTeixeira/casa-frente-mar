import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getIcon } from "@/lib/icons";
import amenities from "@/data/amenities.json";
import type { Amenity } from "@/types";

export function Amenities() {
  return (
    <section id="comodidades" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Comodidades"
          title="Tudo o que você precisa para uma estadia perfeita"
          subtitle="Uma casa completa, pensada para o conforto de famílias e grupos grandes."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {(amenities as Amenity[]).map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group rounded-2xl border border-graphite-100 bg-white p-6 shadow-card transition-shadow hover:shadow-soft"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-graphite-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-graphite-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
