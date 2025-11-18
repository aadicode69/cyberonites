import React from "react";

const NeedAccommodation = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-black">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,200,255,0.15) 1px, transparent 0)",
            backgroundSize: "45px 45px",
          }}
        ></div>
      </div>

      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-gradient-radial from-blue-500/20 via-transparent to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-gradient-radial from-cyan-500/20 via-transparent to-transparent blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 mb-8 font-clash tracking-tight">
          Need Accommodation?
        </h2>

        <p
          className="text-cyan-300/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          style={{ fontFamily: "Ranade, sans-serif" }}
        >
          Participants attending{" "}
          <span className="text-cyan-400 font-semibold">EscalateX V2</span> and
          requiring accommodation during the event are requested to fill out the
          accommodation form.
          <br />
          <br />
          <span className="text-cyan-400/90 font-medium">
            Each team member who requires accommodation must fill out the form
            individually.
          </span>
          <br />
          Accommodation is optional and available on a first-come, first-served
          basis.
        </p>

        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScJSATBp4tj3sCff0aWdYh0J0XVcKMuXT5F1ZSpav1fr3Ko1A/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group px-10 py-3.5 rounded-sm font-medium text-white tracking-wide transition-all duration-500 
    bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(0,200,255,0.2)] 
    hover:shadow-[0_0_30px_rgba(0,200,255,0.4)] hover:scale-105 overflow-hidden"
            style={{ fontFamily: "Ranade, sans-serif" }}
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
      translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"
            ></span>

            <span className="relative z-10">Fill Accommodation Form</span>
          </a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@600;700&family=Ranade:wght@400;500;600&display=swap');
      `}</style>
    </section>
  );
};

export default NeedAccommodation;
