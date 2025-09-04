import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.css'

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './styles/EscxSwipper.css';
import './styles/fixes.css';

import { EffectCube, Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import Hero from './components/Hero';
import EventDetail from './components/EventDetail';
import TimeLine from './components/TimeLine';
import Villages from './components/Villages';
import CTFCategories from './components/CTFCategories';
import Sponsors from './components/Sponsors';

const EscXv2 = () => {
    const vantaRef = useRef(null);
    const [isContactOpen, setIsContactOpen] = useState(false);

    useEffect(() => {
        const preconnectLink = document.createElement('link');
        preconnectLink.rel = 'preconnect';
        preconnectLink.href = 'https://fonts.googleapis.com';
        document.head.appendChild(preconnectLink);

        const preconnectGstatic = document.createElement('link');
        preconnectGstatic.rel = 'preconnect';
        preconnectGstatic.href = 'https://fonts.gstatic.com';
        preconnectGstatic.crossOrigin = 'anonymous';
        document.head.appendChild(preconnectGstatic);

        // Load Audiowide font
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Audiowide&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);

        let vantaEffect = null;

        const initVanta = async () => {
            try {
                const VANTA = await import('vanta/dist/vanta.fog.min.js');
                const THREE = await import('three');

                if (vantaRef.current) {
                    vantaEffect = VANTA.default({
                        el: vantaRef.current,
                        THREE: THREE,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        highlightColor: 0x0,
                        midtoneColor: 0x0,
                        lowlightColor: 0x0,
                        baseColor: 0xffffff,
                        blurFactor: 0.40,
                        speed: 0.50,
                        zoom: 1.50
                    });
                }
            } catch {
                console.log('Vanta.js not loaded, using fallback background');
            }
        };

        initVanta();

        return () => {
            if (vantaEffect) vantaEffect.destroy();
            // Clean up font links
            if (document.head.contains(preconnectLink)) document.head.removeChild(preconnectLink);
            if (document.head.contains(preconnectGstatic)) document.head.removeChild(preconnectGstatic);
            if (document.head.contains(fontLink)) document.head.removeChild(fontLink);
        };
    }, []);

    return (
        <div className="escxv2 w-screen h-screen relative bg-gray-900">
            {/* Enhanced Cyberpunk Grid Overlay */}
            <div className="absolute inset-0 z-10 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `
                         linear-gradient(rgba(255, 107, 53, 0.3) 1px, transparent 1px),
                         linear-gradient(to right, rgba(255, 107, 53, 0.3) 1px, transparent 1px)
                     `,
                    backgroundSize: '40px 40px'
                }}>
            </div>

            {/* Enhanced Scanlines Effect */}
            <div className="absolute inset-0 z-15 opacity-30 pointer-events-none"
                style={{
                    background: `repeating-linear-gradient(
                         0deg,
                         rgba(255, 107, 53, 0.04),
                         rgba(255, 107, 53, 0.04) 1px,
                         transparent 1px,
                         transparent 3px
                     )`
                }}>
            </div>

            {/* Enhanced Vanta.js Fog Background - White-based fog in background */}
            <div ref={vantaRef} className="absolute inset-0 z-5 pointer-events-none" 
                 style={{ 
                     opacity: 0.5,
                     mixBlendMode: 'normal'
                 }}>
            </div>

            {/* Main Swiper Container - 95% screen width with transparent background */}
            <div className="absolute inset-0 flex items-center justify-center z-30">
                <div className="relative w-[95vw] h-[95vh]"
                    style={{
                        background: 'transparent'
                    }}>

                    <Swiper
                        effect={'cube'}
                        direction={'vertical'}
                        slidesPerView={1}
                        spaceBetween={0}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        mousewheel={{
                            enabled: true,
                            forceToAxis: true,
                            sensitivity: 1,
                            releaseOnEdges: true
                        }}
                        speed={800}
                        modules={[EffectCube, Mousewheel, Pagination]}
                        className="w-full h-full relative escalateX-main-swiper overflow-hidden"
                        style={{
                            '--swiper-pagination-bullet-inactive-color': 'rgb(255 107 53)',
                            '--swiper-pagination-bullet-inactive-opacity': '0.5',
                            '--swiper-pagination-color': 'rgb(255 107 53)',
                            overflow: 'hidden',
                            zIndex: 20
                        }}                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                    >
                        <SwiperSlide className="bg-transparent">
                            <Hero />
                        </SwiperSlide>
                        <SwiperSlide className="bg-transparent">
                            <EventDetail />
                        </SwiperSlide>
                        <SwiperSlide className="bg-transparent">
                            <TimeLine />
                        </SwiperSlide>
                        <SwiperSlide className="bg-transparent">
                            <Villages />
                        </SwiperSlide>
                        <SwiperSlide className="bg-transparent">
                            <CTFCategories />
                        </SwiperSlide>
                        <SwiperSlide className="bg-transparent">
                            <Sponsors />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {/* Redesigned Sticky Contact Card - Left side */}
            <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40">
                {/* Contact Toggle Button */}
                <button 
                    onClick={() => setIsContactOpen(!isContactOpen)}
                    className={`relative bg-gradient-to-r from-orange-500/90 to-orange-600/95 border-2 border-orange-400 text-white font-bold py-4 px-4 transition-all duration-300 hover:from-orange-400/95 hover:to-orange-500/95 hover:border-orange-300 active:scale-95 backdrop-blur-md shadow-lg ${isContactOpen ? 'rounded-r-none' : 'rounded-r-lg'}`}
                    style={{
                        clipPath: isContactOpen ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)',
                        textShadow: '0 0 8px rgba(255, 107, 53, 0.8)',
                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 20px rgba(255, 107, 53, 0.4)',
                        fontSize: '11px',
                        fontFamily: 'Orbitron, sans-serif',
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        minHeight: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {isContactOpen ? '✕' : 'CONTACT'}
                </button>

                {/* Contact Info Panel */}
                <div className={`absolute left-full top-0 transition-all duration-300 ease-out ${isContactOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0 pointer-events-none'}`}>
                    <div className="bg-gradient-to-br from-gray-900/95 to-black/90 border-2 border-orange-500/60 p-6 backdrop-blur-xl w-80 rounded-r-lg"
                         style={{
                             boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 107, 53, 0.4), 0 10px 40px rgba(0, 0, 0, 0.3)'
                         }}>
                        {/* Enhanced holographic effect */}
                        <div className="absolute inset-0 opacity-20 rounded-r-lg"
                             style={{
                                 background: 'linear-gradient(45deg, transparent 30%, rgba(255, 107, 53, 0.2) 50%, transparent 70%)',
                                 backgroundSize: '200% 200%',
                                 animation: 'holographic 6s ease-in-out infinite'
                             }}>
                        </div>
                        
                        <div className="relative z-10">
                            <h3 className="text-orange-400 text-xl font-bold mb-6 font-orbitron tracking-wider uppercase flex items-center gap-2"
                                style={{ textShadow: '0 0 10px rgb(255 107 53)' }}>
                                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                                CONTACT US
                            </h3>
                            <div className="text-gray-200 leading-relaxed font-mono relative z-10 text-left space-y-5">
                                <div className="group">
                                    <p className="text-orange-300 font-bold mb-2 text-sm uppercase tracking-wide">Email:</p>
                                    <p className="text-sm">
                                        <a className="text-gray-200 hover:text-orange-300 transition-all duration-200 hover:tracking-wide" href="mailto:support@cyberonites.com">
                                            support@cyberonites.com
                                        </a>
                                    </p>
                                </div>
                                
                                <div className="group">
                                    <p className="text-orange-300 font-bold mb-2 text-sm uppercase tracking-wide">Website:</p>
                                    <p className="text-sm">
                                        <a className="text-gray-200 hover:text-orange-300 transition-all duration-200 hover:tracking-wide" href="https://www.cyberonites.com" target="_blank" rel="noreferrer">
                                            www.cyberonites.com
                                        </a>
                                    </p>
                                </div>
                                
                                <div className="group">
                                    <p className="text-orange-300 font-bold mb-2 text-sm uppercase tracking-wide">Social Media:</p>
                                    <div className="space-y-2 text-sm">
                                        <p>
                                            <span className="text-gray-400">LinkedIn:</span> <a className="text-gray-200 hover:text-orange-300 transition-all duration-200 hover:tracking-wide" href="https://linkedin.com/company/cyberonites-club" target="_blank" rel="noreferrer">
                                                cyberonites-club
                                            </a>
                                        </p>
                                        <p>
                                            <span className="text-gray-400">Instagram:</span> <a className="text-gray-200 hover:text-orange-300 transition-all duration-200 hover:tracking-wide" href="https://instagram.com/official_cyberonites" target="_blank" rel="noreferrer">
                                                official_cyberonites
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EscXv2;