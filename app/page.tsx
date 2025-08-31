import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SectionsServices } from "@/components/sections-services"
import { SectionsProjects } from "@/components/sections-projects"
import { SectionsExperience } from "@/components/sections-experience"
import { SectionsAbout } from "@/components/sections-about"
import { SectionsCertifications } from "@/components/sections-certifications"
import { SectionsContact } from "@/components/sections-contact"
import Hero3DClient from "./hero3d-client"

export default function HomePage() {
  return (
    <main id="main">
      <SiteHeader />
      <section className="relative">
        <Hero3DClient />
        <Hero />
      </section>
      <SectionsServices />
      <SectionsProjects />
      <SectionsExperience />
      <SectionsAbout />
      <SectionsCertifications />
      <SectionsContact />
      <footer className="mt-8 border-t border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-[var(--color-neutral-2)]">
          © {new Date().getFullYear()} Gurmukh Singh Dadiala — Sales Engineer & MERN Developer
        </div>
      </footer>
    </main>
  )
}
