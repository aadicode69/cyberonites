import React, { useState, useEffect, useRef } from 'react';
import './EscalateX.css';
import Logo from '../../img/escalate-v2/logo.webp';
import pirates from '../../img/escalate-v2/partners/0x0pirates_logo.webp';
import bsidesJ from '../../img/escalate-v2/partners/BSidesJ.webp';
import cybersurge from '../../img/escalate-v2/partners/cybersurge.webp';
import dcgGurugram from '../../img/escalate-v2/partners/dcg_gurugram_logo.webp';
import eventsinfo from '../../img/escalate-v2/partners/eventsinfo.webp';
import hackhalt from '../../img/escalate-v2/partners/hackhalt.webp';
import hackloop from '../../img/escalate-v2/partners/hackloop-logo.webp';
import leninTree from '../../img/escalate-v2/partners/lenint_tree.webp';
import partnerLogo from '../../img/escalate-v2/partners/logo.webp';
import abhibus from '../../img/escalate-v2/sponsor/abhibus.webp';
import bootcoding from '../../img/escalate-v2/sponsor/Bootcoding.webp';
import burgerjn from '../../img/escalate-v2/sponsor/burgerjn.webp';
import csata from '../../img/escalate-v2/sponsor/csata.webp';
import ctf7 from '../../img/escalate-v2/sponsor/CTF7.webp';
import cyberfratnextgen from '../../img/escalate-v2/sponsor/Cyberfratnextgen.webp';
import defronix from '../../img/escalate-v2/sponsor/defronix.webp';
import fizzify from '../../img/escalate-v2/sponsor/Fizzify.webp';
import givemycerti from '../../img/escalate-v2/sponsor/givemycerti.webp';
import interviewbuddy from '../../img/escalate-v2/sponsor/interviewbuddy.webp';
import marketmafia from '../../img/escalate-v2/sponsor/marketmafia.webp';
import modernSecurity from '../../img/escalate-v2/sponsor/ModernSecurity.webp';
import offSec from '../../img/escalate-v2/sponsor/OffSec.webp';
import osen from '../../img/escalate-v2/sponsor/OSEN.webp';
import secOps from '../../img/escalate-v2/sponsor/SecOps.webp';
import squareBoat from '../../img/escalate-v2/sponsor/SquareBoat.webp';
import unstop from '../../img/escalate-v2/sponsor/unstop.webp';
import featuredEvent from '../../img/escalate-v2/featured-event.webp';
import mentorImage from '../../img/escalate-v2/mentor-dr-asheesh-tiwari.webp';
import pulkitSinghImg from '../../img/escalate-v2/speakers/pulkit_singh.webp';
import kaushikPalImg from '../../img/escalate-v2/speakers/kaushik_pal.webp';
import agrahJainImg from '../../img/escalate-v2/speakers/agrah_jain.webp';
import kanishkBhadauriaImg from '../../img/escalate-v2/speakers/kanishk_bhadauria.webp';
import abhijeetSinghImg from '../../img/escalate-v2/speakers/abhijeet_singh.webp';
import himanshuThakurPanelistImg from '../../img/escalate-v2/panelists/himanshu_thakur.webp';
import chiragSinglaPanelistImg from '../../img/escalate-v2/panelists/chirag_singla.webp';
import agrahJainPanelistImg from '../../img/escalate-v2/panelists/agrah_jain.webp';
import vinayakChaturvediImg from '../../img/escalate-v2/panelists/vinayak_chaturvedi.webp';
import kaushikPalPanelistImg from '../../img/escalate-v2/panelists/kaushik_pal.webp';
import pulkitSinghPanelistImg from '../../img/escalate-v2/panelists/pulkit_singh.webp';
import tamannaAgrawalPanelistImg from '../../img/escalate-v2/panelists/tamanna_agrawal.webp';
import binaryTeamImg from '../../img/escalate-v2/ctf-winners/binary.webp';
import blitzTeamImg from '../../img/escalate-v2/ctf-winners/blitz.webp';
import houseStarkTeamImg from '../../img/escalate-v2/ctf-winners/house-stark.webp';
import nipunJaiswalImg from '../../img/escalate-v2/speakers/nipun-jaiswal.webp';
import himanshuThakurImg from '../../img/escalate-v2/speakers/himanshu_thakur.webp';
import gallery1 from '../../img/escalate-v2/gallery/event-1.webp';
import gallery2 from '../../img/escalate-v2/gallery/event-2.webp';
import gallery3 from '../../img/escalate-v2/gallery/event-3.webp';
import gallery4 from '../../img/escalate-v2/gallery/event-4.webp';
import gallery5 from '../../img/escalate-v2/gallery/event-5.webp';
import gallery6 from '../../img/escalate-v2/gallery/event-6.webp';
import gallery7 from '../../img/escalate-v2/gallery/event-7.webp';
import gallery8 from '../../img/escalate-v2/gallery/event-8.webp';
import slide1 from '../../img/escalate-v2/slideshow/s1.webp';
import slide2 from '../../img/escalate-v2/slideshow/s2.webp';
import slide3 from '../../img/escalate-v2/slideshow/s3.webp';
import slide4 from '../../img/escalate-v2/slideshow/s4.webp';
import slide5 from '../../img/escalate-v2/slideshow/s5.webp';
import slide6 from '../../img/escalate-v2/slideshow/s6.webp';
import slide7 from '../../img/escalate-v2/slideshow/s7.webp';
import slide8 from '../../img/escalate-v2/slideshow/s8.webp';
import slide9 from '../../img/escalate-v2/slideshow/s9.webp';
import slide10 from '../../img/escalate-v2/slideshow/s10.webp';
import slide11 from '../../img/escalate-v2/slideshow/s11.webp';
import slide12 from '../../img/escalate-v2/slideshow/s12.webp';
import slide13 from '../../img/escalate-v2/slideshow/s13.webp';
import slide14 from '../../img/escalate-v2/slideshow/s14.webp';
import slide15 from '../../img/escalate-v2/slideshow/s15.webp';
import slide16 from '../../img/escalate-v2/slideshow/s16.webp';
const EscalateXOverview = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [terminalText, setTerminalText] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const fullCommand = '$ ./launch_event --mode=cybersecurity --event=escalate-x-v2';
  const canvasRef = useRef(null);
  const overviewRef = useRef(null);
  const villagesRef = useRef(null);
  const slideshowRef = useRef(null);
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
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = document.documentElement.scrollHeight;

    const particles = [];
    const particleCount = 150;
    const colors = ['#8B5CF6', '#EC4899', '#3B82F6'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.3
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionRef, tabName) => {
    setActiveTab(tabName);
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
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
  const slideshowImages = [
    { id: 1, src: slide1, },
    { id: 2, src: slide2, },
    { id: 3, src: slide3, },
    { id: 4, src: slide4, },
    { id: 5, src: slide5, },
    { id: 6, src: slide6, },
    { id: 7, src: slide7, },
    { id: 8, src: slide8, },
    { id: 9, src: slide9, },
    { id: 10, src: slide10, },
    { id: 11, src: slide11, },
    { id: 12, src: slide12, },
    { id: 13, src: slide13, },
    { id: 14, src: slide14, },
    { id: 15, src: slide15, },
    { id: 16, src: slide16, }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slideshowImages.length]);
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const stats = [
    
    { label: 'Teams Registered - CTF Finale', value: '250+' },
    { label: 'Resgistered - Knowladge villages ', value: '500+' },
    { label: 'Prize Pool', value: '₹5,00,000' },
    { label: 'Days Event', value: '2' }
  ];

  const highlights = [
    'Interactive Knowledge Villages',
    'Expert Panel Discussion',
    'Hands-on CTF Competition',
    'Industry Professional Sessions',
    'Networking with 11 Alumni'
  ];

  const distinguishedGuests = [
    {
      name: 'Mr. Nipun Jaswal',
      role: 'Senior Director, Offensive Security',
      company: 'NTT Data',
      badge: 'Chief Guest',
      image: nipunJaiswalImg
    },
    {
      name: 'Mr. Himanshu Thakur',
      role: 'Director, Cyber Security',
      company: 'Nangia Group',
      badge: 'Guest of Honour',
      image: himanshuThakurImg
    }
  ];

  const villageSpeakers = [
    {
      name: 'OSINT',
      speaker: 'Mr. Pulkit Singh',
      company: 'Deloitte USI',
      designation: 'Solution Delivery Lead',
      image: pulkitSinghImg
    },
    {
      name: 'Malware Analysis',
      speaker: 'Mr. Kaushik Pal',
      company: 'CloudSEK',
      designation: 'Threat Researcher',
      image: kaushikPalImg
    },
    {
      name: 'Cloud Security',
      speaker: 'Mr. Agrah Jain',
      company: 'Wheelseye',
      designation: 'Head Cyber Security',
      image: agrahJainImg
    },
    {
      name: 'SOC Operations',
      speaker: 'Mr. Kanishk Bhadauria',
      company: 'Industry Expert',
      designation: 'Cyber Security Professional',
      image: kanishkBhadauriaImg
    },
    {
      name: 'Offensive Operations',
      speaker: 'Mr. Abhijeet Singh',
      company: 'Industry Expert',
      designation: 'Cyber Security Professional',
      image: abhijeetSinghImg
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
      image: binaryTeamImg,
      details: [
        '₹12,000 Cash Prize',
        'OffSec Certification (1× PG Practice - 6 months) – ₹10,121',
        'SecOps Certification – ₹12,000',
        'Goodies, Swags, Bookmarks etc.',
        'Interview Buddy AI Vouchers – ₹449',
        'Premium Access to AceInt.ai'
      ]
    },
    {
      position: '2nd',
      team: 'Blitz',
      prize: '₹8,000',
      image: blitzTeamImg,
      details: [
        '₹8,000 Cash Prize',
        'OffSec Certification (1× PG Practice - 6 months) – ₹10,121',
        'SecOps Certification – ₹12,000',
        'Goodies, Swags, Bookmarks etc.',
        'Interview Buddy AI Vouchers – ₹449',
        'Premium Access to AceInt.ai'
      ]
    },
    {
      position: '3rd',
      team: 'House_Stark',
      prize: '₹5,000',
      image: houseStarkTeamImg,
      details: [
        '₹5,000 Cash Prize',
        'OffSec Certification (1× PG Practice - 6 months) – ₹10,121',
        'SecOps Certification – ₹12,000',
        'Goodies, Swags, Bookmarks etc.',
        'Interview Buddy AI Vouchers – ₹449',
        'Premium Access to AceInt.ai'
      ]
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
    { id: 1, src: gallery1, caption: 'Inauguration', category: 'Day 1' },
    { id: 2, src: gallery2, caption: 'Inauguration', category: 'Day 1' },
    { id: 3, src: gallery3, caption: 'Alumni Session', category: 'Day 1' },
    { id: 4, src: gallery4, caption: 'CTF Competition in Progress', category: 'Day 2' },
    { id: 5, src: gallery5, caption: 'SI Session', category: 'Session' },
    { id: 6, src: gallery6, caption: 'ESCALATE X V2', category: 'Day 1' },
    { id: 7, src: gallery7, caption: 'Cyberonites Team with Alumni', category: 'Day 2' },
    { id: 8, src: gallery8, caption: 'Closing Ceremony & Prize Distribution', category: 'Day 2' }
  ];

  return (
    <div className="escalate-container">
    
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          background: 'transparent'
        }}
      />

 
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
            <span className="bracket"></span> A GRAND CYBERSECURITY EVENT BY CYBERONITES CLUB <span className="bracket"></span>
          </p>

          <div className="hero-line-4">
            <p className="event-date">
              <span className="bracket"></span> NOVEMBER 8-9, 2025 <span className="bracket"></span>
            </p>
            <p className="event-venue">
              <span className="bracket"></span> GLA UNIVERSITY, MATHURA <span className="bracket"></span>
            </p>
          </div>
        </div>
      </div>
      

      <div className="nav-tabs sticky-nav">
        <button className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => scrollToSection(overviewRef, 'overview')}>
          <span className="tab-icon">▶</span> OVERVIEW
        </button>
        <button className={`nav-tab ${activeTab === 'villages' ? 'active' : ''}`} onClick={() => scrollToSection(villagesRef, 'villages')}>
          <span className="tab-icon">▶</span> VILLAGES
        </button>
        <button className={`nav-tab ${activeTab === 'Slideshow' ? 'active' : ''}`} onClick={() => scrollToSection(slideshowRef, 'Slideshow')}>
          <span className="tab-icon">▶</span> SLIDESHOW
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
    <div className="stats-grid">
  {stats.slice(0, 2).map((stat, index) => (
    <div key={index} className="stat-card">
      <div className="stat-value">{stat.value}</div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-border"></div>
    </div>
  ))}
  
 <p className="subtitle_2">
  <span className="bracket"></span>
  <span className="subtitle_2-text">
    Across both days, 450+ participants were present on-ground.
  </span>
  <span className="bracket"></span>
