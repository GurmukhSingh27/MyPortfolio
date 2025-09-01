"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Html, OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import { useEffect, useMemo, useRef, useState } from "react"

function Panel({
  index,
  radius,
  tilt = 0.3,
  hoveredIndex,
  setHoveredIndex,
  reduced,
}: {
  index: number
  radius: number
  tilt?: number
  hoveredIndex: number | null
  setHoveredIndex: (i: number | null) => void
  reduced: boolean
}) {
  const group = useRef<THREE.Group>(null)
  const plate = useRef<THREE.Mesh>(null)
  const bars = useRef<THREE.InstancedMesh>(null)
  const lines = useRef<THREE.LineSegments>(null)

  // Precompute bar transforms for small chart bars
  const barCount = 6
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const baseHeights = useMemo(() => Array.from({ length: barCount }, () => 0.25 + Math.random() * 0.6), [])

  // Simple grid lines on the plate
  const gridGeom = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const positions: number[] = []
    const size = 1.6
    const steps = 6
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * size - size / 2
      // vertical
      positions.push(t, -size / 2, 0.001, t, size / 2, 0.001)
      // horizontal
      positions.push(-size / 2, t, 0.001, size / 2, t, 0.001)
    }
    g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
    return g
  }, [])

  useEffect(() => {
    if (!bars.current) return
    const mesh = bars.current
    for (let i = 0; i < barCount; i++) {
      const x = -0.9 + (i * 1.8) / (barCount - 1)
      dummy.position.set(x, -0.6, 0.02)
      dummy.scale.set(0.12, baseHeights[i], 0.12)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
    }
    mesh.instanceMatrix.needsUpdate = true
  }, [bars, baseHeights, dummy])

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    if (group.current) {
      const a = (index / 6) * Math.PI * 2 + t * 0.25
      group.current.position.set(Math.cos(a) * radius, Math.sin(a) * radius * 0.15, Math.sin(a) * radius * 0.15)
      group.current.rotation.set(-tilt, a + Math.PI / 2, 0)
      const target = hoveredIndex === index ? 1 : 0.82
      group.current.scale.lerp(new THREE.Vector3(target, target, target), 0.1)
    }
    if (!reduced) {
      if (bars.current) {
        for (let i = 0; i < barCount; i++) {
          const pulse = 0.2 * Math.sin(t * 1.8 + i) + 0.2
          dummy.scale.set(0.12, baseHeights[i] + pulse, 0.12)
          const x = -0.9 + (i * 1.8) / (barCount - 1)
          dummy.position.set(x, -0.6, 0.02)
          dummy.updateMatrix()
          bars.current.setMatrixAt(i, dummy.matrix)
        }
        bars.current.instanceMatrix.needsUpdate = true
      }
      if (plate.current) {
        const mat = plate.current.material as THREE.MeshBasicMaterial
        mat.opacity = hoveredIndex === index ? 0.95 : 0.75
      }
    }
  })

  return (
    <group
      ref={group}
      onPointerOver={() => setHoveredIndex(index)}
      onPointerOut={() => setHoveredIndex((i) => (i === index ? null : i))}
    >
      {/* Panel plate */}
      <mesh ref={plate}>
        <planeGeometry args={[2, 1.6]} />
        <meshBasicMaterial color="#0B0F14" transparent opacity={0.75} />
      </mesh>

      {/* Panel border */}
      <mesh>
        <ringGeometry args={[1.05, 1.08, 64]} />
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.6} />
      </mesh>

      {/* Grid lines */}
      <lineSegments geometry={gridGeom}>
        <lineBasicMaterial color="#2DD4BF" transparent opacity={0.25} />
      </lineSegments>

      {/* Mini bars */}
      <instancedMesh ref={bars} args={[undefined as any, undefined as any, barCount]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#FF3B81" blending={THREE.AdditiveBlending} />
      </instancedMesh>
    </group>
  )
}

