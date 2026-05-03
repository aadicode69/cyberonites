import React from "react";
import "./IntrusionX2_Overview.css";
import logo from "../../img/ps-final.png";
import logoCyberHost     from "../../img/intrusionX2/sponsors/CyberHost.webp";
import logoStartUpNews   from "../../img/intrusionX2/sponsors/StartUpNews.webp";
import logoHackHalt      from "../../img/intrusionX2/sponsors/Hackhalt.webp";
import logoSturtle       from "../../img/intrusionX2/sponsors/Sturtlesecurity.webp";
import logoHackerDNA     from "../../img/intrusionX2/sponsors/Hackerdna.webp";
import logoGoPwnIt       from "../../img/intrusionX2/sponsors/Gopwnit.webp";
import logoLetsDefend    from "../../img/intrusionX2/sponsors/Letsdefend.webp";
import logoCodecrafters  from "../../img/intrusionX2/sponsors/Codecrafters.webp";
import logoGitHub        from "../../img/intrusionX2/sponsors/Github.webp";
import logoUnstop        from "../../img/intrusionX2/sponsors/Unstop.webp";
import logoV0            from "../../img/intrusionX2/sponsors/V0.webp";
import logoDuality       from "../../img/intrusionX2/sponsors/Daulity.webp";
import logoOSEN          from "../../img/intrusionX2/sponsors/Osen.webp";
import logoTSN           from "../../img/intrusionX2/sponsors/Tsn.webp";
import logoMcyber        from "../../img/intrusionX2/sponsors/Mcyber.webp";
import logoSecops        from "../../img/intrusionX2/sponsors/Secops.webp";
import logoHackersVilla  from "../../img/intrusionX2/sponsors/Hackersvilla.webp";
import img1 from "../../img/intrusionX2/Gallery/img1.webp";
import img2 from "../../img/intrusionX2/Gallery/img2.webp";
import img3 from "../../img/intrusionX2/Gallery/img3.webp";
import img4 from "../../img/intrusionX2/Gallery/img4.webp";
import img5 from "../../img/intrusionX2/Gallery/img5.webp";
import img6 from "../../img/intrusionX2/Gallery/img6.webp";
import img7 from "../../img/intrusionX2/Gallery/img7.webp";
import img8 from "../../img/intrusionX2/Gallery/img8.webp";
import img9 from "../../img/intrusionX2/Gallery/img9.webp";
import img10 from "../../img/intrusionX2/Gallery/img10.webp";
import img11 from "../../img/intrusionX2/Gallery/img11.webp";
import img12 from "../../img/intrusionX2/Gallery/img12.webp";
import img13 from "../../img/intrusionX2/Gallery/img13.webp";
import img14 from "../../img/intrusionX2/Gallery/img14.webp";
import img15 from "../../img/intrusionX2/Gallery/img15.webp";
import img16 from "../../img/intrusionX2/Gallery/img16.webp";
import img17 from "../../img/intrusionX2/Gallery/img17.webp";
import img18 from "../../img/intrusionX2/Gallery/img18.webp";
import img19 from "../../img/intrusionX2/Gallery/img19.webp";
import img20 from "../../img/intrusionX2/Gallery/img20.webp";
import winner1 from "../../img/intrusionX2/winners/first.jpeg";
import winner2 from "../../img/intrusionX2/winners/second.jpeg";
import winner3 from "../../img/intrusionX2/winners/third.jpeg";
import g1 from "../../img/intrusionX2/guests/ashish.webp";
import g3 from "../../img/intrusionX2/guests/deepak.webp";
import g4 from "../../img/intrusionX2/guests/ninad.webp";
import g5 from "../../img/intrusionX2/guests/sanchay.webp";
import g6 from "../../img/intrusionX2/guests/sanjeev.webp";
import g7 from "../../img/intrusionX2/guests/lucky.webp";
import g8 from "../../img/intrusionX2/guests/ritaj.webp";
import g9 from "../../img/intrusionX2/guests/prabudh.webp";
import heroImg from "./intrusionx-se.png";


