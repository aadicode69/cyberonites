import React from "react";
import "../styles/Villages.css";
import {
  FaCloud,
  FaGlobe,
  FaIndustry,
  FaNetworkWired,
  FaSearch,
  FaVirus,
  FaUserSecret,
  FaLink,
  FaMobileAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

const villages = [
  {
    name: "IoT Security",
    icon: <FaIndustry className="text-5xl" />,
    description:
      "Explore Internet of Things security challenges, device vulnerabilities, and secure IoT implementations.",
    topics: [
      "Device Security",
      "Network Protocols",
      "Firmware Analysis",
      "IoT Forensics",
    ],
  },
  {
    name: "Malware Analysis",
    icon: <FaVirus className="text-5xl" />,
    description:
      "Deep dive into malware reverse engineering, behavior analysis, and detection techniques.",
    topics: [
      "Reverse Engineering",
      "Static Analysis",
      "Dynamic Analysis",
      "Malware Detection",
    ],
  },
  {
    name: "Cloud Infrastructure",
    icon: <FaCloud className="text-5xl" />,
    description:
      "Understand cloud security architectures, common vulnerabilities, and secure deployment practices.",
    topics: [
      "AWS Security",
      "Container Security",
      "Identity Management",
      "Cloud Forensics",
    ],
  },
  {
    name: "Web Exploitation",
    icon: <FaGlobe className="text-5xl" />,
    description:
      "Learn about common web application vulnerabilities, exploitation techniques, and defensive measures.",
    topics: ["OWASP Top 10", "SQL Injection", "XSS", "Authentication Bypass"],
  },
  {
    name: "OSINT",
    icon: <FaSearch className="text-5xl" />,
    description:
      "Utilize open-source intelligence techniques to gather information for reconnaissance and investigations.",
    topics: [
      "Public Records",
      "Social Media Analysis",
      "Geolocation",
      "Dark Web Monitoring",
    ],
  },
];

const VillageCard = ({ village }) => {
  return (
    <div className="village-card-inner">
      <div className="icon-container">{village.icon}</div>
      <h3>{village.name}</h3>
      <p>{village.description}</p>
      <div className="topics-list">
        {village.topics.map((topic, i) => (
          <span key={i} className="topic-tag">
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};

const Villages = () => {
  return (
    <section id="section4" className="carousel-section main-section">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center py-8 px-4 h-full overflow-y-auto">
        <header className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-4 font-orbitron">
            <span className="text-white">KNOWLEDGE </span>
            <span
              className=""
              data-text="VILLAGES"
              style={{ color: "var(--escalate-orange)" }}
            >
              VILLAGES
            </span>
          </h2>
          <p className="text-base text-gray-300 max-w-3xl mx-auto font-mono">
            Immersive learning environments featuring expert-led workshops and
            hands-on training across specialized cybersecurity domains.
          </p>
        </header>

        <main className="w-full flex-1 flex flex-col items-center justify-center relative">
          {/* Container with proper spacing for navigation buttons */}
          <div className="w-full relative" style={{ maxWidth: '1200px', padding: '0 80px' }}>
            <Swiper
              slidesPerView="auto"
              spaceBetween={30}
              grabCursor={true}
              loop={true}
              speed={1000}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
              navigation={{
                prevEl: ".villages-nav-prev",
                nextEl: ".villages-nav-next",
              }}
              modules={[Autoplay, Navigation]}
              className="villages-swiper-container"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  centeredSlides: true,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 35,
                  centeredSlides: true,
                }
              }}
              style={{
                padding: '20px 0 40px 0',
                overflow: 'visible'
              }}
            >
              {villages.map((village, index) => (
                <SwiperSlide 
                  key={index} 
                  className="village-card"
                  style={{
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <VillageCard village={village} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons - positioned outside the swiper container */}
            <button
              className="villages-nav-prev"
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1000,
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(255, 107, 53, 0.2)",
                border: "2px solid rgba(255, 107, 53, 0.5)",
                borderRadius: "0",
                color: "rgba(255, 107, 53, 0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                boxShadow: "0 0 15px rgba(255, 107, 53, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 107, 53, 0.4)";
                e.target.style.borderColor = "rgba(255, 107, 53, 0.8)";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(255, 107, 53, 0.2)";
                e.target.style.borderColor = "rgba(255, 107, 53, 0.5)";
                e.target.style.color = "rgba(255, 107, 53, 0.9)";
              }}
            >
              <FaChevronLeft className="text-lg" />
            </button>

            <button
              className="villages-nav-next"
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1000,
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(255, 107, 53, 0.2)",
                border: "2px solid rgba(255, 107, 53, 0.5)",
                borderRadius: "0",
                color: "rgba(255, 107, 53, 0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                boxShadow: "0 0 15px rgba(255, 107, 53, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 107, 53, 0.4)";
                e.target.style.borderColor = "rgba(255, 107, 53, 0.8)";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(255, 107, 53, 0.2)";
                e.target.style.borderColor = "rgba(255, 107, 53, 0.5)";
                e.target.style.color = "rgba(255, 107, 53, 0.9)";
              }}
            >
              <FaChevronRight className="text-lg" />
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Villages;