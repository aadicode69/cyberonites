import React, { useState, useEffect, useRef } from 'react';
import './EscalateX.css';
import Logo from '../../img/escalate-v2/logo.png';

// Import Partner Images
import pirates from '../../img/escalate-v2/partners/0x0pirates_logo.jpg';
import bsidesJ from '../../img/escalate-v2/partners/BSidesJ.jpg';
import cybersurge from '../../img/escalate-v2/partners/cybersurge.png';
import dcgGurugram from '../../img/escalate-v2/partners/dcg_gurugram_logo.jpg';
import eventsinfo from '../../img/escalate-v2/partners/eventsinfo.jpg';
import hackhalt from '../../img/escalate-v2/partners/hackhalt.jpeg';
import hackloop from '../../img/escalate-v2/partners/hackloop-logo.png';
import leninTree from '../../img/escalate-v2/partners/lenint_tree.png';
import partnerLogo from '../../img/escalate-v2/partners/logo.jpg';

// Import Sponsor Images
import abhibus from '../../img/escalate-v2/sponsor/abhibus.jpg';
import bootcoding from '../../img/escalate-v2/sponsor/Bootcoding.png';
import burgerjn from '../../img/escalate-v2/sponsor/burgerjn.png';
import csata from '../../img/escalate-v2/sponsor/csata.jpg';
import ctf7 from '../../img/escalate-v2/sponsor/CTF7.png';
import cyberfratnextgen from '../../img/escalate-v2/sponsor/Cyberfratnextgen.png';
import defronix from '../../img/escalate-v2/sponsor/defronix.jpg';
import fizzify from '../../img/escalate-v2/sponsor/Fizzify.webp';
import givemycerti from '../../img/escalate-v2/sponsor/givemycerti.png';
import interviewbuddy from '../../img/escalate-v2/sponsor/interviewbuddy.png';
import marketmafia from '../../img/escalate-v2/sponsor/marketmafia.png';
import modernSecurity from '../../img/escalate-v2/sponsor/ModernSecurity.jpg';
import offSec from '../../img/escalate-v2/sponsor/OffSec.png';
import osen from '../../img/escalate-v2/sponsor/OSEN.png';
import secOps from '../../img/escalate-v2/sponsor/SecOps.png';
import squareBoat from '../../img/escalate-v2/sponsor/SquareBoat.png';
import unstop from '../../img/escalate-v2/sponsor/unstop.png';

// Import other images
import featuredEvent from '../../img/escalate-v2/featured-event.jpg';
import mentorImage from '../../img/escalate-v2/mentor-dr-asheesh-tiwari.jpg';

// Village speakers
import pulkitSinghImg from '../../img/escalate-v2/speakers/pulkit_singh.jpg';
import kaushikPalImg from '../../img/escalate-v2/speakers/kaushik_pal.jpg';
import agrahJainImg from '../../img/escalate-v2/speakers/agrah_jain.jpg';
import kanishkBhadauriaImg from '../../img/escalate-v2/speakers/kanishk_bhadauria.jpg';
import abhijeetSinghImg from '../../img/escalate-v2/speakers/abhijeet_singh.jpg';

// Panelists
import himanshuThakurPanelistImg from '../../img/escalate-v2/panelists/himanshu_thakur.jpg';
import chiragSinglaPanelistImg from '../../img/escalate-v2/panelists/chirag_singla.jpg';
import agrahJainPanelistImg from '../../img/escalate-v2/panelists/agrah_jain.jpg';
import vinayakChaturvediImg from '../../img/escalate-v2/panelists/vinayak_chaturvedi.jpg';
import kaushikPalPanelistImg from '../../img/escalate-v2/panelists/kaushik_pal.jpg';
import pulkitSinghPanelistImg from '../../img/escalate-v2/panelists/pulkit_singh.jpg';
import tamannaAgrawalPanelistImg from '../../img/escalate-v2/panelists/tamanna_agrawal.jpg';

