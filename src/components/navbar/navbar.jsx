import React from "react";
import "./nav.css";
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
        const offset = circumference - ((Math.floor(Math.random() * 60) + 10) / 100) * circumference;
        // const offset = circumference - 1 * circumference;
        ele.style.strokeDashoffset = offset;
    });
}

React.useEffect(() => {
    setProgress();
    const svgs = document.querySelectorAll("svg");
    svgs.forEach((svg) => {
        const randomDuration = Math.random() * 6 + 2;
        svg.style.animationDuration = `${randomDuration}s`;
    });
}, []);

return (
  <nav className="bg-black text-cyan-300">
    <div className="relative w-32 h-32 m-8">
      {[40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53].map((e) => (
        <svg key={e} className="absolute" width="150" height="150" viewBox="0 0 110 110">
            <circle className="stroke-cyan-300" strokeWidth={Math.random()*2 + 1} fill="transparent" r={e} cx="55" cy="55" />
        </svg>
      ))}
        <img className="translate-x-3 translate-y-4" src="src/img/ps-final1.png" />
    </div>
      <div className="fixed top-14 left-1/2 -translate-x-1/2">
        <LavalampMenu className="toggleOptions bg-black border-y-2 border-cyan-300 text-cyan-300">
          <ul>
            <li>
              <button onClick={() => console.log("option 1")}>Home</button>
            </li>
            <li>
              <button onClick={() => console.log("option 2")}>About</button>
            </li>
            <li>
              <button onClick={() => console.log("option 3")}>Events</button>
            </li>
            <li>
              <button onClick={() => console.log("option 3")}>Upcoming</button>
            </li>
            <li>
              <button onClick={() => console.log("option 3")}>
                Contact Us
              </button>
            </li>
          </ul>
        </LavalampMenu>
      </div>
    </nav>
  );
}
