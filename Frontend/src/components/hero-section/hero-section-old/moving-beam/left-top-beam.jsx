import React from "react";
import { motion } from "framer-motion";
import ComputerSvgVector from "../svg/computer-svg-vector";

export default function LeftTopBeam() {
  return (
    <div className="relative w-2/3 sm:w-1/4 lg:w-1/5">
      <ComputerSvgVector className="absolute top-[29.5%] left-[0.8rem] bg-black w-1/3 md:w-1/4 lg:w-1/5" />

      <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 800,450 Q 424,312 100,312"
          className="stroke-slate-700 stroke-[3vw] md:stroke-[10px]"
          fill="none"
        />

        <motion.path
          d="M 800,450 Q 424,312 100,312"
          fill="none"
          className="stroke-cyan-700 stroke-[3vw] md:stroke-[10px] drop-shadow-2xl drop-shadow-cyan-700"
          strokeDasharray="30 1000"
          initial={{ strokeDashoffset: -1000 }}
          animate={{ strokeDashoffset: 50 }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </svg>
    </div>
  );
}
