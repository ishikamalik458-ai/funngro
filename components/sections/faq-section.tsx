import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import type { FaqItem } from "@/types";

export function FaqSection({
  items,
  eyebrow = "FAQ",
  title = "Questions, answered",
  description = "Everything you need to know before you get started.",
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-pad bg-grad-soft dark:bg-dark-surface" id="faq">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-14">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
