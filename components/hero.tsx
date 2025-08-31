"use client"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center">
      {/* 3D background */}
      {/* The 3D canvas is injected in the page */}
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">
          <span className="text-[var(--color-neutral-1)]">Gurmukh Singh Dadiala</span>
          <br />
          <span className="font-bold text-[var(--color-brand)]">Sales Engineer</span>{" "}
          <span className="text-[var(--color-neutral-2)]">&amp; MERN Developer</span>
        </h1>
        <p className="mt-4 text-[var(--color-neutral-2)] leading-relaxed text-pretty">
          I design and deliver tailored demos, PoCs, and solution architectures that bridge customer needs with product
          capabilities. Building user‑centric web apps with clean, scalable code.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          {/* primary: Services (blue) */}
          <Button
            asChild
            size="lg"
            className="bg-[var(--color-brand)] text-black shadow-lg shadow-[color-mix(in_oklch,_var(--color-brand)_30%,_black)] hover:brightness-110 hover:translate-y-0.5 transition-transform focus-visible:ring-2 focus-visible:ring-[var(--color-brand)]"
          >
            <a href="#services">Explore Services</a>
          </Button>
          {/* secondary: Projects (pink) */}
          <Button
            asChild
            size="lg"
            className="bg-[var(--color-accent)] text-black shadow-lg shadow-[color-mix(in_oklch,_var(--color-accent)_30%,_black)] hover:brightness-110 hover:translate-y-0.5 transition-transform focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
