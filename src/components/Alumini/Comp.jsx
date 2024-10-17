import React from "react";

export default function Company(props) {
  return (
    <>
      <img
        src={props.source}
        alt={props.alt}
        style={props.style}
        className="company-logo"
      />
    </>
  );
}
