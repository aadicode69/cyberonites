import React, { useState, useEffect, useCallback, useMemo } from "react";
import PosterCard from "./PosterCard";
import TimelineCard from "./TimelineCard";
import EventDetailsCard from "./EventDetailsCard";
import CountdownCard from "./CountdownCard";
import ContactCard from "./ContactCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomFooter from "./CustomFooter";
import { useNavigate } from "react-router-dom";

const FULL_TEXT = "Are You Ready to Escalate Your Cybersecurity Skills?";
const WHY_INTRUSION_ITEMS = [
  {
    title: "Advanced Skill Development",
    desc: "Develop advanced cyber defense and attack simulation skills through hands-on competitions.",
  },
  {
    title: "Industry-Academia Bridge",
    desc: "Expert-led sessions and networking with leading cybersecurity professionals.",
  },
  {
    title: "Cross-Campus Collaboration",
    desc: "Unite with students from diverse disciplines across GLA campuses.",
  },
  {
    title: "Real-World Applications",
    desc: "Tackle practical cybersecurity challenges in Web Exploitation, Digital Forensics, OSINT & more.",
  },
  {
    title: "Career Advancement",
    desc: "Enhanced internship and placement opportunities through industry connections.",
  },
];

const FloatingParticles = React.memo(() => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="absolute animate-float opacity-20"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`,
        }}
      >
        <div className="w-2 h-2 bg-orange-400 rounded-full shadow-lg shadow-orange-500/50"></div>
      </div>
    ));
  }, []);

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{particles}</div>;
});

const Header = React.memo(({ navToProblemStatements, navToRegistration, navToHome }) => (
  <div className="w-full flex flex-col md:flex-row justify-between items-center z-10 relative p-4 md:p-8">
    <div className="text-white font-bold text-2xl md:text-3xl mb-4 md:mb-0 relative group">
      <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
        ESCALATE X v2
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm">
        ESCALATE X v2
      </div>
    </div>
    <div className="flex gap-4">
      <button
        onClick={navToHome}
        className="group relative px-4 py-2 md:px-6 md:py-2.5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white hover:text-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 text-sm md:text-base overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative z-10 font-medium">← Home</span>
      </button>
      <button
        onClick={navToProblemStatements}
        className="group relative px-4 py-2 md:px-6 md:py-2.5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white hover:text-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 text-sm md:text-base overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative z-10 font-medium">Problem Statements</span>
      </button>
      <button
        onClick={navToRegistration}
        className="group relative px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 text-sm md:text-base overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative z-10">Register Now</span>
      </button>
    </div>
  </div>
));

const Title = React.memo(() => (
  <div className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold relative transition-all duration-300 transform hover:scale-105">
    <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
      ESCALATE
    </span>
    <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent text-5xl sm:text-7xl md:text-9xl lg:text-[160px] drop-shadow-2xl">
      X
    </span>
    <span className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl ml-2 sm:ml-4 md:ml-8 drop-shadow-lg">
      v2
    </span>
  </div>
));

const WhyIntrusionSection = React.memo(({ visible, loaded }) => (
  <div
    className={`w-full py-12 sm:py-16 px-4 md:px-8 transition-all duration-700 transform ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    } ${loaded ? "visible" : "invisible"}`}
  >
    <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 sm:p-8 md:p-12 shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-8 sm:mb-10">
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-orange-500"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center mx-4 sm:mx-6 font-bold tracking-wider">
            WHY <span className="text-orange-500">ESCALATE X</span> v2 ?
          </h2>
          <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-orange-500"></div>
        </div>

        <ul className="space-y-6 sm:space-y-8 mb-8 text-base sm:text-lg">
          {WHY_INTRUSION_ITEMS.map((item, index) => (
            <li
              key={index}
              className="group flex items-start transition-all duration-300 hover:translate-x-2"
            >
              <div className="flex-shrink-0 mr-4 sm:mr-6 mt-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/30">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-orange-400 font-semibold block mb-2 text-lg sm:text-xl">{item.title}</span>
                <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.desc}</span>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="w-full flex justify-center">
          <div className="w-32 sm:w-48 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
));

const EscX_v2 = () => {
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);
  const [initSequence, setInitSequence] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCards, setShowCards] = useState(false);
  const [cardsPreloaded, setCardsPreloaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navigate = useNavigate();

  const navToProblemStatements = useCallback(() => {
    window.open("/prob-statement-x");
  }, []);

  const navToRegistration = useCallback(() => {
    toast.info("EscalateX v2 registrations open October 10, 2025. Stay tuned!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      className: "bg-black/90 backdrop-blur-lg border border-orange-500/30 rounded-xl text-white",
    });
  }, []);

  const navToHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleScroll = useCallback(() => {
    if (!showCards && window.scrollY > window.innerHeight * 0.15) {
      setShowCards(true);
    }
  }, [showCards]);

  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setLoading(false), 1000),
      setTimeout(() => setInitSequence(true), 1500),
      setTimeout(() => setConnected(true), 2000),
      setTimeout(() => setCardsPreloaded(true), 2000),
    ];

    let currentIndex = 0;
    const typingTimer = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (currentIndex <= FULL_TEXT.length) {
          setTypedText(FULL_TEXT.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 80);
      timers.push(typingInterval);
      return () => clearInterval(typingInterval);
    }, 2500);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll();

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  return (
    <>
      <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/5"></div>
          <div 
            className="absolute w-96 h-96 rounded-full bg-orange-500/10 blur-3xl transition-transform duration-1000 ease-out"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          ></div>
        </div>

        <FloatingParticles />

        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="min-h-screen w-full flex flex-col">
          <Header
            navToProblemStatements={navToProblemStatements}
            navToRegistration={navToRegistration}
            navToHome={navToHome}
          />
          
          <div className="flex-grow flex flex-col items-center justify-center z-10 px-4 md:px-8 w-full">
            <div className={`text-center space-y-6 sm:space-y-8 backdrop-blur-sm bg-white/5 p-6 md:p-10 rounded-3xl border border-white/10 transition-all duration-700 w-full max-w-6xl mx-auto shadow-2xl ${loading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
              
              {initSequence && (
                <div className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-400">
                  <span className="inline-block transition-transform duration-500">
                    National Cybersecurity {connected ? "Challenge" : ""}
                    <span className="animate-pulse text-white">_</span>
                  </span>
                </div>
              )}

              <Title />

              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-8 text-gray-300 min-h-[3rem]">
                {typedText}
                <span className="animate-pulse text-orange-500">|</span>
              </div>

              <p className="max-w-4xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed">
                Join EscalateX v2, a national-level cybersecurity challenge on{" "}
                <span className="text-orange-400 font-semibold">October 31 - November 1, 2025</span>, at{" "}
                <span className="text-white font-semibold">GLA University Noida</span>. Experience hands-on competitions, expert sessions, and industry collaboration across Web Exploitation, Digital Forensics, OSINT, Cryptography & more!
              </p>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className={`w-full min-h-screen py-8 sm:py-12 md:py-20 px-4 md:px-8 transition-all duration-700 transform ${showCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${cardsPreloaded ? "visible" : "invisible"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
            <div className="flex flex-col gap-6 md:gap-8 w-full">
              <PosterCard className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-6 md:gap-8 w-full">
              <TimelineCard className="w-full" />
              <EventDetailsCard className="w-full" />
              <CountdownCard className="w-full" />
            </div>
            <div className="lg:col-span-2 flex justify-center w-full">
              <ContactCard className="w-full max-w-4xl" />
            </div>
          </div>
        </div>

        <WhyIntrusionSection visible={showCards} loaded={cardsPreloaded} />

        {/* Go to Top Button */}
        <button
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:scale-110 transition-all duration-300 p-4 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-orange-500/50 backdrop-blur-lg border border-white/10"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Go to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      <CustomFooter />
      <ToastContainer />

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default EscX_v2;