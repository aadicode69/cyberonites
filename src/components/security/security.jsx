import React from "react";
import { secutityData } from "./secutityData";
import { twJoin } from "tailwind-merge";

export default function Security() {
  const handleOnClick = (buttonLink) => {
    window.open(buttonLink, "_blank");
  };
  return (
    <div className="h-full flex flex-col gap-y-16 sm:gap-y-20 pt-32 sm:pt-40 sm:w-11/12 mx-auto">
      {secutityData.map((data, index) => (
        <div
          className={twJoin(
            "flex items-center flex-col gap-y-2 sm:gap-x-10",
            index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
          )}
          key={index}
        >
          <img
            src={data.image}
            alt="bug-bounty"
            className="w-full h-auto max-w-xs md:max-w-xs lg:max-w-sm 2xl:max-w-lg rounded-3xl"
          />
          <div className="flex flex-col px-6 gap-y-2">
            {data.title && (
              <p className="text-4xl font-semibold tracking-tight text-cyan-300 sm:text-3xl 2xl:text-4xl">
                {data.title}
              </p>
            )}
            {data.subtitle && (
              <h3 className="text-lg font-semibold tracking-tight text-cyan-400 sm:text-3xl 2xl:text-4xl">
                {data.subtitle}
              </h3>
            )}
            {data.description && (
              <p className="text-lg font-semibold tracking-tight text-white sm:text-lg lg:text-xl">
                {data.description}
              </p>
            )}
            {data.grid && (
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                {data.grid.items.map((item, index) => (
                  <li
                    className="text-sm lg:text-lg font-semibold tracking-tight text-white flex items-center gap-x-2"
                    key={index}
                  >
                    <data.grid.icon className="fill-[#6E3AFF] w-6 h-6" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {data.list && (
              <ul className="flex flex-col gap-y-2">
                {data.list.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm lg:text-lg font-semibold tracking-tight text-white flex items-center gap-x-2"
                  >
                    <data.list.icon className="stroke-[#00B300] w-6 h-6" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {data.button && (
              <button
                className="mt-2 text-lg font-semibold tracking-tight text-black bg-cyan-300 hover:bg-cyan-400 hover:shadow-[0_0_15px_#00ffff] transition-all duration-300 hover:-translate-y-1 transform py-2 px-4 rounded-full sm:text-lg lg:text-xl sm:rounded-2xl sm:w-max"
                onClick={() => handleOnClick(data.buttonLink)}
              >
                {data.button}
              </button>
            )}
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-y-5 px-6">
        <h2 className="text-4xl font-semibold tracking-tight text-cyan-300 text-center">
          Confidentiality & Code of Conduct
        </h2>
        <p className="text-lg font-semibold tracking-tight text-white">
          We will maintain confidentiality and exclusivity in the disclosure and
          remediation process. Likewise, you shall also maintain confidentiality
          and shall handle information including but not limited to description
          of vulnerability, shared findings, report, etc. with strict
          confidentiality. You shall not disclose any related information to
          third parties without written permission from our team.
        </p>
        <button
          className="mt-2 text-lg font-semibold tracking-tight text-black bg-cyan-300 hover:bg-cyan-400 hover:shadow-[0_0_15px_#00ffff] transition-all duration-300 hover:-translate-y-1 transform py-2 px-4 rounded-full sm:text-lg lg:text-xl sm:rounded-2xl sm:w-max"
          onClick={() => handleOnClick("https://forms.gle/uy7Uneh2yZS7b1PA7")}
        >
          Code of Conduct
        </button>
      </div>
    </div>
  );
}
