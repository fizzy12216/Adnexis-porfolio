
import React from 'react';
import { Mail, MessageCircle, ArrowRight, MapPin, PhoneCall } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappUrl = "https://wa.me/923430418776";
  const email = "adnexismarketingagency@gmail.com";

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-adnexis-teal/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-12">
            <div className="space-y-6">
              <span className="text-adnexis-teal font-black uppercase tracking-[0.2em] text-xs">Let's Connect</span>
              <h2 className="text-adnexis-primary text-6xl lg:text-7xl font-black tracking-tighter leading-none">
                Scale your vision <br />with <span className="text-transparent bg-clip-text bg-gradient-to-r from-adnexis-teal to-adnexis-accent">Precision.</span>
              </h2>
              <p className="text-xl text-adnexis-muted font-medium max-w-xl">
                The fastest way to grow is to speak with experts who know the local Karachi market inside and out. Choose your preferred channel below.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="p-10 rounded-[2.5rem] bg-adnexis-accent/10 border border-adnexis-accent/20 group hover:bg-adnexis-accent transition-all duration-500">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-adnexis-accent" />
                </div>
                <h4 className="text-2xl font-black text-adnexis-dark mb-2 group-hover:text-adnexis-dark">WhatsApp</h4>
                <p className="text-adnexis-muted group-hover:text-adnexis-dark/70 font-medium mb-6">Instant consultation & fast response.</p>
                <div className="flex items-center gap-2 font-black text-adnexis-dark">
                  Message Now <ArrowRight className="w-4 h-4" />
                </div>
              </a>

              <a href={`mailto:${email}`} className="p-10 rounded-[2.5rem] bg-adnexis-primary/5 border border-adnexis-primary/10 group hover:bg-adnexis-primary transition-all duration-500">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-adnexis-primary" />
                </div>
                <h4 className="text-2xl font-black text-adnexis-dark mb-2 group-hover:text-white">Email</h4>
                <p className="text-adnexis-muted group-hover:text-white/70 font-medium mb-6">Send us your project details for review.</p>
                <div className="flex items-center gap-2 font-black text-adnexis-dark group-hover:text-white">
                  Send Email <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-adnexis-dark rounded-[3rem] p-12 text-white shadow-premium space-y-12 h-full flex flex-col justify-between">
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-white/10 rounded-2xl text-adnexis-accent">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-lg font-black uppercase tracking-widest text-adnexis-accent mb-2">Our Base</h5>
                    <p className="text-slate-300 text-lg font-medium">Karachi District, Serving Clifton, DHA, & major hubs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 bg-white/10 rounded-2xl text-adnexis-accent">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-lg font-black uppercase tracking-widest text-adnexis-accent mb-2">Direct Line</h5>
                    <p className="text-3xl font-black text-white">0343 0418776</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-4">
                <p className="text-sm font-bold text-slate-400">Trusted by local leaders across Karachi.</p>
                <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-adnexis-dark flex items-center justify-center text-[10px] font-bold">U{i}</div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-adnexis-teal border-2 border-adnexis-dark flex items-center justify-center text-[10px] font-bold">+50</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
