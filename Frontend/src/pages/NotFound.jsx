import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/ps-final1.png";

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Dynamic Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-cyan-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "30s" }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Enhanced 404 with Multiple Layers */}
        <div className="relative mb-8">
          <h1 className="text-[12rem] md:text-[18rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500 leading-none tracking-tighter drop-shadow-2xl animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-[12rem] md:text-[18rem] font-black text-cyan-500/30 blur-md leading-none tracking-tighter transform translate-x-3 translate-y-3">
            404
          </div>
          <div className="absolute inset-0 text-[12rem] md:text-[18rem] font-black text-purple-500/20 blur-lg leading-none tracking-tighter transform -translate-x-2 -translate-y-2">
            404
          </div>
        </div>

        {/* Premium Title with Glow */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent filter drop-shadow-lg">
            Page Not Found
          </span>
        </h2>

        {/* Enhanced Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          Oops! The page you're looking for seems to have vanished into the
          digital void.
          <br className="hidden md:block" />
          <span className="text-cyan-400">Don't worry,</span> even the best
          explorers sometimes take a wrong turn in cyberspace.
        </p>

        {/* Premium Button */}
        <Link to="/">
          <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-cyan-500 to-cyan-600 text-black font-bold text-lg rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500 overflow-hidden border-2 border-cyan-400/50 hover:border-cyan-300">
            {/* Glow Layer */}
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

            {/* Button Content */}
            <span className="relative flex items-center gap-3 z-10">
              <svg
                className="w-6 h-6 transform group-hover:-translate-x-2 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Go Back Home
            </span>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 transform scale-0 group-hover:scale-110 transition-transform duration-500"></div>
          </button>
        </Link>

        {/* Additional Info with Premium Styling */}
        <div className="mt-16 space-y-4">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span className="px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700">
              Error Code: 404
            </span>
            <span className="px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700">
              Status: Lost in Space
            </span>
          </div>
          <p className="text-xs text-gray-600 font-mono">
            // TODO: Find the missing page in the multiverse
          </p>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"></div>
        <div className="h-20 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-15px) rotate(90deg) scale(1.1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-30px) rotate(180deg) scale(0.9);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-15px) rotate(270deg) scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
