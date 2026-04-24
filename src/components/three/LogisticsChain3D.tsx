'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Chain() {
  const group = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  const nodes = [
    { pos: [-2.5, 0, 0] as [number, number, number], color: '#00D4FF' },
    { pos: [-0.8, 0.5, 0] as [number, number, number], color: '#6C2BD9' },
    { pos: [0.8, -0.5, 0] as [number, number, number], color: '#F01F8E' },
    { pos: [2.5, 0, 0] as [number, number, number], color: '#00FF94' },
  ]

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={node.pos}>
            <octahedronGeometry args={[0.3, 0]} />
            <meshStandardMaterial color={node.color} metalness={0.8} roughness={0.2} />
          </mesh>
        </Float>
      ))}
      {nodes.slice(0, -1).map((node, i) => {
        const next = nodes[i + 1]
        const mid: [number, number, number] = [
          (node.pos[0] + next.pos[0]) / 2,
          (node.pos[1] + next.pos[1]) / 2,
          (node.pos[2] + next.pos[2]) / 2,
        ]
        return (
          <mesh key={`line-${i}`} position={mid}>
            <cylinderGeometry args={[0.02, 0.02, 1.8, 8]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.2} />
          </mesh>
        )
      })}
    </group>
  )
}

export default function LogisticsChain3D({ className }: { className?: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className={className}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#6C2BD9" />
      <Chain />
    </Canvas>
  )
}
