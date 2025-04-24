import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './../styles/swiper-custom.css'; // Correct import path for the styles

const TeamCarousel = ({ images, aspectRatio = "aspect-[4/3]" }) => {
  return (
    <div className="border border-pink-900 rounded-sm overflow-hidden bg-black/30">
      <div className="h-1 bg-gradient-to-r from-pink-700 to-pink-500"></div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="team-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={`${aspectRatio} w-full`}>
              <img 
                src={image} 
                alt="" // Removed numbered text
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamCarousel;
