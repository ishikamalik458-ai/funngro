# Funngro — Marketing Website

A production-ready marketing site for **Funngro**, the platform that connects teenagers
with real companies for paid projects, skill-building, and portfolio growth. Built with
Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

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
