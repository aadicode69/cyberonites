import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ Links, title }) => {
  const navigate = useNavigate();

  return (
    <ul className="space-y-3">
      <h1 className="text-lg font-bold mb-4 text-cyan-300/90 tracking-wide">
        {title}
      </h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            onClick={() => navigate(link.link)}
            className="text-gray-400 hover:text-cyan-300 duration-200 text-sm cursor-pointer leading-6 
                     flex items-center group relative"
            href={link.link}
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