import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

TagLine.propTypes = {
  classNameBox: PropTypes.string,
  classNameText: PropTypes.string,
};

export default function TagLine({ classNameBox = "", classNameText = "" }) {
  const navigate = useNavigate();

  // const joinUs = "formlink";
  const joinUs = (e) => {
    e.preventDefault();
    toast("We are not accepting hiring applications at the moment. Please check back later for updates.", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      style: {
        background: "#0A0A0A",
        color: "#00FFFF",
        border: "1px solid #00FFFF",
        fontFamily: "'Courier New', monospace",
        textAlign: "center",
      },
    });
  };

  const sponsorUs = "https://forms.gle/Sxd2L3NAjWxcGfZA8";

  return (
    <div className={twMerge("space-y-5", classNameBox)}>
      <p className={twMerge("text-white font-cyberfont text-3xl", classNameText)}>
        Empowering Students, Protecting{" "}
        <span className="text-cyan-300">Cyberspace.</span>
      </p>

      <div className="space-x-4">
        <a
          className="bg-black cursor-pointer hover:bg-cyan-300 hover:text-black duration-300 px-4 py-2.5 rounded-md text-cyan-300 font-bold border border-cyan-300"
          onClick={joinUs}
          // onClick={() => navigate("/recruitment")}
        >
          Join Us
        </a>
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
