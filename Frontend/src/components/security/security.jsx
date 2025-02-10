import React from "react";
import { secutityData } from "./secutityData";
import { twJoin } from "tailwind-merge";
import codeofconduct_file from "../../../src/docs/Code-of-Conduct.pdf";
import { useNavigate } from "react-router-dom";

export default function Security() {
  const handleOnClick = (buttonLink) => {
    window.open(buttonLink, "_blank");
  };

  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col gap-y-16 sm:gap-y-20 pt-32 sm:pt-16 sm:w-11/12 mx-auto">
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
          onClick={() => handleOnClick(codeofconduct_file)}
        >
          Code of Conduct
        </button>
      </div>

      {/* Sticky Home Button */}
      <button
        className="fixed bottom-5 right-5 z-50 bg-cyan-300 hover:bg-cyan-400 hover:shadow-[0_0_15px_#00ffff] transition-all duration-300 hover:-translate-y-1 transform py-3 px-4 rounded-full flex items-center justify-center"
        onClick={() => navigate("/")}
        aria-label="Home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 9.75l8.485-7.485a2.25 2.25 0 013.03 0L23 9.75M3.75 9.75V21a2.25 2.25 0 002.25 2.25h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v4.5a.75.75 0 00.75.75h4.5A2.25 2.25 0 0020.25 21V9.75m-16.5 0L12 3m8.25 6.75L12 3"
          />
        </svg>
      </button>
    </div>
  );
}
