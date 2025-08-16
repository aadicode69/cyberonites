import React, { useState, useEffect } from "react";

const TimelineCard = ({ className }) => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const fetchTimeline = async () => {
      const data = [
        { day: "Phase 1", time: "01/09/2025", event: "Planning & Coordination" },
        { day: "Phase 2", time: "10-11/10/2025", event: "Pre-Screening CTF (Online)" },
        { day: "Day 1", time: "31/10/2025", event: "Knowledge Villages & Expert Talks" },
        { day: "Day 2", time: "01/11/2025", event: "Final CTF Competition" }
      ];
      setTimeline(data);
    };
    fetchTimeline();
  }, []);

  return (
    <div className={`group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      
      <div className="relative z-10">
        <h2 className="text-white font-bold text-xl md:text-2xl mb-6 text-center tracking-wide">
          ESCALATE X v2 <span className="text-orange-500">TIMELINE</span>
        </h2>

        <div className="space-y-4">
          {timeline.map((item, index) => (
            <div key={index} className="group/item flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover/item:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="mb-2 sm:mb-0">
                    <h3 className="text-white font-semibold text-sm sm:text-base">{item.day}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 text-xs sm:text-sm font-medium">{item.event}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;