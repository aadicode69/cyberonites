import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './../styles/swiper-custom.css';

const WinnerCarousel = ({ images = [], variant = "primary" }) => {
  // If no images or empty array, show placeholder
  if (!images || images.length === 0) {
    return (
      <div className="border border-gray-800 rounded-sm bg-black/30 flex items-center justify-center p-6 aspect-video">
        <p className="text-gray-400 text-sm">No images available</p>
      </div>
    );
  }

  return (
    <div className="border border-gray-800 rounded-sm overflow-hidden bg-black/30">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={images.length > 1}
        className={`winner-swiper swiper-${variant}`}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-[4/3] w-full">
              <img 
                src={image} 
                alt={`Winner image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WinnerCarousel;