# Forge & Co. — Agency Website

A premium, production-style agency website built with Next.js 16, TypeScript,
Tailwind CSS v4 and Framer Motion. Fully responsive, mobile-first, animated
with purpose (not decoration).

## Stack

- **Next.js 16** (App Router) — framework, routing, SEO
- **TypeScript** — type safety
- **Tailwind CSS v4** — styling via design tokens in `app/globals.css`
- **Framer Motion** — page/scroll animations, magnetic buttons, counters
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. To build for production:

```bash
npm run build
npm start
```

Deploy for free on **Vercel**: push this folder to a GitHub repo, then
import it at vercel.com — zero config needed.

## Structure

```
app/
  layout.tsx        # fonts, metadata, SEO
  page.tsx           # assembles all sections
  globals.css         # design tokens (colors, fonts) — edit here to re-theme
components/
  Navbar.tsx          # sticky nav + animated mobile menu
  Hero.tsx            # hero with the signature "build log" terminal panel
  Services.tsx        # 7 services grid
  WhyUs.tsx           # differentiators + animated stat counters
  Portfolio.tsx       # case-study style project cards
  Process.tsx         # 5-step process with animated connecting line
  Technologies.tsx    # infinite marquee of tech stack
  Testimonials.tsx    # client quotes
  CTA.tsx             # mid-page call to action
  Contact.tsx         # project inquiry form UI + contact details
  Footer.tsx
  MagneticButton.tsx  # reusable magnetic CTA button
  CustomCursor.tsx    # custom cursor, auto-disabled on touch devices
lib/
  data.ts             # ALL copy lives here: services, portfolio, testimonials, etc.
```

## Customizing content

Open `lib/data.ts` — every piece of text on the site (services, portfolio
projects, testimonials, process steps, tech stack, stats) is defined there
as plain arrays. Edit the values, save, and the site updates.

To change the brand name, edit "Forge&Co" in `Navbar.tsx` and `Footer.tsx`,
and the metadata in `app/layout.tsx`.

## Customizing the theme

Colors and fonts are defined as CSS variables in `app/globals.css` under
`:root` and mapped in the `@theme inline` block. Change a hex value there
and it updates everywhere (buttons, text-gradient, borders, etc.) since
every component uses the token classes (`bg-cyan`, `text-muted`, etc.)
rather than hardcoded colors.

## Wiring up the contact form

The form in `components/Contact.tsx` currently shows a success state on
submit but doesn't send data anywhere. To make it functional, either:

1. **Formspree / Resend / Web3Forms** — swap the `handleSubmit` function
   to `fetch()` your endpoint of choice, or
2. **Next.js API route** — add `app/api/contact/route.ts` that emails you
   via Resend/SendGrid, and call it from `handleSubmit`.

## Notes on animation

Animations respect `prefers-reduced-motion`. The custom cursor and magnetic
buttons are automatically disabled on touch devices. Everything is built
mobile-first — test at 375px width first, then scale up.

## Optional next steps

- Add GSAP ScrollTrigger for more elaborate scroll-pinned sections if you
  want to go further than Framer Motion's `whileInView`.
- Add a real CMS (Sanity/Contentful) if the portfolio/testimonials will be
  updated often by non-developers.
- Add `next-sitemap` for an auto-generated sitemap.xml before going live.