function NodeNetwork({ reduced, mobile }: { reduced: boolean; mobile: boolean }) {
  const group = useRef<THREE.Group>(null)

  const { linesArray, nodesBlue, nodesPink, nodesGreen } = useMemo(() => {
    const count = reduced ? (mobile ? 60 : 120) : mobile ? 90 : 180
    const radius = mobile ? 5 : 7

    // Generate points uniformly in a sphere
    const pts: THREE.Vector3[] = []
    for (let i = 0; i < count; i++) {
      // sample direction
      const u = Math.random() * 2 - 1
      const theta = Math.random() * Math.PI * 2
      const r = Math.cbrt(Math.random()) * radius
      const x = Math.sqrt(1 - u * u) * Math.cos(theta)
      const y = Math.sqrt(1 - u * u) * Math.sin(theta)
      const z = u
      pts.push(new THREE.Vector3(x * r, y * r, z * r))
    }

    // Build sparse connections to nearest neighbors
    const maxNeighbors = 2
    const maxDist = mobile ? 2.2 : 2.8
    const lines: number[] = []
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i]
      // compute distances
      const distIdx: { d: number; j: number }[] = []
      for (let j = i + 1; j < pts.length; j++) {
        const d = a.distanceTo(pts[j])
        if (d <= maxDist) distIdx.push({ d, j })
      }
      distIdx.sort((p, q) => p.d - q.d)
      const toConnect = Math.min(maxNeighbors, distIdx.length)
      for (let k = 0; k < toConnect; k++) {
        const b = pts[distIdx[k].j]
        lines.push(a.x, a.y, a.z, b.x, b.y, b.z)
      }
    }

    // Split nodes into three color groups (blue, pink, green)
    const blue: number[] = []
    const pink: number[] = []
    const green: number[] = []
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i]
      if (i % 3 === 0) {
        blue.push(p.x, p.y, p.z)
      } else if (i % 3 === 1) {
        pink.push(p.x, p.y, p.z)
      } else {
        green.push(p.x, p.y, p.z)
      }
    }

    return {
      linesArray: new Float32Array(lines),
      nodesBlue: new Float32Array(blue),
      nodesPink: new Float32Array(pink),
      nodesGreen: new Float32Array(green),
    }
  }, [reduced, mobile])

  useFrame((_, delta) => {
    if (group.current && !reduced) {
      group.current.rotation.y += delta * 0.05
      group.current.rotation.x = Math.sin(performance.now() * 0.00005) * 0.08
    }
  })

  return (
    <group ref={group}>
      {/* connective lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={linesArray} count={linesArray.length / 3} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#06B6D4" transparent opacity={0.18} />
      </lineSegments>

      {/* node points: blue, pink, green */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={nodesBlue} count={nodesBlue.length / 3} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          color="#06B6D4"
          size={mobile ? 0.015 : 0.02}
          sizeAttenuation
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={nodesPink} count={nodesPink.length / 3} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          color="#FF3B81"
          size={mobile ? 0.015 : 0.02}
          sizeAttenuation
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={nodesGreen} count={nodesGreen.length / 3} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          color="#22C55E"
          size={mobile ? 0.013 : 0.018}
          sizeAttenuation
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

export function Hero3D() {
  const [reduced, setReduced] = useState(false)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener?.("change", onChange)

    const mqMobile = window.matchMedia("(max-width: 768px)")
    setMobile(mqMobile.matches)
    const onChangeMobile = () => setMobile(mqMobile.matches)
    mqMobile.addEventListener?.("change", onChangeMobile)
    return () => {
      mq.removeEventListener?.("change", onChange)
      mqMobile.removeEventListener?.("change", onChangeMobile)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        dpr={[1, mobile ? 1.25 : 1.5]}
        gl={{ powerPreference: "high-performance", antialias: true, alpha: true }}
      >
        <color attach="background" args={["#0B0F14"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[6, 5, 6]} intensity={1.1} color={"#06B6D4"} />
        <pointLight position={[-6, -4, -2]} intensity={0.9} color={"#FF3B81"} />
        <pointLight position={[0, -2, 4]} intensity={0.25} color={"#22C55E"} />

        <group position={[0, 0, -1]}>
          <NodeNetwork reduced={reduced} mobile={mobile} />
        </group>

        {/* Fallback label for reduced motion */}
        {reduced && (
          <Html center>
            <div className="rounded-md border border-[var(--border)] bg-[var(--card)] px-2 py-1 text-xs text-[var(--color-neutral-2)]">
              Network backdrop
            </div>
          </Html>
        )}

        <OrbitControls enableZoom={false} enablePan={false} autoRotate={!reduced} autoRotateSpeed={0.35} makeDefault />
      </Canvas>
    </div>
  )
}

export default Hero3D
