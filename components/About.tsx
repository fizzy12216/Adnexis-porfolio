
import React from 'react';
import { Target, Users, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-b border-adnexis-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-adnexis-teal/10 text-adnexis-teal px-4 py-1 rounded-full text-sm font-bold mb-6">
              About AdNexis
            </div>
            <h2 className="text-adnexis-dark-blue text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Your Karachi Digital Marketing Partner
            </h2>
            <div className="space-y-6 text-lg text-adnexis-gray-blue leading-relaxed">
              <p>
                AdNexis – Local Business Digital Marketing Agency is a results-driven agency helping businesses in Karachi grow locally.
              </p>
              <p>
                Our mission is simple: provide measurable results through Google Maps marketing, Local SEO, social media advertising, and lead generation. We work remotely across Karachi, offering fast support, transparent reporting, and flexible online consultations.
              </p>
              <p>
                Founded by experienced marketers, AdNexis combines strategy, technology, and local market insights to ensure every campaign drives real business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-10 mb-10">
              {[
                "Strategy-Led Approach",
                "Advanced Market Insights",
                "Transparent Reporting",
                "Fast Remote Support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-adnexis-green w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-adnexis-dark-blue text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/923430418776"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-adnexis-teal font-bold text-lg hover:translate-x-1 transition-transform group"
            >
              Message Us on WhatsApp <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
             <div className="space-y-4 mt-8">
               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="Strategy" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
               <div className="bg-adnexis-teal p-6 rounded-2xl text-white">
                 <p className="text-3xl font-bold">50+</p>
                 <p className="text-sm opacity-80 uppercase tracking-widest font-bold">Local Partners</p>
               </div>
             </div>
             <div className="space-y-4">
               <div className="bg-adnexis-dark-blue p-6 rounded-2xl text-white">
                 <p className="text-3xl font-bold">Karachi</p>
                 <p className="text-sm opacity-80 uppercase tracking-widest font-bold">Primary Hub</p>
               </div>
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" alt="Team" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;