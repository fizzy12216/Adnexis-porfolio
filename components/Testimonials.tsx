
import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Adnexis helped us dominate Google Maps. We've seen a 45% increase in daily calls for our Saddar-based business within just two months.",
    author: "Zohaib Khan",
    business: "Retail Hub, Saddar"
  },
  {
    quote: "The Local SEO results in Clifton have been outstanding. We are now ranking #1 for all our major service keywords.",
    author: "Sara Malik",
    business: "Aesthetic Clinic, Clifton"
  },
  {
    quote: "Our lead generation funnel is finally working. High-quality inquiries are coming in every day from DHA and Gulshan areas.",
    author: "M. Ahmed",
    business: "Real Estate Group, DHA"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-adnexis-primary text-4xl lg:text-5xl font-black text-center mb-16 tracking-tight">Success Stories in Karachi</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-adnexis-bg p-12 rounded-[2.5rem] relative border border-slate-100 hover:border-adnexis-teal/30 transition-all">
              <Quote className="absolute top-8 left-8 text-adnexis-teal opacity-10 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-adnexis-accent text-adnexis-accent" />)}
              </div>
              <p className="text-adnexis-muted font-medium italic mb-8 relative z-10 leading-relaxed text-lg">"{t.quote}"</p>
              <div>
                <p className="text-adnexis-dark font-bold text-xl">{t.author}</p>
                <p className="text-adnexis-teal text-sm font-black uppercase tracking-widest">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
