import React from "react";
import { twMerge } from "tailwind-merge";

export default function DescriptionArea({ className = "" }) {
  return (
    <div className={twMerge("space-y-3", className)}>
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
        <button className="bg-black hover:bg-cyan-300 hover:text-black duration-300 px-4 py-2.5 rounded-full text-cyan-300 font-bold border border-cyan-300">
          Join Us
        </button>
        {/* Sponsors button */}
        <button className="bg-black hover:bg-cyan-300 hover:text-black duration-300 px-4 py-2.5 rounded-full text-cyan-300 font-bold border border-cyan-300">
          Sponsors Us
        </button>
      </div>
    </div>
  );
}
