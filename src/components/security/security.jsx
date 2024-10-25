import React from "react";
import { secutityData } from "./secutityData";

export default function Security() {
  const handleOnClick = (buttonLink) => {
    window.open(buttonLink, "_blank");
  };
  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-y-16 pt-32">
      {secutityData.map((data, index) => (
        <div className="flex items-center flex-col gap-y-2" key={index}>
          <img
            src={data.image}
            alt="bug-bounty"
            className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg rounded-3xl"
          />
          <div className="flex flex-col px-6 gap-y-2">
            {data.title && (
              <p className="text-4xl font-semibold tracking-tight text-cyan-300 sm:text-3xl lg:text-4xl">
                {data.title}
              </p>
            )}

            {data.subtitle && (
              <h3 className="text-lg font-semibold tracking-tight text-cyan-400 sm:text-3xl lg:text-4xl">
                {data.subtitle}
              </h3>
            )}
            {data.description && (
              <p className="text-lg font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                {data.description}
              </p>
            )}
            {data.grid && (
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {data.grid.items.map((item, index) => (
                  <li
                    className="text-sm font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl flex items-center gap-x-2"
                    key={index}
                  >
                    <data.grid.icon className="fill-[#6E3AFF] w-6 h-6" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {data.list && (
              <ul className="text-sm font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl flex flex-col gap-y-2">
                {data.list.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-x-2">
                    <data.list.icon className="stroke-[#6E3AFF] w-6 h-6" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {/* sumbit report button */}
            {data.button && (
              <button
                className="mt-2 text-lg font-semibold tracking-tight text-black bg-cyan-300 hover:bg-cyan-400 hover:shadow-[0_0_15px_#00ffff] transition-all duration-300 hover:-translate-y-1 transform py-2 px-4 rounded-full sm:text-3xl lg:text-4xl"
                onClick={() => handleOnClick(data.buttonLink)}
              >
                {data.button}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
