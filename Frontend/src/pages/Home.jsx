import { useState, useEffect } from "react";
import Alumini from "../components/Alumini/Alumni";
import ConnecttUs from "../components/connect/ConnectUs";
import EventArchive from "../components/events/Event";
import Footer from "../components/footer/Footer";
import Grand from "../components/grand events/Grand";
import HeroSection from "../components/hero-section/hero-section";
import KnowUs from "../components/knowUs/KnowUs";
import Navbar from "../components/navbar/navbar";
import Sponsor from "../components/Sponsers/Sponser";
import DashCard_Event from "../components/pastEvents/DashCard_Event";
import UpcomingEvents from "../components/upcominEvents/UpcomingEvents";
import NewEvent from "../components/upcomingEventList/NewEvent";
import Popup from "../components/load_popup/Popup";
import TeamCard from "../components/hallOf_fame/TeamCard";

// ...existing code...

// TEMPORARY TEST - Add this at the top of your imports
import testPngImage from "../img/sponsor-logo/altered-security.png";

const ScrollElement = (item) => {
  document.getElementById(item).scrollIntoView({ behavior: "smooth" });
};

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    console.log("PNG test import:", testPngImage); // This will log the imported path
    setTimeout(() => setShowPopup(true), 1500);
  }, []);
  
  return (
    <div className="relative">
      <Navbar scrollToComponent={ScrollElement} />
      <HeroSection id="Home" />
      <div className="promo-section">
        <Alumini heading="Our Alumni" />
        <Sponsor heading="Our Sponsors" />
      </div>
      {/* <UpcomingEvents id="Upcoming" /> */}
      <KnowUs />
      <DashCard_Event />
      {/* <NewEvent id="Upcoming"/> */}
      <Grand id="Events" />
      <TeamCard/>
      <ConnecttUs id="About" />
      <Footer />
      {/* {showPopup && <Popup onClose={() => setShowPopup(false)} />} */}
    </div>
  );
};

export default Home;