// CTF Winner Team Images
import binaryTeamImg from '../../img/escalate-v2/ctf-winners/binary.jpg';
import blitzTeamImg from '../../img/escalate-v2/ctf-winners/blitz.jpg';
import houseStarkTeamImg from '../../img/escalate-v2/ctf-winners/house-stark.jpg';

// Distinguished speakers
import nipunJaiswalImg from '../../img/escalate-v2/speakers/nipun-jaiswal.jpg';
import himanshuThakurImg from '../../img/escalate-v2/speakers/himanshu_thakur.jpg';
import asheeshTiwariImg from '../../img/Team/asheesh_sir.webp';
import chiragSinglaImg from '../../img/escalate-v2/speakers/chirag_singla.jpg';
import pawanSehlotImg from '../../img/escalate-v2/speakers/pawan-sehlot.jpg';
import tamannaAgrawalImg from '../../img/escalate-v2/speakers/tamanna-agrawal.jpg';

// Gallery Images - ADD THESE IMPORTS
import gallery1 from '../../img/escalate-v2/gallery/event-1.jpg';
import gallery2 from '../../img/escalate-v2/gallery/event-2.jpg';
import gallery3 from '../../img/escalate-v2/gallery/event-3.jpg';
import gallery4 from '../../img/escalate-v2/gallery/event-4.jpg';
import gallery5 from '../../img/escalate-v2/gallery/event-5.jpg';
import gallery6 from '../../img/escalate-v2/gallery/event-6.jpg';
import gallery7 from '../../img/escalate-v2/gallery/event-7.jpg';
import gallery8 from '../../img/escalate-v2/gallery/event-8.jpg';



