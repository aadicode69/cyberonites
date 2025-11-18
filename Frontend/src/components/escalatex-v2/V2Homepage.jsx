import React, { useState, useEffect } from "react";
import logo from "../../img/escalate-v2/logo.png";
import { useNavigate } from "react-router-dom";

const V2HomePage = () => {
  const [textVisible, setTextVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setTextVisible(true), 500);
  }, []);

  const handleRegister = () => {
    navigate(
      "/capturetheflag");
  };

  const learnMore = () => {
    window.open("https://chat.whatsapp.com/LMMLAM0TZrSLuBTCP0dDgY", "_blank");
  };

  return (
    <div className="font-clash relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4">
        <div
          className={`relative transition-all duration-1000 ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-panchang text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 via-cyan-500 to-blue-600 relative animate-pulse">
            <span className="inline-block">Escalate</span>
            <span>
              <img src={logo} alt="logo" className="inline-block h-36" />
            </span>
            <span className="ml-4 text-6xl md:text-8xl font-panchang text-cyan-400 tracking-widest">
              V2
            </span>
          </h1>

          <div
            className={`mt-8 transition-all duration-1000 delay-500 ${
              textVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-md md:text-lg font-semibold text-cyan-400/80 tracking-widest">
              Not a Game. Not a Test. This is WAR.
            </p>
            <p className="text-md md:text-lg font-semibold text-cyan-500/70 tracking-widest">
              Firewalls will burn. Systems will collapse. Flags await the
              fearless. <br></br>Glory belongs only to those who dare to rise.
            </p>
            <br></br>
            <p className="text-sm md:text-base text-cyan-400/60 tracking-widest mt-2">
              At GLA University, Mathura
            </p>
            <p className="text-sm text-cyan-400/60 tracking-widest">
              8TH - 9TH NOV, 2#25
            </p>
          </div>

          <div
            className={`mt-12 space-x-6 transition-all duration-1000 delay-700 ${
              textVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-black text-lg font-bold tracking-wider hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
              onClick={handleRegister}
            >
              <span className="relative z-10">Explore EscalateX</span>
              <div className="absolute inset-0 border-2 border-cyan-300/0 group-hover:border-cyan-300/50 transition-all duration-300"></div>
            </button>

            <button
              className="group relative px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg tracking-wider hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 transform hover:scale-105"
              onClick={learnMore}
            >
              <span className="relative z-10">Join Our Community</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>

        <div className="absolute -top-20 -left-20 w-40 h-40 border border-cyan-500/20 rotate-45 animate-spin-slow opacity-30"></div>
        <div
          className="absolute -bottom-20 -right-20 w-32 h-32 border border-blue-500/20 rotate-45 animate-spin-slow opacity-30"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>

        <div className="absolute top-10 left-10 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50 animate-pulse"></div>
        <div
          className="absolute top-10 right-10 w-8 h-8 border-r-2 border-t-2 border-cyan-400/50 animate-pulse"
          style={{ animationDelay: "0.25s" }}
        ></div>
        <div
          className="absolute bottom-10 left-10 w-8 h-8 border-l-2 border-b-2 border-cyan-400/50 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50 animate-pulse"
          style={{ animationDelay: "0.75s" }}
        ></div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-cyan-500/60 text-xs tracking-widest mb-2">
          SCROLL TO EXPLORE
        </div>
        <div className="w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent animate-pulse mx-auto"></div>
        <div className="mt-2">
          <svg
            className="w-6 h-6 text-cyan-500/60 animate-bounce mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes animate-spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: animate-spin-slow 20s linear infinite;
        }

        @keyframes glow-pulse {
          0%,
          100% {
            text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff,
              0 0 20px #00ffff, 0 0 35px #00ffff, 0 0 40px #00ffff;
          }
          50% {
            text-shadow: 0 0 2px #00ffff, 0 0 5px #00ffff, 0 0 8px #00ffff,
              0 0 12px #00ffff, 0 0 18px #00ffff, 0 0 25px #00ffff;
          }
        }
      `}</style>
    </div>
  );
};

export default V2HomePage;
