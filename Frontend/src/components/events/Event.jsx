import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-cards";
import {
  Controller,
  Keyboard,
  Autoplay,
  EffectCards,
  EffectCreative,
} from "swiper/modules";
import events from "./eventData";  // Updated import name
import { FaAngleDoubleUp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

const EventArchive = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h1 className="text-cyan-400 font-clash font-bold text-4xl mt-10 mb-4">
        Event Archive
      </h1>
      <div className={`w-[95%] flex ${isMobile ? "flex-col" : "flex-row"
        } overflow-hidden items-center justify-center py-8 border border-gray-800 bg-gray-900 rounded`}
      >
        <Swiper
          effect="cards"
          onSwiper={setSecondSwiper}
          direction="horizontal"
          loop={false}
          grabCursor={true}
          watchSlidesProgress={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          controller={{ control: firstSwiper }}
          modules={[Keyboard, Autoplay, EffectCards, Controller]}
          className="mySwiper w-72 h-96"
        >
          {events.map((eve) => (
            <SwiperSlide
              key={eve.title}
              className="flex items-center justify-center"
            >
              {eve.image && (
                <img
                  className="object-contain h-full w-full"
                  src={eve.image}
                  alt={eve.title}
                />
              )}
            </SwiperSlide>
          ))}
          <div
            className={`absolute left-1/2 ${isMobile
              ? "-translate-x-1/2 top-[-1.5rem]"
              : "-translate-x-1/2 bottom-[-5.5rem]"
              }  w-18 h-20 text-cyan-400 opacity-60 flex`}
          >
            <div className="h-5 -rotate-90">
              <FaAngleDoubleUp className="text-sm animate-[bounce_1s_.5s_infinite]" />
            </div>
            <div className="text-sm font-mono font-thin animate-pulse">
              Swipe
            </div>
            <div className="h-5 rotate-90">
              <FaAngleDoubleUp className="text-sm animate-[bounce_1s_.5s_infinite]" />
            </div>
          </div>
        </Swiper>

        <Swiper
          onSwiper={setFirstSwiper}
          effect={"creative"}
          loop={false}
          grabCursor={true}
          watchSlidesProgress={true}
          direction={isMobile ? "vertical" : "horizontal"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: isMobile ? [0, -400, 0] : [0, 0, -400],
            },
            next: {
              translate: isMobile ? [0, 0, -400] : [400, 0, 0],
            }
          }}
          controller={{ control: secondSwiper }}
          modules={[Controller, EffectCreative]}
          className={`mySwiper w-72 h-96 text-white ${isMobile ? "border-t-2" : "border-r-2"} border-cyan-600 overflow-hidden`}>
          {events.map((eve) => (
            <SwiperSlide
              key={eve.title}
              className={`flex w-72 text-center p-4 flex-col items-center justify-between bg-slate-900 ${isMobile ? "border-b border-x rounded-b-lg" : "border-l border-y rounded-s-lg"} border-gray-600`}
            >
              <h2 className="w-4/5 text-cyan-400 text-xl font-bold mb-8">
                {eve.title.toUpperCase()}
              </h2>
              <p className="w-full h-full text-md text-pretty text-justify">
                {eve.description}
              </p>
              <div className="w-full text-sm text-center flex justify-between">
                <p className="w-full flex flex-col justify-between">
                  <span className="font-semibold text-cyan-500">
                    {eve.event_date}
                  </span>
                  <span className="font-bold">Event Date </span>
                </p>
                <p className="w-full flex flex-col justify-between border-l border-gray-600">
                  <span className="font-semibold text-cyan-500">
                    {eve.participants}
                  </span>
                  <span className="font-bold">Participants </span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EventArchive;