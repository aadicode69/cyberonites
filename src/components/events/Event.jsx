import { Swiper, SwiperSlide } from "swiper/react";
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
import Events from "./eventData";
import { FaAngleDoubleUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const Event = () => {
  const [direction, cngDirection] = useState(window.innerWidth <= 800);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      cngDirection(window.innerWidth <= 800);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call handler right away so state gets updated with initial window size
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`flex ${
        direction ? "flex-col" : "flex-row"
      } m-4 p-8 border border-gray-800 bg-gray-900 rounded`}
    >
      <Swiper
        onSwiper={setSecondSwiper}
        direction="horizontal"
        loop={true}
        effect={"cards"}
        grabCursor={true}
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
        {Events.map((eve) => (
          <SwiperSlide
            key={eve.title}
            className="flex items-center justify-center"
          >
            {eve.image && (
              <img
                className="object-contain cursor-pointer h-full w-full"
                src={eve.image}
                alt={eve.title}
              />
            )}
          </SwiperSlide>
        ))}
        <div className={`absolute left-1/2 ${ direction ? "-translate-x-1/2 top-[-1.5rem]" : "-translate-x-1/2 bottom-[-5.5rem]"}  w-18 h-20 text-cyan-400 opacity-60 flex`}>
          <div className="h-5 -rotate-90">
            <FaAngleDoubleUp className="text-sm animate-[bounce_1s_.5s_infinite]" />
          </div>
          <div className="text-sm font-mono font-thin animate-pulse">Swipe</div>
          <div className="h-5 rotate-90">
            <FaAngleDoubleUp className="text-sm animate-[bounce_1s_.5s_infinite]" />
          </div>
        </div>
      </Swiper>

      {direction ? (
        <Swiper
          onSwiper={setFirstSwiper}
          effect={"creative"}
          loop={true}
          direction="vertical"
          grabCursor={true}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, -400, 0],
            },
            next: {
              translate: [0, 0, -400],
            },
          }}
          controller={{ control: secondSwiper }}
          modules={[Controller, EffectCreative]}
          className="mySwiper w-72 h-96 text-white border-t-2 border-cyan-600"
        >
          {Events.map((eve) => (
            <SwiperSlide
              key={eve.title}
              className="flex w-72 text-center p-4 flex-col items-center justify-between bg-slate-900 border-b border-x border-gray-600 rounded-b-lg"
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
      ) : (
        <Swiper
          onSwiper={setFirstSwiper}
          effect={"creative"}
          loop={true}
          direction="horizontal"
          grabCursor={true}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: [400, 0, 0],
            },
          }}
          controller={{ control: secondSwiper }}
          modules={[Controller, EffectCreative]}
          className="mySwiper w-72 h-96 text-white border-r-2 border-cyan-600"
        >
          {Events.map((eve) => (
            <SwiperSlide
              key={eve.title}
              className="flex w-80 text-center p-4 flex-col items-center justify-between bg-slate-900 border-l border-y border-gray-600 rounded-s-lg"
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
      )}
    </div>
  );
};

export default Event;
