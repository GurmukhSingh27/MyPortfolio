import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BriefcaseBusiness, GraduationCap } from "lucide-react" // icons

export function SectionsExperience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-neutral-1)]">Experience</h2>
      </header>
      <div className="grid gap-4">
        <Card className="border-[var(--border)] bg-[var(--card)]">
          <CardHeader className="flex flex-row items-center gap-2">
            <BriefcaseBusiness className="size-5 text-[var(--color-accent)]" />
            <CardTitle className="text-[var(--color-brand)]">Whatfix — Presales Engineer Intern</CardTitle>
          </CardHeader>
          <CardContent className="text-[var(--color-neutral-2)]">
            <ul className="list-disc pl-5 space-y-2">
              <li>Delivered tailored product demos and Proofs of Concept for enterprise use cases.</li>
              <li>
                Mapped client requirements to Whatfix DAP solutions; created technical presentations and documentation.
              </li>
              <li>Collaborated with Product, Engineering, and Customer Success to ensure aligned outcomes.</li>
            </ul>
            <p className="mt-3 text-xs">Bengaluru, Karnataka, India • July 2025 – Present</p>
          </CardContent>
        </Card>

        <Card className="border-[var(--border)] bg-[var(--card)]">
          <CardHeader className="flex flex-row items-center gap-2">
            <GraduationCap className="size-5 text-[var(--color-accent-2)]" />
            <CardTitle className="text-[var(--color-brand)]">Education</CardTitle>
          </CardHeader>
          <CardContent className="text-[var(--color-neutral-2)]">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Lovely Professional University — Bachelor of Technology (Computer Science and Engineering) (Aug 2022 –
                Jun 2026)
              </li>
              <li>Stella Maris Inter College Lucknow — Higher Secondary (Mar 2021 – Jul 2022)</li>
              <li>Stella Maris Inter College Lucknow — High School (Mar 2019 – Jul 2020)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
