
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
              <h3 className="text-3xl font-bold text-white mb-2">Senior Software Developer</h3>
              <p className="text-xl text-blue-400 mb-2">FINETO – Software and IoT Products</p>
              <p className="text-gray-400">August 2021 – October 2025 • 4 Years</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Senior Role
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Key Responsibilities & Achievements</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Designed, developed, and maintained software applications to meet business and technical requirements
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Collaborated closely with cross-functional development teams to implement new features
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Wrote clean, efficient, and maintainable code following industry standards
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Integrated RESTful APIs and managed backend services for seamless data communication
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Optimized database queries and maintained data integrity
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mentored junior developers and contributed to continuous performance improvements
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'React', 'Responsive UI', 'Python (Flask)', 'REST APIs', 'PostgreSQL',
                  'SQLAlchemy', 'Google OAuth', 'Firebase', 'Git', 'Software Architecture'
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
              <h4 className="text-xl font-semibold text-white mb-3">Education</h4>
              <div className="p-4 bg-slate-700/50 rounded-lg">
                <div className="text-xl font-bold text-white">Bachelor of Science in Electrical and Computer Engineering</div>
                <div className="text-blue-400">Dire Dawa University – Dire Dawa, Ethiopia</div>
                <div className="text-gray-400">Graduated: 2021</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ExperienceSection;
