import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { WhyChoose } from "@/components/sections/why-choose";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { WhyCompanies } from "@/components/sections/why-companies";
import { Testimonials } from "@/components/sections/testimonials";
import { Stats } from "@/components/sections/stats";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { homeFaqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Funngro | Teen Internship & Student Project Platform",
  description:
    "Discover Funngro, the platform connecting students with real companies through paid projects, internships, skill development, and career opportunities.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <HowItWorks />
      <SkillsGrid />
      <WhyCompanies />
      <Testimonials />
      <Stats />
      <FaqSection
        items={homeFaqs}
        eyebrow="FAQ"
        title="Questions, answered"
        description="Everything you need to know about working with Funngro."
      />
      <FinalCta
        title="Ready to build your future?"
        description="Join thousands of students gaining experience through real, paid projects with real companies."
        primaryLabel="Join Now"
        primaryHref="/for-teens"
        secondaryLabel="Learn About Funngro"
        secondaryHref="/about"
      />
    </>
  );
}
