import { 
  FaIndustry, 
  FaVirus, 
  FaSearch, 
  FaGlobe, 
  FaCloud 
} from "react-icons/fa";
import "./EscX_v2_custom.css";

const KnowledgeVillages = ({ className }) => {
  const villages = [
    {
      name: "IoT Security",
      icon: <FaIndustry />,
      description: "Explore Internet of Things security challenges, device vulnerabilities, and secure IoT implementations.",
      capacity: 30,
      topics: ["Device Security", "Network Protocols", "Firmware Analysis", "IoT Forensics"]
    },
    {
      name: "Malware Analysis",
      icon: <FaVirus />,
      description: "Deep dive into malware reverse engineering, behavior analysis, and detection techniques.",
      capacity: 30,
      topics: ["Static Analysis", "Dynamic Analysis", "Sandbox Environments", "Signature Creation"]
    },
    {
      name: "OSINT Intelligence",
      icon: <FaSearch />,
      description: "Master open-source intelligence gathering techniques and tools for cyber investigations.",
      capacity: 30,
      topics: ["Social Media Intelligence", "Digital Footprinting", "Threat Intelligence", "Investigation Techniques"]
    },
    {
      name: "Web Exploitation",
      icon: <FaGlobe />,
      description: "Learn advanced web application security testing and exploitation methodologies.",
      capacity: 30,
      topics: ["SQL Injection", "XSS Attacks", "Authentication Bypass", "API Security"]
    },
    {
      name: "Cloud Infrastructure",
      icon: <FaCloud />,
      description: "Understand cloud security fundamentals, misconfigurations, and secure deployment practices.",
      capacity: 30,
      topics: ["AWS Security", "Container Security", "Identity Management", "Cloud Forensics"]
    }
  ];

  return (
    <section className={`py-16 px-6 relative ${className}`}>
      <header className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-wide exv2-font-cyberjunkies">
          <span className="text-white">KNOWLEDGE</span> <span className="text-orange-500">VILLAGES</span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Immersive learning environments featuring expert-led workshops and hands-on training across specialized cybersecurity domains
        </p>
      </header>

      {/* Villages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        {villages.map((village, index) => (
          <article key={index} className="exv2-village-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            {/* Village Header */}
            <header className="text-center mb-6">
              <div className="text-orange-500 text-4xl mb-4 flex justify-center">
                {village.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-2 exv2-font-clouds">
                {village.name}
              </h3>
              <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-lg exv2-font-clouds">
                Max Capacity: {village.capacity}
              </span>
            </header>

            {/* Village Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center">
              {village.description}
            </p>

            {/* Key Topics */}
            <div className="mb-4">
              <h4 className="text-white text-sm font-semibold mb-3 text-center exv2-font-clouds">Key Topics:</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {village.topics.map((topic, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-lg border border-white/10">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Village Footer */}
            <footer className="text-center">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-400 text-sm font-medium rounded-xl border border-orange-500/30 exv2-font-clouds">
                Hands-on Learning
              </span>
            </footer>
          </article>
        ))}
      </div>

      {/* Access Information */}
      <footer className="text-center max-w-2xl mx-auto p-8 bg-gradient-to-br from-orange-500/5 to-orange-600/5 border border-orange-500/20 rounded-2xl backdrop-blur-lg">
        <h3 className="text-white text-xl font-bold mb-4 exv2-font-clouds">Village Access Protocol</h3>
        <p className="text-gray-300 text-base leading-relaxed mb-4">
          All Knowledge Villages run simultaneously on <strong>Day 1 (November 8th)</strong>. Participants can choose their preferred learning track during registration.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="px-4 py-2 bg-white/5 text-orange-400 rounded-lg border border-white/10 exv2-font-clouds">
            🎯 Expert-Led Sessions
          </span>
          <span className="px-4 py-2 bg-white/5 text-orange-400 rounded-lg border border-white/10 exv2-font-clouds">
            💻 Hands-on Practice
          </span>
        </div>
      </footer>
    </section>
  );
};

export default KnowledgeVillages;
