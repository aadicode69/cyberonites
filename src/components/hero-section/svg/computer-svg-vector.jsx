import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

ComputerSvgVector.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

export default function ComputerSvgVector({ className = "", color = "white" }) {
  return (
    <svg
      className={twMerge(
        "rounded-full border-2 border-slate-700 p-2 animate-border-pulse",
        className
      )}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 19H21M6 17H18C19.1046 17 20 16.1046 20 15V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V15C4 16.1046 4.89543 17 6 17Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}