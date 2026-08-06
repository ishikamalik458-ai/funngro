import Link from "next/link";
import { Sprout, Instagram, Linkedin, Facebook, Mail } from "lucide-react";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { href: "/for-teens", label: "For Teens" },
      { href: "/companies", label: "For Companies" },
      { href: "/about", label: "About" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
    ],
  },
];

const socials = [
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "mailto:hello@funngro.com", label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-primary-100 bg-grad-soft dark:border-dark-border dark:bg-dark-surface">
      <div className="container relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display text-xl font-extrabold text-ink dark:text-primary-50">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-grad-brand text-white">
                <Sprout className="h-5 w-5" strokeWidth={2.5} />
              </span>
              Funngro
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-body">
              Connecting teenagers with real companies for paid projects, professional
              experience, and skills that last beyond the classroom.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 text-primary-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-600 hover:text-white dark:border-primary-800 dark:text-primary-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink dark:text-primary-100">
                {col.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-body transition-colors hover:text-primary-700 dark:hover:text-primary-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink dark:text-primary-100">
              Stay in the loop
            </h3>
            <p className="mt-5 text-sm text-body">
              Get new project drops and student success stories in your inbox.
            </p>
            <form className="mt-4 flex gap-2" aria-label="Newsletter signup">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="you@school.edu"
                className="h-11 w-full min-w-0 rounded-pill border border-primary-200 bg-white px-4 text-sm text-ink placeholder:text-body/70 focus-visible:outline-none dark:border-dark-border dark:bg-dark-card dark:text-primary-50"
              />
              <button
                type="submit"
                className="flex h-11 shrink-0 items-center justify-center rounded-pill bg-primary-700 px-5 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-100 pt-8 text-sm text-body sm:flex-row dark:border-dark-border">
          <p>© {new Date().getFullYear()} Funngro. All rights reserved.</p>
          <p>Made for the next generation of professionals.</p>
        </div>
      </div>
    </footer>
  );
}
