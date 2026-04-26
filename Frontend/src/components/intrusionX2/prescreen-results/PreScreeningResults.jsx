import { useState } from "react";
import headerimg from "../../../img/intrusionX/intrusionx-se.png";

const teams = [
  { name: "Consciousness", leader: "Aditya Upmanyu" },
  { name: "Hyper Thinkers", leader: "Shiv Raj Singh" },
  { name: "technohacks", leader: "Akash Nandy" },
  { name: "Security Matters", leader: "Mahinder" },
  { name: "OutcastX", leader: "Ramandeep Singh" },
  { name: "Codenova", leader: "Hunny Sharma" },
  { name: "InnovaTech", leader: "Himani Gautam" },
  { name: "PixelPirates", leader: "Bhoomi Gupta" },
  { name: "CipherNova", leader: "krishna kumar gupta" },
  { name: "Smooth operators", leader: "Vivek Rai" },
  { name: "Codesmasher", leader: "Sahitya Kumar" },
  { name: "Tech Pioneers", leader: "Shruti Saroj" },
  { name: "ERRORCODE", leader: "Shaswat Jaiswal" },
  { name: "codeX", leader: "KIRTI CHAUHAN" },
  { name: "INVINCIBLES", leader: "Sahil Maurya" },
  { name: "Syntax error 404", leader: "Ansh bhadoria" },
  { name: "RUNTIME TERROR", leader: "Priyanshu Pal" },
  { name: "Astra", leader: "Aryan Garg" },
  { name: "Tech Titans", leader: "SUNITHA K" },
  { name: "Phoenix", leader: "VANSH SINGLA" },
  { name: "Trojan Tamers", leader: "Granth Maheshwari" },
  { name: "The Encoders", leader: "Harshit Agarwal" },
  { name: "UpsideDown", leader: "Sejal Tiwari" },
  { name: "Prometheus", leader: "Ritika Sharma" },
  { name: "OFF_GRID", leader: "Uddeshya Srivastava" },
  { name: "Code Vortex", leader: "Swastik singh" },
  { name: "Code Vortex - B", leader: "Shivesh Mishra" },
  { name: "STUFF JOINT", leader: "Mayank Agrawal" },
  { name: "Team Undertrained", leader: "Adarsh Singh" },
  { name: "Strangers in Code", leader: "Tarun Kumar" },
  { name: "0xElite", leader: "Ayushi Agrawal" },
  { name: "Codeholics", leader: "Ayushman Gupta" },
  { name: "AI DEFENDERS", leader: "Shreyansh Singh" },
  { name: "EXECUTIONERS", leader: "Harshit Kumar Singh" },
  { name: ".technet", leader: "Ashutosh Dwivedi" },
  { name: "code_Ideaz", leader: "Suraj Yadav" },
  { name: "ScanOps", leader: "Mridul Gupta" },
  { name: "RunTime Terror", leader: "Aneesh Poniyan" },
  { name: "Fullstack Attack", leader: "Alok kumar" },
  { name: "Creative Bugs", leader: "Rudra Pratap Singh Chauhan" },
  { name: "Debuggers", leader: "Aaryan Saraswat" },
  { name: "AlgoNauts", leader: "Mansi Agarwal" },
  { name: "InnoSphere", leader: "Ashish kumar" },
  { name: "Vortex", leader: "Ayushi Singh" },
  { name: "Runtime Terror", leader: "Komal Patel" },
  { name: "Cosmos_Sync", leader: "Aryan Agarwal" },
  { name: "CoreAccess", leader: "Rohan Sandeep Mane" },
  { name: "Justice Coders", leader: "Chetan Pathak" },
  { name: "SPARTANS", leader: "Hariom Singh" },
  { name: "Narcos", leader: "Dhruv Tyagi" },
  { name: "Neural Ninja", leader: "Shivansh Gupta" },
  { name: "Bugsploit", leader: "Abhijit Kasar" },
  { name: "Cipher-Breakers", leader: "Arpit Gupta" },
  { name: "WebX", leader: "Yuvraj Tyagi" },
  { name: "Morph_coders", leader: "Aryaka Shakya" },
  { name: "TechThunders", leader: "Vivek Kumar" },
  { name: "Kali Linux", leader: "Rohit" },
  { name: "Phoenix", leader: "Pulkit Kulshreshtha" },
  { name: "Execution squad", leader: "Manu Tiwari" },
  { name: "Brew Crew", leader: "Shreshtha Agarwal" },
  { name: "MTR Techtitans", leader: "Mohini Agrawal" },
  { name: "Darkthread", leader: "Yash Vats" },
  { name: "Dominator", leader: "Sarthak Gautam" },
  { name: "AlgoCoders", leader: "Unnati Sharma" },
  { name: "Sprint Squad", leader: "Aryan Chikara" },
  { name: "localhost:8080", leader: "Nihal Tripathi" },
  { name: "WHITE WALKERS", leader: "Nand Gopal Sharma" },
  { name: "OP09", leader: "Ankush Kaushik" },
  { name: "Arise", leader: "Krishna Yadav" },
  { name: "DunoFire", leader: "Mayank Kumar" },
  { name: "Cyber Sprint", leader: "Nishank Chaturvedi" },
  { name: "Enigma", leader: "Tanmay Varma" },
  { name: "Cipher Storm", leader: "Somesh" },
  { name: "The codeFathers", leader: "Prashant Kumar" },
  { name: "CodeCrafters", leader: "Rudraksh Mishra" },
  { name: "code mavericks", leader: "Radhika Agarwal" },
  { name: "Gladiators Coders", leader: "Devansh Maheshwari" },
  { name: "Torpedoes", leader: "Kartikey Tripathi" },
  { name: "Pheonix", leader: "Pavitra Labh" },
  { name: "404 Team Not Found", leader: "Kartik Gupta" },
  { name: "MLSindhi", leader: "Gaurang Jadoun" },
  { name: "Syntex error", leader: "Kartik Yadav" },
  { name: "METAMORPHITRIXES", leader: "Maitrayi Raj" },
  { name: "HACKERSTORM", leader: "Kartik Saxena" },
  { name: "X_FrontieR", leader: "Yug Kumar" },
  { name: "RUNTIME REBELS", leader: "Deepak Kumar" },
  { name: "Neel Tech", leader: "Nancy Paul" },
  { name: "AlgoWolves", leader: "Abhishekh Yadav" },
  { name: "Sky Lord", leader: "Ishaan Rastogi" },
  { name: "NeoX Coders", leader: "Kshitij Raj" },
  { name: "Team Sentinel", leader: "Akash Sharma" },
  { name: "IronCrypt", leader: "Arjit Katiyar" },
  { name: "Neurolox", leader: "Diljan Ansari" },
  { name: "BUG SLAYERS", leader: "Himesh Yadav" },
  { name: "VRINDOPNISHAD", leader: "HARSH SHARMA" },
  { name: "Innovatrix", leader: "Priya Shukla" },
  { name: "Vision", leader: "Rahul Agnihotri" },
  { name: "Innosphere", leader: "Ashish kumar" },
  { name: "Code Chasers", leader: "Ansh Singh" },
  { name: "Malwarewale", leader: "Rounak premchandani" },
  { name: "Team Vision", leader: "Rachit Dubey" },
];
const tickerText = teams.map(t => t.name).join("   ·   ");

