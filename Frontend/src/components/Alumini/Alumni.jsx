import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Alu.css";

import delloiteLogo from "../../img/company-logo/deolite.png";
import pertsolLogo from "../../img/company-logo/pertsol.png";
import netSPILogo from "../../img/company-logo/netspli.png";
import zscalerLogo from "../../img/company-logo/zscalerLogo.svg";
import juspayLogo from "../../img/company-logo/juspay.png";

const Alumini = ({ heading }) => {
  const alumni = [
    { alt: "Deloitte Logo", img: delloiteLogo },
    { alt: "PertSol Logo", img: pertsolLogo },
    { alt: "NetSPI Logo", img: netSPILogo },
    { alt: "Zscaler Logo", img: zscalerLogo },
    { alt: "Juspay Logo", img: juspayLogo },
  ];

  return (
    <section className="alumni-section" id="alumni">
      <div className="alumni-header">
        <p className="alumni-eyebrow">Industry Network</p>
        <h2 className="alumni-title">{heading || "Our Alumni"}</h2>
        <p className="alumni-subtitle">
          Organisations where EscalateX alumni are creating real‑world impact.
        </p>
      </div>

      <Swiper
        className="alumni-swiper"
        modules={[Pagination, Autoplay]}
        loop
        speed={600}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
       
  spaceBetween={24}
  slidesPerView={3}
  pagination={{ clickable: true }}
  breakpoints={{
    0:   { slidesPerView: 1.2, spaceBetween: 14, centeredSlides: true },
    640: { slidesPerView: 2,   spaceBetween: 18 },
    1024:{ slidesPerView: 3,   spaceBetween: 24 },
        }}
      >
        {alumni.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="alumni-card">
              <img
                src={item.img}
                alt={item.alt}
                className="alumni-logo"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Alumini;
