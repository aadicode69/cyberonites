import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

DescriptionArea.propTypes = {
  className: PropTypes.string,
};

export default function DescriptionArea({ className = "" }) {
  const joinUs = "https://forms.gle/uy7Uneh2yZS7b1PA7";
  const sponsorUs = "https://forms.gle/Sxd2L3NAjWxcGfZA8";

  return (
    <div className={twMerge("space-y-5", className)}>
      <p className="text-white shadow-cyan-700 font-cyberfont font-semibold">
        Building the next generation of{" "}
        <span className="text-cyan-300">cyber experts</span> through education
        and <span className="text-cyan-300">hands-on training.</span> Our{" "}
        <span className="text-cyan-300">university-based club</span> offers{" "}
        <span className="text-cyan-300">
          workshops, seminars, equipping students
        </span>{" "}
        with the skills and knowledge to tackle the{" "}
        <span className="text-cyan-300">challenges of the digital world</span>{" "}
        and <span className="text-cyan-300">secure our future.</span>
      </p>

      <div className="space-x-4">
        {/* Join Us button */}
        <a
          className="bg-black hover:bg-cyan-300 hover:text-black duration-300 px-4 py-2.5 rounded-full text-cyan-300 font-bold border border-cyan-300 cursor-pointer"
          href={joinUs}
          target="_blank"
        >
          Join Us
        </a>
        {/* Sponsors button */}
        <a
          className="bg-black hover:bg-cyan-300 hover:text-black duration-300 px-4 py-2.5 rounded-full text-cyan-300 font-bold border border-cyan-300 cursor-pointer"
          href={sponsorUs}
          target="_blank"
        >
          Sponsors Us
        </a>
      </div>
    </div>
  );
}