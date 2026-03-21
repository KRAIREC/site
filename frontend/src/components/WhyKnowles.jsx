import React from 'react';
import { Layers, Filter, Handshake } from 'lucide-react';

const WhyKnowles = () => {
  const pillars = [
    {
      icon: Layers,
      title: 'Depth over surface',
      description: 'We understand the difference between an impressive CV and the right technical hire.'
    },
    {
      icon: Filter,
      title: 'Precision over volume',
      description: 'Every shortlist is selective, relevant, and commercially grounded.'
    },
    {
      icon: Handshake,
      title: 'Partnership over transactions',
      description: 'We invest in long-term hiring outcomes, not one-off placements.'
    }
  ];

  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 text-center mb-20">
          Why clients work with us
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#DC2626] bg-opacity-10">
                  <Icon className="h-8 w-8 text-[#DC2626]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {pillar.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyKnowles;
