import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import testimonials from "@/data/testimonials.json";
import type { Testimonial } from "@/types";

export function Testimonials() {
  return (
    <section id="avaliacoes" className="bg-sand-100/60 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Avaliações"
          title="O que dizem quem já ficou hospedado"
          subtitle="Depoimentos de exemplo — em breve substituídos pelas avaliações reais dos hóspedes."
        />

        <div className="mx-auto mt-6 flex w-fit items-center gap-2">
          <Badge className="bg-white text-graphite-800 shadow-card">
            <StarRating rating={5} size={14} />
            <span>4.97 · mais de 90 avaliações</span>
          </Badge>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {(testimonials as Testimonial[]).map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-card"
            >
              <Quote className="text-lagoon-300" size={24} />
              <StarRating rating={item.rating} className="mt-4" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-graphite-600">
                “{item.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-graphite-100 pt-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-ocean-100 text-sm font-semibold text-ocean-700">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-graphite-900">{item.name}</p>
                  <p className="text-xs text-graphite-500">{item.date}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
