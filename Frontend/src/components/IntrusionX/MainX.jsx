import React, { useState, useEffect, useCallback, useMemo } from "react";
import PosterCard from "./PosterCard";
import TimelineCard from "./TimelineCard";
import EventDetailsCard from "./EventDetailsCard";
import CountdownCard from "./CountdownCard";
import ContactCard from "./ContactCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const FULL_TEXT = "Are You Ready to Hack, Defend & Win?";
const WHY_INTRUSION_ITEMS = [
  {
    title: "Hands-on Experience",
    desc: "Solve live cybersecurity challenges in real-world scenarios.",
  },
  {
    title: "For All Skill Levels",
    desc: "Open to beginners & experts with tiered challenge difficulty.",
  },
  {
    title: "Exciting Prizes & Recognition",
    desc: "Win certificates, cash prizes & career opportunities.",
  },
  {
    title: "Expert Workshops",
    desc: "Learn cutting-edge techniques from top cybersecurity professionals.",
  },
  {
    title: "Networking & Growth",
    desc: "Connect with industry leaders & like-minded peers.",
  },
];

const DigitalRain = React.memo(() => {
  const rainElements = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => (
      <div
        key={i}
        className="absolute text-cyan-400 font-mono text-xs"
        style={{
          left: `${Math.random() * 100}%`,
          top: `-${Math.random() * 20}%`,
          animation: `fallDown ${5 + Math.random() * 10}s linear infinite ${
            Math.random() * 5
          }s`,
        }}
      >
        {Array.from({ length: 15 }).map((_, j) => (
          <div key={j} style={{ opacity: Math.random() * 0.9 + 0.1 }}>
            {String.fromCharCode(0x30a0 + Math.floor(Math.random() * 96))}
          </div>
        ))}
      </div>
    ));
  }, []);

  return (
    <div className="absolute inset-0 z-1 opacity-30 overflow-hidden">
      <div style={{ animation: "digitalRain 20s linear infinite" }}>
        {rainElements}
      </div>
    </div>
  );
});

const Header = React.memo(
  ({
    pulseEffect,
    glitchActive,
    navToProblemStatements,
    navToRegistration,
  }) => (
    <div className="w-full flex flex-col md:flex-row justify-between items-center z-10 relative p-4 md:p-8">
      <div
        className={`text-cyan-400 font-panchang text-2xl md:text-3xl font-extrabold relative transition-all duration-300 mb-4 md:mb-0 ${
          pulseEffect ? "text-cyan-300 scale-110" : ""
        }`}
      >
        INTRUSION X
        <div
          className={`absolute top-0 left-0 right-0 text-cyan-400 opacity-80 transition-transform duration-100 ${
            glitchActive ? "translate-x-1 translate-y-1" : ""
          }`}
        >
          INTRUSION X
        </div>
        <div
          className={`absolute top-0 left-0 right-0 text-green-400 opacity-80 transition-transform duration-100 ${
            glitchActive ? "-translate-x-1 -translate-y-1" : ""
          }`}
        >
          INTRUSION X
        </div>
      </div>
      <div className="flex gap-4">
        <button
          onClick={navToProblemStatements}
          className="px-4 py-2 md:px-6 md:py-2.5 rounded-md bg-black border border-green-400 text-green-400 font-mono shadow-lg shadow-green-400/20 hover:bg-green-900/20 hover:text-green-300 hover:border-green-300 hover:shadow-green-300/30 hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden text-sm md:text-base"
        >
          <span className="relative z-10">PROBLEM_STATEMENTS.exe</span>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        </button>
        <button
          onClick={navToRegistration}
          className="px-4 py-2 md:px-6 md:py-2.5 rounded-md bg-black border border-cyan-400 text-cyan-400 font-mono shadow-lg shadow-cyan-400/20 hover:bg-cyan-900/20 hover:text-cyan-300 hover:border-cyan-300 hover:shadow-cyan-300/30 hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden text-sm md:text-base"
        >
          <span className="relative z-10">REGISTER</span>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        </button>
      </div>
    </div>
  )
);

