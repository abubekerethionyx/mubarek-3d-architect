
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Code, Users, Award, MapPin, Mail, Download, ExternalLink } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: Code, label: 'Years Experience', value: '5+', color: 'text-blue-500' },
    { icon: Users, label: 'Projects Completed', value: '50+', color: 'text-green-500' },
    { icon: Award, label: 'Certifications', value: '8', color: 'text-purple-500' },
    { icon: Calendar, label: 'Lines of Code', value: '100K+', color: 'text-orange-500' }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Python', 'Java', 'Spring Boot', 'FastAPI'] },
    { category: 'AI/ML', items: ['AutoGen', 'OpenAI GPT', 'TensorFlow', 'Scikit-learn'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] }
  ];

  const handleDownloadCV = () => {
    // Create and download CV file
    const cvContent = `John Doe - Full-Stack Developer & AI Specialist

EXPERIENCE:
• 2019-Present: Full-Stack Developer at Fineto
• 2023-Present: AI Agent Development Specialist
• 2018-2019: Junior Developer & Learning Phase

SKILLS:
Frontend: React, TypeScript, Next.js, Tailwind CSS
Backend: Python, Java, Spring Boot, FastAPI
AI/ML: AutoGen, OpenAI GPT, TensorFlow, Scikit-learn
Database: PostgreSQL, MongoDB, Redis, MySQL

ACHIEVEMENTS:
• 5+ years of development experience
• 50+ completed projects
• 8 professional certifications
• 100K+ lines of code written

Contact: john.doe@email.com | LinkedIn: /in/johndoe`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'John_Doe_CV.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const handleGetInTouch = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartConversation = () => {
    // Open email client
    window.open('mailto:john.doe@email.com?subject=Let\'s Build Something Amazing Together&body=Hi John,%0D%0A%0D%0AI\'d love to discuss a potential project collaboration...', '_blank');
  };

  const handleViewWork = () => {
    // Scroll to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer crafting intelligent solutions at the intersection of technology and innovation
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="bg-card/50 backdrop-blur-sm border-border p-6 text-center hover:bg-card/70 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Bio Section */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Code className="w-10 h-10 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Full-Stack Developer</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  <span>Remote • Worldwide</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience building 
              scalable web applications and intelligent AI systems. My journey in software 
              development has been driven by curiosity and a desire to solve complex problems 
              through elegant, efficient code.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Fineto, I've spent 4 years developing robust financial applications, 
              mastering technologies like React, Python, Java, and Spring Boot. Recently, 
              I've been exploring the fascinating world of AI agent development using 
              Microsoft's AutoGen framework, creating intelligent systems that can collaborate 
              and solve complex business problems.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, mentoring junior developers, or sharing knowledge 
              with the developer community through technical blogs and workshops.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button onClick={handleDownloadCV} className="flex items-center gap-2">
                <Download size={16} />
                Download CV
              </Button>
              <Button onClick={handleGetInTouch} variant="outline" className="flex items-center gap-2">
                <Mail size={16} />
                Get in Touch
              </Button>
            </div>
          </div>
          
          {/* Experience & Skills */}
          <div className="space-y-6 animate-fade-in">
            {/* Experience Timeline */}
            <Card className="bg-card/50 backdrop-blur-sm border-border p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="text-primary" />
                Experience Timeline
              </h3>
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  
                  <div className="flex items-start space-x-4 relative">
                    <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-background z-10"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-foreground font-semibold">2019 - Present</p>
                        <Badge variant="secondary">5 years</Badge>
                      </div>
                      <p className="text-primary font-medium">Full-Stack Developer at Fineto</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Leading development of fintech applications, managing teams, and implementing scalable solutions
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 relative">
                  <div className="w-5 h-5 bg-purple-500 rounded-full border-2 border-background z-10"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-foreground font-semibold">2023 - Present</p>
                      <Badge variant="secondary">1 year</Badge>
                    </div>
                    <p className="text-primary font-medium">AI Agent Development Specialist</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Specializing in AutoGen framework and multi-agent systems
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 relative">
                  <div className="w-5 h-5 bg-green-500 rounded-full border-2 border-background z-10"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-foreground font-semibold">2018 - 2019</p>
                      <Badge variant="secondary">1 year</Badge>
                    </div>
                    <p className="text-primary font-medium">Junior Developer & Learning Phase</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Foundation building and rapid skill development
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Skills Section */}
            <Card className="bg-card/50 backdrop-blur-sm border-border p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Award className="text-primary" />
                Core Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-8 text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to work on challenging projects and collaborate with passionate teams. 
            Whether you have a complex problem to solve or an innovative idea to bring to life, let's connect!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={handleStartConversation} size="lg" className="flex items-center gap-2">
              <Mail size={18} />
              Start a Conversation
            </Button>
            <Button onClick={handleViewWork} variant="outline" size="lg" className="flex items-center gap-2">
              <ExternalLink size={18} />
              View My Work
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;
