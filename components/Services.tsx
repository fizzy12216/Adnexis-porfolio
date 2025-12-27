
import React from 'react';
import { 
  MapPin, 
  Smartphone, 
  Search, 
  TrendingUp,
  Target,
  Users,
  PieChart,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    icon: Target,
    title: "Strategic Local Business Growth",
    desc: "A performance-driven framework to scale Karachi business revenue by capturing high-intent local demand."
  },
  {
    icon: PieChart,
    title: "GMB optimization & Management",
    desc: "Comprehensive Google Business Profile management following 2026 standards to dominate local search clusters."
  },
  {
    icon: MapPin,
    title: "Google Maps Marketing (GMM)",
    desc: "Technical map optimization to secure top-tier placement in the Karachi Local 3-Pack for maximum visibility."
  },
  {
    icon: Search,
    title: "Advanced Local SEO Services",
    desc: "Keyword-focused search optimization targeting localized terms like 'services in Clifton' and 'business in DHA'."
  },
  {
    icon: Smartphone,
    title: "Performance Digital Marketing",
    desc: "Integrated digital solutions focusing on measurable ROI through search visibility and content authority."
  },
  {
    icon: Users,
    title: "Localized Social Media Ads",
    desc: "High-conversion Facebook and Instagram ad campaigns tailored for Karachi's unique demographic behaviors."
  },
  {
    icon: TrendingUp,
    title: "Direct Lead Generation Funnels",
    desc: "Optimized conversion paths designed to turn local traffic into verified business inquiries via WhatsApp and calls."
  }
];

const Services: React.FC = () => {
  const whatsappUrl = "https://wa.me/923430418776";

  return (
    <section id="services" className="py-32 bg-adnexis-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-adnexis-teal font-extrabold text-sm uppercase tracking-[0.3em]">Authority Solutions</span>
          <h2 className="text-adnexis-primary text-5xl font-black leading-tight tracking-tighter">Growth Optimization Services.</h2>
          <p className="text-xl text-adnexis-muted font-medium">Engineered for Answer Engines, Google Maps, and sustainable business growth.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:shadow-premium hover:-translate-y-2 transition-all duration-500">
                <div className="p-5 bg-adnexis-bg rounded-2xl text-adnexis-primary group-hover:bg-adnexis-primary group-hover:text-white transition-all mb-8 inline-block">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-adnexis-dark mb-4">{service.title}</h3>
                <p className="text-adnexis-muted leading-relaxed mb-6 font-medium">{service.desc}</p>
                <a 
                  href={whatsappUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-adnexis-teal font-bold gap-2 group-hover:gap-3 transition-all cursor-pointer"
                >
                  Verify Strategy <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center relative z-20">
            <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-adnexis-primary text-white px-14 py-6 rounded-2xl font-black text-xl hover:shadow-glow hover:scale-105 transition-all shadow-xl active:scale-95 cursor-pointer"
            >
                Claim Your Growth Strategy
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
