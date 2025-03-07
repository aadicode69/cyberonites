import React from "react";

export default function Company({ source, alt }) {
  return (
    <div className="alumni-card">
      <img
        src={source}
        alt={alt}
        className="alumni-logo"
        loading="lazy"
      />
    </div>
  );
}
