import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Alumini from "../components/Alumini/Alumni";
import ConnecttUs from "../components/connect/ConnectUs";
import Footer from "../components/footer/Footer";
import Grand from "../components/grand events/Grand";
import KnowUs from "../components/knowUs/KnowUs";
import Navbar from "../components/navbar/navbar";
import Sponsor from "../components/Sponsers/Sponser";
import DashCard_Event from "../components/pastEvents/DashCard_Event";
import PlatformCard from "../components/internalCards/PlatformCard";
import HeroSection from "../components/hero-section/HeroSection";

const ScrollElement = (item) => {
  document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
};

const Home = () => {
  const navigate = useNavigate(); // ✅ FIXED
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar scrollToComponent={ScrollElement} />

      <main className="relative">
        <HeroSection id="Home" />

        {/* Alumni + Sponsors */}
        <section className="promo-section">
          <div className="w-full">
            <Alumini heading="Our Alumni" />
          </div>
          <div className="w-full">
            <Sponsor heading="Our Sponsors" />
          </div>
        </section>

        {/* Platform Cards */}
        <section className="promo-card-section">
          <div className="w-full max-w-lg">
            <PlatformCard
              title="Cyberonites Playground"
              description="Practice cybersecurity skills in a safe environment with hands-on labs, challenges, and interactive simulations at playground.cyberonites.com"
              buttonText="Launch Playground"
              onClick={() =>
                window.open("https://playground.cyberonites.com", "_blank")
              }
              gradientFrom="from-gray-900"
              gradientTo="to-black"
              hoverFrom="hover:from-gray-800"
              hoverTo="hover:to-gray-900"
              accentColor="bg-cyan-400"
              borderColor="border border-cyan-500/20"
              textAccent="text-white"
            />
          </div>

          <div className="w-full max-w-lg">
            <PlatformCard
              title="Vulnerability Disclosure"
              description="Help us maintain security by reporting vulnerabilities responsibly. Join our bug bounty program and contribute to cybersecurity excellence"
              buttonText="Report Security Issue"
              onClick={() => navigate("/security")}
              gradientFrom="from-black"
              gradientTo="to-gray-900"
              hoverFrom="hover:from-gray-900"
              hoverTo="hover:to-gray-800"
              accentColor="bg-cyan-400"
              borderColor="border border-white/10"
              textAccent="text-white"
            />
          </div>
        </section>

        <section className="py-8">
          <KnowUs />
        </section>

        <section className="py-8">
          <DashCard_Event />
        </section>

        <section className="py-8">
          <Grand id="Events" />
        </section>

        {/* TEAM REDIRECT CTA */}
        <section className="py-16 flex justify-center">
          <div
            onClick={() => navigate("/our_team")} // ✅ FIXED
            className="cursor-pointer max-w-4xl w-full mx-4 p-10 rounded-2xl
                       bg-gradient-to-br from-black via-gray-900 to-black
                       border border-cyan-500/30
                       hover:border-cyan-400
                       transition-all duration-500
                       hover:shadow-[0_0_40px_rgba(56,189,248,0.4)]
                       text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Meet the Team
            </h2>

            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Discover the people behind Cyberonites — mentors, leaders,
              developers and innovators building the future of cybersecurity.
            </p>

            <button
              className="px-8 py-3 rounded-xl font-semibold
                         bg-gradient-to-r from-cyan-400 to-sky-500
                         text-black hover:scale-105 transition"
            >
              View Full Team →
            </button>
          </div>
        </section>

        <section className="py-8">
          <ConnecttUs id="About" />
        </section>
      </main>

      <Footer />

      {/* {showPopup && <Popup onClose={() => setShowPopup(false)} />} */}
    </div>
  );
};

export default Home;
