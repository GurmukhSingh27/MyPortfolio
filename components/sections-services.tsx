import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "Tailored Product Demos",
    desc: "Craft narratives that map customer pain to product capability. Interactive, story‑driven flows.",
    chip: "Storytelling",
  },
  {
    title: "Proof of Concept (PoC)",
    desc: "Rapid prototypes that validate feasibility, integration points, and success criteria.",
    chip: "Rapid Build",
  },
  {
    title: "Solution Design",
    desc: "Translate requirements into clear, scalable architectures with risks and trade‑offs.",
    chip: "Architecture",
  },
  {
    title: "Enablement & Docs",
    desc: "Deliver concise documentation, runbooks, and enablement sessions for smooth handoffs.",
    chip: "Enablement",
  },
]

export function SectionsServices() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-neutral-1)]">Services</h2>
        <p className="text-[var(--color-neutral-2)]">
          Outcome‑oriented presales deliverables with clear success metrics.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s, i) => {
          const isPink = i % 2 === 1
          return (
            <Card key={s.title} className="border-[var(--border)] bg-[var(--card)]">
              <CardHeader>
                <CardTitle className="text-[var(--color-brand)]">{s.title}</CardTitle>
                <CardDescription className="text-[var(--color-neutral-2)]">{s.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-start">
                <Badge className="bg-[var(--color-accent)] text-black">{s.chip}</Badge>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
