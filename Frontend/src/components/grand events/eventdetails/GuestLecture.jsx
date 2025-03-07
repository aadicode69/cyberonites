import Footer from "../../footer/Footer";
import { motion } from "framer-motion";
import imgi1 from "../../../img/people-photos/DSC_0101.jpg";
import imgi2 from "../../../img/people-photos/DSC_0152.jpg";
import imgi3 from "../../../img/people-photos/DSC_0111.jpg";

const GuestLecture = () => {
  const statistics = [
    { label: "Total Participants", value: "105" },
    { label: "External Students", value: "29" },
    { label: "College Students", value: "46" },
    { label: "Cyberonites Members", value: "30" },
  ];

  const sessions = [
    {
      title: "Reverse Engineering",
      speaker: "Mr. Sanchay Singh",
      description: "Principles and techniques of software deconstruction and analysis.",
      image: imgi1,
    },
    {
      title: "Hardware Hacking",
      speaker: "Lucky Thandel",
      description: "Exploitation and security of hardware systems.",
      image: imgi2,
    },
    {
      title: "Web Penetration Testing",
      speaker: "Mr. Ritaj Sharma and Mr. Aman Chauhan",
      description: "Identification and exploitation of web application vulnerabilities.",
      image: imgi3,
    },
  ];

  return (
    <>
      <div className="relative min-h-screen bg-black overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{
            backgroundImage: "radial-gradient(circle, rgba(72, 255, 190, 0.15) 10%, transparent 80%)",
            backgroundSize: "200% 200%",
          }}
        />

        <div className="relative z-10 p-8 flex flex-col items-center font-sans text-white">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold font-clash text-green-600 mb-4">
              <span className="bg-gradient-to-r from-green-500 to-yellow-500 text-transparent bg-clip-text" >EscalateX</span> - Guest Lecture Series
            </h1>
            <p className="text-green-300 text-lg font-cyberfont md:text-xl font-semibold">
              September 14, 2024 | IBM Conference Hall, GLA University
            </p>
          </div>

          <div className="w-full mb-16">
            <h2 className="text-4xl font-semibold font-clash text-green-400 mb-10 text-center">
              Technical Sessions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {sessions.map((session, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white rounded-2xl shadow-xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={session.image}
                    alt={session.title}
                    className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="p-6 relative">
                    <h3 className="text-2xl font-semibold font-clash text-green-300">{session.title}</h3>
                    <p className="text-green-400 font-cyberfont text-sm mb-4">
                      <strong>Speaker:</strong> {session.speaker}
                    </p>
                    <p className="text-green-200 font-cyberfont text-base">{session.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 mb-16 rounded-2xl shadow-xl w-full md:w-3/4 mx-auto transform transition-all hover:scale-105">
            <h2 className="text-3xl font-semibold font-clash text-green-600 mb-6">Participation</h2>
            <p className="text-green-100 text-lg font-cyberfont">
            The event attracted a significant number of enthusiastic students from diverse fields, all eager to explore the latest trends in cybersecurity. Participants actively engaged during the sessions, asking insightful questions and interacting with the distinguished speakers. The broad range of attendees, from beginners to advanced learners, fostered a collaborative and inclusive environment. The overwhelming participation demonstrated the students' strong interest in cybersecurity, positioning them well for future challenges in the field. The guest lecture series held on September 15, 2024, saw an enthusiastic turnout of 105 participants, with 29 external students, 46 students from the college, and 30 students from the Cyberonites club. Their active participation reflects their keen interest in the cybersecurity field, and the insights shared during the event have set a high standard for future sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16 w-full">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-green-800 text-gray-100 border border-green-700 rounded-xl p-8 text-center shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                <h3 className="text-4xl font-clash font-bold text-yellow-400 mb-2">{stat.value}</h3>
                <p className="text-green-200 font-cyberfont">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 mb-16 rounded-2xl shadow-xl w-full md:w-3/4 mx-auto transform transition-all hover:scale-105">
            <h2 className="text-3xl font-semibold font-clash text-green-600 mb-6">Impact & Feedback</h2>
            <p className="text-green-100 text-lg font-cyberfont">
            The lectures were highly informative and well-received by the participants. Many students expressed their appreciation for the opportunity to learn directly from industry experts, noting how the knowledge gained from the event will be highly beneficial in their future careers. The interactive nature of the sessions allowed participants to ask questions and engage directly with the experts.
            </p>
          </div>
          <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-2xl shadow-xl w-full md:w-3/4 mx-auto transform transition-all hover:scale-105">
            <h2 className="text-3xl font-semibold text-green-600 mb-6 font-clash">Conclusion</h2>
            <p className="text-green-100 text-lg font-cyberfont">
            The EscalateX Guest Lecture Series was a resounding success, offering students a unique opportunity to expand their knowledge of cybersecurity. We extend our sincere gratitude to the Office of Students' Welfare and the Cyberonites Club for organising this enriching event. The contributions of our esteemed speakers and alumni played a crucial role in the success of the event. We look forward to organising more such knowledge-sharing sessions in the future to further enhance students' skills and awareness in the field of cybersecurity.
            </p>
          </div>
        </div>
      </div>
      <button
          className="fixed bottom-5 text-white right-5 z-50 bg-gradient-to-tl from-green-400 to-yellow-500 hover:shadow-lg hover:scale-105 transition-all duration-300 py-4 px-4 rounded-full flex items-center justify-center"
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

      <Footer />
    </>
  );
};

export default GuestLecture;
