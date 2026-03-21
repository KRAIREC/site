import React from 'react';
import { FileText, Map, Search, List, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    { icon: FileText, title: 'Define the brief', description: 'Deep understanding of role, team, and commercial context' },
    { icon: Map, title: 'Map the market', description: 'Identify and research relevant talent pools' },
    { icon: Search, title: 'Approach and qualify talent', description: 'Direct outreach with technical and cultural assessment' },
    { icon: List, title: 'Deliver a focused shortlist', description: 'Selective, relevant candidates ready for interview' },
    { icon: CheckCircle, title: 'Support through close', description: 'Ongoing guidance through offer and onboarding' }
  ];

  return (
    <section className="py-32 px-8 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 text-center mb-20">
          A more considered search process
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#DC2626] transition-all duration-300 hover:shadow-lg space-y-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DC2626] text-white font-bold text-lg mx-auto">
                      {index + 1}
                    </div>
                    <Icon className="h-8 w-8 text-[#DC2626] mx-auto" />
                    <h3 className="text-lg font-bold text-gray-900 text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
