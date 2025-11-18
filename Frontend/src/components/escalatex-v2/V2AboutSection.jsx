import React, { useState, useEffect, useRef } from "react";

const V2AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [typedText, setTypedText] = useState("");
  const sectionRef = useRef(null);

  const introText = "WHERE HACKERS BECOME LEGENDS";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && typedText.length < introText.length) {
      const timeout = setTimeout(() => {
        setTypedText(introText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, typedText]);

  const tabs = [
    { id: "overview", label: "OVERVIEW" },
    { id: "legacy", label: "LEGACY 2024" },
    { id: "mission", label: "MISSION 2025" },
    { id: "madness", label: "THE MADNESS" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyan-400 font-clash tracking-wider">
              Cyberonites Club presents{" "}
              <span className="text-cyan-600 italic">EscalateX v2</span>
            </h3>
            <div className="font-ranade text-cyan-200 leading-relaxed space-y-4">
              <p>
                Born from the digital underground,{" "}
                <span className="text-cyan-400 font-semibold">
                  EscalateX v2
                </span>{" "}
                is not just an event—it's a digital battlefield where the most
                elite cyber warriors gather to prove their worth. The{" "}
                <span className="text-cyan-600 font-semibold">
                  Cyberonites Club
                </span>{" "}
                has forged this arena to separate the script kiddies from the
                true digital gladiators.
              </p>
              <p>
                This isn't your average CTF Competition. This is where
                vulnerabilities become weapons, where code becomes art, and
                where the impossible becomes inevitable. We're building the next
                generation of cyber defenders through controlled chaos and
                digital warfare.
              </p>
              <div className="bg-black/50 border-l-4 border-cyan-500 p-3 rounded-r">
                <p className="text-cyan-400 font-mono text-sm">
                  "In cyberspace, there are no rules—only consequences and those
                  smart enough to exploit them."
                </p>
              </div>
            </div>
          </div>
        );

      case "legacy":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyan-400 font-clash tracking-wider">
              LEGACY OF DIGITAL DOMINANCE
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-6 rounded border border-cyan-500/30">
                <h4 className="text-cyan-400 font-bold font-clash text-lg mb-4">
                  Troop Strength
                </h4>
                <ul className="space-y-2 font-ranade text-cyan-300/80">
                  <li className="flex justify-between">
                    <span>Top Champions</span>
                    <span className="text-cyan-400 font-bold">3</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Qualified for Final Championship</span>
                    <span className="text-cyan-400 font-bold">50</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Participants in Pre-Screening </span>
                    <span className="text-cyan-400 font-bold">800+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Total Participants</span>
                    <span className="text-cyan-400 font-bold">1000+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Coffee Consumed (L)</span>
                    <span className="text-cyan-400 font-bold">∞</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="bg-black/50 border border-cyan-500/30 p-4 rounded">
                  <h5 className="text-cyan-400 font-clash mb-2">
                    INDUSTRY LEGENDS SPOKE
                  </h5>
                  <p className="text-sm font-ranade text-cyan-300/80">
                    Deloitte, HCL, and HackersVilla veterans shared their war
                    stories, from hardware exploitation to web application
                    annihilation.
                  </p>
                </div>

                <div className="bg-black/50 border border-cyan-500/30 p-4 rounded">
                  <h5 className="text-cyan-400 font-clash mb-2">
                    NATIONWIDE CHAOS
                  </h5>
                  <p className="text-sm text-cyan-300/80 font-ranade">
                    Teams from across India descended upon Mathura, turning the
                    campus into a temporary cybersecurity battleground.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "mission":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyan-400 font-clash tracking-wider">
              MISSION 2025: ESCALATE EVERYTHING
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded border-l-4 border-cyan-500">
                <h4 className="text-cyan-400 font-clash text-lg mb-4 font-bold">
                  PRIMARY OBJECTIVES
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      num: "01",
                      title: "BATTLEFIELD GATHERING",
                      desc: "Bring together top cybersecurity warriors on a single battlefield and let them compete to claim victory.",
                    },
                    {
                      num: "02",
                      title: "SKILL SHOWCASE",
                      desc: "Challenge participants across CTF domains like Web, Crypto, OSINT, and Reverse Engineering to prove their expertise.",
                    },
                    {
                      num: "03",
                      title: "WARRIOR SELECTION",
                      desc: "Pick the best performers who truly deserve the title of Cyberonites' Escalate Champions.",
                    },
                  ].map((item) => (
                    <div key={item.num} className="text-center">
                      <div className="text-2xl font-bold font-panchang text-cyan-400 mb-2">
                        {item.num}
                      </div>
                      <h5 className="font-clash text-cyan-300 mb-2">
                        {item.title}
                      </h5>
                      <p className="text-sm font-ranade text-cyan-300/70">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black/50 border border-cyan-500/30 p-6 rounded">
                <h4 className="text-cyan-400 font-bold font-clash text-lg mb-4">
                  THE ESCALATION PROTOCOL
                </h4>
                <p className="text-cyan-200 font-ranade leading-relaxed">
                  This year, we're not just teaching cybersecurity—we're forging
                  digital warriors. Through immersive Knowledge Villages,
                  participants will dive deep into the dark arts of ethical
                  hacking, from web exploitation to forensic archaeology. The
                  final{" "}
                  <span className="text-cyan-500 font-bold">CTF Battle</span>{" "}
                  isn't just a competition; it's a baptism by fire.
                </p>
              </div>
            </div>
          </div>
        );

      case "madness":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyan-400 font-clash tracking-wider animate-pulse">
              CONTROLLED DIGITAL CHAOS
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-black p-6 rounded border border-cyan-700/50">
                <h4 className="text-cyan-500 font-bold font-clash text-lg mb-4 animate-pulse">
                  DANGER ZONE
                </h4>
                <p className="font-ranade text-cyan-300/80">
                  We're pushing boundaries that others fear to approach. Live
                  penetration testing, real-world vulnerability exploitation,
                  and zero-day discovery workshops that would make black hats
                  jealous.
                </p>
              </div>

              <div className="bg-black/50 border-2 border-cyan-500/50 p-6 rounded">
                <h4 className="text-cyan-400 font-bold font-clash text-lg mb-4">
                  THE UNDERGROUND NETWORK
                </h4>
                <p className="text-cyan-300/80 font-ranade leading-relaxed mb-4">
                  EscalateX v2 isn't just an event—it's an initiation into the
                  underground cybersecurity community. Winners don't just get
                  prizes; they get access to exclusive Treasures, Chests, Merch,
                  Social & Corporate Outreach. Including the Network
                  Opportunities with Industry Experts and Masters who don't
                  exist on LinkedIn.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-mono font-bold px-6 py-3 rounded animate-pulse">
                  WARNING: SIDE EFFECTS MAY INCLUDE ADDICTION TO HACKING
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-900/5 to-black"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <h2 className="text-5xl md:text-7xl font-bold font-clash text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
              ABOUT
            </h2>
            <div className="h-12 overflow-hidden">
              <p className="text-xl md:text-2xl font-clash text-cyan-300 tracking-widest">
                {typedText}
                <span className="animate-pulse">...</span>
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-cyan-400 to-blue-600"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-500 rotate-45 animate-spin"></div>
            <div className="w-20 h-px bg-gradient-to-l from-cyan-400 to-blue-600"></div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex flex-wrap justify-center mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`mx-2 mb-4 px-6 py-3 font-clash text-sm tracking-wider border transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black border-cyan-400 shadow-lg shadow-cyan-500/25 font-bold"
                  : "text-cyan-400 border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 font-bold"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 md:p-12">
            {renderContent()}
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              { label: "PARTICIPANTS", value: "2000+" },
              { label: "CHALLENGES", value: "∞" },
              { label: "PRIZE POOL", value: "₹5 Lakh +" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-2xl md:text-3xl font-bold font-clash text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-clash text-cyan-500/70 tracking-wider">
                  {stat.label}
                </div>
                <div className="w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute top-1/4 left-4 text-cyan-500/20 font-clash text-xs transform -rotate-12 animate-pulse">
        {'{ exploit: "buffer_overflow" }'}
      </div>
      <div className="absolute bottom-1/4 right-4 text-blue-500/20 font-clash text-xs transform rotate-12 animate-pulse">
        {"if (pwned) { escalate(); }"}
      </div>
    </section>
  );
};

export default V2AboutSection;
