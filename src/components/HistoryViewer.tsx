import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { Mesh } from 'three';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface HistoricalSite {
  name: string;
  component: React.ComponentType;
  description: string;
  facts: string[];
  period: string;
}

const AnimatedPyramid = () => {
  const meshRef = useRef<Mesh>(null!);
  const baseRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.1;
    baseRef.current.rotation.y += delta * 0.1;
  });

  return (
    <group>
      {/* Main pyramid */}
      <mesh ref={meshRef} position={[0, 0.5, 0]}>
        <coneGeometry args={[2, 2, 4]} />
        <meshStandardMaterial 
          color="#d4a574" 
          roughness={0.8} 
          metalness={0.1}
        />
        <lineSegments>
          <edgesGeometry args={[new THREE.ConeGeometry(2, 2, 4)]} />
          <lineBasicMaterial color="#b8956a" />
        </lineSegments>
      </mesh>
      
      {/* Base platform */}
      <mesh ref={baseRef} position={[0, -0.8, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 0.3, 8]} />
        <meshStandardMaterial 
          color="#c19b61" 
          roughness={0.9} 
          metalness={0.1}
        />
      </mesh>
      
      {/* Small surrounding structures */}
      {Array.from({ length: 4 }).map((_, i) => (
        <Float key={i} speed={0.5} rotationIntensity={0.1} floatIntensity={0.05}>
          <mesh position={[
            Math.cos(i * Math.PI / 2) * 3.2,
            -0.4,
            Math.sin(i * Math.PI / 2) * 3.2
          ]}>
            <coneGeometry args={[0.3, 0.8, 4]} />
            <meshStandardMaterial color="#b8956a" roughness={0.8} metalness={0.1} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const AnimatedColosseum = () => {
  const meshRef = useRef<THREE.Group>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.05;
  });

  return (
    <group ref={meshRef}>
      {/* Main structure - outer ring */}
      <mesh>
        <ringGeometry args={[1.2, 2, 32]} />
        <meshStandardMaterial 
          color="#8d7053" 
          roughness={0.9} 
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Vertical walls */}
      {Array.from({ length: 16 }).map((_, i) => (
        <mesh key={i} position={[
          Math.cos(i * Math.PI / 8) * 1.6,
          0.5,
          Math.sin(i * Math.PI / 8) * 1.6
        ]} rotation={[0, i * Math.PI / 8, 0]}>
          <boxGeometry args={[0.1, 1, 0.4]} />
          <meshStandardMaterial color="#a67c5a" roughness={0.9} metalness={0.1} />
        </mesh>
      ))}
      
      {/* Arena floor */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.1, 32]} />
        <meshStandardMaterial color="#d4a574" roughness={0.9} metalness={0.1} />
      </mesh>
      
      {/* Upper level arches */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[
          Math.cos(i * Math.PI / 4) * 1.8,
          1,
          Math.sin(i * Math.PI / 4) * 1.8
        ]}>
          <torusGeometry args={[0.15, 0.05, 8, 16]} />
          <meshStandardMaterial color="#6b5b47" roughness={0.9} metalness={0.1} />
        </mesh>
      ))}
    </group>
  );
};

const AnimatedParthenon = () => {
  const meshRef = useRef<THREE.Group>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={meshRef}>
      {/* Base platform */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[4, 0.3, 2.5]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.7} metalness={0.2} />
      </mesh>
      
      {/* Columns */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh key={i} position={[
          (i % 6 - 2.5) * 0.6,
          0.3,
          i < 6 ? -1 : 1
        ]}>
          <cylinderGeometry args={[0.08, 0.08, 1.6, 12]} />
          <meshStandardMaterial color="#f5f5f5" roughness={0.6} metalness={0.2} />
        </mesh>
      ))}
      
      {/* Roof */}
      <mesh position={[0, 1.3, 0]}>
        <boxGeometry args={[4.2, 0.2, 2.7]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.7} metalness={0.2} />
      </mesh>
      
      {/* Triangular pediment */}
      <mesh position={[0, 1.6, -1.35]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[2.1, 0.4, 3]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.7} metalness={0.2} />
      </mesh>
    </group>
  );
};

