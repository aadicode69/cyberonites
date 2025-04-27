import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTrophy, FaUsers, FaHandshake, FaCamera,
  FaClipboardCheck, FaUserTie, FaTerminal, FaUserFriends,
  FaShieldAlt, FaExclamationTriangle
} from "react-icons/fa";
import Footer from "../../footer/Footer";
import './styles/animations.css';

// Components
import GlitchHeader from "./components/GlitchHeader";
import StatisticsPanel from "./components/StatisticsPanel";
import SectionNavigation from "./components/SectionNavigation";
import TerminalSection from "./components/TerminalSection";
import WinnerCard from "./components/WinnerCard";
import SponsorsSection from "./sections/SponsorsSection";
import GalleryCarousel from './sections/GalleryCarousel';
import MentorShowcase from './components/MentorShowcase';
import FacultyCoordinator from "./components/FacultyCoordinator"; // Import the new component

// Custom hooks
import useScrollPosition from "./hooks/useScrollPosition";

// Data - Import ALL images from IntrusionXImages
import { eventBannerImg, judgesPanelImg, teamWithAlumniImages, teamImages, evaluationImages, judgeDetailImages } from "./data/IntrusionXImages";

import {
  winners, challengeCategoriesList, eventTimeline, eventLeaders,
  highlights, participatingInstitutions, judgingCriteria, evaluationSteps, guests,
  problemStatementContributors, sponsorContributions, testimonials, challengeProblems,
  mentors
} from "./data/eventData";

// Existing components
import IntrusionCards from "./components/IntrusionCards";
import TeamCarousel from './sections/TeamCarousel';
import EvaluationCarousel from './sections/EvaluationCarousel';
import JudgesGallery from './sections/JudgesGallery';

