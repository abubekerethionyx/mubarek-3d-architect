
import React from 'react';
import { Card } from '@/components/ui/card';

const ExperienceSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Experience
        </h2>
        
        <Card className="bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-800/70 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Full-Stack Developer</h3>
              <p className="text-xl text-blue-400 mb-2">Fineto</p>
              <p className="text-gray-400">2019 - Present • 4+ Years</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Current Position
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Key Responsibilities</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Developed and maintained scalable financial applications serving thousands of users
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Built robust APIs using Java Spring Boot and Python Flask frameworks
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Created responsive React.js interfaces with modern UI/UX principles
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Implemented AI-driven features using AutoGen for intelligent automation
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'React.js', 'TypeScript', 'Python', 'Java', 'Spring Boot', 
                  'PostgreSQL', 'Docker', 'AWS', 'Git', 'AutoGen AI'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm hover:bg-slate-600 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Impact & Achievements</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">50%</div>
                  <div className="text-sm text-gray-400">Performance Improvement</div>
                </div>
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">15+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-400">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime Achieved</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ExperienceSection;
