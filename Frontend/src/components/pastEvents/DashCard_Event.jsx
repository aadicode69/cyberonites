import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DashCard_Event = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("#"); // /event_dashboard -link
  };

  return (
    <div className="flex justify-center items-center my-10">
      <motion.div
        className="relative w-[50vw] h-40 rounded-xl cursor-pointer transition-all duration-300 ease-in-out bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 shadow-lg hover:shadow-2xl"
        whileHover={{ scale: 1.05 }}
      >
        <div className="absolute inset-0 rounded-xl border-[2px] border-white/30 backdrop-blur-lg"></div>
        <div className="relative w-full h-full flex flex-col justify-between p-6 gap-4 rounded-lg">
          <h3 className="flex justify-center text-white font-extrabold text-4xl capitalize tracking-wide drop-shadow-lg font-clash">
            Event Highlights
          </h3>
          <div className="flex justify-center items-center">
            <motion.button
              className="text-lg py-2 px-5 rounded-lg cursor-pointer bg-white text-black font-bold font-cyberfont transition-all duration-300 ease-in-out shadow-md hover:bg-black hover:text-white hover:shadow-lg hover:scale-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNavigate}
            >
              Explore
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default DashCard_Event;