const IntrusionX = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const isScrolled = useScrollPosition(400);
  const [loaded, setLoaded] = useState(false);

  // Use imported judge images
  const judgeImages = judgeDetailImages;

  const teamWithAlumniImagesArr = teamWithAlumniImages.map((imageUrl, index) => ({
    id: 8000 + index,
    imageUrl,
    altText: ""
  }));

  const scrollToSection = useCallback((sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  const handleReturnClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  // Add animation on component mount
  useEffect(() => {
    // Set loaded to true after a small delay to trigger animations
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Add a new state to track active challenge category
  const [activeChallengeCategory, setActiveChallengeCategory] = useState("all");

  // Group challenges by category - renamed from challengeCategories to challengeFilters
  const challengeFilters = {
    all: challengeProblems,
    iiot: challengeProblems.filter(p => p.id <= 3),
    ai: challengeProblems.filter(p => p.id >= 4 && p.id <= 6),
    insider: challengeProblems.filter(p => p.id === 7),
    cloud: challengeProblems.filter(p => [8, 16].includes(p.id)),
    blockchain: challengeProblems.filter(p => [9, 18, 19].includes(p.id)),
    malware: challengeProblems.filter(p => [10, 11, 12, 17].includes(p.id)),
    mobile: challengeProblems.filter(p => [13, 14].includes(p.id)),
    deepfake: challengeProblems.filter(p => p.id === 15)
  };

  // Filter challenges based on selected category - using the renamed variable
  const filteredChallenges = challengeFilters[activeChallengeCategory];

  return (
    <div className="bg-[#050510] min-h-screen text-gray-300">
      {/* Cyberpunk grid background with animation - changed from green to blue */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20 animate-gridPulse"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-blue-900/20"></div>
      </div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 ${loaded ? 'animate-fadeIn' : 'opacity-0'}`}>
        {/* Replace the EventHeader with our new GlitchHeader */}
        <div className={`${loaded ? 'animate-slideUp' : 'opacity-0'}`}>
          <GlitchHeader
            onReturnClick={handleReturnClick}
            backgroundImage={eventBannerImg}  // Make sure this path is correct
          />
        </div>

        {/* Quick stats with animation */}
        <StatisticsPanel />

        {/* Navigation */}
        <SectionNavigation
          activeTab={activeTab}
          onTabChange={scrollToSection}
          isScrolled={isScrolled}
        />

        {/* Terminal-style sections with reveal animations */}
        <div className="reveal">
          <TerminalSection id="overview" title="Mission Briefing" icon={<FaTerminal />}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 font-mono">
                {/* Updated with objective information */}
                <div className="mb-6 border border-cyan-900/60 bg-black/30 p-4 rounded-sm">
                  <h4 className="text-cyan-400 font-mono mb-3 border-b border-cyan-900/50 pb-2">OBJECTIVE</h4>
                  <p className="mb-3 leading-relaxed text-cyan-100 text-sm">
                    The primary objective of IntrusionX was to organize a high-impact national-level
                    cybersecurity hackathon that would serve as a platform for budding cybersecurity
                    enthusiasts to test and showcase their skills in a competitive environment. The
                    hackathon aimed to simulate real-world cybersecurity scenarios, encouraging
                    participants to think critically, collaborate effectively, and apply theoretical knowledge
                    to practical challenges.
                  </p>
                  <p className="leading-relaxed text-cyan-100 text-sm">
                    By bringing together teams from reputed institutions across the country alongside our
                    own university&apos;s talent, the event fostered innovation, teamwork, and knowledge
                    exchange. Through this hackathon, we sought to build a thriving community of
                    security professionals, promote awareness about ethical hacking and digital defense,
                    and place GLA University on the national map as a leading institution for
                    cybersecurity initiatives.
                  </p>
                </div>

                {/* Inauguration information */}
                <div className="mb-6 border border-cyan-900/60 bg-black/30 p-4 rounded-sm">
                  <h4 className="text-cyan-400 font-mono mb-3 border-b border-cyan-900/50 pb-2">INAUGURATION CEREMONY</h4>
                  <p className="leading-relaxed text-cyan-100 text-sm">
                    The IntrusionX Hackathon was officially inaugurated with great enthusiasm and
                    energy, setting the tone for two days of intense innovation and competition. The
                    ceremony was graced by esteemed faculty members and attended by participants from
                    prestigious institutions across India.
                  </p>
                </div>
              </div>
              <div className="border border-cyan-900/60 bg-black/30 p-4 rounded-sm">
                <h4 className="text-cyan-400 font-mono mb-3 border-b border-cyan-900/50 pb-2">EVENT HIGHLIGHTS</h4>
                <ul className="space-y-2">
                  {highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-cyan-500 mr-2 rounded-full mt-2"></span>
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-cyan-400 font-mono mt-6 mb-3 border-b border-cyan-900/50 pb-2">TIMELINE</h4>
                <div className="space-y-2 text-sm">
                  {eventTimeline.map((item, idx) => (
                    <div key={idx} className="flex">
                      <div className="w-20 font-mono text-cyan-400">{item.day}</div>
                      <div>
                        <p className="text-white">{item.title}</p>
                        <p className="text-gray-400 text-xs">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Replace the Faculty Coordinator div with our new component */}
            <FacultyCoordinator
              name="Dr. Asheesh Tiwari"
              department="Department of Computer Engineering & Applications"
            />

            {/* Add Mentors Showcase */}
            <MentorShowcase mentors={mentors} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="border border-cyan-900/60 bg-black/30 p-4 rounded-sm">
                <h4 className="text-cyan-400 font-mono mb-3 border-b border-cyan-900/50 pb-2">EVENT LEADERS</h4>
                <ul className="space-y-1 text-sm">
                  {eventLeaders.map((leader, idx) => (
                    <li key={idx}>{leader}</li>
                  ))}
                </ul>
              </div>

              <div className="border border-cyan-900/60 bg-black/30 p-4 rounded-sm">
                <h4 className="text-cyan-400 font-mono mb-3 border-b border-cyan-900/50 pb-2">CHALLENGE CATEGORIES</h4>
                <ul className="space-y-1 text-sm">
                  {challengeCategoriesList.map((category, idx) => (
                    <li key={idx} className="flex items-center">
                      <span
                        className="w-1.5 h-1.5 mr-2 rounded-full"
                        style={{ backgroundColor: `var(--color-${category.color}-500, #3B82F6)` }}
                      ></span>
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Add Problem Statement Contributors */}
            <div className="mt-8 border border-cyan-900 bg-black/20 p-4 rounded-sm">
              <h3 className="text-xl font-mono text-cyan-400 mb-4 text-center">PROBLEM STATEMENT CONTRIBUTORS</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {problemStatementContributors.map((contributor, idx) => (
                  <div key={idx} className="bg-black/40 border border-cyan-900/50 p-3 rounded-sm">
                    <h4 className="text-cyan-300 font-mono text-sm">{contributor.name}</h4>
                    <p className="text-gray-400 text-xs mt-1">{contributor.role}</p>
                    <div className="flex justify-between mt-2 text-xs">
                      <span className="text-cyan-400">{contributor.experience} experience</span>
                      <span className="text-cyan-200">{contributor.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add participant testimonials */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-black/40 border border-cyan-900/50 p-4 rounded-sm">
                  <p className="text-cyan-100 italic">&quot;{testimonial.quote}&quot;</p>
                  <p className="text-right text-cyan-400 text-sm mt-2">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </TerminalSection>
        </div>

        {/* New Challenges section - updated to show all problems */}
        <div className="reveal">
          <TerminalSection id="challenges" title="Cybersecurity Challenges" icon={<FaShieldAlt />}>
            <div className="mb-6 border border-red-900/60 bg-black/30 p-4 rounded-sm">
              <h4 className="text-red-400 font-mono mb-3 border-b border-red-900/50 pb-2">
                <FaExclamationTriangle className="inline mr-2" /> PROBLEM STATEMENTS
              </h4>
              <p className="mb-3 leading-relaxed text-red-100 text-sm">
                The IntrusionX Hackathon presented participants with cutting-edge cybersecurity challenges designed to test their skills in identifying vulnerabilities, implementing secure solutions, and defending against emerging cyber threats. Teams were tasked with solving real-world problems affecting modern digital infrastructure.
              </p>
            </div>

            {/* Challenge category tabs - updated to use challengeFilters */}
            <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
              {Object.keys(challengeFilters).map(category => (
                <button
                  key={category}
                  onClick={() => setActiveChallengeCategory(category)}
                  className={`text-xs px-3 py-2 rounded-sm border ${activeChallengeCategory === category
                    ? 'bg-red-900/40 text-red-300 border-red-700'
                    : 'bg-transparent border-red-900/30 text-gray-400 hover:text-red-400'
                    }`}
                >
                  {category.toUpperCase()}
                  {category !== 'all' && (
                    <span className="ml-1 text-xs bg-red-900/30 px-1.5 rounded-full">
                      {challengeFilters[category].length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredChallenges.map((problem) => (
                <div key={problem.id} className="border border-red-900/40 bg-black/20 p-4 rounded-sm hover:bg-red-900/5 transition-colors">
                  <h3 className="text-red-300 font-mono text-sm mb-2 flex items-start">
                    <span className="bg-red-900/30 text-red-400 px-2 py-1 rounded-sm mr-3 font-bold">{problem.id}</span>
                    <span className="text-red-200">{problem.title}</span>
                  </h3>
                  <p className="text-xs text-gray-300 mb-3 ml-10">{problem.description}</p>
                  <div className="ml-10">
                    <h4 className="text-xs font-mono text-red-400 mb-2">KEY CHALLENGES:</h4>
                    <ul className="list-disc pl-5 text-xs space-y-1">
                      {problem.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-gray-300">{challenge}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <div className="bg-red-900/20 p-3 border border-red-900/30 rounded-sm inline-block">
                <p className="text-sm text-red-300 font-mono text-center">
                  {challengeProblems.length} problem statements were provided, covering various domains of cybersecurity
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-black/40 border border-red-900/40 p-4 rounded-sm">
                <h4 className="text-red-400 font-mono text-center mb-2">IIOT SECURITY</h4>
                <p className="text-sm text-center">Industrial IoT attack vectors and defense mechanisms</p>
              </div>
              <div className="bg-black/40 border border-red-900/40 p-4 rounded-sm">
                <h4 className="text-red-400 font-mono text-center mb-2">AI SECURITY</h4>
                <p className="text-sm text-center">Adversarial attacks and model protection techniques</p>
              </div>
              <div className="bg-black/40 border border-red-900/40 p-4 rounded-sm">
                <h4 className="text-red-400 font-mono text-center mb-2">BLOCKCHAIN</h4>
                <p className="text-sm text-center">Secure distributed systems and financial security</p>
              </div>
            </div>
          </TerminalSection>
        </div>

        <div className="reveal">
          <TerminalSection id="winners" title="Winners" icon={<FaTrophy />}>
            <h3 className="text-green-400 font-mono text-xl mb-6 text-center">CHAMPIONS OF INTRUSIONX</h3>

            {/* First Prize */}
            <WinnerCard winner={winners[0]} isFirst={true} />

            {/* Second and Third Prize */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <WinnerCard winner={winners[1]} />
              <WinnerCard winner={winners[2]} />
            </div>

            {/* All winners celebration section */}
            <div className="mt-8 border border-cyan-900/40 rounded-sm bg-black/20 p-4">
              <h4 className="text-center text-cyan-400 font-mono mb-4">LEADERBOARD</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-cyan-900/30">
                      <th className="py-2 px-4 text-left font-mono text-cyan-300">Rank</th>
                      <th className="py-2 px-4 text-left font-mono text-cyan-300">Team</th>
                      <th className="py-2 px-4 text-left font-mono text-cyan-300">Institution</th>
                      <th className="py-2 px-4 text-left font-mono text-cyan-300">Prize</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-cyan-900/20 bg-green-900/10">
                      <td className="py-2 px-4 font-mono text-green-400">1</td>
                      <td className="py-2 px-4">Team Captcha_Unrecognised</td>
                      <td className="py-2 px-4">MRIIS, Faridabad</td>
                      <td className="py-2 px-4">₹15,000 + ₹5,000 & CEH Voucher</td>
                    </tr>
                    <tr className="border-b border-cyan-900/20 bg-gray-800/10">
                      <td className="py-2 px-4 font-mono text-gray-400">2</td>
                      <td className="py-2 px-4">Team Deathly Hallows</td>
                      <td className="py-2 px-4">GLA University (1st Year)</td>
                      <td className="py-2 px-4">₹10,000 + 3 CRTP Certificates</td>
                    </tr>
                    <tr className="bg-orange-900/10">
                      <td className="py-2 px-4 font-mono text-orange-400">3</td>
                      <td className="py-2 px-4">Team Cyber Sentinels</td>
                      <td className="py-2 px-4">GLA University</td>
                      <td className="py-2 px-4">₹5,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TerminalSection>
        </div>

        <div className="reveal">
          <TerminalSection id="teams" title="Participating Teams" icon={<FaUsers />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-mono text-pink-400 mb-4 flex items-center">
                  <FaUsers className="mr-2" /> TEAM GALLERY
                </h3>
                <TeamCarousel images={teamImages} />

                <div className="mt-4 bg-black/30 border border-pink-900/50 p-3 rounded-sm">
                  <p className="text-sm text-center text-pink-200/80">
                    A glimpse of the brilliant teams who participated in IntrusionX, showcasing their technical prowess and collaborative spirit
                  </p>
                </div>
              </div>

              <div className="border border-pink-900 bg-black/20 p-4 rounded-sm">
                <h3 className="text-xl font-mono text-pink-400 mb-4">PARTICIPATING INSTITUTIONS</h3>
                <div className="flex flex-wrap gap-2">
                  {participatingInstitutions.map((college, idx) => (
                    <span key={idx} className="px-3 py-1 bg-pink-900/30 text-pink-200 text-xs rounded-sm border border-pink-800">
                      {college}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-mono text-pink-400 mt-6 mb-4">TEAM STATISTICS</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between border-b border-pink-900/30 pb-1">
                    <span className="text-pink-200">Total Teams</span>
                    <span className="font-mono">25</span>
                  </li>
                  <li className="flex justify-between border-b border-pink-900/30 pb-1">
                    <span className="text-pink-200">External Teams</span>
                    <span className="font-mono">10+</span>
                  </li>
                  <li className="flex justify-between border-b border-pink-900/30 pb-1">
                    <span className="text-pink-200">GLA Teams</span>
                    <span className="font-mono">15</span>
                  </li>
                  <li className="flex justify-between border-b border-pink-900/30 pb-1">
                    <span className="text-pink-200">Team Size</span>
                    <span className="font-mono">3-4 members</span>
                  </li>
                </ul>

                <h3 className="text-xl font-mono text-pink-400 mt-6 mb-4">TEAM CATEGORIES</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-black/40 border border-pink-900/50 p-3 rounded-sm">
                    <h4 className="text-pink-300 text-sm font-mono mb-1">Professional</h4>
                    <p className="text-xs text-gray-300">11 Teams</p>
                  </div>
                  <div className="bg-black/40 border border-pink-900/50 p-3 rounded-sm">
                    <h4 className="text-pink-300 text-sm font-mono mb-1">Student</h4>
                    <p className="text-xs text-gray-300">14 Teams</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cyberonites team with alumni */}
            <div className="mt-8 border border-pink-900 bg-black/20 p-4 rounded-sm">
              <h3 className="text-xl font-mono text-pink-400 mb-4 flex items-center">
                <FaUserFriends className="mr-2" /> CYBERONITES TEAM WITH ALUMNI
              </h3>

              <IntrusionCards
                list={teamWithAlumniImagesArr}
                variant="secondary"
                rounded="rounded-sm"
                shadow="shadow-none"
              />

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-black/40 border border-pink-900/50 p-3 text-sm">
                  Ritaj Sharma – Sr. Consultant, Deloitte
                </div>
                <div className="bg-black/40 border border-pink-900/50 p-3 text-sm">
                  Aman Singh Chauhan – Security Analyst, HCL
                </div>
                <div className="bg-black/40 border border-pink-900/50 p-3 text-sm">
                  Lucky Thandel – Security Researcher, HackIT
                </div>
              </div>
            </div>
          </TerminalSection>
        </div>

        <div className="reveal">
          <TerminalSection id="judges" title="Judges & Experts" icon={<FaUserTie />}>
            <div className="bg-black/20 border border-yellow-900 p-4 rounded-sm mb-6">
              <img
                src={judgesPanelImg}
                alt="Judges Panel"
                className="w-full h-auto rounded-sm"
              />
              <p className="text-center text-sm mt-3 text-yellow-200">
                Our distinguished panel of judges from industry and academia
              </p>
            </div>

            <h3 className="text-xl font-mono text-yellow-400 mb-5 inline-flex items-center">
              <FaUserTie className="mr-2" /> DISTINGUISHED JUDGES
            </h3>

            <JudgesGallery judges={guests} judgeImages={judgeImages} />
          </TerminalSection>
        </div>

        <div className="reveal">
          <TerminalSection id="evaluation" title="Evaluation Process" icon={<FaClipboardCheck />}>
            <EvaluationCarousel images={evaluationImages} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border border-cyan-900 bg-black/20 p-4 rounded-sm">
                <h3 className="text-xl font-mono text-cyan-400 mb-4">JUDGING CRITERIA</h3>
                <ul className="space-y-2">
                  {judgingCriteria.map((criteria, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-cyan-500 mr-2 rounded-full mt-2"></span>
                      <span>{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-cyan-900 bg-black/20 p-4 rounded-sm">
                <h3 className="text-center text-xl font-mono text-cyan-400 mb-4">EVALUATION TIMELINE</h3>
                <div className="space-y-4">
                  {evaluationSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-sm border border-cyan-700 bg-cyan-900/20 text-cyan-400">
                        <span className="font-mono">{step.step}</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-cyan-300 font-mono">{step.title}</h4>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TerminalSection>
        </div>

        <div className="reveal">
          <TerminalSection id="sponsors" title="Sponsors" icon={<FaHandshake />}>
            <SponsorsSection />

            {/* Add sponsor contributions */}
            <div className="mt-8 border border-green-900 bg-black/20 p-4 rounded-sm">
              <h3 className="text-xl font-mono text-green-400 mb-4 text-center">SPONSOR CONTRIBUTIONS</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {sponsorContributions.map((sponsor, idx) => (
                  <div key={idx} className="bg-black/40 border border-green-900/50 p-4 rounded-sm">
                    <h4 className="text-green-300 font-mono text-lg border-b border-green-900/30 pb-2 mb-3">{sponsor.name}</h4>
                    <ul className="space-y-1 text-sm mb-3">
                      {sponsor.contributions.map((contribution, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-500 mr-2 rounded-full mt-2"></span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-right font-mono text-green-400">
                      Total Value: {sponsor.totalValue}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TerminalSection>
        </div>

        <div className="reveal">
          <TerminalSection id="gallery" title="Gallery" icon={<FaCamera />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <GalleryCarousel images={teamImages} />
                <div className="mt-4 bg-black/30 border border-magenta-900/50 p-3 rounded-sm">
                  <p className="text-sm text-center text-magenta-200/80">
                    Capturing memorable moments from IntrusionX - from intense hacking sessions to team collaborations and celebrations
                  </p>
                </div>
              </div>
            </div>
          </TerminalSection>
        </div>

        {/* Back to top button with animation - changed from green to blue */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-3 bg-black border border-blue-700 text-blue-400 font-mono rounded-sm hover-scale hover-glow transition-all"
          >
            <span className="flex items-center">
              <span className="mr-2 animate-pulse">↑</span>
              RETURN TO TOP
            </span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IntrusionX;
