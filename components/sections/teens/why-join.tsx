import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { teenWhyJoin } from "@/lib/data";

export function WhyJoin() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Why join Funngro"
          title="Everything school doesn't teach you"
          description="Six reasons students choose Funngro to kick-start their careers early."
        />

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teenWhyJoin.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="card-surface group h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-700 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                  <feature.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink dark:text-primary-50">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-body">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
