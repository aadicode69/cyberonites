import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuestLecture from "./components/grand events/eventdetails/GuestLecture";
import CTF from "./components/grand events/eventdetails/CTF";
import Home from "./pages/Home";
import SecurityPage from "./pages/SecurityPage";
import NotFound from "./pages/NotFound";
import "react-creative-cursor/dist/styles.css";
import ContactUs from "./components/contact us/ContactUs";
import TeamGallery from "./components/hallOf_fame/TeamGallery";
import Hiring from "./components/hiringForm/Hiring";
import HForm from "./components/hiringForm/HForm";
import WhatsApp from "./components/hiringForm/WhatsApp";

function App() {
  return (
    <>
      {/* <Cursor isGelly={true} cursorBackgrounColor="#26C6DA" cursorInnerColor="#fff"/>
      <div data-cursor-size="20px className="cursor-pointer-none">
      
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/security" element={<SecurityPage />} />
          {/* <Route path="*" element={<Error />} /> */}
          <Route path="/guestlecture" element={<GuestLecture />} />
          <Route path="/capturetheflag" element={<CTF />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/our_team" element={<TeamGallery/>} />
          <Route path="/recruitment" element={<Hiring/>} />
          <Route path="/recruitment_form" element={<HForm/>} />
          <Route path="/join_hiringLobby" element={<WhatsApp/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