const Title = React.memo(({ glitchActive, intensifyEffect, pulseEffect }) => (
  <div
    className={`text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold relative transition-all font-clash duration-300 transform ${
      glitchActive ? "skew-x-2" : ""
    } ${intensifyEffect ? "scale-110" : ""}`}
  >
    <span
      className={`text-cyan-400 transition-colors duration-300 ${
        pulseEffect ? "text-cyan-300" : ""
      }`}
    >
      INTRUSION
    </span>
    <span
      className={`text-green-500 text-5xl sm:text-7xl md:text-9xl lg:text-[160px] transition-colors duration-300 ${
        pulseEffect ? "text-green-400" : ""
      }`}
    >
      X
    </span>
    <span className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl ml-2 sm:ml-4 md:ml-8">
      2025
    </span>

    <div
      className={`absolute top-0 left-0 right-0 text-cyan-300 opacity-0 transition-all duration-100 ${
        glitchActive ? "opacity-70 translate-x-1 translate-y-1" : ""
      }`}
    >
      <span>INTRUSION</span>
      <span className="text-green-500 text-5xl sm:text-7xl md:text-8xl lg:text-[160px]">
        X
      </span>
      <span className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl ml-2 sm:ml-4 md:ml-8">
        2025
      </span>
    </div>
    <div
      className={`absolute top-0 left-0 right-0 text-green-400 opacity-0 transition-all duration-100 ${
        glitchActive ? "opacity-70 -translate-x-1 -translate-y-1" : ""
      }`}
    >
      <span>INTRUSION</span>
      <span className="text-green-500 text-4xl sm:text-6xl md:text-8xl lg:text-10xl">
        X
      </span>
      <span className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl ml-2 sm:ml-4 md:ml-8">
        2025
      </span>
    </div>
  </div>
));

