import React, { useEffect, useRef } from "react";
import "./Hackops.css";
import { useNavigate } from "react-router-dom"; 
import img1 from "../../img/hackops/1.jpeg";
import img2 from "../../img/hackops/2.jpeg";
import img3 from "../../img/hackops/3.jpeg";
import img4 from "../../img/hackops/4.jpeg";
import img5 from "../../img/hackops/5.jpeg";
import img6 from "../../img/hackops/6.jpeg";
import img7 from "../../img/hackops/7.jpeg";
import img8 from "../../img/hackops/8.jpeg";
import img9 from "../../img/hackops/9.jpeg";
import img10 from "../../img/hackops/10.jpeg";
import img11 from "../../img/hackops/11.jpeg";
import img12 from "../../img/hackops/12.jpeg";
import img13 from "../../img/hackops/13.jpeg";
import img14 from "../../img/hackops/14.jpeg";
import img15 from "../../img/hackops/15.jpeg";

/* ── DATA ──────────────────────────────────────────── */
const TICKER_ITEMS = [
  { text: "HACKOPS – EXPLOITATION", red: true },
  { text: "APR 24, 2026" },
  { text: "CYBERONITES CLUB" },
  { text: "GLA UNIVERSITY" },
  { text: "OFFENSIVE SECURITY" },
  { text: "ETHICAL HACKING WORKSHOP" },
  { text: "100 REGISTRATIONS" },
  { text: "ROOM 5046 · AB-12" },
  { text: "CISSP · OSCP · GIAC" },
];

const STATS = [
  { num: "100", plus: false, label: "Total Registrations", index: "01" },
  { num: "75", plus: false, label: "Participants Present", index: "02" },
  { num: "500", plus: true, label: "Workshops by Speaker", index: "03" },
  { num: "14", plus: true, label: "Years Expert Experience", index: "04" },
];

const META = [
  { label: "Date", value: "April 24, 2026" },

  { label: "Type", value: "Hands-On Workshop" },
  { label: "Status", value: "Concluded", red: true },
  { label: "Host", value: "Dr. Mr. OoPpSss" },
];

const HIGHLIGHTS = [
  {
    icon: "🖥️",
    idx: "SH-01",
    title: "System Exploitation",
    desc: "Hands-on techniques targeting OS-level vulnerabilities, privilege escalation, and post-exploitation frameworks.",
  },
  {
    icon: "🌐",
    idx: "SH-02",
    title: "Web Exploitation",
    desc: "Practical demonstrations of SQL injection, XSS, CSRF, and SSRF attack patterns on live targets.",
  },
  {
    icon: "📡",
    idx: "SH-03",
    title: "Network Exploitation",
    desc: "Deep-dive into network scanning, MITM attacks, and lateral movement methodologies.",
  },
  {
    icon: "📂",
    idx: "SH-04",
    title: "OSINT Techniques",
    desc: "Real-world open-source intelligence gathering and digital footprinting scenarios.",
  },
  {
    icon: "🔬",
    idx: "SH-05",
    title: "Case-Based Learning",
    desc: "Attack simulations rooted in real cybercrime investigations handled by the expert speaker.",
  },
  {
    icon: "🎯",
    idx: "SH-06",
    title: "Live Demonstrations",
    desc: "Interactive session with participant engagement and Q&A, bridging theory and practice.",
  },
];

const WINNERS = [
  {
    rank: "01",
    name: "Ankush",
    pos: "1st Position",
    prize: "Zebronics Astra 35 Portable Bluetooth Speaker",
    detail: "16W · Dual Drivers · RGB LED · 8h Backup",
    first: true,
  },
  {
    rank: "02",
    name: "Satvika Mishra",
    pos: "2nd Position",
    prize: "Lapcare D-Lite Plus Wireless Keyboard",
    detail: "2.4 GHz · 87 Keys · Multi-OS Compatible",
    first: false,
  },
  {
    rank: "03",
    name: "Aniket Singh",
    pos: "3rd Position",
    prize: "Ant Esports GM1103 Wired Gaming Mouse",
    detail: "Adjustable DPI · RGB · Ergonomic Design",
    first: false,
  },
];

