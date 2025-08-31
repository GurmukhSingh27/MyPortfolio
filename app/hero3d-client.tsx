"use client"

import dynamic from "next/dynamic"

// Lazy-load the 3D component on the client only
const Hero3DLazy = dynamic(() => import("@/components/hero-3d").then((m) => m.Hero3D), {
  ssr: false,
  loading: () => <div aria-hidden className="h-[420px] w-full bg-black/60" />,
})

export default function Hero3DClient() {
  return <Hero3DLazy />
}
