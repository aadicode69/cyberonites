import React from "react";
import { motion } from "framer-motion";
import TypewriterEffect from "./TypewriterEffect";
import LatestUpdates from "./LatestUpdates";
import "./button-53.css";

const HeroSection = ({ id }) => {
  const buttonRef = React.useRef(null);
  const [showScrollIndicator, setShowScrollIndicator] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    let animationId;
    let isHovering = false;

    const handleMouseMove = (e) => {
      if (!isHovering) return;
      
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const moveX = Math.max(-8, Math.min(8, x * 0.08));
      const moveY = Math.max(-8, Math.min(8, y * 0.08));
      
      // Smooth animation using requestAnimationFrame
      if (animationId) cancelAnimationFrame(animationId);
      
      animationId = requestAnimationFrame(() => {
        button.style.setProperty('--move-x', `${moveX}px`);
        button.style.setProperty('--move-y', `${moveY}px`);
      });
    };

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      if (animationId) cancelAnimationFrame(animationId);
      
      // Smooth return to center
      animationId = requestAnimationFrame(() => {
        button.style.setProperty('--move-x', '0px');
        button.style.setProperty('--move-y', '0px');
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      id={id}
      className="relative min-h-screen bg-black overflow-hidden flex items-center pt-0"
      aria-label="Hero section introducing Cyberonites"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,255,0.06),transparent_60%)]"></div>

      {/* Enhanced Grid Pattern with Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>
      </div>

      {/* Multiple smooth transition gradients at the bottom - Behind content */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/95 via-black/80 via-black/60 via-black/40 via-black/20 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/90 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-30 py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Content */}
          <motion.div
            className="lg:w-2/5 text-center lg:text-left space-y-2 lg:space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-wide mt-16 lg:mt-20 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-white relative">
                CYBER
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-xl opacity-30 animate-pulse"></div>
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 animate-gradient-x relative">
                ONITES
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-2xl animate-pulse"></div>
              </span>
            </motion.h1>

            <motion.div
              className="text-xl sm:text-2xl lg:text-3xl min-h-[3rem] flex items-center justify-center lg:justify-start lg:ml-4 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <TypewriterEffect
                texts={[
                  "Empowering Students",
                  "Protecting Cyberspace",
                  "Building Future",
                ]}
                className="font-semibold text-center lg:text-left relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-300"
              />
            </motion.div>

            <motion.p
              className="text-base sm:text-lg leading-relaxed max-w-2xl font-medium mt-10 mb-8 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <span className="text-gray-200">Building the next generation of </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-400 font-semibold">cyber experts</span>
              <span className="text-gray-200"> through education and </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-400 font-semibold">hands-on training.</span>
              <span className="text-gray-200"> Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-400 font-semibold">university-based club</span>
              <span className="text-gray-200"> offers </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-400 font-semibold">workshops, seminars, equipping students</span>
              <span className="text-gray-200"> with the skills and knowledge to tackle the </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-400 font-semibold">challenges of the digital world</span>
              <span className="text-gray-200"> and </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-400 font-semibold">secure our future.</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <button
                ref={buttonRef}
                className="button-53"
                role="button"
                aria-label="Join the Cyberonites community"
              >
                Join Community
              </button>
            </motion.div>
          </motion.div>

          {/* Latest Updates Section */}
          <motion.div
            className="lg:w-3/5 flex justify-center items-center relative pr-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-full max-w-lg">
              <LatestUpdates />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Above all backgrounds */}
      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-40"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          aria-label="Scroll down indicator"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
      )}
    </section>
  );
};

export default HeroSection;
