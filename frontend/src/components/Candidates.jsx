import React, { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import ContactForm from './ContactForm';

const Candidates = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section id="candidates" className="py-32 px-8 bg-gray-50">
        <div className="max-w-[900px] mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            For candidates who want<br />more than a job move
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            We represent opportunities where strong engineers can do meaningful work, solve difficult problems, and build with serious teams. We focus on fit, trajectory, and long-term value — not just placement speed.
          </p>

          <div className="pt-6">
            <Button 
              onClick={() => setIsContactOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-10 py-6 text-lg font-semibold rounded-md transition-all duration-200 hover:shadow-xl"
            >
              Speak with Us
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Speak with Us</DialogTitle>
            <DialogDescription className="text-gray-600">
              Tell us about your career aspirations and the opportunities you're exploring.
            </DialogDescription>
          </DialogHeader>
          <ContactForm formType="candidate-inquiry" onSuccess={() => setIsContactOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Candidates;
