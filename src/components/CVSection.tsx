
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileDown, FileText } from 'lucide-react';

const CVSection: React.FC = () => {
  const handleDownloadCV = () => {
    // Create a simple CV content as a downloadable file
    const cvContent = `
ABUBEKER MUBAREK
Full-Stack Developer & AI Agent Specialist

CONTACT INFORMATION
Email: contact@abubekermubarek.com
Phone: +1 (555) 123-4567
Location: Remote/Available Worldwide

PROFESSIONAL SUMMARY
Experienced Full-Stack Developer with 5+ years of expertise in React, Python, Java, and cutting-edge AI Agent development using AutoGen. Passionate about crafting intelligent solutions and building scalable web applications.

TECHNICAL SKILLS
• Frontend: React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
• Backend: Python, Java, Node.js, REST APIs
• AI/ML: AutoGen, Machine Learning, AI Agent Development
• Databases: PostgreSQL, MongoDB, MySQL
• Tools: Git, Docker, AWS, Vercel

EXPERIENCE
Senior Full-Stack Developer (2019 - Present)
• Developed and maintained multiple web applications using React and Python
• Implemented AI-powered features using AutoGen framework
• Led team of 3 developers on various client projects
• Improved application performance by 40% through optimization

AI Agent Developer (2021 - Present)
• Specialized in AutoGen framework for intelligent agent systems
• Built conversational AI applications for enterprise clients
• Integrated AI agents with existing business workflows

EDUCATION
Bachelor of Science in Computer Science
University of Technology (2015-2019)

PROJECTS
• Portfolio Website - React, Three.js, TypeScript
• AI Chat Application - AutoGen, Python, React
• E-commerce Platform - Full-stack development

LANGUAGES
• English (Fluent)
• Additional languages as applicable
`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Abubeker_Mubarek_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Curriculum Vitae
          </h2>
          <p className="text-xl text-gray-300">
            Download or view my professional resume
          </p>
        </div>

        <div className="grid gap-8">
          {/* Download Section */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <FileDown className="text-blue-400" size={24} />
                Download CV
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Get a copy of my latest curriculum vitae in text format.
              </p>
              <Button
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <FileDown className="mr-2" size={20} />
                Download CV
              </Button>
            </CardContent>
          </Card>

          {/* CV Preview Section */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <FileText className="text-purple-400" size={24} />
                CV Preview
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
        </div>
      </div>
    </div>
  );
};

export default CVSection;
