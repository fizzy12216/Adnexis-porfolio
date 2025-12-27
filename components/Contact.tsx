
import React from 'react';
import { Mail, MessageCircle, ArrowRight, MapPin, PhoneCall, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappUrl = "https://wa.me/923430418776";
  const email = "adnexismarketingagency@gmail.com";
  
  const areas = ["Saddar", "Clifton", "Defence (DHA)", "Gulshan-e-Iqbal", "North Nazimabad", "Naval Colony"];

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-adnexis-teal/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-12">
            <div className="space-y-6">
              <span className="text-adnexis-teal font-black uppercase tracking-[0.2em] text-xs">Contact Us</span>
              <h2 className="text-adnexis-primary text-6xl font-black tracking-tighter leading-none">
                Scale Your Local <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-adnexis-teal to-adnexis-accent">Dominance.</span>
              </h2>
              <p className="text-xl text-adnexis-muted font-medium max-w-xl">
                Ready to become the #1 local choice in your neighborhood? Let's discuss your growth strategy today.
              </p>
            </div>

            <div className="bg-adnexis-bg/50 p-10 rounded-[2.5rem] border border-slate-100">
                <h4 className="text-xl font-bold text-adnexis-primary mb-6 flex items-center gap-2">
                    <MapPin className="text-adnexis-teal" /> Our Prime Service Areas in Karachi
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {areas.map(area => (
                        <div key={area} className="flex items-center gap-2 text-adnexis-muted font-bold text-sm">
                            <CheckCircle2 className="w-4 h-4 text-adnexis-accent" /> {area}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <a href={whatsappUrl} target="_blank" className="p-10 rounded-[2.5rem] bg-adnexis-accent/10 border border-adnexis-accent/20 group hover:bg-adnexis-accent transition-all duration-500">
                <MessageCircle className="w-8 h-8 text-adnexis-accent group-hover:text-adnexis-dark mb-4" />
                <h4 className="text-2xl font-black text-adnexis-dark mb-2">WhatsApp</h4>
                <p className="text-adnexis-muted group-hover:text-adnexis-dark/70 font-medium mb-4">Fastest way to get a free consultation.</p>
                <span className="font-black text-adnexis-dark inline-flex items-center gap-2">Message Now <ArrowRight className="w-4 h-4" /></span>
              </a>

              <a href={`mailto:${email}`} className="p-10 rounded-[2.5rem] bg-adnexis-primary/5 border border-adnexis-primary/10 group hover:bg-adnexis-primary transition-all duration-500">
                <Mail className="w-8 h-8 text-adnexis-primary group-hover:text-white mb-4" />
                <h4 className="text-2xl font-black text-adnexis-dark group-hover:text-white mb-2">Email</h4>
                <p className="text-adnexis-muted group-hover:text-white/70 font-medium mb-4">Send us your project brief for a formal review.</p>
                <span className="font-black text-adnexis-dark group-hover:text-white inline-flex items-center gap-2">Send Mail <ArrowRight className="w-4 h-4" /></span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-adnexis-dark rounded-[3rem] p-12 text-white shadow-premium h-full flex flex-col justify-between space-y-12">
              <div className="space-y-10">
                <div>
                  <h5 className="text-lg font-black uppercase tracking-widest text-adnexis-accent mb-4">Direct Line</h5>
                  <a href="tel:03430418776" className="text-4xl font-black text-white hover:text-adnexis-accent transition-colors flex items-center gap-3">
                    <PhoneCall className="w-8 h-8" /> 0343 0418776
                  </a>
                </div>
                
                <div>
                  <h5 className="text-lg font-black uppercase tracking-widest text-adnexis-accent mb-4">Business Hours</h5>
                  <p className="text-slate-300 font-medium">Mon - Sat: 10:00 AM - 8:00 PM <br />(Available for Remote Consultations)</p>
                </div>
              </div>

              <div className="rounded-[2.5rem] overflow-hidden border border-white/10 h-64 shadow-xl">
                 <iframe 
                    title="Adnexis Karachi Service Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231613.2016480521!2d66.86475736239169!3d24.899650424578505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e0660293eb7%3A0xad6a524a919ca03!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
