
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
// import Threads from "../blocks/Backgrounds/Threads/Threads";
// import UpcomingEvents from "../components/upcominEvents/UpcomingEvents";

const ScrollElement = (item) => {
  document.getElementById(item).scrollIntoView({ behavior: "smooth" });
  return;
};

const Home = () => {
  return (
    <>
      <Navbar scrollToComponent={ScrollElement} />
      <HeroSection id="Home" />
      <div className="promo-section">
        <Alumini heading="Our Alumni" />
        <Sponsor heading="Our Sponsors" />
      </div>
      <KnowUs />
      {/* <UpcomingEvents id="Upcoming" /> */}
      <Grand id="Events" />
      <DashCard_Event />
      <ConnectUs id="About" />
      <Footer />
    </>
  );
};
export default Home;
