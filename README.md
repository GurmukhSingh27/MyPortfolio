# Gurmukh Singh — Portfolio (Sales Engineer · MERN)

Deployed on Vercel • Built with Next.js App Router, Tailwind v4, shadcn/ui, and React Three Fiber

Live preview: (project is deployed from this repo via Vercel)

## Overview

A modern, black‑themed, neon‑accented portfolio that focuses on Sales Engineering (DAP, analytics, value storytelling), with MERN as a secondary pillar.
The site uses a 3D hero (Holographic Analytics Panels), vibrant yet accessible color system (blue primary, pink accent, careful green), and icon‑based project cards.  
Navigation highlights the current section in blue. Contact links open directly (mailto/tel), and external links (GitHub/LinkedIn/projects) are wired up.

## Features

- Sales Engineer–first narrative
  - Clear Services and Projects CTAs; scrollspy highlights active section in blue
  - About/Experience tailored to presales, DAP, analytics
- 3D hero: Holographic Analytics Panels
  - Orbiting neon “panels” with mini chart elements
  - Respects prefers-reduced-motion and simplifies on mobile
- Polished visuals & UX
  - Black base with neon blue/pink (green sparingly), consistent hover/focus rings
  - Icon‑based project tiles (no heavy screenshots)
- Contact & links
  - Email opens composer (mailto)
  - Phone opens dialer (tel)
  - LinkedIn and GitHub are live
- SEO/Accessibility/Performance
  - Metadata, sitemap/robots, semantic landmarks, visible focus, high contrast
  - Lazy‑loaded 3D, mobile simplification, reduced motion supported

## Tech Stack

- Next.js 15 (App Router), React 19
- Tailwind CSS v4 + shadcn/ui components
- React Three Fiber + drei + three (for 3D hero)
- TypeScript
- Vercel (builds, deploys, optional Analytics)

## Editing Content (where to change things)

- Hero overlay text: `components/hero.tsx`
- 3D hero scene: `components/hero-3d.tsx` (currently “Holographic Analytics Panels”)
- Navbar (name, role, active highlight): `components/site-header.tsx`
- Services: `components/sections-services.tsx`
- Projects (titles, links, icons): `components/sections-projects.tsx`
- About: `components/sections-about.tsx` (uses your provided profile text)
- Experience/Education (with full “Bachelor of Technology (Computer Science and Engineering)”): `components/sections-experience.tsx`
- Certifications (your 4 items + links): `components/sections-certifications.tsx`
- Contact (mailto/tel + social): `components/sections-contact.tsx`
- Global colors/typography: `app/globals.css`

## Run Locally

\`\`\`bash
# with pnpm
pnpm install
pnpm dev

# or npm
npm install
npm run dev
\`\`\`

Then open http://localhost:3000

## Deployment (Vercel)

- Push to `main` to trigger a build on Vercel.
- Note: Server Components must not contain `next/dynamic({ ssr: false })`.
  - Fix pattern: create a client wrapper (e.g., `app/hero3d-client.tsx`) and use it from `app/page.tsx`.

## Accessibility & Performance

- High contrast on black theme; visible focus rings
- Keyboard navigable; skip to content in layout
- 3D respects reduced motion (static/less detail) and is lazy‑loaded
- Mobile optimization: fewer meshes/particles, simpler effects

## Roadmap

- Optional case studies (MDX) with architecture diagrams
- Calendly embed for discovery calls
- Email notifications for contact (e.g., Resend) or CRM sync
- Alternate 3D hero styles (see below)

## License

Personal portfolio. Feel free to reference structure; do not reuse personal content without permission.
