import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './IntrusionXv2.css';
import IntrusionXlogo from "../intrusionX2/IntrusionX-2.png";
import CyberoniteNavLogo from "../../img/ps-final.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const IntrusionX = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      moveX: (Math.random() - 0.5) * 100,
      moveY: (Math.random() - 0.5) * 100,
      moveDuration: Math.random() * 20 + 15,
      opacity: Math.random() * 0.5 + 0.5
    }));
    setStars(generatedStars);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const starsElements = document.querySelectorAll('.moving-star');

      starsElements.forEach((star, index) => {
        const speed = (index % 5 + 1) * 0.05;
        const yPos = -(scrolled * speed);
        star.style.transform = `translate(calc(var(--move-x) * var(--progress, 0)), calc(var(--move-y) * var(--progress, 0) + ${yPos}px))`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tracks = [
    {
      id: '01',
      name: 'Cybersecurity',
      desc: 'Threat detection, defense mechanisms, and secure systems',
      color: '#00ff88',
      icon: '🔐'
    },
    {
      id: '02',
      name: 'Blockchain Technology',
      desc: 'Decentralized solutions and secure ledgers',
      color: '#3b82f6',
      icon: '⛓️'
    },
    {
      id: '03',
      name: 'Cloud Computing',
      desc: 'Scalable, resilient, and secure cloud architectures',
      color: '#8b5cf6',
      icon: '☁️'
    },
    {
      id: '04',
      name: 'AI & Machine Learning',
      desc: 'Intelligent automation and data-driven solutions',
      color: '#ec4899',
      icon: '🤖'
    },
    {
      id: '05',
      name: 'Web Applications',
      desc: 'Modern, secure, and scalable web systems',
      color: '#f59e0b',
      icon: '🌐'
    },

  ];
  const timeline = [
    {
      date: '',
      phase: '21st February',
      title: 'Registrations Open',
      desc: 'The gates are open — assemble your crew, sharpen your skills, and lock in your spot. The clock starts now.'
    },
    {
      date: '',
      phase: '11th March',
      title: 'Problem Statements Released',
      desc: 'The challenge domains go live. Study the battlefield, align your strategy, and start forging your solution before the war begins.'
    },
    {
      date: '',
      phase: '27th March',
      title: 'Registration Closes',
      desc: 'Last call to join the battle. No late entries accepted — secure your place before the window shuts forever.'
    },
    {
      date: '',
      phase: '19th – 28th March',
      title: 'Online Evaluation Round',
      desc: 'Prove your worth remotely. Teams submit their ideas and are evaluated on innovation, technical depth, and real-world impact.'
    },
    {
      date: '',
      phase: '30th March',
      title: 'Result Announcement',
      desc: 'The shortlist drops. Only the sharpest minds advance — check if your team has earned a place at the on-site showdown.'
    },

    {
      date: '',
      phase: '2nd April',
      title: 'Real-World PS Released',
      desc: 'The real problems hit. Industry-grade challenges go live for shortlisted teams — this is where theory meets execution.'
    },
    {
      date: '',
      phase: '10th – 11th April',
      title: 'Grand Finale',
      desc: 'The ultimate 36-hour on-site showdown. Build. Break. Defend. The best team walks away as the champion of IntrusionX 2.0.'
    }
  ];
  return (
    <div className="intrusionx-container">

      <div className="stars-background">
        <div className="space-gradient"></div>

        {stars.map(star => (
          <div
            key={star.id}
            className="star moving-star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              '--move-x': `${star.moveX}px`,
              '--move-y': `${star.moveY}px`,
              '--move-duration': `${star.moveDuration}s`,
              opacity: star.opacity
            }}
          />
        ))}

        <div className="shooting-star" style={{ top: '20%', animationDelay: '2s' }}></div>
        <div className="shooting-star" style={{ top: '40%', animationDelay: '8s' }}></div>
        <div className="shooting-star" style={{ top: '60%', animationDelay: '15s' }}></div>
        <div className="shooting-star" style={{ top: '75%', animationDelay: '20s' }}></div>
      </div>


      <nav className="navbar">

        <nav className="navbar">
          <div className="nav-content">

            <div className="nav-logo-left">
              <img
                src={IntrusionXlogo}
                alt="IntrusionX 2.0"
                className="intrusionx-nav-logo"
              />
            </div>

            <div className="nav-links">
              <a href="#home">HOME</a>
              <a href="#about">ABOUT</a>
              <a href="#tracks">TRACKS</a>
              <a href="#timeline">TIMELINE</a>
              <a href="#contact">CONTACT</a>
            </div>

            <div className="nav-logo-right">
              <a href="https://cyberonites.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={CyberoniteNavLogo}
                  alt="Cyberonites Club"
                  className="cyberonites-nav-logo"
                />
              </a>
            </div>
          </div>
        </nav>

      </nav>

      <section id="home" className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            INTRUSIONX<span className="highlight"></span> <span className="version">Second Edition</span>
          </h1>

          <p className="hero-date">APRIL 10-12, 2026</p>
          <p className="hero-subtitle">36-HR CYBERSECURITY HACKATHON</p>



          <div className="cta-buttons">
            <a href="https://unstop.com/hackathons/intrusion-x-second-edition-gla-university-glau-uttar-pradesh-1644953" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Register Now
              </motion.button>
            </a>

          </div>
        </motion.div>
      </section>

      <section id="about" className="about-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <h2 className="section-title">ABOUT THE MISSION</h2>

          <p className="about-text">
            <span className="highlight-text">IntrusionX 2.0</span> is a next-generation technical hackathon designed to bridge
            innovation, industry relevance, and startup culture. The event brings together aspiring developers, security enthusiasts,
            and innovators to solve real-world problems under expert guidance and investor exposure.
          </p>

          <div className="about-cyberonites">
            <h3 className="about-subtitle">About Cyberonites Club</h3>
            <p className="about-desc">
              <span className="highlight-blue">Cyberonites Club</span> is a dynamic and forward-driven community of cybersecurity enthusiasts, professionals, and innovators
              dedicated to strengthening the digital ecosystem. We are committed to advancing cyber resilience through structured
              education, collaborative innovation, and real-world security practices.
            </p>

          </div>

          <div className="vision-mission">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="vm-card"
            >
              <h4> Our Vision</h4>
              <p>To create a secure, resilient, and trustworthy digital world, where knowledge, innovation, and collaboration
                form the first line of defense against emerging cyber threats.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="vm-card"
            >
              <h4> Our Mission</h4>
              <p>To cultivate a future-ready cybersecurity community that promotes continuous learning, encourages hands-on
                skill development, and produces skilled professionals capable of securing tomorrow's digital infrastructure.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="tracks" className="tracks-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          TECHNICAL TRACKS
        </motion.h2>
        <p className="section-subtitle">Participants compete across diverse and high-impact technology domains</p>

        <div className="tracks-swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            className="tracks-swiper"
          >
            {tracks.map((track, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="track-card-glass"
                  style={{
                    '--track-color': track.color,
                    borderColor: track.color
                  }}
                >
                  <div className="glass-shine"></div>
                  <div className="track-glow" style={{ background: `radial-gradient(circle, ${track.color}40, transparent)` }}></div>

                  <div className="track-header-glass">
                    <div className="track-badge-glass" style={{ borderColor: track.color, color: track.color }}>
                      TRACK {track.id}
                    </div>
                    <div className="track-icon-container" style={{ '--icon-color': track.color }}>
                      <div className="track-icon-glass">{track.icon}</div>
                    </div>
                  </div>

                  <h3 className="track-name-glass" style={{ color: track.color }}>{track.name}</h3>
                  <p className="track-desc-glass">{track.desc}</p>



                  <div className="glass-corner tl" style={{ borderColor: track.color }}></div>
                  <div className="glass-corner tr" style={{ borderColor: track.color }}></div>
                  <div className="glass-corner bl" style={{ borderColor: track.color }}></div>
                  <div className="glass-corner br" style={{ borderColor: track.color }}></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>


      <section id="timeline" className="timeline-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          EVENT TIMELINE
        </motion.h2>

        <div className="timeline-container">
          <div className="timeline-line-cyber"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`timeline-item-cyber ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-node">
                <div className="node-outer">
                  <div className="node-inner">
                    <div className="node-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="timeline-card-cyber">
                <div className="card-header-cyber">
                  <span className="phase-tag">{item.phase}</span>
                  <span className="date-tag">{item.date}</span>
                </div>
                <div className="card-border-glow"></div>
                <h3 className="timeline-title-cyber">{item.title}</h3>
                <p className="timeline-desc-cyber">{item.desc}</p>
                <div className="card-corner tl"></div>
                <div className="card-corner tr"></div>
                <div className="card-corner bl"></div>
                <div className="card-corner br"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-content"
        >
          <h2>Ready to Join?</h2>
          <p>Join us for an unforgettable 36-hour journey of innovation, collaboration, and cybersecurity excellence</p>

          <a href="https://unstop.com/hackathons/intrusion-x-second-edition-gla-university-glau-uttar-pradesh-1644953" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-register"
            >
              Register Now
            </motion.button>
          </a>

          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>team@cyberonites.org</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>GLA University, Mathura, Uttar Pradesh</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🌐</span>
              <span>www.cyberonites.org</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/cyberonites-club/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://www.instagram.com/official_cyberonites" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
            <a href="https://cyberonites.com" target="_blank" rel="noopener noreferrer" className="social-link">Website</a>
          </div>

        </motion.div>
      </section>

      <a
        href="https://cyberonites.com"
        className="home-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Go to Cyberonites Home"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
        </svg>
      </a>


    </div >
  );
};

export default IntrusionX;