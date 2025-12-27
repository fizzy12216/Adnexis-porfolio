
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo.tsx';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Growth', id: 'about' },
    { label: 'Solutions', id: 'services' },
    { label: 'Insights', id: 'insights' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-500 rounded-3xl border border-white/20 px-6 sm:px-10 h-20 flex justify-between items-center ${scrolled ? 'glass shadow-premium' : 'bg-transparent'}`}>
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo className="h-10" />
          </div>

          <nav className="hidden md:flex space-x-12 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-adnexis-dark font-extrabold text-sm uppercase tracking-widest hover:text-adnexis-teal transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-adnexis-accent hover:after:w-full after:transition-all"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-adnexis-primary text-white px-8 py-3.5 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-adnexis-dark transition-all shadow-lg flex items-center gap-2 group"
            >
              Consult Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-adnexis-dark p-2 rounded-xl glass">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 glass rounded-[2.5rem] shadow-premium p-10 space-y-6 animate-in fade-in zoom-in duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-adnexis-dark font-black text-2xl py-2 border-b border-slate-200/50"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="block w-full bg-adnexis-primary text-white text-center py-6 rounded-2xl font-black text-lg uppercase tracking-widest mt-6"
          >
            Consultation
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
