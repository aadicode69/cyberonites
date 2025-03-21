import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SpotlightCard from "../../blocks/Components/SpotlightCard/SpotlightCard";

const DashCard_Event = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/event_dashboard");
  };

  return (
    <motion.div
      className="flex justify-center items-center my-6 px-4 sm:my-10 relative transition-all duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-full max-w-[800px]">
        <SpotlightCard
          className="absolute inset-0"
          spotlightColor="rgba(0, 229, 255, 0.7)"
          spotlightSize="500px"
          blur="100px"
        >
          <motion.div
            className="relative w-full min-h-[12rem] md:min-h-[14rem] rounded-xl cursor-pointer transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl flex justify-center items-center"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 rounded-xl border-[2px] border-transparent hover:border-cyan-400 bg-black/30 backdrop-blur-lg transition-all duration-300"></div>

            <div className="relative w-full h-full flex flex-col justify-center items-center p-4 sm:p-6 gap-3 rounded-lg text-center">
              <h3 className="text-white font-extrabold text-lg sm:text-2xl md:text-4xl capitalize tracking-wide drop-shadow-lg font-clash">
                Event Highlights
              </h3>

              <p className="font-clash text-white text-xs sm:text-sm md:text-base max-w-[90%] sm:max-w-[80%] opacity-90">
                Dive into the highlights of past events that shaped our community to witness the legacy of innovation.
              </p>

              <motion.button
                className="mt-2 text-sm sm:text-base md:text-lg py-2 px-4 sm:px-5 rounded-lg cursor-pointer bg-white text-black font-bold font-clash transition-all duration-300 ease-in-out shadow-md hover:bg-black hover:text-white hover:shadow-xl active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNavigate}
              >
                Explore
              </motion.button>
            </div>
          </motion.div>
        </SpotlightCard>
      </div>
    </motion.div>
  );
};

export default DashCard_Event;
