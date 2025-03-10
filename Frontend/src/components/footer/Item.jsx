import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = ({ Links, title }) => {
  const navigate = useNavigate();

  const handleClick = (name, link) => {
    if (name === "Join Us") {
      toast(
        "We are not accepting hiring applications at the moment. Please check back later for updates.",
        {
          position: window.innerWidth < 768 ? "top-center" : "bottom-right",
          autoClose: window.innerWidth < 768 ? 5000 : 3000,
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
      if (link.startsWith("http")) {
        window.open(link, "_blank", "noopener,noreferrer");
      } else {
        navigate(link);
      }
    }
  };
  

  return (
    <ul className="space-y-3">
      <h1 className="text-lg font-bold mb-4 text-cyan-300/90 tracking-wide">
        {title}
      </h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            onClick={(e) => {
              e.preventDefault();
              handleClick(link.name, link.link);
            }}
            className="text-gray-400 hover:text-cyan-300 duration-200 text-sm cursor-pointer leading-6 flex items-center group relative"
            href={link.link || "#"}
          >
            <span className="relative">
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-300/50 group-hover:w-full transition-all duration-200"></span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
