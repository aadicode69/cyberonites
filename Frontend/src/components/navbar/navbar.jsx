import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import logo from "../../img/ps-final1.png";
import "./nav.css";

const Navbar = ({ scrollToComponent }) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeItem, setActiveItem] = useState("Home");
  const controls = useAnimation();

  const setProgress = useCallback(() => {
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
  }, []);

  useEffect(() => {
    setProgress();
    const svgs = document.querySelectorAll(".rings");
    svgs.forEach((svg) => {
      const duration = Math.random() * 6 + 2;
      svg.style.animation = `spin ${duration}s linear infinite ${Math.random() < 0.5 ? "reverse" : ""
        }`;
    });
  }, [setProgress]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    const debouncedHandleScroll = debounce(handleScroll, 50);

    window.addEventListener("scroll", debouncedHandleScroll);
    window.addEventListener("resize", handleResize);

    // Desktop: Only hide navbar when scrolling down past 30% of viewport height
    if (screenWidth > 770) {
      if (lastScrollY > window.innerHeight * 0.3 && !isScrollingUp) {
        controls.start({ y: "-150%" });
      } else {
        controls.start({ y: "10%" });
      }
    } else {
      // Mobile: Show at bottom when scrolling up or at top
      controls.start({ y: isScrollingUp || lastScrollY < 50 ? "10%" : "150%" });
    }

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isScrollingUp, controls, lastScrollY, screenWidth]);

  const navItems = ["Home", "About", "Upcoming", "Events"];

  const handleNavClick = (item) => {
    setActiveItem(item);
    scrollToComponent(item);
  };

  return (
    <nav>
      {/* ---- Show NavBar on Hover ---- */}
      <div
        className="fixed lg:top-0 bottom-0 h-8 w-screen z-30"
        onMouseOver={() =>
          controls.start({
            y: "10%",
          })
        }
        onMouseLeave={() => {
          if (screenWidth > 770) {
            if (lastScrollY > window.innerHeight * 0.3 && !isScrollingUp) {
              controls.start({ y: "-150%" });
            }
          } else {
            if (!isScrollingUp && lastScrollY > 50) {
              controls.start({ y: "150%" });
            }
          }
        }}
      ></div>

      {/* ---- Logo ----- */}
      <div className="absolute z-20 w-20 h-20 lg:w-28 lg:h-28 translate-x-4 translate-y-4">
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
          alt="Cyberonites Logo"
        />
      </div>

      {/* ----------------- Nav Buttons ----------------- */}
      <motion.nav
        initial={{ y: "10%" }}
        animate={controls}
        className="fixed w-screen h-10 bottom-8 lg:top-4 z-50"
        transition={{ duration: 0.15, ease: "easeInOut" }}
      >
        <div className="flex justify-center">
          <div className="relative overflow-hidden font-['Montserrat',_sans-serif] border-0 border-x-2
            bg-black/30 border-cyan-300
            shadow-[0_0_1px_rgba(0,255,255,0.5)]
            backdrop-blur-md bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
            text-cyan-300 rounded-full">
            <ul className="flex items-center relative">
              {navItems.map((item, index) => (
                <li key={item} className="relative">
                  <button
                    className={`h-10 px-2 lg:px-10 mx-[2px] rounded-full transition-all duration-300 ease-in-out relative z-10 font-medium tracking-wide
                      ${activeItem === item
                        ? 'text-gray-900 font-semibold'
                        : 'text-cyan-300 hover:text-cyan-500'
                    }`}
                    onClick={() => handleNavClick(item)}
                  >
                    {item}
                  </button>
                  {activeItem === item && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-cyan-300 rounded-full"
                      style={{ margin: '2px' }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                      }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>
    </nav>
  );
};

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

Navbar.propTypes = {
  scrollToComponent: PropTypes.func.isRequired,
};

export default Navbar;