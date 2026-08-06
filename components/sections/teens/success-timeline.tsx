import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { successTimeline } from "@/lib/data";

export function SuccessTimeline() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Your first five weeks"
          title="From profile to payment in a month"
          description="A realistic look at how quickly things move once you get started."
        />

        <StaggerGroup className="relative mt-16 grid grid-cols-1 gap-4 sm:grid-cols-5">
          <div aria-hidden className="absolute inset-x-0 top-9 hidden h-px bg-primary-200 sm:block" />
          {successTimeline.map((item) => (
            <StaggerItem key={item.week} direction="up">
              <div className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full border-4 border-white bg-primary-600 shadow-soft dark:border-dark-bg" />
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-primary-700">
                  {item.week}
                </p>
                <p className="mt-1 font-display text-base font-bold text-ink dark:text-primary-50">
                  {item.title}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
