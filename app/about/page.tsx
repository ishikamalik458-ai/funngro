import type { Metadata } from "next";
import { Target, Heart, Sparkles, ShieldCheck } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Eyebrow } from "@/components/ui/badge";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "About Funngro | Our Mission",
  description:
    "Funngro exists to close the gap between school and career by giving students real, paid work experience before graduation.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Target, title: "Real over rehearsed", description: "We connect students to genuine business challenges, not simulations." },
  { icon: Heart, title: "Student-first", description: "Every feature is designed around what helps a student grow, not just what's efficient for companies." },
  { icon: Sparkles, title: "Fresh thinking", description: "We believe young perspectives make businesses better, not just cheaper." },
  { icon: ShieldCheck, title: "Trust, both ways", description: "Fair pay, honest feedback, and a safe space for a first professional experience." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-36 sm:pt-40 lg:pb-20 lg:pt-48">
        <div aria-hidden className="absolute inset-0 -z-10 bg-grad-soft" />
        <GradientBlob variant="mint" className="-right-24 top-24 h-80 w-80" />
        <div className="container text-center">
          <Reveal direction="scale">
            <Eyebrow className="mx-auto">Our story</Eyebrow>
            <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl dark:text-primary-50">
              School teaches theory. <span className="text-gradient">We teach the job.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-body">
              Funngro was built on a simple observation: students are capable of far more real
              work than they&rsquo;re usually given credit for. We built a platform where that talent
              meets companies who need it — with fair pay and real mentorship on both sides.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="What we stand for"
            title="The principles behind every project"
          />
          <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="card-surface h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
                    <value.icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink dark:text-primary-50">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-body">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <FinalCta
        title="Join us in closing the experience gap"
        description="Whether you're a student or a company, there's a place for you on Funngro."
        primaryLabel="Get Started"
        primaryHref="/for-teens"
        secondaryLabel="For Companies"
        secondaryHref="/companies"
      />
    </>
  );
}
