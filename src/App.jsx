<<<<<<< HEAD
// import React from 'react'
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Navbar } from "./components/navbar/navbar";
import Aluminis from "./components/Alumini/Alumni";
import Sponsor from "./components/Sponsers/Sponser";


=======
import React from "react";
import HeroSection from "./components/hero-section/hero-section";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import Pages from "./components/Pages";
import Event from "./components/events/Event";
>>>>>>> 9d66fcda8ae13e836c0d82aaead72ecae98781d4
function App() {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <Aluminis heading="Our Alumni" />
      <Sponsor heading="Our Sponsors" />
      <Body />
=======
      <HeroSection />
      <Event />
      <Pages />
>>>>>>> 9d66fcda8ae13e836c0d82aaead72ecae98781d4
      <Footer />
    </>
  );
}

export default App;
