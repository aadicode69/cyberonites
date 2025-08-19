import React from "react";
import eventPix from "../../img/events/IntrusionX.png";

const PosterCard = ({ className }) => {
  return (
    <article className={`exv2-poster-card group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 h-full ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      
      <div className="relative z-10">
        <div className="relative overflow-hidden rounded-2xl mb-6">
          <img
            src={eventPix}
            alt="EscalateX v2 - National Cybersecurity Challenge"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-2 exv2-font-cyberjunkies">
            ESCALATE<span className="exv2-logo-x exv2-logo-x-small"></span> v2
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            National Cybersecurity Challenge
          </p>
        </div>
      </div>
    </article>
  );
};

export default PosterCard;