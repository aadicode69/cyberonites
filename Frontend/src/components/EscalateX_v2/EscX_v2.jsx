import React, { useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {
  FaShieldAlt,
  FaEye,
  FaUsers,
  FaTrophy,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
  FaAward,
  FaBullseye,
  FaRocket,
  FaShieldVirus,
  FaNetworkWired,
} from "react-icons/fa";
import ExcV2MiniLogo from "../../img/escalateXv2/logo.png";
import cyberonitesLogo from "./../../img/cyberonites.png";
import CountdownCard from "./CountdownCard";
import EventDetailsCard from "./EventDetailsCard";
import CustomFooter from "./CustomFooter";
import PosterCard from "./PosterCard";
import TimelineCard from "./TimelineCard";
import SponsorsSection from "./SponsorsSection";
import KnowledgeVillages from "./KnowledgeVillages";
import CTFCategories from "./CTFCategories";
import ContactCard from "./ContactCard";
import "./styles/EscX_v2.css";
import "./styles/layout.css";
import "./styles/hero.css";
import "./styles/cards.css";

const EscX_v2 = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const navToHome = useCallback(() => navigate("/"), [navigate]);
  const navToProblems = useCallback(
    () => navigate("/escalatex-v2-problems"),
    [navigate]
  );
  const navToRegister = useCallback(() => {
    toast.info(
      "EscalateX v2 registrations opening soon! Pre-CTF on October 11th, 2025."
    );
  }, []);

  // Handle logo image error
  const handleLogoError = useCallback((e) => {
    console.warn("Logo image failed to load, using fallback");
    e.target.setAttribute("data-image-failed", "true");
    e.target.style.backgroundImage = "none";
  }, []);

  return (
    <main className="exv2-escalate-container min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Background Particles */}
      <aside className="exv2-bg-particles absolute inset-0 opacity-30" aria-hidden="true"></aside>

      {/* Header */}
      <header className="exv2-header relative z-50 px-6 backdrop-blur-lg bg-black/20 border-b border-white/10">
        <div className="exv2-container max-w-7xl mx-auto">
          <nav className="exv2-header-content flex items-center justify-between">
            <section className="exv2-logo-section">
              <div className="exv2-logo-container flex items-center">
                <img
                  src={cyberonitesLogo}
                  alt="Cyberonites"
                  className="w-20 h-18 rounded-lg"
                />
                {/* <div className="exv2-logo-text">
                  <h1 className="text-xl font-bold text-white exv2-font-cyberjunkies">
                    Cyberonites
                  </h1>
                  <p className="text-sm text-gray-400">
                    Cybersecurity Community
                  </p> */}
                {/* </div> */}
              </div>
            </section>
            <menu className="exv2-nav-buttons flex items-center space-x-4">
              <li>
                <button
                  onClick={navToHome}
                  className="exv2-nav-btn px-4 py-2 text-white hover:text-orange-400 transition-colors duration-300 exv2-font-clouds"
                >
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={navToProblems}
                  className="exv2-nav-btn px-4 py-2 text-white hover:text-orange-400 transition-colors duration-300 exv2-font-clouds"
                >
                  <span>Challenges</span>
                </button>
              </li>
              <li>
                <button
                  onClick={navToRegister}
                  className="exv2-nav-btn exv2-register-btn flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 exv2-font-clouds"
                >
                  <FaRocket className="exv2-btn-icon" />
                  <span>Register Now</span>
                </button>
              </li>
            </menu>
          </nav>
        </div>
      </header>

        {/* Hero Section */}
      <section className="exv2-hero-section relative z-10 py-10 md:py-20 px-4 md:px-6">
        <div className="exv2-container max-w-7xl mx-auto">
          <header className="exv2-hero-content text-center mb-8 md:mb-16">
            <aside className="exv2-hero-badge inline-flex items-center space-x-1 md:space-x-2 px-3 md:px-6 py-2 md:py-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-full mb-4 md:mb-8 exv2-font-clouds">
              <FaTrophy className="exv2-hero-badge-icon text-orange-400 animate-pulse text-xs md:text-base" />
              <span className="text-orange-300 font-semibold text-xs md:text-sm">
                National Level Cybersecurity Championship
              </span>
            </aside>

            <hgroup className="exv2-hero-title mb-4 md:mb-6 flex flex-wrap items-center justify-center">
              <span className="text-4xl sm:text-6xl md:text-[10em] font-black text-white exv2-font-cybero -translate-y-[.1em]">
                E
              </span>
              <span className="text-3xl sm:text-5xl md:text-8xl font-black text-white exv2-font-cyberjunkies">
                SCALATE
              </span>
              <img
                src={ExcV2MiniLogo}
                alt="Cyberonites"
                className="exv2-logo-x-large"
              />
              <span className="text-2xl sm:text-3xl md:text-6xl font-bold text-gray-300 exv2-font-cyberjunkies">
                v
              </span>
              <span className="text-2xl sm:text-3xl md:text-6xl font-bold text-gray-300 exv2-font-clouds">
                2
              </span>
            </hgroup>

            <h2 className="exv2-hero-subtitle text-md sm:text-xl md:text-2xl text-gray-300 mb-4 md:mb-8 max-w-3xl mx-auto exv2-font-cyberjunkies">
              The Ultimate Cybersecurity Symposium & CTF Championship
            </h2>

            <address className="exv2-hero-meta flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-8 mb-4 md:mb-8 not-italic">
              <div className="exv2-meta-item flex items-center space-x-2 text-gray-400 text-sm md:text-base">
                <FaMapMarkerAlt className="exv2-meta-icon text-orange-400" />
                <span>GLA University, Mathura</span>
              </div>
              <div className="exv2-meta-divider w-1 h-1 bg-gray-600 rounded-full hidden sm:block"></div>
              <time className="exv2-meta-item flex items-center space-x-2 text-gray-400 text-sm md:text-base" dateTime="2025-11-08">
                <FaCalendarAlt className="exv2-meta-icon text-orange-400" />
                <span>November 8-9, 2025</span>
              </time>
              <div className="exv2-meta-divider w-1 h-1 bg-gray-600 rounded-full hidden sm:block"></div>
              <div className="exv2-meta-item flex items-center space-x-2 text-gray-400 text-sm md:text-base">
                <FaUsers className="exv2-meta-icon text-orange-400" />
                <span>800+ Participants Expected</span>
              </div>
            </address>

            <p className="exv2-hero-tagline flex flex-wrap items-center justify-center gap-2 md:gap-4 text-base md:text-lg font-semibold mb-6 md:mb-12">
              <span className="exv2-tagline-word text-orange-400 exv2-font-clouds">TRAIN</span>
              <span className="exv2-tagline-separator text-gray-600">•</span>
              <span className="exv2-tagline-word text-orange-400 exv2-font-clouds">
                TRANSFORM
              </span>
              <span className="exv2-tagline-separator text-gray-600">•</span>
              <span className="exv2-tagline-word text-orange-400 exv2-font-clouds">DEFEND</span>
            </p>

            <div className="exv2-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={navToRegister}
                className="exv2-cta-primary w-full sm:w-auto flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/30 exv2-font-clouds text-sm md:text-base"
              >
                <FaRocket className="exv2-cta-icon" />
                <span>Join the Challenge</span>
              </button>
              <button
                onClick={navToProblems}
                className="exv2-cta-secondary w-full sm:w-auto flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-orange-500 text-orange-400 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 exv2-font-clouds text-sm md:text-base"
              >
                <FaEye className="exv2-cta-icon" />
                <span>Explore Problems</span>
              </button>
            </div>
          </header>

          {/* Hero Cards Grid - Countdown and Briefing stacked, Banner on right */}
          <div className="exv2-hero-cards-redesigned grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            <div className="exv2-hero-left-column flex flex-col gap-8">
              <CountdownCard className="exv2-hero-countdown" />
              <EventDetailsCard className="exv2-hero-card-detail" />
            </div>
            <div className="exv2-hero-right-column">
              <PosterCard className="exv2-hero-card-poster h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="exv2-main-content relative z-10">
        {/* Event Stats */}
        <section className="exv2-stats-section py-12 px-6" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">Event Statistics</h2>
          <div className="exv2-container max-w-7xl mx-auto">
            <dl className="exv2-stats-grid grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="exv2-stat-item text-center p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                <div className="exv2-stat-icon mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <dt className="exv2-stat-number text-3xl font-bold text-white mb-2">
                  800+
                </dt>
                <dd className="exv2-stat-label text-gray-400 text-sm">
                  Registrations
                </dd>
              </div>

              <div className="exv2-stat-item text-center p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                <div className="exv2-stat-icon mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <dt className="exv2-stat-number text-3xl font-bold text-white mb-2">
                  5
                </dt>
                <dd className="exv2-stat-label text-gray-400 text-sm">
                  Knowledge Villages
                </dd>
              </div>

              <div className="exv2-stat-item text-center p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                <div className="exv2-stat-icon mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  <FaTrophy className="text-white text-2xl" />
                </div>
                <dt className="exv2-stat-number text-3xl font-bold text-white mb-2">
                  7
                </dt>
                <dd className="exv2-stat-label text-gray-400 text-sm">
                  CTF Categories
                </dd>
              </div>

              <div className="exv2-stat-item text-center p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                <div className="exv2-stat-icon mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  <FaAward className="text-white text-2xl" />
                </div>
                <dt className="exv2-stat-number text-3xl font-bold text-white mb-2">
                  2
                </dt>
                <dd className="exv2-stat-label text-gray-400 text-sm">
                  Days Intensive
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Event Overview */}
        <section className="exv2-content-section exv2-event-overview-section py-16 px-6">
          <div className="exv2-container-overview max-w-7xl mx-auto">
            <header className="exv2-section-header text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-wide exv2-font-cyberjunkies">
                <span className="text-white">EVENT</span>{" "}
                <span className="text-orange-500">OVERVIEW</span>
              </h2>
              <p className="exv2-section-description text-lg text-gray-300 max-w-3xl mx-auto">
                A comprehensive cybersecurity symposium designed to bridge
                academic knowledge with practical industry expertise
              </p>
            </header>

            <div className="exv2-overview-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
              <article className="exv2-overview-card exv2-featured p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-3xl backdrop-blur-lg hover:scale-105 transition-all duration-500 group">
                <header className="exv2-card-header mb-6">
                  <div className="exv2-card-icon-wrapper w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaShieldAlt className="exv2-card-icon text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white exv2-font-clouds">
                    About EscalateX v2
                  </h3>
                </header>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  GLA University's Cyberonites Club presents ESCALATEX V2, a
                  two-day cybersecurity symposium featuring hands-on learning,
                  expert sessions, and high-stakes competition. The event
                  explores cutting-edge topics like IoT security, malware
                  analysis, web exploitation, cloud infrastructure, and robotics
                  through immersive sessions designed to train and transform
                  cybersecurity enthusiasts into future-ready defenders.
                </p>
                <div className="exv2-card-highlight flex items-center space-x-2 text-orange-400">
                  <FaStar />
                  <span className="font-semibold">Premier Event</span>
                </div>
              </article>

              <article className="exv2-overview-card p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-lg hover:scale-105 transition-all duration-500 group">
                <header className="exv2-card-header mb-6">
                  <div className="exv2-card-icon-wrapper w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaBullseye className="exv2-card-icon text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white exv2-font-clouds">
                    Event Objectives
                  </h3>
                </header>
                <ul className="exv2-objectives-list space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="exv2-objective-icon w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaShieldVirus className="text-orange-400 text-sm" />
                    </div>
                    <span className="text-gray-300">
                      Provide real-world cybersecurity challenge exposure
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="exv2-objective-icon w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaTrophy className="text-orange-400 text-sm" />
                    </div>
                    <span className="text-gray-300">
                      Offer hands-on Capture The Flag (CTF) experience
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="exv2-objective-icon w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaUsers className="text-orange-400 text-sm" />
                    </div>
                    <span className="text-gray-300">
                      Develop problem-solving and teamwork skills
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="exv2-objective-icon w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaNetworkWired className="text-orange-400 text-sm" />
                    </div>
                    <span className="text-gray-300">
                      Bridge academic knowledge with practical application
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="exv2-objective-icon w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaRocket className="text-orange-400 text-sm" />
                    </div>
                    <span className="text-gray-300">
                      Inspire and nurture future cyber leaders
                    </span>
                  </li>
                </ul>
              </article>

              <article className="exv2-overview-card exv2-legacy lg:col-span-2 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-3xl backdrop-blur-lg">
                <header className="exv2-card-header mb-4">
                  <div className="exv2-card-icon-wrapper w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-4">
                    <FaAward className="exv2-card-icon text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white exv2-font-clouds">
                    Legacy of EscalateX 2024
                  </h3>
                </header>
                <div className="exv2-legacy-stats grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="exv2-legacy-stat text-center">
                    <span className="exv2-legacy-number block text-3xl font-bold text-orange-400">
                      800+
                    </span>
                    <span className="exv2-legacy-label text-gray-400">
                      Total Registrations
                    </span>
                  </div>
                  <div className="exv2-legacy-stat text-center">
                    <span className="exv2-legacy-number block text-3xl font-bold text-orange-400">
                      100+
                    </span>
                    <span className="exv2-legacy-label text-gray-400">
                      Day 1 Participants
                    </span>
                  </div>
                  <div className="exv2-legacy-stat text-center">
                    <span className="exv2-legacy-number block text-3xl font-bold text-orange-400">
                      50
                    </span>
                    <span className="exv2-legacy-label text-gray-400">
                      CTF Finalists
                    </span>
                  </div>
                </div>
                <div className="exv2-legacy-partners">
                  <p className="text-gray-300 mb-3">
                    Featured industry experts from:
                  </p>
                  <div className="exv2-partner-tags flex flex-wrap gap-3">
                    <span className="exv2-partner-tag px-4 py-2 bg-orange-500/20 text-orange-300 rounded-lg font-medium">
                      Hackersvilla
                    </span>
                    <span className="exv2-partner-tag px-4 py-2 bg-orange-500/20 text-orange-300 rounded-lg font-medium">
                      Deloitte
                    </span>
                    <span className="exv2-partner-tag px-4 py-2 bg-orange-500/20 text-orange-300 rounded-lg font-medium">
                      HCL
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Event Timeline */}
        <TimelineCard />

        {/* Knowledge Villages */}
        <KnowledgeVillages />

        {/* CTF Categories */}
        <CTFCategories />

        {/* Sponsorship */}
        <SponsorsSection />

        {/* Contact Section */}
        <ContactCard />
      </section>

      <CustomFooter />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
};

export default EscX_v2;
