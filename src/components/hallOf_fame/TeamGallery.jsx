import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleCard from "./TitleCard";
import teamData from "../hallOf_fame/teamData.json";
import Footer from "../footer/Footer";

function TeamGallery() {
  const navigate = useNavigate();
  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updatePageHeight = () => {
      setPageHeight(document.documentElement.scrollHeight);
    };

    updatePageHeight();
    window.addEventListener("resize", updatePageHeight);

    return () => {
      window.removeEventListener("resize", updatePageHeight);
    };
  }, []);

  useEffect(() => {
    const starContainer = document.querySelector(".star-container");
    if (!starContainer) return;

    starContainer.innerHTML = "";
    const numberOfStars = 20;

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 2 + 3}s`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      starContainer.appendChild(star);
    }
  }, []);

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden bg-black">
        <div className="star-container absolute top-0 left-0 w-full h-full"></div>

        <div className="relative z-10 flex flex-col items-center text-center py-10 px-4">
          <h1 className="text-6xl sm:text-6xl text-white font-bold mb-5 font-clash">
            Our Team
          </h1>
          <div className="w-full overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teamData.map((member, index) => (
                <div
                  key={member.id || index}
                  className="w-full flex justify-center"
                >
                  <TitleCard {...member} />
                </div>
              ))}
            </div>
          </div>
          <button
            className="fixed bottom-5 right-5 z-50 bg-gradient-to-tl from-fuchsia-600 to-rose-600 hover:shadow-[0_0_20px_#FF00FF] transition-all duration-300 hover:-translate-y-1 transform py-4 px-4 rounded-full flex items-center justify-center"
            onClick={() => navigate("/")}
            aria-label="Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9.75l8.485-7.485a2.25 2.25 0 013.03 0L23 9.75M3.75 9.75V21a2.25 2.25 0 002.25 2.25h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v4.5a.75.75 0 00.75.75h4.5A2.25 2.25 0 0020.25 21V9.75m-16.5 0L12 3m8.25 6.75L12 3"
              />
            </svg>
          </button>
        </div>
        <style jsx>{`
          :root {
            --fall-distance: ${pageHeight}px;
          }
          .star {
            position: absolute;
            top: -10px;
            width: 1.5px;
            height: 40px;
            background-image: linear-gradient(30deg, white, black);
            border-radius: 50%;
            opacity: 0.8;
            animation: fall linear infinite;
          }
          @keyframes fall {
            0% {
              transform: translateY(0);
              opacity: 0.8;
            }
            100% {
              transform: translateY(var(--fall-distance));
              opacity: 0.3;
            }
          }
        `}</style>
      </div>
      <Footer/>
    </>
  );
}

export default TeamGallery;

// import React, { useEffect, useState } from "react";
// import TitleCard from "./TitleCard";
// import teamData from "../hallOf_fame/teamData.json";
// import music from "../../img/Team/music.mp3";

// function TeamGallery() {
//   const [pageHeight, setPageHeight] = useState(window.innerHeight);

//   useEffect(() => {
//     const updatePageHeight = () => {
//       setPageHeight(document.documentElement.scrollHeight);
//     };
//     updatePageHeight();
//     window.addEventListener("resize", updatePageHeight);
//     window.addEventListener("load", updatePageHeight);

//     const starContainer = document.querySelector(".star-container");
//     if (starContainer) {
//       starContainer.innerHTML = "";
//       const numberOfStars = 50;
//       for (let i = 0; i < numberOfStars; i++) {
//         const star = document.createElement("div");
//         star.classList.add("star");
//         star.style.left = `${Math.random() * 100}vw`;
//         star.style.animationDuration = `${Math.random() * 2 + 3}s`;
//         star.style.animationDelay = `${Math.random() * 3}s`;
//         starContainer.appendChild(star);
//       }
//     }

//     // Add Background Music
//     const audio = new Audio(music);
//     audio.loop = true;
//     audio.play().catch(() => {
//       document.addEventListener("click", () => {
//         audio.play();
//       }, { once: true });
//     });

//     return () => {
//       window.removeEventListener("resize", updatePageHeight);
//       window.removeEventListener("load", updatePageHeight);
//       audio.pause();
//     };
//   }, [pageHeight]);

//   return (
//     <>
//       <div className="relative min-h-screen w-full overflow-hidden bg-black">
//         <div className="star-container absolute top-0 left-0 w-full h-full"></div>
//         <div className="relative z-10 flex flex-col items-center text-center py-10 px-4">
//           <h1 className="text-6xl sm:text-6xl text-white font-bold mb-5 font-clash">
//             Our Team
//           </h1>
//           <div className="w-full overflow-y-auto">
//             <div className="flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//               {teamData.map((member, index) => (
//                 <div key={index} className="w-full sm:w-auto flex justify-center">
//                   <TitleCard {...member} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Star Animation */}
//       <style jsx>{`
//         :root {
//           --fall-distance: ${pageHeight}px;
//         }
//         .star {
//           position: absolute;
//           top: -10px;
//           width: 1.5px;
//           height: 40px;
//           background-image: linear-gradient(30deg, white, black);
//           border-radius: 50%;
//           opacity: 0.8;
//           animation: fall linear infinite;
//         }
//         @keyframes fall {
//           0% {
//             transform: translateY(0);
//             opacity: 0.8;
//           }
//           100% {
//             transform: translateY(var(--fall-distance));
//             opacity: 0.3;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// export default TeamGallery;
