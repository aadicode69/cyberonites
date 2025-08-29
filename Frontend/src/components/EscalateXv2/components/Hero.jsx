import { FaCalendarAlt, FaEye, FaHourglassHalf, FaMapMarkerAlt, FaRocket, FaTerminal, FaTrophy } from "react-icons/fa";
import "../styles/Hero.css";

const Hero = () => {
    return (
        <section id="section1" className="carousel-section">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                {/* <!-- Left Column: Title, Info, CTA --> */}
                <div className="lg:col-span-3 text-center lg:text-left">
                    <header className=" flex flex-col justify-center items-center">
                        <aside className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
                            <FaTrophy className="fa-solid fa-trophy text-orange-400 animate-pulse" />
                            <span className="text-orange-300 font-semibold text-sm">National Level Cybersecurity Championship</span>
                        </aside>
                        <h1 className="text-6xl md:text-8xl font-black-ops glitch" data-text="ESCALATE v2">ESCALATE v2</h1>
                        <h2 className="text-xl md:text-2xl text-gray-300 mt-4 mb-6">The Ultimate Cybersecurity Symposium & CTF Championship</h2>
                        <address className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 mb-8 not-italic text-gray-400">
                            <div className="flex items-center gap-2"><FaMapMarkerAlt className="fa-solid fa-map-marker-alt text-orange-400" /><span>GLA University, Mathura</span></div>
                            <div className="flex items-center gap-2"><FaCalendarAlt className="fa-solid fa-calendar-alt text-orange-400" /><time dateTime="2025-11-08">November 8-9, 2025</time></div>
                        </address>
                        <p className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-lg font-semibold mb-8">
                            <span className="text-orange-400">TRAIN</span>
                            <span className="text-gray-600">•</span>
                            <span className="text-orange-400">TRANSFORM</span>
                            <span className="text-gray-600">•</span>
                            <span className="text-orange-400">DEFEND</span>
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button id="registerBtn" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/50">
                                <FaRocket /><span>Join the Challenge</span>
                            </button>
                            <button id="exploreBtn" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-orange-500 text-orange-400 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                                <FaEye /><span>Explore Problems</span>
                            </button>
                        </div>
                    </header>
                </div>
                {/* <!-- Right Column: Countdown and Briefing Cards --> */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                    <div className="glass-card rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4"><FaHourglassHalf className="text-orange-400" /> Countdown to Launch</h3>
                        <div className="grid grid-cols-4 gap-4 text-center">
                            <div><span id="days" className="text-5xl font-black-ops text-white">00</span><p className="text-sm text-gray-400">Days</p></div>
                            <div><span id="hours" className="text-5xl font-black-ops text-white">00</span><p className="text-sm text-gray-400">Hours</p></div>
                            <div><span id="minutes" className="text-5xl font-black-ops text-white">00</span><p className="text-sm text-gray-400">Minutes</p></div>
                            <div><span id="seconds" className="text-5xl font-black-ops text-white">00</span><p className="text-sm text-gray-400">Seconds</p></div>
                        </div>
                    </div>
                    <div className="glass-card rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4"><FaTerminal className="text-orange-400" /> Event Briefing</h3>
                        <p className="text-base text-gray-300">ESCALATE v2 is a two-day symposium with expert-led workshops, keynotes, and an intense CTF championship.</p>
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