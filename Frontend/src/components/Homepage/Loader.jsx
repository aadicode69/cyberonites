import React, { useState, useEffect } from 'react';
import { Shield, Lock, Code, Cpu } from 'lucide-react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  
  const hackingPhrases = [
    "LOADING CYBERONITES PROTOCOL...",
    "ACCESS GRANTED"
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50);
    
    const textTimer = setInterval(() => {
      setCurrentPhrase(prev => {
        if (prev >= hackingPhrases.length - 1) {
          clearInterval(textTimer);
          return hackingPhrases.length - 1;
        }
        return Math.min(Math.floor(progress / (100 / hackingPhrases.length)), hackingPhrases.length - 1);
      });
    }, 100);
    
    const glitchTimer = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);
    
    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
      clearInterval(glitchTimer);
    };
  }, [progress]);
  
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-4">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-70"></div>
      <div className="fixed inset-0 bg-grid-pattern opacity-10"></div>
      <div className="digital-noise"></div>
      <div className="scanlines"></div>
      <div className="data-stream"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl mx-auto">
        <div className="text-cyan-400 text-xl sm:text-2xl md:text-3xl font-mono mb-8 text-center">
          {hackingPhrases[currentPhrase]}
          <span className={`${glitchActive ? 'text-red-500' : 'text-cyan-400'}`}>_</span>
        </div>
        
        <div className="mb-10 flex items-center justify-center space-x-4 sm:space-x-6">
          {currentPhrase >= 4 && <Shield className="text-cyan-500 animate-pulse" size={32} stroke={1.5} />}
          {currentPhrase >= 5 && <Lock className="text-blue-700 animate-pulse" size={32} stroke={1.5} />}
          {currentPhrase >= 6 && <Code className="text-cyan-500 animate-pulse" size={32} stroke={1.5} />}
          {currentPhrase >= 6 && <Cpu className="text-blue-700 animate-pulse" size={32} stroke={1.5} />}
        </div>
        <div className="w-full sm:w-4/5 md:w-3/4 h-3 sm:h-4 bg-gray-800 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-700 rounded-full"
            style={{
              width: `${progress}%`,
              transition: 'width 0.2s ease-out'
            }}
          ></div>
        </div>
        
        <div className="text-sm sm:text-base text-cyan-400 font-mono mb-8">
          SYSTEM INITIALIZATION: {progress}%
        </div>
        <div className="grid grid-cols-5 gap-3 sm:gap-4 mb-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i}
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${
                progress > (i+1) * 20 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-700 animate-pulse' 
                  : 'bg-gray-800 border border-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}