import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import event1 from "../../img/events/EscalateXGL.jpg";
import event2 from "../../img/events/EscalateX_CTF.jpg";

function Grand() {
  return (
    <>
      <div className="flex items-center justify-center my-10">
        <h1 className="text-cyan-400 font-cyberfont font-semibold text-4xl mt-10">
          Grand Events
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-5 items-center justify-center font-cyberfont">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 dark:bg-gray-900 dark:border-gray-800">
          <Link to="/guestlecture">
            <img
              className="rounded-t-lg transition duration-300 ease-in-out hover:scale-100"
              src={event1}
              alt="EscalateX Image"
            />
          </Link>
          <div className="p-5">
            <Link to="/guestlecture">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white typing-effect">
                EscalateX - Guest Lecture
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 fade-in-effect">
              The EscalateX Guest Lecture Series aimed to deepen students'
              understanding of cybersecurity topics like reverse engineering,
              hardware hacking, and web penetration testing. Featuring
              experienced professionals and alumni, it bridged theoretical
              knowledge with real-world applications, equipping students with
              practical skills for cybersecurity careers.
            </p>
            <Link
              to="/guestlecture"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-400 rounded-lg hover:bg-cyan-500 focus:ring-0 hover:shadow-[0_0_8px_4px_rgba(0,255,255,0.7)] transition-all duration-300 dark:bg-cyan-500 dark:hover:bg-cyan-500 dark:focus:ring-0"
            >
              Explore
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 dark:bg-gray-900 dark:border-gray-800">
          <Link to="/capturetheflag">
            <img
              className="rounded-t-lg transition duration-300 ease-in-out hover:scale-100"
              src={event2}
              alt="EscalateX Image"
            />
          </Link>
          <div className="p-5">
            <Link to="/capturetheflag">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white typing-effect">
                EscalateX - CTF
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 fade-in-effect">
              The primary objective of the CTF event was to promote practical
              learning and encourage students to apply their theoretical
              knowledge to real-world cybersecurity issues. By offering
              challenges that simulated real hacking scenarios, the event aimed
              to enhance participants' problem-solving abilities, teamwork, and
              technical skills, preparing them for future careers in
              cybersecurity.
            </p>
            <Link
              to="/capturetheflag"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-400 rounded-lg hover:bg-cyan-500 focus:ring-0 hover:shadow-[0_0_8px_4px_rgba(0,255,255,0.7)] transition-all duration-300 dark:bg-cyan-500 dark:hover:bg-cyan-500 dark:focus:ring-0"
            >
              Explore
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grand;