</p>

  
  {stats.slice(2, 4).map((stat, index) => (
    <div key={index + 2} className="stat-card">
      <div className="stat-value">{stat.value}</div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-border"></div>
    </div>
  ))}
</div>

<a href="/" class="home-button" aria-label="Go to Home">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
</a>


      <div className="sponsors-partners-section">
        <div className="sponsors-partners-header">
          <span className="bracket-left"></span>
          <span className="header-text">OUR PARTNERS & SPONSORS</span>
          <span className="bracket-right"></span>
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


      <div ref={overviewRef} className="section mission-section scroll-section">
        <div className="section-header">
          <span className="prompt">▶ </span> MISSION BRIEFING
          
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
                <h3>EscalateX V2 - Grand Cybersecurity Event</h3>
                
              </div>
            </div>
          </div>
        </div>

        <div className="content-grid">
          <div className="objective-box">
            <h3>OBJECTIVE</h3>
            <p>EscalateX V2 was a grand two-day cybersecurity event organized by the Cyberonites Club under the mentorship of Dr. Asheesh Tiwari at GLA University. The event aimed to promote practical learning, awareness, and innovation in the field of cybersecurity through interactive sessions, expert talks, and competitive challenges.</p>
            <p>The first day hosted interactive Knowledge Villages and expert sessions, focusing on real-world cybersecurity concepts including Malware Analysis, OSINT, Cloud Security, Offensive Operations, and Security Operations Centre (SOC). Students had the opportunity to interact with industry professionals and participate in hands-on workshops.</p>
            <p>The second day witnessed the much-anticipated Capture The Flag (CTF) Challenge, where participants showcased their cybersecurity expertise across domains like web exploitation, cryptography, reverse engineering, and forensics. The event successfully bridged the gap between theoretical knowledge and real-world cybersecurity practices.</p>
          </div>

          <div className="highlights-box">
            

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
            <h3>EVENT HIGHLIGHTS</h3>
            <ul className="highlights-list">
              {highlights.map((highlight, index) => (
                <li key={index}><span className="bullet">◆</span> {highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div ref={villagesRef} className="section villages-section scroll-section">
        <div className="section-header">
          <span className="prompt">▶ </span> KNOWLEDGE VILLAGES
        </div>


        <div className="distinguished-guests-container">
          <h3>Distinguished Guests</h3>
          <div className="distinguished-guests-row">
            {distinguishedGuests.map((guest, index) => (
              <div key={index} className="distinguished-guest-big-card">
                <div className="guest-big-badge">{guest.badge}</div>
                <div className="guest-big-image-container">
                  <img src={guest.image} alt={guest.name} className="guest-big-photo" />
                </div>
                <h4 className="guest-big-name">{guest.name}</h4>
                <p className="guest-big-role">{guest.role}</p>
                <p className="guest-big-company">{guest.company}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="all-speakers-section">
          <h3>Speakers & Village Hosts</h3>
          <p className="all-speakers-subtitle">Expert sessions and knowledge village facilitators</p>

          <div className="all-speakers-grid">

            {villageSpeakers.map((village, index) => (
              <div key={index} className="village-speaker-card">
                <div className="village-badge">{village.name}</div>
                <div className="village-speaker-image-container">
                  <img src={village.image} alt={village.speaker} className="village-speaker-photo" />
                </div>
                <div className="village-speaker-info">
                  <h5 className="village-speaker-name">{village.speaker}</h5>
                  <p className="village-speaker-designation">{village.designation}</p>
                  <p className="village-speaker-company">{village.company}</p>
                  <p className="village-speaker-desc">{village.description}</p>
                </div>
              </div>
            ))}

            
            {otherSpeakers.map((speaker, index) => (
              <div key={index} className="village-speaker-card">
                <div className="village-badge">{speaker.badge}</div>
                <div className="village-speaker-image-container">
                  <img src={speaker.image} alt={speaker.speaker} className="village-speaker-photo" />
                </div>
                <div className="village-speaker-info">
                  <h5 className="village-speaker-name">{speaker.speaker}</h5>
                  <p className="village-speaker-designation">{speaker.designation}</p>
                  <p className="village-speaker-company">{speaker.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
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
                  <img src={panelist.image} alt={panelist.name} className="panelist-photo" />
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

            
      <div ref={slideshowRef} className="auto-slideshow-container">


        <div className="slideshow-header">
          <span className="slideshow-prompt">▶ </span> EVENT SLIDESHOW
          <div className="slideshow-dots-header">
            
          </div>
        </div>

        <div className="slideshow-wrapper">
     
          <div className="slideshow-main">
            <div className="slideshow-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slideshowImages.map((image) => (
                <div key={image.id} className="slideshow-slide">
                  <img src={image.src} alt={image.caption} />
                  <div className="slideshow-overlay">
                    <h4 className="slideshow-caption">{image.caption}</h4>
                    <p className="slideshow-description">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="slideshow-nav prev" onClick={prevSlide}>
              <span>❮</span>
            </button>
            <button className="slideshow-nav next" onClick={nextSlide}>
              <span>❯</span>
            </button>

       
            <div className="slideshow-counter">
              {currentSlide + 1} / {slideshowImages.length}
            </div>
          </div>

          <div className="slideshow-thumbnails">
            {slideshowImages.map((image, index) => (
              <div
                key={image.id}
                className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <img src={image.src} alt={`Thumbnail ${index + 1}`} />
                <div className="thumbnail-overlay"></div>
              </div>
            ))}
          </div>

 
          <div className="slideshow-progress-dots">
            {slideshowImages.map((_, index) => (
              <span
                key={index}
                className={`progress-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div ref={winnersRef} className="section scroll-section">
        <div className="section-header">
          <span className="prompt">▶ </span> WINNERS
        </div>

        <div className="ctf-winners-section">
          <h3 className="ctf-main-heading">CTF Challenge Winners</h3>
          <p className="ctf-subtitle">Top 3 Teams - Capture The Flag Competition</p>

   
          <div className="ctf-top-three">
  
            <div className="ctf-winner-card second">
              <div className="ctf-card-inner">
                <div className="ctf-card-front">
                  <div className="ctf-team-image-container">
                    <img src={ctfWinners[1].image} alt={`Team ${ctfWinners[1].team}`} className="ctf-team-photo" />
                  </div>
                  <h3 className="ctf-position">{ctfWinners[1].position} Place</h3>
                  <h4 className="ctf-team-name">Team {ctfWinners[1].team}</h4>
                  <div className="ctf-winner-prize">{ctfWinners[1].prize}</div>
                  <div className="flip-hint">Hover to see prize details</div>
                </div>
                <div className="ctf-card-back">
                  <h3 className="prize-details-title">{ctfWinners[1].position} Place Prizes</h3>
                  <h4 className="prize-team-name">Team {ctfWinners[1].team}</h4>
                  <ul className="prize-details-list">
                    {ctfWinners[1].details.map((detail, detailIdx) => (
                      <li key={detailIdx}>
                        <span className="prize-bullet">◆</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

       
            <div className="ctf-winner-card first champion">
              <div className="ctf-card-inner">
                <div className="ctf-card-front">
                  <div className="ctf-team-image-container">
                    <img src={ctfWinners[0].image} alt={`Team ${ctfWinners[0].team}`} className="ctf-team-photo" />
                  </div>
                  <h3 className="ctf-position">{ctfWinners[0].position} Place</h3>
                  <h4 className="ctf-team-name">Team {ctfWinners[0].team}</h4>
                  <div className="ctf-winner-prize">{ctfWinners[0].prize}</div>
                  <div className="flip-hint">Hover to see prize details</div>
                </div>
                <div className="ctf-card-back">
                  <h3 className="prize-details-title">{ctfWinners[0].position} Place Prizes</h3>
                  <h4 className="prize-team-name">Team {ctfWinners[0].team}</h4>
                  <ul className="prize-details-list">
                    {ctfWinners[0].details.map((detail, detailIdx) => (
                      <li key={detailIdx}>
                        <span className="prize-bullet">◆</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>


            <div className="ctf-winner-card third">
              <div className="ctf-card-inner">
                <div className="ctf-card-front">
                  <div className="ctf-team-image-container">
                    <img src={ctfWinners[2].image} alt={`Team ${ctfWinners[2].team}`} className="ctf-team-photo" />
                  </div>
                  <h3 className="ctf-position">{ctfWinners[2].position} Place</h3>
                  <h4 className="ctf-team-name">Team {ctfWinners[2].team}</h4>
                  <div className="ctf-winner-prize">{ctfWinners[2].prize}</div>
                  <div className="flip-hint">Hover to see prize details</div>
                </div>
                <div className="ctf-card-back">
                  <h3 className="prize-details-title">{ctfWinners[2].position} Place Prizes</h3>
                  <h4 className="prize-team-name">Team {ctfWinners[2].team}</h4>
                  <ul className="prize-details-list">
                    {ctfWinners[2].details.map((detail, detailIdx) => (
                      <li key={detailIdx}>
                        <span className="prize-bullet">◆</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-header">
          <span className="prompt">▶ </span> COMPETITION HIGHLIGHTS
        </div>

        <div className="achievements-section">
          <div className="achievements-grid">
            <div className="achievement-card">
              <h4>CTF Categories</h4>
              <p>Web Exploitation, Cryptography, Reverse Engineering, Forensics, OSINT, Firmware, Steganography</p>
            </div>
            <div className="achievement-card">
              <h4>Participant Feedback</h4>
              <p>43.5% rated challenges as appropriately difficult, 34.8% found them challenging</p>
            </div>
            <div className="achievement-card">
              <h4>Most Popular</h4>
              <p>Web Exploitation was the most enjoyed category among participants</p>
            </div>
            <div className="achievement-card">
              <h4>Prize Pool</h4>
              <p>The event featured a massive prize pool of ₹5,00,000, including cash prizes and certifications for winners.</p>
            </div>
            <div className="achievement-card">
              <h4>Participation</h4>
              <p>72 teams competed across multiple challenging cybersecurity domains</p>
            </div>
            <div className="achievement-card">
              <h4>Duration</h4>
              <p>Intense 6-hour CTF challenge testing skills in real-world scenarios</p>
            </div>
          </div>
        </div>
      </div>


      <div ref={outcomesRef} className="section outcomes-section scroll-section">
        <div className="section-header">
          <span className="prompt">▶ </span> EVENT OUTCOMES & OPPORTUNITIES
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
              <div className="impact-value">11</div>
              <div className="impact-label">Alumni Speakers</div>
            </div>
            <div className="impact-item">
              <div className="impact-value">15+</div>
              <div className="impact-label">Industry Experts</div>
            </div>
            <div className="impact-item">
              <div className="impact-value">450+</div>
              <div className="impact-label">Total Participants</div>
            </div>
          </div>
        </div>
      </div>

      <div ref={galleryRef} className="section gallery-section scroll-section">
        <div className="section-header">
          <span className="prompt">▶ </span> EVENT GALLERY
         
        </div>

        <div className="gallery-intro">
          <p>Capturing memorable moments from EscalateX V2 - from intense hacking sessions to team collaborations and celebrations</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-hex-container">
              <div className="gallery-card-inner">
                <div className="gallery-card-front">
                  <img src={image.src} alt={image.caption} />
                  <div className="gallery-overlay">
                    <span className="gallery-hover-hint">Hover to see details</span>
                  </div>
                </div>
                <div className="gallery-card-back">
                  <div className="gallery-back-content">
                    <span className="gallery-category-back">{image.category}</span>
                    <h4 className="gallery-caption-back">{image.caption}</h4>
                    <div className="gallery-details">
                      <p className="gallery-event-name">EscalateX V2</p>
                      <p className="gallery-event-date">November 8-9, 2025</p>
                      <p className="gallery-location">GLA University, Mathura</p>
                    </div>
                    <span className="gallery-flip-back-hint">Hover to see image</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
            <p>support@cyberonites.com</p>
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
