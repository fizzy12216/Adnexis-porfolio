
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg viewBox="0 0 320 80" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.2 60.5V31.2H10.4V26.5H15.2V22.2C15.2 14.8 19.5 10.5 27.2 10.5C30.4 10.5 33.2 11.2 34.8 11.8V16.8C33.2 16.2 31.2 15.8 28.5 15.8C23.5 15.8 21.2 18.5 21.2 23.2V26.5H33.5V31.2H21.2V60.5H15.2Z" fill="transparent"/>
        {/* Simplified professional representation of the 'Adnexis' typography based on the user image */}
        <text x="0" y="58" className="font-sans font-bold italic" style={{ fill: '#0D3B66', fontSize: '54px', letterSpacing: '-2px', fontStyle: 'normal' }}>
          Adne
        </text>
        {/* Custom 'x' with the growth arrow */}
        <g transform="translate(142, 10)">
          <path d="M10 48L45 5" stroke="#0D3B66" strokeWidth="10" strokeLinecap="round" />
          <path d="M45 48L10 5" stroke="#0D3B66" strokeWidth="10" strokeLinecap="round" />
          <path d="M45 5V25" stroke="#0D3B66" strokeWidth="8" strokeLinecap="round" />
          <path d="M45 5H25" stroke="#0D3B66" strokeWidth="8" strokeLinecap="round" />
        </g>
        <text x="195" y="58" className="font-sans font-bold" style={{ fill: '#0D3B66', fontSize: '54px', letterSpacing: '-2px' }}>
          is
        </text>
      </svg>
    </div>
  );
};

export default Logo;
