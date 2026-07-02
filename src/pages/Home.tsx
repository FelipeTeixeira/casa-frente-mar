import { Hero } from "@/sections/Hero";
import { AboutHouse } from "@/sections/AboutHouse";
import { Gallery } from "@/sections/Gallery";
import { Amenities } from "@/sections/Amenities";
import { Differentials } from "@/sections/Differentials";
import { Reveillon } from "@/sections/Reveillon";
import { Testimonials } from "@/sections/Testimonials";
import { Location } from "@/sections/Location";
import { Faq } from "@/sections/Faq";
import { FinalCta } from "@/sections/FinalCta";

export function Home() {
  return (
    <>
      <Hero />
      <AboutHouse />
      <Gallery />
      <Amenities />
      <Differentials />
      <Reveillon />
      <Testimonials />
      <Location />
      <Faq />
      <FinalCta />
    </>
  );
}
