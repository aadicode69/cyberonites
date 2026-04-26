import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Terminal,
  ShieldAlert,
  X,
  CheckCircle2,
  Home,
  Search,
  ArrowUpRight,
} from "lucide-react";
import problemsData from "./Ps.json";
import intrusionLogoLeft from "../intrusionx-2.png";
import intrusionX2Img from "../intrusionX2.png";
import CyberoniteNavLogo from "../../../img/ps-final.png";

/* ─── Noise SVG overlay ─────────────────────────────────────────────── */
const NoiseOverlay = () => (
  <svg
    className="fixed inset-0 w-full h-full pointer-events-none z-[1] opacity-[0.035]"
    style={{ mixBlendMode: "overlay" }}
  >
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.65"
        numOctaves="3"
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
);

/* ─── Marquee strip ─────────────────────────────────────────────────── */
const MarqueeStrip = ({ items }) => (
  <div className="overflow-hidden border-y border-white/10 py-2 my-8 relative">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      className="flex whitespace-nowrap gap-12"
    >
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          className="text-[10px] font-mono tracking-[0.35em] text-white/20 uppercase select-none"
        >
          {item}
        </span>
      ))}
    </motion.div>
  </div>
);

/* ─── Modal ─────────────────────────────────────────────────────────── */
const PSModal = ({ problem, onClose, onSelectTrack }) => {
  useEffect(() => {
    if (!problem) return;
    const h = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [problem, onClose]);

  return (
    <AnimatePresence>
      {problem && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/92 backdrop-blur-2xl" />

          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-2xl bg-[#0a0a0a] border border-white/12 rounded-none overflow-hidden"
            style={{
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.06), 0 40px 120px rgba(0,0,0,0.9)",
            }}
          >
            {/* Top rule */}
            <div className="h-px w-full bg-white" />

            {/* Header */}
            <div className="flex items-start justify-between px-8 pt-8 pb-6">
              <div>
                <p className="font-mono text-[9px] tracking-[0.4em] text-white/30 uppercase mb-2">
                  Problem Statement · PS-{problem.id.padStart(2, "0")}
                </p>
                <h2 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
                  {problem.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="mt-1 ml-6 shrink-0 w-9 h-9 border border-white/15 hover:border-white/60 flex items-center justify-center text-white/40 hover:text-white transition-all"
              >
                <X size={14} />
              </button>
            </div>

            <div className="h-px mx-8 bg-white/8" />

            {/* Body */}
            <div className="px-8 py-6 space-y-6 max-h-[55vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <div>
                <p className="font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase mb-3">
                  Description
                </p>
                <p className="text-white/70 text-sm leading-relaxed font-light">
                  {problem.description}
                </p>
              </div>

              {problem.challenges && problem.challenges[0] !== "" && (
                <div className="border border-white/8 p-5">
                  <p className="flex items-center gap-2 font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase mb-4">
                    <ShieldAlert size={10} className="text-white/50" />
                    Key Challenges
                  </p>
                  <ul className="space-y-3">
                    {problem.challenges.map((c, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-white/60 font-light"
                      >
                        <span className="mt-2 w-px h-3 bg-white/30 shrink-0" />
                        {c.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-8 pb-8 pt-4 flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 text-xs font-mono tracking-[0.2em] uppercase text-white/30 border border-white/10 hover:border-white/30 hover:text-white/60 transition-all"
              >
                Dismiss
              </button>
              <button
                onClick={() => {
                  onSelectTrack(problem);
                  onClose();
                }}
                className="flex-1 py-3 text-xs font-mono tracking-[0.2em] uppercase text-black bg-white hover:bg-white/85 transition-all font-bold flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={12} />
                Select Track
              </button>
            </div>

            {/* Watermark */}
            <img
              src={intrusionX2Img}
              alt=""
              className="absolute bottom-4 right-4 w-16 h-16 object-contain opacity-[0.04] pointer-events-none select-none invert"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ─── Tag helper ─────────────────────────────────────────────────────── */
const getTags = (title) => {
  const t = title.toLowerCase();
  if (
    t.includes("iot") ||
    t.includes("firmware") ||
    t.includes("botnet") ||
    t.includes("iiot") ||
    t.includes("fuzzing")
  )
    return ["IoT", "Hardware"];
  if (
    t.includes("blockchain") ||
    t.includes("sybil") ||
    t.includes("cross-chain") ||
    t.includes("smart contract") ||
    t.includes("did")
  )
    return ["Blockchain", "Web3"];
  if (
    t.includes("cloud") ||
    t.includes("kubernetes") ||
    t.includes("serverless") ||
    t.includes("container") ||
    t.includes("vm")
  )
    return ["Cloud", "DevOps"];
  if (
    t.includes("web") ||
    t.includes("api") ||
    t.includes("firewall") ||
    t.includes("dns") ||
    t.includes("supply chain")
  )
    return ["Web-App", "Network"];
  if (
    t.includes("ai") ||
    t.includes("deepfake") ||
    t.includes("adversarial") ||
    t.includes("federated") ||
    t.includes("dataset") ||
    t.includes("malware")
  )
    return ["AI/ML", "Threat Sec"];
  return ["Cybersec", "Research"];
};

/* ─── Problem Card ───────────────────────────────────────────────────── */
const ProblemCard = ({ problem, index, onClick }) => {
  const tags = getTags(problem.title);
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: (index % 12) * 0.045,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onClick(problem)}
      className="group relative bg-transparent border border-white/8 overflow-hidden cursor-pointer flex flex-col justify-between p-6 mx-2 h-full hover:border-white/30 hover:bg-white/[0.03] transition-all duration-400"
    >
      <span className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-white/0 border-r-white/0 group-hover:border-t-white/20 group-hover:border-r-white/20 transition-all duration-300" />

      <motion.div
        className="absolute left-0 top-0 w-full h-[1px] bg-white/40 pointer-events-none"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Top row */}
      <div>
        <div className="flex items-start justify-between mb-4">
          <span className="font-quicksand text-[9px] tracking-[0.35em] text-white/45 uppercase">
            PS-{problem.id.padStart(2, "0")}
          </span>
          <div className="text-white/20 group-hover:text-white/70 transition-colors">
            <ArrowUpRight size={13} />
          </div>
        </div>

        <h3 className="text-[15px] font-black text-white/80 group-hover:text-white leading-snug mb-3 tracking-normal font-ranade transition-colors line-clamp-2">
          {problem.title}
        </h3>

        <p className="text-[12px] text-white/30 leading-relaxed line-clamp-3 font-light">
          {problem.description}
        </p>
      </div>

      {/* Bottom */}
      <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/6">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="font-quicksand text-[8px] uppercase tracking-[0.3em] text-white/40 group-hover:text-white/60 transition-colors"
          >
            {tag}
            {i < tags.length - 1 && (
              <span className="ml-1.5 mr-0.5 text-white/10">/</span>
            )}
          </span>
        ))}
        {problem.challenges && problem.challenges[0] !== "" && (
          <span className="ml-auto font-quicksand text-[8px] tracking-[0.25em] text-white/40">
            {problem.challenges.length}×
          </span>
        )}
      </div>
    </motion.div>
  );
};

/* ─── Counter animation ──────────────────────────────────────────────── */
const AnimatedCount = ({ target }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame;
    const step = () => {
      setCount((c) => {
        if (c >= target) return target;
        frame = requestAnimationFrame(step);
        return c + Math.ceil((target - c) / 8);
      });
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target]);
  return <span>{count}</span>;
};

/* ─── Main ───────────────────────────────────────────────────────────── */
const ProblemS = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProblem, setActiveProblem] = useState(null);
  const [toast, setToast] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const progressScaleX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  const validProblems = problemsData
    .filter((p) => p.title?.trim())
    .filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSelectTrack = useCallback((problem) => {
    setToast(`Track selected — ${problem.title}`);
  }, []);

  const marqueeItems = [
    "Intrusion X",
    "Second Edition",
    "2026",
    "Problem Statements",
    "Cyberonites",
    "Cybersecurity",
    "Hackathon",
    "Select Your Track",
    "Intrusion X",
    "Second Edition",
    "2026",
    "Problem Statements",
  ];

  return (
    <div
      ref={containerRef}
      className="font-[system-ui] min-h-screen bg-[#080808] text-white overflow-x-hidden overflow-y-auto"
      style={{
        fontFamily: "'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,700;0,900;1,900&family=DM+Mono:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        body { background: #080808; }
        ::-webkit-scrollbar { width: 2px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); }
        .card-grid > * { min-height: 220px; }
      `}</style>

      <NoiseOverlay />

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-white z-[999] origin-left"
        style={{ width: progressScaleX }}
      />

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] bg-white text-black px-6 py-3 flex items-center gap-3 shadow-2xl"
          >
            <CheckCircle2 size={14} className="shrink-0" />
            <p className="text-xs font-mono tracking-widest uppercase">
              {toast}
            </p>
            <button
              onClick={() => setToast(null)}
              className="ml-3 opacity-40 hover:opacity-100 transition-opacity"
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <PSModal
        problem={activeProblem}
        onClose={() => setActiveProblem(null)}
        onSelectTrack={handleSelectTrack}
      />
      <main className="pt-[64px]">
        <section className="relative min-h-[50vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
            <span
              className="text-[18vw] font-black text-white/[0.05] tracking-tighter leading-none uppercase translate-y-[25%]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              IntrusionX
            </span>
          </div>

          {/* Animated horizontal rules */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[20%] left-0 right-0 h-px bg-white/5 origin-left"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.4,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-[15%] left-0 right-0 h-px bg-white/5 origin-right"
          />

          <div className="relative z-10 text-center max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[9px] tracking-[0.5em] text-white/25 uppercase mb-6"
            >
              Cyberonites · Intrusion X · Second Edition
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[13vw] sm:text-[10vw] md:text-[8rem] font-black italic leading-none tracking-tighter text-white uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Problem
              <br />
              <span
                className="text-white/20"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
              >
                Statements
              </span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full h-px bg-white/15 my-6 origin-center"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-6 inline-flex items-center gap-3 border border-white/80 px-5 py-2.5"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span
                className="text-white font-black text-sm tracking-[0.3em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                INTRUSION X
              </span>
              <span className="w-px h-4 bg-white/30" />
              <span className="font-mono text-[10px] tracking-[0.35em] text-white/50 uppercase">
                Second Edition
              </span>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center justify-center gap-10 mt-10"
            >
              {[
                {
                  label: "Challenges",
                  value: problemsData.filter((p) => p.title?.trim()).length,
                },
                { label: "Domains", value: 6 },
                { label: "Edition", value: "II" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    {typeof s.value === "number" ? (
                      <AnimatedCount target={s.value} />
                    ) : (
                      s.value
                    )}
                  </div>
                  <div className="font-mono text-[8px] tracking-[0.3em] text-white/20 uppercase mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <MarqueeStrip items={marqueeItems} />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-8">
          <div className="relative max-w-md group">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
              <Search
                size={14}
                className="text-white group-focus-within:text-white transition-colors"
              />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search problem statements..."
              className="w-full bg-transparent border-b border-white/60 focus:border-white/90 text-white/70 placeholder-white/55 pl-9 pr-8 py-3 text-sm outline-none transition-all font-light tracking-wide"
              style={{ fontFamily: "inherit" }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-2 text-white/90 hover:text-white/60 transition-colors"
              >
                <X size={12} />
              </button>
            )}
          </div>
          {validProblems.length > 0 && (
            <p className="font-clash text-[9px] tracking-[0.3em] text-white/85 uppercase mt-3">
              {validProblems.length} result
              {validProblems.length !== 1 ? "s" : ""}
              {searchQuery ? ` for "${searchQuery}"` : ""}
            </p>
          )}
        </div>

        {validProblems.length === 0 && (
          <div className="text-center py-28 text-white/55">
            <p className="font-mono text-xs tracking-[0.3em] uppercase">
              No results — "{searchQuery}"
            </p>
          </div>
        )}

        {/* ── Grid ────────────────────────────────────────────── */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24">
          <div className="card-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px gap-y-4 bg-white/6">
            {validProblems.map((problem, index) => (
              <div key={problem.id} className="bg-[#080808]">
                <ProblemCard
                  problem={problem}
                  index={index}
                  onClick={setActiveProblem}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="border-t border-white/8 bg-[#080808]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
              <span className="font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase">
                System Operational
              </span>
            </div>
            <span className="text-white/10">·</span>
            <span className="font-mono text-[9px] tracking-[0.35em] text-white/20 uppercase">
              {problemsData.filter((p) => p.title?.trim()).length} Active
            </span>
          </div>

          <div className="font-black text-lg tracking-tighter text-white/60 uppercase select-none">
            INTRUSION<span className="text-white">_X</span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-white/20 ml-3 align-middle font-normal">
              2026
            </span>
          </div>

          <Link
            to="/"
            className="flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] uppercase text-white/20 hover:text-white/60 transition-colors border border-white/8 hover:border-white/25 px-4 py-2"
          >
            <Home size={10} />
            Home
          </Link>
        </div>

        <div className="border-t border-white/5 py-4 text-center">
          <p className="font-mono text-[8px] tracking-[0.35em] text-white/10 uppercase">
            © 2026 Cyberonites · All Rights Reserved · Intrusion X Second
            Edition
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProblemS;
