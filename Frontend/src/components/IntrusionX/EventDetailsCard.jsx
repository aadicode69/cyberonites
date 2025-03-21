import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const EventDetailsCard = () => {
  return (
    <div className="bg-black border border-cyan-400 p-6 rounded-lg shadow-lg w-full max-w-[600px] mx-auto">
      <h2 className="text-cyan-400 text-2xl font-semibold font-clash text-center border-b border-cyan-400 pb-2 tracking-wide">
        MISSION BRIEFING
      </h2>

      <div className="mt-4 font-clash text-cyan-400">
        <div className="grid grid-cols-2 gap-2 items-center">
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-cyan-300" />
            <span className="text-gray-200">Date:</span>
          </div>
          <span className="text-left">April 11, 2025</span>

          <div className="flex items-center gap-3">
            <FaClock className="text-cyan-300" />
            <span className="text-gray-200">Duration:</span>
          </div>
          <span className="text-left">36+ Hours</span>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-cyan-300" />
            <span className="text-gray-200">Venue:</span>
          </div>
          <span className="text-left">GLA University, Mathura</span>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsCard;
