import type { Metadata } from "next";
import { TeenHero } from "@/components/sections/teens/teen-hero";
import { WhyJoin } from "@/components/sections/teens/why-join";
import { ProjectCategories } from "@/components/sections/teens/project-categories";
import { BenefitsChecklist } from "@/components/sections/teens/benefits-checklist";
import { ApplicationProcess } from "@/components/sections/teens/application-process";
import { SuccessTimeline } from "@/components/sections/teens/success-timeline";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { teenFaqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Funngro for Students | Learn Skills and Earn Money",
  description:
    "Explore student-friendly paid projects, internships, and freelance opportunities designed to help teenagers build experience and earn income.",
  alternates: { canonical: "/for-teens" },
};

export default function ForTeensPage() {
  return (
    <>
      <TeenHero />
      <WhyJoin />
      <ProjectCategories />
      <BenefitsChecklist />
      <ApplicationProcess />
      <SuccessTimeline />
      <FaqSection
        items={teenFaqs}
        eyebrow="FAQ for students"
        title="Answers before you apply"
        description="The questions students ask us most often."
      />
      <FinalCta
        title="Your career starts today"
        description="Create your profile and begin working on real-world projects with real companies."
        primaryLabel="Start Now"
        primaryHref="/contact"
      />
    </>
  );
}
