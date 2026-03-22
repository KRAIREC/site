import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Briefcase, Users } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Shield, label: 'AI & Software Specialists' },
    { icon: Globe, label: 'UK & Europe Coverage' },
    { icon: Briefcase, label: 'Permanent & Contract' },
    { icon: Users, label: 'Specialist Networks' },
  ];

  return (
    <section className="border-y border-gray-200 bg-gray-50/40 py-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            Trusted by scaling technology businesses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <Icon size={18} className="text-[#DC2626]" />
                  <span className="font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
