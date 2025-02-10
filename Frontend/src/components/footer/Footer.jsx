import React from "react";
import Itemscontainer from "./Itemscontainer";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white font-cyberfont">
      <div className="border-t border-gradient-t-cyan-800">
        <Itemscontainer />
        <div className="max-w-screen-xl mx-auto px-4 pb-8">
          <div className="text-center py-8 border-t border-gray-800/30">
            <div className="text-sm text-gray-400 tracking-wide">
              CYBERONITES © 2024. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
