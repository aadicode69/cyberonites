import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaUsers, FaQuoteRight, FaArrowLeft, FaUniversity, FaHandshake, FaGraduationCap } from "react-icons/fa";
import Footer from "../../footer/Footer";

// Import the images - paths to match the actual folder
import eventBannerImg from "../../../img/intrusionX/D1.png";
import judgesImg from "../../../img/intrusionX/judges.png";
import teamsImg from "../../../img/intrusionX/teams.png";
import winnersImg from "../../../img/intrusionX/Winners.png";

const IntrusionX = () => {
  const navigate = useNavigate();
  const [starPositions, setStarPositions] = useState([]);

  useEffect(() => {
    const numStars = 100;
    const stars = Array.from({ length: numStars }, () => ({
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      size: Math.random() * 2 + 1,
      duration: `${8 + Math.random() * 12}s`,
      delay: `${Math.random() * 4}s`,
    }));
    setStarPositions(stars);
  }, []);
  
  // Statistics data
  const statistics = [
    { label: "Total Teams", value: "25" },
    { label: "External Teams", value: "10+" },
    { label: "GLA Teams", value: "15" },
    { label: "Prize Pool", value: "₹3,00,000" },
  ];

  // Winners data
  const winners = [
    {
      name: "Team Captcha_Unrecognised",
      college: "MRIIS, Faridabad",
      prize: "₹15,000 + ₹5,000 & CEH Practical Voucher (Cyberyaan)",
      position: "1st Prize",
    },
    {
      name: "Team Deathly Hallows",
      college: "GLA University (1st Year Team)",
      prize: "₹10,000 + 3 CRTP Certificates (Altered Security)",
      position: "2nd Prize",
    },
    {
      name: "Team Cyber Sentinels",
      college: "GLA University",
      prize: "₹5,000",
      position: "3rd Prize",
    }
  ];

  // Guests data
  const guests = [
    {
      name: "Mr. Pankaj Yadav",
      role: "Founder of Cyberyaan",
    },
    {
      name: "Mr. Mohsin Quresh",
      role: "Subject Matter Expert at Hack The Box & IBM Trainer",
    },
    {
      name: "Mr. Deepak Yadav",
      role: "Cyber Security Expert & Evangelist",
    },
    {
      name: "Ms. Ritaj Sharma",
      role: "Security Consultant at Deloitte",
    },
    {
      name: "Mr. Aman Singh Chauhan",
      role: "Graduate Engineer Trainee at HCL",
    },
    {
      name: "Mr. Lucky Thandel",
      role: "Security Researcher at HackIT",
    },
    {
      name: "Ms. Kashish Kanojia",
      role: "Founder & CEO of IDevSec",
    },
    {
      name: "Mr. Deepak Kumar",
      role: "Co-Founder of IDevSec & OWASP Noida Lead",
    }
  ];

  // Updated neumorphic card component
  const NeumorphicCard = ({ children, gradient = "from-blue-400 via-cyan-400 to-teal-400", isPressed = false }) => (
    <div className={`relative rounded-2xl ${
      isPressed 
        ? "bg-[#0e0e12] shadow-[inset_5px_5px_10px_#070709,inset_-5px_-5px_10px_#15151b]" 
        : "bg-[#121218] shadow-[5px_5px_15px_#0a0a0e,-5px_-5px_15px_#1a1a22]"
    } p-6 overflow-hidden transition-all duration-300 hover:scale-[1.02]`}>
      <div className="relative z-10">{children}</div>
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-b-2xl opacity-80 transition-all duration-300 hover:h-2 hover:opacity-100`}></div>
    </div>
  );

  // Updated section title with neumorphism
  const SectionTitle = ({ title, gradient = "from-blue-500 to-cyan-500", icon = null }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center mb-16"
    >
      {icon && (
        <div className="text-white/70 mb-4 text-4xl p-4 rounded-full bg-[#121218] shadow-[5px_5px_15px_#0a0a0e,-5px_-5px_15px_#1a1a22]">
          {icon}
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold text-center bg-gradient-to-r ${gradient} bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] tracking-tight mt-4`}>
        {title}
      </h2>
      <div className="w-32 h-1 bg-gradient-to-r rounded-full mt-6" style={{backgroundImage: `linear-gradient(to right, ${gradient.split(' ')[1].slice(5)}, ${gradient.split(' ')[2]?.slice(3) || gradient.split(' ')[1].slice(5)})`}}></div>
    </motion.div>
  );

  // New neumorphic button component
  const NeumorphicButton = ({ children, onClick, gradient = "from-cyan-500 to-blue-500", pressed = false }) => (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 rounded-full relative overflow-hidden ${
        pressed 
        ? "bg-[#0e0e12] shadow-[inset_5px_5px_10px_#070709,inset_-5px_-5px_10px_#15151b]" 
        : "bg-[#121218] shadow-[5px_5px_15px_#0a0a0e,-5px_-5px_15px_#1a1a22]"
      } transition-all duration-300 hover:shadow-[3px_3px_10px_#0a0a0e,-3px_-3px_10px_#1a1a22] active:shadow-[inset_5px_5px_10px_#070709,inset_-5px_-5px_10px_#15151b]`}
    >
      <span className={`relative z-10 font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {children}
      </span>
    </motion.button>
  );

  // Neumorphic statistic card
  const StatisticCard = ({ label, value }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#121218] shadow-[5px_5px_15px_#0a0a0e,-5px_-5px_15px_#1a1a22] rounded-2xl p-6 transition-all duration-300"
    >
      <h3 className="text-4xl font-clash font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">{value}</h3>
      <p className="text-blue-200/80 font-medium">{label}</p>
    </motion.div>
  );

  return (
    <>
      <div className="relative min-h-screen font-clash bg-[#121218]">
        {/* Background gradients - more subtle for neumorphism */}
        <div className="fixed inset-0 bg-[#121218] opacity-90"></div>

        {/* Star animation - keep but make a bit more subtle */}
        {starPositions.map((star, index) => (
          <div
            key={index}
            className="fixed w-[2px] h-[2px] bg-white opacity-60 animate-fall rounded-full"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: star.duration,
              animationDelay: star.delay,
              filter: "blur(0.5px)",
            }}
          ></div>
        ))}

        {/* Main content container */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back button - neumorphic style */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/events")}
            className="flex items-center text-white/80 hover:text-white mb-8 transition-colors group bg-[#121218] shadow-[5px_5px_15px_#0a0a0e,-5px_-5px_15px_#1a1a22] p-3 rounded-full hover:shadow-[3px_3px_10px_#0a0a0e,-3px_-3px_10px_#1a1a22] active:shadow-[inset_5px_5px_10px_#070709,inset_-5px_-5px_10px_#15151b]"
          >
            <FaArrowLeft className="mr-2 group-hover:translate-x-[-4px] transition-transform" />
            Back to Events
          </motion.button>

          {/* Event Header - updated for neumorphism */}
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-6xl text-white font-extrabold tracking-wide mb-2"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                IntrusionX
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-cyan-300/70 mb-6"
            >
              Flagship Cybersecurity Hackathon
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 text-gray-300 mb-8"
            >
              <span className="px-4 py-1 rounded-full bg-[#121218] shadow-[inset_3px_3px_6px_#09090c,inset_-3px_-3px_6px_#1b1b24] text-blue-400/90">
                April 15-16, 2023
              </span>
              <span className="px-4 py-1 rounded-full bg-[#121218] shadow-[inset_3px_3px_6px_#09090c,inset_-3px_-3px_6px_#1b1b24] text-blue-400/90">
                GLA University, Mathura
              </span>
              <span className="px-4 py-1 rounded-full bg-[#121218] shadow-[inset_3px_3px_6px_#09090c,inset_-3px_-3px_6px_#1b1b24] text-yellow-400/90">
                Prize Pool: ₹3,00,000
              </span>
            </motion.div>
          </div>

          {/* Event Banner - with neumorphic frame */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-24 rounded-2xl overflow-hidden bg-[#121218] shadow-[10px_10px_30px_#0a0a0e,-10px_-10px_30px_#1a1a22] p-3 transition-transform duration-300 hover:scale-[1.02]"
          >
            <img src={eventBannerImg} alt="IntrusionX Event" className="w-full h-auto rounded-xl" />
          </motion.div>

          {/* Statistics section - neumorphic cards */}
          <section className="mb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16 w-full">
              {statistics.map((stat, index) => (
                <StatisticCard key={index} {...stat} />
              ))}
            </div>
          </section>

          {/* Event Overview */}
          <section className="mb-24">
            <SectionTitle title="Event Overview" gradient="from-cyan-400 to-blue-600" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <NeumorphicCard gradient="from-cyan-400 via-blue-500 to-indigo-600">
                <p className="text-lg text-white/80 leading-relaxed">
                  IntrusionX was successfully inaugurated in collaboration with the Office of Students' Welfare, GLA University. The hackathon brought together cybersecurity enthusiasts from various prestigious institutions to compete in challenging security puzzles, network intrusion scenarios, and forensic challenges in a controlled environment.
                </p>
                
                <div className="mt-6 pt-6 border-t border-[#1a1a22]">
                  <h4 className="text-white font-medium mb-3">The event was graced by:</h4>
                  <ul className="list-disc list-inside text-white/70 grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li>Dr. Sandeep Rathod – HOD, CEA</li>
                    <li>Dr. Hitendra Garg – HOD, Specialization, CEA</li>
                    <li>Dr. Asheesh Tiwari – Associate Professor</li>
                    <li>Akash Chaudhary – Assistant Professor</li>
                    <li>Rahul Shandilya – Assistant Professor</li>
                    <li>Shamsher Khan – Assistant Professor</li>
                    <li>Arvind Prasad – Assistant Professor</li>
                    <li>Shubham Shukla – Assistant Professor</li>
                  </ul>
                </div>
                
                <div className="mt-6 pt-4">
                  <h4 className="text-white font-medium mb-3">Participating Institutions:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["IIT Mandi", "PIET", "MRIIS, Faridabad", "Sagar Institute", "MIT", "IGNOU", 
                      "GLA University", "VIT Bhopal", "Graphic Era University", "Manipal University Jaipur"].map((college, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#121218] shadow-[inset_3px_3px_6px_#09090c,inset_-3px_-3px_6px_#1b1b24] rounded-full text-sm text-white/80">
                        {college}
                      </span>
                    ))}
                  </div>
                </div>
              </NeumorphicCard>
            </motion.div>
          </section>

          {/* Judges & Guests Section */}
          <section className="mb-24">
            <SectionTitle 
              title="Judges & Expert Guests" 
              gradient="from-purple-400 to-blue-500" 
              icon={<FaGraduationCap />}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl overflow-hidden bg-[#121218] shadow-[10px_10px_30px_#0a0a0e,-10px_-10px_30px_#1a1a22] p-3 mb-10 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img src={judgesImg} alt="Event Judges" className="w-full h-auto rounded-xl" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <NeumorphicCard gradient="from-purple-400 via-indigo-500 to-blue-600">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-4">Guest Facilitation</h3>
                <p className="text-white/80 mb-4">
                  The esteemed guests were warmly facilitated by:
                </p>
                <ul className="list-disc list-inside text-white/70 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="text-white/80">Prof. Ashok Bhansali (Dean)</li>
                  <li className="text-white/80">Dr. Hitendra Garg (HOD of Specialization)</li>
                  <li className="text-white/80">Dr. Arvind Prasad (Club Co-Mentor)</li>
                  <li className="text-white/80">Mr. Garvit Dohere (Technical Trainer, GLA University)</li>
                </ul>
              </NeumorphicCard>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {guests.map((guest, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#121218] shadow-[5px_5px_15px_#0a0a0e,-5px_-5px_15px_#1a1a22] p-4 rounded-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[8px_8px_20px_#0a0a0e,-8px_-8px_20px_#1a1a22]"
                >
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">{guest.name}</h3>
                  <p className="text-white/70 text-sm">{guest.role}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Winners Section */}
          <section className="mb-24">
            <SectionTitle 
              title="Champions & Awards" 
              gradient="from-yellow-400 to-amber-600" 
              icon={<FaTrophy />}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl overflow-hidden bg-[#121218] shadow-[10px_10px_30px_#0a0a0e,-10px_-10px_30px_#1a1a22] p-3 mb-10 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img src={winnersImg} alt="Event Winners" className="w-full h-auto rounded-xl" />
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {winners.map((winner, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#121218] shadow-[5px_5px_15px_#0a0a0e,-5px_-5px_15px_#1a1a22] p-6 rounded-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[8px_8px_20px_#0a0a0e,-8px_-8px_20px_#1a1a22]"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 mr-3 rounded-full bg-[#121218] shadow-[3px_3px_6px_#09090c,-3px_-3px_6px_#1b1b24]">
                      {idx === 0 ? <FaTrophy className="text-yellow-400 text-2xl" /> : 
                       idx === 1 ? <FaMedal className="text-gray-300 text-2xl" /> : 
                       <FaMedal className="text-amber-600 text-2xl" />}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${
                        idx === 0 ? "text-yellow-400" : 
                        idx === 1 ? "text-gray-300" : 
                        "text-amber-500"
                      }`}>{winner.name}</h3>
                      <p className="text-white/60 text-sm">{winner.position}</p>
                    </div>
                  </div>
                  <div className="ml-10 mt-4 p-3 rounded-lg bg-[#121218] shadow-[inset_3px_3px_6px_#09090c,inset_-3px_-3px_6px_#1b1b24]">
                    <p className="text-white/80 flex items-center mb-2">
                      <FaUniversity className="mr-2 text-white/40" />
                      {winner.college}
                    </p>
                    <p className="text-white/70 text-sm">{winner.prize}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Participants Section */}
          <section className="mb-24">
            <SectionTitle 
              title="Participating Teams" 
              gradient="from-indigo-400 to-purple-500" 
              icon={<FaUsers />}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl overflow-hidden bg-[#121218] shadow-[10px_10px_30px_#0a0a0e,-10px_-10px_30px_#1a1a22] p-3 mb-10 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img src={teamsImg} alt="Participating Teams" className="w-full h-auto rounded-xl" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <NeumorphicCard gradient="from-indigo-400 via-purple-500 to-pink-500">
                <p className="text-lg text-white/80 mb-6">
                  We're excited to announce the successful completion of our Hackathon, which witnessed the participation of 25 dynamic teams, including over 10 teams from reputed institutions outside GLA University. All teams showcased incredible talent and innovation in cybersecurity.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-[#121218] shadow-[inset_5px_5px_10px_#09090c,inset_-5px_-5px_10px_#1b1b24]">
                    <h4 className="text-lg font-medium bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3 flex items-center">
                      <FaUniversity className="mr-2 text-indigo-400" /> Participating Institutions
                    </h4>
                    <ul className="space-y-2 text-white/80">
                      {["IIT Mandi", "MRIIS, Faridabad", "VIT Bhopal", "Graphic Era University", "Manipal University Jaipur"].map((college, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2"></span>
                          {college}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-[#121218] shadow-[inset_5px_5px_10px_#09090c,inset_-5px_-5px_10px_#1b1b24]">
                    <h4 className="text-lg font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 flex items-center">
                      <FaHandshake className="mr-2 text-purple-400" /> Our Sponsors
                    </h4>
                    <ul className="space-y-2 text-white/80">
                      {["Cyberyaan", "Altered Security", "Unstop", ".xyz"].map((sponsor, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                          {sponsor}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </NeumorphicCard>
            </motion.div>
          </section>

          {/* Conclusion */}
          <section className="mb-24">
            <SectionTitle title="Event Conclusion" gradient="from-purple-500 to-pink-500" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <NeumorphicCard gradient="from-purple-500 via-pink-500 to-red-500">
                <p className="text-lg text-white/80 leading-relaxed">
                  The IntrusionX Hackathon was a tremendous success, witnessing participation of 25 dynamic teams including over 10 teams from reputed institutions outside GLA University. The event not only tested participants' technical skills but also promoted teamwork, creative problem-solving, and ethical hacking principles. Based on the overwhelming positive response, we're excited to bring more such events in the future!
                </p>
                
                <div className="mt-6 pt-6 border-t border-[#1a1a22]">
                  <h4 className="text-white font-medium mb-3">Special Thanks to Our Alumni:</h4>
                  <div className="space-y-3">
                    {["Ritaj Sharma – Sr. Consultant, Deloitte", "Aman Singh Chauhan – Security Analyst, HCL", "Lucky Thandel – Security Researcher, HackIT"].map((alum, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-[#121218] shadow-[inset_3px_3px_6px_#09090c,inset_-3px_-3px_6px_#1b1b24] text-white/80">
                        {alum}
                      </div>
                    ))}
                  </div>
                </div>
              </NeumorphicCard>
            </motion.div>
          </section>

          {/* Back to top button - neumorphic style */}
          <div className="flex justify-center mt-20">
            <NeumorphicButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to Top
            </NeumorphicButton>
          </div>
        </div>

        <style jsx>{`
          @keyframes fall {
            0% {
              transform: translateY(-10vh) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(110vh) translateX(20px);
              opacity: 0;
            }
          }
          .animate-fall {
            animation: fall linear infinite;
            box-shadow: 0 0 4px rgba(255,255,255,0.8);
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default IntrusionX;
