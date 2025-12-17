import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileDown, FileText, Eye, X } from 'lucide-react';

const CVSection: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [viewMode, setViewMode] = useState<'card' | 'canvas'>('card');

  const cvContent = `
ABUBEKER MUBAREK
Senior Software Developer

CONTACT INFORMATION
Email: abubekermubark7545@gmail.com
Location: Ethiopia

PROFESSIONAL SUMMARY
Results-driven Senior Software Developer with strong experience in designing, developing, and maintaining scalable software applications. Graduated in Electrical and Computer Engineering and possesses hands-on expertise in full-stack development, API integration, database management, and collaborative agile environments.

TECHNICAL SKILLS
• Frontend: React, React Router, Responsive UI Design
• Backend: Python (Flask), REST APIs
• Databases: PostgreSQL, SQLAlchemy
• Authentication: Google OAuth, Firebase
• Tools: Git, Version Control, Debugging, Deployment, API Integration

PROFESSIONAL EXPERIENCE
Senior Software Developer
FINETO – Software and IoT Products | August 2021 – October 2025
• Designed, developed, and maintained software applications to meet business and technical requirements.
• Collaborated closely with cross-functional development teams to implement new features and enhance existing systems.
• Wrote clean, efficient, and maintainable code following industry standards and best practices.
• Integrated RESTful APIs and managed backend services to ensure seamless data communication.
• Worked with databases to support application requirements, optimize queries, and maintain data integrity.
• Participated in technical discussions and code reviews.
• Assisted in troubleshooting, debugging, and resolving complex technical issues.

EDUCATION
Bachelor of Science in Electrical and Computer Engineering
Dire Dawa University – Dire Dawa, Ethiopia
Graduated: 2021

LANGUAGES
English – Professional Working Proficiency

CERTIFICATION / EXPERIENCE LETTER
Experience certified by FINETO Software and IoT Product, confirming employment as a Senior Software Developer from August 2021 to October 2025.
`;

  const handleDownloadCV = () => {
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
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Abubeker_Mubarek_CV.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Curriculum Vitae
          </h2>
          <p className="text-xl text-gray-300">
            Download, preview, or view my professional resume
          </p>
        </div>

        <div className="grid gap-8">
          {/* Control Section */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <FileText className="text-blue-400" size={24} />
                CV Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 mb-6">
                <Button
                  onClick={handleDownloadCV}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <FileDown className="mr-2" size={20} />
                  Download CV
                </Button>

                <Button
                  onClick={togglePreview}
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 px-6 py-3"
                >
                  <Eye className="mr-2" size={20} />
                  {showPreview ? 'Hide Preview' : 'Show Preview'}
                </Button>

                {showPreview && (
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setViewMode('card')}
                      variant={viewMode === 'card' ? 'default' : 'outline'}
                      className={viewMode === 'card' ? 'bg-blue-600 hover:bg-blue-700' : 'border-slate-600 text-slate-300 hover:bg-slate-700'}
                    >
                      Card View
                    </Button>
                    <Button
                      onClick={() => setViewMode('canvas')}
                      variant={viewMode === 'canvas' ? 'default' : 'outline'}
                      className={viewMode === 'canvas' ? 'bg-purple-600 hover:bg-purple-700' : 'border-slate-600 text-slate-300 hover:bg-slate-700'}
                    >
                      Canvas Mode
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* CV Preview Section */}
          {showPreview && (
            <>
              {viewMode === 'card' ? (
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        <FileText className="text-purple-400" size={24} />
                        CV Preview - Card View
                      </span>
                      <Button
                        onClick={() => setShowPreview(false)}
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white"
                      >
                        <X size={16} />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">ABUBEKER MUBAREK</h3>
                      <p className="text-lg text-blue-400 mb-4">Full-Stack Developer & AI Agent Specialist</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">PROFESSIONAL SUMMARY</h4>
                      <p className="leading-relaxed">
                        Experienced Full-Stack Developer with 5+ years of expertise in React, Python, Java,
                        and cutting-edge AI Agent development using AutoGen. Passionate about crafting
                        intelligent solutions and building scalable web applications.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">TECHNICAL SKILLS</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p><strong className="text-blue-400">Frontend:</strong> React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS</p>
                          <p><strong className="text-blue-400">Backend:</strong> Python, Java, Node.js, REST APIs</p>
                        </div>
                        <div>
                          <p><strong className="text-purple-400">AI/ML:</strong> AutoGen, Machine Learning, AI Agent Development</p>
                          <p><strong className="text-purple-400">Tools:</strong> Git, Docker, AWS, Vercel</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">EXPERIENCE</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-blue-400">Senior Full-Stack Developer (2019 - Present)</h5>
                          <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Developed and maintained multiple web applications using React and Python</li>
                            <li>Implemented AI-powered features using AutoGen framework</li>
                            <li>Led team of 3 developers on various client projects</li>
                            <li>Improved application performance by 40% through optimization</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-400">AI Agent Developer (2021 - Present)</h5>
                          <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Specialized in AutoGen framework for intelligent agent systems</li>
                            <li>Built conversational AI applications for enterprise clients</li>
                            <li>Integrated AI agents with existing business workflows</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">EDUCATION</h4>
                      <p><strong className="text-blue-400">Bachelor of Science in Computer Science</strong></p>
                      <p>University of Technology (2015-2019)</p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="bg-slate-900/80 border border-slate-700 rounded-lg backdrop-blur-sm overflow-hidden">
                  <div className="bg-slate-800/50 p-4 border-b border-slate-700 flex items-center justify-between">
                    <h3 className="text-white font-semibold flex items-center gap-2">
                      <FileText className="text-purple-400" size={20} />
                      CV Preview - Canvas Mode
                    </h3>
                    <Button
                      onClick={() => setShowPreview(false)}
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white"
                    >
                      <X size={16} />
                    </Button>
                  </div>
                  <div className="p-8 bg-white text-black min-h-[600px] max-h-[800px] overflow-y-auto">
                    <div className="max-w-4xl mx-auto space-y-6 font-mono text-sm leading-relaxed">
                      <pre className="whitespace-pre-wrap">{cvContent}</pre>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CVSection;
