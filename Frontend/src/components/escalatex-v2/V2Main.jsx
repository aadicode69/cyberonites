import React, { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import HomePage from './V2Homepage';
import V2EventCountdown from './V2EventCountdown';
import V2AboutSection from './V2AboutSection';
import V2TimeLine from './V2TimeLine';
import V2Sponsors from './V2Sponsors';
import NeedAccommodation from './NeedAccommodation';
import V2Community from './V2Community';

const V2Main = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-black text-cyan-400 overflow-hidden">
      <AnimatedBackground />      
      <HomePage />
      <V2AboutSection />
      <V2EventCountdown />
      <V2Sponsors />
      <V2Community /> 
      <V2TimeLine/>
      <NeedAccommodation />
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono:wght@400&family=Orbitron:wght@400;700;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Share Tech Mono', monospace;
          background: #000;
          color: #00ffff;
          overflow-x: hidden;
        }
        
        .glow {
          text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
        }
        
        .cyber-border {
          position: relative;
        }
        
        .cyber-border::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(45deg, #00ffff, #00bfff, #00ffff);
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes glitch {
          0% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-2px); }
          80% { transform: translateX(2px); }
          100% { transform: translateX(0); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff;
          }
          50% { 
            text-shadow: 0 0 2px #00ffff, 0 0 5px #00ffff, 0 0 8px #00ffff, 0 0 12px #00ffff;
          }
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default V2Main;
