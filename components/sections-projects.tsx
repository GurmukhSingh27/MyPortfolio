import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, CloudSun, Gamepad2, Activity } from "lucide-react"

const projects = [
  {
    name: "Gemini Clone",
    desc: "Conversational UI powered by Gemini API. Fast, responsive, modern.",
    tech: ["React", "Vite", "API"],
    live: "https://gemini-clone-3n7h.onrender.com/",
    repo: "https://github.com/GurmukhSingh27/gemini-clone",
    icon: Bot,
  },
  {
    name: "MyWeather",
    desc: "Realtime weather dashboard with clean UX and city search.",
    tech: ["React", "Vite", "OpenWeather"],
    live: "https://weather-app-6fh3.onrender.com/",
    repo: "https://github.com/GurmukhSingh27/Weather-App",
    icon: CloudSun,
  },
  {
    name: "TicTacToe",
    desc: "A Tic Tac Toe game made with React. Shows the winner and can be reset to play again.",
    tech: ["HTML5", "CSS", "JavaScript", "React"],
    live: "https://tictactoe-3v5e.onrender.com/",
    repo: "https://github.com/GurmukhSingh27/TicTacToe",
    icon: Gamepad2,
  },
  {
    name: "HealthEase",
    desc: "Team project: patient records and appointments with Node/Express.",
    tech: ["HTML", "CSS", "JS", "Node", "Express", "MongoDB"],
    live: "", // removed live link per request
    repo: "https://github.com/GurmukhSingh27/HealthEase",
    icon: Activity,
  },
]

export function SectionsProjects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-neutral-1)]">Projects</h2>
        <p className="text-[var(--color-neutral-2)]">
          Selected builds highlighting front‑end polish and integration work.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => {
          const Icon = p.icon
          return (
            <Card key={p.name} className="overflow-hidden border-[var(--border)] bg-[var(--card)]">
              <div className="relative h-44 flex items-center justify-center">
                <div className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[color-mix(in_oklch,_var(--color-brand)_10%,_black)] px-6 py-6">
                  <Icon className="h-14 w-14 text-[var(--color-brand)]" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-[var(--color-brand)]">{p.name}</CardTitle>
                <CardDescription className="text-[var(--color-neutral-2)]">{p.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className={
                        idx % 2 === 0
                          ? "border-[var(--color-brand)] text-[var(--color-neutral-1)]"
                          : "border-[var(--color-accent)] text-[var(--color-neutral-1)]"
                      }
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-sm">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--color-brand)] hover:underline hover:brightness-110"
                    >
                      Live
                    </a>
                  )}
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--color-accent)] hover:underline hover:brightness-110"
                  >
                    Code
                  </a>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
