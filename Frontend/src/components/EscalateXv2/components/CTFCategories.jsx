import React, { useEffect, useState, useRef } from 'react';
import '../styles/CTFCategories.css'; // Assuming you'll move the CSS here
import { FaGlobe, FaCog, FaMicroscope, FaEye, FaLock, FaPuzzlePiece, FaDesktop } from 'react-icons/fa';

const CTFCategories = () => {
    const ctfCategories = [
        { name: "Web Exploitation", icon: <FaGlobe />, description: "Attack and defend web applications through various vulnerability types.", difficulty: "HIGH" },
        { name: "Reverse Engineering", icon: <FaCog />, description: "Analyze and reverse binary files, executables, and compiled programs.", difficulty: "CRITICAL" },
        { name: "Digital Forensics", icon: <FaMicroscope />, description: "Investigate digital evidence and recover hidden information from various sources.", difficulty: "HIGH" },
        { name: "OSINT", icon: <FaEye />, description: "Gather intelligence using open-source information and advanced investigative techniques.", difficulty: "MEDIUM" },
        { name: "Cryptography", icon: <FaLock />, description: "Break encryption, solve cryptographic puzzles, and find hidden information.", difficulty: "CRITICAL" },
        { name: "Miscellaneous", icon: <FaPuzzlePiece />, description: "Diverse challenges covering programming, logic puzzles, and creative problem-solving.", difficulty: "MEDIUM" },
        { name: "B2R (Boot to Root)", icon: <FaDesktop />, description: "Complete system compromise from initial access to administrative privileges.", difficulty: "CRITICAL" }
    ];

    const ctfGridRef = useRef(null);
    const [ctfCircleRotation, setCtfCircleRotation] = useState(0);

    const getDifficultyClass = (difficulty) => {
        switch (difficulty) {
            case 'CRITICAL': return 'bg-red-500/20 text-red-400 border-red-500/30';
            case 'HIGH': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
            default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
        }
    };

    const positionCtfCards = () => {
        if (!ctfGridRef.current) return;

        const radius = ctfGridRef.current.offsetWidth / 2.5;
        const cards = ctfGridRef.current.querySelectorAll('.ctf-card');
        const total = cards.length;

        cards.forEach((card, i) => {
            const angle = (i / total) * 2 * Math.PI;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            card.style.left = `calc(50% + ${x}px)`;
            card.style.top = `calc(50% + ${y}px)`;
            card.style.transform = `translate(-50%, -50%) rotate(${-ctfCircleRotation}deg) scale(1)`;
        });
    };

    useEffect(() => {
        positionCtfCards();

        const handleScroll = (e) => {
            const scrollDelta = e.deltaY;
            setCtfCircleRotation(prevRotation => prevRotation + scrollDelta * 0.1);
        };

        const ctfGridElement = ctfGridRef.current;
        if (ctfGridElement) {
            ctfGridElement.addEventListener('wheel', handleScroll);
        }

        return () => {
            if (ctfGridElement) {
                ctfGridElement.removeEventListener('wheel', handleScroll);
            }
        };
    }, [ctfCircleRotation]); // Re-run when rotation changes to update card positions

    return (
        <section id="section5" className="carousel-section">
            <div id="ctf-heading-container" className="text-center p-6 glass-card rounded-2xl">
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                    <span className="text-white">CTF</span>
                    <span style={{ color: 'var(--primary-orange)' }}>CATEGORIES</span>
                </h2>
                <p className="text-sm text-gray-300">
                    Day 2 features an intense 8-hour CTF championship. Use your scroll wheel to navigate the categories.
                </p>
            </div>
            <main id="ctf-grid" ref={ctfGridRef}>
                {ctfCategories.map((category, index) => (
                    <article
                        key={index}
                        className="ctf-card rounded-2xl"
                        onMouseEnter={(e) => e.currentTarget.style.transform = `translate(-50%, -50%) rotate(${-ctfCircleRotation}deg) scale(1.1)`}
                        onMouseLeave={(e) => e.currentTarget.style.transform = `translate(-50%, -50%) rotate(${-ctfCircleRotation}deg) scale(1)`}
                        style={{
                            position: 'absolute', // Required for positioning
                            transition: 'transform 0.3s ease-out', // Smooth transition for hover and rotation
                        }}
                    >
                        <header className="flex items-start gap-4 mb-4">
                            <div className="text-orange-400 text-3xl flex-shrink-0 mt-1">
                                {category.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white text-lg font-bold mb-2">{category.name}</h3>
                                <span className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold border ${getDifficultyClass(category.difficulty)}`}>
                                    Threat Level: {category.difficulty}
                                </span>
                            </div>
                        </header>
                        <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>
                    </article>
                ))}
            </main>
        </section>
    );
};

export default CTFCategories;