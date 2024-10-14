// import React from 'react'
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Navbar } from "./components/navbar/navbar";
import Aluminis from "./components/Alumini/Alumni";
import Sponsor from "./components/Sponsers/Sponser";


function App() {
  return (
    <div>
      <Navbar />
      <Aluminis heading="Our Alumni" />
      <Sponsor heading="Our Sponsors" />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
