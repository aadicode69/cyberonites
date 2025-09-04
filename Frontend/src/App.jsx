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
import EscXv2 from "./components/EscalateXv2/EscXv2";
import IntrusionX from "./components/grand events/intrusionX/IntrusionX";
import Popup from "./components/load_popup/Popup";

function AppContent() {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  // ✅ Show popup only on very first load
  useEffect(() => {
    setShowPopup(true);
  }, []);

  // ✅ Close popup automatically when route changes (but don’t reopen)
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
        <Route path="/guestlecture" element={<GuestLecture />} />
        <Route path="/capturetheflag" element={<CTF />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/event_dashboard" element={<EventDash />} />
        <Route path="/escalate-x-v2" element={<EscXv2 />} />
        <Route path="/intrusion-x" element={<MainX />} />
        <Route path="/intrusion-x-overview" element={<IntrusionX />} />
        <Route path="/prob-statement-x" element={<Problem_S />} />
        <Route path="/our_team" element={<TeamGallery />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>

      {/* ✅ Popup visible only when showPopup = true */}
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
