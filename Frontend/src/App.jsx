import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import GuestLecture from "./components/grand events/eventdetails/GuestLecture";
import Problem_S from "./components/IntrusionX/Problem Statement/Problem_S";

import CTF from "./components/grand events/eventdetails/CTF";
import EventDash from "./components/pastEvents/EventDash";
import SecurityPage from "./pages/SecurityPage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import MainX from "./components/IntrusionX/MainX";
import IntrusionX from "./components/grand events/intrusionX/IntrusionX";
import IntrusionXv2 from "../src/components/intrusionX2/IntrusionXv2";
import Popup from "./components/load_popup/Popup";
import Team2024 from "./components/team-2024/Team2024";
import Team2025 from "./components/team-2025/Team2025";
import EscalateXOverview from "./components/escalate-x-overview/EscalateXOverview";

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
        <Route path="/team2024" element={<Team2024 />} />
        <Route path="/team2025" element={<Team2025 />} />

        <Route exact path="/" element={<Home />} />
        <Route exact path="/security" element={<SecurityPage />} />
        <Route path="/event_dashboard" element={<EventDash />} />
        <Route path="/our_team" element={<Team2025 />} />
        <Route path="/capturetheflag" element={<CTF />} />
        <Route path="/intrusion-x" element={<MainX />} />
        <Route path="/intrusion-x-overview" element={<IntrusionX />} />
        <Route path="/prob-statement-x" element={<Problem_S />} />
        <Route path="/guestlecture" element={<GuestLecture />} />
        <Route path="/escalate-x-v2" element={<EscalateXOverview />} />
        {/* <Route path="/intrusion-x-second-edition" element={<IntrusionXv2 />} /> */}

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
{/* 
      {showPopup && <Popup onClose={() => setShowPopup(false)} />} */}
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
