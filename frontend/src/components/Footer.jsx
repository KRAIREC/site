import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <img 
              src="https://customer-assets.emergentagent.com/job_precision-hire/artifacts/n0pa8pmk_image.png" 
              alt="Knowles Recruitment" 
              className="h-12 w-12 brightness-0 invert"
            />
            <p className="text-xl font-semibold">Knowles Recruitment</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI & Software Engineering<br />Recruitment Specialists
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-[#DC2626] transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('specialisms')}
                  className="text-gray-400 hover:text-[#DC2626] transition-colors duration-200"
                >
                  Specialisms
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('clients')}
                  className="text-gray-400 hover:text-[#DC2626] transition-colors duration-200"
                >
                  Clients
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('candidates')}
                  className="text-gray-400 hover:text-[#DC2626] transition-colors duration-200"
                >
                  Candidates
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#DC2626]" />
                <a 
                  href="mailto:hello@knowlesrecruitment.com" 
                  className="text-gray-400 hover:text-[#DC2626] transition-colors duration-200"
                >
                  hello@knowlesrecruitment.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#DC2626]" />
                <a 
                  href="tel:+442012345678" 
                  className="text-gray-400 hover:text-[#DC2626] transition-colors duration-200"
                >
                  +44 20 1234 5678
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Connect</h3>
            <a 
              href="https://linkedin.com/company/knowles-recruitment" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#DC2626] transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Knowles Recruitment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
