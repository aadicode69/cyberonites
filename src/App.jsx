import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuestLecture from "./components/grand events/eventdetails/GuestLecture";
import CTF from "./components/grand events/eventdetails/CTF";
import Home from "./pages/Home";
import SecurityPage from "./pages/SecurityPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/security" element={<SecurityPage />} />
        {/* <Route path="*" element={<Error />} /> */}
        <Route path="/guestlecture" element={<GuestLecture />} />
        <Route path="/capturetheflag" element={<CTF />} />
        <Route path="/404" element={<NotFound/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
