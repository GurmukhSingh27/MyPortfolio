"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, Github } from "lucide-react" // icons

export function SectionsContact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle")

  async function onSubmit(formData: FormData) {
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })
      if (!res.ok) throw new Error("Failed")
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-neutral-1)]">Contact</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-3">
          <a
            href="mailto:gurmukh2708@gmail.com"
            className="flex items-center gap-3 rounded-md border border-[var(--border)] bg-[color-mix(in_oklch,_var(--color-brand)_12%,_black)] px-3 py-2 hover:brightness-110"
            aria-label="Email"
          >
            <span className="inline-flex size-7 items-center justify-center rounded bg-[var(--color-brand)] text-black">
              <Mail className="size-4" />
            </span>
            <span className="text-sm">gurmukh2708@gmail.com</span>
          </a>
          <a
            href="tel:+918189002708"
            className="flex items-center gap-3 rounded-md border border-[var(--border)] bg-[color-mix(in_oklch,_var(--color-accent)_12%,_black)] px-3 py-2 hover:brightness-110"
            aria-label="Phone"
          >
            <span className="inline-flex size-7 items-center justify-center rounded bg-[var(--color-accent)] text-black">
              <Phone className="size-4" />
            </span>
            <span className="text-sm">+91 81890 02708</span>
          </a>
          <a
            href="https://www.linkedin.com/in/singhgurmukh27"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-md border border-[var(--border)] bg-[color-mix(in_oklch,_var(--color-brand)_10%,_black)] px-3 py-2 hover:brightness-110"
            aria-label="LinkedIn"
          >
            <span className="inline-flex size-7 items-center justify-center rounded bg-[var(--color-brand)] text-black">
              <Linkedin className="size-4" />
            </span>
            <span className="text-sm">linkedin.com/in/singhgurmukh27</span>
          </a>
          <a
            href="https://github.com/GurmukhSingh27"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-md border border-[var(--border)] bg-[color-mix(in_oklch,_var(--color-accent)_10%,_black)] px-3 py-2 hover:brightness-110"
            aria-label="GitHub"
          >
            <span className="inline-flex size-7 items-center justify-center rounded bg-[var(--color-accent)] text-black">
              <Github className="size-4" />
            </span>
            <span className="text-sm">github.com/GurmukhSingh27</span>
          </a>
        </div>

        <form action={onSubmit} className="grid grid-cols-1 gap-3">
          {/* Honeypot */}
          <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <Input
            required
            name="name"
            placeholder="Your name"
            className="bg-background border-[var(--border)] text-[var(--color-neutral-1)]"
          />
          <Input
            required
            type="email"
            name="email"
            placeholder="Your email"
            className="bg-background border-[var(--border)] text-[var(--color-neutral-1)]"
          />
          <Textarea
            required
            name="message"
            placeholder="How can I help?"
            className="bg-background border-[var(--border)] text-[var(--color-neutral-1)] min-h-32"
          />
          <Button
            type="submit"
            disabled={status === "loading"}
            className="bg-[var(--color-accent)] text-black shadow-md hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            {status === "loading" ? "Sending..." : status === "sent" ? "Sent!" : "Send message"}
          </Button>
          {status === "error" && <p className="text-sm text-red-400">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}
