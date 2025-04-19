import React from "react";

const ContactCard = ({ className }) => {
  return (
    <div className={`relative p-4 md:p-6 font-clash bg-black border border-cyan-400 shadow-md rounded-lg text-cyan-300 text-base md:text-lg transition-all duration-300 hover:shadow-cyan-500/50 hover:border-cyan-500 ${className}`}>
      <h2 className="text-xl md:text-2xl font-semibold font-clash underline text-cyan-400 mb-3 md:mb-4 text-center">
        Have Questions? Contact Us!
      </h2>

      <p className="mb-3 text-center text-sm md:text-base">
        Email:{" "}
        <a
          href="mailto:support@cyberonites.com"
          className="text-green-400 hover:underline"
        >
          support@cyberonites.com
        </a>
      </p>

      <div className="border-t border-cyan-500 pt-3">
        <h3 className="text-lg md:text-xl font-semibold text-center text-cyan-300 mb-2">
          Event Coordinators
        </h3>

        <div className="flex flex-col md:flex-row md:justify-center md:space-x-12 items-center space-y-2 md:space-y-0 text-sm md:text-base">
          <p className="hover:text-green-400 transition-all duration-300">
            <span className="text-white">Nitin Sikarwar</span> {" "}
            <a href="tel:+919548514037" className="text-cyan-400 hover:underline">
              +91 9548514037
            </a>
          </p>
          <p className="hover:text-green-400 transition-all duration-300">
            <span className="text-white">Sumit Kumar</span> {" "}
            <a href="tel:+919631909422" className="text-cyan-400 hover:underline">
              +91 9631909422
            </a>
          </p>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-5 transition-all duration-100 animate-glitch" />
    </div>
  );
};

export default ContactCard;