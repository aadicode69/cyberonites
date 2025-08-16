import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const EventDetailsCard = ({ className }) => {
  const details = [
    { icon: FaCalendarAlt, label: "Dates", value: "Oct 31 - Nov 1, 2025" },
    { icon: FaClock, label: "Duration", value: "2 Days" },
    { icon: FaMapMarkerAlt, label: "Venue", value: "GLA University, Noida" },
  ];

  return (
    <div className={`group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      
      <div className="relative z-10">
        <h2 className="text-white font-bold text-xl md:text-2xl mb-6 text-center tracking-wide">
          EVENT <span className="text-orange-500">BRIEFING</span>
        </h2>

        <div className="space-y-4">
          {details.map((detail, index) => {
            const IconComponent = detail.icon;
            return (
              <div key={index} className="group/item flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover/item:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white text-lg" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-1">{detail.label}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{detail.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventDetailsCard;