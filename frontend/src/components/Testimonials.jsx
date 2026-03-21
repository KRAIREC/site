import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Knowles Recruitment understood our technical requirements at a level most agencies never reach. The shortlist was exceptional — every candidate was genuinely qualified and culturally aligned.",
      author: "Sarah Chen",
      title: "Head of Engineering, TechScale AI",
      featured: true
    },
    {
      quote: "We needed a senior ML engineer who could lead our research efforts. The precision and market knowledge demonstrated throughout the search was remarkable.",
      author: "James Martin",
      title: "CTO, DataCore Systems"
    },
    {
      quote: "Finally, a recruitment partner who speaks our language and understands the nuances of technical hiring. This is how specialist search should work.",
      author: "Emma Richardson",
      title: "VP of Engineering, CloudNative Co"
    }
  ];

  const featured = testimonials.find(t => t.featured);
  const secondary = testimonials.filter(t => !t.featured);

  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 text-center mb-20">
          Trusted by hiring leaders<br />who need precision
        </h2>

        <div className="space-y-8">
          <div className="bg-gray-50 p-12 rounded-2xl border border-gray-200">
            <Quote className="h-12 w-12 text-[#DC2626] mb-6" />
            <p className="text-2xl text-gray-900 leading-relaxed mb-8 font-medium">
              "{featured.quote}"
            </p>
            <div>
              <p className="font-bold text-gray-900 text-lg">{featured.author}</p>
              <p className="text-gray-600">{featured.title}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {secondary.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#DC2626] transition-all duration-300">
                <Quote className="h-8 w-8 text-[#DC2626] mb-4" />
                <p className="text-lg text-gray-900 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
