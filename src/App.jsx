import React from "react";
import HeroSection from "./components/hero-section/hero-section";
import { Navbar } from "./components/navbar/navbar";
import Footer from "./components/Footer";
import Pages from "./components/Pages";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Pages />
      <Footer />
    </>
  );
}

export default App;
