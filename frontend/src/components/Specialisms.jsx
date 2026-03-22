import React from 'react';
import { motion } from 'framer-motion';
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
    <section id="specialisms" className="py-24 sm:py-28 px-8 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC2626]">
            What we do
          </p>
          <h2 className="mx-auto mt-4 max-w-lg text-4xl font-bold text-gray-900 sm:text-5xl">
            Where we add the most value
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialisms.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#DC2626]/20 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DC2626]/10 text-[#DC2626]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specialisms;
