import React, { useState } from "react";
import eventPix from "../../img/events/IntrusionX.png";
import cyberonitesMiniLogo from "../../img/escalateXv2/logo.png";

const PosterCard = ({ className }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const transform3D = `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg) translateZ(0)`;

  return (
    <article 
      className={`exv2-poster-card group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 w-full h-full ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform3D,
        transformStyle: 'preserve-3d',
        transition: mousePosition.x === 0 && mousePosition.y === 0 ? 'transform 0.5s ease-out' : 'none'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <img
          src={eventPix}
          alt="EscalateX v2 - National Cybersecurity Challenge"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>
      
      {/* <div className="absolute bottom-6 left-6 right-6 z-10 text-center">
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-2 exv2-font-cyberjunkies">
          ESCALATE<img src={cyberonitesMiniLogo} alt="Cyberonites" className="exv2-logo-x-large"/> v2
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          National Cybersecurity Challenge
        </p> */}
      {/* </div> */}
    </article>
  );
};

export default PosterCard;