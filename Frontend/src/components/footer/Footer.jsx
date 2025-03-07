import React from "react";
import Itemscontainer from "./Itemscontainer";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-quicksand">
      <Itemscontainer />
      <div className="flex justify-center font-quicksand justify-items-center text-center pt-2 text-sm text-gray-300 pb-8">
        CYBERONITES © 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
