export type GalleryCategory =
  | "fachada"
  | "piscina"
  | "area-gourmet"
  | "cozinha"
  | "sala"
  | "quartos"
  | "banheiros"
  | "varanda"
  | "entorno";

export interface GalleryImage {
  id: string;
  file: string;
  alt: string;
  category: GalleryCategory;
  featured?: boolean;
}

export interface GalleryCategoryMeta {
  id: GalleryCategory | "todas";
  label: string;
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}

export interface Differential {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  date: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NearbyPlace {
  category: string;
  icon: string;
  name: string;
  distance: string;
}

export interface ReveillonHighlight {
  icon: string;
  text: string;
}
