import { FaCalendarAlt, FaMapMarkerAlt, FaRocket, FaTerminal, FaTrophy } from "react-icons/fa";
import { useEffect } from "react";
import logo from "../img/escalateXv2/logo.png";
import "../styles/Hero.css";
import { FaHourglassHalf } from "react-icons/fa6";

const Hero = () => {
    useEffect(() => {
        // Countdown timer functionality
        const targetDate = new Date('2025-11-08T00:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById('escalateX-days').textContent = days.toString().padStart(2, '0');
                document.getElementById('escalateX-hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('escalateX-minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('escalateX-seconds').textContent = seconds.toString().padStart(2, '0');
            } else {
                document.getElementById('escalateX-days').textContent = '00';
                document.getElementById('escalateX-hours').textContent = '00';
                document.getElementById('escalateX-minutes').textContent = '00';
                document.getElementById('escalateX-seconds').textContent = '00';
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
    <section id="section1" className="carousel-section escalateX-hero-section main-section escalateX-hero-with-blur">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full relative z-10">
                <div className="flex flex-col h-full justify-center space-y-6">
                    {/* Title Section - Top */}
                    <div className="escalateX-hero-title-section flex-shrink-0">
                        <aside className="inline-flex items-center space-x-2 px-3 py-1.5 escalateX-glass-card border border-orange-500/50 escalateX-holographic mb-4">
                            <FaTrophy className="fa-solid fa-trophy text-orange-400 animate-pulse text-sm" />
                            <span className="text-orange-300 font-semibold text-xs font-orbitron tracking-wider">NATIONAL LEVEL CYBERSECURITY CHAMPIONSHIP</span>
                        </aside>

                        <div className="escalateX-hero-container">
                            <h1 className="escalateX-sci-fi-title escalateX-hero escalateX-glitch escalateX-layers flex flex-row items-center justify-start gap-4 flex-nowrap"
                                style={{ fontFamily: '"Audiowide", "Orbitron", "Share Tech Mono", monospace' }}
                                data-text="ESCALATE v2">
                                <span className="flex-shrink-0">ESCALATE</span>
                                <img src={logo} alt="ESCALATE v2 Logo" className="escalateX-hero-logo-image object-contain flex-shrink-0" />
                                <span className="flex-shrink-0">v2</span>
                            </h1>
                        </div>
                    </div>

                    {/* Content Section - Bottom (Side by Side) */}
                    <div className="escalateX-hero-content-section flex-1 flex items-start">
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                            {/* Left: Description and CTA */}
                            <div className="escalateX-hero-description space-y-6 flex flex-col justify-start">
                                <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-mono text-left leading-relaxed">
                                    The Ultimate Cybersecurity Symposium & CTF Championship
                                </h2>

                                <address className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 not-italic text-gray-400 text-base">
                                    <div className="flex items-center gap-3">
                                        <FaMapMarkerAlt className="fa-solid fa-map-marker-alt text-orange-400 text-sm flex-shrink-0" />
                                        <span>GLA University, Mathura</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaCalendarAlt className="fa-solid fa-calendar-alt text-orange-400 text-sm flex-shrink-0" />
                                        <time dateTime="2025-11-08">November 8-9, 2025</time>
                                    </div>
                                </address>

                                <p className="flex flex-wrap items-center gap-6 text-base sm:text-lg font-semibold font-orbitron justify-start">
                                    <span className="escalateX-cyber-accent-text">TRAIN</span>
                                    <span className="text-gray-600">•</span>
                                    <span className="escalateX-cyber-accent-text">TRANSFORM</span>
                                    <span className="text-gray-600">•</span>
                                    <span className="escalateX-cyber-accent-text">DEFEND</span>
                                </p>

                                <div className="flex flex-col sm:flex-row items-start gap-6 pt-6">
                                    <button id="escalateX-registerBtn" className="w-full sm:w-auto escalateX-cyber-button escalateX-cyber-button-primary escalateX-cyber-button-extra-large flex items-center justify-start gap-6 px-12 py-6 text-xl font-bold">
                                        <FaRocket className="text-2xl flex-shrink-0" />
                                        <span className="text-left">JOIN THE CHALLENGE</span>
                                    </button>
                                </div>
                            </div>

                            {/* Right: Cards */}
                            <div className="escalateX-hero-cards space-y-6 flex flex-col justify-start">
                                <div className="escalateX-glass-card escalateX-cyber-terminal escalateX-data-stream escalateX-enhanced-card escalateX-countdown-card">
                                    <h3 className="text-lg lg:text-xl font-bold mb-4 escalateX-cyber-header-text font-orbitron flex items-center gap-2">
                                        <FaHourglassHalf className="text-orange-400" /> COUNTDOWN TO LAUNCH
                                    </h3>
                                    <div className="escalateX-countdown-grid">
                                        <div className="escalateX-countdown-item">
                                            <span id="escalateX-days" className="escalateX-countdown-number">00</span>
                                            <p className="escalateX-countdown-label">DAYS</p>
                                        </div>
                                        <div className="escalateX-countdown-item">
                                            <span id="escalateX-hours" className="escalateX-countdown-number">00</span>
                                            <p className="escalateX-countdown-label">HOURS</p>
                                        </div>
                                        <div className="escalateX-countdown-item">
                                            <span id="escalateX-minutes" className="escalateX-countdown-number">00</span>
                                            <p className="escalateX-countdown-label">MINS</p>
                                        </div>
                                        <div className="escalateX-countdown-item">
                                            <span id="escalateX-seconds" className="escalateX-countdown-number">00</span>
                                            <p className="escalateX-countdown-label">SECS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

// matrix behind
// count down
// modal notification