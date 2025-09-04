import React from 'react';
import "../styles/Villages.css";
import { FaCloud, FaGlobe, FaIndustry, FaNetworkWired, FaSearch, FaVirus, FaUserSecret, FaLink, FaMobileAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const villages = [
    { name: "IoT Security", icon: <FaIndustry className="text-5xl" />, description: "Explore Internet of Things security challenges, device vulnerabilities, and secure IoT implementations.", topics: ["Device Security", "Network Protocols", "Firmware Analysis", "IoT Forensics"] },
    { name: "Malware Analysis", icon: <FaVirus className="text-5xl" />, description: "Deep dive into malware reverse engineering, behavior analysis, and detection techniques.", topics: ["Reverse Engineering", "Static Analysis", "Dynamic Analysis", "Malware Detection"] },
    { name: "Cloud Security", icon: <FaCloud className="text-5xl" />, description: "Understand cloud security architectures, common vulnerabilities, and secure deployment practices.", topics: ["AWS Security", "Container Security", "Identity Management", "Cloud Forensics"] },
    { name: "Web Exploitation", icon: <FaGlobe className="text-5xl" />, description: "Learn about common web application vulnerabilities, exploitation techniques, and defensive measures.", topics: ["OWASP Top 10", "SQL Injection", "XSS", "Authentication Bypass"] },
    { name: "Network Security", icon: <FaNetworkWired className="text-5xl" />, description: "Master network defense strategies, intrusion detection, and secure network configurations.", topics: ["Firewalls", "IDS/IPS", "VPNs", "Network Forensics"] },
    { name: "Digital Forensics", icon: <FaSearch className="text-5xl" />, description: "Acquire skills in digital evidence collection, analysis, and incident response.", topics: ["Disk Forensics", "Memory Forensics", "Mobile Forensics", "Incident Response"] },
    { name: "Red Teaming", icon: <FaUserSecret className="text-5xl" />, description: "Simulate real-world attacks to test an organization's security posture and identify weaknesses.", topics: ["Adversary Emulation", "Social Engineering", "Physical Security", "Post-Exploitation"] },
    { name: "OSINT", icon: <FaSearch className="text-5xl" />, description: "Utilize open-source intelligence techniques to gather information for reconnaissance and investigations.", topics: ["Public Records", "Social Media Analysis", "Geolocation", "Dark Web Monitoring"] },
    { name: "Blockchain Security", icon: <FaLink className="text-5xl" />, description: "Delve into the security aspects of blockchain technology, smart contracts, and decentralized applications.", topics: ["Smart Contract Audits", "Cryptocurrency Security", "DeFi Security", "Consensus Mechanisms"] },
    { name: "Mobile Security", icon: <FaMobileAlt className="text-5xl" />, description: "Focus on securing mobile applications and devices, identifying vulnerabilities in iOS and Android platforms.", topics: ["App Reverse Engineering", "Runtime Analysis", "Data Storage Security", "MDM"] },
];

const VillageCard = ({ village }) => {
    return (
        <div className="village-card-inner">
            <div className="icon-container">
                {village.icon}
            </div>
            <h3>{village.name}</h3>
            <p>{village.description}</p>
            <div className="topics-list">
                {village.topics.map((topic, i) => (
                    <span key={i} className="topic-tag">{topic}</span>
                ))}
            </div>
        </div>
    );
};

const Villages = () => {
    return (
        <section id="section4" className="carousel-section main-section">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center py-8 px-4 h-full overflow-y-auto">
                <header className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-black mb-4 font-orbitron">
                        <span className="text-white">KNOWLEDGE </span>
                        <span className="escalateX-neon-text escalateX-glitch" data-text="VILLAGES" style={{ color: 'var(--escalate-orange)' }}>VILLAGES</span>
                    </h2>
                    <p className="text-base text-gray-300 max-w-3xl mx-auto font-mono">
                        Immersive learning environments featuring expert-led workshops and hands-on training across specialized cybersecurity domains.
                    </p>
                </header>

                <main className="w-full flex-1 flex flex-col items-center justify-center relative">
                    <div className="w-full h-full flex items-center justify-center relative">
                        {/* Navigation Buttons */}
                        <button className="villages-nav-prev absolute left-6 top-1/2 transform -translate-y-1/2 z-50 w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/30 border-2 border-orange-500/50 text-orange-400 flex items-center justify-center transition-all duration-300 hover:bg-orange-500/30 hover:border-orange-400 hover:text-orange-300 active:scale-95"
                            style={{
                                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                                filter: 'drop-shadow(0 0 12px rgba(255, 107, 53, 0.4))'
                            }}>
                            <FaChevronLeft className="text-xl" />
                        </button>

                        <button className="villages-nav-next absolute right-6 top-1/2 transform -translate-y-1/2 z-50 w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/30 border-2 border-orange-500/50 text-orange-400 flex items-center justify-center transition-all duration-300 hover:bg-orange-500/30 hover:border-orange-400 hover:text-orange-300 active:scale-95"
                            style={{
                                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                                filter: 'drop-shadow(0 0 12px rgba(255, 107, 53, 0.4))'
                            }}>
                            <FaChevronRight className="text-xl" />
                        </button>

                        <Swiper
                            grabCursor={true}
                            slidesPerView={3}
                            spaceBetween={30}
                            centeredSlides={false}
                            loop={false}
                            speed={800}
                            navigation={{
                                prevEl: '.villages-nav-prev',
                                nextEl: '.villages-nav-next',
                            }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                    centeredSlides: true,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 25,
                                    centeredSlides: false,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                    centeredSlides: false,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 35,
                                    centeredSlides: false,
                                },
                            }}
                            modules={[Autoplay, Navigation]}
                            className="villages-swiper w-full max-w-7xl h-96 overflow-hidden"
                            style={{ 
                                overflow: 'hidden',
                                zIndex: 100
                            }}
                        >
                            {villages.map((village, index) => (
                                <SwiperSlide key={index} className="village-card">
                                    <VillageCard village={village} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Villages;
