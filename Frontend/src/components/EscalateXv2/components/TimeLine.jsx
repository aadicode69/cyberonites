import { FaInfoCircle, FaMapPin } from "react-icons/fa";
import { useEffect, useState } from "react";
import "../styles/TimeLine.css";
const TimeLine = () => {

    const TIMELINE_DATA = [
        { id: 1, phase: "PRE-SCREENING", date: "October 11, 2025", time: "9:00 PM", event: "Online CTF Competition", status: "UPCOMING", description: "High-stakes online CTF. Top teams advance to offline rounds.", isoDate: "2025-10-11T21:00:00" },
        { id: 2, phase: "DAY 1", date: "November 8, 2025", time: "Full Day", event: "Knowledge Villages & Expert Talks", status: "PENDING", description: "Immersive learning across 5 cybersecurity domains with industry experts.", isoDate: "2025-11-08T09:00:00" },
        { id: 3, phase: "DAY 2", date: "November 9, 2025", time: "8 Hours", event: "EscalateX v2 CTF Final Championship", status: "PENDING", description: "Ultimate 8-hour CTF showdown across 7 specialized categories.", isoDate: "2025-11-09T09:00:00" }
    ];

    const [currentStatus, setCurrentStatus] = useState("Loading system status...");

    useEffect(() => {
        const now = new Date();
        let nextEvent = null;

        const timelineItems = TIMELINE_DATA.map((item) => {
            const eventDate = new Date(item.isoDate);
            const isActive = now < eventDate && !nextEvent;
            if (isActive) {
                nextEvent = item;
            }
            return (
                <div key={item.id} className={`timeline-item ${isActive ? 'is-active' : ''}`}>
                    <div className="timeline-marker"></div>
                    <p className="text-sm font-bold text-orange-400">{item.phase} - {item.date}</p>
                    <h4 className="text-xl font-bold text-white my-1">{item.event}</h4>
                    <p className="text-gray-400">{item.description}</p>
                </div>
            );
        });

        // Update status card
        if (nextEvent) {
            setCurrentStatus(
                <>
                    <p className="font-bold text-lg text-gray-200">Next Up: {nextEvent.event}</p>
                    <p className="text-gray-400 mt-2">Scheduled for {nextEvent.date} at {nextEvent.time}. Stand by for engagement.</p>
                </>
            );
        } else {
            setCurrentStatus(
                <>
                    <p className="font-bold text-lg text-gray-200">All events concluded.</p>
                    <p className="text-gray-400 mt-2">Thank you for participating in EscalateX v2. See you next year!</p>
                </>
            );
        }

        // This part is tricky with direct DOM manipulation in React.
        // Instead of directly manipulating 'timeline-container', we'll render it conditionally.
        // For now, we'll just return the timeline items to be rendered.
        // If you need to imperatively add to a DOM element, consider using refs.
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <section id="section3" class="carousel-section">
            <div class="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <header class="mb-8">
                        <h2 class="text-4xl md:text-5xl font-black mb-2">
                            <span class="text-white">EVENT</span>
                            <span style={{ color: "var(--primary-orange)" }}>TIMELINE</span>
                        </h2>
                        <p class="text-lg text-gray-300 max-w-xl">
                            Key dates and milestones for the EscalateX v2 championship. Stay ahead of the curve.
                        </p>
                    </header>
                    <div id="timeline-container" className="w-full max-w-md">
                        {TIMELINE_DATA.map((item) => {
                            const eventDate = new Date(item.isoDate);
                            const now = new Date();
                            const isActive = now < eventDate && !TIMELINE_DATA.find(e => new Date(e.isoDate) > now); // Simplified active logic for rendering
                            return (
                                <div key={item.id} className={`timeline-item ${isActive ? 'is-active' : ''}`}>
                                    <div className="timeline-marker"></div>
                                    <p className="text-sm font-bold text-orange-400">{item.phase} - {item.date}</p>
                                    <h4 className="text-xl font-bold text-white my-1">{item.event}</h4>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div class="flex flex-col gap-8">
                    <div class="glass-card p-8 rounded-3xl">
                        <h3 class="text-2xl font-bold text-white mb-4 flex items-center gap-3"><FaMapPin class="text-orange-400" />Venue Information</h3>
                        <p class="font-bold text-lg text-gray-200">GLA University, Mathura</p>
                        <p class="text-gray-400 mt-2">All offline activities (Day 1 & Day 2) will be conducted at GLA University campus in Mathura. Participants advancing from the Pre-CTF will receive detailed venue and accommodation information.</p>
                    </div>
                    <div class="glass-card p-8 rounded-3xl">
                        <h3 class="text-2xl font-bold text-white mb-4 flex items-center gap-3"><FaInfoCircle class="text-orange-400" />Current Status</h3>
                        <div id="current-status-container" className="text-gray-300">
                            {currentStatus}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TimeLine;