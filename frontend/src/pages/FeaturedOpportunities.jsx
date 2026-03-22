import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Input } from '../components/ui/input';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FeaturedOpportunities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('all');
  const [jobType, setJobType] = useState('all');

  const roles = [
    {
      title: 'Partner, AI & Engineering',
      location: 'London',
      salary: 'Up to £400,000 + equity',
      type: 'Permanent',
      description: 'Senior leadership role driving AI strategy and engineering capability.'
    },
    {
      title: 'AI Strategy & Adoption Lead',
      location: 'London (Hybrid)',
      salary: '£110,000 – £150,000 + bonus',
      type: 'Permanent',
      description: 'Strategic role focused on embedding AI across business functions.'
    },
    {
      title: 'Head of AI / Machine Learning',
      location: 'London',
      salary: '£130,000 – £180,000 + equity',
      type: 'Permanent',
      description: 'Lead AI roadmap and build a high-performing machine learning function.'
    },
    {
      title: 'AI Product Engineer',
      location: 'London',
      salary: '£85,000 – £115,000',
      type: 'Permanent',
      description: 'Build AI-powered product features across engineering and ML systems.'
    },
    {
      title: 'Senior Machine Learning Engineer',
      location: 'London (Hybrid)',
      salary: '£90,000 – £120,000 + bonus',
      type: 'Permanent',
      description: 'Design and deploy production-grade machine learning models.'
    },
    {
      title: 'AI Engineer (LLMs & Generative AI)',
      location: 'London / Remote',
      salary: '£80,000 – £110,000',
      type: 'Permanent',
      description: 'Develop applications powered by large language models and generative AI.'
    },
    {
      title: 'MLOps Engineer',
      location: 'London (Hybrid)',
      salary: '£75,000 – £100,000',
      type: 'Permanent',
      description: 'Build and scale ML infrastructure, pipelines and deployment systems.'
    },
    {
      title: 'NLP Engineer',
      location: 'London / Hybrid',
      salary: '£75,000 – £105,000',
      type: 'Permanent',
      description: 'Develop NLP models and language-based AI systems.'
    },
    {
      title: 'Computer Vision Engineer',
      location: 'London',
      salary: '£80,000 – £110,000',
      type: 'Permanent',
      description: 'Work on advanced computer vision solutions across image and video systems.'
    },
    {
      title: 'Data Engineer (AI Platforms)',
      location: 'Remote (UK-based)',
      salary: '£65,000 – £90,000',
      type: 'Permanent',
      description: 'Build scalable data infrastructure to support AI and ML systems.'
    }
  ];

  const filteredRoles = roles.filter(role => {
    const matchesSearch = role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          role.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = location === 'all' || role.location.toLowerCase().includes(location.toLowerCase());
    const matchesType = jobType === 'all' || role.type.toLowerCase() === jobType.toLowerCase();
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Featured Opportunities
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              A selection of high-impact roles across AI, engineering and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 px-6 bg-white border-b border-gray-200">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 rounded-full border-gray-300 focus:border-[#DC2626] focus:ring-[#DC2626]"
              />
            </div>
            
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="w-full md:w-[200px] h-12 rounded-full border-gray-300">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="london">London</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="uk">UK Wide</SelectItem>
              </SelectContent>
            </Select>

            <Select value={jobType} onValueChange={setJobType}>
              <SelectTrigger className="w-full md:w-[200px] h-12 rounded-full border-gray-300">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="permanent">Permanent</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#DC2626]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#DC2626] transition-colors">
                  {role.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-[#DC2626]" />
                    {role.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="h-4 w-4 text-[#DC2626]" />
                    {role.type}
                  </div>
                </div>
                
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  {role.salary}
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {role.description}
                </p>
                
                <a
                  href="mailto:hiring@knowlesrecruitment.com"
                  className="inline-flex items-center gap-2 text-[#DC2626] font-semibold hover:gap-3 transition-all"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>

          {filteredRoles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No roles match your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Curated Strip */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Curated, not crowded
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We focus on a small number of high-quality opportunities, working closely with our clients to deliver roles that genuinely align with your experience and ambitions.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Don't see the right role?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            We work on a range of opportunities that aren't always advertised.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:cvsubmit@knowlesrecruitment.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#DC2626] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#B91C1C]"
            >
              Submit Your CV
              <ArrowRight size={18} />
            </a>
            <a
              href="mailto:hiring@knowlesrecruitment.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 px-8 py-4 text-base font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-50"
            >
              Speak With Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturedOpportunities;
