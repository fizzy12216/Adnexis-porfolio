
import React from 'react';
import { Phone, Mail, MessageCircle, ArrowRight, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappUrl = "https://wa.me/923430418776";
  const email = "adnexismarketingagency@gmail.com";

  return (
    <section id="contact" className="py-24 bg-adnexis-dark-blue relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-adnexis-teal/20 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[4rem] shadow-3xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-10 lg:p-24 flex flex-col justify-center">
            <span className="text-adnexis-teal font-black uppercase tracking-[0.2em] text-xs mb-6">Connect with us</span>
            <h2 className="text-adnexis-dark-blue text-4xl lg:text-6xl font-black mb-8 leading-tight">
              Let’s start your <br />growth story.
            </h2>
            <p className="text-adnexis-gray-blue text-xl mb-12 font-medium leading-relaxed">
              Skip the long forms. Connect directly with our experts on WhatsApp or Email to discuss your local business scaling.
            </p>
            
            <div className="space-y-6">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-adnexis-green/10 rounded-3xl hover:bg-adnexis-green hover:text-white transition-all group">
                <div className="flex items-center gap-5">
                  <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-white group-hover:text-adnexis-green transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-lg">WhatsApp Direct</span>
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a href={`mailto:${email}`} className="flex items-center justify-between p-6 bg-adnexis-bg rounded-3xl hover:bg-adnexis-dark-blue hover:text-white transition-all group">
                <div className="flex items-center gap-5">
                  <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-white group-hover:text-adnexis-dark-blue transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-lg truncate">Email Our Agency</span>
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          <div className="relative bg-adnexis-bg/50 p-10 lg:p-24 flex flex-col justify-center border-l border-adnexis-bg">
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="text-adnexis-teal w-6 h-6" />
                  <h4 className="font-black text-2xl text-adnexis-dark-blue">Presence</h4>
                </div>
                <p className="text-adnexis-gray-blue text-lg font-medium leading-relaxed">
                  Based in Karachi’s business district, serving Clifton, DHA, Gulshan, and all major local hubs.
                </p>
              </div>

              <div className="p-10 bg-white rounded-[3rem] shadow-xl border border-adnexis-bg">
                <p className="text-adnexis-dark-blue font-black text-3xl mb-2">0343 0418776</p>
                <p className="text-adnexis-teal font-bold uppercase tracking-widest text-xs">Direct Office Line</p>
              </div>
              
              <div className="pt-8 border-t border-adnexis-bg">
                <a 
                  href="https://share.google/Y2qh3timMTocqk9xW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-adnexis-dark-blue font-black text-lg hover:text-adnexis-teal transition-colors flex items-center gap-3"
                >
                  Find us on Google Maps <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
