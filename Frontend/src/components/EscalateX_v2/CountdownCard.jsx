import React, { useState, useEffect } from "react";

const CountdownCard = ({ className }) => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-10-31T09:00:00");
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
    <div className={`group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      
      <div className="relative z-10 text-center">
        <h2 className="text-white font-bold text-xl md:text-2xl mb-6 tracking-wide">
          EVENT <span className="text-orange-500">COUNTDOWN</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div key={index} className="group/item p-4 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 group-hover/item:text-orange-400 transition-colors duration-300">
                {String(value).padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-medium">
                {unit}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Until EscalateX v2 begins at <span className="text-orange-400 font-semibold">GLA University</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownCard;