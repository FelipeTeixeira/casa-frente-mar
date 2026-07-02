import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import galleryData from "@/data/gallery.json";
import type { GalleryCategoryMeta, GalleryImage } from "@/types";

const categories = galleryData.categories as GalleryCategoryMeta[];
const images = galleryData.images as GalleryImage[];

export function Gallery() {
  return (
    <section id="galeria" className="bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Galeria"
          title="Conheça cada cantinho da casa"
          subtitle="Piscina, área gourmet, quartos e mais — clique em qualquer foto para ampliar."
        />
        <div className="mt-14">
          <GalleryGrid images={images} categories={categories} />
        </div>
      </Container>
    </section>
  );
}
