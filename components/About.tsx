
import React from 'react';
import { Target, CheckCircle, BarChart, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  const advantages = [
    { icon: Target, title: "Precision Targeting", text: "We don't just find people; we find customers ready to buy in Karachi." },
    { icon: BarChart, title: "Data Transparency", text: "Every Rupee spent is tracked. You see the ROI in real-time." },
    { icon: ShieldCheck, title: "Local Authority", text: "Dominating local search results and Google Maps pack consistently." },
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-adnexis-teal/5 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
              alt="AdNexis Strategy" 
              className="rounded-[3rem] shadow-premium relative z-10 w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-10 right-10 glass p-10 rounded-[2.5rem] shadow-premium z-20 max-w-xs border-white/40">
              <p className="text-5xl font-black text-adnexis-primary mb-2">50+</p>
              <p className="text-sm font-bold text-adnexis-muted uppercase tracking-widest">Active Local Campaigns in Karachi</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-adnexis-primary text-5xl font-black tracking-tight leading-none">
                Not just another agency. <br />
                <span className="text-adnexis-teal">Your Growth Engine.</span>
              </h2>
              <p className="text-lg text-adnexis-muted leading-relaxed font-medium">
                AdNexis bridges the gap between digital potential and local reality. Founded on the principle of performance-driven results, we focus exclusively on Karachi's competitive landscape.
              </p>
            </div>
            
            <div className="grid gap-8">
              {advantages.map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="p-4 bg-adnexis-bg rounded-2xl group-hover:bg-adnexis-primary group-hover:text-white transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-adnexis-primary mb-1">{item.title}</h4>
                    <p className="text-adnexis-muted leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <a 
                href="https://wa.me/923430418776"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-adnexis-dark text-white px-10 py-5 rounded-2xl font-bold hover:bg-adnexis-teal transition-all shadow-lg"
              >
                Learn Our Methodology
                <CheckCircle className="w-5 h-5 text-adnexis-accent" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
