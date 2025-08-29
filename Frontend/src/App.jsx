import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import GuestLecture from "./components/grand events/eventdetails/GuestLecture";
import Problem_S from "./components/IntrusionX/Problem Statement/Problem_S";
import TeamGallery from "./components/hallOf_fame/TeamGallery";
import CTF from "./components/grand events/eventdetails/CTF";
import EventDash from "./components/pastEvents/EventDash";
import ContactUs from "./components/contact us/ContactUs";
import Reg_Main from "./components/Registration/Reg_Main";
import WhatsApp from "./components/hiringForm/WhatsApp";
import Terminal from "./components/Terminal/Terminal";
import Hiring from "./components/hiringForm/Hiring";
import Loader from "./components/Homepage/Loader";
import MainX from "./components/IntrusionX/MainX";
import EscX_v2 from "./components/EscalateX_v2/EscX_v2";
import EscXv2 from "./components/EscalateXv2/EscXv2";
import HForm from "./components/hiringForm/HForm";
import SecurityPage from "./pages/SecurityPage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import IntrusionX from "./components/grand events/intrusionX/IntrusionX";
import ProblemsEscXv2 from "./components/EscalateX_v2/Problem Statement/Problem_S";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/security" element={<SecurityPage />} />
          <Route path="/guestlecture" element={<GuestLecture />} />
          <Route path="/capturetheflag" element={<CTF />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/event_dashboard" element={<EventDash/>} />
          <Route path="/escalateXv" element={<EscX_v2/>} />
          <Route path="/escalateXv2" element={<EscXv2 />} />
          <Route path="/intrusion-x" element={<MainX/>} />
          <Route path="/intrusion-x-overview" element={<IntrusionX/>} />
          <Route path="/escalatex-v2-problems" element={<ProblemsEscXv2/>} />
          <Route path="/prob-statement-x" element={<Problem_S/>} />
          <Route path="/our_team" element={<TeamGallery/>} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
