# Funngro — Marketing Website

A production-ready marketing site for **Funngro**, the platform that connects teenagers
with real companies for paid projects, skill-building, and portfolio growth. Built with
Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

> **No `package-lock.json` is committed.** `npm install` will generate one on first
> install (locally or on Vercel) with real, verifiable registry checksums. Commit the
> generated file after your first `npm install` for reproducible builds — see
> [Dependency notes](#dependency-notes) below for why it isn't pre-generated here.

Other scripts:

```bash
npm run build      # production build
npm run start       # serve the production build
npm run lint         # ESLint
npm run typecheck  # TypeScript check with no emit
```

## Project architecture

```
app/
  layout.tsx           Root layout — fonts, metadata, JSON-LD, providers
  template.tsx          Page-transition wrapper
  globals.css            Design-system tokens & base styles
  page.tsx                 Home ("/")
  for-teens/page.tsx    For Teens landing page
  companies/page.tsx  For Companies landing page
  about/page.tsx          About / mission
  faq/page.tsx             Standalone FAQ (with FAQPage schema)
  contact/page.tsx      Contact form
  privacy-policy/       Privacy policy
  terms/                    Terms & conditions
  sitemap.ts               Dynamic sitemap.xml
  robots.ts                Dynamic robots.txt
  not-found.tsx           Custom 404

components/
  layout/                    Navbar, Footer, BackToTop, LoadingScreen
  ui/                          Reusable primitives: Button, Accordion, SectionHeading,
                                    Reveal/StaggerGroup (Framer Motion wrappers),
                                    AnimatedCounter, GradientBlob, Badge/Eyebrow
  sections/                Home-page sections (Hero, WhyChoose, HowItWorks, ...)
  sections/teens/     For Teens-page sections

lib/
  data.ts                    Single source of truth for site copy (features, skills,
                                    testimonials, FAQ, stats, nav links)
  utils.ts                    `cn()` class-merging helper

types/
  index.ts                    Shared content types
```

**Why this structure:** every section of copy lives in `lib/data.ts` so content can be
edited without touching JSX, and every visual pattern (card, button, badge, reveal
animation) is a single reusable component so new sections stay consistent automatically.

## Design system

Colors, gradients, shadows, radii, and keyframe animations are defined once in
`tailwind.config.ts` and consumed via Tailwind utility classes — no ad-hoc hex codes in
components. Dark mode uses Tailwind's `class` strategy, toggled from the navbar and
persisted to `localStorage`.

- **Typography:** Plus Jakarta Sans for display/headings, Inter for body text (both via
  `next/font/google`, self-hosted with `display: swap`).
- **Motion:** Framer Motion powers scroll reveals (`Reveal`, `StaggerGroup`), the animated
  hero project card, animated counters, accordion transitions, and page transitions.
  `prefers-reduced-motion` is respected globally in `globals.css`.
- **Signature element:** the hero's animated "project status" card is the one bespoke,
  memorable visual — a literal snapshot of the product's core loop (apply → deliver → get
  paid) rather than a generic stat callout.

## SEO

- Per-page `metadata` exports (title, description, canonical) in every route.
- Global Organization JSON-LD in `app/layout.tsx`; FAQPage JSON-LD on `/faq`.
- OpenGraph + Twitter card metadata with a generated `public/og-image.png`.
- `app/sitemap.ts` and `app/robots.ts` generate `sitemap.xml` / `robots.txt` at build time.
- Semantic HTML throughout: one `<h1>` per page, ordered `<h2>`/`<h3>` hierarchy,
  `alt`-free decorative SVGs marked `aria-hidden`, accessible form labels.

## Accessibility

- Skip-to-content link, visible focus rings (`:focus-visible`) on every interactive
  element, `aria-expanded`/`aria-controls` on the FAQ accordion and mobile menu.
- Color contrast checked against the brand palette (headings `#1F2937`, body `#6B7280`
  on white/`#F0FDF4` backgrounds).
- All animation respects `prefers-reduced-motion: reduce`.

## Before deploying

1. Replace `public/og-image.png`, `public/logo.png`, and `public/apple-touch-icon.png`
   with final brand assets (these are placeholder renders in the brand palette).
2. Update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` to the real
   production domain.
3. Wire the contact form and newsletter form in `app/contact/page.tsx` /
   `components/layout/footer.tsx` to a real submission endpoint.
4. Swap placeholder contact details in `app/contact/page.tsx`.

## Dependency notes

Last updated for the Next.js 15 → 16 upgrade (August 2026):

- **Next.js 16.3.0 / React 19.2.8** — React versions 19.0–19.2.0 are affected by
  [CVE-2025-55182](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components)
  (CVSS 10.0 RCE in React Server Components, patched in 19.0.1 / 19.1.2 / 19.2.1+).
  This is almost certainly the vulnerability a host's security scan is flagging on
  older lockfiles — 19.2.8 is well past the fix.
- **`data-scroll-behavior="smooth"` on `<html>`** (`app/layout.tsx`) — Next.js 16 stopped
  auto-managing scroll behavior on route transitions; this attribute keeps navigation
  scrolling working exactly as it did on 15.
- **ESLint stays on 9.x (9.39.5), not 10.x** — `eslint-config-next` still bundles
  sub-plugins (`eslint-plugin-react`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`)
  that cap their peer dependency at `eslint@^9`
  ([vercel/next.js#91702](https://github.com/vercel/next.js/issues/91702), open as of
  this writing). Installing ESLint 10 here would throw `ERESOLVE` on `npm install`.
  Revisit once that issue closes.
- **lucide-react stays on 0.553.0, not 1.x** — Lucide's 1.0 release removed trademarked
  brand icons and renamed several others. This project's footer uses the `Instagram`,
  `Linkedin`, and `Facebook` icons directly, which are exactly the icons v1 dropped;
  upgrading would break the footer. Migrating to brand SVGs + `lucide-react@1` is a
  separate, deliberate task if wanted later.
- **framer-motion → `^13.0.0`** — the library was renamed to "Motion" upstream
  (`motion/react`), but the `framer-motion` package name is still published and
  functionally equivalent, so no import changes were needed here.
- **No `package-lock.json` is committed.** Generating one requires real npm registry
  checksums that can only be produced by actually running `npm install` against the
  registry — run it once locally (or let Vercel's first install generate it) and commit
  the result for reproducible builds.
