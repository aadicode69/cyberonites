import { FaAward, FaNetworkWired, FaShieldAlt, FaShieldVirus, FaTerminal, FaTrophy, FaUsers } from "react-icons/fa";

const EventDetail = () => {
    return (
    <section id="section2" className="carousel-section main-section">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-6 text-center py-8 px-4 h-full overflow-y-auto">
            <header>
                <h2 className="text-3xl md:text-4xl font-black mb-2 font-orbitron">
                    <span className="text-white">EVENT</span>
                    <span className="escalateX-neon-text escalateX-glitch" data-text="OVERVIEW" style={{color: "var(--escalate-orange)"}}>OVERVIEW</span>
                </h2>
                <p className="text-base text-gray-300 max-w-3xl mx-auto font-mono">
                    A comprehensive cybersecurity symposium designed to bridge academic knowledge with practical industry expertise.
                </p>
            </header>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
                <div className="escalateX-glass-card p-4 escalateX-data-stream escalateX-holographic escalateX-stats-card">
                    <div className="mb-2 mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center border border-orange-500/50" style={{clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)'}}>
                        <FaUsers className="text-white text-2xl" />
                    </div>
                    <p className="text-3xl font-bold text-white escalateX-neon-text font-orbitron">800+</p>
                    <p className="text-gray-400 text-sm font-mono uppercase tracking-wider">REGISTRATIONS</p>
                </div>
                <div className="escalateX-glass-card p-4 escalateX-data-stream escalateX-holographic escalateX-stats-card">
                    <div className="mb-2 mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center border border-orange-500/50" style={{clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)'}}>
                        <FaShieldAlt className="text-white text-2xl" />
                    </div>
                    <p className="text-3xl font-bold text-white escalateX-neon-text font-orbitron">5</p>
                    <p className="text-gray-400 text-sm font-mono uppercase tracking-wider">KNOWLEDGE VILLAGES</p>
                </div>
                <div className="escalateX-glass-card p-4 escalateX-data-stream escalateX-holographic escalateX-stats-card">
                    <div className="mb-2 mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center border border-orange-500/50" style={{clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)'}}>
                        <FaTrophy className="text-white text-2xl" />
                    </div>
                    <p className="text-3xl font-bold text-white escalateX-neon-text font-orbitron">7</p>
                    <p className="text-gray-400 text-sm font-mono uppercase tracking-wider">CTF CATEGORIES</p>
                </div>
                <div className="escalateX-glass-card p-4 escalateX-data-stream escalateX-holographic escalateX-stats-card">
                    <div className="mb-2 mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center border border-orange-500/50" style={{clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)'}}>
                        <FaAward className="text-white text-2xl" />
                    </div>
                    <p className="text-3xl font-bold text-white escalateX-neon-text font-orbitron">2</p>
                    <p className="text-gray-400 text-sm font-mono uppercase tracking-wider">INTENSIVE DAYS</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
                <div className="escalateX-glass-card p-8 text-left escalateX-cyber-terminal">
                    <h3 className="text-2xl font-bold text-white mb-4 escalateX-neon-text font-orbitron flex items-center gap-2">
                        <FaTerminal className="text-orange-400" /> EVENT BRIEFING
                    </h3>
                    <p className="text-base text-gray-300 font-mono leading-relaxed mb-6">
                        ESCALATE v2 is a two-day symposium with expert-led workshops, keynotes, and an intense CTF championship.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-300">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="font-mono text-sm">Two-day intensive cybersecurity symposium</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="font-mono text-sm">Expert-led workshops and keynote sessions</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="font-mono text-sm">Intense CTF championship competition</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="font-mono text-sm">National-level cybersecurity championship</span>
                        </div>
                    </div>
                </div>
                <div className="escalateX-glass-card p-8 text-left escalateX-cyber-terminal">
                    <h3 className="text-2xl font-bold text-white mb-4 escalateX-neon-text font-orbitron flex items-center gap-2">
                        <FaTerminal className="text-orange-400" /> EVENT OBJECTIVES
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-start space-x-3"><div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"><FaShieldVirus className="text-orange-400 text-sm" /></div><span className="text-gray-300">Provide real-world cybersecurity challenge exposure</span></li>
                        <li className="flex items-start space-x-3"><div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"><FaTrophy className="text-orange-400 text-sm" /></div><span className="text-gray-300">Offer hands-on Capture The Flag (CTF) experience</span></li>
                        <li className="flex items-start space-x-3"><div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"><FaUsers className="text-orange-400 text-sm" /></div><span className="text-gray-300">Develop problem-solving and teamwork skills</span></li>
                        <li className="flex items-start space-x-3"><div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"><FaNetworkWired className="text-orange-400 text-sm" /></div><span className="text-gray-300">Bridge academic knowledge with practical application</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    );
}

export default EventDetail;