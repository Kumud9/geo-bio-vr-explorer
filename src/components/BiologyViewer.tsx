import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { Mesh } from 'three';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface BiologyModel {
  name: string;
  component: React.ComponentType;
  description: string;
  facts: string[];
}

const AnimatedHeart = () => {
  const meshRef = useRef<THREE.Group>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.2;
    // Realistic heartbeat effect
    const heartbeat = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.05 + 
                     Math.sin(state.clock.elapsedTime * 8) * 0.03;
    meshRef.current.scale.setScalar(heartbeat);
  });

  return (
    <group ref={meshRef}>
      {/* Left Atrium */}
      <mesh position={[-0.4, 0.8, 0.2]}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color="#8b0000" roughness={0.4} metalness={0.1} />
      </mesh>
      
      {/* Right Atrium */}
      <mesh position={[0.4, 0.8, 0.2]}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color="#8b0000" roughness={0.4} metalness={0.1} />
      </mesh>
      
      {/* Left Ventricle */}
      <mesh position={[-0.3, 0.1, 0]} rotation={[0.2, 0, -0.1]}>
        <coneGeometry args={[0.45, 1.2, 12]} />
        <meshStandardMaterial color="#dc2626" roughness={0.3} metalness={0.1} />
      </mesh>
      
      {/* Right Ventricle */}
      <mesh position={[0.35, 0.1, 0.1]} rotation={[0.2, 0, 0.1]}>
        <coneGeometry args={[0.4, 1.1, 12]} />
        <meshStandardMaterial color="#dc2626" roughness={0.3} metalness={0.1} />
      </mesh>
      
      {/* Aorta */}
      <mesh position={[-0.2, 1.3, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.15, 0.18, 0.8, 8]} />
        <meshStandardMaterial color="#a91e22" roughness={0.3} metalness={0.1} />
      </mesh>
      
      {/* Pulmonary Artery */}
      <mesh position={[0.2, 1.2, 0.2]} rotation={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.12, 0.15, 0.6, 8]} />
        <meshStandardMaterial color="#a91e22" roughness={0.3} metalness={0.1} />
      </mesh>
      
      {/* Coronary Arteries */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh 
          key={i}
          position={[
            Math.cos(i * Math.PI / 3) * 0.5,
            0.4 + Math.sin(i * Math.PI / 3) * 0.2,
            Math.sin(i * Math.PI / 3) * 0.3
          ]}
          rotation={[i * 0.3, i * 0.5, 0]}
        >
          <cylinderGeometry args={[0.02, 0.03, 0.4, 6]} />
          <meshStandardMaterial color="#ff4444" roughness={0.2} metalness={0.2} />
        </mesh>
      ))}
    </group>
  );
};

const AnimatedBrain = () => {
  const meshRef = useRef<THREE.Group>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
  });

  return (
    <group ref={meshRef}>
      {/* Cerebrum - Left Hemisphere */}
      <mesh position={[-0.5, 0.2, 0]} scale={[1, 1.1, 0.9]}>
        <sphereGeometry args={[0.7, 20, 16]} />
        <meshStandardMaterial color="#f4a261" roughness={0.6} metalness={0.1} />
      </mesh>
      
      {/* Cerebrum - Right Hemisphere */}
      <mesh position={[0.5, 0.2, 0]} scale={[1, 1.1, 0.9]}>
        <sphereGeometry args={[0.7, 20, 16]} />
        <meshStandardMaterial color="#f4a261" roughness={0.6} metalness={0.1} />
      </mesh>
      
      {/* Corpus Callosum (connection between hemispheres) */}
      <mesh position={[0, 0.1, 0]} scale={[0.8, 0.2, 0.6]}>
        <boxGeometry args={[0.3, 0.1, 0.8]} />
        <meshStandardMaterial color="#e76f51" roughness={0.4} metalness={0.2} />
      </mesh>
      
      {/* Cerebellum */}
      <mesh position={[0, -0.4, -0.6]} scale={[0.8, 0.6, 0.7]}>
        <sphereGeometry args={[0.4, 16, 12]} />
        <meshStandardMaterial color="#d4a574" roughness={0.5} metalness={0.1} />
      </mesh>
      
      {/* Brain Stem */}
      <mesh position={[0, -0.8, -0.3]} rotation={[0.2, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.25, 0.8, 12]} />
        <meshStandardMaterial color="#c97d47" roughness={0.4} metalness={0.2} />
      </mesh>
      
      {/* Frontal Lobe details */}
      <mesh position={[0, 0.6, 0.4]} scale={[1.2, 0.5, 0.8]}>
        <sphereGeometry args={[0.3, 12, 8]} />
        <meshStandardMaterial color="#f4a261" roughness={0.7} metalness={0.05} />
      </mesh>
      
      {/* Sulci (brain folds) - represented as grooves */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh 
          key={i}
          position={[
            (i % 2 === 0 ? -0.5 : 0.5) + (Math.random() - 0.5) * 0.3,
            0.2 + Math.sin(i * Math.PI / 4) * 0.4,
            Math.cos(i * Math.PI / 4) * 0.6
          ]}
          rotation={[Math.PI / 2, i * Math.PI / 4, 0]}
          scale={[0.8, 0.05, 0.1]}
        >
          <torusGeometry args={[0.2, 0.02, 6, 12]} />
          <meshStandardMaterial color="#e76f51" roughness={0.5} metalness={0.1} />
        </mesh>
      ))}
    </group>
  );
};

