import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import NewEvent from "../upcomingEventList/NewEvent.jsx";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Event from "../events/Event.jsx";
import Footer from "../footer/Footer.jsx";

function EventDash() {
  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const updatePageHeight = () => {
      setPageHeight(document.documentElement.scrollHeight);
    };

    updatePageHeight();
    window.addEventListener("resize", updatePageHeight);

    return () => {
      window.removeEventListener("resize", updatePageHeight);
    };
  }, []);

  useEffect(() => {
    const starContainer = document.querySelector(".star-container");
    if (!starContainer) return;

    starContainer.innerHTML = "";
    const numberOfStars = 20;

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 2 + 3}s`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      starContainer.appendChild(star);
    }
  }, []);

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden bg-black text-white p-6">
        <div className="star-container absolute top-0 left-0 w-full h-full"></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-cyan-400 mb-6 text-center font-clash">
            Event Highlights
          </h1>
          <div className="relative max-w-4xl mx-auto rounded-lg p-4">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation, Autoplay]}
            >
              <SwiperSlide>
                <NewEvent />
              </SwiperSlide>
              {/* <SwiperSlide>
                <NewEvent />
              </SwiperSlide> */}
            </Swiper>
            <button className="swiper-button-prev absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-cyan-400 p-2 rounded-full text-sm">
              <MdArrowBack size={20} />
            </button>
            <button className="swiper-button-next absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-cyan-400 p-2 rounded-full text-sm">
              <MdArrowForward size={20} />
            </button>
          </div>
          <Event />
        </div>

        <style jsx>{`
          :root {
            --fall-distance: ${pageHeight}px;
          }
          .star {
            position: absolute;
            top: -10px;
            width: 2px;
            height: 30px;
            background-image: linear-gradient(180deg, rgba(255,255,255,0.8), transparent);
            border-radius: 2px;
            opacity: 0.8;
            animation: fall 3s linear infinite;
          }
          @keyframes fall {
            0% {
              transform: translateY(-30px);
              opacity: 0;
            }
            10% {
              opacity: 0.8;
            }
            90% {
              opacity: 0.8;
            }
            100% {
              transform: translateY(var(--fall-distance));
              opacity: 0;
            }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
}

export default EventDash;
