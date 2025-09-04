import { FaInfoCircle, FaMapPin } from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";
import "../styles/TimeLine.css";

const TimeLine = () => {
  const TIMELINE_DATA = useMemo(
    () => [
      {
        id: 1,
        phase: "DAY 1",
        date: "November 8, 2025",
        time: "Full Day",
        event: "Knowledge Villages & Expert Talks",
        description:
          "Immersive learning across 5 cybersecurity domains with industry experts.",
        isoDate: "2025-11-08T09:00:00",
      },
      {
        id: 2,
        phase: "DAY 2",
        date: "November 9, 2025",
        time: "8 Hours",
        event: "EscalateX v2 CTF Final Championship",
        description:
          "Ultimate 8-hour CTF showdown across 7 specialized categories.",
        isoDate: "2025-11-09T09:00:00",
      },
    ],
    []
  );

  const [currentStatus, setCurrentStatus] = useState(
    "Loading system status..."
  );
  const [activeTimelineId, setActiveTimelineId] = useState(null);

  useEffect(() => {
    const now = new Date();
    let nextEvent = null;
    let activeId = null;

    // Find the next upcoming event
    for (const item of TIMELINE_DATA) {
      const eventDate = new Date(item.isoDate);
      if (now < eventDate) {
        nextEvent = item;
        activeId = item.id;
        break;
      }
    }

    setActiveTimelineId(activeId);

    // Update status card
    if (nextEvent) {
      setCurrentStatus(
        <>
          <p className="font-bold text-lg text-gray-200 font-orbitron">
            Next Up: {nextEvent.event}
          </p>
          <p className="text-gray-400 mt-2 font-mono text-sm">
            Scheduled for {nextEvent.date} at {nextEvent.time}. Stand by for
            engagement.
          </p>
        </>
      );
    } else {
      setCurrentStatus(
        <>
          <p className="font-bold text-lg text-gray-200 font-orbitron">
            All events concluded.
          </p>
          <p className="text-gray-400 mt-2 font-mono text-sm">
            Thank you for participating in EscalateX v2. See you next year!
          </p>
        </>
      );
    }
  }, [TIMELINE_DATA]);

  return (
    <section id="section3" className="carousel-section main-section">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center py-8 px-4 h-full overflow-y-auto">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <header className="mb-8">
            <h2 className="text-4xl md:text-5xl font-black mb-2 font-orbitron">
              <span className="text-white">EVENT </span>
              <span
                className=" "
                data-text="TIMELINE"
                style={{ color: "var(--escalate-orange)" }}
              >
                TIMELINE
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-xl font-mono">
              Key dates and milestones for the EscalateX v2 championship. Stay
              ahead of the curve.
            </p>
          </header>
          <div className="w-full max-w-md timeline-container">
            {TIMELINE_DATA.map((item) => (
              <div
                key={item.id}
                className={`timeline-item ${
                  activeTimelineId === item.id ? "is-active" : ""
                }`}
              >
                <div className="timeline-marker"></div>
                <p className="text-sm font-bold text-orange-400 font-orbitron tracking-wider">
                  {item.phase} - {item.date}
                </p>
                <h4 className="text-xl font-bold text-white my-1 escalateX-neon-text font-orbitron">
                  {item.event}
                </h4>
                <p className="text-gray-400 font-mono text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="escalateX-glass-card p-8 escalateX-cyber-terminal escalateX-holographic">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 escalateX-neon-text font-orbitron">
              <FaMapPin className="text-orange-400" />
              VENUE INFORMATION
            </h3>
            <p className="font-bold text-lg text-gray-200 font-orbitron">
              GLA University, Mathura
            </p>
            <p className="text-gray-400 mt-2 font-mono text-sm">
              All offline activities (Day 1 & Day 2) will be conducted at GLA
              University campus in Mathura. Participants advancing from the
              Pre-CTF will receive detailed venue and accommodation information.
            </p>
          </div>
          <div className="escalateX-glass-card p-8 escalateX-cyber-terminal escalateX-holographic">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 escalateX-neon-text font-orbitron">
              <FaInfoCircle className="text-orange-400" />
              CURRENT STATUS
            </h3>
            <div className="text-gray-300 font-mono">{currentStatus}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
