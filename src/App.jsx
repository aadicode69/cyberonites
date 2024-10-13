import React from "react";
import HeroSection from "./components/hero-section/hero-section";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import Pages from "./components/Pages";
import Event from "./components/events/Event";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Event />
      <Pages />
      <Footer />
    </>
  );
}

export default App;
