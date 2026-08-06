import type { Metadata } from "next";
import { ArrowRight, ClipboardCheck, Users, ShieldCheck, Rocket } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Eyebrow } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { WhyCompanies } from "@/components/sections/why-companies";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Funngro for Companies | Hire Student Talent for Real Projects",
  description:
    "Post a project brief and connect with talented, motivated students for affordable, fast-turnaround work across design, marketing, development, and more.",
  alternates: { canonical: "/companies" },
};

const steps = [
  { icon: ClipboardCheck, title: "Post a brief", description: "Describe the project, timeline, and budget in minutes." },
  { icon: Users, title: "Review applicants", description: "Browse student portfolios and pick the best match for your brief." },
  { icon: Rocket, title: "Kick off the work", description: "Collaborate directly with your chosen student through delivery." },
  { icon: ShieldCheck, title: "Approve and pay", description: "Review the final work and release payment with confidence." },
];

export default function CompaniesPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-24 lg:pt-48">
        <div aria-hidden className="absolute inset-0 -z-10 bg-grad-soft" />
        <GradientBlob variant="brand" className="-left-24 top-20 h-80 w-80" />
        <div className="container text-center">
          <Reveal direction="scale">
            <Eyebrow icon={<Rocket className="h-3.5 w-3.5" />} className="mx-auto">
              For companies
            </Eyebrow>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl dark:text-primary-50">
              Get real work done by <span className="text-gradient">tomorrow&rsquo;s talent</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-body">
              Post a project, review student portfolios, and get quality work delivered fast —
              at a fraction of traditional agency cost.
            </p>
            <div className="mt-9 flex justify-center">
              <Button href="/contact" size="lg">
                Post a Project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="How hiring works"
            title="From brief to delivery in four steps"
            description="A streamlined process built for teams that need quality work, fast."
          />
          <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <StaggerItem key={step.title}>
                <div className="card-surface h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
                    <step.icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink dark:text-primary-50">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-body">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <WhyCompanies />

      <FinalCta
        title="Ready to hire your next contributor?"
        description="Join the companies already working with driven, talented students on Funngro."
        primaryLabel="Post a Project"
        primaryHref="/contact"
        secondaryLabel="Talk to Us"
        secondaryHref="/contact"
      />
    </>
  );
}
