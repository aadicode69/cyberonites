import React from "react";
import AnonymousSvgVector from "../svg/anonymous-svg-vector";
import { motion } from "framer-motion";
import DescriptionArea from "../description-area";
import TagLine from "../tag-line";

export default function VerticleBeam() {
  return (
    <div className="relative flex flex-col-reverse justify-center items-center">
      <AnonymousSvgVector size={80} />

      <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="400"
          y1="800"
          x2="400"
          y2="0"
          className="stroke-slate-700 stroke-[3vw] lg:stroke-[32px]"
        />

        <motion.line
          x1="400"
          y1="800"
          x2="400"
          y2="0"
          className="stroke-cyan-700 stroke-[3vw] lg:stroke-[35px] drop-shadow-2xl drop-shadow-cyan-700"
          strokeDasharray="80 1000"
          initial={{ strokeDashoffset: -1000 }}
          animate={{ strokeDashoffset: 80 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </svg>

      <DescriptionArea className="absolute right-36 top-5 w-[400px] max-lg:hidden p-5" />

      <TagLine classNameBox="absolute left-44 top-5 w-[380px] max-lg:hidden p-5" />
    </div>
  );
}
