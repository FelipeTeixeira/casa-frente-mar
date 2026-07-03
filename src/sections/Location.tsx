import { motion } from "framer-motion";
import { Navigation, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getIcon } from "@/lib/icons";
import { siteConfig } from "@/config/site";
import nearby from "@/data/nearby.json";
import type { NearbyPlace } from "@/types";

export function Location() {
  return (
    <section id="localizacao" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Localização"
          title={`${siteConfig.location.neighborhood}, ${siteConfig.location.city}`}
          subtitle="Perto da praia e de tudo o que você precisa durante a estadia."
        />

        <p className="mx-auto mt-4 flex w-fit items-center gap-2 text-sm text-graphite-600">
          <MapPin size={16} className="shrink-0 text-brand-600" />
          {siteConfig.location.address}
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-soft lg:col-span-3"
          >
            <iframe
              title="Mapa de localização da casa"
              src={siteConfig.location.mapsEmbedUrl}
              className="h-80 w-full border-0 sm:h-full sm:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-graphite-100 bg-white p-6 shadow-card lg:col-span-2"
          >
            <ul className="divide-y divide-graphite-100">
              {(nearby as NearbyPlace[]).map((place) => {
                const Icon = getIcon(place.icon);
                return (
                  <li key={place.name} className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-graphite-900">
                        {place.name}
                      </p>
                      <p className="text-xs text-graphite-500">{place.category}</p>
                    </div>
                    <span className="shrink-0 text-xs font-medium text-graphite-500">
                      {place.distance}
                    </span>
                  </li>
                );
              })}
            </ul>

            <Button
              href={siteConfig.location.mapsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              className="mt-6 w-full"
              icon={<Navigation size={16} />}
            >
              Abrir no Google Maps
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
