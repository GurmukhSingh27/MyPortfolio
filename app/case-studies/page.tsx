export default function CaseStudiesPage() {
  const items = [
    {
      title: "Onboarding acceleration with DAP",
      summary: "Reduced time-to-first-value by 38% using guided flows, checklists, and in-app nudges.",
      outcome: "↑ feature adoption, ↓ support tickets",
      tags: ["DAP", "Onboarding", "Analytics"],
    },
    {
      title: "PoC: Workflow analytics for enterprise app",
      summary: "Instrumented key user journeys, built dashboards, and identified 3 quick wins for adoption.",
      outcome: "Validated ROI in 10 days",
      tags: ["PoC", "Analytics", "Product"],
    },
  ]
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <h1 className="mb-6 inline-block text-3xl md:text-4xl font-semibold text-white">Case Studies</h1>
      <p className="mb-8 text-white/70 max-w-2xl">
        Selected presales engagements focused on Digital Adoption Platforms (DAP), analytics, and demo-driven
        validation.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((c) => (
          <article key={c.title} className="rounded-lg border border-white/10 bg-black/30 p-5">
            <h2 className="text-lg font-medium text-white">{c.title}</h2>
            <p className="mt-2 text-sm text-white/70">{c.summary}</p>
            <p className="mt-2 text-xs text-white/60">{c.outcome}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 px-2 py-1 text-xs text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
