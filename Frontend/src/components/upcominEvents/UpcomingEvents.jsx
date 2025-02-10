import React from "react";
import escalateX from "../../img/event-videos/escalateX.mp4";

function UpcomingEvents() {
  return (
    <>
      <div id="Upcoming" className="flex flex-col items-center mt-10 mb-0">
        <h1 className="font-cyberfont text-4xl text-cyan-400 font-semibold text-center mb-6 sm:mb-2">
          Upcoming Events
        </h1>
        <video
          src={escalateX}
          className="w-[100%] h-96 rounded-lg shadow-lg"
          autoPlay
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" flex items-center justify-center my-0">
        <button className="bg-black text-white font-bold py-2 px-6 rounded-full border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_15px_#ffd700] transition-all duration-300 hover:-translate-y-1 transform">
          Register Now
        </button>
      </div>
    </>
  );
}

export default UpcomingEvents;
