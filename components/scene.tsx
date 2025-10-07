"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, ContactShadows } from "@react-three/drei"
import { Model } from "./model"
import { Suspense, useRef } from "react"

function MouseCamera() {
  const { camera } = useThree()
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const targetRotationX = useRef(0)
  const targetRotationY = useRef(0)

  const handleMouseMove = (event: MouseEvent) => {
    mouseX.current = (event.clientX / window.innerWidth) * 2 - 1
    mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1
  }

  useFrame(() => {
    const maxAngleX = Math.PI / 18
    const maxAngleY = Math.PI / 18

    targetRotationY.current = mouseX.current * maxAngleX
    targetRotationX.current = mouseY.current * maxAngleY

    const radius = 5
    const targetX = Math.sin(targetRotationY.current) * radius
    const targetZ = Math.cos(targetRotationY.current) * radius
    const targetY = 1 + targetRotationX.current * 2

    camera.position.x += (targetX - camera.position.x) * 0.05
    camera.position.y += (targetY - camera.position.y) * 0.05
    camera.position.z += (targetZ - camera.position.z) * 0.05

    camera.lookAt(0, 0, 0)
  })

  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", handleMouseMove)
  }

  return null
}

export function Scene() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }} shadows gl={{ antialias: true }}>
        <color attach="background" args={["#f0f0f0"]} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />

        <Suspense fallback={null}>
          <Model />
          <ContactShadows position={[0, -1.99, 0]} opacity={0.4} scale={20} blur={0.5} far={4} />
        </Suspense>

        <Environment preset="city" />

        <MouseCamera />
      </Canvas>
    </div>
  )
}
