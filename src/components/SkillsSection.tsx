
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
      meshRef.current.scale.setScalar(isHovered ? 1.3 : 1);
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
          opacity={0.85}
          emissive={color}
          emissiveIntensity={isHovered ? 0.4 : 0.15}
          metalness={0.3}
          roughness={0.4}
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
    { name: 'Flask', position: [-3, -2, 0] as [number, number, number], color: '#000000' },
    { name: 'PostgreSQL', position: [3, -2, 0] as [number, number, number], color: '#336791' },
    { name: 'Git', position: [0, 0, 2] as [number, number, number], color: '#f05033' },
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30',
      skills: [
        { name: 'React & React Router', level: 90, description: 'Building dynamic SPAs with modern hooks and routing' },
        { name: 'Responsive UI Design', level: 85, description: 'Mobile-first, accessible interfaces' },
        { name: 'TypeScript', level: 80, description: 'Type-safe JavaScript development' },
        { name: 'Tailwind CSS', level: 85, description: 'Utility-first styling' },
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30',
      skills: [
        { name: 'Python (Flask)', level: 90, description: 'RESTful API development' },
        { name: 'REST APIs', level: 88, description: 'API design and integration' },
        { name: 'SQLAlchemy ORM', level: 82, description: 'Database abstraction layer' },
        { name: 'Authentication', level: 85, description: 'Google OAuth, Firebase Auth' },
      ]
    },
    {
      title: 'Database & DevOps',
      icon: '🗄️',
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500/30',
      skills: [
        { name: 'PostgreSQL', level: 85, description: 'Relational database design' },
        { name: 'Firebase', level: 80, description: 'Real-time NoSQL database' },
        { name: 'Git & Version Control', level: 90, description: 'Collaborative development' },
        { name: 'Deployment', level: 82, description: 'CI/CD and cloud hosting' },
      ]
    },
    {
      title: 'Soft Skills & Methodology',
      icon: '🚀',
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500/30',
      skills: [
        { name: 'Problem Solving', level: 92, description: 'Analytical thinking and debugging' },
        { name: 'Team Collaboration', level: 88, description: 'Agile teamwork and communication' },
        { name: 'Code Review', level: 85, description: 'Quality assurance and best practices' },
        { name: 'Adaptability', level: 90, description: 'Quick learning of new technologies' },
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* 3D Visualization */}
          <div className="relative">
            <div className="h-96 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm overflow-hidden">
              <Canvas
                camera={{ position: [0, 0, 8], fov: 75 }}
                style={{ background: 'transparent' }}
              >
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={1.2} color="#60a5fa" />
                <pointLight position={[-10, -10, -10]} intensity={0.8} color="#a78bfa" />
                <pointLight position={[0, 10, -5]} intensity={0.6} color="#ec4899" />

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

              {hoveredSkill && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-800/90 backdrop-blur-md px-6 py-3 rounded-full border border-blue-500/50 shadow-lg">
                  <p className="text-white font-semibold text-lg">{hoveredSkill}</p>
                </div>
              )}
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400 italic">Hover over the spheres to interact</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <Card className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-blue-500/30 p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl">
                  💻
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">4+</div>
                  <div className="text-gray-300">Years of Experience</div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 border-purple-500/30 p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl">
                  🚀
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">20+</div>
                  <div className="text-gray-300">Projects Delivered</div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-green-600/10 to-emerald-600/10 border-green-500/30 p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl">
                  🎯
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">10+</div>
                  <div className="text-gray-300">Technologies Mastered</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Detailed Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <Card
              key={category.title}
              className="bg-slate-800/40 border-slate-700/50 p-8 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-200 font-medium group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                      <Badge variant="secondary" className="bg-slate-700/50">
                        {skill.level}%
                      </Badge>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2.5 mb-1 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technologies Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React', 'TypeScript', 'Python', 'Flask', 'PostgreSQL', 'Firebase',
              'REST APIs', 'Git', 'Tailwind CSS', 'SQLAlchemy', 'OAuth', 'Responsive Design',
              'Version Control', 'Debugging', 'Deployment', 'Team Collaboration'
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-2 text-sm bg-slate-800/60 border border-slate-700/50 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:border-blue-500/50 transition-all duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
