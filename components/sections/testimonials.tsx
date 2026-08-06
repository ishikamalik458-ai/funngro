import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Success stories"
          title="Students who started early"
          description="Real feedback from students already turning projects into progress."
        />

        <StaggerGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={testimonial.name} direction={index === 1 ? "up" : index === 0 ? "left" : "right"}>
              <div className="card-surface flex h-full flex-col p-8">
                <Quote className="h-8 w-8 text-primary-200" fill="currentColor" />
                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-soft dark:text-primary-100">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-primary-50 pt-5 dark:border-dark-border">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-grad-emerald-mint text-sm font-bold text-primary-900">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink dark:text-primary-50">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-body">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
