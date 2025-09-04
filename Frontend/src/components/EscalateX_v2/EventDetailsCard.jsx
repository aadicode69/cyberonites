import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const EventDetailsCard = ({ className }) => {
  const details = [
    { icon: FaCalendarAlt, label: "Dates", value: "Nov 8-9, 2025" },
    { icon: FaClock, label: "Duration", value: "2 Days Intensive" },
    { icon: FaMapMarkerAlt, label: "Venue", value: "GLA University, Mathura" },
  ];

  return (
    <article className={`exv2-event-details-card group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 ${className}`}>
      <div className="exv2-event-details-overlay absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="exv2-event-details-border absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      
      <div className="exv2-event-details-content relative z-10">
        <h2 className="text-xl md:text-2xl font-black text-white mb-6 tracking-wide text-center exv2-font-cyberjunkies">
          <span className="text-white">EVENT</span> <span className="text-orange-500">BRIEFING</span>
        </h2>

        <div className="exv2-event-details-list space-y-4">
          {details.map((detail, index) => {
            const IconComponent = detail.icon;
            return (
              <div key={index} className="exv2-event-details-item group/item flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
                <div className="exv2-event-details-icon-container flex-shrink-0 mr-4">
                  <div className="exv2-event-details-icon-wrapper w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover/item:scale-110 transition-transform duration-300">
                    <IconComponent className="exv2-event-details-icon text-white text-lg" />
                  </div>
                </div>
                
                <div className="exv2-event-details-text flex-1">
                  <h3 className="exv2-event-details-label text-white font-semibold text-sm sm:text-base mb-1 font-sans">{detail.label}</h3>
                  <p className="exv2-event-details-value text-gray-400 text-xs sm:text-sm font-sans">{detail.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <footer className="exv2-event-details-footer mt-6 p-4 rounded-2xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20">
          <p className="exv2-event-details-screening text-center text-sm text-gray-300 mb-2">
            Pre-CTF Online Screening: <span className="text-orange-400 font-semibold">October 11th at 9:00 PM</span>
          </p>
          <p className="exv2-event-details-description text-center text-xs text-gray-400">
            High-stakes CTF qualifying round - only top teams advance to offline event
          </p>
        </footer>
      </div>
    </article>
  );
};

export default EventDetailsCard;