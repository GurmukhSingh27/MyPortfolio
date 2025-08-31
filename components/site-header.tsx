"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const nav = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [active, setActive] = useState<string>("/")

  useEffect(() => {
    // Scrollspy: observe sections to set active anchor
    const sectionIds = ["services", "projects", "experience", "about", "certifications", "contact"]
    const elements = sectionIds.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0]
        if (visible?.target?.id) {
          setActive(`/#${visible.target.id}`)
        }
      },
      { rootMargin: "0px 0px -60% 0px", threshold: [0.2, 0.4, 0.6] },
    )

    elements.forEach((el) => observer.observe(el))
    // Fallback to home at top
    const onScroll = () => {
      if (window.scrollY < 80) setActive("/")
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      elements.forEach((el) => observer.unobserve(el))
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-background/70 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        {/* left: name only */}
        <Link href="/" className="font-semibold tracking-tight text-balance">
          <span className="text-[var(--color-neutral-1)]">Gurmukh Singh Dadiala</span>
        </Link>

        {/* center: nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => {
            const isActive = item.href === active || (item.href === "/" && active === "/")
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  isActive
                    ? "text-[var(--color-brand)]"
                    : "text-[var(--color-neutral-2)] hover:text-[var(--color-neutral-1)]",
                )}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* right: blue role text only */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-[var(--color-brand)]">Sales Engineer</span>
        </div>
      </div>
    </header>
  )
}
