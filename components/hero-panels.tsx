"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { useMemo, useRef } from "react"

function PanelsRingInner() {
  const group = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.2
  })

  const panels = useMemo(() => {
    const arr: { pos: [number, number, number]; rotY: number; color: string }[] = []
    const count = 6
    const radius = 1.7
    const colors = ["#06B6D4", "#FF3B81", "#22C55E", "#06B6D4", "#FF3B81", "#22C55E"]
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      arr.push({ pos: [x, 0, z], rotY: -angle, color: colors[i % colors.length] })
    }
    return arr
  }, [])

  return (
    <group ref={group}>
      {panels.map((p, i) => (
        <mesh key={i} position={p.pos} rotation={[0, p.rotY, 0]}>
          <planeGeometry args={[1.2, 0.9]} />
          <meshStandardMaterial
            color={p.color}
            emissive={p.color}
            emissiveIntensity={0.6}
            transparent
            opacity={0.28}
            depthWrite={false}
          />
          {/* mini bars overlay */}
          <group position={[0, 0, 0.02]}>
            {[0.25, 0.5, 0.75, 0.4].map((h, idx) => (
              <mesh key={idx} position={[-0.45 + idx * 0.3, -0.35 + h * 0.5, 0]}>
                <boxGeometry args={[0.12, h, 0.02]} />
                <meshBasicMaterial color={idx % 2 === 0 ? "#E6E6E6" : p.color} />
              </mesh>
            ))}
          </group>
        </mesh>
      ))}
    </group>
  )
}

export function HeroPanels3D() {
  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  return (
    <div className="h-[260px] w-full md:h-[420px]">
      <Canvas camera={{ position: [0, 1.2, 4], fov: 50 }} dpr={prefersReduced ? 1 : [1, 1.5]} gl={{ alpha: true }}>
        {/* transparent canvas so backdrop node network remains visible */}
        <ambientLight intensity={0.6} />
        <directionalLight intensity={1.1} position={[2, 3, 2]} />
        <PanelsRingInner />
      </Canvas>
    </div>
  )
}
