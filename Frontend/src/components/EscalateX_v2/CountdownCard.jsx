import React, { useState, useEffect } from "react";

const CountdownCard = ({ className }) => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-11-08T09:00:00"); // November 8, 2025
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
    <article className={`exv2-countdown-card group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 ${className}`}>
      <div className="exv2-countdown-overlay absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="exv2-countdown-border absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      
      <div className="exv2-countdown-content relative z-10 text-center">
        <h2 className="text-xl md:text-2xl font-black text-white mb-6 tracking-wide">
          <span className="text-white">EVENT</span> <span className="text-orange-500">COUNTDOWN</span>
        </h2>

        <div className="exv2-countdown-grid grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div key={index} className="exv2-countdown-item group/item p-4 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <div className="exv2-countdown-number text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 group-hover:item:text-orange-400 transition-colors duration-300 exv2-font-clouds">
                {String(value).padStart(2, '0')}
              </div>
              <div className="exv2-countdown-unit text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-medium exv2-font-clouds">
                {unit}
              </div>
            </div>
          ))}
        </div>

        <footer className="exv2-countdown-info mt-6 space-y-3">
          <div className="exv2-countdown-screening p-4 rounded-2xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20">
            <p className="exv2-countdown-screening-text text-center text-sm text-gray-300 mb-2">
              Pre-CTF Online Screening: <span className="text-orange-400 font-semibold">October 11th, 2025 at 9:00 PM</span>
            </p>
            <p className="exv2-countdown-screening-desc text-center text-xs text-gray-400">
              Only top teams advance to the offline rounds at GLA University
            </p>
          </div>
          <p className="exv2-countdown-footer text-gray-400 text-sm text-center">
            Until Escalate<span className="exv2-logo-x-small"></span> v2 begins at <span className="text-orange-400 font-semibold">GLA University, Mathura</span>
          </p>
        </footer>
      </div>
    </article>
  );
};

export default CountdownCard;