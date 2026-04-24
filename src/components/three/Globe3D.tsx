'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

function GlobeMesh() {
  const meshRef = useRef<any>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15
    }
  })

  return (
    <Sphere ref={meshRef} args={[1.8, 64, 64]}>
      <MeshDistortMaterial
        color="#6C2BD9"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0}
        metalness={0.8}
        transparent
        opacity={0.7}
        wireframe
      />
    </Sphere>
  )
}

export default function Globe3D({ className }: { className?: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} className={className}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#6C2BD9" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#F01F8E" />
      <GlobeMesh />
    </Canvas>
  )
}