const TIMELINE = [
  {
    phase: "Phase 01 · Inauguration",
    title: "Opening Ceremony",
    desc: "Dr. Mr. OOPPSS was welcomed and felicitated with a bouquet. Faculty from the CEA Department inaugurated the session, setting an engaging tone for the workshop.",
    people: ["Dr. Asheesh Tiwari", "Dr. Ruby Panwar", "Dr. Mr. OOPPSS"],
  },
  {
    phase: "Phase 02 · Workshop",
    title: "Core Technical Sessions",
    desc: "Hands-on exploitation modules covering system, web, and network attack vectors — driven by real-world case studies and live attack simulations across 3+ domains.",
    people: [],
  },
  {
    phase: "Phase 03 · Q&A",
    title: "Interactive Engagement",
    desc: "Open Q&A where participants engaged directly with the speaker on attack methodologies, career paths in offensive security, and ethical hacking certifications.",
    people: [],
  },
  {
    phase: "Phase 04 · Closing",
    title: "Valedictory & Mementos",
    desc: "Dr. Mr. OOPPSS was honored with a memento. Prize distribution followed, recognizing top-performing participants from the workshop challenges.",
    people: ["Prof. Anup Kumar Gupta", "Dr. Sandeep Kumar Rathore", "Mr. Avadesh Nande", "Mrs. Priyanka Sharma"],
  },
];


const BENTO_CELLS = [
  { label: "Inauguration",       tag: "Opening", large: true, img: img1  },
  { label: "Speaker Session", img: img2  },
  { label: "Live Demo",  img: img3  },
  { label: "Lab Work",   img: img4  },
  { label: "Networking", img: img5  },
  { label: "Q&A Round",  img: img6  },
  { label: "Prize Distribution", img: img7  },
  { label: "Group Photo",  img: img8  },
  { label: "Closing",      img: img9  },
  { label: "Workshop",     img: img10 },
  { label: "Interaction",  img: img11 },
  { label: "Felicitation", img: img12 },
  { label: "Audience", img: img13 },
  { label: "Memento", img: img14 },
  {label : "end", img: img15},
];

const CELL_SHADES = [
  "#1a1a1a", "#161616", "#0e0e0e",
  "#131313", "#191919", "#111111",
  "#0f0f0f", "#181818", "#141414",
];

const FEEDBACK = [
  {
    text: "The hands-on approach made complex concepts instantly understandable. Best workshop I've attended at GLA.",
    meta: "Participant · CSE 3rd Year",
  },
  {
    text: "Real-world case studies from Dr. OOPPSS were eye-opening. The live attack demos were genuinely impressive.",
    meta: "Participant · MCA 2nd Year",
  },
  {
    text: "Highly informative and well-structured. Each module built on the previous. Would love a part-two edition.",
    meta: "Participant · B.Tech CE",
  },
];

const CERTS = ["CISSP", "OSCP", "GIAC", "Red Teamer", "Digital Forensics", "14+ Yrs"];

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker-strip">
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span key={i} className={item.red ? "red" : ""}>
            {item.red ? "▲ " : "/ "}{item.text}
          </span>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-brand">
       
        <div className="nav-brand-text">
          <span className="nav-title">HACK<span className="accent">OPS</span></span>
          <span className="nav-sub">Exploitation · 2026</span>
        </div>
      </div>
      <div className="nav-right">
        <span className="live-dot" />
        CYBERONITES · GLAU
      </div>
    </nav>
  );
}

