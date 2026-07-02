import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { resolveImage } from "@/lib/images";
import { getIcon } from "@/lib/icons";
import siteData from "@/data/site.json";

const { about } = siteData;

export function AboutHouse() {
  return (
    <section id="a-casa" className="py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={resolveImage("fachada-01.svg")}
            alt="Fachada da casa de temporada"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft"
          />
          <img
            src={resolveImage("piscina-01.svg")}
            alt="Piscina com cascata da casa"
            loading="lazy"
            className="absolute -bottom-8 -right-6 aspect-video w-2/3 rounded-2xl border-4 border-sand-50 object-cover shadow-soft sm:-right-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-lagoon-600">
            {about.eyebrow}
          </span>
          <h2 className="text-balance text-3xl font-semibold text-graphite-900 sm:text-4xl">
            {about.title}
          </h2>

          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-graphite-600">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-4">
            {about.highlights.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <li
                  key={item.text}
                  className="flex items-center gap-3 rounded-xl bg-sand-100/70 px-4 py-3"
                >
                  <Icon size={20} className="shrink-0 text-ocean-700" />
                  <span className="text-sm font-medium text-graphite-700">{item.text}</span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
