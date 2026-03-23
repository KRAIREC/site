import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Users } from 'lucide-react';

const CoreSpecialisms = () => {
  const specialisms = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      roles: ['Machine Learning Engineers', 'Applied AI Scientists', 'Natural Language Processing (NLP) Engineers', 'Computer Vision Engineers']
    },
    {
      icon: Code,
      title: 'Software Engineering',
      description: 'Supporting engineering teams building scalable, AI-enabled products and platforms.',
      roles: ['Backend Engineers', 'Full Stack Engineers', 'Platform Engineers', 'Distributed Systems Engineers']
    },
    {
      icon: Database,
      title: 'Data & Platform',
      roles: ['Data Engineers', 'MLOps Engineers', 'Analytics Engineers']
    },
    {
      icon: Users,
      title: 'AI and Engineering Leadership',
      roles: ['Chief Technology Officer (CTO)', 'Head of AI / Machine Learning', 'Director of Engineering', 'Head of Data & AI']
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          className="text-right mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Core Specialisms
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {specialisms.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.title}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#DC2626]/20 hover:shadow-sm transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="h-8 w-8 text-[#DC2626]" />
                  <div className="h-2 w-2 rounded-full bg-[#DC2626]" />
                </div>
                
                <h3 className="text-base font-bold text-gray-900 mb-4">
                  {spec.title}
                </h3>
                
                {spec.description && (
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {spec.description}
                  </p>
                )}
                
                <ul className="space-y-2">
                  {spec.roles.map((role, i) => (
                    <li key={i} className="text-sm text-gray-600">
                      {role}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreSpecialisms;
