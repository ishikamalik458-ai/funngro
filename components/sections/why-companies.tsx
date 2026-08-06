import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { whyCompaniesFeatures } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function WhyCompanies() {
  return (
    <section className="section-pad relative overflow-hidden bg-forest text-white">
      <div aria-hidden className="absolute inset-0 bg-grad-forest" />
      <div
        aria-hidden
        className="absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary-400/20 blur-3xl"
      />

      <div className="container relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal direction="left">
          <Eyebrow className="bg-white/10 text-white">For companies</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Hire tomorrow&rsquo;s talent, today
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-primary-100">
            Post a brief, review real portfolios, and get quality work delivered by driven
            students who bring fresh energy to every project.
          </p>
          <Button href="/companies" variant="white" className="mt-8">
            Post a project
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {whyCompaniesFeatures.map((feature, index) => (
            <Reveal key={feature.title} direction="up" delay={index * 0.1}>
              <div className="h-full rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-lime-300">
                  <feature.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-base font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-100/90">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
