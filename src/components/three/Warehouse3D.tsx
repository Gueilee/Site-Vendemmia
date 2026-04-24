'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, Float } from '@react-three/drei'
import * as THREE from 'three'

function WarehouseScene() {
  const group = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.3
    }
  })

  return (
    <group ref={group}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color="#111827" metalness={0.5} roughness={0.8} />
      </mesh>
      {/* Racks */}
      {[-1.5, 0, 1.5].map((x, i) => (
        <Float key={i} speed={1.5} floatIntensity={0.2}>
          <Box args={[0.8, 2, 0.3]} position={[x, -0.2, 0]}>
            <meshStandardMaterial color="#6C2BD9" metalness={0.7} roughness={0.3} transparent opacity={0.8} />
          </Box>
        </Float>
      ))}
      {/* Boxes on racks */}
      {[[-1.5, 0.5, 0.3], [0, 0.2, 0.3], [1.5, 0.7, 0.3]].map(([x, y, z], i) => (
        <Float key={`box-${i}`} speed={2} floatIntensity={0.3}>
          <Box args={[0.35, 0.35, 0.35]} position={[x, y, z]}>
            <meshStandardMaterial color={i % 2 === 0 ? '#F01F8E' : '#00D4FF'} metalness={0.5} roughness={0.4} />
          </Box>
        </Float>
      ))}
    </group>
  )
}

export default function Warehouse3D({ className }: { className?: string }) {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 45 }} className={className}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-3, 2, -3]} intensity={0.6} color="#6C2BD9" />
      <pointLight position={[3, -2, 3]} intensity={0.4} color="#F01F8E" />
      <WarehouseScene />
    </Canvas>
  )
}
