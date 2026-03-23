import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMobileOpen(false);
  };

  const navLinks = [
    { label: 'About Us', id: 'about' },
    { label: 'Specialisms', id: 'specialisms' },
    { label: 'Clients', id: 'clients' },
    { label: 'Candidates', id: 'candidates' },
    { label: 'Opportunities', path: '/opportunities' },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-xl'
          : 'bg-white'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 py-5">
        <a href="/" className="flex items-center gap-4">
          <img 
            src="https://customer-assets.emergentagent.com/job_precision-hire/artifacts/n0pa8pmk_image.png" 
            alt="Knowles Recruitment" 
            className="h-16 w-16"
          />
          <span className="text-2xl font-semibold text-gray-900">
            Knowles Recruitment
          </span>
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => link.path ? navigate(link.path) : scrollToSection(link.id)}
              className="relative text-[15px] font-medium text-gray-700 transition-colors hover:text-gray-900 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
          
          <button
            onClick={() => scrollToSection('contact')}
            className="rounded-lg bg-[#DC2626] px-7 py-3 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#B91C1C] hover:shadow-lg hover:-translate-y-0.5"
          >
            Contact
          </button>
        </div>

        <button
          className="text-gray-900 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200 bg-white lg:hidden"
          >
            <div className="max-w-[1400px] mx-auto flex flex-col gap-1 px-8 py-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => link.path ? navigate(link.path) : scrollToSection(link.id)}
                  className="text-left py-3 text-[15px] font-medium text-gray-700 transition-colors hover:text-gray-900"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setMobileOpen(false);
                }}
                className="mt-4 rounded-lg bg-[#DC2626] px-7 py-4 text-[15px] font-semibold text-white text-center"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
