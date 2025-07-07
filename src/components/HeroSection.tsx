
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';

const RotatingCube: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      
      // Add floating motion
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial 
        color="#ff69b4" 
        transparent 
        opacity={0.9} 
        wireframe
        emissive="#ff69b4"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const FloatingParticles: React.FC = () => {
  const particlesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  const particles = [];
  for (let i = 0; i < 50; i++) {
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'];
    const color = colors[i % colors.length];
    
    particles.push(
      <mesh
        key={i}
        position={[
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        ]}
      >
        <sphereGeometry args={[0.05 + Math.random() * 0.1, 8, 8]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    );
  }

  return <group ref={particlesRef}>{particles}</group>;
};

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-pulse-slow"></div>
      
      {/* Three.js Canvas */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#3b82f6" />
          <pointLight position={[0, 10, -10]} intensity={0.6} color="#ec4899" />
          <FloatingParticles />
          <RotatingCube />
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-float">
              Abubeker
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              Mubarek
            </span>
          </h1>
          
          <div className="mb-6 space-y-2">
            <p className="text-3xl md:text-4xl text-gray-200 font-light tracking-wide">
              Full-Stack Developer
            </p>
            <p className="text-2xl md:text-3xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
              & AI Agent Specialist
            </p>
          </div>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Crafting intelligent solutions with 5+ years of expertise in React, Python, Java, 
            and cutting-edge AI Agent development using AutoGen
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={scrollToAbout}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="mr-2">Explore My Work</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Button>
            
            <Button
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-gray-300 text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm bg-white/10"
            >
              <span className="mr-2">Get In Touch</span>
              <span className="transition-transform group-hover:translate-x-1">✉</span>
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
