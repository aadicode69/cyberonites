import React from 'react'
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Navbar } from "./components/navbar/navbar";
import Aluminis from "./components/Alumini/Alumni";
import Sponsor from "./components/Sponsers/Sponser";
import Footer from "./components/footer/Footer";
import Pages from "./components/Pages";
import Event from "./components/events/Event";
function App() {
  return (
    <>
      <Navbar />
      <Aluminis heading="Our Alumni" />
      <Sponsor heading="Our Sponsors" />
      <HeroSection />
      <Event />
      <Pages />
      <Footer />
    </>
  );
}

export default App;
