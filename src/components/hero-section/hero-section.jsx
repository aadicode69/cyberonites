import React from "react";
import LeftTopBeam from "./moving-beam/left-top-beam";
import RightTopBeam from "./moving-beam/right-top-beam";
import HeroBottom from "./moving-beam/hero-bottom";
import Tagline from "../hero-section/tag-line";
import DescriptionArea from "../hero-section/description-area";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-y-5 lg:flex-col">
      <div className="flex justify-center font-cyberfont items-center max-lg:-mt-36">
        <LeftTopBeam />
        <div className="mt-48 sm:mt-64 flex justify-center items-center flex-col">
          <div className="flex flex-col text-center">
            <span className="text-white text-lg sm:text-5xl">Welcome to</span>
            <span className="text-[#3B82F6] font-bold text-xl sm:text-6xl">
              Cyberonites
            </span>
          </div>
          <HeroBottom />
        </div>
        <RightTopBeam />
      </div>
      {/* Mobile only */}
      <div className="flex font-cyberfont flex-col p-2 lg:hidden">
        <Tagline />
        <DescriptionArea className="mt-8 text-sm" />
      </div>
    </div>
  );
}
