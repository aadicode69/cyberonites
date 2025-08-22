import React from "react";
import { 
  FaGlobe, 
  FaCog, 
  FaMicroscope, 
  FaEye, 
  FaLock, 
  FaPuzzlePiece, 
  FaDesktop,
  FaShieldAlt 
} from "react-icons/fa";
import "./styles/cards.css";

const CTFCategories = ({ className }) => {
  const categories = [
    {
      name: "Web Exploitation",
      icon: <FaGlobe />,
      description: "Attack and defend web applications through various vulnerability types and modern exploitation techniques.",
      difficulty: "HIGH",
      challenges: ["SQL Injection", "XSS", "CSRF", "Authentication Bypass", "File Upload Vulnerabilities"]
    },
    {
      name: "Reverse Engineering & Binary",
      icon: <FaCog />,
      description: "Analyze and reverse binary files, executables, and compiled programs using advanced debugging techniques.",
      difficulty: "CRITICAL",
      challenges: ["Binary Analysis", "Assembly Code", "Debugging", "Packing/Unpacking", "Anti-Analysis Techniques"]
    },
    {
      name: "Digital Forensics",
      icon: <FaMicroscope />,
      description: "Investigate digital evidence and recover hidden information from various digital sources and media.",
      difficulty: "HIGH",
      challenges: ["File Recovery", "Memory Analysis", "Network Forensics", "Mobile Forensics", "Timeline Analysis"]
    },
    {
      name: "OSINT (Open Source Intelligence)",
      icon: <FaEye />,
      description: "Gather intelligence using open-source information and advanced investigative techniques.",
      difficulty: "MEDIUM",
      challenges: ["Social Media Investigation", "Domain Analysis", "Image Analysis", "Metadata Extraction", "People Search"]
    },
    {
      name: "Cryptography & Steganography",
      icon: <FaLock />,
      description: "Break encryption, solve cryptographic puzzles, and find hidden information in digital media.",
      difficulty: "CRITICAL",
      challenges: ["Classical Ciphers", "Modern Cryptography", "LSB Steganography", "Audio Hiding", "Covert Channels"]
    },
    {
      name: "Miscellaneous",
      icon: <FaPuzzlePiece />,
      description: "Diverse challenges covering programming, logic puzzles, and creative problem-solving scenarios.",
      difficulty: "MEDIUM",
      challenges: ["Programming Challenges", "Logic Puzzles", "Creative Thinking", "Mixed Disciplines", "Innovation Tasks"]
    },
    {
      name: "B2R (Boot to Root)",
      icon: <FaDesktop />,
      description: "Complete system compromise from initial access to administrative privileges in realistic environments.",
      difficulty: "CRITICAL",
      challenges: ["Network Scanning", "Privilege Escalation", "Persistence", "Lateral Movement", "System Exploitation"]
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'CRITICAL': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'HIGH': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <section className={`py-16 px-6 relative ${className}`}>
      <header className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-wide exv2-font-cyberjunkies">
          <span className="text-white">CTF</span> <span className="text-orange-500">CATEGORIES</span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Day 2 features an intense 8-hour CTF championship across 7 specialized categories. 
          Teams compete in real-world cybersecurity challenges with varying difficulty levels.
        </p>
      </header>
      
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
          <span className="text-orange-400 font-semibold">Date: </span>
          <span className="text-white">November 9th, 2025</span>
        </div>
        <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
          <span className="text-orange-400 font-semibold">Duration: </span>
          <span className="text-white">8 Hours Intensive</span>
        </div>
        <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
          <span className="text-orange-400 font-semibold">Format: </span>
          <span className="text-white">Team Competition</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        {categories.map((category, index) => (
          <article key={index} className="exv2-ctf-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <header className="flex items-start gap-4 mb-4">
              <div className="text-orange-500 text-3xl flex-shrink-0">
                {category.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-white text-lg font-bold mb-2 exv2-font-clouds">
                  {category.name}
                </h3>
                <span className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold border ${getDifficultyColor(category.difficulty)} exv2-font-clouds`}>
                  Threat Level: {category.difficulty}
                </span>
              </div>
            </header>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {category.description}
            </p>

            <div className="mb-4">
              <h4 className="text-white text-sm font-semibold mb-3 exv2-font-clouds">Challenge Types:</h4>
              <ul className="space-y-2">
                {category.challenges.map((challenge, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="text-orange-400 text-xs">▸</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <footer className="flex items-center justify-between">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-lg border border-green-500/30 exv2-font-clouds">
                Real World Scenarios
              </span>
              <span className={`px-2 py-1 rounded text-xs font-semibold border ${getDifficultyColor(category.difficulty)} exv2-font-clouds`}>
                {category.difficulty}
              </span>
            </footer>
          </article>
        ))}
      </div>

      <footer className="text-center max-w-4xl mx-auto p-8 bg-gradient-to-br from-orange-500/5 to-orange-600/5 border border-orange-500/20 rounded-2xl backdrop-blur-lg">
        <header className="mb-6">
          <h3 className="text-white text-3xl font-bold mb-4 exv2-font-cyberjunkies" style={{ letterSpacing: '.1em' }}>Competition Slogan</h3>
          <div className="text-orange-400 text-2xl font-bold tracking-wider exv2-font-clouds">COMPETE • COLLABORATE • CONQUER
          </div>
        </header>
        
        <p className="text-gray-300 text-base leading-relaxed mb-8">
          Only top teams from the Pre-CTF (October 11th) advance to this final championship round.
          Experience the ultimate cybersecurity challenge with real-world attack scenarios and win rewards, recognition, and recruitment opportunities from top firms.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <span className="text-orange-400 font-semibold text-sm">Rewards:</span>
            <div className="text-white text-sm">Cash Prizes & Certificates</div>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <span className="text-orange-400 font-semibold text-sm">Recognition:</span>
            <div className="text-white text-sm">Industry Opportunities</div>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <span className="text-orange-400 font-semibold text-sm">Recruitment:</span>
            <div className="text-white text-sm">Top Firm Opportunities</div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CTFCategories;
