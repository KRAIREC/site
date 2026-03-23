import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, User, ArrowRight } from 'lucide-react';

const ClientsCandidates = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* For Clients - Dark */}
          <motion.div
            className="bg-gray-900 rounded-3xl p-10 text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Briefcase className="h-10 w-10 text-[#DC2626] mb-6" />
            
            <h2 className="text-3xl font-bold mb-4">
              For Clients
            </h2>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              We partner with high-growth businesses to deliver specialist AI and technology talent.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 flex-shrink-0" />
                <span className="text-gray-200">Retained and contingent hiring solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 flex-shrink-0" />
                <span className="text-gray-200">Targeted talent search</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 flex-shrink-0" />
                <span className="text-gray-200">Access to niche candidate networks</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 flex-shrink-0" />
                <span className="text-gray-200">Quality-driven shortlists</span>
              </li>
            </ul>
            
            <a
              href="mailto:hiring@knowlesrecruitment.com"
              className="group inline-flex items-center gap-2 rounded-full bg-[#DC2626] px-7 py-4 text-base font-semibold text-white transition-all hover:bg-[#B91C1C]"
            >
              Hire Talent
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* For Candidates - Light */}
          <motion.div
            className="bg-gray-50 rounded-3xl p-10 border border-gray-200"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <User className="h-10 w-10 text-[#DC2626] mb-6" />
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              For Candidates
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              We support ambitious professionals in securing high-impact roles in AI and technology.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 flex-shrink-0" />
                <span className="text-gray-700">Access to exclusive opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 flex-shrink-0" />
                <span className="text-gray-700">Honest market insight</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 flex-shrink-0" />
                <span className="text-gray-700">Personalised career support</span>
              </li>
            </ul>
            
            <a
              href="mailto:cvsubmit@knowlesrecruitment.com"
              className="group inline-flex items-center gap-2 rounded-full bg-[#DC2626] px-7 py-4 text-base font-semibold text-white transition-all hover:bg-[#B91C1C]"
            >
              Submit Your CV
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCandidates;
