import React from "react";
import dsc1 from "../../../img/people-photos/DSC_2326.png";
import dsc2 from "../../../img/people-photos/DSC_2498.png";
import dsc3 from "../../../img/people-photos/DSC_2605.png";
import dsc4 from "../../../img/people-photos/DSC_2614.png";
import dsc5 from "../../../img/people-photos/DSC_2687.png";
import dsc6 from "../../../img/people-photos/DSC_2615.png";
import dsc7 from "../../../img/people-photos/DSC_2626.png";
import dsc8 from "../../../img/people-photos/DSC_2629.png";
import Footer from "../../footer/Footer";

const CTF = () => {
  return (
    <>
      <div className="min-h-screen bg-black p-8 flex flex-col items-center font-cyberfont">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-emerald-400 glitch-effect">
            EscalateX - Capture The Flag (CTF)
          </h1>
          <p className="text-yellow-400 text-lg md:text-xl mt-4">
            September 15, 2024 | Academic Block - 11, CSED, GLA University
          </p>
        </header>

        <main className="w-full max-w-5xl">
          {/* overview */}
          <section className="bg-gray-900 border border-emerald-500 rounded-lg p-6 mb-12 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-emerald-400">
            <h2 className="text-3xl font-bold text-emerald-400 mb-4">
              Event Overview
            </h2>
            <img
              src={dsc1}
              alt="Event Overview"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-100">
              The CTF event kicked off at 10:00 AM and continued until 6:00 PM.
              The structure of the competition was designed to maximise
              engagement and learning opportunities for participants. Students
              worked in teams or individually to solve tasks spanning various
              domains of cybersecurity, including reverse engineering,
              cryptography, and web vulnerabilities, all aimed at earning points
              and securing top positions on the leaderboard. Participants from
              multiple universities across India demonstrated their skills and
              competed in a collaborative environment, pushing their limits to
              tackle real-world cybersecurity challenges. The top three
              performers were awarded prizes, internships, and advanced
              cybersecurity courses to further their skills and careers.
            </p>
          </section>

          {/* winners */}
          <section className="bg-gray-900 border border-emerald-500 rounded-lg p-6 mb-12 shadow-lg transition-transform duration-300 hover:shadow-emerald-400">
            <h2 className="text-3xl font-bold text-emerald-400 mb-4">
              Winners and Awards
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-black border border-emerald-400 rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col">
                <img
                  src={dsc6}
                  alt="Parth Seth"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold text-yellow-400">
                  Parth Seth
                </h3>
                <p className="text-gray-100 flex-grow">
                  Parth Seth from <b>GLA University</b>, awarded <b>₹10,000</b>,
                  access to Altered Security by CRTP, a 3-Month Virtual
                  Playground Subscription by Offsec, a{" "}
                  <b>paid internship by Offsec</b>, and a digital forensics
                  course by <b>Cyber Intelligence Global LLP</b>.
                </p>
                <p className="text-emerald-400 font-bold mt-auto">
                  Prize: ₹10,000 and more
                </p>
              </div>

              <div className="bg-black border border-emerald-400 rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col">
                <img
                  src={dsc4}
                  alt="Krishan Jai Soorya"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold text-yellow-400">
                  Krishan Jai Soorya
                </h3>
                <p className="text-gray-100 flex-grow">
                  Krishan Jai Soorya from <b>R.M.K. College</b> of Engineering
                  and Technology, Chennai, awarded <b>₹6,000</b>, access to
                  Altered Security by CRTP, a 3-Month Virtual Playground
                  Subscription by Offsec, a <b>paid internship by Offsec</b>,
                  and a digital forensics course by{" "}
                  <b>Cyber Intelligence Global LLP</b>.
                </p>
                <p className="text-emerald-400 font-bold mt-auto">
                  Prize: ₹6,000 and more
                </p>
              </div>

              <div className="bg-black border border-emerald-400 rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col">
                <img
                  src={dsc3}
                  alt="Madhav Tyagi"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold text-yellow-400">
                  Madhav Tyagi
                </h3>
                <p className="text-gray-100 flex-grow">
                  Madhav Tyagi from <b>Manav Rachna University</b>, Faridabad,
                  awarded <b>₹4,000</b>, access to Altered Security by CRTP, a
                  3-month Virtual Playground Subscription by Offsec, a{" "}
                  <b>paid internship by Offsec</b>, and a digital forensics
                  course by <b>Cyber Intelligence Global LLP</b>.
                </p>
                <p className="text-emerald-400 font-bold mt-auto">
                  Prize: ₹4,000 and more
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 border border-emerald-500 rounded-lg p-6 mb-12 shadow-lg transition-transform duration-300 hover:shadow-emerald-400">
            <h2 className="text-3xl font-bold text-emerald-400 mb-4">
              Runner-ups
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-black border border-emerald-400 rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col">
                <img
                  src={dsc7}
                  alt="indu"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold text-yellow-400">
                  Indu Shekhar Pandey
                </h3>
                <p className="text-gray-100 flex-grow">
                  Indu Shekhar Pandey from <b>KIET</b>, Ghaziabad, received a
                  3-month Virtual Playground Subscription by Offsec and a
                  digital forensics course by{" "}
                  <b>Cyber Intelligence Global LLP</b>.
                </p>
              </div>

              <div className="bg-black border border-emerald-400 rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col">
                <img
                  src={dsc8}
                  alt="aswanth"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold text-yellow-400">
                  Aswanth Babu
                </h3>
                <p className="text-gray-100 flex-grow">
                  Aswanth Babu u from <b>R.M.K. College</b> of Engineering and
                  Technology, received a 3-month Virtual Playground Subscription
                  by Offsec and a digital forensics course by{" "}
                  <b>Cyber Intelligence Global LLP</b>.
                </p>
              </div>
            </div>
          </section>

          {/* acknowledgments */}
          <section className="bg-gray-900 border border-emerald-500 rounded-lg p-6 mb-12 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-emerald-400">
            <h2 className="text-3xl font-bold text-emerald-400 mb-4">
              Our CTF Players
            </h2>
            <img
              src={dsc5}
              alt="acku"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-100">
              We celebrate the incredible talent and dedication of all the
              participants in our recent CTF event. Each player showcased their
              skills in cybersecurity, problem-solving, and teamwork,
              contributing to an exciting and competitive atmosphere. Here's a
              glimpse of the brilliant minds who took part in this thrilling
              experience!
            </p>
          </section>

          {/* feedback */}
          <section className="bg-gray-900 border border-emerald-500 rounded-lg p-6 mb-12 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-emerald-400">
            <h2 className="text-3xl font-bold text-emerald-400 mb-4">
              Feedback and Conclusion
            </h2>
            <img
              src={dsc2}
              alt="feedback"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-100">
              Participants and organisers alike hailed the event as a resounding
              success. Students expressed their appreciation for the challenging
              nature of the competition, the opportunity to apply practical
              knowledge, and the invaluable feedback from industry
              professionals. Many highlighted how the CTF enhanced their
              understanding of cybersecurity and gave them confidence in
              tackling complex security challenges. In conclusion, the second
              day of the EscalateX event delivered on its promise of providing a
              rewarding, skill-building experience. The event successfully
              combined the excitement of competition with the pursuit of
              knowledge, further solidifying GLA University's position as a hub
              for cybersecurity education. The contributions of the Cyberonites
              Club, faculty members, and mentors were integral to the event's
              success, and participants are eagerly looking forward to future
              challenges.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default CTF;
