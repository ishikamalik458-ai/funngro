import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { applicationProcess } from "@/lib/data";

export function ApplicationProcess() {
  return (
    <section className="section-pad bg-grad-soft dark:bg-dark-surface">
      <div className="container">
        <SectionHeading
          eyebrow="Application process"
          title="Six steps from curious to hired"
          description="A clear, guided path — no confusion about what happens next."
        />

        <div className="relative mx-auto mt-20 max-w-3xl">
          <div
            aria-hidden
            className="absolute left-6 top-2 h-[calc(100%-1rem)] w-px bg-primary-200 sm:left-1/2 sm:-translate-x-1/2"
          />
          <div className="flex flex-col gap-10">
            {applicationProcess.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <Reveal key={step.step} direction={isEven ? "left" : "right"}>
                  <div className="relative flex items-center gap-6 pl-16 sm:gap-0 sm:pl-0">
                    <span className="absolute left-0 top-1/2 flex h-12 w-12 -translate-y-1/2 shrink-0 items-center justify-center rounded-2xl bg-grad-brand font-display text-sm font-bold text-white shadow-button sm:static sm:order-2 sm:mx-6 sm:translate-y-0">
                      {step.step}
                    </span>
                    <div
                      className={`card-surface flex-1 p-6 sm:order-1 ${isEven ? "sm:text-right" : "sm:order-3"}`}
                    >
                      <h3 className="font-display text-base font-bold text-ink dark:text-primary-50">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-body">{step.description}</p>
                    </div>
                    <div className={`hidden flex-1 sm:block ${isEven ? "sm:order-3" : "sm:order-1"}`} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
