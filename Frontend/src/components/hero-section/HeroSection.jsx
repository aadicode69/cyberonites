import React from 'react';
import { motion } from 'framer-motion';
import TypewriterEffect from './TypewriterEffect';
import CyberDashboard from './CyberDashboard';
import './button-53.css';

const HeroSection = ({ id }) => {
  return (
    <section 
      id={id} 
      className="relative min-h-screen bg-black overflow-hidden flex items-center pt-0"
      aria-label="Hero section introducing Cyberonites"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.04),transparent_50%)]"></div>
      
      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10 py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-wide mt-16 lg:mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-white">CYBER</span>
              <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] ml-2">ONITES</span>
            </motion.h1>

            <motion.div
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 min-h-[5rem] flex items-center justify-center lg:justify-start -mt-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <TypewriterEffect 
                texts={[
                  "Empowering Students",
                  "Protecting Cyberspace", 
                  "Building Future"
                ]}
                className="font-medium text-center lg:text-left"
              />
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-white leading-relaxed max-w-2xl font-semibold mt-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Building the next generation of{" "}
              <span className="text-cyan-300">cyber experts</span> through education
              and <span className="text-cyan-300">hands-on training.</span> Our{" "}
              <span className="text-cyan-300">university-based club</span> offers{" "}
              <span className="text-cyan-300">
                workshops, seminars, equipping students
              </span>{" "}
              with the skills and knowledge to tackle the{" "}
              <span className="text-cyan-300">challenges of the digital world</span>{" "}
              and <span className="text-cyan-300">secure our future.</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <button 
                className="button-53" 
                role="button"
                aria-label="Join the Cyberonites community"
              >
                Join Community
              </button>
            </motion.div>
          </motion.div>

          {/* Enhanced Visual Element */}
          <motion.div
            className="lg:w-1/2 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1.2, type: "spring", stiffness: 100 }}
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-cyan-400/10 blur-3xl rounded-full transform scale-150 animate-pulse"></div>
            
            {/* Dashboard container */}
            <div 
              className="relative transform scale-50 sm:scale-60 md:scale-75 lg:scale-85 xl:scale-95"
              role="img"
              aria-label="Cybersecurity dashboard visualization"
            >
              <CyberDashboard />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        aria-label="Scroll down indicator"
      >
        <div className="w-6 h-10 border-2 border-cyan-400/60 rounded-full flex justify-center relative group cursor-pointer hover:border-cyan-400 transition-colors">
          <motion.div 
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
