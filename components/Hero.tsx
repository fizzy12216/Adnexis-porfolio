
import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-adnexis-bg pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-adnexis-teal text-xs font-bold tracking-[0.15em] uppercase shadow-sm border border-adnexis-bg">
                Performance-Driven Strategy
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-adnexis-dark-blue leading-[0.95] tracking-tighter">
                Scale Your <br />
                <span className="text-adnexis-teal">Local Presence.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-adnexis-gray-blue max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Adnexis specializes in turning digital visibility into physical foot traffic for Karachi’s top businesses.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/923430418776"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-adnexis-dark-blue text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-xl hover:bg-adnexis-teal transition-all group gap-3"
              >
                Grow Your Business
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={scrollToServices}
                className="inline-flex items-center justify-center bg-white text-adnexis-dark-blue text-lg font-bold px-10 py-5 rounded-2xl border border-adnexis-bg shadow-sm hover:shadow-md transition-all"
              >
                View Solutions
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10 pt-10 border-t border-adnexis-bg mt-12">
              <div className="text-center lg:text-left">
                <span className="block text-3xl font-black text-adnexis-dark-blue">150+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-adnexis-gray-blue">Campaigns</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-3xl font-black text-adnexis-dark-blue">24/7</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-adnexis-gray-blue">Support</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-3xl font-black text-adnexis-dark-blue">ROI</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-adnexis-gray-blue">Focused</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 p-4 bg-white rounded-[3rem] shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Strategic Growth" 
                className="rounded-[2.5rem] object-cover w-full h-[400px] lg:h-[550px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-adnexis-dark-blue/20 to-transparent"></div>
            </div>
            {/* Minimalist Stat Card */}
            <div className="absolute -bottom-6 -left-6 bg-adnexis-green text-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block">
              <p className="text-4xl font-black mb-1">Growth.</p>
              <p className="text-sm font-bold opacity-90">Driven by Data.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
