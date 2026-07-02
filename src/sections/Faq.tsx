import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import faq from "@/data/faq.json";
import type { FaqItem } from "@/types";

export function Faq() {
  return (
    <section id="faq" className="bg-surface py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
        <div className="mt-12">
          <Accordion items={faq as FaqItem[]} />
        </div>
      </Container>
    </section>
  );
}
