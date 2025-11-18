import React, { useState, useEffect, useRef } from 'react';

const V2TimeLine = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);

  const timelineEvents = [
    {
      id: 1,
      phase: "PRE-SCREENING",
      title: "CTF QUALIFIERS",
      date: "11TH OCT, 2025",
      time: "ONLINE",
      description: "Elite hackers face advanced challenges in a pre-screening round. Only top 100 teams will be shortlisted for the final competition on 9th.",
      icon: "01",
      details: [
        "Advanced multi-domain challenges",
        "Real-time competitive environment",
        "Top performers advance to finals",
      ],
    },
    {
      id: 2,
      phase: "KNOWLEDGE EXCHANGE",
      title: "VILLAGES & WORKSHOPS",
      date: "8TH NOV, 2025",
      time: "GLA University, Mathura",
      description: "Learn from industry experts and explore cutting-edge cybersecurity through hands-on sessions.",
      icon: "02",
      details: [
        "Expert-led interactive workshops",
        "No theories, only practicals",
        "Hands-on practical experiences",
        "Professional networking opportunities",
      ],
      registerLink: "https://forms.gle/n4txPVJFN5QXyqN49",
    },
    {
      id: 3,
      phase: "CHAMPIONSHIP",
      title: "CTF FINAL BATTLE",
      date: "9TH NOV, 2025",
      time: "GLA University, Mathura",
      description: "The ultimate 8-hour cybersecurity championship. Teams face the most challenging scenarios across all security domains.",
      icon: "03",
      details: [
        "8-hour intensive competition",
        "Multi-domain security challenges",
        "Championship prizes & recognition",
      ],
      registerLink: "https://forms.gle/WQveveFCinaFSo3EA",
        },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = timelineRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,150,255,0.1) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-3xl"></div>

      <div ref={timelineRef} className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 mb-6 font-clash tracking-tight">
            TIMELINE
          </h2>
          <div className="flex items-center justify-center space-x-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-cyan-400/40"></div>
            <span
              className="text-cyan-400/80 text-sm tracking-[0.2em] uppercase font-medium"
              style={{ fontFamily: "Ranade, sans-serif" }}
            >
              Path to Digital Mastery
            </span>
            <div className="w-24 h-px bg-gradient-to-r from-cyan-400/40 via-blue-400/30 to-transparent"></div>
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {timelineEvents.map((event, index) => {
              const isVisible = visibleItems.includes(index);

              return (
                <div
                  key={event.id}
                  className={`timeline-item group transition-all duration-1000 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  data-index={index}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="relative flex flex-col h-full">
                    <div className="bg-gradient-to-br from-blue-900/10 to-cyan-900/5 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 group-hover:border-cyan-400/40 group-hover:from-blue-900/15 group-hover:to-cyan-900/10 transition-all duration-500 shadow-2xl group-hover:shadow-cyan-500/20 flex flex-col flex-grow">
                      <h3 className="text-xl xl:text-2xl font-clash font-bold text-blue-400 mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                        {event.title}
                      </h3>

                      <div className="flex flex-col space-y-2 mb-6">
                        <div className="flex items-center space-x-3 text-cyan-400/70">
                          <div className="w-2 h-2 rounded-full bg-blue-400/60"></div>
                          <span
                            className="font-medium"
                            style={{ fontFamily: "Ranade, sans-serif" }}
                          >
                            {event.date}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 text-cyan-400/70">
                          <div className="w-2 h-2 rounded-full bg-blue-400/60"></div>
                          <span
                            className="font-medium"
                            style={{ fontFamily: "Ranade, sans-serif" }}
                          >
                            {event.time}
                          </span>
                        </div>
                      </div>

                      <p
                        className="text-cyan-300/80 leading-relaxed mb-6 text-base"
                        style={{ fontFamily: "Ranade, sans-serif" }}
                      >
                        {event.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {event.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-start space-x-3 text-cyan-400/70"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60 mt-2 flex-shrink-0"></div>
                            <span
                              className="text-sm leading-relaxed"
                              style={{ fontFamily: "Ranade, sans-serif" }}
                            >
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Register Button */}
                      {event.registerLink && (
                        <div className="mt-auto flex justify-center">
                          <a
                            href={event.registerLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 rounded-sm bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg hover:shadow-cyan-400/30 hover:scale-105 transition-all duration-300"
                            style={{ fontFamily: "Ranade, sans-serif" }}
                          >
                            Register Now
                          </a>
                        </div>
                      )}
                    </div>

                    {index < timelineEvents.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-8">
                        <div className="w-px h-12 bg-gradient-to-b from-blue-400/20 to-cyan-400/10"></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;600;700&family=Ranade:wght@400;500;600&display=swap');
      `}</style>
    </section>
  );
};

export default V2TimeLine;
