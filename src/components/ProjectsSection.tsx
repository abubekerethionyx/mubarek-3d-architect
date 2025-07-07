
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'web' | 'ai' | 'fintech';
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'web' | 'ai' | 'fintech'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI Financial Advisor',
      description: 'Intelligent financial planning system using AutoGen AI agents',
      longDescription: 'A comprehensive financial advisor application that leverages Microsoft AutoGen to create intelligent AI agents capable of analyzing market trends, providing personalized investment advice, and automating portfolio management decisions.',
      technologies: ['Python', 'AutoGen', 'React', 'FastAPI', 'PostgreSQL'],
      category: 'ai',
      image: '/placeholder.svg',
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com'
    },
    {
      id: 2,
      title: 'Fineto Trading Platform',
      description: 'High-performance trading platform with real-time data processing',
      longDescription: 'A scalable trading platform built for Fineto, handling thousands of concurrent users with real-time market data, advanced charting, and automated trading capabilities. Features include risk management, portfolio analytics, and compliance reporting.',
      technologies: ['Java', 'Spring Boot', 'React', 'WebSocket', 'Redis'],
      category: 'fintech',
      image: '/placeholder.svg',
      githubUrl: 'https://github.com'
    },
    {
      id: 3,
      title: 'AutoGen Multi-Agent System',
      description: 'Collaborative AI agents for complex problem solving',
      longDescription: 'An advanced multi-agent system using AutoGen framework where different AI agents collaborate to solve complex business problems. Each agent has specialized roles and can communicate with others to achieve optimal solutions.',
      technologies: ['Python', 'AutoGen', 'OpenAI GPT', 'Docker', 'MongoDB'],
      category: 'ai',
      image: '/placeholder.svg',
      githubUrl: 'https://github.com'
    },
    {
      id: 4,
      title: 'React Dashboard Suite',
      description: 'Modern dashboard with advanced data visualization',
      longDescription: 'A comprehensive dashboard solution built with React and modern web technologies. Features include interactive charts, real-time updates, responsive design, and integration with multiple data sources.',
      technologies: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Vite'],
      category: 'web',
      image: '/placeholder.svg',
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai': return 'bg-purple-600';
      case 'fintech': return 'bg-blue-600';
      case 'web': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 p-2 bg-slate-800/50 rounded-full">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'ai', label: 'AI & ML' },
              { key: 'fintech', label: 'Fintech' },
              { key: 'web', label: 'Web Apps' }
            ].map((item) => (
              <Button
                key={item.key}
                onClick={() => setFilter(item.key as any)}
                variant={filter === item.key ? "default" : "ghost"}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  filter === item.key 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-slate-800/50 border-slate-700 overflow-hidden hover:bg-slate-800/70 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-white/20">{'</>'}  </div>
                </div>
                <div className={`absolute top-4 left-4 px-3 py-1 ${getCategoryColor(project.category)} text-white text-sm rounded-full font-medium`}>
                  {project.category.toUpperCase()}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <Button
                    variant="ghost"
                    className="text-blue-400 hover:text-blue-300 p-0"
                  >
                    View Details →
                  </Button>
                  
                  {project.githubUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      <Github size={16} />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <Card className="bg-slate-900 border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <div className={`inline-block px-3 py-1 ${getCategoryColor(selectedProject.category)} text-white text-sm rounded-full font-medium`}>
                      {selectedProject.category.toUpperCase()}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white text-2xl p-2"
                  >
                    ×
                  </Button>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.githubUrl && (
                    <Button
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                      variant="outline"
                      className="border-gray-600 text-white hover:bg-gray-800 flex items-center gap-2"
                    >
                      <Github size={16} />
                      View Code
                    </Button>
                  )}
                  {selectedProject.liveUrl && (
                    <Button
                      onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
