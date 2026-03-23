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
              href="mailto:team@knowlesrecruitment.com?subject=Hiring%20Enquiry%20-%20Knowles%20Recruitment&body=Hi%2C%0A%0AI%E2%80%99m%20looking%20to%20hire%20and%20would%20like%20to%20discuss%20how%20Knowles%20Recruitment%20can%20support.%0A%0ACompany%3A%0A%0ARole(s)%20we%20are%20hiring%20for%3A%0A%0ALocation%3A%0A%0AAdditional%20information%3A%0A%0AThanks%2C"
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
          
          <motion.p
            className="mt-6 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Prefer to email us directly? Get in touch and we'll respond promptly.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
