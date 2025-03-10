import React from "react";
import Itemscontainer from "./Itemscontainer";
import Aurora from "../../blocks/Backgrounds/Aurora/Aurora";

const Footer = () => {
  return (
    <footer className="relative text-white font-clash overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-full transform scale-y-[-1]">
        <Aurora
          colorStops={["#00ACC1", "#00B8D4", "#00ACC1"]}
          blend={0.5}
          amplitude={1.0}
          speed={1.1}
        />
      </div>

      <div className="relative z-10">
        <Itemscontainer />
        <div className="max-w-screen-xl mx-auto px-4 pb-8">
          <div className="text-center py-6">
            <div className="text-sm text-black tracking-wide font-bold">
              CYBERONITES © 2024. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
