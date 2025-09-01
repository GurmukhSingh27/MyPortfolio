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

## Design System (Colors, Typography, Usage)
- Colors (exactly 5)
  - Primary Blue: `#06B6D4` (brand, links, primary CTAs)
  - Accent Pink: `#FF3B81` (secondary CTAs, highlights, badges)
  - Accent Green: `#22C55E` (success, confirmations, select/active states)
  - Foreground: `#E6E6E6` (body text on black)
  - Background: `#0B0F14` (site background)
- Equal, systematic usage guidelines
  - Buttons (rotate by context to keep balance):
    - Services: Blue primary
    - Projects: Pink primary
    - Contact: Green primary
    - Secondary buttons: use the remaining two colors evenly across sections
  - Navigation & Highlights:
    - Active nav item: Blue
    - Inline highlights/callouts: Pink
    - Success/“selected” or on‑state: Green
  - Badges/Tags/Chips: distribute Blue/Pink/Green evenly within each section
  - Icons: default monochrome; apply Blue/Pink/Green per section for accent; maintain WCAG contrast
- Typography
  - Headings: Geist (600–700)
  - Body: Inter (400–500)
  - Line height: ~1.5 body; minimum 14px for copy
- Motion & Accessibility
  - prefers-reduced-motion respected (static hero, reduced effects)
  - Visible focus rings in the current accent color of the section

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

## Recommended Next 3D Hero: KPI Aurora Bars (Analytics‑first)
A calm‑to‑medium motion hero composed of subtle glowing vertical bars that respond like an equalizer.

- Why it fits
  - Analytics/DAP story visually: KPI changes = visible bar motion
  - Modern, minimal, black‑themed; readable overlay with strong contrast
- Color plan (equal usage within hero)
  - Bars grouped in Blue, Pink, and Green sets (roughly 1/3 each)
  - Hover/focus: highlight a bar group in its color; dim others
- Interactions
  - Hover: emphasize group + show a caption (e.g., “Adoption +28%”)
  - Click: scroll to Services/Projects (optional)
- Performance & A11y
  - Lazy‑load hero; lower DPR on mobile
  - Reduced motion: static gradient bars (no animation)
  - Avoid heavy postprocessing; keep GPU cost modest

## Alternate 3D Hero Options (pick one for a future iteration)
- Neon Network (Client→Solution Graph): floating node‑link graph with gentle data pulses; hover highlights a route; calm and credible.
- Wireframe Globe + Route Arcs: minimal globe with neon arcs connecting regions to a central hub; timeless enterprise feel.
- Signal Funnel (Conversion Metaphor): particles stream through a suspended funnel, glowing brighter at each stage; bold visual, analytics‑centric.
- Holographic Analytics Panels (Current): orbiting semi‑transparent panels with mini charts; reduced motion and simplified on mobile already implemented.

## Known Pitfalls (Build/Runtime)
- Server Components cannot use `next/dynamic({ ssr: false })`
  - Fix pattern: put the dynamic import in a client wrapper (e.g., `app/hero3d-client.tsx`) and render it from the server page
- Three.js / R3F notes
  - Always guard refs before assigning (no optional chaining on the left of assignments)
  - Respect reduced motion and use fewer meshes on mobile

## License

Personal portfolio. Feel free to reference structure; do not reuse personal content without permission.
