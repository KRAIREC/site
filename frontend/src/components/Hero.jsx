import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import ContactForm from './ContactForm';

const Hero = () => {
  const [isHireOpen, setIsHireOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
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
              <button
                onClick={() => setIsHireOpen(true)}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DC2626] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#B91C1C]"
              >
                Hire AI Talent
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('candidates')}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 px-8 py-4 text-base font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-50"
              >
                Explore Opportunities
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Dialog open={isHireOpen} onOpenChange={setIsHireOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Hire AI Talent</DialogTitle>
            <DialogDescription className="text-gray-600">
              Tell us about your hiring requirements and we'll get back to you promptly.
            </DialogDescription>
          </DialogHeader>
          <ContactForm formType="hire-talent" onSuccess={() => setIsHireOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Hero;
