import React from 'react';
import { Brain, Code, Database, Users } from 'lucide-react';

const Specialisms = () => {
  const specialisms = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Applied ML, research engineering, MLOps, LLM, NLP, computer vision, and AI product talent.'
    },
    {
      icon: Code,
      title: 'Software Engineering',
      description: 'Backend, frontend, full-stack, platform, and performance-focused engineering talent.'
    },
    {
      icon: Database,
      title: 'Data, Platform & Infrastructure',
      description: 'Data engineering, cloud infrastructure, DevOps, platform, and scalable systems hiring.'
    },
    {
      icon: Users,
      title: 'Technical Leadership',
      description: 'Engineering managers, heads of engineering, AI leaders, and strategic technical hires.'
    }
  ];

  return (
    <section id="specialisms" className="py-32 px-8 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 text-center mb-20">
          Where we add the most value
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {specialisms.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white p-10 rounded-lg border border-gray-200 hover:border-[#DC2626] transition-all duration-300 hover:shadow-lg group"
              >
                <Icon className="h-12 w-12 text-[#DC2626] mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specialisms;