const tickerWords = [
  "INTRUSION X", "SECOND EDITION", "36 HOURS", "CYBERSECURITY",
  "GLA UNIVERSITY", "CYBERONITES CLUB", "APRIL 10–11 2026",
  "991+ REGISTRATIONS", "354 TEAMS", "67 FINALISTS",
  "AI/ML", "CLOUD SECURITY", "BLOCKCHAIN", "IOT", "WEB APPLICATIONS",
];
const tickerText = tickerWords.join("   ·   ");
const galleryImages = [img1, img2, img3, img4, img5, img6];

const INDUSTRY_GUESTS = [
  { name: "Mr. Ashish Kumar", org: "Co-Founder, MCyber Academy", img: g1 },
  
  { name: "Mr. Deepak Kumar", org: "Sr. Technical Manager, Ministry of Home Affairs", img: g3 },
  { name: "Mr. Ninad Mishra", org: "Sr. Security Consultant, Bugcrowd", img: g4 },
  { name: "Mr. Sanchay Singh", org: "Founder, HackersVilla", img: g5 },
  { name: "Mr. Sanjeev Multani", org: "Head of Cybersecurity, Nuvollo", img: g6 },
];

const ALUMNI = [
  { name: "Mr. Lucky Thandel", org: "Security Researcher, HackIT", img: g7 },
  { name: "Mr. Ritaj Sharma", org: "Senior Consultant, Deloitte", img: g8 },
  { name: "Mr. Prabudh Chakravorty", org: "Security Researcher, McAfee", img: g9 },
];


const MENTORS = [
  { name: "Dr. Asheesh Tiwari",        role: "Associate Professor, Dept. CEA · Mentor" },
  { name: "Dr. Arvind Prasad",         role: "Faculty, GLA University" },
  { name: "Mrs. Priyanka Sharma",      role: "Technical Trainer, Dept. CEA" },
  { name: "Mr. Shamsher Khan",         role: "Technical Trainer, Dept. CEA" },
  { name: "Mr. Shubham Shukla",        role: "Assistant Professor, Dept. CEA" },
  { name: "Ms. Nirankita Debnath",     role: "Faculty Support" },
  { name: "Dr. Ashok Bhansali",        role: "Dean, Institute of Engineering & Technology" },
  { name: "Dr. Sandeep Kumar Rathore", role: "Head of Department, CEA" },
];

const EVALUATORS = [
  "Mr. Akash Chaudhary", "Dr. Sayantan Sinha", "Dr. Garvit Dohre",
  "Mr. Ninad Mishra", "Mr. Lucky Thandel", "Mr. Ritaj Sharma",
  "Mr. Sanjeev Multani", "Mr. Sanchay Singh", "Mr. Shivam",
  "Dr. Ram Manohar Nisarg", "Mr. Aashish Kumar",
];

const TOP3 = [
  {
    pos: "1ST PLACE",
    name: "PHOENIX",
    prize: "₹15,000",
    image: winner1,
    perks: "ISO 27001 (HackHalt) + SecOps + Sturtle Cert + CSEM Access + Codecrafters Credits + HackerDNA & LetsDefend Labs + MCyber Courses + Goodies"
  },
  {
    pos: "2ND PLACE",
    name: "TECH NINJAS",
    prize: "₹10,000",
    image: winner2,
    perks: "ISO 27001 (HackHalt) + SecOps + Sturtle Cert + CSEM Access + Codecrafters Credits + HackerDNA & LetsDefend Labs + MCyber Courses + Goodies"
  },
  {
    pos: " 3RD PLACE",
    name: "ASTRAS",
    prize: "₹5,000",
    image: winner3,
    perks: "ISO 27001 (HackHalt) + Sturtle Cert + CSEM Access + Codecrafters Credits + HackerDNA & LetsDefend Labs + MCyber Courses + Goodies"
  }
];
const REST = [
  { pos: "04", name: "Gladiators Coders" },
  { pos: "05", name: "NeelTech" },
  { pos: "06", name: "Vrindopnishad" },
  { pos: "07", name: "Team Sentinel" },
  { pos: "08", name: "Runtime Rebels" },
  { pos: "09", name: "404 Team Not Found" },
  { pos: "10", name: "Codeholics" },
];

