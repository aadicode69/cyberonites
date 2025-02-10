import React from "react";
import Itemscontainer from "./Itemscontainer";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-cyberfont">
      <Itemscontainer />
      <div className="flex justify-center justify-items-center text-center pt-2 text-md pb-8">
        CYBERONITES © 2024. All rights reserved.
      </div>
      {/* <div>
        <input
          type="text"
          placeholder="Enter Your Email"
          className="text-white bg-black border border-cyan-300 focus:outline-none focus:border-cyan-300  sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-0 py-2.5 rounded-full px-5"
        />
        <button className="bg-black  hover:bg-cyan-300 hover:text-black  duration-300 px-4 py-2.5 rounded-full text-cyan-300 md:w-auto w-auto font-rubik border border-cyan-300">
          Connect
        </button>
      </div> */}
    </footer>
  );
};

export default Footer;
