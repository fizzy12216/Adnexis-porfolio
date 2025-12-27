
import React from 'react';
import Logo from './Logo.tsx';

const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/923430418776";
  const facebookUrl = "https://www.facebook.com/adnexis";
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-6 max-w-sm">
            <Logo className="h-10" />
            <p className="text-adnexis-muted font-medium text-lg">
              Adnexis – Helping Karachi Businesses Grow Locally. Specialized in high-impact GMB and Local SEO.
            </p>
            <a 
                href={whatsappUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-adnexis-accent text-adnexis-dark px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest shadow-sm hover:shadow-glow transition-all inline-block"
            >
                WhatsApp Us
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
            <div className="space-y-6">
              <h5 className="text-adnexis-dark font-black text-sm uppercase tracking-widest">Solutions</h5>
              <nav className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('services')} className="text-adnexis-muted font-bold hover:text-adnexis-teal transition-colors text-left text-sm">GMB Optimization</button>
                <button onClick={() => scrollToSection('services')} className="text-adnexis-muted font-bold hover:text-adnexis-teal transition-colors text-left text-sm">Local SEO</button>
                <button onClick={() => scrollToSection('services')} className="text-adnexis-muted font-bold hover:text-adnexis-teal transition-colors text-left text-sm">Lead Generation</button>
              </nav>
            </div>
            
            <div className="space-y-6">
              <h5 className="text-adnexis-dark font-black text-sm uppercase tracking-widest">Company</h5>
              <nav className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('about')} className="text-adnexis-muted font-bold hover:text-adnexis-teal transition-colors text-left text-sm">About Us</button>
                <button onClick={() => scrollToSection('insights')} className="text-adnexis-muted font-bold hover:text-adnexis-teal transition-colors text-left text-sm">Insights</button>
                <button onClick={() => scrollToSection('contact')} className="text-adnexis-muted font-bold hover:text-adnexis-teal transition-colors text-left text-sm">Contact</button>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-adnexis-muted text-xs font-bold uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Adnexis. Empowering Local Commerce.
          </p>
          <div className="flex gap-8">
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-adnexis-muted hover:text-adnexis-teal font-black text-xs uppercase tracking-widest transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
