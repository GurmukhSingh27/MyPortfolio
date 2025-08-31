"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Lazy-load the heavy 3D hero; disable SSR inside this client component
const Hero3D = dynamic(() => import("../components/hero-3d"), {
  ssr: false,
  loading: () => null,
})

export default function HeroClient() {
  return (
    <Suspense fallback={null}>
      <Hero3D />
    </Suspense>
  )
}
