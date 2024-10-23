import React from "react";
import HeroSection from "./components/hero-section/hero-section";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import Pages from "./components/Pages";
import Event from "./components/events/Event";
import ContactUs from "./components/contact/ContactUs";
import Explore from "./components/Alumini/Alumni";
import Sponsor from "./components/Sponsers/Sponser";
import UpcomingEvents from "./components/upcominEvents/UpcomingEvents";
import Grand from "./components/grand events/Grand";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Security from "./components/security/security";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <Explore heading="Our Alumni" />
              <Sponsor heading="Our Sponsors" />
              <UpcomingEvents />
              <Grand />
              <Event />
              <ContactUs />
              <Pages />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/security"
          element={
            <>
              <Navbar />
              <Security />
              <Footer />
            </>
          }
        />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
