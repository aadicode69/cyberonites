import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Users } from "lucide-react";
import TitleCard from "./TitleCard";
import teamData from "../hallOf_fame/teamData.json";
import Footer from "../footer/Footer";

function TeamGallery() {
  const navigate = useNavigate();
  const [starPositions, setStarPositions] = useState([]);

  useEffect(() => {
    const numStars = 50;
    const stars = Array.from({ length: numStars }, () => ({
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      duration: `${2 + Math.random() * 4}s`,
      delay: `${Math.random() * 6}s`,
    }));
    setStarPositions(stars);
  }, []);

  const coreTeamRoles = [
    "President",
    "Vice President",
    "General Secretary",
    "Technical Head",
    "Event Head",
    "Design Head",
    "Development Head",
  ];
  const coreTeam = teamData.filter((member) =>
    coreTeamRoles.includes(member.role)
  );
  const developmentTeam = teamData.filter(
    (member) => member.role === "Development Team Member"
  );

  return (
    <>
      <div className="min-h-screen font-clash w-full bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center px-6 relative overflow-hidden">
        {starPositions.map((star, index) => (
          <div
            key={index}
            className="absolute w-[2px] h-[2px] bg-white opacity-80 animate-fall"
            style={{
              left: star.left,
              top: star.top,
              animationDuration: star.duration,
              animationDelay: star.delay,
            }}
          ></div>
        ))}
        <div className="w-full max-w-6xl text-center py-16">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl font-extrabold tracking-wide mb-6"
          >
            Meet the {" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Cyberonites Team
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-12"
          >
            The minds behind Cyberonites, shaping the future of tech and cybersecurity.
          </motion.p>

          {[
            { title: "Core Team", data: coreTeam },
            { title: "Development Team", data: developmentTeam },
          ].map(({ title, data, color }, idx) => (
            <motion.section
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: idx * 0.3 }}
              className="w-full mb-16"
            >
              <h2
                className={`relative text-4xl font-bold my-3 text-${color} flex items-center justify-center gap-3`}
              >
                {title}
              </h2>
              <div className="flex flex-wrap justify-center gap-8 mt-6">
                {data.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-[90%] sm:w-[70%] md:w-[45%] lg:w-[30%] flex justify-center"
                  >
                    <TitleCard {...member} />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
        <button
          className="fixed bottom-5 text-white right-5 z-50 bg-gradient-to-tl from-blue-600 to-purple-500 hover:shadow-lg hover:scale-105 transition-all duration-300 py-4 px-4 rounded-full flex items-center justify-center"
          onClick={() => navigate("/")}
          aria-label="Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 9.75l8.485-7.485a2.25 2.25 0 013.03 0L23 9.75M3.75 9.75V21a2.25 2.25 0 002.25 2.25h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v4.5a.75.75 0 00.75.75h4.5A2.25 2.25 0 0020.25 21V9.75m-16.5 0L12 3m8.25 6.75L12 3"
            />
          </svg>
        </button>
      </div>
      <Footer />

      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(150vh);
              opacity: 0.3;
            }
          }
          .animate-fall {
            animation: fall linear infinite;
            width: 1px;
            height: 40px;
            background: linear-gradient(to bottom, transparent, white);
            border-radius: 50%;
          }
        `}
      </style>
    </>
  );
}

export default TeamGallery;