const WhyIntrusionSection = React.memo(({ visible, loaded }) => (
  <div
    className={`w-full py-12 sm:py-16 px-4 md:px-8 transition-all duration-500 transform ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    } ${loaded ? "visible" : "invisible"}`}
  >
    <div className="max-w-4xl mx-auto bg-black font-clash bg-opacity-80 border-2 border-green-500 rounded-lg p-4 sm:p-6 md:p-10 backdrop-blur-md shadow-lg shadow-green-500/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0, 255, 0, 0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 255, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 0, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-green-400 rounded-tl-md"></div>
      <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-green-400 rounded-tr-md"></div>
      <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-green-400 rounded-bl-md"></div>
      <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-green-400 rounded-br-md"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-green-500"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-clash text-green-400 text-center mx-2 sm:mx-4 font-bold tracking-wider">
            WHY INTRUSIONX ?
          </h2>
          <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-green-500"></div>
        </div>

        <ul className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 text-base sm:text-lg">
          {WHY_INTRUSION_ITEMS.map((item, index) => (
            <li
              key={index}
              className="flex items-start transition-all duration-300 hover:translate-x-1 group"
            >
              <div className="flex-shrink-0 mr-3 sm:mr-4 mt-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-green-400 to-green-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-3 h-3 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-green-600 block mb-1">{item.title}</span>
                <span className="text-green-300 text-sm sm:text-base">
                  {item.desc}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-center">
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-green-900 via-green-500 to-green-900 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
));

const MainX = () => {
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);
  const [initSequence, setInitSequence] = useState(false);
  const [cursorBlink, setCursorBlink] = useState(true);
  const [glitchActive, setGlitchActive] = useState(false);
  const [pulseEffect, setPulseEffect] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [scanlineActive, setScanlineActive] = useState(true);
  const [intensifyEffect, setIntensifyEffect] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [cardsPreloaded, setCardsPreloaded] = useState(false);
  const [scrollIcon, setScrollIcon] = useState(false);

  const navigate = useNavigate();

  const navToProblemStatements = useCallback(() => {
    window.open("/prob-statement-x");
  }, []);

  const navToRegistration = useCallback(() => {
    toast.info("IntrusionX has officially concluded. See you soon at our next event!", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: true,
      pauseOnHover: false,
      icon: false,
      theme: "dark",
      className: `
        text-md
        justify-center
        font-clash
        bg-black
        text-[#00ff00]
        border-y
        border-[#00ff88]
        rounded-lg
        px-4
        py-2
        items-center
      `,
    });
  }, []);

  const handleScroll = useCallback(() => {
    if (!showCards && window.scrollY > window.innerHeight * 0.15) {
      setShowCards(true);
    }
  }, [showCards]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setLoading(false), 1000),
      setTimeout(() => setInitSequence(true), 1500),
      setTimeout(() => setConnected(true), 2000),
      setTimeout(() => setScrollIcon(true), 2500),
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
      }, 100);
      timers.push(typingTimer);
      return () => clearInterval(typingInterval);
    }, 2500);

    const effectsInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
      if (Math.random() > 0.7) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }

      if (Math.random() > 0.8) {
        setPulseEffect(true);
        setTimeout(() => setPulseEffect(false), 800);
      }
      if (Math.random() > 0.9) {
        setIntensifyEffect(true);
        setTimeout(() => setIntensifyEffect(false), 600);
      }

      if (Math.random() > 0.7) {
        setScanlineActive((prev) => !prev);
        setTimeout(() => setScanlineActive(true), 100);
      }
    }, 500);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(effectsInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <div className="flex flex-col items-center justify-between min-h-screen bg-black text-green-400 overflow-hidden relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 255, 200, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 200, 0.12) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        />

        <DigitalRain />

        <div
          className={`absolute inset-0 z-50 pointer-events-none transition-opacity duration-100 ${
            scanlineActive ? "opacity-15" : "opacity-8"
          }`}
          style={{
            backgroundImage:
              "linear-gradient(transparent 50%, rgba(0, 0, 0, 0.6) 50%)",
            backgroundSize: "100% 4px",
          }}
        />

        <div
          className={`absolute inset-0 z-40 bg-cyan-900 pointer-events-none transition-opacity duration-75 ${
            glitchActive ? "opacity-15" : "opacity-0"
          }`}
        />

        <div className="min-h-screen w-full flex flex-col">
          <Header
            pulseEffect={pulseEffect}
            glitchActive={glitchActive}
            navToProblemStatements={navToProblemStatements}
            navToRegistration={navToRegistration}
          />
          <div className="flex-grow flex flex-col items-center justify-center z-10 px-4 md:px-8 w-full">
            <div
              className={`text-center space-y-4 sm:space-y-6 backdrop-blur-sm bg-transparent p-4 md:p-8 rounded transition-all duration-500 w-full max-w-5xl mx-auto ${
                loading ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              {initSequence && (
                <div className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-normal sm:whitespace-nowrap">
                  <span
                    className="inline-block transition-transform duration-500 translate-y-0"
                    style={{ animation: "slideIn 0.5s ease-out" }}
                  >
                    The Ultimate Cybersecurity {connected ? "Hackathon" : ""}
                    <span
                      className={`${
                        cursorBlink ? "opacity-100" : "opacity-0"
                      } transition-opacity`}
                    >
                      _
                    </span>
                  </span>
                </div>
              )}

              <Title
                glitchActive={glitchActive}
                intensifyEffect={intensifyEffect}
                pulseEffect={pulseEffect}
              />

              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono mt-4 sm:mt-8 text-green-300 h-8 sm:h-10">
                {typedText}
                <span
                  className={`${
                    cursorBlink ? "opacity-100" : "opacity-0"
                  } transition-opacity`}
                >
                  _
                </span>
              </div>
              <p className="font-cyberfont max-w-4xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
                Join IntrusionX, a high-intensity cybersecurity hackathon, on
                April 11-12, 2025, at GLA University, Mathura. Compete in
                real-world hacking challenges, learn from industry experts, and
                win exciting rewards!
              </p>
          <button
            onClick={() => navigate("/intrusion-x-overview")}
            className="group px-8 py-5 mt-12 bg-black border-y-2 font-clash border-green-600/70 text-green-400 rounded-sm hover:border-green-400 hover:text-green-300 hover:translate-y-[-2px] transition-all duration-300 shadow-lg hover:shadow-green-500/40"
          >
            <span className="flex items-center justify-center">
              <span className="mr-3 text-xl group-hover:animate-pulse">⚔️</span>
              <span className="tracking-wider">
                INTRUSION<span className="text-xl font-bold">X</span> OVERVIEW
              </span>
            </span>
          </button>
            </div>
          </div>
        </div>

        <div
          className={`w-full min-h-screen py-6 sm:py-8 md:py-16 px-4 md:px-8 transition-all duration-500 transform ${
            showCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } ${cardsPreloaded ? "visible" : "invisible"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-6xl mx-auto">
            <div className="flex flex-col gap-4 md:gap-6 w-full items-stretch">
              <PosterCard className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-4 md:gap-6 w-full items-stretch">
              <TimelineCard className="w-full" />
              <EventDetailsCard className="w-full" />
            </div>
            <div className="md:col-span-2 flex justify-center w-full">
              <ContactCard className="w-full" />
            </div>
          </div>
        </div>

        <WhyIntrusionSection visible={showCards} loaded={cardsPreloaded} />

        <style jsx global>{`
          @keyframes gridMove {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 50px 50px;
            }
          }
          @keyframes glitchX {
            0% {
              transform: translate(0, 0);
            }
            33% {
              transform: translate(-2px, 2px);
            }
            66% {
              transform: translate(2px, -2px);
            }
            100% {
              transform: translate(0, 0);
            }
          }

          .text-green-500 {
            animation: glitchX 1s infinite;
          }
          @keyframes pulseGlow {
            0% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.4;
            }
            100% {
              opacity: 0.2;
            }
          }

          @keyframes slideIn {
            from {
              transform: translateY(-20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes fallDown {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(1000%);
            }
          }

          @keyframes digitalRain {
            from {
              opacity: 0.3;
            }
            to {
              opacity: 0.3;
            }
          }
        `}</style>
        <button
          className="fixed bottom-5 text-white right-5 z-50 bg-gradient-to-tl from-cyan-600 to-lime-600 hover:shadow-lg hover:scale-105 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-4 rounded-full flex items-center justify-center"
          onClick={() => navigate("/")}
          aria-label="Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 9.75l8.485-7.485a2.25 2.25 0 013.03 0L23 9.75M3.75 9.75V21a2.25 2.25 0 002.25 2.25h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v4.5a.75.75 0 00.75.75h4.5A2.25 2.25 0 0020.25 21V9.75m-16.5 0L12 3m8.25 6.75L12 3"
            />
          </svg>
        </button>
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default MainX;