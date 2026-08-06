import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Funngro collects, uses, and protects your information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pb-24 pt-36 sm:pt-40 lg:pt-48">
      <div className="container">
        <Reveal direction="up" className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-ink dark:text-primary-50">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-body">Last updated: August 2026</p>

          <div className="prose prose-slate mt-10 max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-body prose-li:text-body dark:prose-invert">
            <h2>1. Information we collect</h2>
            <p>
              We collect the information you provide when creating a profile, such as your
              name, school, age range, portfolio links, and payment details needed to process
              project earnings.
            </p>
            <h2>2. How we use your information</h2>
            <p>
              We use your information to match you with relevant projects, process payments,
              communicate updates, and improve the Funngro platform.
            </p>
            <h2>3. Information sharing</h2>
            <p>
              We share limited profile information with companies you apply to, and never sell
              personal data to third parties.
            </p>
            <h2>4. Data for minors</h2>
            <p>
              Funngro is built with student safety in mind. Users under 18 are encouraged to
              involve a parent or guardian when creating a profile and managing payments.
            </p>
            <h2>5. Your choices</h2>
            <p>
              You can review, update, or delete your profile information at any time from your
              account settings, or by contacting us directly.
            </p>
            <h2>6. Contact us</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a href="mailto:privacy@funngro.com">privacy@funngro.com</a>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
