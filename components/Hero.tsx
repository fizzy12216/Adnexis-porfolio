
import React from 'react';
import { ArrowRight, BarChart3, MapPin, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100vh] flex items-center bg-adnexis-bg pt-32 pb-24 overflow-hidden bg-grid-pattern">
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-adnexis-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-adnexis-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-adnexis-primary text-xs font-extrabold tracking-widest uppercase shadow-sm border border-slate-200/60 transition-all hover:border-adnexis-accent">
                <span className="relative flex h-2 w-2 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-adnexis-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-adnexis-accent"></span>
                </span>
                Karachi's #1 ROI Engine
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-adnexis-dark leading-[0.9] tracking-tighter">
                Precision <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-adnexis-primary to-adnexis-teal">Local Growth.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-adnexis-muted max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Scaling Karachi’s local businesses through data-driven visibility and performance-first marketing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a 
                href="https://wa.me/923430418776"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-adnexis-primary text-white text-lg font-bold px-12 py-5 rounded-2xl shadow-xl hover:shadow-adnexis-primary/20 hover:scale-[1.02] transition-all group gap-3"
              >
                Scale Your Business
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={scrollToServices}
                className="inline-flex items-center justify-center glass text-adnexis-primary text-lg font-bold px-12 py-5 rounded-2xl hover:bg-white transition-all border border-slate-200"
              >
                Our Solutions
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12 pt-10 border-t border-slate-200/60 mt-12">
              <div className="flex items-center gap-3">
                <TrendingUp className="text-adnexis-accent w-6 h-6" />
                <div>
                  <span className="block text-2xl font-bold text-adnexis-dark">3.5x</span>
                  <span className="text-[10px] uppercase tracking-widest font-black text-adnexis-muted">Avg. ROAS</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-adnexis-teal w-6 h-6" />
                <div>
                  <span className="block text-2xl font-bold text-adnexis-dark">15+</span>
                  <span className="text-[10px] uppercase tracking-widest font-black text-adnexis-muted">Districts Covered</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative z-10 p-4 bg-white/40 backdrop-blur-sm rounded-[3rem] shadow-premium overflow-hidden border border-white/50">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda50a5f4a?auto=format&fit=crop&q=80&w=1200" 
                alt="Karachi Business Growth" 
                className="rounded-[2.5rem] object-cover w-full h-[500px] lg:h-[650px] brightness-90 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-adnexis-dark/40 to-transparent"></div>
            </div>

            {/* Interactive Stat Cards */}
            <div className="absolute top-10 -left-10 glass p-6 rounded-3xl shadow-premium z-20 animate-float hidden lg:block border-adnexis-accent/20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-adnexis-accent rounded-2xl text-adnexis-dark">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black text-adnexis-muted uppercase tracking-tighter">New Conversions</p>
                  <p className="text-2xl font-black text-adnexis-dark">+240%</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 -right-6 glass p-6 rounded-3xl shadow-premium z-20 hidden lg:block border-adnexis-teal/20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-adnexis-primary rounded-2xl text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black text-adnexis-muted uppercase tracking-tighter">Google Maps Rank</p>
                  <p className="text-2xl font-black text-adnexis-dark">Top 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