const AnimatedCell = () => {
  const meshRef = useRef<THREE.Group>(null!);
  const nucleusRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.15;
    nucleusRef.current.rotation.y += delta * 0.5;
  });

  return (
    <group ref={meshRef}>
      {/* Cell membrane */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial 
          color="#10b981" 
          transparent 
          opacity={0.3} 
          roughness={0.2} 
          metalness={0.1} 
        />
      </mesh>
      {/* Nucleus */}
      <mesh ref={nucleusRef}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color="#059669" roughness={0.3} metalness={0.2} />
      </mesh>
      {/* Organelles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.2} floatIntensity={0.1}>
          <mesh position={[
            Math.cos(i * Math.PI / 4) * 1,
            Math.sin(i * Math.PI / 4) * 0.3,
            Math.sin(i * Math.PI / 4) * 1
          ]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#34d399" : "#6ee7b7"} 
              roughness={0.3} 
              metalness={0.1} 
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const AnimatedDNA = () => {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.4;
  });

  return (
    <group ref={groupRef}>
      {/* DNA Double Helix */}
      {Array.from({ length: 20 }).map((_, i) => {
        const y = (i - 10) * 0.2;
        const angle = i * 0.5;
        return (
          <group key={i}>
            {/* First strand */}
            <mesh position={[
              Math.cos(angle) * 0.8,
              y,
              Math.sin(angle) * 0.8
            ]}>
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshStandardMaterial color="#3b82f6" roughness={0.3} metalness={0.2} />
            </mesh>
            {/* Second strand */}
            <mesh position={[
              Math.cos(angle + Math.PI) * 0.8,
              y,
              Math.sin(angle + Math.PI) * 0.8
            ]}>
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshStandardMaterial color="#ef4444" roughness={0.3} metalness={0.2} />
            </mesh>
            {/* Base pairs */}
            <mesh 
              position={[0, y, 0]} 
              rotation={[0, angle, 0]}
            >
              <cylinderGeometry args={[0.02, 0.02, 1.6, 8]} />
              <meshStandardMaterial color="#8b5cf6" roughness={0.3} metalness={0.2} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

const models: BiologyModel[] = [
  {
    name: 'Human Heart',
    component: AnimatedHeart,
    description: 'A detailed 3D model of the human heart showing the four chambers, major vessels, and coronary arteries.',
    facts: [
      'Has 4 chambers: 2 atria (upper) and 2 ventricles (lower)',
      'Left ventricle is the strongest chamber, pumping blood to the body',
      'Coronary arteries supply blood to the heart muscle itself',
      'Beats approximately 100,000 times per day'
    ]
  },
  {
    name: 'Human Brain',
    component: AnimatedBrain,
    description: 'An anatomically accurate brain model showing cerebrum hemispheres, cerebellum, brain stem, and major structures.',
    facts: [
      'Cerebrum has left and right hemispheres connected by corpus callosum',
      'Cerebellum controls balance and coordination',
      'Brain stem controls vital functions like breathing and heart rate',
      'Contains over 86 billion neurons with trillions of connections'
    ]
  },
  {
    name: 'Cell Structure',
    component: AnimatedCell,
    description: 'The basic unit of life, containing various organelles that perform specific functions.',
    facts: [
      'All living things are made of one or more cells',
      'The nucleus contains the cell\'s DNA',
      'Mitochondria are the powerhouses of the cell',
      'Cell membrane controls what enters and exits'
    ]
  },
  {
    name: 'DNA Double Helix',
    component: AnimatedDNA,
    description: 'The molecular structure that carries genetic information in all living organisms.',
    facts: [
      'Made of two complementary strands',
      'Contains four bases: A, T, G, and C',
      'Unwinds during DNA replication',
      'Found in the nucleus of every cell'
    ]
  }
];

export const BiologyViewer = () => {
  const [selectedModel, setSelectedModel] = useState(0);
  const CurrentModel = models[selectedModel].component;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto"
    >
      <Card className="glass card-glow border-border/20 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-4">
            Interactive Biology & Anatomy
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore human anatomy and biological structures in 3D. Discover the amazing world inside living organisms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 3D Viewer */}
          <div className="aspect-square bg-gradient-card rounded-xl border border-border/20 overflow-hidden">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.4} />
              <directionalLight 
                position={[10, 10, 5]} 
                intensity={1}
                color="#A855F7"
              />
              <directionalLight 
                position={[-10, -10, -5]} 
                intensity={0.5}
                color="#C084FC"
              />
              <CurrentModel />
              <OrbitControls 
                enablePan={false} 
                enableZoom={true}
                minDistance={2}
                maxDistance={8}
              />
            </Canvas>
          </div>

          {/* Model Selection and Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-secondary">Select a Model</h3>
              <div className="grid grid-cols-1 gap-3">
                {models.map((model, index) => (
                  <Button
                    key={model.name}
                    onClick={() => setSelectedModel(index)}
                    variant={selectedModel === index ? "default" : "outline"}
                    className={`h-auto p-4 text-left ${
                      selectedModel === index 
                        ? 'bg-gradient-secondary glow border-secondary/30' 
                        : 'glass border-border/30 hover:border-secondary/50'
                    }`}
                  >
                    <div>
                      <div className="font-medium">{model.name}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            <div className="glass rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3 text-secondary">
                {models[selectedModel].name}
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {models[selectedModel].description}
              </p>
              <div>
                <h5 className="font-medium mb-2 text-secondary-foreground">Did you know?</h5>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {models[selectedModel].facts.map((fact, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};