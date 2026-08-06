import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern use of the Funngro platform for students and companies.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <section className="pb-24 pt-36 sm:pt-40 lg:pt-48">
      <div className="container">
        <Reveal direction="up" className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-ink dark:text-primary-50">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-sm text-body">Last updated: August 2026</p>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-body prose-li:text-body dark:prose-invert">
            <h2>1. Eligibility</h2>
            <p>
              Funngro is available to students aged 13–19. Users under 18 must have consent
              from a parent or legal guardian to create a profile and receive payments.
            </p>
            <h2>2. Account responsibilities</h2>
            <p>
              You&rsquo;re responsible for keeping your account information accurate and for the
              work you submit through the platform.
            </p>
            <h2>3. Projects and payments</h2>
            <p>
              Payment is released once a company approves submitted work. Funngro is not
              responsible for disputes arising from project scope changes not agreed upon in
              writing.
            </p>
            <h2>4. Company obligations</h2>
            <p>
              Companies posting projects agree to provide clear briefs, fair compensation, and
              timely feedback to students.
            </p>
            <h2>5. Prohibited conduct</h2>
            <p>
              Harassment, discrimination, or requests for work outside the agreed platform
              terms are not permitted and may result in account suspension.
            </p>
            <h2>6. Changes to these terms</h2>
            <p>
              We may update these terms from time to time. Continued use of Funngro after
              changes take effect constitutes acceptance of the updated terms.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
