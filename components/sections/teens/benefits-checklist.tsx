import { CheckCircle2 } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/badge";
import { studentBenefits } from "@/lib/data";

export function BenefitsChecklist() {
  return (
    <section className="section-pad">
      <div className="container grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal direction="left">
          <Eyebrow>Student benefits</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] dark:text-primary-50">
            Everything you gain, beyond the paycheck
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-body">
            Every project on Funngro is designed to build more than your bank balance — it
            builds the habits and confidence that carry into every future role.
          </p>
        </Reveal>

        <StaggerGroup stagger={0.06} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {studentBenefits.map((benefit) => (
            <StaggerItem key={benefit} direction="right">
              <div className="flex items-center gap-3 rounded-2xl border border-primary-100 bg-white px-5 py-4 dark:border-dark-border dark:bg-dark-card">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600" strokeWidth={2.5} />
                <span className="text-sm font-semibold text-ink-soft dark:text-primary-100">
                  {benefit}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
