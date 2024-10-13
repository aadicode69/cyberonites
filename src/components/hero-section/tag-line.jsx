import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

TagLine.propTypes = {
  classNameBox: PropTypes.string,
  classNameText: PropTypes.string,
};

export default function TagLine({ classNameBox = "", classNameText = "" }) {
  return (
    <div className={classNameBox}>
      <p
        className={twMerge("text-white font-cyberfont text-3xl", classNameText)}
      >
        Empowering <span className="text-cyan-300">{"Students,"}</span>
      </p>

      <p
        className={twMerge("text-white font-cyberfont text-3xl", classNameText)}
      >
        <span className="text-cyan-300">{"with Cybersecurity"}</span> knowledge
        and skills.
      </p>
    </div>
  );
}
