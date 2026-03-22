import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-24">
      <div className="max-w-[1100px] relative mx-auto px-6">
        <div className="max-w-3xl">
          <motion.h1
            className="text-6xl font-bold leading-[1.1] text-gray-900 lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Specialist{' '}
            <span className="text-[#DC2626]">AI & Software Engineering</span>{' '}
            Recruitment
          </motion.h1>

          <motion.p
            className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Partnering with high-growth companies to deliver exceptional AI, software and data talent across the UK and Europe.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="mailto:hiring@knowlesrecruitment.com"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DC2626] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#B91C1C]"
            >
              Hire AI Talent
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => navigate('/opportunities')}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 px-8 py-4 text-base font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-50"
            >
              Explore Opportunities
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
