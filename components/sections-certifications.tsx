import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react" // icon

const certs = [
  {
    title: "Responsible & Safe AI Systems",
    issuer: "NPTEL",
    issued: "Nov 2024",
    skills: [
      "Responsible AI",
      "Artificial Intelligence (AI)",
      "Artificial Neural Networks",
      "Large Language Models (LLM)",
    ],
    url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS132S85120051904035306",
  },
  {
    title: "Full-Stack Development Using MERN Stack",
    issuer: "CipherSchools",
    issued: "Jul 2024",
    skills: ["React.js", "MongoDB", "Node.js", "Express.js", "Semantic UI", "HTML5", "CSS", "JavaScript", "REST APIs"],
    url: "https://drive.google.com/file/d/1Qd4XHL4F7IcY4W7Uhy7yVHCfgKSwv5GQ/view",
  },
  {
    title: "Java (Basic) Certificate",
    issuer: "HackerRank",
    issued: "Jul 2024",
    skills: ["Java", "Data Structures", "Algorithms", "File Handling", "Object-Oriented Programming (OOP)"],
    url: "https://www.hackerrank.com/certificates/8295e17d4378",
  },
  {
    title: "Certificate of Participation in Coding Round of HackOn With Amazon - Season 4",
    issuer: "Unstop",
    issued: "Jun 2024",
    skills: ["Java"],
    url: "https://unstop.com/certificate-preview/7aa9840d-5bad-4702-b14d-ee2078b3a2f7?utm_campaign=",
  },
]

export function SectionsCertifications() {
  return (
    <section id="certifications" className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-neutral-1)]">Certifications</h2>
      </header>
      <Card className="border-[var(--border)] bg-[var(--card)]">
        <CardHeader className="flex flex-row items-center gap-2">
          <Award className="size-5 text-[var(--color-accent)]" />
          <CardTitle className="text-[var(--color-brand)]">Highlights</CardTitle>
        </CardHeader>
        <CardContent className="text-[var(--color-neutral-2)]">
          <ul className="list-disc pl-5 space-y-3">
            {certs.map((c) => (
              <li key={c.title}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-[var(--color-brand)] underline-offset-4 hover:brightness-110"
                >
                  {c.title}
                </a>{" "}
                — {c.issuer} • {c.issued}
                <div className="mt-1 text-xs opacity-80">{c.skills.join(" · ")}</div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
