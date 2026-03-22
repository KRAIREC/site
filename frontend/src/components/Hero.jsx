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

  const specialisms = [
    'AI & Machine Learning',
    'Software Engineering',
    'Data, Platform & Infrastructure',
    'Technical Leadership'
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-28 sm:pt-36">
        {/* Subtle grid background from TechBackground is already applied globally */}
        
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#DC2626]/5 blur-[120px]" />

        <div className="max-w-[1400px] relative mx-auto px-6 pb-20 sm:pb-28">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left content */}
            <div className="max-w-2xl">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_precision-hire/artifacts/n0pa8pmk_image.png" 
                  alt="Knowles Recruitment" 
                  className="h-20 w-20"
                />
              </motion.div>

              <motion.h1
                className="text-5xl font-bold leading-[1.08] text-gray-900 sm:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Knowles<br />Recruitment
              </motion.h1>

              <motion.h2
                className="mt-6 text-3xl font-semibold text-[#DC2626] leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                AI & Software Engineering<br />Recruitment Specialists
              </motion.h2>

              <motion.p
                className="mt-7 max-w-xl text-lg leading-8 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We partner with ambitious companies to deliver exceptional AI and software engineering talent — from key individual contributors to high-impact technical leadership.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button
                  onClick={() => setIsHireOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DC2626] px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-[#B91C1C]"
                >
                  Hire Talent
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => scrollToSection('candidates')}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 px-7 py-4 text-sm font-semibold text-gray-900 transition-colors hover:border-[#DC2626] hover:bg-gray-50"
                >
                  Explore Roles
                </button>
              </motion.div>

              <motion.p
                className="mt-8 text-sm text-gray-500 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Trusted by scaling startups, product-led businesses, and engineering-led teams.
              </motion.p>
            </div>

            {/* Right glass panel */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="rounded-3xl border border-gray-200 bg-gray-50/50 p-8 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Core Specialisms
                </p>
                <div className="mt-6 space-y-3">
                  {specialisms.map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 transition-all hover:border-[#DC2626]/20 hover:shadow-sm"
                    >
                      <div>
                        <p className="text-xs text-gray-500">0{i + 1}</p>
                        <p className="mt-0.5 text-sm font-semibold text-gray-900">
                          {item}
                        </p>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-[#DC2626]" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Dialog open={isHireOpen} onOpenChange={setIsHireOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Hire Talent</DialogTitle>
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
