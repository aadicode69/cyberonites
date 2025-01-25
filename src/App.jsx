import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuestLecture from "./components/grand events/eventdetails/GuestLecture";
import CTF from "./components/grand events/eventdetails/CTF";
import Home from "./pages/Home";
import SecurityPage from "./pages/SecurityPage";
import NotFound from "./pages/NotFound";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

function App() {
  return (
    <>
      <Cursor isGelly={true} cursorBackgrounColor="#26C6DA" cursorInnerColor="#fff"/>
      <div data-cursor-size="20px" className="cursor-none">
      <BrowserRouter >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/security" element={<SecurityPage />} />
          {/* <Route path="*" element={<Error />} /> */}
          <Route path="/guestlecture" element={<GuestLecture />} />
          <Route path="/capturetheflag" element={<CTF />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
