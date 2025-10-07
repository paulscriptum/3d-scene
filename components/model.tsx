"use client"

import type React from "react"

import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type * as THREE from "three"

function AnimatedMesh({ children, phase = 0 }: { children: React.ReactNode; phase?: number }) {
  const meshRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime() + phase
      meshRef.current.position.y = Math.sin(time * 0.4) * 0.08
      meshRef.current.rotation.x = Math.sin(time * 0.35) * 0.04
      meshRef.current.rotation.z = Math.cos(time * 0.3) * 0.04
    }
  })

  return <group ref={meshRef}>{children}</group>
}

export function Model(props) {
  const { nodes, materials } = useGLTF("https://cdn.jsdelivr.net/gh/paulscriptum/model@main/FWA2.glb")
  return (
    <group {...props} dispose={null}>
      <AnimatedMesh phase={0}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["FWA green"]}
          position={[0, 0, 0.232]}
          scale={24.495}
        />
      </AnimatedMesh>

      <mesh castShadow receiveShadow geometry={nodes.LAPTOP.geometry} material={materials["Pale White"]} scale={0} />
      <mesh castShadow receiveShadow geometry={nodes.LIGHTsign.geometry} material={nodes.LIGHTsign.material} scale={0}>
        <mesh castShadow receiveShadow geometry={nodes.Text001.geometry} material={nodes.Text001.material} scale={0} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.CELL.geometry} material={nodes.CELL.material} scale={0} />
      <mesh castShadow receiveShadow geometry={nodes.BOTTLE.geometry} material={nodes.BOTTLE.material} scale={0} />
      <mesh castShadow receiveShadow geometry={nodes.LOGO.geometry} material={materials["Pale Black"]} scale={0} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill_base.geometry}
        material={nodes.Pill_base.material}
        scale={0}
      />
      <mesh castShadow receiveShadow geometry={nodes.Text.geometry} material={nodes.Text.material} scale={0} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill_modified.geometry}
        material={nodes.Pill_modified.material}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill_final.geometry}
        material={nodes.Pill_final.material}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text_final.geometry}
        material={nodes.Text_final.material}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.laptop_lower.geometry}
        material={nodes.laptop_lower.material}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.laptop_upper.geometry}
        material={nodes.laptop_upper.material}
        scale={0}
      />
      <mesh castShadow receiveShadow geometry={nodes.sign.geometry} material={nodes.sign.material} scale={0} />

      <AnimatedMesh phase={1.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BOTTLE001.geometry}
          material={materials["Pale White"]}
          position={[1.762, 0.797, 0]}
          rotation={[2.145, 0.443, -2.397]}
          scale={0.706}
        />
      </AnimatedMesh>

      <AnimatedMesh phase={3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CELL001.geometry}
          material={materials["Pale White"]}
          position={[-1.741, -0.634, 0.758]}
          rotation={[1.109, 0.48, -0.413]}
          scale={1.269}
        />
      </AnimatedMesh>

      <AnimatedMesh phase={4.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LAPTOP001.geometry}
          material={materials["Pale White"]}
          position={[2.198, -0.509, -0.164]}
          rotation={[2.077, 0.039, 0.738]}
          scale={[0.496, 0.496, 0.358]}
        />
      </AnimatedMesh>

      <AnimatedMesh phase={2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PILL001.geometry}
          material={materials["Pale White"]}
          rotation={[-0.39, 0.328, 0.136]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LOGO001.geometry}
            material={materials["Pale Black"]}
            position={[0.05, 0.011, 0.388]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.652}
          />
        </mesh>
      </AnimatedMesh>

      <AnimatedMesh phase={5.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHTsign002.geometry}
          material={materials["Pale White.001"]}
          position={[-1.85, 0.622, -0.681]}
          rotation={[0.879, 0.049, 0.341]}
          scale={[0.435, 0.104, 0.435]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text003.geometry}
            material={nodes.Text003.material}
            position={[0.293, 0.712, -0.054]}
            scale={[1.086, 4.551, 1.086]}
          />
        </mesh>
      </AnimatedMesh>
    </group>
  )
}

useGLTF.preload("https://cdn.jsdelivr.net/gh/paulscriptum/model@main/FWA2.glb")
