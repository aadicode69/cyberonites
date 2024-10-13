import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import HeroSection from "./components/hero-section/hero-section";
import { Navbar } from "./components/navbar/navbar";
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
