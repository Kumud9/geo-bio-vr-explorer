import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float } from '@react-three/drei';
import { Mesh } from 'three';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface GeometryShape {
  name: string;
  component: React.ComponentType;
  description: string;
}

const AnimatedCube = () => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#8B5CF6" 
        transparent 
        opacity={0.8}
        roughness={0.1}
        metalness={0.2}
      />
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2)]} />
        <lineBasicMaterial color="#C4B5FD" />
      </lineSegments>
    </mesh>
  );
};

const AnimatedSphere = () => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.3;
    meshRef.current.rotation.y += delta * 0.4;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial 
        color="#A855F7" 
        transparent 
        opacity={0.8}
        roughness={0.1}
        metalness={0.3}
      />
    </mesh>
  );
};

const AnimatedPyramid = () => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      <coneGeometry args={[1.5, 3, 4]} />
      <meshStandardMaterial 
        color="#C084FC" 
        transparent 
        opacity={0.8}
        roughness={0.1}
        metalness={0.2}
      />
      <lineSegments>
        <edgesGeometry args={[new THREE.ConeGeometry(1.5, 3, 4)]} />
        <lineBasicMaterial color="#DDD6FE" />
      </lineSegments>
    </mesh>
  );
};

const AnimatedTorus = () => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.4;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1.2, 0.4, 16, 100]} />
      <meshStandardMaterial 
        color="#8B5CF6" 
        transparent 
        opacity={0.8}
        roughness={0.1}
        metalness={0.4}
      />
    </mesh>
  );
};

const AnimatedCylinder = () => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.3;
    meshRef.current.rotation.y += delta * 0.4;
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 2.5, 32]} />
      <meshStandardMaterial 
        color="#A855F7" 
        transparent 
        opacity={0.8}
        roughness={0.1}
        metalness={0.3}
      />
      <lineSegments>
        <edgesGeometry args={[new THREE.CylinderGeometry(1, 1, 2.5, 32)]} />
        <lineBasicMaterial color="#C4B5FD" />
      </lineSegments>
    </mesh>
  );
};

const AnimatedDodecahedron = () => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
    meshRef.current.rotation.z += delta * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[1.3]} />
      <meshStandardMaterial 
        color="#C084FC" 
        transparent 
        opacity={0.8}
        roughness={0.1}
        metalness={0.4}
      />
      <lineSegments>
        <edgesGeometry args={[new THREE.DodecahedronGeometry(1.3)]} />
        <lineBasicMaterial color="#DDD6FE" />
      </lineSegments>
    </mesh>
  );
};

const AnimatedIcosahedron = () => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.4;
    meshRef.current.rotation.y += delta * 0.2;
    meshRef.current.rotation.z += delta * 0.3;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.4]} />
      <meshStandardMaterial 
        color="#8B5CF6" 
        transparent 
        opacity={0.8}
        roughness={0.1}
        metalness={0.5}
      />
      <lineSegments>
        <edgesGeometry args={[new THREE.IcosahedronGeometry(1.4)]} />
        <lineBasicMaterial color="#C4B5FD" />
      </lineSegments>
    </mesh>
  );
};

const AnimatedTorusKnot = () => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshStandardMaterial 
        color="#A855F7" 
        transparent 
        opacity={0.8}
        roughness={0.1}
        metalness={0.6}
      />
    </mesh>
  );
};

const AnimatedOctahedron = () => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.3;
    meshRef.current.rotation.y += delta * 0.4;
    meshRef.current.rotation.z += delta * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1.5]} />
      <meshStandardMaterial 
        color="#C084FC" 
        transparent 
        opacity={0.8}
        roughness={0.1}
        metalness={0.3}
      />
      <lineSegments>
        <edgesGeometry args={[new THREE.OctahedronGeometry(1.5)]} />
        <lineBasicMaterial color="#DDD6FE" />
      </lineSegments>
    </mesh>
  );
};

const shapes: GeometryShape[] = [
  {
    name: 'Cube',
    component: AnimatedCube,
    description: 'A three-dimensional shape with 6 equal square faces, 12 edges, and 8 vertices. Also known as a hexahedron.'
  },
  {
    name: 'Sphere',
    component: AnimatedSphere,
    description: 'A perfectly round 3D shape where every point on the surface is equidistant from the center.'
  },
  {
    name: 'Pyramid',
    component: AnimatedPyramid,
    description: 'A polyhedron formed by connecting a polygonal base and a point (apex). This is a square pyramid.'
  },
  {
    name: 'Torus',
    component: AnimatedTorus,
    description: 'A doughnut-shaped surface generated by revolving a circle around an axis coplanar with the circle.'
  },
  {
    name: 'Cylinder',
    component: AnimatedCylinder,
    description: 'A surface formed by parallel lines connecting two circular bases. Has 2 faces, 1 curved surface, and 2 edges.'
  },
  {
    name: 'Dodecahedron',
    component: AnimatedDodecahedron,
    description: 'A regular polyhedron with 12 pentagonal faces, 20 vertices, and 30 edges. One of the five Platonic solids.'
  },
  {
    name: 'Icosahedron',
    component: AnimatedIcosahedron,
    description: 'A regular polyhedron with 20 triangular faces, 12 vertices, and 30 edges. Another Platonic solid.'
  },
  {
    name: 'Torus Knot',
    component: AnimatedTorusKnot,
    description: 'A special type of knot that winds around a torus in a specific mathematical pattern, creating complex 3D curves.'
  },
  {
    name: 'Octahedron',
    component: AnimatedOctahedron,
    description: 'A regular polyhedron with 8 triangular faces, 6 vertices, and 12 edges. Dual of the cube.'
  }
];

export const GeometryViewer = () => {
  const [selectedShape, setSelectedShape] = useState(0);
  const CurrentShape = shapes[selectedShape].component;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto"
    >
      <Card className="glass card-glow border-border/20 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Interactive 3D Geometry
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore geometric shapes in three dimensions. Click and drag to rotate, scroll to zoom.
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
                color="#8B5CF6"
              />
              <directionalLight 
                position={[-10, -10, -5]} 
                intensity={0.5}
                color="#A855F7"
              />
              <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.3}>
                <CurrentShape />
              </Float>
              <OrbitControls 
                enablePan={false} 
                enableZoom={true}
                minDistance={3}
                maxDistance={8}
              />
            </Canvas>
          </div>

          {/* Shape Selection and Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Select a Shape</h3>
              <div className="grid grid-cols-3 gap-3">
                {shapes.map((shape, index) => (
                  <Button
                    key={shape.name}
                    onClick={() => setSelectedShape(index)}
                    variant={selectedShape === index ? "default" : "outline"}
                    className={`h-auto p-3 text-sm ${
                      selectedShape === index 
                        ? 'bg-gradient-primary glow border-primary/30' 
                        : 'glass border-border/30 hover:border-primary/50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-medium">{shape.name}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            <div className="glass rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3 text-secondary">
                {shapes[selectedShape].name}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {shapes[selectedShape].description}
              </p>
            </div>

            <div className="glass rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3 text-accent">Learning Tips</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Drag to rotate and examine from all angles</li>
                <li>• Scroll to zoom in and study details</li>
                <li>• Try visualizing cross-sections</li>
                <li>• Count faces, edges, and vertices</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};