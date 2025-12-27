
import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  MapPin, 
  TrendingUp, 
  Search, 
  Target, 
  Smartphone, 
  Users 
} from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/923430418776";

  const orbitServices = [
    { icon: MapPin, color: 'text-adnexis-teal', label: 'Maps' },
    { icon: Search, color: 'text-adnexis-primary', label: 'SEO' },
    { icon: TrendingUp, color: 'text-adnexis-accent', label: 'ROI' },
    { icon: Target, color: 'text-adnexis-primary', label: 'Target' },
    { icon: Smartphone, color: 'text-adnexis-teal', label: 'Mobile' },
    { icon: Users, color: 'text-adnexis-primary', label: 'Social' },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-adnexis-bg pt-28 pb-12 overflow-hidden bg-grid-pattern">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-adnexis-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-adnexis-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10">
        <div className="grid lg:grid-cols-[4fr_1fr] gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: SEO Optimized Copy (80% on Desktop) */}
          <div className="space-y-10 py-12 text-center lg:text-left">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-adnexis-primary text-[11px] font-black tracking-[0.15em] uppercase shadow-sm border border-slate-200/60">
                <span className="relative flex h-2 w-2 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-adnexis-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-adnexis-accent"></span>
                </span>
                #1 Local ROI Marketing Agency in Karachi
              </div>
              
              <h1 className="text-5xl md:text-7xl xl:text-9xl font-black text-adnexis-dark leading-[1.05] lg:leading-[0.85] tracking-tighter max-w-5xl">
                Adnexis – <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-adnexis-primary via-adnexis-teal to-adnexis-accent block mt-4">
                  Local Business Growth Experts
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-adnexis-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Boost your calls, leads, and customers with Google Maps marketing, Local SEO, and social media advertising.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-adnexis-primary text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-xl hover:shadow-glow hover:scale-[1.02] transition-all group gap-3"
              >
                Get Free Consultation
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <button 
                onClick={scrollToServices}
                className="inline-flex items-center justify-center glass text-adnexis-primary text-lg font-bold px-10 py-5 rounded-2xl hover:bg-white transition-all border border-slate-200 group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10 pt-10 border-t border-slate-200/60">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-adnexis-teal/10 rounded-xl text-adnexis-teal">
                        <TrendingUp size={22} />
                    </div>
                    <div>
                        <p className="text-base font-black text-adnexis-dark">3.5x ROAS</p>
                        <p className="text-[11px] text-adnexis-muted uppercase tracking-wider font-bold">Average ROI</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-adnexis-primary/10 rounded-xl text-adnexis-primary">
                        <Search size={22} />
                    </div>
                    <div>
                        <p className="text-base font-black text-adnexis-dark">Top 3 Rank</p>
                        <p className="text-[11px] text-adnexis-muted uppercase tracking-wider font-bold">Maps Dominance</p>
                    </div>
                </div>
            </div>
          </div>
          
          {/* RIGHT SIDE: Perfected Rotating Visual (20% on Desktop, Hidden on Mobile/Tablet) */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[600px] w-full">
            <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Central Hub */}
                <div className="z-30 w-44 h-44 bg-adnexis-primary rounded-[3rem] flex items-center justify-center shadow-glow border-8 border-white animate-float relative overflow-hidden group/hub">
                  <div className="text-white flex flex-col items-center relative z-10">
                    <TrendingUp size={48} className="text-adnexis-accent mb-2" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-center">Growth<br/>Leader</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-adnexis-teal to-adnexis-primary opacity-0 group-hover/hub:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Orbit Path Lines */}
                <div className="absolute w-[440px] h-[440px] rounded-full border border-adnexis-primary/10 pointer-events-none"></div>
                <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-adnexis-teal/20 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '40s' }}></div>

                {/* Orbiting Icons Container */}
                <div className="orbit-container animate-spin-slow">
                  {orbitServices.map((Service, idx) => {
                    const angle = (idx / orbitServices.length) * 360;
                    return (
                      <div 
                        key={idx} 
                        className="orbiting-wrapper"
                        style={{
                          transform: `rotate(${angle}deg) translateY(-220px)`
                        }}
                      >
                        {/* Counter-rotating child to keep everything upright and labels perfectly centered */}
                        <div className="animate-spin-reverse flex flex-col items-center justify-center">
                          <div className="glass p-5 rounded-[2.2rem] shadow-premium border border-white hover:scale-125 transition-all duration-300 cursor-pointer group bg-white relative flex flex-col items-center">
                             <Service.icon className={`w-10 h-10 ${Service.color}`} />
                             
                             {/* Perfectly Aligned Label */}
                             <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none scale-90 group-hover:scale-100">
                               <div className="bg-adnexis-dark text-white text-[9px] px-3 py-1.5 rounded-lg whitespace-nowrap font-black uppercase tracking-[0.25em] shadow-xl border border-white/10">
                                 {Service.label}
                               </div>
                               {/* Little arrow for label */}
                               <div className="w-2 h-2 bg-adnexis-dark rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                             </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Background Large Overlay Icon */}
                <div className="absolute bottom-0 right-0 opacity-[0.02] -z-10 pointer-events-none">
                  <Search size={350} className="text-adnexis-primary" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
