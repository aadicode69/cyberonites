import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import event1 from "../../img/events/EscalateXGL.jpg";
import event2 from "../../img/events/EscalateX_CTF.jpg";
import event3 from "../../img/events/IntrusionX.png";

function Grand() {
  const eventData = [
    {
      id: 1,
      title: "EscalateX - Guest Lecture",
      image: event1,
      type: "Lecture",
      date: "14 September 2024",
      participants: "100+",
      description:
        "The EscalateX Guest Lecture Series aimed to deepen students' understanding of cybersecurity topics like reverse engineering, hardware hacking, and web penetration testing. Featuring experienced professionals and alumni, it bridged theoretical knowledge with real-world applications, equipping students with practical skills for cybersecurity careers.",
      link: "/guestlecture"
    },
    {
      id: 2,
      title: "EscalateX - CTF",
      image: event2,
      type: "Competition",
      date: "15 September 2024",
      participants: "50",
      description:
      "The primary objective of the CTF event was to promote practical learning and encourage students to apply their theoretical knowledge to real-world cybersecurity issues. By offering challenges that simulated real hacking scenarios, the event aimed to enhance participants' problem-solving abilities, teamwork, and technical skills.",
      link: "/capturetheflag"
    },
    {
      id: 3,
      title: "IntrusionX - Hackathon",
      image: event3,
      type: "Hackathon",
      date: "11 - 12 April 2024",
      participants: "90+",
      description:
      "IntrusionX is a 24-hour flagship cybersecurity event by the Cyberonites Club, GLA University, focused on building practical skills in ethical hacking, cyber defense, and digital forensics. It aims to provide hands-on experience with real-world cyber threats while promoting ethical and responsible cybersecurity practices.",
      link: "/intrusion-x"
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  useEffect(() => {
    if (isVisible) {
      const cards = document.querySelectorAll(".typing-effect");
      cards.forEach((card) => {
        card.style.animation = "typing 3.5s steps(40, end)";
      });
    }
  }, [isVisible]);

  return (
    <>
      <div id="Events" className="flex items-center justify-center my-7">
        <h1 className="text-cyan-400 font-clash font-bold text-2xl md:text-4xl mt-10 text-center">
          Grand Events
        </h1>
      </div>
      <div
        ref={ref}
        className="flex flex-wrap justify-center gap-6 px-4 md:px-8 max-w-7xl mx-auto"
      >
        {eventData.map((event) => (
          <div 
            key={event.id}
            className="w-full sm:w-96 bg-gray-900 border border-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-400/20 group flex flex-col"
          >
            <Link to={event.link} className="block relative w-full aspect-[4/3]">
              <div className="absolute top-4 left-4 z-10 bg-cyan-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {event.type}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"></div>
              <img
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                src={event.image}
                alt={`${event.title} Image`}
              />
            </Link>
            <div className="p-6 flex flex-col flex-grow">
              <Link to={event.link}>
                <h5 className="mb-3 text-2xl font-bold font-clash tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 typing-effect">
                  {event.title}
                </h5>
              </Link>
              <div className="mb-2 flex flex-wrap gap-2">
                <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded font-cyberfont flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {event.date}
                </span>
                <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded font-cyberfont flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {event.participants} Participants
                </span>
              </div>
              <p className="mb-4 text-gray-400 leading-relaxed font-cyberfont fade-in-effect flex-grow">
                {event.description}
              </p>
              <div className="flex justify-between items-center pt-2 border-t border-gray-800 mt-auto">
                <Link
                  to={event.link}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium font-clash text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  Explore
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
        ))}
      </div>
    </>
  );
}

export default Grand;