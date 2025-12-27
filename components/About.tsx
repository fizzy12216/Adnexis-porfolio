
import React from 'react';
import { Target, CheckCircle, BarChart, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  const advantages = [
    { icon: Target, title: "Google Maps Mastery", text: "We specialize in the 2026 GMB landscape, ensuring your business stays pinned at the top." },
    { icon: BarChart, title: "Transparent Reporting", text: "No vanity metrics. You get clear data on calls, directions, and leads generated." },
    { icon: ShieldCheck, title: "Remote Support & Flexibility", text: "Expert marketing support available remotely with flexible consultations to fit your schedule." },
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
              alt="About Adnexis Karachi Marketing" 
              className="rounded-[3rem] shadow-premium relative z-10 w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 glass p-10 rounded-[2.5rem] shadow-premium z-20 max-w-xs">
              <p className="text-4xl font-black text-adnexis-primary mb-1">Karachi</p>
              <p className="text-sm font-bold text-adnexis-muted uppercase tracking-widest">Your Dedicated Marketing Partner</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-adnexis-primary text-5xl font-black tracking-tight leading-tight">
                About Adnexis – <br />
                <span className="text-adnexis-teal">Your Karachi Marketing Partner</span>
              </h2>
              <p className="text-lg text-adnexis-muted leading-relaxed font-medium">
                Adnexis is a performance-driven agency dedicated to helping local businesses in Karachi dominate their neighborhoods. From Saddar to Clifton, we leverage deep local market insights to drive real-world growth. Our core expertise lies in Google Maps Marketing, Local SEO, and high-conversion Social Media Ads.
              </p>
            </div>
            
            <div className="grid gap-8">
              {advantages.map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="p-4 bg-adnexis-bg rounded-2xl group-hover:bg-adnexis-primary group-hover:text-white transition-all">
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
                className="inline-flex items-center gap-4 bg-adnexis-dark text-white px-10 py-5 rounded-2xl font-bold hover:bg-adnexis-teal transition-all shadow-lg"
              >
                Start Growing Locally
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
