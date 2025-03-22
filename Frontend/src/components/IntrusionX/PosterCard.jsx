import React from "react";
import eventPix from "../../img/events/IntrusionX.png";

const PosterCard = ({ className }) => {
  return (
    <div className={`bg-black border border-cyan-400 p-4 rounded-lg shadow-lg text-center h-full ${className}`}>
      <img
        src={eventPix}
        alt="Event Poster"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default PosterCard;