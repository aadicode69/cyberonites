import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

TagLine.propTypes = {
  classNameBox: PropTypes.string,
  classNameText: PropTypes.string,
};

export default function TagLine({ classNameBox = "", classNameText = "" }) {
  const joinUs = "https://forms.gle/MVZSG1Lb5yLyzmG37";
  // const joinUs = (e) => {
  //   e.preventDefault();
  //   alert("We are not accepting any hiring forms at the moment. Please check back soon for updates!");
  // };

  const sponsorUs = "https://forms.gle/Sxd2L3NAjWxcGfZA8";
  return (
    <div className={twMerge("space-y-5", classNameBox)}>
      <p
        className={twMerge("text-white font-cyberfont text-3xl", classNameText)}
      >
        Empowering Students, Protecting{" "}
        <span className="text-cyan-300">Cyberspace.</span>
      </p>

      <div className="space-x-4">
        {/* Join Us button */}
        <a
          className="bg-black cursor-pointer hover:bg-cyan-300 hover:text-black duration-300 px-4 py-2.5 rounded-md text-cyan-300 font-bold border border-cyan-300"
          href={joinUs}
          onClick={joinUs}
        >
          Join Us
        </a>
        {/* Sponsors button */}
        <a
          className="bg-cyan-300 hover:bg-black text-black duration-300 px-4 py-2.5 rounded-md hover:text-cyan-300 font-bold border border-cyan-300"
          href={sponsorUs}
          target="_blank"
        >
          Sponsor
        </a>
      </div>
    </div>
  );
}
