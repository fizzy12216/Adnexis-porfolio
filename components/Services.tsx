
import React from 'react';
import { 
  MapPin, 
  Smartphone, 
  Search, 
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    icon: MapPin,
    title: "Google Maps Mastery",
    desc: "We don't just list you. We make you #1 in the Karachi local pack, driving calls and visits daily.",
    metrics: "400% avg. increase in calls"
  },
  {
    icon: TrendingUp,
    title: "Performance Ads",
    desc: "High-octane social and search ads that bypass the noise and speak directly to your buyers.",
    metrics: "3.5x Targeted ROI"
  },
  {
    icon: Search,
    title: "Localized SEO",
    desc: "Dominate search queries specific to Karachi's districts from Clifton to Gulshan.",
    metrics: "Top 3 Ranking Guarantee"
  },
  {
    icon: Smartphone,
    title: "Lead Machines",
    desc: "Optimized funnels that turn passive scrollers into high-intent inquiries instantly.",
    metrics: "60% Higher Conversion"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-adnexis-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-adnexis-teal font-extrabold text-sm uppercase tracking-[0.3em]">The AdNexis Protocol</span>
          <h2 className="text-adnexis-primary text-5xl lg:text-6xl font-black leading-tight tracking-tighter">Engineered for Scale.</h2>
          <p className="text-xl text-adnexis-muted font-medium">Strategic solutions designed specifically for the Karachi economy.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group p-10 rounded-[3rem] bg-white border border-slate-200 hover:shadow-premium hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-adnexis-accent/5 rounded-bl-[100px] pointer-events-none group-hover:bg-adnexis-accent/10 transition-colors"></div>
                
                <div className="flex justify-between items-start mb-10">
                  <div className="p-5 bg-adnexis-bg rounded-[1.5rem] text-adnexis-primary group-hover:bg-adnexis-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-slate-300 group-hover:text-adnexis-accent group-hover:rotate-45 transition-all duration-500" />
                </div>
                
                <h3 className="text-2xl font-black text-adnexis-dark mb-4">{service.title}</h3>
                <p className="text-lg text-adnexis-muted leading-relaxed mb-8">{service.desc}</p>
                
                <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-adnexis-accent"></div>
                  <span className="text-sm font-black text-adnexis-primary uppercase tracking-widest">{service.metrics}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-adnexis-primary rounded-[3.5rem] transform translate-y-4 opacity-10"></div>
          <div className="bg-adnexis-dark rounded-[3.5rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-premium">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="relative z-10 space-y-10">
              <h3 className="text-white text-4xl lg:text-6xl font-black tracking-tighter">Your business deserves <br />to be the <span className="text-adnexis-accent underline decoration-2 underline-offset-8">local leader.</span></h3>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
                Let's audit your current digital footprint and map out a growth trajectory that actually converts.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <a 
                  href="https://wa.me/923430418776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-adnexis-accent text-adnexis-dark px-14 py-6 rounded-2xl font-black text-xl hover:shadow-glow hover:scale-105 transition-all"
                >
                  Start Your Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
