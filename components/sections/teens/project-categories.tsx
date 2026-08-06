import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { projectCategories } from "@/lib/data";

export function ProjectCategories() {
  return (
    <section className="section-pad bg-grad-soft dark:bg-dark-surface">
      <div className="container">
        <SectionHeading
          eyebrow="Project categories"
          title="Find the work you're excited about"
          description="Sixteen categories, dozens of live briefs, one profile to apply with."
        />

        <StaggerGroup
          stagger={0.04}
          className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {projectCategories.map((category) => (
            <StaggerItem key={category.label} direction="scale">
              <div className="group flex flex-col items-center gap-3 rounded-2xl border border-primary-100 bg-white px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-soft dark:border-dark-border dark:bg-dark-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-grad-emerald-mint text-primary-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <category.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="text-sm font-semibold text-ink-soft dark:text-primary-100">
                  {category.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
