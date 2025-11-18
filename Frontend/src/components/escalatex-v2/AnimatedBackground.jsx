import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base Background with Gradient */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-black to-blue-900/10"></div>
        
        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        ></div>
        
        {/* Secondary Grid for Depth */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 191, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 191, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            animation: 'grid-move 30s linear infinite reverse'
          }}
        ></div>
      </div>
      
      {/* Floating Particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        ></div>
      ))}
      
      {/* Larger Glowing Orbs */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-xl"
          style={{
            width: `${50 + Math.random() * 100}px`,
            height: `${50 + Math.random() * 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${8 + Math.random() * 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`
          }}
        ></div>
      ))}
      
      {/* Diagonal Light Streaks */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={`streak-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform rotate-45"
            style={{
              width: '200%',
              height: '2px',
              top: `${20 + i * 30}%`,
              left: '-50%',
              animation: `slide-streak ${6 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Pulsing Corner Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-cyan-500/5 via-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-blue-500/5 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Scan Lines Effect */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 255, 255, 0.1) 50%)',
          backgroundSize: '100% 4px',
          animation: 'scan-lines 0.1s linear infinite'
        }}
      ></div>
      
      <style jsx>{`
        @keyframes slide-streak {
          0% { transform: translateX(-100%) rotate(45deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%) rotate(45deg); opacity: 0; }
        }
        
        @keyframes scan-lines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
