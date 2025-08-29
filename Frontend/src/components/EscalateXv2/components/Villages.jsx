import React, { useRef, useState } from 'react';
import "../styles/Villages.css";
import { FaCloud, FaGlobe, FaIndustry, FaNetworkWired, FaSearch, FaVirus, FaUserSecret, FaLink, FaMobileAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

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

const VillageCard = ({ village, index }) => {
    return (
        <div className="village-card p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="icon-container mb-4">
                {village.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{village.name}</h3>
            <p className="text-gray-300 text-sm mb-4">{village.description}</p>
            <div className="topics-list">
                {village.topics.map((topic, i) => (
                    <span key={i} className="topic-tag text-xs px-2 py-1 rounded-full mr-2 mb-2 inline-block">{topic}</span>
                ))}
            </div>
        </div>
    );
};

const Villages = () => {
    return (
        <section id="section4" className="carousel-section">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">
                <header className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        <span className="text-white">KNOWLEDGE</span>
                        <span style={{ color: 'var(--primary-orange)' }}>VILLAGES</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Immersive learning environments featuring expert-led workshops and hands-on training across specialized cybersecurity domains.
                    </p>
                </header>
                <main className="w-full h-full flex flex-col items-center justify-center">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        coverflowEffect={{
                            rotate: 45,
                            stretch: 0,
                            depth: 100,
                            modifier: 1, 
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, EffectCoverflow, Pagination]} className="mySwiper">
                        {villages.map((village, index) => (
                            <SwiperSlide key={index}>
                                <VillageCard village={village} index={index} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </main>
            </div>
        </section>
    );
};

export default Villages;