/* ── HERO ─────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-eyebrow">EVENT REPORT · APR 2026</div>

        <h1>
          HACK<span className="accent">OPS</span>
        </h1>
        <div className="hero-sub">— Exploitation Workshop —</div>

        <div className="hero-meta">
          {META.map((m, i) => (
            <div className="meta-item" key={i}>
              <span className="meta-label">{m.label}</span>
              <span className={`meta-value${m.red ? " red" : ""}`}>{m.value}</span>
            </div>
          ))}
        </div>

        <div className="hero-rule" />

        <p className="hero-desc">
          On April 24, 2026, the Cyberonites Club at GLA University organized HackOps — Exploitation,
          a hands-on cybersecurity workshop conducted by offensive security expert Dr. Mr. OOPPSS.
          The session delivered practical exposure to ethical hacking across web, system, and network domains,
          bridging academic theory with real-world attack methodologies.
        </p>
      </div>
    </section>
  );
}

/* ── STATS ────────────────────────────────────────── */
function Stats() {
  return (
    <div className="stats-band">
      {STATS.map((s, i) => (
        <div className="stat-cell" key={i} data-index={s.index}>
          <span className="stat-num">
            {s.num}
            {s.plus && <span className="plus">+</span>}
          </span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ── SPEAKER ──────────────────────────────────────── */
function Speaker() {
  return (
    <section className="section">
      <div className="section-tag"><span className="tag-num">02</span> Expert Profile</div>
      <h2>THE SPEAKER</h2>
      <div className="section-rule" />

      <div className="speaker-layout">
        <div className="speaker-bio">
          <div className="speaker-name-block">
            <div className="speaker-name">DR. MR.<br />OOPPSS</div>
            <div className="speaker-title">Offensive Security Expert · Red Teamer · Digital Forensics</div>
          </div>

          <p>
            A highly accomplished cybersecurity professional with over 14 years of experience across
            law enforcement and corporate sectors. He has collaborated with global agencies, government
            bodies, intelligence units, and multinational organizations on complex cybercrime investigations.
          </p>
          <p>
            His expertise spans digital forensics, malware analysis, OSINT, cyber threat intelligence,
            and advanced penetration testing — making him a trusted authority across 500+ workshops worldwide.
          </p>

          <div className="cert-list">
            {CERTS.map((c, i) => (
              <span className="cert-badge" key={i}>{c}</span>
            ))}
          </div>
        </div>

        <div className="speaker-terminal">
          <div className="terminal-bar">
            <div className="t-dot red" />
            <div className="t-dot" />
            <div className="t-dot" />
            <span className="terminal-filename">speaker_profile.txt</span>
          </div>
          <div className="terminal-body">
            {[
              ["$", "name", "Dr. Mr. OOPPSS"],
              ["$", "role", "Red Teamer / DFIR"],
              ["$", "experience", "14+ Years"],
              ["$", "workshops", "500+ Worldwide"],
              ["$", "agencies", "Govt · Intel · MNCs"],
              ["$", "certs", "CISSP | OSCP | GIAC"],
              ["$", "domains", "Forensics · OSINT · Pentest"],
              ["$", "status", "VERIFIED ✓"],
            ].map(([prompt, key, val], i) => (
              <div className="t-line" key={i}>
                <span className="prompt">{prompt}</span>
                <span className="key">{key}:</span>
                <span className="val">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HIGHLIGHTS ───────────────────────────────────── */
function Highlights() {
  return (
    <section className="section dark-alt full">
      <div className="section-inner">
        <div className="section-tag"><span className="tag-num">03</span> Session Modules</div>
        <h2>SESSION HIGHLIGHTS</h2>
        <div className="section-rule" />
        <p>Six interconnected modules delivering end-to-end offensive security education through demonstration, participation, and real-world context.</p>

        <div className="highlights-grid">
          {HIGHLIGHTS.map((h, i) => (
            <div className="highlight-card" key={i}>
              <span className="hl-idx">{h.idx}</span>
              <span className="hl-icon">{h.icon}</span>
              <div className="hl-title">{h.title}</div>
              <div className="hl-desc">{h.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TIMELINE ─────────────────────────────────────── */
function Timeline() {
  return (
    <section className="section">
      <div className="section-tag"><span className="tag-num">04</span> Event Flow</div>
      <h2>CEREMONY TIMELINE</h2>
      <div className="section-rule" />

      <div className="timeline">
        {TIMELINE.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="tl-phase">{item.phase}</div>
            <div>
              <div className="tl-title">{item.title}</div>
              <div className="tl-desc">{item.desc}</div>
              {item.people.length > 0 && (
                <div className="tl-people">
                  {item.people.map((p, j) => (
                    <span className="tl-person" key={j}>{p}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── WINNERS ──────────────────────────────────────── */
function Winners() {
  return (
    <section className="section dark-alt full">
      <div className="section-inner">
        <div className="section-tag"><span className="tag-num">05</span> Results</div>
        <h2>WINNERS & REWARDS</h2>
        <div className="section-rule" />

        <div className="winners-layout">
          {WINNERS.map((w, i) => (
            <div className={`winner-card${w.first ? " first" : ""}`} key={i}>
              <span className="winner-rank">{w.rank}</span>
              <span className="winner-pos-label">{w.pos}</span>
              <div className="winner-name">{w.name}</div>
              <span className="winner-prize-label">Reward</span>
              <div className="winner-prize">
                {w.prize}
                <br />
                <span style={{ fontWeight: 400, fontSize: "11px", color: "#666" }}>{w.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── GALLERY ──────────────────────────────────────── */
function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <div className="section-tag"><span className="tag-num">06</span> Visuals</div>
        <h2>EVENT GLIMPSES</h2>
        
      </div>

      <div className="bento-gallery">
        {BENTO_CELLS.map((cell, i) => (
          <div className="bento-cell" key={i}>
            <img
              src={cell.img}
              alt={cell.label}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── FEEDBACK ─────────────────────────────────────── */
function Feedback() {
  return (
    <section className="section">
      <div className="section-tag"><span className="tag-num">07</span> Response</div>
      <h2>PARTICIPANT FEEDBACK</h2>
      <div className="section-rule" />
      <p>
        Feedback was collected via Google Form post-session. The workshop was widely appreciated for
        its hands-on approach, real-world examples, and the speaker's engaging delivery style.
      </p>

      <div className="feedback-grid">
        {FEEDBACK.map((f, i) => (
          <div className="feedback-card" key={i}>
            <div className="feedback-quote">"</div>
            <p className="feedback-text">{f.text}</p>
            <span className="feedback-meta">{f.meta}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── INSTITUTIONS ─────────────────────────────────── */
function Institutions() {
  const people = [
    "Prof. Anup Kumar Gupta — Vice Chancellor",
    "Dr. Sandeep Kumar Rathore — HoD, CEA",
    "Dr. Asheesh Tiwari — Assoc. Prof, CEA",
    "Dr. Ruby Panwar — Assoc. Prof, CEA",
    "Mrs. Priyanka Sharma — Technical Trainer",
    "Mr. Avadesh Nande",
  ];

  return (
    <section className="section dark-alt full">
      <div className="section-inner">
        <div className="section-tag"><span className="tag-num">08</span> Faculty Present</div>
        <h2>CLOSING DIGNITARIES</h2>
        <div className="section-rule" />
        <p>The workshop concluded in the distinguished presence of senior faculty and administration, underscoring the institutional importance of cybersecurity education.</p>
        <div className="inst-row">
          {people.map((p, i) => (
            <span className="inst-tag" key={i}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ───────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <span className="footer-left">
        © 2026 Cyberonites Club · GLA University · Mathura
      </span>
      <span className="footer-right">
        HackOps – Exploitation · <span className="accent">APR 24, 2026</span> · CEA Department
      </span>
    </footer>
  );
}
function FloatingHomeButton() {
  const navigate = useNavigate();

  return (
    <button className="floating-home-btn" onClick={() => navigate("/")}>
      Home
    </button>
  );
}

/* ── ROOT COMPONENT ───────────────────────────────── */
export default function Hackops() {
  return (
    <div className="hackops-root">
      <Navbar />
      <Ticker />
      <Hero />
      <Stats />
      <Speaker />
      <Highlights />
      <Timeline />
      <Winners />
      <Gallery />
      <Feedback />
      <Institutions />
      <FloatingHomeButton/>
      <Footer />
    </div>
  );
}