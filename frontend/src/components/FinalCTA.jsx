import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="contact" className="py-32 px-8 bg-gray-50">
      <div className="max-w-[900px] mx-auto text-center space-y-8">
        <h2 className="text-6xl font-bold text-gray-900 leading-tight">
          Building an AI or<br />engineering team?
        </h2>
        
        <p className="text-2xl text-gray-600 leading-relaxed">
          If the hire matters, the search approach should too.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:team@knowlesrecruitment.com?subject=Hiring%20Enquiry%20-%20Knowles%20Recruitment&body=Hi%2C%0A%0AI%E2%80%99m%20looking%20to%20hire%20and%20would%20like%20to%20discuss%20how%20Knowles%20Recruitment%20can%20support.%0A%0ACompany%3A%0A%0ARole(s)%20we%20are%20hiring%20for%3A%0A%0ALocation%3A%0A%0AAdditional%20information%3A%0A%0AThanks%2C"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DC2626] px-12 py-7 text-xl font-semibold text-white transition-all hover:bg-[#B91C1C]"
          >
            Hire Talent
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:team@knowlesrecruitment.com?subject=Client%20Enquiry%20-%20Knowles%20Recruitment&body=Hi%2C%0A%0AI%E2%80%99d%20like%20to%20speak%20with%20you%20regarding%20a%20potential%20hire.%0A%0APlease%20let%20me%20know%20a%20convenient%20time%20to%20connect.%0A%0AThanks%2C"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 px-12 py-7 text-xl font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-white"
          >
            Speak With Us
          </a>
        </div>
        
        <p className="text-sm text-gray-500 pt-4">
          Prefer to email us directly? Get in touch and we'll respond promptly.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