const SPONSORS = [
  { sn: "01", name: "CyberHost",        logo: logoCyberHost,    url: "https://www.thcyberhost.com",  offerings: "100 Mouse Pads",                                           pricePerQty: "₹100",               totalQty: "100",      total: "₹10,000" },
  { sn: "02", name: "StartUpNews.FY",   logo: logoStartUpNews,  url: "https://startupnews.fyi",      offerings: "Event Support",                                            pricePerQty: "—",                  totalQty: "—",        total: "—" },
  { sn: "03", name: "HackHalt",         logo: logoHackHalt,     url: "https://hackhalt.org",         offerings: "ISO 27001 Certs + 100 Pens",                               pricePerQty: "₹10 (Pens), 445$",   totalQty: "100, 12",  total: "₹5,07,135" },
  { sn: "04", name: "Sturtle Security", logo: logoSturtle,      url: "https://sturtles.in",          offerings: "16 Certs + CSEM Access",                                   pricePerQty: "₹7,999 – ₹9,999",    totalQty: "16",       total: "₹1,47,984" },
  { sn: "05", name: "HackerDNA",        logo: logoHackerDNA,    url: "https://hackerdna.com",        offerings: "Premium Labs (12 Months)",                                 pricePerQty: "$10.19",             totalQty: "15",       total: "₹1,73,999" },
  { sn: "06", name: "GoPwnIt",          logo: logoGoPwnIt,      url: "https://gopwnit.com",          offerings: "Goodies / Swag",                                           pricePerQty: "—",                  totalQty: "—",        total: "—" },
  { sn: "07", name: "LetsDefend",       logo: logoLetsDefend,   url: "https://letsdefend.io",        offerings: "Premium Labs Access",                                      pricePerQty: "$24.99",             totalQty: "20",       total: "₹46,351" },
  { sn: "08", name: "Codecrafters",     logo: logoCodecrafters, url: "https://codecrafters.io",      offerings: "Platform Credits",                                         pricePerQty: "$180",               totalQty: "36",       total: "₹6,00,303" },
  { sn: "09", name: "GitHub",           logo: logoGitHub,       url: "https://github.com",           offerings: "Stickers",                                                 pricePerQty: "₹5",                 totalQty: "100",      total: "₹500" },
  { sn: "10", name: "Unstop",           logo: logoUnstop,       url: "https://unstop.com",           offerings: "4 T-shirts, 30 Diaries, 25 Sticker Sheets, 50 Bookmarks", pricePerQty: "₹150/₹100/₹5/₹15",  totalQty: "109",      total: "₹4,475" },
  { sn: "11", name: "v0",               logo: logoV0,           url: "https://v0.dev",               offerings: "Tech Support",                                             pricePerQty: "—",                  totalQty: "—",        total: "—" },
  { sn: "12", name: "Duality",          logo: logoDuality,      url: "https://www.duality.ai/",    offerings: "Community Support",                                        pricePerQty: "—",                  totalQty: "—",        total: "—" },
  { sn: "13", name: "OSEN",             logo: logoOSEN,         url: "https://osen.live",              offerings: "Sponsorship Referral",                                     pricePerQty: "—",                  totalQty: "—",        total: "—" },
  { sn: "14", name: "TSN",              logo: logoTSN,          url: "https://tsnsecurity.com",      offerings: "Goodies & Swags",                                          pricePerQty: "₹150 (T-shirt)",     totalQty: "—",        total: "₹21,500" },
  { sn: "15", name: "Mcyberacademy",    logo: logoMcyber,       url: "https://mcyberacademy.com",    offerings: "Courses + Keychains",                                      pricePerQty: "₹6,000 / ₹60",       totalQty: "30, 100",  total: "₹1,86,000" },
  { sn: "16", name: "Secops Group",     logo: logoSecops,       url: "https://secops.group",         offerings: "Certifications",                                           pricePerQty: "₹12,000 / ₹27,500",  totalQty: "20",       total: "₹3,95,000" },
  { sn: "17", name: "HackersVilla",     logo: logoHackersVilla, url: "https://hackersvilla.xyz",     offerings: "ID Cards",                                                 pricePerQty: "₹50",                totalQty: "350",      total: "₹17,500" },
];

