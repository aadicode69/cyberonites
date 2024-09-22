import React from "react";
import "./nav.css";
import logo from "../../img/ps-final1.png";
// import { FaBell, FaHome } from "react-icons/fa";
// import { IoCalendar } from "react-icons/io5";
// import { FaUserGroup } from "react-icons/fa6";

import { LavalampMenu } from "react-llamp-menu";
export function Navbar() {
  function setProgress() {
    const circles = document.querySelectorAll("circle");
    circles.forEach((ele) => {
      const radius = ele.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;
      ele.style.strokeDasharray = `${circumference} ${circumference}`;
      ele.style.strokeDashoffset = `${circumference}`;
      const offset = circumference - ((Math.floor(Math.random() * 60) + 10) / 100) * circumference; // const offset = circumference - 1 * circumference;
      // const offset = circumference - 1 * circumference; // const offset = circumference - 1 * circumference;
      ele.style.strokeDashoffset = offset;
    });
  }

  React.useEffect(() => {
    setProgress();
    const svgs = document.querySelectorAll(".rings");
    svgs.forEach((svg) => {
      const randomDuration = Math.random() * 6 + 2;
      svg.style.animationDuration = `${randomDuration}s`;
    });
  }, []);

  return (
    <nav className="font-['roboto_mono'] bg-black text-cyan-300">
      <div className="relative w-20 h-20 lg:w-28 lg:h-28 m-4 lg:m-6">
        {[40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53].map((e) => (
          <svg
            key={e}
            className="rings lg:w-36 lg:h-36 absolute stroke-cyan-300 drop-shadow-[0_0_.5rem_var(--cyan-300)] animate-spin"
            viewBox="0 0 110 110"
          >
            <circle
              strokeWidth={Math.random() * 4 + 0}
              fill="transparent"
              r={e}
              cx="55"
              cy="55"
            />
          </svg>
        ))}
        <img className="logo w-16 h-16 lg:w-28 lg:h-28 translate-x-2 translate-y-2 lg:translate-x-4 lg:translate-y-5 drop-shadow-[0_0_.5rem_var(--cyan-300)]" src={logo} />
      </div>
      <div className="fixed bottom-8 lg:top-14 left-1/2 -translate-x-1/2">
        <LavalampMenu
          className="toggleOptions overflow-hidden font-['Rubik_Glitch',_system-ui] bg-black lg:skew-x-[30deg] border-2 lg:border-y-2 border-cyan-300 text-cyan-300 rounded-full lg:rounded-none"
        >
          <ul>
            {["Home", "About", "Events", "Upcoming"].map((e) => (
              <li key={e}>
                <button
                  className="h-10 px-2 lg:px-10 mx-[2px] lg:-skew-x-[30deg] rounded-full lg:rounded-none"
                  onClick={() => console.log()}
                >
                  {e}
                </button>
              </li>
            ))}
          </ul>
        </LavalampMenu>
      </div>
      <button className="fixed w-40 h-6 top-7 lg:top-9 -right-11 lg:-right-8 text-center font-bold bg-cyan-300 text-[#1C2828] rotate-45">Contact Us</button>
      <button className="ribbon fixed top-0 right-20 lg:right-24 text-center bg-cyan-300 text-black animate-bounce"></button>
    </nav>
  );
}
