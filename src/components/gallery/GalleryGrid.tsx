import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { resolveImage } from "@/lib/images";
import { useLightbox } from "@/hooks/useLightbox";
import { Lightbox } from "@/components/gallery/Lightbox";
import clsx from "clsx";
import type { GalleryCategoryMeta, GalleryImage } from "@/types";

interface GalleryGridProps {
  images: GalleryImage[];
  categories: GalleryCategoryMeta[];
}

export function GalleryGrid({ images, categories }: GalleryGridProps) {
  const [active, setActive] = useState<string>("todas");

  const filtered = useMemo(
    () => (active === "todas" ? images : images.filter((img) => img.category === active)),
    [images, active],
  );

  const { index, open, close, next, prev } = useLightbox(filtered.length);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className={clsx(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === cat.id
                ? "bg-brand-600 text-white"
                : "bg-white text-graphite-600 hover:bg-graphite-100",
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {filtered.map((image, i) => (
          <motion.button
            key={image.id}
            type="button"
            layout
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            onClick={() => open(i)}
            className="group relative block w-full overflow-hidden rounded-2xl bg-graphite-100 shadow-card"
          >
            <img
              src={resolveImage(image.file)}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-graphite-900/0 opacity-0 transition-all duration-300 group-hover:bg-graphite-900/30 group-hover:opacity-100">
              <Expand className="text-white" size={28} />
            </span>
          </motion.button>
        ))}
      </div>

      <Lightbox images={filtered} index={index} onClose={close} onNext={next} onPrev={prev} />
    </div>
  );
}
