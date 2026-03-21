import React, { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import ContactForm from './ContactForm';

const FinalCTA = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-32 px-8 bg-gray-50">
        <div className="max-w-[900px] mx-auto text-center space-y-8">
          <h2 className="text-6xl font-bold text-gray-900 leading-tight">
            Building an AI or<br />engineering team?
          </h2>
          
          <p className="text-2xl text-gray-600 leading-relaxed">
            If the hire matters, the search approach should too.
          </p>

          <div className="pt-6">
            <Button 
              onClick={() => setIsContactOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-12 py-7 text-xl font-semibold rounded-md transition-all duration-200 hover:shadow-xl"
            >
              Book a Search Brief
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Book a Search Brief</DialogTitle>
            <DialogDescription className="text-gray-600">
              Let's discuss your hiring requirements in detail. We'll respond within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <ContactForm formType="final-cta" onSuccess={() => setIsContactOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FinalCTA;
