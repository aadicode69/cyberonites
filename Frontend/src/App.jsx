import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import HForm from "./components/hiringForm/HForm";
import SecurityPage from "./pages/SecurityPage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import IntrusionX from "./components/grand events/intrusionX/IntrusionX";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/security" element={<SecurityPage />} />
          <Route path="/guestlecture" element={<GuestLecture />} />
          <Route path="/capturetheflag" element={<CTF />} />
          <Route path="*" element={<Error />} />
          <Route path="/event_dashboard" element={<EventDash/>} />
          <Route path="/intrusion-x" element={<MainX/>} />
          <Route path="/intrusion-x-overview" element={<IntrusionX/>} />
          <Route path="/prob-statement-x" element={<Problem_S/>} />
          <Route path="/our_team" element={<TeamGallery/>} />
          {/* <Route path="/registrations" element={<Reg_Main/>} /> */}
          {/* <Route path="/playground" element={<Terminal/>} /> */}
          {/* <Route path="/contactus" element={<ContactUs />} /> */}
          {/* <Route path="/recruitment" element={<Hiring/>} /> */}
          {/* <Route path="/recruitment_form" element={<HForm/>} /> */}
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
