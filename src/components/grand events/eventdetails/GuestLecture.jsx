import Footer from "../../footer/Footer";
import imgi1 from "./../../../img/people-photos/DSC_0101.jpg";
import imgi2 from "./../../../img/people-photos/DSC_0152.jpg";
import imgi3 from "./../../../img/people-photos/DSC_0111.jpg";

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
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-black p-8 flex flex-col items-center font-cyberfont">
        
        {/* Event Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-green-800 mb-2">
            EscalateX - Guest Lecture Series
          </h1>
          <p className="text-green-700 text-lg md:text-xl">
            September 14, 2024 | IBM Conference Hall, GLA University
          </p>
        </div>

        {/* Sessions */}
        <div className="mb-12 w-full">
          <h2 className="text-4xl font-bold text-green-800 mb-6 text-center">
            Technical Sessions
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {sessions.map((session, index) => (
              <div
                key={index}
                className="relative bg-gray-800 border border-green-700 rounded-lg p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-yellow-500"
              >
                {/* Ring Effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-yellow-500 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"></div>
                <img
                  src={session.image}
                  alt={session.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 z-10"
                />
                <h3 className="text-2xl font-bold text-green-200 mb-1 z-10">
                  {session.title}
                </h3>
                <p className="text-green-300 mb-1 z-10">
                  <strong>Speaker :</strong> {session.speaker}
                </p>
                <p className="text-green-100 text-sm mt-4 z-10">
                  {session.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Participation Section */}
        <div className="bg-gray-800 border border-green-700 rounded-lg p-8 mb-12 shadow-lg w-full md:w-3/4 mx-auto">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Participation
          </h2>
          <p className="text-green-100 text-base">
            The event attracted a significant number of enthusiastic students from diverse fields, all eager to explore the latest trends in cybersecurity. Participants actively engaged during the sessions, asking insightful questions and interacting with the distinguished speakers. The broad range of attendees, from beginners to advanced learners, fostered a collaborative and inclusive environment. The overwhelming participation demonstrated the students' strong interest in cybersecurity, positioning them well for future challenges in the field. The guest lecture series held on September 15, 2024, saw an enthusiastic turnout of 105 participants, with 29 external students, 46 students from the college, and 30 students from the Cyberonites club. Their active participation reflects their keen interest in the cybersecurity field, and the insights shared during the event have set a high standard for future sessions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 w-fit">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-green-800 text-gray-100 border border-green-700 rounded-lg p-6 text-center hover:bg-green-700 transition-all shadow-lg"
            >
              <h3 className="text-4xl font-bold text-yellow-500 mb-2">
                {stat.value}
              </h3>
              <p className="text-green-200">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Impact & Feedback */}
        <div className="bg-gray-800 border border-green-700 rounded-lg p-8 mb-12 shadow-lg w-full md:w-3/4 mx-auto">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Impact & Feedback
          </h2>
          <p className="text-green-100 text-base">
            The lectures were highly informative and well-received by the participants. Many students expressed their appreciation for the opportunity to learn directly from industry experts, noting how the knowledge gained from the event will be highly beneficial in their future careers. The interactive nature of the sessions allowed participants to ask questions and engage directly with the experts.
          </p>
        </div>

        {/* Conclusion Section */}
        <div className="bg-gray-800 border border-green-700 rounded-lg p-8 shadow-lg w-full md:w-3/4 mx-auto">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Conclusion</h2>
          <p className="text-green-100 text-base">
            The EscalateX Guest Lecture Series was a resounding success, offering students a unique opportunity to expand their knowledge of cybersecurity. We extend our sincere gratitude to the Office of Students' Welfare and the Cyberonites Club for organising this enriching event. The contributions of our esteemed speakers and alumni played a crucial role in the success of the event. We look forward to organising more such knowledge-sharing sessions in the future to further enhance students' skills and awareness in the field of cybersecurity.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GuestLecture;
