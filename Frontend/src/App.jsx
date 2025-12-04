import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import GuestLecture from "./components/grand events/eventdetails/GuestLecture";
import Problem_S from "./components/IntrusionX/Problem Statement/Problem_S";
import TeamGallery from "./components/hallOf_fame/TeamGallery";
import CTF from "./components/grand events/eventdetails/CTF";
import EventDash from "./components/pastEvents/EventDash";
import SecurityPage from "./pages/SecurityPage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import MainX from "./components/IntrusionX/MainX";
import IntrusionX from "./components/grand events/intrusionX/IntrusionX";
import Popup from "./components/load_popup/Popup";
import Escalatexoverview from "./components/escalate-x-overview/Escalatexoverview";

function AppContent() { 
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowPopup(true);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowPopup(false);
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/security" element={<SecurityPage />} />
        <Route path="/event_dashboard" element={<EventDash />} />
        <Route path="/our_team" element={<TeamGallery />} />
        <Route path="/capturetheflag" element={<CTF />} />
        <Route path="/intrusion-x" element={<MainX />} />
        <Route path="/intrusion-x-overview" element={<IntrusionX />} />
        <Route path="/prob-statement-x" element={<Problem_S />} />
        <Route path="/guestlecture" element={<GuestLecture />} />
        <Route path="/escalate-x-v2" element={<Escalatexoverview />} />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
