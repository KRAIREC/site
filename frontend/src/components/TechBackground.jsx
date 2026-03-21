import React from 'react';

const TechBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Subtle gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
      
      {/* Neural network pattern - more visible */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.25]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="neural-grid" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Grid lines */}
            <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#DC2626" strokeWidth="0.5" opacity="0.15"/>
            
            {/* Neural nodes */}
            <circle cx="0" cy="0" r="2.5" fill="#DC2626" opacity="0.3"/>
            <circle cx="60" cy="30" r="2" fill="#DC2626" opacity="0.25"/>
            <circle cx="120" cy="60" r="2.5" fill="#DC2626" opacity="0.3"/>
            <circle cx="30" cy="90" r="2" fill="#DC2626" opacity="0.25"/>
            <circle cx="90" cy="120" r="2" fill="#DC2626" opacity="0.25"/>
            
            {/* Connection lines */}
            <line x1="0" y1="0" x2="60" y2="30" stroke="#DC2626" strokeWidth="0.5" opacity="0.12"/>
            <line x1="60" y1="30" x2="120" y2="60" stroke="#DC2626" strokeWidth="0.5" opacity="0.12"/>
            <line x1="0" y1="0" x2="30" y2="90" stroke="#DC2626" strokeWidth="0.5" opacity="0.12"/>
            <line x1="30" y1="90" x2="90" y2="120" stroke="#DC2626" strokeWidth="0.5" opacity="0.12"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-grid)"/>
      </svg>
      
      {/* Floating orbs for depth - more subtle */}
      <div className="absolute top-32 right-32 w-[600px] h-[600px] bg-red-100 rounded-full blur-[100px] opacity-20 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-40 left-40 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-15 animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-[60%] right-[15%] w-[400px] h-[400px] bg-gray-100 rounded-full blur-[80px] opacity-10 animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      
      {/* Subtle circuit-like lines */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <path d="M 0 150 L 75 150 L 75 75 L 225 75 L 225 225 L 150 225" 
                    stroke="#DC2626" 
                    strokeWidth="1.5" 
                    fill="none" 
                    strokeDasharray="8,8"/>
              <circle cx="75" cy="150" r="4" fill="#DC2626"/>
              <circle cx="75" cy="75" r="4" fill="#DC2626"/>
              <circle cx="225" cy="75" r="4" fill="#DC2626"/>
              <circle cx="225" cy="225" r="4" fill="#DC2626"/>
              
              {/* Additional tech elements */}
              <rect x="70" y="70" width="10" height="10" fill="#DC2626" opacity="0.3"/>
              <rect x="220" y="220" width="10" height="10" fill="#DC2626" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)"/>
        </svg>
      </div>
      
      {/* Subtle data flow lines */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0"/>
              <stop offset="50%" stopColor="#DC2626" stopOpacity="1"/>
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#flow-gradient)" strokeWidth="2"/>
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#flow-gradient)" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
};

export default TechBackground;
