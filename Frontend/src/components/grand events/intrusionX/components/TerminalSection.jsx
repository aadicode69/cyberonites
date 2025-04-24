import React, { useState, useEffect } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { sectionColors } from '../data/eventData';

const TerminalSection = ({ id, title, icon, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const color = sectionColors[id] || "cyan";
  
  useEffect(() => {
    // After initial render, set this to false so animations work on toggle
    const timer = setTimeout(() => {
      setIsInitialRender(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id={id} className="mb-12 border border-gray-800 bg-gray-900/60 backdrop-blur-sm rounded-sm hover-glow">
      <div 
        className={`flex items-center justify-between px-4 py-3 border-b border-${color}-900 cursor-pointer hover:bg-black/40 transition-colors`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <span className={`text-${color}-500 mr-3 ${isExpanded ? 'animate-pulse' : ''}`}>{icon}</span>
          <h2 className={`text-xl md:text-2xl font-mono text-${color}-400 tracking-wide uppercase ${isExpanded ? 'animate-glow' : ''}`}>
            {title}
          </h2>
        </div>
        <div className="flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className={`text-${color}-400 transition-transform duration-300 ${isExpanded ? 'rotate-0' : 'rotate-180'}`}>
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
      </div>
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isInitialRender ? (isExpanded ? 'terminal-open' : 'opacity-0 max-h-0') :
          isExpanded ? 'opacity-100 max-h-[5000px]' : 'opacity-0 max-h-0'
        }`}
      >
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
