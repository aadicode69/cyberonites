import Explore from "../components/Alumini/Alumni";
import ContactUs from "../components/contact/ContactUs";
import EventArchive from "../components/events/Event";
import Footer from "../components/footer/Footer";
import Grand from "../components/grand events/Grand";
import HeroSection from "../components/hero-section/hero-section";
import KnowUs from "../components/knowUs/KnowUs";
import Navbar from "../components/navbar/navbar";
import Sponsor from "../components/Sponsers/Sponser";
import UpcomingEvents from "../components/upcominEvents/UpcomingEvents";
import NewEvent from "../components/upcomingEventList/NewEvent";

const ScrollElement = (item) => {
    document.getElementById(item).scrollIntoView({ behavior: "smooth" });
    return;
};

const Home = () => {
  return (
    <>
      <Navbar scrollToComponent={ScrollElement} />
      <HeroSection id="Home" />
      <Explore heading="Our Alumni" />
      <Sponsor heading="Our Sponsors" />
      <KnowUs />
      <NewEvent id="Upcoming"/>
      {/* <UpcomingEvents id="Upcoming" /> */}
      <Grand id="Events" />
      <EventArchive />
      <ContactUs id="About" />
      <Footer />
    </>
  );
};

export default Home;