const BUDGET = [
  { name: "Flex Print",             qty: "2",   rate: "₹1,947", total: "₹3,894" },
  { name: "Posters CMYK Print",     qty: "30",  rate: "₹11.80", total: "₹354" },
  { name: "Certificate CMYK Print", qty: "50",  rate: "₹5.90",  total: "₹295" },
  { name: "Hand Bands",             qty: "250", rate: "₹8",     total: "₹2,000" },
  { name: "Cash Cheque",            qty: "3",   rate: "₹40",    total: "₹120" },
  { name: "Medals",                 qty: "12",  rate: "₹60",    total: "₹720" },
  { name: "Sticker Sheets",         qty: "30",  rate: "₹45",    total: "₹1,350" },
  { name: "Refreshments",           qty: "—",   rate: "—",      total: "₹18,000" },
  { name: "Stationery",             qty: "—",   rate: "—",      total: "₹1,769" },
  { name: "Cash Prize",             qty: "3",   rate: "—",      total: "₹30,000" },
  { name: "Momentos",               qty: "5",   rate: "₹300",   total: "₹1,500" },
  { name: "Guest Travel",           qty: "—",   rate: "—",      total: "₹20,000" },
  { name: "Guest House",            qty: "5",   rate: "₹1,500", total: "₹7,500" },
  { name: "Guest House Food",       qty: "10",  rate: "₹380",   total: "₹3,800" },
  { name: "Miscellaneous",          qty: "—",   rate: "—",      total: "₹5,000" },
];

const HIGHLIGHTS = [
  "Hackathon kickoff on 10 April 2026 — official start of the 36-hour countdown.",
  "High competitive spirit with teams from 15+ institutions across India.",
  "Innovative working prototypes developed and demonstrated under intense time constraints.",
  "Real-time mentorship and feedback sessions with industry experts throughout the event.",
  "Night-time jamming session to help participants relax and recharge mid-hackathon.",
  "Cybersecurity awareness session by Aman Singh, Co-Founder, TSN Security — covering threat hunting, digital forensics, and cyber crime.",
  "Community-building session by Vikas Yadav (OSEN team) on hackathon culture and real-world impact.",
  "Final evaluations on 11 April 2026 — presentations judged on innovation, technical depth, and practical applicability.",
  "Certificates, medals, T-shirts, premium lab access, and ₹30,000 in cash prizes distributed at closing ceremony.",
];

const INSTITUTIONS = [
  "ABES Engineering College", "Chandigarh University", "COER University",
  "Dev Bhoomi Uttarakhand University", "Galgotias University", "GLA University Mathura",
  "Hindustan College of Science & Technology", "Invertis University", "LPU",
  "Meerut Institute of Engineering & Technology", "PSIT Kanpur",
  "Shri Ramswaroop Memorial University", "SRMIST Ghaziabad", "SSSUTMS",
  "Technocrats Institute of Technology Excellence",
];

