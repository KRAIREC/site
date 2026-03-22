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
            href="mailto:hiring@knowlesrecruitment.com"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DC2626] px-12 py-7 text-xl font-semibold text-white transition-all hover:bg-[#B91C1C]"
          >
            Hire Talent
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:cvsubmit@knowlesrecruitment.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 px-12 py-7 text-xl font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-white"
          >
            Submit Your CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
