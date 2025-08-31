import { Badge } from "@/components/ui/badge"

export function SectionsAbout() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-neutral-1)]">About</h2>
      </header>
      <p className="text-[var(--color-neutral-2)] leading-relaxed max-w-3xl">
        I’m Gurmukh Singh Dadiala, a tech enthusiast and lifelong learner currently pursuing a Bachelor of Technology
        (Computer Science and Engineering) at Lovely Professional University. I build intuitive, user‑centric web apps
        with the MERN stack and core web technologies. As a Presales (Sales) Engineer Intern at Whatfix, I craft
        tailored demos and PoCs, connect customer needs to Whatfix’s Digital Adoption Platform, and collaborate across
        Product, Engineering, and Sales to drive outcomes. Outside work, I recharge with cricket and music.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Badge variant="outline" className="border-[var(--color-brand)] text-[var(--color-neutral-1)]">
          English: Full Professional
        </Badge>
        <Badge variant="outline" className="border-[var(--color-accent)] text-[var(--color-neutral-1)]">
          Punjabi: Professional
        </Badge>
        <Badge variant="outline" className="border-[var(--border)] text-[var(--color-neutral-1)]">
          Hindi: Professional
        </Badge>
      </div>
    </section>
  )
}
