import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

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
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.2}>
        <mesh position={[-4, 2, -5]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial 
            color="#8B5CF6" 
            transparent 
            opacity={0.3}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>
      
      <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.2}>
        <mesh position={[4, -1, -8]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial 
            color="#A855F7" 
            transparent 
            opacity={0.3}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.2}>
        <mesh position={[0, 3, -6]}>
          <octahedronGeometry args={[1.2]} />
          <meshStandardMaterial 
            color="#C084FC" 
            transparent 
            opacity={0.3}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>
      
      <Float speed={0.9} rotationIntensity={0.4} floatIntensity={0.2}>
        <mesh position={[-2, -2, -4]}>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial 
            color="#DDD6FE" 
            transparent 
            opacity={0.3}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>
      
      <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.2}>
        <mesh position={[3, 1, -7]}>
          <octahedronGeometry args={[0.8]} />
          <meshStandardMaterial 
            color="#8B5CF6" 
            transparent 
            opacity={0.3}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>
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