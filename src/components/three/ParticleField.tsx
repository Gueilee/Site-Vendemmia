'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COLORS = [
  new THREE.Color('#6C2BD9'), // violet
  new THREE.Color('#F01F8E'), // magenta
  new THREE.Color('#00D4FF'), // cyan
]

function Particles({ count = 2000 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null)

  const { positions, colors, offsets, baseY } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const offsets = new Float32Array(count)
    const baseY = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 30
      const y = (Math.random() - 0.5) * 30
      const z = (Math.random() - 0.5) * 30
      positions[i * 3]     = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      baseY[i] = y
      offsets[i] = Math.random() * Math.PI * 2

      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      colors[i * 3]     = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return { positions, colors, offsets, baseY }
  }, [count])

  const posRef = useRef(positions)

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y += 0.0003

    const time = state.clock.elapsedTime
    const pos = posRef.current
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] = baseY[i] + Math.sin(time * 0.5 + offsets[i]) * 0.3
    }

    const attr = mesh.current.geometry.getAttribute('position') as THREE.BufferAttribute
    attr.array.set(pos)
    attr.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function ParticleField({ className }: { className?: string }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      className={className}
      gl={{ alpha: true, antialias: false }}
    >
      <Particles />
    </Canvas>
  )
}
