import React from 'react';
import { motion } from 'framer-motion';
import { Target, Search, Clock, Award } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      icon: Target,
      title: 'Retained Search',
      description: 'Partnering closely with clients on critical hires, delivering a dedicated, high-touch search process focused on quality and precision.'
    },
    {
      icon: Search,
      title: 'Permanent Search',
      description: 'Supporting long-term hiring through targeted, high-quality search.'
    },
    {
      icon: Clock,
      title: 'Contract & Interim',
      description: 'Providing flexible access to specialist AI and engineering talent.'
    },
    {
      icon: Award,
      title: 'Leadership Hiring',
      description: 'Delivering senior and executive talent to scale high-performing teams.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            How We Work
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#DC2626]/10 mb-6">
                  <Icon className="h-8 w-8 text-[#DC2626]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
