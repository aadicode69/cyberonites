import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './../styles/swiper-custom.css'; // Kept only one import path

import { evaluationImages } from '../data/IntrusionXImages';
import { captions } from '../data/eventData';

const EvaluationCarousel = () => {

  return (
    <div className="border-2 border-cyan-800 rounded-sm overflow-hidden bg-black/40 mb-6">
      <div className="flex items-center justify-between px-4 py-3 border-b border-cyan-800 bg-cyan-900/20">
        <h3 className="text-lg font-mono text-cyan-300 flex items-center">
          <span className="mr-2 text-cyan-400">〉</span>
          JUDGING IN PROGRESS
        </h3>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div> {/* Changed from cyan/green to blue */}
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="evaluation-swiper"
      >
        {evaluationImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-[16/9] w-full relative">
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-6 px-4">
                <p className="text-cyan-300 font-mono text-sm">
                  {getImageCaption(index)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="p-4 border-t border-cyan-800/50 bg-black/60">
        <p className="text-sm text-cyan-100">
          Our expert panel of judges evaluated each team&apos;s approach to solving complex cybersecurity challenges, 
          assessing technical skills, innovation, and presentation quality during the final evaluation rounds.
        </p>
      </div>
    </div>
  );
};

// Helper function to get captions for each image
function getImageCaption(index) {
  return captions[index] || "Evaluation process";
}

export default EvaluationCarousel;