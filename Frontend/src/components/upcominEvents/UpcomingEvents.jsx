import React from "react";
import { useNavigate } from "react-router-dom";
import intrusionX from "../../img/event-videos/intrusionx.mp4";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpcomingEvents() {
  const handleRegisterClick = () => {
    window.open("/intrusion-x", "_blank");
  };
  const handleProblemStatementClick = () => {
    window.open("/prob-statement-x");
  };

  return (
    <div
      id="Upcoming"
      className="flex flex-col items-center w-full h-auto justify-center pb-10"
    >
      <h1 className="font-clash text-6xl text-cyan-400 font-extrabold text-center mb-6">
        Upcoming Events
      </h1>

      <div className="relative w-[90vw] max-w-[1400px] p-4 rounded-xl border-[0.5px] border-gray-700 shadow-xl backdrop-blur-lg bg-transparent overflow-hidden">
        <h2 className="text-5xl font-semibold font-clash text-cyan-300 mb-4 text-center mt-4">
          IntrusionX{" "}
        </h2>
        <video
          src={intrusionX}
          className="w-full h-[70vh] shadow-lg"
          autoPlay
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 font-clash mt-6 mb-6">
          <button
            className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-indigo-600 text-white py-2 sm:py-3 px-6 sm:px-10 text-base sm:text-lg rounded-md border-none shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_#3F51B5] group"
            onClick={handleRegisterClick}
          >
            <span className="relative z-10">Explore</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 backdrop-blur-sm"></div>
            <div className="absolute -inset-1 rounded-lg blur-md bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-75 transition duration-300 group-hover:duration-200"></div>
          </button>

          <button
            className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black text-white py-2 sm:py-3 px-6 sm:px-10 text-base sm:text-lg rounded-lg border-none shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_15px_#9CA3AF] group"
            onClick={handleProblemStatementClick}
          >
            <span className="relative z-10">Problem Statement</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 backdrop-blur-sm"></div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-400 rounded-lg opacity-0 group-hover:opacity-50 scale-90 group-hover:scale-105 transition duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
