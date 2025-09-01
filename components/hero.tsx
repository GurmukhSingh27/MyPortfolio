"use client"
import { Button } from "@/components/ui/button"
import { HeroPanels3D } from "./hero-panels"

export function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
      {/* 3D background is injected at page level (node network stays as-is) */}
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left: name, designation, buttons */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">
              <span className="text-[var(--color-neutral-1)]">Gurmukh Singh Dadiala</span>
              <br />
              <span className="font-bold text-[var(--color-brand)]">Sales Engineer</span>{" "}
              <span className="text-[var(--color-neutral-2)]">&amp; MERN Developer</span>
            </h1>
            <p className="mt-4 text-[var(--color-neutral-2)] leading-relaxed text-pretty max-w-xl">
              I design and deliver tailored demos, PoCs, and solution architectures that bridge customer needs with
              product capabilities. Building user‑centric web apps with clean, scalable code.
            </p>
            <div className="mt-6 flex items-center gap-3">
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

          {/* Right: rotating analytics panels */}
          <div className="relative">
            <div className="relative z-10 rounded-xl border border-[var(--border)]/40">
              <HeroPanels3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
