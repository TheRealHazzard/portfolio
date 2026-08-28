"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import type { Group, Mesh } from "three";

function Crystal() {
  const group = useRef<Group>(null);
  const inner = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    const { pointer } = state;
    const targetY = pointer.x * 0.6;
    const targetX = -pointer.y * 0.4;

    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
    group.current.rotation.z += delta * 0.05;

    if (inner.current) {
      inner.current.rotation.y -= delta * 0.15;
      inner.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={group}>
        <mesh>
          <icosahedronGeometry args={[1.4, 8]} />
          <MeshDistortMaterial
            color="#1a5fb4"
            emissive="#0a2540"
            roughness={0.15}
            metalness={0.6}
            distort={0.35}
            speed={1.8}
            transparent
            opacity={0.85}
          />
        </mesh>
        <mesh ref={inner} scale={1.001}>
          <icosahedronGeometry args={[1.4, 1]} />
          <meshBasicMaterial color="#58e6ff" wireframe transparent opacity={0.25} />
        </mesh>
      </group>
    </Float>
  );
}

function Rig() {
  const { camera } = useThree();
  useFrame((state) => {
    camera.position.x += (state.pointer.x * 0.4 - camera.position.x) * 0.02;
    camera.position.y += (state.pointer.y * 0.2 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 4]} intensity={45} color="#58a6ff" />
      <pointLight position={[-4, -2, -3]} intensity={30} color="#39d0d8" />
      <pointLight position={[0, -4, 2]} intensity={15} color="#ffffff" />
      <Sparkles count={60} scale={6} size={2} speed={0.3} color="#39d0d8" opacity={0.5} />
      <Crystal />
      <Rig />
    </Canvas>
  );
}
