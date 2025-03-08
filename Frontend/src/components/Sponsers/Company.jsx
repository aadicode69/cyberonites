import React from "react";

export default function Company({ source, alt }) {
  return (
    <div className="sponsor-card">
      <img
        src={source}
        alt={alt}
        className="sponsor-logo"
        loading="lazy"
      />
    </div>
  );
}