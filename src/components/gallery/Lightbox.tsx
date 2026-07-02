import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { resolveImage } from "@/lib/images";
import type { GalleryImage } from "@/types";

interface LightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({ images, index, onClose, onNext, onPrev }: LightboxProps) {
  useLockBodyScroll(index !== null);
  const image = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-graphite-900/95 p-4"
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={onClose}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            aria-label="Foto anterior"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={24} />
          </button>

          <motion.img
            key={image.id}
            src={resolveImage(image.file)}
            alt={image.alt}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
          />

          <button
            type="button"
            aria-label="Próxima foto"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={24} />
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70">
            {index !== null ? index + 1 : 0} / {images.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
