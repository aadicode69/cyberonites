import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TitleCard from "./TitleCard";
import teamData from "../team-2025/teamData.js";
import Footer from "../footer/Footer";

const TeamGallery = () => {
  const navigate = useNavigate();
  const [starPositions, setStarPositions] = useState([]);

  useEffect(() => {
    const numStars = 80;
    const stars = Array.from({ length: numStars }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: `${10 + Math.random() * 10}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setStarPositions(stars);
  }, []);

  const mentors = teamData.filter((m) =>
    ["Mentor", "Co-Mentor"].includes(m.role)
  );

  const leadership = teamData.filter((m) =>
    ["President", "Vice President", "General Secretary"].includes(m.role)
  );

  const heads = teamData.filter((member) =>
  [
    "Technical Head",
    "Event Head",
    "Design Head",
    "Development Head",
    "Management Head",
    "Content Head",
    "PR Head",
    "CR Head",
  ].includes(member.role)
  );

  const devTeam = teamData.filter(
    (m) => m.role === "Web Development Team Member"
  );

  const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: Math.min(i * 0.05, 0.5) },
  });

  return (
    <>
      <div className="relative min-h-screen bg-[#0a0a0a] font-clash overflow-visible">
  
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-[#0a0a0a] to-purple-900/10 -z-20" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          {starPositions.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-80 animate-fall"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                animationDuration: star.duration,
                animationDelay: star.delay,
                filter: "blur(0.4px)",
              }}
            />
          ))}
        </div>

       
        <div className="relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-visible">
      
          <div className="text-center mb-32">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-6xl font-extrabold text-white mb-6"
            >
              Meet the{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Cyberonites Team
              </span>
            </motion.h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              The minds behind Cyberonites, shaping the future of technology and
              cybersecurity.
            </p>
          </div>

          {/* Mentors */}
          <section className="mb-40 overflow-visible">
            <h2 className="text-center text-5xl font-bold mb-28 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Our Inspiration
            </h2>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-28 overflow-visible">
              {mentors.map((m, i) => (
                <motion.div key={m.name} {...fadeUp(i)}>
                  <TitleCard {...m} tier="mentor" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Core Team */}
          <section className="mb-40 overflow-visible">
            <h2 className="text-center text-5xl font-bold mb-28 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Core Team
            </h2>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-28 overflow-visible">
              {leadership.map((m, i) => (
                <motion.div key={m.name} {...fadeUp(i)}>
                  <TitleCard {...m} tier="leadership" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Heads */}
          <section className="mb-40 overflow-visible">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-28 overflow-visible">
              {heads.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: Math.min(i * 0.05, 0.5) }}
                >
                  <TitleCard {...m} tier="head" />
                </motion.div>
              ))}
            </div>
          </section>

    
        </div>

        
<a href="/" class="home-button" aria-label="Go to Home">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
</a>
        <style>{`
          @keyframes fall {
            0% { transform: translateY(-10vh); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(110vh); opacity: 0; }
          }
          .animate-fall {
            animation: fall linear infinite;
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
};

export default TeamGallery;
