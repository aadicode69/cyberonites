import { useState, useEffect } from "react";
import Alumini from "../components/Alumini/Alumni";
import ConnecttUs from "../components/connect/ConnectUs";
import EventArchive from "../components/events/Event";
import Footer from "../components/footer/Footer";
import Grand from "../components/grand events/Grand";
import KnowUs from "../components/knowUs/KnowUs";
import Navbar from "../components/navbar/navbar";
import Sponsor from "../components/Sponsers/Sponser";
import DashCard_Event from "../components/pastEvents/DashCard_Event";
import UpcomingEvents from "../components/upcominEvents/UpcomingEvents";
import NewEvent from "../components/upcomingEventList/NewEvent";
import Popup from "../components/load_popup/Popup";
import TeamCard from "../components/hallOf_fame/TeamCard";
import PlatformCard from "../components/internalCards/PlatformCard";
import HeroSection from "../components/hero-section/HeroSection";

const ScrollElement = (item) => {
  document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
};

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setShowPopup(true), 1500);
  }, []);
  
  return (
    <div className="relative min-h-screen">
      <Navbar scrollToComponent={ScrollElement} />
      
      <main className="relative">
        <HeroSection id="Home" />
        
        <section className="promo-section">
          <div className="w-full">
            <Alumini heading="Our Alumni" />
          </div>
          <div className="w-full">
            <Sponsor heading="Our Sponsors" />
          </div>
        </section>
        
        <section className="promo-card-section">
          <div className="w-full max-w-lg">
            <PlatformCard 
              title="Cyberonites Playground"
              description="Practice cybersecurity skills in a safe environment with hands-on labs, challenges, and interactive simulations at playground.cyberonites.com"
              buttonText="Launch Playground"
              onClick={() => window.open('https://playground.cyberonites.com', '_blank')}
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
              onClick={() => window.location.href = '/security'}
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
        
        {/* <section className="py-8">
          <UpcomingEvents id="Upcoming" />
        </section> */}
        
        <section className="py-8">
          <KnowUs />
        </section>
        
        <section className="py-8">
          <DashCard_Event />
        </section>
        
        {/* <section className="py-8">
          <NewEvent id="Upcoming"/>
        </section> */}
        
        <section className="py-8">
          <Grand id="Events" />
        </section>
        
        <section className="py-8">
          <TeamCard/>
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
