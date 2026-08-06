import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GradientBlob } from "@/components/ui/gradient-blob";

export const metadata: Metadata = {
  title: "Contact Funngro",
  description:
    "Get in touch with the Funngro team — whether you're a student ready to start or a company ready to hire.",
  alternates: { canonical: "/contact" },
};

const contactDetails = [
  { icon: Mail, label: "Email", value: "hello@funngro.com" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: MapPin, label: "Office", value: "Bengaluru, India" },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 sm:pt-40 lg:pt-48">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grad-soft" />
      <GradientBlob variant="brand" className="-right-24 top-24 h-80 w-80" />

      <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal direction="left">
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl dark:text-primary-50">
            Let&rsquo;s start the conversation
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-body">
            Whether you&rsquo;re a student ready for your first project or a company looking to
            hire, we&rsquo;d love to hear from you.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
                  <detail.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-body">
                    {detail.label}
                  </p>
                  <p className="font-display text-sm font-bold text-ink dark:text-primary-50">
                    {detail.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right">
          <form className="card-surface space-y-5 p-8 sm:p-10" aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full name" type="text" placeholder="Jordan Lee" />
              <Field id="email" label="Email" type="email" placeholder="you@school.edu" />
            </div>
            <Field id="role" label="I am a" as="select">
              <option>Student</option>
              <option>Parent</option>
              <option>Company representative</option>
              <option>Other</option>
            </Field>
            <Field
              id="message"
              label="Message"
              as="textarea"
              placeholder="Tell us a bit about what you're looking for..."
            />
            <Button type="submit" className="w-full justify-center sm:w-auto">
              Send Message
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  as = "input",
  children,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  as?: "input" | "textarea" | "select";
  children?: React.ReactNode;
}) {
  const baseClasses =
    "w-full rounded-2xl border border-primary-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-body/70 focus-visible:outline-none dark:border-dark-border dark:bg-dark-card dark:text-primary-50";

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink-soft dark:text-primary-100">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea id={id} rows={4} required placeholder={placeholder} className={baseClasses} />
      ) : as === "select" ? (
        <select id={id} required className={baseClasses}>
          {children}
        </select>
      ) : (
        <input id={id} type={type} required placeholder={placeholder} className={baseClasses} />
      )}
    </div>
  );
}