const AnimatedStonehenge = () => {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.06;
  });

  return (
    <group ref={groupRef}>
      {/* Outer circle of stones */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 12;
        const radius = 2.5;
        return (
          <group key={i}>
            {/* Vertical stones */}
            <mesh position={[
              Math.cos(angle) * radius,
              0.5,
              Math.sin(angle) * radius
            ]}>
              <boxGeometry args={[0.3, 2, 0.8]} />
              <meshStandardMaterial color="#5a5a5a" roughness={0.9} metalness={0.1} />
            </mesh>
            
            {/* Horizontal lintels (every other stone) */}
            {i % 2 === 0 && (
              <mesh position={[
                Math.cos(angle + Math.PI / 12) * radius,
                1.6,
                Math.sin(angle + Math.PI / 12) * radius
              ]} rotation={[0, angle + Math.PI / 12, 0]}>
                <boxGeometry args={[0.8, 0.3, 0.3]} />
                <meshStandardMaterial color="#4a4a4a" roughness={0.9} metalness={0.1} />
              </mesh>
            )}
          </group>
        );
      })}
      
      {/* Inner horseshoe arrangement */}
      {Array.from({ length: 5 }).map((_, i) => (
        <Float key={i} speed={0.3} rotationIntensity={0.05} floatIntensity={0.02}>
          <mesh position={[
            Math.cos((i * Math.PI) / 6 - Math.PI / 2) * 1.2,
            0.8,
            Math.sin((i * Math.PI) / 6 - Math.PI / 2) * 1.2
          ]}>
            <boxGeometry args={[0.2, 3, 0.6]} />
            <meshStandardMaterial color="#666666" roughness={0.9} metalness={0.1} />
          </mesh>
        </Float>
      ))}
      
      {/* Central altar stone */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[0.8, 0.4, 1.2]} />
        <meshStandardMaterial color="#4d4d4d" roughness={0.9} metalness={0.1} />
      </mesh>
    </group>
  );
};

const sites: HistoricalSite[] = [
  {
    name: 'Great Pyramid of Giza',
    component: AnimatedPyramid,
    description: 'One of the Seven Wonders of the Ancient World, built as a tomb for Pharaoh Khufu.',
    period: '2580-2510 BCE',
    facts: [
      'Originally 146.5 meters tall',
      'Built with over 2 million stone blocks',
      'Aligned with cardinal directions',
      'Construction took approximately 20 years'
    ]
  },
  {
    name: 'Roman Colosseum',
    component: AnimatedColosseum,
    description: 'The largest amphitheater ever built, used for gladiatorial contests and public spectacles.',
    period: '70-80 CE',
    facts: [
      'Could hold 50,000-80,000 spectators',
      'Had a complex underground area called hypogeum',
      'Featured a retractable awning system',
      'Hosted mock naval battles called naumachiae'
    ]
  },
  {
    name: 'Parthenon',
    component: AnimatedParthenon,
    description: 'A temple dedicated to Athena, representing the pinnacle of ancient Greek architecture.',
    period: '447-432 BCE',
    facts: [
      'Built on the Athenian Acropolis',
      'Made primarily of Pentelic marble',
      'Used optical illusions to appear perfectly straight',
      'Housed a 12-meter tall statue of Athena'
    ]
  },
  {
    name: 'Stonehenge',
    component: AnimatedStonehenge,
    description: 'A prehistoric monument consisting of a ring of standing stones, possibly used for astronomical observations.',
    period: '3100-1600 BCE',
    facts: [
      'Stones were transported from Wales, 240 km away',
      'Aligned with solstices and equinoxes',
      'Built in several phases over 1500 years',
      'Purpose remains largely mysterious'
    ]
  }
];

export const HistoryViewer = () => {
  const [selectedSite, setSelectedSite] = useState(0);
  const CurrentSite = sites[selectedSite].component;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto"
    >
      <Card className="glass card-glow border-border/20 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-card bg-clip-text text-transparent mb-4">
            Historical Architecture
          </h2>
          <p className="text-muted-foreground text-lg">
            Journey through time and explore magnificent ancient structures that shaped human civilization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 3D Viewer */}
          <div className="aspect-square bg-gradient-card rounded-xl border border-border/20 overflow-hidden">
            <Canvas camera={{ position: [5, 3, 5], fov: 50 }}>
              <ambientLight intensity={0.4} />
              <directionalLight 
                position={[10, 10, 5]} 
                intensity={1.2}
                color="#FFA500"
                castShadow
              />
              <directionalLight 
                position={[-5, 5, -5]} 
                intensity={0.6}
                color="#FFD700"
              />
              <CurrentSite />
              <OrbitControls 
                enablePan={false} 
                enableZoom={true}
                minDistance={3}
                maxDistance={12}
              />
              {/* Ground plane */}
              <mesh position={[0, -1, 0]} receiveShadow>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial 
                  color="#8B7355" 
                  roughness={0.9} 
                  metalness={0.1}
                />
              </mesh>
            </Canvas>
          </div>

          {/* Site Selection and Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">Select a Historical Site</h3>
              <div className="grid grid-cols-1 gap-3">
                {sites.map((site, index) => (
                  <Button
                    key={site.name}
                    onClick={() => setSelectedSite(index)}
                    variant={selectedSite === index ? "default" : "outline"}
                    className={`h-auto p-4 text-left ${
                      selectedSite === index 
                        ? 'bg-gradient-card glow border-accent/30' 
                        : 'glass border-border/30 hover:border-accent/50'
                    }`}
                  >
                    <div>
                      <div className="font-medium">{site.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{site.period}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            <div className="glass rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2 text-accent">
                {sites[selectedSite].name}
              </h4>
              <p className="text-xs text-accent-foreground/70 mb-3 font-medium">
                {sites[selectedSite].period}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {sites[selectedSite].description}
              </p>
              <div>
                <h5 className="font-medium mb-2 text-accent-foreground">Historical Facts</h5>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {sites[selectedSite].facts.map((fact, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
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