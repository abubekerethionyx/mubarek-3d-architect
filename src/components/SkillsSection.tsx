
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Card } from '@/components/ui/card';

interface SkillSphereProps {
  position: [number, number, number];
  skill: string;
  color: string;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}

const SkillSphere: React.FC<SkillSphereProps> = ({ position, skill, color, isHovered, onHover }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.scale.setScalar(isHovered ? 1.2 : 1);
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => onHover(true)}
        onPointerOut={() => onHover(false)}
      >
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={isHovered ? 0.3 : 0.1}
        />
      </mesh>
      <mesh position={[0, 0, 1]} ref={textRef}>
        <planeGeometry args={[2, 0.5]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </group>
  );
};

const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: 'React', position: [-3, 2, 0] as [number, number, number], color: '#61dafb' },
    { name: 'Python', position: [3, 2, 0] as [number, number, number], color: '#3776ab' },
    { name: 'Java', position: [-3, -2, 0] as [number, number, number], color: '#ed8b00' },
    { name: 'Spring Boot', position: [3, -2, 0] as [number, number, number], color: '#6db33f' },
    { name: 'AutoGen AI', position: [0, 0, 2] as [number, number, number], color: '#ff6b35' },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-96">
            <Canvas
              camera={{ position: [0, 0, 8], fov: 75 }}
              style={{ background: 'transparent' }}
            >
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="purple" />
              
              {skills.map((skill) => (
                <SkillSphere
                  key={skill.name}
                  position={skill.position}
                  skill={skill.name}
                  color={skill.color}
                  isHovered={hoveredSkill === skill.name}
                  onHover={(hovered) => setHoveredSkill(hovered ? skill.name : null)}
                />
              ))}
            </Canvas>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Frontend Development</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">React.js</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">TypeScript</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-10/12"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Tailwind CSS</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Backend & AI</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Python</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Java Spring Boot</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-10/12"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">AutoGen AI</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-9/12"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
