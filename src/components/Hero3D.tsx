import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Box, Octahedron } from '@react-three/drei';
import { Mesh } from 'three';
import * as THREE from 'three';

const FloatingShape = ({ 
  position, 
  Component, 
  args, 
  color,
  speed = 1 
}: {
  position: [number, number, number];
  Component: any;
  args: any[];
  color: string;
  speed?: number;
}) => {
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.2}>
      <Component position={position} args={args}>
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.3}
          roughness={0.1}
          metalness={0.8}
        />
      </Component>
    </Float>
  );
};

const AnimatedBackground = () => {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating geometric shapes */}
      <FloatingShape
        position={[-4, 2, -5]}
        Component={Box}
        args={[1, 1, 1]}
        color="#8B5CF6"
        speed={1.2}
      />
      <FloatingShape
        position={[4, -1, -8]}
        Component={Sphere}
        args={[0.8, 32, 32]}
        color="#A855F7"
        speed={0.8}
      />
      <FloatingShape
        position={[0, 3, -6]}
        Component={Octahedron}
        args={[1.2]}
        color="#C084FC"
        speed={1.5}
      />
      <FloatingShape
        position={[-2, -2, -4]}
        Component={Box}
        args={[0.6, 0.6, 0.6]}
        color="#DDD6FE"
        speed={0.9}
      />
      <FloatingShape
        position={[3, 1, -7]}
        Component={Octahedron}
        args={[0.8]}
        color="#8B5CF6"
        speed={1.1}
      />
    </group>
  );
};

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={0.8}
          color="#8B5CF6"
        />
        <directionalLight 
          position={[-10, -10, -5]} 
          intensity={0.4}
          color="#A855F7"
        />
        <AnimatedBackground />
      </Canvas>
    </div>
  );
};