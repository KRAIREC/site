import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import ContactForm from './ContactForm';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Specialisms', id: 'specialisms' },
    { label: 'Clients', id: 'clients' },
    { label: 'Candidates', id: 'candidates' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-xl'
            : 'bg-white'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_precision-hire/artifacts/n0pa8pmk_image.png" 
              alt="Knowles Recruitment" 
              className="h-9 w-9"
            />
            <span className="text-lg font-semibold text-gray-900">
              Knowles Recruitment
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-[#DC2626] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#B91C1C]"
            >
              Enquire
              <ArrowUpRight size={15} />
            </button>
          </div>

          <button
            className="text-gray-900 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-gray-200 bg-white md:hidden"
            >
              <div className="max-w-[1400px] mx-auto flex flex-col gap-4 px-6 py-6">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setIsContactOpen(true);
                    setMobileOpen(false);
                  }}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-[#DC2626] px-5 py-3 text-sm font-semibold text-white"
                >
                  Enquire
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Get in Touch</DialogTitle>
            <DialogDescription className="text-gray-600">
              Let's discuss your hiring needs. We'll respond within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <ContactForm formType="enquire" onSuccess={() => setIsContactOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
