
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "AdNexis transformed our local shop's visibility. We went from 5 calls a week to 5 a day just from Google Maps.",
    author: "Zainab R.",
    business: "Home Decor Boutique, Clifton"
  },
  {
    quote: "The transparency they offer is unmatched. I can see exactly where my marketing spend is going and the return it's generating.",
    author: "Ahmed S.",
    business: "Real Estate Consultant, DHA"
  },
  {
    quote: "Best social media ad results we've had in 5 years. They truly understand the Karachi market.",
    author: "Mustafa K.",
    business: "Fitness Center, Gulshan"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-adnexis-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-adnexis-dark-blue text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-adnexis-bg p-10 rounded-3xl relative">
              <Quote className="absolute top-6 left-6 text-adnexis-teal opacity-10 w-12 h-12" />
              <p className="text-adnexis-gray-blue italic mb-8 relative z-10">"{t.quote}"</p>
              <div>
                <p className="text-adnexis-dark-blue font-bold">{t.author}</p>
                <p className="text-adnexis-teal text-xs font-semibold uppercase tracking-wider">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