const EscalateXOverview = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [terminalText, setTerminalText] = useState('');
  const fullCommand = '$ ./launch_event --mode=cybersecurity --event=escalate-x-v2';

  // Create refs for each section
  const overviewRef = useRef(null);
  const villagesRef = useRef(null);
  const speakersRef = useRef(null);
  const winnersRef = useRef(null);
  const outcomesRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullCommand.length) {
        setTerminalText(fullCommand.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [fullCommand.length]);

  const scrollToSection = (sectionRef, tabName) => {
    setActiveTab(tabName);
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Partners Logos Array
  const partnersLogos = [
    { src: bsidesJ, alt: 'BSides Jaipur' },
    { src: cybersurge, alt: 'Cybersurge' },
    { src: dcgGurugram, alt: 'DCG Gurugram' },
    { src: eventsinfo, alt: 'EventsInfo' },
    { src: hackhalt, alt: 'HackHalt' },
    { src: hackloop, alt: 'HackLoop' },
    { src: leninTree, alt: 'Lenin Tree' },
    { src: partnerLogo, alt: 'Partner Logo' },
    { src: pirates, alt: '0x0pirates' }
  ];

  // Sponsors Logos Array
  const sponsorsLogos = [
    { src: abhibus, alt: 'Abhibus' },
    { src: bootcoding, alt: 'Bootcoding' },
    { src: burgerjn, alt: 'Burger Junction' },
    { src: csata, alt: 'CSATA' },
    { src: ctf7, alt: 'CTF7' },
    { src: cyberfratnextgen, alt: 'CyberFrat NextGen' },
    { src: defronix, alt: 'Defronix' },
    { src: fizzify, alt: 'Fizzify' },
    { src: givemycerti, alt: 'Give My Certificate' },
    { src: interviewbuddy, alt: 'Interview Buddy' },
    { src: marketmafia, alt: 'Market Mafia' },
    { src: modernSecurity, alt: 'Modern Security' },
    { src: offSec, alt: 'OffSec' },
    { src: osen, alt: 'OSEN' },
    { src: secOps, alt: 'SecOps Group' },
    { src: squareBoat, alt: 'SquareBoat' },
    { src: unstop, alt: 'Unstop' }
  ];

  const stats = [
    { icon: '👥', value: '324', label: 'Total Registrations' },
    { icon: '🏢', value: '66', label: 'Teams Participated' },
    { icon: '🏆', value: '₹25,000', label: 'Prize Pool' },
    { icon: '⏱️', value: '2', label: 'Days Event' }
  ];

  const highlights = [
    'Interactive Knowledge Villages',
    'Expert Panel Discussion',
    'Hands-on CTF Competition',
    'Real-world Cybersecurity Scenarios',
    'Industry Professional Sessions',
    'Networking with 11 Alumni',
    'Certificates Worth ₹1,83,000'
  ];

  const villages = [
    {
      name: 'OSINT',
      speaker: 'Mr. Pulkit Singh',
      company: 'Deloitte USI',
      description: 'Open Source Intelligence gathering and analysis techniques',
      icon: '🔍',
      image: pulkitSinghImg
    },
    {
      name: 'Malware Analysis',
      speaker: 'Mr. Kaushik Pal',
      company: 'CloudSEK',
      description: 'Understanding malware evolution and defense strategies',
      icon: '🦠',
      image: kaushikPalImg
    },
    {
      name: 'Cloud Security',
      speaker: 'Mr. Agrah Jain',
      company: 'Wheelseye',
      description: 'Cloud security frameworks and shared responsibility model',
      icon: '☁️',
      image: agrahJainImg
    },
    {
      name: 'SOC Operations',
      speaker: 'Mr. Kanishk Bhadauria',
      company: 'Industry Expert',
      description: 'Security Operations Centre real-time threat monitoring',
      icon: '🛡️',
      image: kanishkBhadauriaImg
    },
    {
      name: 'Offensive Operations',
      speaker: 'Mr. Abhijeet Singh',
      company: 'Industry Expert',
      description: 'Ethical penetration testing and red team exercises',
      icon: '⚔️',
      image: abhijeetSinghImg
    }
  ];

  const speakers = [
    {
      name: 'Mr. Nipun Jaiswal',
      role: 'Senior Director, Offensive Security',
      company: 'NTT Data',
      session: 'Chief Guest',
      icon: '👨‍💼',
      image: nipunJaiswalImg
    },
    {
      name: 'Mr. Himanshu Thakur',
      role: 'Director, Cyber Security',
      company: 'Nangia Group',
      session: 'Guest of Honour',
      icon: '👨‍💻',
      image: himanshuThakurImg
    },
    {
      name: 'Dr. Asheesh Tiwari',
      role: 'Club Mentor',
      company: 'GLA University',
      session: 'Event Mentor',
      icon: '👨‍🏫',
      image: asheeshTiwariImg
    },
    {
      name: 'Mr. Chirag Singla',
      role: 'Threat Researcher',
      company: 'Zscaler',
      session: 'Alumni Speaker',
      icon: '👨‍💻',
      image: chiragSinglaImg
    },
    {
      name: 'Mr. Pawan Sehlot',
      role: 'Senior Cyber Crime Investigator',
      company: 'UP Police',
      session: 'Law Enforcement',
      icon: '👮',
      image: pawanSehlotImg
    },
    {
      name: 'Ms. Tamanna Agrawal',
      role: 'Assistant Manager, Cyber Security',
      company: 'CyberFrat',
      session: 'Panel Moderator',
      icon: '👩‍💼',
      image: tamannaAgrawalImg
    }
  ];

  const panelists = [
    { name: 'Mr. Himanshu Thakur', designation: 'Director, Nangia Group', image: himanshuThakurPanelistImg },
    { name: 'Mr. Chirag Singla', designation: 'Threat Researcher, Zscaler', image: chiragSinglaPanelistImg },
    { name: 'Mr. Agrah Jain', designation: 'Head Cyber Security, Wheelseye', image: agrahJainPanelistImg },
    { name: 'Mr. Vinayak Chaturvedi', designation: 'Threat Analyst, Sophos', image: vinayakChaturvediImg },
    { name: 'Mr. Kaushik Pal', designation: 'Threat Researcher, CloudSEK', image: kaushikPalPanelistImg },
    { name: 'Mr. Pulkit Singh', designation: 'Solution Delivery Lead, Deloitte USI', image: pulkitSinghPanelistImg }
  ];

  const moderator = {
    name: 'Ms. Tamanna Agrawal',
    designation: 'Assistant Manager, Cyber Security',
    company: 'CyberFrat',
    image: tamannaAgrawalPanelistImg
  };

  const ctfWinners = [
    {
      position: '1st',
      team: 'Binary',
      prize: '₹12,000',
      icon: '🥇',
      image: binaryTeamImg
    },
    {
      position: '2nd',
      team: 'Blitz',
      prize: '₹8,000',
      icon: '🥈',
      image: blitzTeamImg
    },
    {
      position: '3rd',
      team: 'House_Stark',
      prize: '₹5,000',
      icon: '🥉',
      image: houseStarkTeamImg
    },
    {
      position: '4th',
      team: 'DigitalGhost',
      prize: 'Certificates',
      icon: '🏅'
    },
    {
      position: '5th',
      team: '404 Not Found',
      prize: 'Certificates',
      icon: '🏅'
    }
  ];

  const outcomes = [
    'Mr. Nipun Jaswal gifted his authored books "Mastering Network Forensics" and offered recruitment opportunities',
    'Mr. Himanshu Thakur announced OT Security recruitment plans',
    'Mr. Kanishka Bhadauria offered positions for 4th-year Cyber Security students',
    'Mr. Pawan Sehlot proposed paid internships in government agencies and event funding support',
    'SecOps Group provided 9 certification vouchers worth ₹1,83,000',
    'CyberFrat offered Deloitte Hiring Training and faculty training programs',
    '11 Alumni shared professional experiences and career guidance',
    'Multiple companies announced upcoming hiring opportunities'
  ];



  const galleryImages = [
  { 
    id: 1, 
    src: gallery1, 
    caption: 'Knowledge Villages Session', 
    category: 'Day 1' 
  },
  { 
    id: 2, 
    src: gallery2, 
    caption: 'Panel Discussion - Future of Cybersecurity', 
    category: 'Day 1' 
  },
  { 
    id: 3, 
    src: gallery3, 
    caption: 'Expert Speaker Session', 
    category: 'Day 1' 
  },
  { 
    id: 4, 
    src: gallery4, 
    caption: 'CTF Competition in Progress', 
    category: 'Day 2' 
  },
  { 
    id: 5, 
    src: gallery5, 
    caption: 'SI Session', 
    category: 'Session' 
  },
  { 
    id: 6, 
    src: gallery6, 
    caption: 'ESCALATE X V2', 
    category: 'Day 1' 
  },
  { 
    id: 7, 
    src: gallery7, 
    caption: 'Cyberonites Team with Alumni', 
    category: 'Day 2' 
  },
  { 
    id: 8, 
    src: gallery8, 
    caption: 'Closing Ceremony & Prize Distribution', 
    category: 'Day 2' 
  }
];


  return (
    <div className="escalate-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content-wrapper">
          <div className="hero-line-1">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">root@cyberonites:~#</div>
                <div className="terminal-command">{terminalText}<span className="cursor">|</span></div>
              </div>
            </div>
          </div>

          <h1 className="main-title">
            ESCALATE <img src={Logo} alt="X" className="logo-image" /> V2
          </h1>

          <p className="subtitle">
            <span className="bracket">\\</span> A GRAND CYBERSECURITY SYMPOSIUM BY CYBERONITES CLUB <span className="bracket">//</span>
          </p>

          <div className="hero-line-4">
            <p className="event-date">
              <span className="bracket">\\</span> NOVEMBER 8-9, 2025 <span className="bracket">//</span>
            </p>
            <p className="event-venue">
              <span className="bracket">\\</span> GLA UNIVERSITY, MATHURA <span className="bracket">//</span>
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="nav-tabs sticky-nav">
        <button className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => scrollToSection(overviewRef, 'overview')}>
          <span className="tab-icon">▶</span> OVERVIEW
        </button>
        <button className={`nav-tab ${activeTab === 'villages' ? 'active' : ''}`} onClick={() => scrollToSection(villagesRef, 'villages')}>
          <span className="tab-icon">▶</span> VILLAGES
        </button>
        <button className={`nav-tab ${activeTab === 'speakers' ? 'active' : ''}`} onClick={() => scrollToSection(speakersRef, 'speakers')}>
          <span className="tab-icon">▶</span> SPEAKERS
        </button>
        <button className={`nav-tab ${activeTab === 'winners' ? 'active' : ''}`} onClick={() => scrollToSection(winnersRef, 'winners')}>
          <span className="tab-icon">▶</span> WINNERS
        </button>
        <button className={`nav-tab ${activeTab === 'outcomes' ? 'active' : ''}`} onClick={() => scrollToSection(outcomesRef, 'outcomes')}>
          <span className="tab-icon">▶</span> OUTCOMES
        </button>
        <button className={`nav-tab ${activeTab === 'gallery' ? 'active' : ''}`} onClick={() => scrollToSection(galleryRef, 'gallery')}>
          <span className="tab-icon">▶</span> GALLERY
        </button>
      </div>

      {/* Stats Section */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-border"></div>
          </div>
        ))}
      </div>

      {/* Sponsors & Partners Section */}
      <div className="sponsors-partners-section">
        <div className="sponsors-partners-header">
          <span className="bracket-left">//</span>
          <span className="header-text">OUR PARTNERS & SPONSORS</span>
          <span className="bracket-right">//</span>
        </div>

        <div className="sponsors-row">
          <h3 className="row-title">OUR PARTNERS</h3>
          <div className="logos-scroll-container">
            <div className="logos-scroll-track">
              <div className="logos-set">
                {partnersLogos.map((logo, index) => (
                  <img key={index} src={logo.src} alt={logo.alt} />
                ))}
              </div>
              <div className="logos-set" aria-hidden="true">
                {partnersLogos.map((logo, index) => (
                  <img key={`dup-${index}`} src={logo.src} alt={logo.alt} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="sponsors-row">
          <h3 className="row-title">OUR SPONSORS</h3>
          <div className="logos-scroll-container">
            <div className="logos-scroll-track reverse">
              <div className="logos-set">
                {sponsorsLogos.map((logo, index) => (
                  <img key={index} src={logo.src} alt={logo.alt} />
                ))}
              </div>
              <div className="logos-set" aria-hidden="true">
                {sponsorsLogos.map((logo, index) => (
                  <img key={`dup-${index}`} src={logo.src} alt={logo.alt} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div ref={overviewRef} className="section mission-section scroll-section">
        <div className="section-header">
          <span className="prompt">▶_</span> MISSION BRIEFING
          <div className="header-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
        </div>

        <div className="featured-event-image">
          <div className="featured-image-frame">
            <div className="corner-accent top-left"></div>
            <div className="corner-accent top-right"></div>
            <div className="corner-accent bottom-left"></div>
            <div className="corner-accent bottom-right"></div>
            
            <img src={featuredEvent} alt="EscalateX V2 Main Event" className="featured-img" />
            <div className="featured-image-overlay">
              <div className="overlay-text">
                <h3>EscalateX V2 - Grand Cybersecurity Symposium</h3>
                <p>324 Participants | 66 Teams | 11 Alumni Speakers</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="content-grid">
          <div className="objective-box">
            <h3>OBJECTIVE</h3>
            <p>EscalateX V2 was a grand two-day cybersecurity symposium organized by the Cyberonites Club under the mentorship of Dr. Asheesh Tiwari at GLA University. The event aimed to promote practical learning, awareness, and innovation in the field of cybersecurity through interactive sessions, expert talks, and competitive challenges.</p>
            <p>The first day hosted interactive Knowledge Villages and expert sessions, focusing on real-world cybersecurity concepts including Malware Analysis, OSINT, Cloud Security, Offensive Operations, and Security Operations Centre (SOC). Students had the opportunity to interact with industry professionals and participate in hands-on workshops.</p>
            <p>The second day witnessed the much-anticipated Capture The Flag (CTF) Challenge, where participants showcased their cybersecurity expertise across domains like web exploitation, cryptography, reverse engineering, and forensics. The event successfully bridged the gap between theoretical knowledge and real-world cybersecurity practices.</p>
          </div>

          <div className="highlights-box">
            <h3>EVENT HIGHLIGHTS</h3>
            <ul className="highlights-list">
              {highlights.map((highlight, index) => (
                <li key={index}><span className="bullet">◆</span> {highlight}</li>
              ))}
            </ul>
            
            <div className="mentor-section">
              <h4>Club Mentor</h4>
              <div className="mentor-card">
                <div className="mentor-image-container">
                  <img src={mentorImage} alt="Dr. Asheesh Tiwari" className="mentor-photo" />
                </div>
                <div className="mentor-details">
                  <p className="mentor-name">Dr. Asheesh Tiwari</p>
                  <p className="mentor-dept">Department of Computer Engineering & Applications</p>
                  <p className="mentor-uni">GLA University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Villages Section */}
      <div ref={villagesRef} className="section villages-section scroll-section">
        <div className="section-header">
          <span className="prompt">▶_</span> KNOWLEDGE VILLAGES
        </div>

        <div className="villages-grid">
          {villages.map((village, index) => (
            <div key={index} className="village-card">
              <div className="village-icon">{village.icon}</div>
              
              <div className="speaker-image-container">
                <img
                  src={village.image}
                  alt={village.speaker}
                  className="speaker-photo"
                />
              </div>
              
              <h4>{village.name}</h4>
              <p className="speaker-name">{village.speaker}</p>
              <p className="speaker-company">{village.company}</p>
              <p className="village-desc">{village.description}</p>
            </div>
          ))}
        </div>

        {/* Panel Section */}
        <div className="panel-section">
          <h3>Panel Discussion</h3>
          <p className="panel-title">"The Future of Cybersecurity - Threats, Trends, and Talent"</p>
          
          <div className="panel-moderator-card">
            <div className="moderator-badge">MODERATOR</div>
            <div className="moderator-image-container">
              <img src={moderator.image} alt={moderator.name} className="moderator-photo" />
            </div>
            <h4 className="moderator-name">{moderator.name}</h4>
            <p className="moderator-designation">{moderator.designation}</p>
            <p className="moderator-company">{moderator.company}</p>
          </div>

          <div className="panelists-grid">
            {panelists.map((panelist, index) => (
              <div key={index} className="panelist-card">
                <div className="panelist-image-container">
                  <img
                    src={panelist.image}
                    alt={panelist.name}
                    className="panelist-photo"
                  />
                </div>
                <div className="panelist-info">
                  <h5 className="panelist-name">{panelist.name}</h5>
                  <p className="panelist-designation">{panelist.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>

      {/* Speakers Section */}
      <div ref={speakersRef} className="section speakers-section scroll-section">
        <div className="section-header">
          <span className="prompt">▶_</span> DISTINGUISHED SPEAKERS & GUESTS
        </div>
        
        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-card-passport">
              <div className="session-badge">{speaker.session}</div>
              
              <div className="passport-photo-container">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="passport-photo"
                />
              </div>
              
              <div className="speaker-details">
                <h4 className="speaker-name">{speaker.name}</h4>
                <p className="speaker-role">{speaker.role}</p>
                <p className="speaker-company">🏢 {speaker.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* CTF Winners Section */}
            {/* Winners Section */}
      <div ref={winnersRef} className="section winners-section scroll-section">
        <div className="ctf-winners-section">
          <h3 className="ctf-main-heading">CTF Challenge Winners</h3>
          <p className="ctf-subtitle">Top 5 Teams - Capture The Flag Competition</p>
          <div className="ctf-winners">
            {ctfWinners.map((winner, idx) => (
              <div
                key={idx}
                className={
                  "ctf-winner-card" +
                  (winner.position === '1st' ? " first" : winner.position === '2nd' ? " second" : winner.position === '3rd' ? " third" : " rest")
                }
              >
                <div className="ctf-winner-trophy">{winner.icon}</div>
                {winner.image ? (
                  <>
                    <div className="ctf-team-image-container">
                      <img src={winner.image} alt={`Team ${winner.team}`} className="ctf-team-photo" />
                    </div>
                    <h3 className="ctf-position">{winner.position} Place</h3>
                    <h4 className="ctf-team-name">Team {winner.team}</h4>
                    <div className="ctf-winner-prize">{winner.prize}</div>
                  </>
                ) : (
                  <div className="ctf-winner-noimg">
                    <h3 className="ctf-position">{winner.position} Place</h3>
                    <h4 className="ctf-team-name-big">Team {winner.team}</h4>
                    <div className="ctf-winner-prize-big">{winner.prize}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


        <div className="section-header">
          <span className="prompt">▶_</span> COMPETITION HIGHLIGHTS
        </div>
        
        <div className="achievements-section">
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🎯</div>
              <h4>CTF Categories</h4>
              <p>Web Exploitation, Cryptography, Reverse Engineering, Forensics, OSINT, Firmware, Steganography</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">📊</div>
              <h4>Participant Feedback</h4>
              <p>43.5% rated challenges as appropriately difficult, 34.8% found them challenging</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">💡</div>
              <h4>Most Popular</h4>
              <p>Web Exploitation was the most enjoyed category among participants</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h4>Prize Pool</h4>
              <p>₹25,000 distributed among top 3 teams with certificates for all participants</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">👥</div>
              <h4>Participation</h4>
              <p>66 teams competed across multiple challenging cybersecurity domains</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">⏱️</div>
              <h4>Duration</h4>
              <p>Intense 6-hour CTF challenge testing skills in real-world scenarios</p>
            </div>
          </div>
        </div>
      </div>

      {/* Outcomes Section */}
      <div ref={outcomesRef} className="section outcomes-section scroll-section">
        <div className="section-header">
          <span className="prompt">▶_</span> EVENT OUTCOMES & OPPORTUNITIES
        </div>
        
        <div className="outcomes-grid">
          {outcomes.map((outcome, index) => (
            <div key={index} className="outcome-card">
              <div className="outcome-number">{(index + 1).toString().padStart(2, '0')}</div>
              <p>{outcome}</p>
            </div>
          ))}
        </div>

        <div className="impact-section">
          <h3>Total Impact</h3>
          <div className="impact-stats">
            <div className="impact-item">
              <div className="impact-value">₹1,83,000</div>
              <div className="impact-label">Certification Vouchers</div>
            </div>
            <div className="impact-item">
              <div className="impact-value">11</div>
              <div className="impact-label">Alumni Speakers</div>
            </div>
            <div className="impact-item">
              <div className="impact-value">15+</div>
              <div className="impact-label">Industry Experts</div>
            </div>
            <div className="impact-item">
              <div className="impact-value">324</div>
              <div className="impact-label">Total Participants</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div ref={galleryRef} className="section gallery-section scroll-section">
        <div className="section-header">
          <span className="prompt">▶_</span> EVENT GALLERY
          <div className="header-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
        </div>

        <div className="gallery-intro">
          <p>Capturing memorable moments from EscalateX V2 - from intense hacking sessions to team collaborations and celebrations</p>
        </div>

        <div className="gallery-grid">
  {galleryImages.map((image) => (
    <div key={image.id} className="gallery-item">
      <div className="gallery-frame">
        <div className="frame-border"></div>
        <img src={image.src} alt={image.caption} className="gallery-image" />
        <div className="gallery-overlay">
          <div className="gallery-caption">
            <span className="gallery-category">{image.category}</span>
            <h4>{image.caption}</h4>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>CYBERONITES CLUB</h4>
            <p>GLA University</p>
            <p>Department of Computer Engineering & Applications</p>
            <p>Building a community of security professionals</p>
          </div>
          <div className="footer-section">
            <h4>MENTOR</h4>
            <p>Dr. Asheesh Tiwari</p>
            <p>Club Mentor & Faculty Advisor</p>
          </div>
          <div className="footer-section">
            <h4>CONTACT</h4>
            <p>cyberonites@gla.ac.in</p>
            <p>GLA University, Mathura, UP</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Cyberonites Club, GLA University. All rights reserved.</p>
          <p className="terminal-prompt">root@cyberonites:~# █</p>
        </div>
      </div>
    </div>
  );
};

export default EscalateXOverview;
