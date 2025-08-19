import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import "./TimelineCard.css";

const TimelineCard = ({ className }) => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const fetchTimeline = async () => {
      const data = [
        { 
          phase: "Pre-Screening", 
          date: "11/10/2025", 
          time: "9:00 PM",
          event: "Online CTF Competition", 
          status: "UPCOMING",
          description: "High-stakes online CTF. Top teams advance to offline rounds."
        },
        { 
          phase: "Day 1", 
          date: "08/11/2025", 
          time: "Full Day",
          event: "Knowledge Villages & Expert Talks", 
          status: "PENDING",
          description: "Immersive learning across 5 cybersecurity domains with industry experts."
        },
        { 
          phase: "Day 2", 
          date: "09/11/2025", 
          time: "8 Hours",
          event: "EscalateX v2 CTF Final Championship", 
          status: "PENDING",
          description: "Ultimate 8-hour CTF showdown across 7 specialized categories."
        }
      ];
      setTimeline(data);
    };
    fetchTimeline();
  }, []);

  return (
    <section className={`content-section timeline-section ${className}`}>
      <header className="section-header">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-wide exv2-font-cyberjunkies text-center">
          <span className="text-white">EVENT</span> <span className="text-orange-500">SCHEDULE</span>
        </h2>
        <p className="section-description">
          Three-phase cybersecurity symposium starting with online pre-screening 
          followed by intensive offline learning and competition at GLA University, Mathura.
        </p>
      </header>
      
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        {timeline.map((item, index) => (
          <article key={index} className={`timeline-item ${index % 2 === 0 ? '' : 'timeline-item:nth-child(even)'}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className={`timeline-status ${item.status.toLowerCase()}`}>{item.status}</div>
              <div className="timeline-phase exv2-font-clouds">{item.phase}</div>
              <h3 className="timeline-event-title exv2-font-clouds">{item.event}</h3>
              <div className="timeline-datetime">
                <div className="timeline-date">
                  <FaCalendarAlt />
                  <span>{item.date}</span>
                </div>
                <span>•</span>
                <div className="timeline-time">
                  <FaClock />
                  <span>{item.time}</span>
                </div>
              </div>
              <p className="timeline-description">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      
      <footer className="venue-info-section">
        <h3 className="exv2-font-clouds">Venue Information</h3>
        <h4 className="exv2-font-clouds">GLA University, Mathura</h4>
        <p>All offline activities (Day 1 & Day 2) will be conducted at GLA University campus in Mathura. 
        Participants advancing from the Pre-CTF will receive detailed venue and accommodation information.</p>
      </footer>
    </section>
  );
};

export default TimelineCard;