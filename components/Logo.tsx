
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-adnexis-primary rounded-xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform"></div>
        <div className="absolute inset-0 bg-adnexis-primary rounded-xl -rotate-3 transition-transform flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-adnexis-accent" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-black text-adnexis-dark tracking-tighter uppercase">AdNexis</span>
        <span className="text-[10px] font-black text-adnexis-teal tracking-[0.3em] uppercase opacity-80">Local Dominance</span>
      </div>
    </div>
  );
};

export default Logo;
