import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { GradientBlob } from "@/components/ui/gradient-blob";

export function FinalCta({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-4xl border border-primary-100 bg-white px-8 py-16 text-center shadow-card sm:px-16 dark:border-dark-border dark:bg-dark-card">
          <GradientBlob variant="lime" className="-left-16 -top-16 h-56 w-56" />
          <GradientBlob variant="mint" className="-bottom-20 -right-10 h-64 w-64" />
          <Reveal direction="scale" className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] dark:text-primary-50">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">{description}</p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href={primaryHref} size="lg">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
              {secondaryLabel && secondaryHref && (
                <Button href={secondaryHref} variant="secondary" size="lg">
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
