import React, { useState, useEffect } from "react";

const CountdownCard = ({ className }) => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-04-11T10:00:00");
    const now = new Date();
    const difference = eventDate - now;

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`bg-black border border-cyan-400 p-4 md:p-6 rounded-lg font-clash shadow-lg text-center ${className}`}>
      <h2 className="text-cyan-400 text-xl md:text-2xl font-semibold tracking-wide">COUNTDOWN</h2>

      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-3 md:mt-6 mb-2">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <div
            key={index}
            className="bg-cyan-900 text-cyan-300 px-2 sm:px-3 md:px-4 py-2 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] rounded-md shadow-lg shadow-cyan-700 text-sm md:text-base transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-cyan-500/80 text-center"
          >
            <span className="block text-xl sm:text-2xl md:text-3xl font-bold">{value}</span>
            <span className="text-xs capitalize text-gray-200">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownCard;