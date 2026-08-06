import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { homeFaqs, teenFaqs } from "@/lib/data";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about how Funngro works for students and companies.",
  alternates: { canonical: "/faq" },
};

const companyFaqs: FaqItem[] = [
  {
    question: "How much does it cost to hire on Funngro?",
    answer:
      "Pricing depends on project scope and complexity. You set a budget when posting a brief, and students apply within that range.",
  },
  {
    question: "Is the work quality reliable?",
    answer:
      "Every student builds a public profile with ratings and portfolio pieces, so you can review past work before selecting who to hire.",
  },
  {
    question: "Can we hire the same student again?",
    answer: "Yes. Many companies build ongoing working relationships with students they've hired before.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...homeFaqs, ...teenFaqs, ...companyFaqs].map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 sm:pt-40 lg:pt-48">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grad-soft" />
      <GradientBlob variant="mint" className="-left-24 top-24 h-72 w-72" />

      <div className="container">
        <Reveal direction="scale" className="mx-auto max-w-2xl text-center">
          <Eyebrow className="mx-auto">FAQ</Eyebrow>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl dark:text-primary-50">
            Frequently asked questions
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Can&rsquo;t find what you&rsquo;re looking for? Reach out on our contact page and
            we&rsquo;ll get back to you.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 max-w-3xl space-y-14">
          <FaqGroup title="For students" items={teenFaqs.slice(0, 4)} />
          <FaqGroup title="About the platform" items={homeFaqs} />
          <FaqGroup title="For companies" items={companyFaqs} />
        </div>
      </div>
    </section>
  );
}

function FaqGroup({ title, items }: { title: string; items: FaqItem[] }) {
  return (
    <div>
      <h2 className="mb-6 font-display text-xl font-bold text-ink dark:text-primary-50">{title}</h2>
      <Accordion items={items} />
    </div>
  );
}
