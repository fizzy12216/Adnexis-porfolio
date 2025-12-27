
import React from 'react';
import Logo from './Logo.tsx';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white py-16 border-t border-adnexis-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div 
              className="cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Logo className="h-7" />
            </div>
            <p className="text-adnexis-gray-blue text-sm max-w-xs text-center md:text-left leading-relaxed">
              Leading performance-driven local marketing for businesses in Karachi.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-adnexis-dark-blue font-bold hover:text-adnexis-teal transition-colors text-xs uppercase tracking-[0.15em]"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-adnexis-dark-blue font-bold hover:text-adnexis-teal transition-colors text-xs uppercase tracking-[0.15em]"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('insights')}
                className="text-adnexis-dark-blue font-bold hover:text-adnexis-teal transition-colors text-xs uppercase tracking-[0.15em]"
              >
                Insights
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-adnexis-dark-blue font-bold hover:text-adnexis-teal transition-colors text-xs uppercase tracking-[0.15em]"
              >
                Contact
              </button>
            </nav>
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="text-adnexis-gray-blue text-[10px] font-medium uppercase tracking-[0.2em] opacity-60">
                &copy; {new Date().getFullYear()} Adnexis. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
