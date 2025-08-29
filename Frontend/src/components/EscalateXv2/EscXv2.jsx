import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './styles/EscxSwipper.css';

// import required modules
import { EffectCube, Mousewheel, Pagination } from 'swiper/modules';
import Hero from './components/Hero';
import EventDetail from './components/EventDetail';
import TimeLine from './components/TimeLine';
import Villages from './components/Villages';
import CTFCategories from './components/CTFCategories';
import Sponsors from './components/Sponsors';

const EscXv2 = () => {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <Swiper
                effect={'cube'}
                grabCursor={true}
                direction={'vertical'}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                snaponrelease={"true"}
                modules={[Mousewheel, EffectCube, Pagination]}
                className="mySwiper w-screen h-screen"
            >
                <SwiperSlide>
                    <Hero />
                </SwiperSlide>
                <SwiperSlide>
                    <EventDetail />
                </SwiperSlide>
                <SwiperSlide>
                    <TimeLine />
                </SwiperSlide>
                <SwiperSlide>
                    <Villages />
                </SwiperSlide>
                <SwiperSlide>
                    <CTFCategories />    
                </SwiperSlide>
                <SwiperSlide>
                    <Sponsors />
                </SwiperSlide>
            </Swiper>
            <div id="modal" className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 opacity-0 pointer-events-none">
                <div className="glass-card rounded-2xl p-8 max-w-lg w-full text-center transform scale-95 transition-transform duration-300">
                    <h3 id="modal-title" className="text-2xl font-bold mb-4 text-orange-400">Notification</h3>
                    <p id="modal-message" className="text-gray-300 mb-6">This is a sample message.</p>
                    <button id="modal-close" className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors">Close</button>
                </div>
            </div>
        </div>
    );
}


export default EscXv2;