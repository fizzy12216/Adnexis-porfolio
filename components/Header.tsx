
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header height
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
    { label: 'About', id: 'about' },
    { label: 'Solutions', id: 'services' },
    { label: 'Expertise', id: 'why-us' },
    { label: 'Insights', id: 'insights' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-adnexis-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo className="h-9" />
          </div>

          <nav className="hidden md:flex space-x-10 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-adnexis-dark-blue/80 hover:text-adnexis-teal transition-all font-semibold text-sm uppercase tracking-widest"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-adnexis-dark-blue text-white px-7 py-3 rounded-xl font-bold hover:bg-adnexis-teal transition-all shadow-lg flex items-center gap-2"
            >
              Contact
            </button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-adnexis-dark-blue p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-adnexis-bg px-4 py-8 space-y-4 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-adnexis-dark-blue font-bold text-xl py-4 border-b border-adnexis-bg/50"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="block w-full bg-adnexis-dark-blue text-white text-center py-5 rounded-2xl font-bold text-lg mt-6"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
