import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TypewriterEffect from "./TypewriterEffect";
import AnimatedBackground from "./AnimatedBackground";
import "./HeroSection.css";
import "./button-53.css";

const HeroSection = ({ id }) => {
  const joinButtonRef = React.useRef(null);
  const sponsorButtonRef = React.useRef(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const setupButtonEffect = (buttonRef) => {
      const button = buttonRef.current;
      if (!button) return;

      let animationId;
      let isHovering = false;

      const handleMouseMove = (e) => {
        if (!isHovering) return;
        
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const moveX = Math.max(-8, Math.min(8, x * 0.1));
        const moveY = Math.max(-8, Math.min(8, y * 0.1));
        
        if (animationId) cancelAnimationFrame(animationId);
        
        animationId = requestAnimationFrame(() => {
          button.style.setProperty('--move-x', `${moveX}px`);
          button.style.setProperty('--move-y', `${moveY}px`);
        });
      };

      const handleMouseEnter = () => { isHovering = true; };
      
      const handleMouseLeave = () => {
        isHovering = false;
        if (animationId) cancelAnimationFrame(animationId);
        
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
    };

    const cleanupJoin = setupButtonEffect(joinButtonRef);
    const cleanupSponsor = setupButtonEffect(sponsorButtonRef);

    return () => {
      if (cleanupJoin) cleanupJoin();
      if (cleanupSponsor) cleanupSponsor();
    };
  }, []);

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  // Gradient configurations for cleaner code
  const gradients = [
    {
      size: '700px 350px',
      position: '50% 45%',
      background: 'radial-gradient(ellipse 100% 80%, rgba(6, 182, 212, 0.25) 0%, rgba(34, 211, 238, 0.18) 30%, rgba(6, 182, 212, 0.08) 60%, rgba(6, 182, 212, 0.02) 80%, transparent 100%)',
      animation: 'lava-lamp-main 20s ease-in-out infinite'
    },
    {
      size: '400px 400px',
      position: '40% 35%',
      background: 'radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, rgba(6, 182, 212, 0.12) 40%, rgba(6, 182, 212, 0.04) 70%, transparent 100%)',
      animation: 'lava-lamp-blob-1 25s ease-in-out infinite'
    },
    {
      size: '350px 450px',
      position: '60% 40%',
      background: 'radial-gradient(ellipse 70% 100%, rgba(6, 182, 212, 0.18) 0%, rgba(34, 211, 238, 0.1) 45%, rgba(6, 182, 212, 0.03) 75%, transparent 100%)',
      animation: 'lava-lamp-blob-2 30s ease-in-out infinite reverse'
    },
    {
      size: '450px 250px',
      position: '50% 55%',
      background: 'radial-gradient(ellipse 110% 60%, rgba(14, 165, 233, 0.15) 0%, rgba(6, 182, 212, 0.08) 50%, rgba(6, 182, 212, 0.02) 80%, transparent 100%)',
      animation: 'lava-lamp-blob-3 35s ease-in-out infinite'
    },
    {
      size: '280px 350px',
      position: '35% 50%',
      background: 'radial-gradient(ellipse 80% 120%, rgba(6, 182, 212, 0.12) 0%, rgba(34, 211, 238, 0.06) 60%, transparent 100%)',
      animation: 'lava-lamp-blob-4 28s ease-in-out infinite reverse'
    },
    {
      size: '320px 320px',
      position: '65% 52%',
      background: 'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, rgba(6, 182, 212, 0.05) 70%, transparent 100%)',
      animation: 'lava-lamp-blob-5 32s ease-in-out infinite'
    },
    {
      size: '380px 220px',
      position: '50% 35%',
      background: 'radial-gradient(ellipse 120% 70%, rgba(6, 182, 212, 0.08) 0%, rgba(34, 211, 238, 0.04) 50%, rgba(6, 182, 212, 0.01) 80%, transparent 100%)',
      animation: 'lava-lamp-blob-6 22s ease-in-out infinite reverse'
    }
  ];

  return (
    <section id={id} className="hero-section" aria-label="Hero section introducing Cyberonites">
      <AnimatedBackground />
      
      <div className="absolute background-gradients inset-0 z-1">
        {gradients.map((gradient, index) => (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              width: gradient.size.split(' ')[0],
              height: gradient.size.split(' ')[1],
              left: gradient.position.split(' ')[0],
              top: gradient.position.split(' ')[1],
              transform: 'translate(-50%, -50%)',
              background: gradient.background,
              filter: 'blur(80px) brightness(1.4)',
              animation: gradient.animation
            }}
          />
        ))}
      </div>

      <motion.div 
        className="hero-content relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title font-light text-center sm:text-left" variants={contentVariants}>
          <span className="title-cyan">cy</span>
          <span className="title-white">BER</span>
          <span className="title-white">ONITES</span>
        </motion.h1>

        <motion.div className="hero-subtitle-container text-center sm:text-left" variants={contentVariants}>
          <TypewriterEffect
            texts={["Empowering Students", "Protecting Cyberspace", "Building Future"]}
            className="hero-subtitle font-medium tracking-wide capitalize"
          />
        </motion.div>

        <motion.p className="hero-description font-ubuntu font-normal" variants={contentVariants}>
          Building the next generation of cyber experts through education and hands-on training. Our 
          university-based club offers workshops, seminars, equipping students with the skills and knowledge 
          to tackle the challenges of the digital world and secure our future.
        </motion.p>

        <motion.div className="hero-buttons" variants={contentVariants}>
          <button
            ref={joinButtonRef}
            className="button-53 font-ubuntu font-semibold"
            role="button"
            aria-label="Join the Cyberonites community"
            data-text="Join Us"
            style={{ 
              transform: 'rotate(-2deg)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'rotate(0deg) scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'rotate(-2deg) scale(1)'}
          >
            Join Us
          </button>
          
          <button
            ref={sponsorButtonRef}
            className="button-53 font-ubuntu font-semibold"
            role="button"
            aria-label="Sponsor the Cyberonites community"
            data-text="Sponsor Us"
            style={{ 
              transform: 'rotate(2deg)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'rotate(0deg) scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'rotate(2deg) scale(1)'}
          >
            Sponsor Us
          </button>
        </motion.div>
      </motion.div>

      {showScrollIndicator && (
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="scroll-mouse">
            <motion.div
              className="scroll-wheel"
              animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
