import React from "react";
import Itemscontainer from "./Itemscontainer";
// sticky bottom-1
const Footer = () => {
  return (
    <footer className="bg-black text-white font-cyberfont">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-black py-7">
        <h2 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <div className="text-cyan-300 text-6xl">CY.  </div> Empowering
          students with advanced cybersecurity knowledge and skills.
          <div className="text-cyan-300 text-xl">BE POWERFUL.</div>
        </h2>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="text-white bg-black border border-cyan-300 focus:outline-none focus:border-cyan-300  sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded-full px-5"
          />
          <button className="bg-black  hover:bg-cyan-300 hover:text-black  duration-300 px-4 py-2.5 rounded-full text-cyan-300 md:w-auto w-auto font-rubik border border-cyan-300">
            Connect
          </button>
        </div>
      </div>
      <Itemscontainer />
      <div className="flex justify-center justify-items-center text-center pt-2 text-md pb-8">
        CYBERONITES © 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
