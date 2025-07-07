
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience building 
              scalable web applications and intelligent AI systems. My journey in software 
              development has been driven by curiosity and a desire to solve complex problems 
              through elegant code.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              At Fineto, I've spent 4 years developing robust financial applications, 
              mastering technologies like React, Python, Java, and Spring Boot. Recently, 
              I've been exploring the fascinating world of AI agent development using 
              Microsoft's AutoGen framework.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Experience Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-white font-semibold">2019 - Present</p>
                    <p className="text-gray-400">Full-Stack Developer at Fineto</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div>
                    <p className="text-white font-semibold">2023 - Present</p>
                    <p className="text-gray-400">AI Agent Development Specialist</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <div>
                    <p className="text-white font-semibold">2018 - 2019</p>
                    <p className="text-gray-400">Junior Developer & Learning Phase</p>
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

export default AboutSection;
