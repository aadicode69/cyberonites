import React, { useState, useEffect } from "react";

const V2EventCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-11-08T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsActive(true);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsActive(false);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBlock = ({ value, label, delay = 0 }) => (
    <div className="relative group" style={{ animationDelay: `${delay}s` }}>
      <div className="relative bg-gradient-to-br from-black via-cyan-900/20 to-black border-2 border-cyan-500/50 rounded-lg p-6 md:p-8 lg:p-10 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
        <div className="text-center">
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold font-clash text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 via-sky-500 to-cyan-600 mb-2 group-hover:from-cyan-300 group-hover:via-sky-400 group-hover:to-cyan-500 transition-all duration-300">
            {value.toString().padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm lg:text-base font-clash text-cyan-500/80 tracking-widest uppercase">
            {label}
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>

        <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-500/20 font-clash text-xs animate-pulse"
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </div>
          ))}
        </div>
      </div>

      {/* Separator dots */}
      {label !== "SECONDS" && (
        <div className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 transform -translate-y-1/2 flex-col space-y-2">
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      )}
    </div>
  );

  return (
    <div className="relative w-full min-h-[50vh] flex items-center justify-center py-16 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-blue-900/20 to-cyan-900/10 blur-3xl animate-pulse"></div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
  linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
`,
            backgroundSize: "30px 30px",
            animation: "grid-drift 25s linear infinite",
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-clash text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 via-sky-500 to-cyan-700 mb-4 tracking-wider">
            COUNTDOWN TO CHAOS
          </h2>
          <div className="flex justify-center items-center space-x-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-cyan-500"></div>
            <div className="text-cyan-400 font-clash text-sm tracking-widest">
              THE DIGITAL APOCALYPSE BEGINS
            </div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>
        </div>

        {/* Countdown Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-12">
          <TimeBlock value={timeLeft.days} label="DAYS" delay={0} />
          <TimeBlock value={timeLeft.hours} label="HOURS" delay={0.1} />
          <TimeBlock value={timeLeft.minutes} label="MINUTES" delay={0.2} />
          <TimeBlock value={timeLeft.seconds} label="SECONDS" delay={0.3} />
        </div>

        {/* Event Info */}
        <div className="text-center space-y-4">
          <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-clash text-cyan-400 mb-4 tracking-wider">
              ESCALATEX V2 COMMENCES
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-cyan-300/80">
              <div>
                <div className="font-clash text-sm text-cyan-500/70 mb-1">
                  DATE
                </div>
                <div className="font-bold font-ranade">8TH - 9TH NOV, 2025</div>
              </div>
              <div>
                <div className="font-clash text-sm text-cyan-500/70 mb-1">
                  VENUE
                </div>
                <div className="font-bold font-ranade">GLA UNIVERSITY, MATHURA</div>
              </div>
              <div>
                <div className="font-clash text-sm text-cyan-500/70 mb-1">
                  STATUS
                </div>
                <div className="font-bold text-sky-400 animate-pulse font-ranade">
                  {isActive ? "ACTIVE" : "MISSION ACCOMPLISHED"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent animate-pulse"></div>
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="absolute top-0 left-1/4 text-cyan-500/10 font-clash text-xs animate-pulse">
        {"<script>hack();</script>"}
      </div>
      <div
        className="absolute bottom-0 right-1/4 text-sky-500/10 font-clash text-xs animate-pulse"
        style={{ animationDelay: "2s" }}
      >
        {"root@escalatex:~# exploit"}
      </div>

      <style>{`
        @keyframes grid-drift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(30px, 30px);
          }
        }
      `}</style>
    </div>
  );
};

export default V2EventCountdown;