/* ─── COMPONENT ─────────────────────────────────────────────── */
export default function IntrusionX2_Overview() {
  return (
    <div className="intrusion-container">

     <nav className="nav">
  <div className="nav-left">
  <div className="logo-bg">
    <img src={logo} className="logo" alt="club logo" />
  </div>
</div>

  <div className="nav-links">
    <a href="#about">ABOUT</a>
    <a href="#sponsors">SPONSORS</a>
    <a href="#rounds">ROUNDS</a>
    <a href="#winners">WINNERS</a>
    <a href="#gallery">GALLERY</a>
  </div>

  <div className="nav-right">
    <a href="/" className="home-btn">HOME</a>
  </div>
</nav>

      {/* ── TICKER ── */}
      <div className="ticker-strip">
        <div className="ticker-inner">
          {[tickerText, tickerText].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="hero">
        <section className="hero">
  <img src={heroImg} alt="Intrusion X Banner" className="hero-img" />
</section>
        <div className="hero-pills">
          <span className="hero-pill"> 36-Hour Hackathon</span>
          <span className="hero-pill"> CSED Block (AB-11), GLA University</span>
          <span className="hero-pill"> April 10–11, 2026</span>
          <span className="hero-pill">Mentored by Dr. Asheesh Tiwari</span>
        </div>
        <div className="hero-rule" />
        <p className="hero-desc">
          Intrusion X (Second Edition) was an intensive 36-hour cybersecurity hackathon organized by
          the Cyberonites Club, designed to simulate real-world cyber environments. Teams competed
          across domains spanning AI/ML, Cloud Security, Web Applications, Blockchain, and IoT —
          pushing the boundaries of strategic thinking, rapid decision-making, and technical execution
          under pressure.
        </p>
      </section>

      {/* ── STATS ── */}
      <section className="stats">
        {[
          { number: "991+", label: "Registrations" },
          { number: "354",  label: "Teams" },
          { number: "67",   label: "Finalists" },
          { number: "36H",  label: "Hackathon" },
        ].map(({ number, label }) => (
          <div className="stat" key={label}>
            <span className="stat-number">{number}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section surface">
        <h2>ABOUT</h2>
        <p>
          Organized by the Cyberonites Club at GLA University under the mentorship of
          Dr. Asheesh Tiwari, Intrusion X (Second Edition) brought together 354 teams and
          991+ participants from top institutions across India for a high-intensity 36-hour
          cybersecurity hackathon.
        </p>
        <p>
          The event was designed to foster innovation, collaboration, and real-world
          problem-solving across cutting-edge domains. What set Intrusion X apart was its
          simulation of genuine cyber environments — participants were required to think
          critically, adapt quickly, and execute efficiently under time pressure, mirroring
          actual industry scenarios.
        </p>
        <p>
          The inaugural ceremony on 10 April 2026 was graced by Dr. Ashok Bhansali (Dean, IET),
          Dr. Sandeep Kumar Rathore (HoD, CEA), along with industry guests and alumni who set
          an enthusiastic and motivating tone for the entire event.
        </p>
      </section>

      {/* ── SPONSOR CAROUSEL ── */}
      <section id="sponsors" className="sponsor-carousel-section">
        <div className="carousel-meta">
          <div className="carousel-stat">
            <span className="carousel-stat-label">  Total Sponsor Value</span>
            <span className="carousel-stat-val">₹21,10,747</span>
          </div>
          <div className="carousel-divider" />
          <div className="carousel-stat">
            <span className="carousel-stat-label">  Cash Prize Pool</span>
            <span className="carousel-stat-val">₹30,000</span>
          </div>
        </div>

        {/* Infinite auto-scrolling logo strip — pauses on hover */}
        <div className="carousel-track-wrap">
          <div className="carousel-track">
            {[...SPONSORS, ...SPONSORS].map(({ sn, name, logo: spLogo, url }, i) => (
              <a
                key={sn + i}
                className="carousel-logo-card"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${name}`}
              >
                <img
                  src={spLogo}
                  alt={name}
                  className="carousel-sponsor-logo"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENT STRUCTURE ── */}
      <section id="rounds" className="section">
        <span className="section-tag">  Event Structure</span>
        <h2>ROUNDS</h2>
        <p>
          The competition was structured across three stages ensuring idea quality, technical
          depth, and real-world applicability before teams reached the final hackathon floor.
        </p>
        <div className="rounds-grid">
          {[
            {
              index: "Round 01",
              title: "Idea Submission — PPT Round",
              date: null,
              bullets: [
                "Teams submitted detailed presentations outlining their problem understanding and proposed solution.",
                "Evaluated on clarity, innovation, and feasibility.",
                "354 teams competed in this stage.",
              ],
            },
            {
              index: "Round 02",
              title: "Pre-Screening Round",
              date: "25 March 2026",
              bullets: [
                "Shortlisted teams refined ideas and validated technical approaches.",
                "Focus on feasibility and execution clarity.",
                "Top teams advanced to the final hackathon.",
              ],
            },
            {
              index: "Final Round",
              title: "36-Hour On-Campus Hackathon",
              date: "10–11 April 2026",
              bullets: [
                "67 qualified teams competed on-campus.",
                "Teams built working or semi-functional prototypes.",
                "Final evaluation: innovation, technical depth, execution, and real-world applicability.",
              ],
            },
          ].map(({ index, title, date, bullets }) => (
            <div className="round-card" key={index}>
              <span className="round-index">{index}</span>
              <div className="round-title">{title}</div>
              {date && <div className="round-date">{date}</div>}
              <ul>
                {bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── PARTICIPATION ── */}
      <section className="section surface">
        <h2>REACH</h2>
        <div className="two-col">
          <div>
            <p>
              Intrusion X SE drew participants from across India representing 15+ universities and
              colleges. The diversity of institutions created a competitive yet collaborative atmosphere.
            </p>
            <p>
              Of the 67 finalist teams, 52 were internal GLA University teams and 15 were
              external teams from institutions including Chandigarh University, Galgotias,
              LPU, SRMIST, and more.
            </p>
          </div>
          <div>
            {[
              { label: "Total Registrations", val: "991+" },
              { label: "Total Teams",          val: "354" },
              { label: "Finalist Teams",        val: "67" },
              { label: "External Teams",        val: "15" },
              { label: "Internal Teams (GLA)",  val: "52" },
            ].map(({ label, val }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #e5e5e5" }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#888" }}>{label}</span>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: "#000", letterSpacing: "0.02em" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="section-rule" />
        <div className="institutions-wrap">
          {INSTITUTIONS.map(i => <span className="inst-tag" key={i}>{i}</span>)}
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="section">
        <span className="section-tag">  Event Highlights</span>
        <h2>HIGHLIGHTS</h2>
        <ul className="highlights-list">
          {HIGHLIGHTS.map((h, i) => (
            <li key={i}>
              <span className="hi-num">{String(i + 1).padStart(2, "0")}</span>
              {h}
            </li>
          ))}
        </ul>
      </section>

      <section className="section surface">
  <h2>GUESTS</h2>
  <p>
    Esteemed industry professionals and alumni enriched the event with real-world insights,
    mentorship, and evaluation expertise.
  </p>

  <div className="guests-grid">
    {INDUSTRY_GUESTS.map(({ name, org, img }) => (
      <div className="guest-card" key={name}>
        <img src={img} alt={name} className="guest-img" />
        <div className="guest-name">{name}</div>
        <div className="guest-org">{org}</div>
      </div>
    ))}
  </div>

  <div className="section-rule" />
  <h2>Alumni</h2>
  <div className="guests-grid">
    {ALUMNI.map(({ name, org, img }) => (
      <div className="guest-card" key={name}>
        <img src={img} alt={name} className="guest-img" />
        <div className="guest-name">{name}</div>
        <div className="guest-org">{org}</div>
      </div>
    ))}
  
        </div>
      </section>

      {/* ── MENTORS & FACULTY ── */}
      <section className="section">
        
        <h2>MENTORS</h2>
        <p>
          The following faculty members and mentors played a key role in the successful
          planning, coordination, and execution of Intrusion X SE.
        </p>
        <div className="people-grid">
          {MENTORS.map(({ name, role }) => (
            <div className="person-card" key={name}>
              <div className="person-name">{name}</div>
              <div className="person-role">{role}</div>
            </div>
          ))}
        </div>
        <div className="section-rule" />
        <span className="section-tag"> Evaluators & Judges</span>
        <div className="people-grid" style={{ marginTop: 0 }}>
          {EVALUATORS.map(name => (
            <div className="person-card" key={name}>
              <div className="person-name">{name}</div>
              <div className="person-role">Judge / Evaluator</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WINNERS ── */}
      <section id="winners" className="section surface">
        <h2>WINNERS</h2>
        <p>
          The top-performing teams were felicitated with cash prizes, certifications from
          HackHalt (ISO 27001), SecOps Group, Sturtle Security, premium platform access,
          medals, T-shirts, and goodies.
        </p>
        <div className="winners-grid">
          {TOP3.map(({ pos, name, prize, perks, image }) => (
  <div className="winner-card top" key={name}>
    
    <img src={image} alt={name} className="winner-img" />

    <span className="winner-pos">{pos}</span>
    
    <div className="winner-name">{name}</div>
    
    <div className={`winner-prize${pos.includes("01") ? " red" : ""}`}>
      {prize}
    </div>

    <div className="winner-perks">{perks}</div>
  </div>
))}
        </div>
        <div className="section-rule" />
        <div className="leaderboard">
          {REST.map(({ pos, name }) => (
            <div className="lb-row" key={name}>
              <span className="lb-num">{pos}</span>
              <span className="lb-team">{name}</span>
              <span className="lb-badge">Felicitated</span>
            </div>
          ))}
        </div>
      </section>

      
      {/* ── IMPACT ── */}
      <section className="section">
        <span className="section-tag">  Impact & Conclusion</span>
        <h2>IMPACT</h2>
        <p>
          Intrusion X (Second Edition) successfully bridged the gap between academic learning
          and real-world cybersecurity challenges. Participants gained hands-on experience,
          industry exposure, and deeper insight into modern cyber threats across AI/ML, Cloud,
          Blockchain, and IoT domains.
        </p>
        <p>
          The event also surfaced key areas for improvement — financial management, team
          coordination, logistics, and communication — which will be addressed in future
          editions to make Intrusion X even more impactful.
        </p>
        <div className="section-rule" />
        <span className="red-tag">EXECUTE OR BE EXECUTED</span>
      </section>

      <section id="gallery" className="section surface">
  <h2>GALLERY</h2>
  <p>Hover to focus on moments from Intrusion X.</p>

<div className="focus-gallery">
  <div className="focus-card"><img src={img1} alt="img1" /></div>
  <div className="focus-card"><img src={img2} alt="img2" /></div>
  <div className="focus-card"><img src={img3} alt="img3" /></div>
  <div className="focus-card"><img src={img4} alt="img4" /></div>
  <div className="focus-card"><img src={img5} alt="img5" /></div>
  <div className="focus-card"><img src={img6} alt="img6" /></div>
  <div className="focus-card"><img src={img7} alt="img7" /></div>
  <div className="focus-card"><img src={img8} alt="img8" /></div>
  <div className="focus-card"><img src={img9} alt="img9" /></div>
  <div className="focus-card"><img src={img10} alt="img10" /></div>
  <div className="focus-card"><img src={img11} alt="img11" /></div>
  <div className="focus-card"><img src={img12} alt="img12" /></div>
  <div className="focus-card"><img src={img13} alt="img13" /></div>
  <div className="focus-card"><img src={img14} alt="img14" /></div>
  <div className="focus-card"><img src={img15} alt="img15" /></div>
  <div className="focus-card"><img src={img16} alt="img16" /></div>
  <div className="focus-card"><img src={img17} alt="img17" /></div>
  <div className="focus-card"><img src={img18} alt="img18" /></div>
  <div className="focus-card"><img src={img19} alt="img19" /></div>
  <div className="focus-card"><img src={img20} alt="img20" /></div>
</div>
</section>
      {/* ── FOOTER ── */}
      <footer>
        <span className="footer-left">
          Cyberonites Club &nbsp;·&nbsp; GLA University, Mathura &nbsp;·&nbsp; IntrusionX SE © 2026
        </span>
        <span className="footer-right">
          BEST OF LUCK — <span className="accent">EXECUTE OR BE EXECUTED</span>
        </span>
      </footer>

    </div>
  );
}