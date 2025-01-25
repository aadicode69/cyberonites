import React from "react";
import EventImg from "../../img/events/Defence_Matrix.jpg";
import "react-creative-cursor/dist/styles.css";

const NewEvent = () => {
  return (
      <div id="Upcoming">
      <h1 className="text-4xl font-bold font-cyberfont mt-0 mb-5 text-center text-cyan-400">
        Upcoming Event
      </h1>
      <div className="container mx-auto p-6 flex flex-col items-center">
        <div className="max-w-7xl w-full p-6 rounded-xl shadow-lg font-cyberfont border-2 border-gray-700 hover:border-gray-400 transition-all duration-300 ease-in-out">
          <h1 className="text-3xl font-bold mb-8 text-center text-cyan-400">
            Defence Matrix
          </h1>
          <div className="flex gap-5 md:flex-row flex-col">
            <div className="w-full grow gap-5 flex flex-col text-left p-4 mb-0 md:w-1/2">
              <p className="text-xl grow text-wrap mb-6 text-cyan-400">
                The Cyberonites Club invites you to Defence Matrix 2025, an
                action-packed event designed to enhance your cybersecurity
                skills. Explore critical concepts, gain practical knowledge, and
                prepare to tackle modern cyber threats!
              </p>
              <div className="mt-10 grow">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">
                  Topics Covered
                </h2>
                <ul className="list-none space-y-4 text-lg text-white">
                  <li className="flex items-center">
                    <span className="font-bold mr-2 text-xl text-cyan-400">
                      $
                    </span>{" "}
                    Digital Forensics
                  </li>
                  <li className="flex items-center">
                    <span className="font-bold mr-2 text-xl text-cyan-400">
                      $
                    </span>{" "}
                    OSINT Techniques
                  </li>
                  <li className="flex items-center">
                    <span className="font-bold mr-2 text-xl text-cyan-400">
                      $
                    </span>{" "}
                    Data Security & Privacy
                  </li>
                  <li className="flex items-center">
                    <span className="font-bold mr-2 text-xl text-cyan-400">
                      $
                    </span>{" "}
                    Malware Protection
                  </li>
                  <li className="flex items-center">
                    <span className="font-bold mr-2 text-xl text-cyan-400">
                      $
                    </span>{" "}
                    Linux Basics
                  </li>
                </ul>
              </div>
              <div className="flex grow justify-center items-center w-[100%] h-[100%] ">
                <a
                  href="https://forms.gle/r1Wzqxj1YyZqGezt6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-500 hover:bg-blue-600 border-2 border-black hover:border-white text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.6)] flex items-center">
                    <span>Register</span>
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinenjoin="round"
                        strokeWidth="2"
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <div className="w-full flex justify-center align-top mb-0 md:w-1/2">
              <img
                src={EventImg}
                alt="Event Image"
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default NewEvent;
