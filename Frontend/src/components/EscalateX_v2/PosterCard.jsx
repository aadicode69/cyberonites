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
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <img
          src={eventPix}
          alt="EscalateX v2 - National Cybersecurity Challenge"
          className="w-full h-full object-fit transition-transform duration-700"
        />
      </div>
    </article>
  );
};

export default PosterCard;