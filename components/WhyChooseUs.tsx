
import React from 'react';
import { CheckCircle2, Database, Map, Cloud } from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle2,
    title: "Proven Results",
    description: "A track record of scaling small businesses to market leaders."
  },
  {
    icon: Database,
    title: "Data-Driven Strategies",
    description: "Decisions backed by numbers, not just creative instincts."
  },
  {
    icon: Map,
    title: "Deep Karachi Market Knowledge",
    description: "We understand the local consumer behavior in every district."
  },
  {
    icon: Cloud,
    title: "Remote & Flexible",
    description: "Lower overhead for us means more competitive pricing for you."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-adnexis-teal/10 text-adnexis-teal px-4 py-1 rounded-full text-sm font-bold mb-4">
            Local Expertise
          </div>
          <h2 className="text-adnexis-dark-blue text-4xl lg:text-5xl font-bold mb-6">Why Choose AdNexis?</h2>
          <p className="text-adnexis-gray-blue text-lg">
            We combine international marketing standards with a deep understanding of the local Karachi landscape to deliver growth that matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center p-6 group">
                <div className="mb-4 bg-adnexis-bg p-3 rounded-2xl group-hover:bg-adnexis-teal group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-adnexis-dark-blue font-bold text-xl mb-2">{reason.title}</h4>
                  <p className="text-adnexis-gray-blue text-base leading-relaxed max-w-sm">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative max-w-4xl mx-auto h-[350px] md:h-[500px]">
           <div className="absolute inset-0 bg-adnexis-dark-blue rounded-[2.5rem] translate-x-2 translate-y-2 opacity-5"></div>
           <div className="relative h-full overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white">
             <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Team collaboration" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-adnexis-dark-blue/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl text-adnexis-dark-blue shadow-xl max-w-sm">
              <p className="text-4xl font-black text-adnexis-teal mb-1">100%</p>
              <p className="font-bold text-lg mb-2 leading-tight">Karachi Focused Strategy</p>
              <p className="text-sm text-adnexis-gray-blue leading-relaxed">
                Every campaign is handcrafted to resonate with local customers and drive measurable ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
