import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import ContactForm from './ContactForm';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? 'bg-white border-b border-gray-200 shadow-sm' : 'bg-white'
      }`}>
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_precision-hire/artifacts/n0pa8pmk_image.png" 
              alt="Knowles Recruitment Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-semibold text-gray-900 tracking-tight">
              Knowles Recruitment
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#DC2626] transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('specialisms')}
              className="text-gray-700 hover:text-[#DC2626] transition-colors duration-200 font-medium"
            >
              Specialisms
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="text-gray-700 hover:text-[#DC2626] transition-colors duration-200 font-medium"
            >
              Clients
            </button>
            <button 
              onClick={() => scrollToSection('candidates')}
              className="text-gray-700 hover:text-[#DC2626] transition-colors duration-200 font-medium"
            >
              Candidates
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#DC2626] transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </nav>

          <Button 
            onClick={() => setIsContactOpen(true)}
            className="bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-md px-6 py-2.5 font-semibold transition-all duration-200 hover:shadow-lg"
          >
            Book a Search Brief
          </Button>
        </div>
      </header>

      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Book a Search Brief</DialogTitle>
            <DialogDescription className="text-gray-600">
              Let's discuss your hiring needs. We'll respond within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <ContactForm formType="search-brief" onSuccess={() => setIsContactOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
