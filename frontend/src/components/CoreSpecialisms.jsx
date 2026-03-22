import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Users } from 'lucide-react';

const CoreSpecialisms = () => {
  const specialisms = [
    {
      number: '01',
      icon: Brain,
      title: 'AI & Machine Learning',
      roles: ['Machine Learning Engineers', 'Applied AI Scientists', 'NLP Engineers', 'Computer Vision Specialists']
    },
    {
      number: '02',
      icon: Code,
      title: 'Software Engineering',
      roles: ['Backend Engineers', 'Full Stack Developers', 'Platform Engineers']
    },
    {
      number: '03',
      icon: Database,
      title: 'Data & Platform',
      roles: ['Data Engineers', 'MLOps Engineers', 'Analytics Engineers']
    },
    {
      number: '04',
      icon: Users,
      title: 'Leadership & Management',
      roles: ['CTO', 'Head of AI', 'Engineering Directors']
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
                  <div>
                    <p className="text-xs text-gray-400 mb-1">{spec.number}</p>
                    <Icon className="h-8 w-8 text-[#DC2626]" />
                  </div>
                  <div className="h-2 w-2 rounded-full bg-[#DC2626]" />
                </div>
                
                <h3 className="text-base font-bold text-gray-900 mb-4">
                  {spec.title}
                </h3>
                
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
