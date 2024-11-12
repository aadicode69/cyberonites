import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { LavalampMenu } from "react-llamp-menu";
import logo from "../../img/ps-final1.png";
import "./nav.css";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const controls = useAnimation();

  function setProgress() {
    const circles = document.querySelectorAll("circle");
    circles.forEach((ele) => {
      const radius = ele.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;
      ele.style.strokeDasharray = `${circumference} ${circumference}`;
      ele.style.strokeDashoffset = `${circumference}`;
      const offset =
        circumference -
        ((Math.floor(Math.random() * 60) + 10) / 100) * circumference;
      ele.style.strokeDashoffset = offset;
    });
}

  useEffect(() => {
    setProgress();
    const svgs = document.querySelectorAll(".rings");
    svgs.forEach((svg) => {
      if (Math.floor(Math.random() * 2) === 1) {
        svg.style.animation = `spin ${Math.random() * 6 + 2}s linear infinite`;
      } else {
        svg.style.animation = `spin ${
          Math.random() * 6 + 2
        }s linear infinite reverse`;
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    if (screenWidth > 770) {
      if (lastScrollY < 100) {
        if (isScrollingUp) {
          controls.start({ y: 0 });
        } else {
          controls.start({ y: "-100%" });
        }
      } else {
        if (isScrollingUp) {
          controls.start({ y: "-100%" });
        } else {
          controls.start({ y: "-250%" });
        }
      } 
    } else {
      if (isScrollingUp) {
        controls.start({ y: "50%" });
      } else {
        controls.start({ y: "250%" });
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isScrollingUp, controls, lastScrollY, screenWidth]);

  return (
    <nav>
      {/* ---- Logo ----- */}
      <div className="relative w-20 h-20 lg:w-28 lg:h-28 translate-x-4 translate-y-4">
        {/* svg circles to rotate for logo */}
        {[40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53].map((e) => (
          <svg
            key={e}
            className="rings lg:w-36 lg:h-36 absolute stroke-cyan-300 drop-shadow-[0_0_.75rem_var(--cyan-300)] animate-spin will-change-transform"
            viewBox="0 0 110 110"
          >
            <circle
              strokeWidth={Math.random() * 1.75 + 1}
              fill="transparent"
              r={e}
              cx="55"
              cy="55"
            />
          </svg>
        ))}
        <img
          className="logo w-16 h-16 lg:w-28 lg:h-28 translate-x-2 translate-y-2 lg:translate-x-4 lg:translate-y-5 drop-shadow-[0_0_.5rem_var(--cyan-300)]"
          src={logo}
        />
      </div>

      {/* ----------------- Nav Buttons ----------------- */}
      <motion.nav
        initial={{ y: 0 }}
        animate={controls}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed w-full h-10 bottom-8 lg:top-14 z-50"
      >
        <div className="flex justify-center translate-z-10'">
          <LavalampMenu className="toggleOptions overflow-hidden font-['Rubik_Glitch',_system-ui] bg-black lg:skew-x-[30deg] border-2 lg:border-0 lg:border-y-2 border-cyan-300 text-cyan-300 rounded-full lg:rounded-none">
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
      </motion.nav>
    </nav>
  );
}

export default Navbar;