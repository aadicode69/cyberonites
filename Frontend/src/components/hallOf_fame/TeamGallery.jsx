import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Users } from "lucide-react";
import TitleCard from "./TitleCard";
import teamData from "../hallOf_fame/teamData.js";
import Footer from "../footer/Footer";

const TeamGallery = () => {
  const navigate = useNavigate();
  const [starPositions, setStarPositions] = useState([]);

  useEffect(() => {
    const numStars = 100;
    const stars = Array.from({ length: numStars }, () => ({
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      size: Math.random() * 2 + 1,
      duration: `${8 + Math.random() * 12}s`,
      delay: `${Math.random() * 4}s`,
    }));
    setStarPositions(stars);
  }, []);

  const mentors = teamData.filter((member) =>
    ["Mentor", "Co-Mentor"].includes(member.role)
  );

  const leadership = teamData.filter((member) =>
    ["President", "Vice President", "General Secretary"].includes(member.role)
  );

  const heads = teamData.filter((member) =>
    [
      "Technical Head",
      "Event Head",
      "Design Head",
      "Development Head",
      "Public Relations Head",
      "Management Head",
      "Corporate Relations Head",
    ].includes(member.role)
  );

  const devTeam = teamData.filter(
    (member) => member.role === "Web Development Team Member"
  );

  return (
    <>
      <div className="relative min-h-screen font-clash bg-[#0a0a0a]">
        <div className="fixed inset-0 bg-gradient-to-b from-blue-900/10 via-[#0a0a0a] to-purple-900/10"></div>
        {starPositions.map((star, index) => (
          <div
            key={index}
            className="fixed w-[2px] h-[2px] bg-white opacity-80 animate-fall rounded-full"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: star.duration,
              animationDelay: star.delay,
              filter: "blur(0.5px)",
            }}
          ></div>
        ))}
        <div className="relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-28">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-6xl text-white font-extrabold tracking-wide mb-6"
            >
              Meet the{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Cyberonites Team
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto mb-12"
            >
              The minds behind Cyberonites, shaping the future of tech and
              cybersecurity.
            </motion.p>
          </div>

          {/* Our Inspiration (Mentors) Section */}
          <div className="mb-40 mt-24">
            <h2 className="text-2xl sm:text-5xl font-bold text-center mb-28">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] tracking-tight">
                Our Inspiration
              </span>
            </h2>
            <div className="relative">
              <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <motion.div className="flex flex-wrap justify-center gap-x-16 gap-y-28">
                {mentors.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <TitleCard {...member} tier="mentor" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Core Team Section */}
          <div className="mb-40 mt-24">
            <h2 className="text-2xl sm:text-5xl font-bold text-center mb-28">
              <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] tracking-tight">
                Core Team
              </span>
            </h2>
            <div className="relative">
              <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <motion.div className="flex flex-wrap justify-center gap-x-16 gap-y-28">
                {leadership.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <TitleCard {...member} tier="leadership" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Heads Section */}
          <div className="mb-40">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-28">
              {heads.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TitleCard {...member} tier="head" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Development Team Section */}
          <div className="mt-40">
            <h2 className="font-clash text-2xl sm:text-5xl font-bold text-center mb-28">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                Development Team
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-24">
              {devTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TitleCard {...member} tier="dev" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Home Button */}
        <button
          onClick={() => navigate("/")}
          aria-label="Home"
          className="fixed bottom-8 right-8 z-50 group"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-md transition-all duration-300 group-hover:blur-lg"></div>
            <div className="relative rounded-full p-3 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 transition-all duration-300 shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
          </div>
        </button>

        <style>{`
          @keyframes fall {
            0% {
              transform: translateY(-10vh) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(110vh) translateX(20px);
              opacity: 0;
            }
          }
          .animate-fall {
            animation: fall linear infinite;
            box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default TeamGallery;