import { FaAward, FaNetworkWired, FaShieldAlt, FaShieldVirus, FaTrophy, FaUsers } from "react-icons/fa";

const EventDetail = () => {
    return (
    <section id="section2" className="carousel-section">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
            <header>
                <h2 className="text-4xl md:text-5xl font-black mb-2">
                    <span className="text-white">EVENT</span>
                    <span style={{color: "var(--primary-orange)"}}>OVERVIEW</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    A comprehensive cybersecurity symposium designed to bridge academic knowledge with practical industry expertise.
                </p>
            </header>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
                <div className="glass-card p-4 rounded-2xl">
                    <div className="mb-2 mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center"><FaUsers className="text-white text-2xl" /></div>
                    <p className="text-3xl font-bold text-white">800+</p>
                    <p className="text-gray-400 text-sm">Registrations</p>
                </div>
                <div className="glass-card p-4 rounded-2xl">
                    <div className="mb-2 mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center"><FaShieldAlt className="text-white text-2xl" /></div>
                    <p className="text-3xl font-bold text-white">5</p>
                    <p className="text-gray-400 text-sm">Knowledge Villages</p>
                </div>
                <div className="glass-card p-4 rounded-2xl">
                    <div className="mb-2 mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center"><FaTrophy className="text-white text-2xl" /></div>
                    <p className="text-3xl font-bold text-white">7</p>
                    <p className="text-gray-400 text-sm">CTF Categories</p>
                </div>
                <div className="glass-card p-4 rounded-2xl">
                    <div className="mb-2 mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center"><FaAward className="text-white text-2xl" /></div>
                    <p className="text-3xl font-bold text-white">2</p>
                    <p className="text-gray-400 text-sm">Intensive Days</p>
                </div>
            </div>
            <div className="glass-card p-8 rounded-3xl text-left max-w-4xl">
                <h3 className="text-2xl font-bold text-white mb-4">Event Objectives</h3>
                <ul className="space-y-4">
                    <li className="flex items-start space-x-3"><div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"><FaShieldVirus className="text-orange-400 text-sm" /></div><span className="text-gray-300">Provide real-world cybersecurity challenge exposure</span></li>
                    <li className="flex items-start space-x-3"><div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"><FaTrophy className="text-orange-400 text-sm" /></div><span className="text-gray-300">Offer hands-on Capture The Flag (CTF) experience</span></li>
                    <li className="flex items-start space-x-3"><div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"><FaUsers className="text-orange-400 text-sm" /></div><span className="text-gray-300">Develop problem-solving and teamwork skills</span></li>
                    <li className="flex items-start space-x-3"><div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"><FaNetworkWired className="text-orange-400 text-sm" /></div><span className="text-gray-300">Bridge academic knowledge with practical application</span></li>
                </ul>
            </div>
        </div>
    </section>
    );
}

export default EventDetail;