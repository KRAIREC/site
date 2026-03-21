import React, { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import ContactForm from './ContactForm';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isHireOpen, setIsHireOpen] = useState(false);
  const [isRolesOpen, setIsRolesOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="min-h-screen bg-white flex items-center pt-24 pb-20 px-8">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <img 
                src="https://customer-assets.emergentagent.com/job_precision-hire/artifacts/n0pa8pmk_image.png" 
                alt="Knowles Recruitment" 
                className="h-24 w-24"
              />
              
              <div className="space-y-6">
                <h1 className="text-7xl font-bold text-gray-900 tracking-tight leading-[0.95]">
                  Knowles<br />Recruitment
                </h1>
                
                <h2 className="text-3xl font-semibold text-[#DC2626] leading-tight">
                  AI & Software Engineering<br />Recruitment Specialists
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-[540px]">
                  We partner with ambitious companies to deliver exceptional AI and software engineering talent — from key individual contributors to high-impact technical leadership.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={() => setIsHireOpen(true)}
                  className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-6 text-lg font-semibold rounded-md transition-all duration-200 hover:shadow-xl"
                >
                  Hire Talent
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('candidates')}
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-[#DC2626] text-gray-900 hover:text-[#DC2626] px-8 py-6 text-lg font-semibold rounded-md transition-all duration-200"
                >
                  Explore Roles
                </Button>
              </div>

              <p className="text-sm text-gray-500 pt-4 italic">
                Trusted by scaling startups, product-led businesses, and engineering-led teams.
              </p>
            </div>

            <div className="hidden md:block relative">
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center">
                <img 
                  src="https://customer-assets.emergentagent.com/job_precision-hire/artifacts/n0pa8pmk_image.png" 
                  alt="KR Logo" 
                  className="h-64 w-64 opacity-10"
                />
              </div>
            </div>
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
