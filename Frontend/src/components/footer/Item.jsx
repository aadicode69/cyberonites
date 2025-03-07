import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = ({ Links, title }) => {
  const handleClick = (name, link) => {
    if (name === "Join Us") {
      toast(
        "We are not accepting hiring applications at the moment. Please check back later for updates.",
        {
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
        }
      );
    } else if (link) {
      window.location.href = link;
    }
  };

  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            onClick={(e) => {
              e.preventDefault();
              handleClick(link.name, link.link);
            }}
            className="text-gray-400 hover:text-cyan-400 duration-300 text-sm cursor-pointer leading-6 text-wrap"
            href={link.link || "#"}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
