import React from "react";
import escalateX from "../../img/event-videos/intrusionx.mp4";
import Aurora from "../../blocks/Backgrounds/Aurora/Aurora";

function UpcomingEvents() {
  return (
    <>
      <div
        id="Upcoming"
        className="flex flex-col items-center mt-10 mb-0 sm:mt-5 sm:mb-0"
      >
        <h1 className="font-clash text-4xl text-cyan-400 font-semibold text-center mb-10 sm:mb-5">
          Upcoming Events
        </h1>
        <video
          src={escalateX}
          className="w-full h-[600px] rounded-lg shadow-lg"
          autoPlay
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div className="flex items-center justify-center my-0 sm:my-0">
        <button className="relative overflow-hidden bg-black text-white font-bold py-2 px-6 rounded-md border-b border-cyan-400 hover:text-white font-clash hover:shadow-[0_0_15px_#00BCD4] transition-all duration-300 hover:-translate-y-1 transform">
          <div className="absolute inset-0 -z-10">
            <Aurora
              colorStops={["#00BCD4", "#80DEEA", "#00BCD4"]}
              blend={0.5}
              amplitude={1.0}
              speed={2}
            />
          </div>
          Register Now
        </button>
      </div> */}
    </>
  );
}

export default UpcomingEvents;
