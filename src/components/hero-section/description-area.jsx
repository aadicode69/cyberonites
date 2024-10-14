import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

DescriptionArea.propTypes = {
  className: PropTypes.string,
};

export default function DescriptionArea({ className = "" }) {
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
    </div>
  );
}