function TeamCard({ name, leader, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative px-5 py-5 cursor-default overflow-hidden transition-colors duration-150 border-b border-r border-gray-200"
      style={{ backgroundColor: hovered ? "#f7f7f7" : "#fff" }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] transition-colors duration-150"
        style={{ backgroundColor: hovered ? "#000" : "transparent" }}
      />

      <span
        className="block mb-2 transition-colors duration-150 font-clash"
        style={{
          fontSize: 9,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: hovered ? "#999" : "#ddd",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <p
        className="leading-snug font-clash"
        style={{
          fontSize: 15,
          fontWeight: 800,
          color: "#111",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        {name}
      </p>
      <p className="font-ranade"
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: "#888888",
          letterSpacing: "0.05em",
          marginTop: 4,
        }}
      >
        {leader}
      </p>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function PreScreeningResults() {
  return (
    <>
      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Bebas+Neue&family=Inter:wght@300;400;600;700;800;900&display=swap');

        @keyframes ticker-move {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse-red {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.1; }
        }

        .ix-ticker {
          animation: ticker-move 80s linear infinite;
          white-space: nowrap;
          display: flex;
        }
        .ix-blink {
          animation: pulse-red 1.3s ease-in-out infinite;
        }
      `}</style>

      {/* ── ROOT ── */}
      <div
        className="min-h-screen bg-white text-black overflow-x-hidden"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* ─────────────────────────────────────────────
            LOGO HEADER
        ───────────────────────────────────────────── */}
        <header className="w-full border-b border-gray-100">
          <img
            src={headerimg}
            alt="IntrusionX Second Edition"
            className="w-full h-auto block"
            style={{
              maxHeight: "320px",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </header>

        {/* ─────────────────────────────────────────────
            TICKER
        ───────────────────────────────────────────── */}
        <div className="overflow-hidden border-b border-gray-100 bg-gray-50 py-2.5">
          <div className="ix-ticker">
            {[tickerText, tickerText].map((t, i) => (
              <span
                key={i}
                className="pr-16"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 9,
                  letterSpacing: "0.26em",
                  color: "#ccc",
                  textTransform: "uppercase",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <section className="max-w-6xl mx-auto px-6 sm:px-8 pt-14 pb-10 border-b border-gray-200">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
            <span
              className="border border-gray-300 px-3 py-1"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 9,
                letterSpacing: "0.25em",
                color: "#999",
                textTransform: "uppercase",
              }}
            >
              // PRE-SCREENING RESULTS
            </span>
          </div>

          {/* Big title */}
          <h1
            className="leading-none mb-3"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(60px, 9vw, 116px)",
              letterSpacing: "0.01em",
              color: "#000",
            }}
          >
            SHORTLISTED TEAMS <br />
          </h1>
          <div
            className="mt-10 h-px"
            style={{
              background:
                "linear-gradient(90deg, #000 0%, #ccc 55%, transparent 100%)",
            }}
          />
        </section>
        <section className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between py-5 border-b border-gray-200">
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 9,
                letterSpacing: "0.3em",
                color: "#bbb",
                textTransform: "uppercase",
              }}
            >
              // QUALIFIED TEAMS — FINAL ROUND
            </span>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 9,
                letterSpacing: "0.12em",
                color: "#bbb",
                textTransform: "uppercase",
              }}
            >
              TOTAL{" "}
              <span style={{ color: "#000", fontWeight: 700 }}>
                {teams.length}
              </span>{" "}
              TEAMS
            </span>
          </div>

          {/* Grid */}
          <div
            className="border-t border-l border-gray-200"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            }}
          >
            {teams.map(({ name, leader }, i) => (
              <TeamCard key={`${name}-${i}`} name={name} leader={leader} index={i} />
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            FOOTER
        ───────────────────────────────────────────── */}
        <footer className="max-w-6xl mx-auto px-6 sm:px-8 mt-16 pb-12 border-t border-gray-200 pt-6 flex items-center justify-between flex-wrap gap-3">
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 9,
              letterSpacing: "0.16em",
              color: "#ddd",
              textTransform: "uppercase",
            }}
          >
            IntrusionX SE &nbsp;·&nbsp; All rights reserved
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 9,
              letterSpacing: "0.16em",
              color: "#ddd",
              textTransform: "uppercase",
            }}
          >
            BEST OF LUCK —{" "}
            <span style={{ color: "#dc2626" }}>EXECUTE OR BE EXECUTED</span>
          </span>
        </footer>
      </div>
    </>
  );
}
