
import React from 'react';
import { 
  MapPin, 
  Target, 
  Zap, 
  BarChart3,
  ArrowRight
} from 'lucide-react';

const pillars = [
  {
    icon: MapPin,
    title: "Local Dominance",
    description: "Complete Google Maps & Local SEO mastery. We ensure your business is the first one customers see when they search in Karachi."
  },
  {
    icon: Zap,
    title: "Performance Ads",
    description: "High-ROI Facebook, Instagram, and Google ad campaigns designed to generate immediate leads and measurable revenue growth."
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Conversion-optimized funnels that turn passive scrollers into loyal customers using advanced targeting and local market data."
  },
  {
    icon: BarChart3,
    title: "Growth Strategy",
    description: "Comprehensive digital consulting to scale your brand locally. From social media management to long-term market positioning."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <p className="text-adnexis-teal font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</p>
          <h2 className="text-adnexis-dark-blue text-4xl lg:text-6xl font-black mb-8 leading-tight">Solutions built for Karachi’s unique market.</h2>
          <div className="w-20 h-2 bg-adnexis-teal rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="group p-10 rounded-[2.5rem] bg-adnexis-bg/30 border border-adnexis-bg hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="mb-8 bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm group-hover:bg-adnexis-dark-blue group-hover:text-white transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-adnexis-dark-blue text-2xl font-black mb-4">{pillar.title}</h3>
                <p className="text-adnexis-gray-blue text-lg leading-relaxed mb-8">{pillar.description}</p>
                <a 
                  href="https://wa.me/923430418776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-adnexis-teal font-bold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-adnexis-dark-blue rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h3 className="text-white text-3xl lg:text-5xl font-black mb-8">Ready to grow?</h3>
            <p className="text-adnexis-gray-blue text-xl mb-12 max-w-2xl mx-auto font-medium">
              Join the 50+ local businesses scaling with Adnexis.
            </p>
            <a 
              href="https://wa.me/923430418776"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-adnexis-green text-white text-xl font-bold px-12 py-5 rounded-2xl shadow-lg hover:scale-105 transition-all"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
