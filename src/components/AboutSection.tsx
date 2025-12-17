
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Code, Users, Award, MapPin, Mail, Download, ExternalLink } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: Code, label: 'Years Experience', value: '4+', color: 'text-blue-500' },
    { icon: Users, label: 'Projects Completed', value: '20+', color: 'text-green-500' },
    { icon: Award, label: 'Certifications', value: '1', color: 'text-purple-500' },
    { icon: Calendar, label: 'Lines of Code', value: '100K+', color: 'text-orange-500' }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'React Router', 'Responsive UI Design'] },
    { category: 'Backend', items: ['Python', 'Flask', 'REST APIs', 'SQLAlchemy'] },
    { category: 'Database', items: ['PostgreSQL', 'Firebase'] },
    { category: 'Tools', items: ['Git', 'Version Control', 'Debugging', 'Deployment'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Team Collaboration', 'Adaptability', 'Time Management'] },
    { category: 'Languages', items: ['English (Professional)'] }
  ];

  const handleDownloadCV = () => {
    //  const handleDownloadCV = () => {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Abubeker Mubarek - CV</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: #e2e8f0;
      padding: 40px 20px;
      line-height: 1.6;
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      overflow: hidden;
    }
    
    .header {
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      padding: 50px 40px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
      animation: pulse 4s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
    
    .header h1 {
      font-size: 3em;
      margin-bottom: 10px;
      color: #ffffff;
      position: relative;
      z-index: 1;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    .header .title {
      font-size: 1.5em;
      color: #e0e7ff;
      position: relative;
      z-index: 1;
      font-weight: 300;
    }
    
    .contact-info {
      display: flex;
      justify-content: center;
      gap: 30px;
      margin-top: 20px;
      position: relative;
      z-index: 1;
      flex-wrap: wrap;
    }
    
    .contact-info span {
      color: #e0e7ff;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .content {
      padding: 40px;
    }
    
    .section {
      margin-bottom: 35px;
    }
    
    .section-title {
      font-size: 1.8em;
      color: #60a5fa;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 3px solid #3b82f6;
      background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .job-title {
      font-size: 1.3em;
      color: #93c5fd;
      margin-bottom: 5px;
      font-weight: 600;
    }
    
    .company {
      color: #c4b5fd;
      font-size: 1.1em;
      margin-bottom: 5px;
    }
    
    .date {
      color: #94a3b8;
      margin-bottom: 15px;
      font-style: italic;
    }
    
    .description {
      color: #cbd5e1;
      margin-bottom: 20px;
    }
    
    ul {
      list-style: none;
      margin-left: 0;
    }
    
    li {
      padding: 8px 0;
      padding-left: 25px;
      position: relative;
      color: #cbd5e1;
    }
    
    li::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #60a5fa;
      font-size: 1.2em;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-top: 15px;
    }
    
    .skill-category {
      background: rgba(59, 130, 246, 0.1);
      padding: 15px;
      border-radius: 10px;
      border-left: 4px solid #3b82f6;
    }
    
    .skill-category h4 {
      color: #60a5fa;
      margin-bottom: 8px;
      font-size: 1.1em;
    }
    
    .skill-category p {
      color: #cbd5e1;
      font-size: 0.95em;
    }
    
    .footer {
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      padding: 30px;
      text-align: center;
      color: #94a3b8;
      border-top: 2px solid #3b82f6;
    }
    
    @media print {
      body {
        background: white;
        color: black;
      }
      .container {
        box-shadow: none;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>ABUBEKER MUBAREK</h1>
      <div class="title">Senior Software Developer</div>
      <div class="contact-info">
        <span>📧 abubekermubark7545@gmail.com</span>
        <span>📍 Ethiopia</span>
      </div>
    </div>
    
    <div class="content">
      <div class="section">
        <h2 class="section-title">Professional Summary</h2>
        <p class="description">
          Results-driven Senior Software Developer with strong experience in designing, developing, and maintaining scalable software applications. Graduated in Electrical and Computer Engineering and possesses hands-on expertise in full-stack development, API integration, database management, and collaborative agile environments. Passionate about problem-solving, system optimization, and continuous learning.
        </p>
      </div>
      
      <div class="section">
        <h2 class="section-title">Professional Experience</h2>
        <div class="job-title">Senior Software Developer</div>
        <div class="company">FINETO – Software and IoT Products</div>
        <div class="date">August 2021 – October 2025</div>
        <ul>
          <li>Designed, developed, and maintained software applications to meet business and technical requirements</li>
          <li>Collaborated closely with cross-functional development teams to implement new features and enhance existing systems</li>
          <li>Wrote clean, efficient, and maintainable code following industry standards and best practices</li>
          <li>Integrated RESTful APIs and managed backend services to ensure seamless data communication</li>
          <li>Worked with databases to support application requirements, optimize queries, and maintain data integrity</li>
          <li>Participated in technical discussions and code reviews contributing to continuous improvements</li>
          <li>Assisted in troubleshooting, debugging, and resolving complex technical issues in development and production</li>
        </ul>
      </div>
      
      <div class="section">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h4>Frontend</h4>
            <p>React, React Router, Responsive UI Design</p>
          </div>
          <div class="skill-category">
            <h4>Backend</h4>
            <p>Python (Flask), REST APIs, SQLAlchemy</p>
          </div>
          <div class="skill-category">
            <h4>Databases</h4>
            <p>PostgreSQL, Firebase</p>
          </div>
          <div class="skill-category">
            <h4>Authentication</h4>
            <p>Google OAuth, Firebase Auth</p>
          </div>
          <div class="skill-category">
            <h4>Tools & Practices</h4>
            <p>Git, Version Control, Debugging, Deployment</p>
          </div>
          <div class="skill-category">
            <h4>Soft Skills</h4>
            <p>Problem Solving, Team Collaboration, Adaptability</p>
          </div>
        </div>
      </div>
      
      <div class="section">
        <h2 class="section-title">Education</h2>
        <div class="job-title">Bachelor of Science in Electrical and Computer Engineering</div>
        <div class="company">Dire Dawa University – Dire Dawa, Ethiopia</div>
        <div class="date">Graduated: 2021</div>
      </div>
      
      <div class="section">
        <h2 class="section-title">Languages</h2>
        <p class="description">English – Professional Working Proficiency</p>
      </div>
      
      <div class="section">
        <h2 class="section-title">Certification / Experience Letter</h2>
        <p class="description">
          Experience certified by FINETO Software and IoT Product, confirming employment as a Senior Software Developer from August 2021 to October 2025.
        </p>
      </div>
    </div>
    
    <div class="footer">
      <p>This CV was generated from abubekermubarek.com</p>
      <p style="margin-top: 10px;">© ${new Date().getFullYear()} Abubeker Mubarek. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Abubeker_Mubarek_CV.html';
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
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
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
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Results-driven Senior Software Developer with strong experience in designing,
              developing, and maintaining scalable software applications. Graduated in Electrical
              and Computer Engineering and possesses hands-on expertise in full-stack development,
              API integration, database management, and collaborative agile environments.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At FINETO, I've spent 4 years designing, developing, and maintaining software applications,
              meeting business and technical requirements. I have collaborated closely with cross-functional
              development teams to implement new features and enhance existing systems, while writing
              clean, efficient, and maintainable code following industry standards.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am passionate about problem-solving, system optimization, and continuous learning,
              with a proven ability to contribute effectively to team-driven projects.
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
                        <p className="text-foreground font-semibold">2021 - 2025</p>
                        <Badge variant="secondary">4 years</Badge>
                      </div>
                      <p className="text-primary font-medium">Senior Software Developer at FINETO</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Designing, developing, and maintaining scalable software applications
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
                      <p className="text-foreground font-semibold">2021</p>
                      <Badge variant="secondary">Graduated</Badge>
                    </div>
                    <p className="text-primary font-medium">B.Sc. in Electrical and Computer Engineering</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Dire Dawa University
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
