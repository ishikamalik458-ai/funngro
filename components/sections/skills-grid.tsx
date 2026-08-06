import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { skillsYouCanLearn } from "@/lib/data";

export function SkillsGrid() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Skills you can learn"
          title="Twelve in-demand skills, one platform"
          description="Every project is a chance to practice a skill companies actually pay for."
        />

        <StaggerGroup
          stagger={0.05}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {skillsYouCanLearn.map((skill) => (
            <StaggerItem key={skill.label} direction="scale">
              <div className="group flex items-center gap-3 rounded-2xl border border-primary-100 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-soft dark:border-dark-border dark:bg-dark-card">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 dark:bg-primary-900/40">
                  <skill.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="text-sm font-semibold text-ink-soft dark:text-primary-100">
                  {skill.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
