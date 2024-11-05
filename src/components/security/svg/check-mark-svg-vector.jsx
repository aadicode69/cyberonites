import React from "react";
import PropTypes from "prop-types";

RedcrossSvgVector.propTypes = {
  className: PropTypes.string,
};

export default function RedcrossSvgVector({ className = "" }) {
  return (
    <svg
      //   width="800px"
      //   height="800px"
      fill="none"
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12.6111L8.92308 17.5L20 6.5"
        // stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
