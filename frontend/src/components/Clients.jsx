import React, { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import ContactForm from './ContactForm';
import { Target, TrendingUp, Filter, Briefcase } from 'lucide-react';

const Clients = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const features = [
    { icon: Briefcase, text: 'Retained and contingent search' },
    { icon: TrendingUp, text: 'Individual contributor to leadership hiring' },
    { icon: Filter, text: 'Selective shortlists, not volume' },
    { icon: Target, text: 'Search support across scaling and transformation' }
  ];

  return (
    <>
      <section id="clients" className="py-32 px-8 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-8">
            For companies building<br />serious technical teams
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed text-center mb-16 max-w-[800px] mx-auto">
            Whether you are making your first specialist hire or scaling an established engineering function, we deliver targeted shortlists shaped by technical depth, market knowledge, and commercial fit.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <Icon className="h-6 w-6 text-[#DC2626] flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-900 font-medium">{item.text}</span>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => setIsContactOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-10 py-6 text-lg font-semibold rounded-md transition-all duration-200 hover:shadow-xl"
            >
              Start a Search
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Start a Search</DialogTitle>
            <DialogDescription className="text-gray-600">
              Let's discuss your technical hiring needs in detail.
            </DialogDescription>
          </DialogHeader>
          <ContactForm formType="start-search" onSuccess={() => setIsContactOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Clients;
