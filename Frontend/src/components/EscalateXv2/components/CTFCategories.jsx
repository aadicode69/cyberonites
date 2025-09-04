import React, { useEffect, useState, useRef, useCallback } from 'react';
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
    // Auto-rotation is always enabled; hover/selection pauses it
    const [selectedCard, setSelectedCard] = useState(null);
    const [isHovering, setIsHovering] = useState(false);

    const getDifficultyClass = (difficulty) => {
        switch (difficulty) {
            case 'CRITICAL': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
            case 'HIGH': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
            default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
        }
    };

    const positionCtfCards = useCallback(() => {
        if (!ctfGridRef.current) return;

        const containerWidth = ctfGridRef.current.offsetWidth;
        const containerHeight = ctfGridRef.current.offsetHeight;
        const cards = ctfGridRef.current.querySelectorAll('.escalateX-ctf-card');
        const total = cards.length;

        // Rectangular path parameters - increased by 15% total (7.5% + 7.5% more)
        const rectWidth = containerWidth; // Increased from 0.7525 to 0.81 (15% total increase)
        const rectHeight = containerHeight * 0.7; // Increased from 0.5375 to 0.58 (15% total increase)
        const perimeter = 2 * (rectWidth + rectHeight);

        cards.forEach((card, i) => {
            // Calculate position along rectangular perimeter
            const progress = (i / total + ctfCircleRotation / 360) % 1;
            const distanceAlongPerimeter = progress * perimeter;
            
            let x, y;
            
            if (distanceAlongPerimeter <= rectWidth) {
                // Top edge
                x = distanceAlongPerimeter - rectWidth / 2;
                y = -rectHeight / 2;
            } else if (distanceAlongPerimeter <= rectWidth + rectHeight) {
                // Right edge
                x = rectWidth / 2;
                y = (distanceAlongPerimeter - rectWidth) - rectHeight / 2;
            } else if (distanceAlongPerimeter <= 2 * rectWidth + rectHeight) {
                // Bottom edge
                x = rectWidth / 2 - (distanceAlongPerimeter - rectWidth - rectHeight);
                y = rectHeight / 2;
            } else {
                // Left edge
                x = -rectWidth / 2;
                y = rectHeight / 2 - (distanceAlongPerimeter - 2 * rectWidth - rectHeight);
            }

            card.style.left = `calc(50% + ${x}px)`;
            card.style.top = `calc(50% + ${y}px)`;
            card.style.transform = `translate(-50%, -50%) rotate(0deg) scale(1)`;
        });
    }, [ctfCircleRotation]);

    useEffect(() => {
        positionCtfCards();

        // Continuous rotation - pause on hover or selection
        const rotationInterval = setInterval(() => {
            if (!isHovering && !selectedCard) {
                setCtfCircleRotation(prevRotation => prevRotation + 1);
            }
        }, 30);

        const handleScroll = (e) => {
            e.preventDefault();
            if (!selectedCard) {
                const scrollDelta = e.deltaY;
                setCtfCircleRotation(prevRotation => prevRotation + scrollDelta * 0.2);
            }
        };

        // Click outside to deselect
        const handleClickOutside = (e) => {
            if (!e.target.closest('.escalateX-ctf-card') && !e.target.closest('#ctf-heading-container')) {
                setSelectedCard(null);
            }
        };

        const ctfGridElement = ctfGridRef.current;
        if (ctfGridElement) {
            ctfGridElement.addEventListener('wheel', handleScroll);
        }
        document.addEventListener('click', handleClickOutside);

        return () => {
            clearInterval(rotationInterval);
            if (ctfGridElement) {
                ctfGridElement.removeEventListener('wheel', handleScroll);
            }
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ctfCircleRotation, isHovering, selectedCard, positionCtfCards]);

    return (
        <section id="section5" className="carousel-section main-section">
            <div className="w-full max-w-7xl mx-auto h-full relative py-8 px-4 overflow-hidden">
                <div id="ctf-heading-container" className="escalateX-sci-fi-heading">
                    <div className="escalateX-heading-scanner"></div>
                    <div className="escalateX-heading-grid-overlay"></div>
                    <h2 className="text-4xl md:text-5xl font-black mb-2 font-orbitron relative z-10">
                        <span className="text-white cyber-text-border">CTF</span>
                        <span className="escalateX-neon-text escalateX-glitch ml-2 cyber-glow-text" data-text="CATEGORIES" style={{ color: 'var(--escalate-orange)' }}>CATEGORIES</span>
                    </h2>
                    <div className="escalateX-heading-status-bar"></div>
                    <p className="text-lg text-gray-300 max-w-xl font-mono opacity-90 mx-auto relative z-10 cyber-terminal-text">
                        [SYSTEM] Day 2 features an intense 8-hour CTF championship. Use your scroll wheel to navigate the categories.
                    </p>
                </div>
                <main id="ctf-grid" ref={ctfGridRef}>
                {ctfCategories.map((category, index) => (
                    <article
                        key={index}
                        className={`escalateX-ctf-card escalateX-sci-fi-card ${selectedCard === index ? 'selected' : ''}`}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        onClick={() => setSelectedCard(selectedCard === index ? null : index)}
                        style={{
                            position: 'absolute',
                            transition: 'none',
                        }}
                    >
                        <div className="escalateX-card-scanner"></div>
                        <div className="escalateX-card-grid-pattern"></div>
                        <div className="escalateX-card-energy-border"></div>
                        <header className="flex items-start gap-2 mb-2 relative z-10">
                            <div className="text-orange-400 flex-shrink-0 mt-1 escalateX-icon-glow">
                                {category.icon}
                            </div>
                            <div className="flex-1 min-w-0 text-left">
                                <h3 className="text-white font-bold mb-1 escalateX-neon-text font-orbitron text-left">{category.name}</h3>
                                <span className={`inline-block px-2 py-1 text-xs font-semibold border font-mono tracking-wider escalateX-threat-badge ${getDifficultyClass(category.difficulty)}`}>
                                    {category.difficulty}
                                </span>
                            </div>
                        </header>
                        <p className="text-gray-300 text-sm leading-relaxed font-mono overflow-hidden relative z-10 text-left">{category.description}</p>
                        <div className="escalateX-card-status-indicator"></div>
                    </article>
                ))}
                </main>
            </div>
        </section>
    );
};

export default CTFCategories;