import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { howItWorksSteps } from "@/lib/data";

export function HowItWorks() {
  return (
    <section className="section-pad relative overflow-hidden bg-grad-soft dark:bg-dark-surface">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title="From sign-up to your first paycheck"
          description="Four simple steps stand between you and your first real-world project."
        />

        <div className="relative mt-20">
          <div
            aria-hidden
            className="absolute left-6 top-0 h-full w-px bg-primary-200 lg:left-0 lg:top-6 lg:h-px lg:w-full"
          />
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {howItWorksSteps.map((step, index) => (
              <Reveal key={step.step} direction="up" delay={index * 0.12}>
                <div className="relative flex gap-5 pl-16 lg:flex-col lg:gap-0 lg:pl-0">
                  <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-grad-brand font-display text-lg font-bold text-white shadow-button lg:relative">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <div className="lg:mt-6">
                    <h3 className="font-display text-lg font-bold text-ink dark:text-primary-50">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
