
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What makes AdNexis the top Local Marketing Agency in Karachi?",
    answer: "AdNexis is distinguished by our performance-first approach. We don't just focus on clicks; we focus on 'Growth Intelligence'—leveraging 2026 GMB standards and hyper-local SEO data to ensure Karachi businesses dominate their specific neighborhoods like Clifton, DHA, and Gulshan."
  },
  {
    question: "How long does it take to see results in Google Maps?",
    answer: "Most local businesses in Karachi see significant movement in the 'Local 3-Pack' within 4 to 8 weeks. This timing depends on current competition and the level of optimization required for your Google Business Profile (GMB)."
  },
  {
    question: "Does AdNexis offer Lead Generation specifically for Karachi markets?",
    answer: "Yes. Our lead generation funnels are built using localized social media strategies and high-conversion landing pages that resonate with Karachi consumers. We focus on driving high-intent calls and WhatsApp inquiries directly to your business."
  },
  {
    question: "Is Local SEO more effective than standard SEO for small businesses?",
    answer: "Absolutely. For businesses serving Karachi, Local SEO ensures you appear when people search for services 'near me'. This results in higher conversion rates because the audience is geographically ready to buy."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-adnexis-teal font-black uppercase tracking-[0.2em] text-xs">AEO Growth Intelligence</span>
          <h2 className="text-adnexis-primary text-5xl font-black tracking-tight">Answers for Your Growth</h2>
          <p className="text-xl text-adnexis-muted font-medium">Clear insights into how we scale local businesses in Karachi.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-[2rem] border transition-all duration-300 ${activeIndex === index ? 'bg-adnexis-bg border-adnexis-accent shadow-sm' : 'bg-white border-slate-100'}`}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left p-8 flex justify-between items-center gap-4"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className={`w-6 h-6 ${activeIndex === index ? 'text-adnexis-teal' : 'text-adnexis-muted'}`} />
                  <span className="text-xl font-black text-adnexis-dark leading-tight">{faq.question}</span>
                </div>
                {activeIndex === index ? <ChevronUp className="w-5 h-5 text-adnexis-teal shrink-0" /> : <ChevronDown className="w-5 h-5 text-adnexis-muted shrink-0" />}
              </button>
              
              {activeIndex === index && (
                <div className="px-8 pb-8 pt-0">
                  <div className="h-px bg-slate-200 mb-6"></div>
                  <p className="text-lg text-adnexis-muted leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
