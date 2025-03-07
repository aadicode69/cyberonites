import React from "react";

const KnowUs = () => {
  return (
    <div id="About" className="bg-black text-cyan-300 min-h-fit p-8 mb-7">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-orange-400 text-lg font-semibold tracking-widest font-clash">
            KNOW US
          </h2>
          <h1 className="text-4xl font-bold mt-2 font-clash">
            Fostering Cybersecurity Excellence.
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-16 font-cyberfont mt-16">
          <div className="bg-gradient-to-r from-cyan-600 to-black p-6 rounded-3xl text-justify shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:neon-glow-left">
            <h3 className="text-white text-2xl font-semibold mb-4 font-clash">MISSION</h3>
            <p className="text-gray-200">
              At Cyberonites Club, our mission is to foster a community of
              passionate tech enthusiasts dedicated to exploring and advancing
              the field of cybersecurity. We aim to provide our members with the
              knowledge, skills, and experiences needed to excel in the
              ever-evolving digital landscape.
            </p>
          </div>
          <div className="bg-gradient-to-r from-cyan-600 to-black p-6 rounded-3xl text-justify shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:neon-glow-left">
            <h3 className="text-white text-2xl font-semibold font-clash mb-4">
              WHO WE ARE
            </h3>
            <p className="text-gray-200">
              Cyberonites Club is a vibrant and diverse group of students,
              professionals, and hobbyists who share a common interest in
              cybersecurity. Founded in 2016, our club has grown into a
              supportive network where members collaborate, learn, and innovate.
            </p>
          </div>
          <div className="bg-gradient-to-r from-cyan-600 to-black p-6 rounded-3xl text-justify shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:neon-glow-left">
            <h3 className="text-white text-2xl font-semibold font-clash mb-4">
              OUR STORY
            </h3>
            <p className="text-gray-200">
              The Cyberonites Club was established with a vision to create a
              platform for like-minded individuals to come together and delve
              into the world of cybersecurity. From humble beginnings as a small
              group of enthusiasts, we have expanded to include regular
              workshops, guest lectures, hackathons, and collaborative projects.
            </p>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .hover\\:neon-glow-left:hover {
          box-shadow: -5px 0px 20px 2px rgba(0, 255, 255, 0.8),
            0px 0px 8px rgba(0, 255, 255, 0.6);
        }`}</style>
    </div>
  );
};

export default KnowUs;
