import React, { useState, useEffect } from "react";

const TimelineCard = ({ className }) => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const fetchTimeline = async () => {
      const data = [
        { day: "Day 1", time: "20/03/2025", event: "Registrations Open" },
        { day: "Day 2", time: "24/03/2025", event: "Problem Statements Out" },
        { day: "Day 3", time: "05/04/2025", event: "Idea Pitch (Online)" },
        { day: "Day 4", time: "11/04/2025", event: "Final Hackathon" }
      ];
      setTimeline(data);
    };
    fetchTimeline();
  }, []);

  return (
    <div className={`bg-black border border-cyan-400 p-4 md:p-6 rounded-lg shadow-lg font-clash ${className}`}>
      <h2 className="text-cyan-400 font-semibold text-xl md:text-2xl mb-3 md:mb-4 border-b border-cyan-400 pb-2 text-center tracking-wide">
        OPERATION TIMELINE
      </h2>

      <div className="grid grid-cols-10 gap-2 text-green-400 text-xs sm:text-sm md:text-base">
        <span className="text-cyan-300 font-semibold border-b border-cyan-600 pb-1 col-span-3">Date</span>
        <span className="text-cyan-300 font-semibold border-b border-cyan-600 pb-1 col-span-2">Day</span>
        <span className="text-cyan-300 font-semibold border-b border-cyan-600 pb-1 col-span-5">Event</span>

        {timeline.map((item, index) => (
          <React.Fragment key={index}>
            <span className="text-cyan-300 col-span-3">{item.time}</span>
            <span className="text-cyan-300 col-span-2">{item.day}</span>
            <span className="text-cyan-300 col-span-5">{item.event}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TimelineCard;