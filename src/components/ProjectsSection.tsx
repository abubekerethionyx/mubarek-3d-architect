
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Eye, Code, Zap } from 'lucide-react';

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
      title: 'Ethionyx AI Tutor',
      description: 'AI-powered personalized tutoring platform for interactive learning',
      longDescription: 'An intelligent educational platform that leverages advanced AI models to provide personalized tutoring sessions, adaptive learning paths, and real-time feedback to help students master complex subjects.',
      technologies: ['Next.js', 'OpenAI', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      category: 'ai',
      image: '/projects/tutor.png',
      githubUrl: 'https://github.com/ethionyx/online-tutor',
      liveUrl: 'https://tutor.ethionyx.com/'

    },

    {
      id: 2,
      title: 'Madecare Health Platform',
      description: 'Comprehensive healthcare management and patient care system',
      longDescription: 'A sophisticated healthcare platform developed to streamline patient management, medical records, and provider coordination. Features include real-time scheduling, secure data handling, and an intuitive interface for both patients and healthcare professionals.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      category: 'web',
      image: '/placeholder.svg',
      githubUrl: 'https://github.com/ethionyx/medicare',
      liveUrl: 'https://medicare.ethionyx.com/'
    },
    {
      id: 3,
      title: 'React Dashboard Suite',
      description: 'Modern dashboard with advanced data visualization',
      longDescription: 'A comprehensive dashboard solution built with React and modern web technologies. Features include interactive charts, real-time updates, responsive design, and integration with multiple data sources.',
      technologies: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Vite'],
      category: 'web',
      image: '/placeholder.svg',
      githubUrl: 'https://github.com/ethionyx/ai_dashboard',
      liveUrl: 'https://home.ethionyx.com'
    },
    {
      id: 4,
      title: 'Ethionyx CRM SaaS',
      description: 'Comprehensive customer relationship management and business analytics platform',
      longDescription: 'A powerful SaaS solution designed to streamline customer interactions, sales pipelines, and business growth. Features include real-time analytics, automated workflows, and secure data management for modern enterprises.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      category: 'web',
      image: '/placeholder.svg',
      githubUrl: 'https://github.com/ethionyx/crm',
      liveUrl: 'https://crm.ethionyx.com/'
    },

  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'ai': return {
        color: 'bg-gradient-to-r from-purple-500 to-violet-600',
        icon: Zap,
        accent: 'border-purple-500/30'
      };
      case 'fintech': return {
        color: 'bg-gradient-to-r from-blue-500 to-cyan-600',
        icon: Code,
        accent: 'border-blue-500/30'
      };
      case 'web': return {
        color: 'bg-gradient-to-r from-green-500 to-emerald-600',
        icon: Eye,
        accent: 'border-green-500/30'
      };
      default: return {
        color: 'bg-gradient-to-r from-gray-500 to-slate-600',
        icon: Code,
        accent: 'border-gray-500/30'
      };
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover my latest work in AI, fintech, and web development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 animate-fade-in">
          <div className="flex flex-wrap gap-2 p-1.5 bg-card/50 backdrop-blur-sm border border-border rounded-2xl">
            {[
              { key: 'all', label: 'All Projects', count: projects.length },
              { key: 'ai', label: 'AI & ML', count: projects.filter(p => p.category === 'ai').length },
              { key: 'fintech', label: 'Fintech', count: projects.filter(p => p.category === 'fintech').length },
              { key: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length }
            ].map((item) => (
              <Button
                key={item.key}
                onClick={() => setFilter(item.key as any)}
                variant={filter === item.key ? "default" : "ghost"}
                className={`rounded-xl px-4 py-2 transition-all duration-300 flex items-center gap-2 ${filter === item.key
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
              >
                {item.label}
                <Badge variant="secondary" className="text-xs">
                  {item.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const categoryInfo = getCategoryInfo(project.category);
            const IconComponent = categoryInfo.icon;

            return (
              <Card
                key={project.id}
                className={`group bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in ${categoryInfo.accent}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video bg-gradient-to-br from-muted to-background relative overflow-hidden">
                  <div className={`absolute inset-0 ${categoryInfo.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300"></div>

                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-16 h-16 border-2 border-current rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-current rounded-lg rotate-45 animate-pulse delay-300"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <IconComponent size={80} className="text-foreground/20 group-hover:text-foreground/30 transition-colors duration-300" />
                    </div>
                  </div>

                  <div className={`absolute top-4 left-4 ${categoryInfo.color} text-primary-foreground text-sm rounded-full font-medium px-3 py-1 shadow-lg flex items-center gap-1.5`}>
                    <IconComponent size={14} />
                    {project.category.toUpperCase()}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-primary-foreground text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Click to explore
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary-foreground hover:bg-primary p-0 font-medium group-hover:translate-x-1 transition-transform duration-200"
                    >
                      View Details →
                    </Button>

                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground hover:text-foreground hover:bg-accent"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                        >
                          <Github size={16} />
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground hover:text-foreground hover:bg-accent"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank');
                          }}
                        >
                          <ExternalLink size={16} />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <Card className="bg-card/95 backdrop-blur-md border-border max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {selectedProject.title}
                    </h3>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 ${getCategoryInfo(selectedProject.category).color} text-primary-foreground text-sm rounded-full font-medium shadow-lg`}>
                      {React.createElement(getCategoryInfo(selectedProject.category).icon, { size: 16 })}
                      {selectedProject.category.toUpperCase()}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedProject(null)}
                    className="text-muted-foreground hover:text-foreground hover:bg-destructive hover:text-destructive-foreground rounded-full p-3 transition-all duration-200"
                    size="sm"
                  >
                    ×
                  </Button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="aspect-video bg-gradient-to-br from-muted to-background rounded-xl border border-border mb-6 relative overflow-hidden">
                      <div className={`absolute inset-0 ${getCategoryInfo(selectedProject.category).color} opacity-20`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {React.createElement(getCategoryInfo(selectedProject.category).icon, {
                          size: 100,
                          className: "text-foreground/20"
                        })}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Code size={20} className="text-primary" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      {selectedProject.githubUrl && (
                        <Button
                          onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                          variant="outline"
                          className="w-full flex items-center gap-3 hover:bg-accent/50"
                        >
                          <Github size={18} />
                          View Source Code
                        </Button>
                      )}
                      {selectedProject.liveUrl && (
                        <Button
                          onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                          className="w-full flex items-center gap-3 bg-primary hover:bg-primary/90"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
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
