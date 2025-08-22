import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import "./styles/TimelineCard.css";

// ==========================================
// CONFIGURATION CONSTANTS
// ==========================================
const TIMELINE_DATA = [
  { 
    id: 1,
    phase: "PRE-SCREENING", 
    date: "October 11, 2025", 
    time: "9:00 PM",
    event: "Online CTF Competition", 
    status: "UPCOMING",
    description: "High-stakes online CTF. Top teams advance to offline rounds.",
    isoCurrent: "2025-10-11T21:00:00"
  },
  { 
    id: 2,
    phase: "DAY 1", 
    date: "November 8, 2025", 
    time: "Full Day",
    event: "Knowledge Villages & Expert Talks", 
    status: "PENDING",
    description: "Immersive learning across 5 cybersecurity domains with industry experts.",
    isoCurrent: "2025-11-08T09:00:00"
  },
  { 
    id: 3,
    phase: "DAY 2", 
    date: "November 9, 2025", 
    time: "8 Hours",
    event: "EscalateX v2 CTF Final Championship", 
    status: "PENDING",
    description: "Ultimate 8-hour CTF showdown across 7 specialized categories.",
    isoCurrent: "2025-11-09T09:00:00"
  }
];

const VENUE_INFO = {
  name: "GLA University, Mathura",
  description: "All offline activities (Day 1 & Day 2) will be conducted at GLA University campus in Mathura. Participants advancing from the Pre-CTF will receive detailed venue and accommodation information."
};

const TimelineCard = ({ className }) => {
  return (
    <section className={`exv2-content-section exv2-timeline-section ${className}`} aria-labelledby="timeline-heading">
      {/* Section Header */}
      <header className="exv2-section-header">
        <h2 id="timeline-heading" className="exv2-section-title exv2-font-cyberjunkies">
          <span className="text-white">EVENT</span> <span className="text-orange-500">SCHEDULE</span>
        </h2>
        <p className="exv2-section-description">
          Three-phase cybersecurity symposium starting with online pre-screening 
          followed by intensive offline learning and competition at GLA University, Mathura.
        </p>
      </header>
      
      {/* Timeline Wrapper */}
      <section className="exv2-timeline-wrapper" role="list" aria-label="Event timeline">
        <div className="exv2-timeline-line" aria-hidden="true"></div>
        {TIMELINE_DATA.map((item, index) => (
          <article 
            key={item.id} 
            className={`exv2-timeline-item exv2-timeline-item-${index % 2 === 0 ? 'left' : 'right'}`}
            role="listitem"
            aria-labelledby={`timeline-event-${item.id}`}
            tabIndex="0"
          >
            <div className="exv2-timeline-dot" aria-hidden="true"></div>
            <main className="exv2-timeline-content">
              <aside className={`exv2-timeline-status exv2-timeline-status-${item.status.toLowerCase()}`} aria-label={`Status: ${item.status}`}>
                {item.status}
              </aside>
              <header className="exv2-timeline-phase exv2-font-clouds" aria-label={`Phase: ${item.phase}`}>
                {item.phase}
              </header>
              <h3 id={`timeline-event-${item.id}`} className="exv2-timeline-event-title exv2-font-clouds">
                {item.event}
              </h3>
              <address className="exv2-timeline-datetime not-italic" aria-label={`Date and time: ${item.date} at ${item.time}`}>
                <time className="exv2-timeline-date" dateTime={item.isoCurrent}>
                  <FaCalendarAlt aria-hidden="true" />
                  {item.date}
                </time>
                <span aria-hidden="true">•</span>
                <div className="exv2-timeline-time">
                  <FaClock aria-hidden="true" />
                  <span>{item.time}</span>
                </div>
              </address>
              <p className="exv2-timeline-description">{item.description}</p>
            </main>
          </article>
        ))}
      </section>
      
      {/* Venue Information */}
      <footer className="exv2-venue-info-section" role="contentinfo" aria-labelledby="venue-heading">
        <h3 id="venue-heading" className="exv2-font-clouds">Venue Information</h3>
        <h4 className="exv2-font-clouds">{VENUE_INFO.name}</h4>
        <p>{VENUE_INFO.description}</p>
      </footer>
    </section>
  );
};

export default React.memo(TimelineCard);