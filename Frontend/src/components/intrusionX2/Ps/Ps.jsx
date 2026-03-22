import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert, ChevronRight, ArrowLeft, ChevronDown, Share2, Star, Home, Search, X, CheckCircle2, Zap } from 'lucide-react';
import problemsData from './Ps.json';
import intrusionLogoLeft from '../intrusionx-2.png';
import intrusionX2Img from '../intrusionX2.png';
import CyberoniteNavLogo from '../../../img/ps-final.png';

const SelectTrackModal = ({ problem, onClose }) => {
  if (!problem) return null;
  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >

        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

        <motion.div
          key="modal-panel"
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 30 }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-lg bg-[#060c14]/95 border border-cyan-500/40 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.18)] ring-1 ring-cyan-400/10"
        >
       
          <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

       
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-20 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-start justify-between px-6 pt-6 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                <Zap size={20} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-[0.2em] mb-0.5">Track Selected</p>
                <h2 className="text-base md:text-lg font-black text-white leading-tight">{problem.title}</h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="ml-4 shrink-0 p-2 rounded-full bg-slate-800/60 hover:bg-slate-700/80 text-slate-400 hover:text-white transition-all border border-slate-700/50 hover:border-slate-500"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          <div className="h-px mx-6 bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />

        
          <div className="px-6 py-5 space-y-5">
    
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Description</p>
              <p className="text-slate-300 text-sm leading-relaxed font-light">{problem.description}</p>
            </div>
            {problem.challenges && problem.challenges[0] !== '' && (
              <div className="bg-slate-900/70 border border-slate-800/60 rounded-xl p-4">
                <p className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">
                  <ShieldAlert size={12} className="text-rose-400" />
                  Key Challenges
                </p>
                <ul className="space-y-2">
                  {problem.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 font-light">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                      {c.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded border border-cyan-900/50 tracking-widest">
                PS-{problem.id.padStart(2, '0')}
              </span>
              <span className="text-[10px] text-slate-600 font-mono">Track confirmed for registration</span>
            </div>
          </div>

          <div className="px-6 pb-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-slate-400 bg-slate-800/50 hover:bg-slate-700/60 border border-slate-700/50 hover:border-slate-500 transition-all"
            >
              Go Back
            </button>
            <button
              onClick={onClose}
              className="flex-1 relative overflow-hidden group/confirm py-2.5 rounded-xl text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={16} />
              Confirm Track
            </button>
          </div>
          <img
            src={intrusionX2Img}
            alt=""
            className="absolute bottom-3 right-3 w-24 h-24 object-contain opacity-[0.07] pointer-events-none select-none"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const TiltCard = ({ children, disabled }) => {
  const ref = useRef(null);
  const handleMouseMove = useCallback((e) => {
    if (disabled) return;
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;
  }, [disabled]);
  const handleMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  }, []);
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.15s ease-out', transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

const Problem_S = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [toast, setToast] = useState(null);
useEffect(() => {
  if (toast) {
    const timer = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timer);
  }
}, [toast]);

  const validProblems = problemsData
    .filter((p) => p.title && p.title.trim() !== "")
    .filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen relative bg-[#050505] text-slate-300 pt-[60px] md:pt-[80px] pb-0 px-4 sm:px-8 lg:px-12 font-sans selection:bg-cyan-500/30 overflow-hidden">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed top-12 right-6 z-[200] bg-cyan-950/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.2)] border border-cyan-500/40 flex items-center gap-3 max-w-sm"
          >
            <CheckCircle2 size={18} className="text-cyan-400 shrink-0" />
            <p className="text-sm font-medium text-slate-200 leading-snug">{toast}</p>
            <button onClick={() => setToast(null)} className="ml-2 text-slate-400 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Select Track Modal */}
      <SelectTrackModal problem={selectedProblem} onClose={() => setSelectedProblem(null)} />

      {/* Background Cyber Grid overlay */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_32px] pointer-events-none opacity-40" />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#050505]/80 via-black/90 to-[#050505] pointer-events-none" />

      {/* Faint 3D Animated Intrusion Watermark */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] md:w-[60vw] max-w-[1000px] mt-16 md:mt-24 pointer-events-none z-0" style={{ perspective: 1200 }}>
        <motion.img
          src={intrusionLogoLeft}
          alt="Background Watermark"
          animate={{
            rotateX: [0, 8, 0, -8, 0],
            rotateY: [0, 10, 0, -10, 0],
            y: [0, -15, 0, 15, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full object-contain opacity-[0.10] mix-blend-screen scale-[1.2]"
        />
      </div>

      {/* Top-Left Logo */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 flex items-center cursor-pointer">
        <img
          src={intrusionLogoLeft}
          alt="Intrusion Logo"
          className="h-10 md:h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.8)] transition-all duration-300 hover:scale-105"
        />
      </div>

      {/* Top-Right Logo */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 flex items-center cursor-pointer">
        <img
          src={CyberoniteNavLogo}
          alt="Cyberonites Logo"
          className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.8)] transition-all duration-300 hover:scale-105"
        />
      </div>

      {/* Floating Home Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        <Link
          to="/"
          className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-cyan-950/40 backdrop-blur-xl border border-cyan-500/40 text-cyan-400 hover:bg-cyan-900/60 hover:text-cyan-200 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:scale-110 transition-all group shadow-lg"
          title="Back to IntrusionX Second Edition Home"
        >
          <Home size={24} className="group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-8 relative flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-cyan-500/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

          {/* Main Text Header Block */}
          <div className="text-center mb-10 md:mb-12 relative group cursor-default flex flex-col items-center">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-500/0 group-hover:bg-cyan-500/10 blur-2xl rounded-[100%] transition-colors duration-700 pointer-events-none"></div>

           <motion.h1
  initial={{ opacity: 0, y: -20, rotateX: 20 }}
  animate={{ opacity: 1, y: 0, rotateX: 0 }}
  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
  className="text-4xl md:text-6xl lg:text-[5rem] font-black italic -skew-x-[10deg] tracking-tighter drop-shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-500 uppercase flex flex-col items-center justify-center leading-none text-slate-100"
>
  {/* Line 1: Intrusion X */}
  <span className="flex items-center">
    <span className="inline-block transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-1">
      Intrusion
    </span>
    <span className="inline-block transition-transform duration-500 text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] ml-2 group-hover:translate-x-2 group-hover:-translate-y-1">
      X
    </span>
  </span>

  {/* Line 2: Second Edition */}
  <span className="version">Second Edition</span>
</motion.h1>


            <div className="w-40 h-[2px] md:h-[3px] bg-gradient-to-r from-transparent via-slate-500/50 group-hover:via-cyan-400 to-transparent mx-auto mt-2 mb-4 md:mb-6 rounded-full transition-all duration-500 group-hover:w-64 opacity-60 group-hover:opacity-100 shadow-[0_0_10px_rgba(34,211,238,0)] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base md:text-lg text-slate-400/90 max-w-xl mx-auto font-light leading-snug mb-2 tracking-wide"
            >
              Explore the official problem statements. Select any track to reveal its core description and high-level challenges.
            </motion.p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-lg mx-auto mb-8 group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setExpandedId(null); }}
            placeholder="Search problem statements..."
            className="w-full bg-slate-900/60 backdrop-blur-xl border border-slate-700/60 focus:border-cyan-500/60 text-slate-200 placeholder-slate-500 rounded-xl pl-11 pr-4 py-3 text-sm outline-none transition-all focus:shadow-[0_0_0_1px_rgba(34,211,238,0.2)] focus:bg-slate-900/80"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-4 flex items-center text-slate-500 hover:text-slate-300 transition-colors text-xs font-medium"
            >
              ✕
            </button>
          )}
        </div>

        {/* No results message */}
        {validProblems.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            <Search size={40} className="mx-auto mb-4 opacity-30" />
            <p className="text-base">No problem statements found for <span className="text-slate-300 font-medium">"{searchQuery}"</span></p>
          </div>
        )}

        {/* Accordion Layout: Vertical Stack */}
        <div className="flex flex-col space-y-4 md:space-y-6 pb-12 w-full">
          {validProblems.map((problem, index) => {
            const isExpanded = expandedId === problem.id;
            // Generate some random thematic tags based on index or title for mockup
            // Assign tags based on title keywords
            const getTitle = problem.title.toLowerCase();
            const tags = getTitle.includes('iot') || getTitle.includes('firmware') || getTitle.includes('botnet') || getTitle.includes('iiot') || getTitle.includes('fuzzing')
              ? ['IoT', 'Hardware']
              : getTitle.includes('blockchain') || getTitle.includes('sybil') || getTitle.includes('cross-chain') || getTitle.includes('smart contract') || getTitle.includes('did')
              ? ['Blockchain', 'Web3']
              : getTitle.includes('cloud') || getTitle.includes('kubernetes') || getTitle.includes('serverless') || getTitle.includes('container') || getTitle.includes('vm')
              ? ['Cloud', 'DevOps']
              : getTitle.includes('web') || getTitle.includes('api') || getTitle.includes('firewall') || getTitle.includes('dns') || getTitle.includes('supply chain')
              ? ['Web-App', 'Network']
              : getTitle.includes('ai') || getTitle.includes('deepfake') || getTitle.includes('adversarial') || getTitle.includes('federated') || getTitle.includes('dataset') || getTitle.includes('malware')
              ? ['AI/ML', 'Threat Sec']
              : ['Cybersec', 'Research'];

            return (
              <TiltCard key={problem.id} disabled={isExpanded}>
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative bg-[#0a0f16]/80 backdrop-blur-xl border rounded-2xl overflow-hidden cursor-pointer flex flex-col transition-all duration-300
                ${isExpanded
                    ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.15)] ring-1 ring-cyan-400/20'
                    : 'border-slate-800/80 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.1)] hover:-translate-y-1'}`}
                onClick={() => toggleExpand(problem.id)}
              >
                {/* Header (Always Visible) */}
                <div className="p-4 md:p-5 flex items-center justify-between">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800 shadow-inner md:block hidden group-hover:border-cyan-500/50 group-hover:scale-105 transition-all text-slate-400 group-hover:text-cyan-400">
                      <Terminal size={20} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1.5">
                        <span className="text-[10px] md:text-xs font-mono font-bold text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-900/50 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                          PS-{problem.id.padStart(2, '0')}
                        </span>
                        {tags.map((tag, i) => (
                          <span key={i} className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-slate-400 bg-slate-800/50 px-1.5 py-0.5 rounded-sm hidden sm:inline-block">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className={`text-lg md:text-xl font-bold leading-tight transition-colors ${isExpanded ? 'text-cyan-300' : 'text-white group-hover:text-cyan-100'}`}>
                        {problem.title}
                      </h3>
                    </div>
                  </div>

                  {/* Chevron indicator */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`ml-3 shrink-0 p-1.5 rounded-full transition-colors ${isExpanded ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800/50 text-slate-400 group-hover:text-cyan-300'}`}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>

                {/* Expanded Body (Vertical Expansion) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden" // ensures content is clipped during height animation
                    >
                      <div className="relative px-6 md:px-8 pb-8 pt-4 border-t border-slate-800/60 bg-gradient-to-b from-[#080c13] to-[#05080c]">
                        {/* Card corner logo */}
                        <img
                          src={intrusionX2Img}
                          alt=""
                          className="absolute bottom-3 right-3 w-44 h-44 object-contain opacity-[0.18] pointer-events-none select-none"
                        />
                        <div className="flex justify-between items-start mb-6">
                          <p className="text-slate-300 text-[15px] md:text-base leading-relaxed font-light flex-1 lg:pr-6">
                            {problem.description}
                          </p>

                          {/* Quick Actions */}
                          <div className="hidden sm:flex space-x-2 shrink-0 ml-4">
                            <button className="w-10 h-10 rounded-full bg-slate-800/40 hover:bg-cyan-950/60 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all border border-transparent hover:border-cyan-900/50" title="Star" onClick={(e) => e.stopPropagation()}>
                              <Star size={18} />
                            </button>
                          </div>
                        </div>

                        {/* Challenges Section */}
                        {problem.challenges && problem.challenges[0] !== "" && (
                          <div className="bg-slate-900/60 rounded-2xl p-6 border border-slate-800/50 shadow-inner group/box relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover/box:opacity-100"></div>
                            <h4 className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-800/80 pb-3">
                              <ShieldAlert size={16} className="mr-3 text-rose-500/90" />
                              Key Core Challenges
                            </h4>
                            <ul className="space-y-4">
                              {problem.challenges.map((challenge, idx) => (
                                <li key={idx} className="text-[14px] md:text-[15px] text-slate-300 flex items-start group/item">
                                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-600 mr-4 shrink-0 transition-all duration-300 group-hover/item:scale-[1.8] group-hover/item:bg-cyan-400 group-hover/item:shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                                  <span className="leading-relaxed font-light">{challenge.trim()}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Select Track Button */}
                        <div className="flex flex-col sm:flex-row justify-end mt-8">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setToast(`Successfully Selected Track: ${problem.title}`);
                            }}
                            className="relative group/btn overflow-hidden rounded-xl bg-slate-800/40 px-5 py-3 text-sm font-bold tracking-widest text-slate-300 uppercase transition-all hover:text-black border border-slate-700 hover:border-slate-300 active:scale-95 text-center w-auto inline-flex items-center"
                          >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              Select Track
                              <ChevronRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 h-full w-full translate-y-[100%] bg-slate-200 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/btn:translate-y-0 z-0 scale-y-110"></div>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Animated Top Glow Border */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-blue-500 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`} />
              </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* Cyberpunk Footer */}
      <footer className="relative z-10 mt-16">
        {/* Top glow divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent mb-0 shadow-[0_0_20px_rgba(34,211,238,0.15)]"></div>

        <div className="bg-gradient-to-b from-slate-900/80 to-[#050505] backdrop-blur-2xl border-t border-slate-800/40 px-6 md:px-12 py-8">

          {/* Main content row */}
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

            {/* Left: System stats */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'SYSTEM', value: 'SECURE', valueClass: 'text-emerald-400', dot: 'bg-emerald-400' },
                { label: 'CHALLENGES', value: `${problemsData.filter(p => p.title && p.title.trim() !== '').length} / ${problemsData.filter(p => p.title && p.title.trim() !== '').length}`, valueClass: 'text-cyan-400', dot: null },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-900/60 border border-slate-800/80 rounded-lg px-4 py-2.5 hover:border-slate-700 transition-colors">
                  <span className="text-slate-600 font-mono text-[10px] uppercase tracking-[0.2em]">{item.label}</span>
                  <span className={`flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-widest ${item.valueClass}`}>
                    {item.dot && <span className={`w-1.5 h-1.5 rounded-full ${item.dot} animate-pulse`}></span>}
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Center: Brand */}
            <div className="flex flex-col items-center gap-1 select-none">
              <div className="font-mono text-base md:text-lg font-black tracking-[0.4em] uppercase">
                <span className="text-slate-300">INTRUSION</span>
                <span className="text-cyan-400">_X</span>
                <span className="text-slate-600">:</span>
                <span className="text-slate-400">2026</span>
              </div>
              <div className="text-[9px] tracking-[0.3em] text-slate-700 uppercase font-mono">Powered by Cyberonites</div>
            </div>

            {/* Right: Status */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'STATUS', value: 'OPERATIONAL', valueClass: 'text-emerald-400', dot: 'bg-emerald-400' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-900/60 border border-slate-800/80 rounded-lg px-4 py-2.5 hover:border-slate-700 transition-colors">
                  <span className="text-slate-600 font-mono text-[10px] uppercase tracking-[0.2em]">{item.label}</span>
                  <span className={`flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-widest ${item.valueClass}`}>
                    {item.dot && <span className={`w-1.5 h-1.5 rounded-full ${item.dot} animate-pulse`}></span>}
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom micro bar */}
          <div className="max-w-[1440px] mx-auto mt-6 pt-4 border-t border-slate-800/40 flex justify-center">
            <p className="text-slate-700 font-mono text-[9px] tracking-[0.3em] uppercase">
              © 2026 Cyberonites &nbsp;·&nbsp; All Rights Reserved &nbsp;·&nbsp; Intrusion X Second Edition
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Problem_S;