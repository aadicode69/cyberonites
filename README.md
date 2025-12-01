/* =============================================== */
/* ESCALATE X V2 - PEC HACKS INSPIRED THEME */
/* =============================================== */

/* Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');

/* =============================================== */
/* CSS VARIABLES */
/* =============================================== */

:root {
    --primary-purple: #8B5CF6;
    --primary-pink: #EC4899;
    --primary-blue: #3B82F6;
    --accent-cyan: #06B6D4;
    --dark-bg: #0a0a0f;
    --card-bg: rgba(17, 24, 39, 0.8);
    --border-color: rgba(139, 92, 246, 0.3);
    --text-primary: #ffffff;
    --text-secondary: #9ca3af;
    --gradient-1: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
    --gradient-2: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
    --gradient-3: linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%);
}

/* =============================================== */
/* BASE STYLES */
/* =============================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
}

body {
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    color: white;
    background: var(--dark-bg);
    background: linear-gradient(180deg, #0a0a0f 0%, #1a0b2e 50%, #0a0a0f 100%);
}

/* =============================================== */
/* ESCALATE X CONTAINER */
/* =============================================== */

.escalate-container {
    width: 100%;
    position: relative;
    background: transparent;
    z-index: 10;
}

.scroll-section {
    scroll-margin-top: 100px;
    position: relative;
    background: transparent;
    z-index: 30;
    min-height: 100vh;
    padding: 80px 20px;
}

/* =============================================== */
/* HERO SECTION - PEC HACKS STYLE */
/* =============================================== */

.hero-section {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    padding: 100px 20px 80px;
    background: radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, transparent 60%);
}

.hero-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 40px;
    max-width: 1400px;
    margin: 0 auto;
}

/* Terminal Window - Modern Style */
.terminal-window {
    background: rgba(17, 24, 39, 0.9);
    border: 2px solid var(--primary-purple);
    border-radius: 12px;
    padding: 15px 25px;
    max-width: 700px;
    width: 90%;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 30px rgba(139, 92, 246, 0.4);
}

.terminal-header {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
}

.terminal-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.terminal-dot.red { background: #EF4444; }
.terminal-dot.yellow { background: #F59E0B; }
.terminal-dot.green { background: #10B981; }

.terminal-body {
    font-family: 'Space Grotesk', monospace;
    font-size: 16px;
}

.terminal-line {
    color: var(--primary-purple);
    font-weight: 600;
}

.terminal-command {
    color: white;
    display: inline-block;
}

.cursor {
    animation: blink 1s infinite;
    color: var(--primary-pink);
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

/* Main Title with Gradient Effect - BIGGER SIZE */
.main-title {
    font-family: 'Orbitron', 'Space Grotesk', sans-serif;
    font-size: 8rem;
    font-weight: 900;
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 0;
    position: relative;
}

.main-title span {
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.logo-image {
    height: 200px;
    width: auto;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

/* Subtitle with Gradient */
.subtitle {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    background: linear-gradient(90deg, #8B5CF6, #EC4899, #3B82F6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin: 0;
}

.bracket {
    color: var(--primary-cyan);
    font-weight: bold;
}

/* Event Details */
.hero-line-4 {
    display: flex;
    gap: 40px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

.event-date, .event-venue {
    font-family: 'Inter', sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 2px;
    padding: 12px 24px;
    background: rgba(139, 92, 246, 0.1);
    border: 1px solid var(--primary-purple);
    border-radius: 25px;
    backdrop-filter: blur(10px);
}

/* =============================================== */
/* STICKY NAVIGATION - GRADIENT STYLE */
/* =============================================== */

.nav-tabs {
    position: sticky;
    top: 0;
    background: rgba(10, 10, 15, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 2px solid var(--border-color);
    padding: 15px 20px;
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    z-index: 999;
    box-shadow: 0 10px 40px rgba(139, 92, 246, 0.2);
}

.nav-tab {
    background: transparent;
    border: 2px solid rgba(139, 92, 246, 0.3);
    color: white;
    padding: 12px 28px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 1px;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    overflow: hidden;
}

.nav-tab::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-1);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
}

.nav-tab:hover::before,
.nav-tab.active::before {
    opacity: 1;
}

.nav-tab:hover,
.nav-tab.active {
    border-color: transparent;
    box-shadow: 0 0 25px rgba(139, 92, 246, 0.6);
    transform: translateY(-2px);
}

.tab-icon {
    font-size: 0.9rem;
}

/* =============================================== */
/* STATS GRID - GRADIENT CARDS */
/* =============================================== */

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 60px auto;
    padding: 0 20px;
}

.stat-card {
    background: var(--card-bg);
    backdrop-filter: blur(20px);
    border: 2px solid transparent;
    border-radius: 20px;
    padding: 35px;
    text-align: center;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-1);
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 20px;
    z-index: -1;
}

.stat-card:hover::before {
    opacity: 0.15;
}

.stat-card:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: var(--primary-purple);
    box-shadow: 0 20px 60px rgba(139, 92, 246, 0.4);
}

.stat-value {
    font-size: 3rem;
    font-weight: 900;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Space Grotesk', sans-serif;
    line-height: 1;
}

.stat-label {
    font-size: 1.2rem;
    color: var(--text-secondary);
    font-family: 'Inter', sans-serif;
    margin-top: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
}

.stat-border {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-1);
    transform: scaleX(0);
    transition: transform 0.4s ease;
}

.stat-card:hover .stat-border {
    transform: scaleX(1);
}

/* =============================================== */
/* SPONSORS & PARTNERS - SCROLLING STRIPS */
/* =============================================== */

.sponsors-partners-section {
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(20px);
    border: 2px solid var(--border-color);
    border-radius: 30px;
    padding: 60px 30px;
    margin: 80px auto;
    max-width: 1400px;
    box-shadow: 0 20px 60px rgba(139, 92, 246, 0.2);
}

.sponsors-partners-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
}

.bracket-left, .bracket-right {
    font-size: 2.5rem;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: bold;
}

.header-text {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.sponsors-row {
    margin-bottom: 50px;
}

.row-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-purple);
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 2px;
}

.logos-scroll-container {
    overflow: hidden;
    position: relative;
    padding: 30px 0;
    background: rgba(139, 92, 246, 0.05);
    border-radius: 15px;
}

.logos-scroll-track {
    display: flex;
    gap: 60px;
    animation: scroll-left 40s linear infinite;
}

.logos-scroll-track.reverse {
    animation: scroll-right 40s linear infinite;
}

.logos-set {
    display: flex;
    gap: 60px;
    flex-shrink: 0;
}

.logos-set img {
    height: 90px;
    width: auto;
    object-fit: contain;
    filter: grayscale(100%) brightness(0.7);
    transition: all 0.4s ease;
    padding: 10px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
}

.logos-set img:hover {
    filter: grayscale(0%) brightness(1);
    transform: scale(1.15);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
}

@keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
}

@keyframes scroll-right {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
}

.logos-scroll-container:hover .logos-scroll-track {
    animation-play-state: paused;
}

/* =============================================== */
/* SECTION STYLES */
/* =============================================== */

.section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px;
}

.section-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 60px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-transform: uppercase;
}

.prompt {
    color: var(--primary-cyan);
}

.header-dots {
    display: flex;
    gap: 8px;
    margin-left: auto;
}

.dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    box-shadow: 0 0 10px currentColor;
}

.dot.red { background: #EF4444; }
.dot.yellow { background: #F59E0B; }
.dot.green { background: #10B981; }

/* =============================================== */
/* FEATURED EVENT IMAGE */
/* =============================================== */

.featured-event-image {
    margin-bottom: 60px;
}

.featured-image-frame {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    border: 3px solid var(--primary-purple);
    box-shadow: 0 20px 60px rgba(139, 92, 246, 0.4);
    transition: all 0.3s ease;
}

.featured-image-frame:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 80px rgba(236, 72, 153, 0.5);
}

.corner-accent {
    position: absolute;
    width: 40px;
    height: 40px;
    border: 4px solid var(--primary-pink);
    z-index: 2;
}

.corner-accent.top-left {
    top: 15px;
    left: 15px;
    border-right: none;
    border-bottom: none;
}

.corner-accent.top-right {
    top: 15px;
    right: 15px;
    border-left: none;
    border-bottom: none;
}

.corner-accent.bottom-left {
    bottom: 15px;
    left: 15px;
    border-right: none;
    border-top: none;
}

.corner-accent.bottom-right {
    bottom: 15px;
    right: 15px;
    border-left: none;
    border-top: none;
}

.featured-img {
    width: 100%;
    height: auto;
    display: block;
    transition: all 0.3s ease;
}

.featured-image-frame:hover .featured-img {
    transform: scale(1.02);
}

.featured-image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(10, 10, 15, 0.95), transparent);
    padding: 40px;
}

.overlay-text h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
}

.overlay-text p {
    font-family: 'Inter', sans-serif;
    font-size: 1.3rem;
    color: var(--text-secondary);
    font-weight: 500;
}

/* =============================================== */
/* CONTENT GRID - MODERN GLASSMORPHISM */
/* =============================================== */

.content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 50px;
}

.objective-box, .highlights-box {
    background: rgba(17, 24, 39, 0.8);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(139, 92, 246, 0.3);
    border-radius: 20px;
    padding: 40px;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.objective-box::before,
.highlights-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-1);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
}

.objective-box:hover::before,
.highlights-box:hover::before {
    opacity: 0.1;
}

.objective-box:hover,
.highlights-box:hover {
    border-color: var(--primary-purple);
    box-shadow: 0 15px 40px rgba(139, 92, 246, 0.3);
    transform: translateY(-5px);
}

.objective-box h3,
.highlights-box h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 25px;
    letter-spacing: 1px;
}

.objective-box p {
    font-family: 'Inter', sans-serif;
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 20px;
}

.highlights-list {
    list-style: none;
    padding: 0;
}

.highlights-list li {
    font-family: 'Inter', sans-serif;
    font-size: 1.15rem;
    color: var(--text-secondary);
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
}

.highlights-list li:hover {
    color: white;
    transform: translateX(5px);
}

.bullet {
    color: var(--primary-pink);
    font-size: 1.2rem;
    filter: drop-shadow(0 0 5px rgba(236, 72, 153, 0.6));
}

/* =============================================== */
/* MENTOR SECTION */
/* =============================================== */

.mentor-section {
    margin-top: 40px;
    padding-top: 35px;
    border-top: 2px solid rgba(139, 92, 246, 0.3);
}

.mentor-section h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 25px;
    text-align: center;
}

.mentor-card {
    display: flex;
    align-items: center;
    gap: 25px;
    background: rgba(0, 0, 0, 0.4);
    padding: 25px;
    border-radius: 20px;
    border: 2px solid rgba(139, 92, 246, 0.3);
    transition: all 0.3s ease;
}

.mentor-card:hover {
    border-color: var(--primary-purple);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
    transform: translateY(-3px);
}

.mentor-image-container {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid transparent;
    background: var(--gradient-1);
    padding: 4px;
    flex-shrink: 0;
}

.mentor-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.mentor-details {
    flex: 1;
}

.mentor-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: white;
    margin-bottom: 8px;
}

.mentor-dept,
.mentor-uni {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.6;
}

/* =============================================== */
/* VILLAGES GRID - NEON CARDS */
/* =============================================== */

.villages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 35px;
    margin-bottom: 80px;
}

.village-card {
    background: rgba(17, 24, 39, 0.8);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(139, 92, 246, 0.3);
    border-radius: 20px;
    padding: 35px;
    text-align: center;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.village-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-2);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
}

.village-card:hover::before {
    opacity: 0.15;
}

.village-card:hover {
    transform: translateY(-10px);
    border-color: var(--primary-blue);
    box-shadow: 0 20px 50px rgba(59, 130, 246, 0.4);
}

.speaker-image-container {
    width: 140px;
    height: 140px;
    margin: 0 auto 25px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid transparent;
    background: var(--gradient-1);
    padding: 4px;
}

.speaker-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.village-card h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.9rem;
    font-weight: 700;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
}

.speaker-name {
    font-family: 'Inter', sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
    color: white;
    margin-bottom: 8px;
}

.speaker-company {
    font-family: 'Inter', sans-serif;
    font-size: 1.05rem;
    color: var(--primary-pink);
    margin-bottom: 18px;
    font-weight: 600;
}

.village-desc {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.7;
}

/* =============================================== */
/* PANEL SECTION */
/* =============================================== */

.panel-section {
    background: rgba(17, 24, 39, 0.8);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(139, 92, 246, 0.3);
    border-radius: 30px;
    padding: 60px 40px;
    margin: 80px 0;
    box-shadow: 0 20px 60px rgba(139, 92, 246, 0.2);
}

.panel-section h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.8rem;
    font-weight: 800;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
    margin-bottom: 20px;
    letter-spacing: 1px;
}

.panel-title {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    color: var(--primary-pink);
    text-align: center;
    margin-bottom: 60px;
    font-style: italic;
    font-weight: 600;
}

.panel-moderator-card {
    background: rgba(0, 0, 0, 0.5);
    border: 3px solid transparent;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                      var(--gradient-3);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    border-radius: 20px;
    padding: 40px;
    text-align: center;
    margin-bottom: 60px;
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    transition: all 0.3s ease;
}

.panel-moderator-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(236, 72, 153, 0.4);
}

.moderator-badge {
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--gradient-3);
    color: white;
    padding: 8px 28px;
    border-radius: 25px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    box-shadow: 0 5px 20px rgba(236, 72, 153, 0.4);
}

.moderator-image-container {
    width: 140px;
    height: 140px;
    margin: 20px auto;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid transparent;
    background: var(--gradient-3);
    padding: 4px;
}

.moderator-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.moderator-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 12px;
}

.moderator-designation {
    font-family: 'Inter', sans-serif;
    font-size: 1.15rem;
    color: var(--text-secondary);
    margin-bottom: 8px;
}

.moderator-company {
    font-family: 'Inter', sans-serif;
    font-size: 1.05rem;
    color: var(--primary-pink);
    font-weight: 600;
}

.panelists-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.panelist-card {
    background: rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(139, 92, 246, 0.3);
    border-radius: 20px;
    padding: 25px;
    display: flex;
    align-items: center;
    gap: 20px;
    transition: all 0.3s ease;
}

.panelist-card:hover {
    border-color: var(--primary-purple);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
    transform: translateY(-5px);
}

.panelist-image-container {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid transparent;
    background: var(--gradient-1);
    padding: 3px;
    flex-shrink: 0;
}

.panelist-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.panelist-info {
    flex: 1;
}

.panelist-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: white;
    margin-bottom: 8px;
}

.panelist-designation {
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.5;
}

/* =============================================== */
/* CTF WINNERS - PRIZE CARD STYLE */
/* =============================================== */

.ctf-winners-section {
    margin-top: 80px;
    padding: 60px 40px;
    background: rgba(17, 24, 39, 0.6);
    border-radius: 30px;
    border: 2px solid rgba(139, 92, 246, 0.3);
    box-shadow: 0 20px 60px rgba(139, 92, 246, 0.2);
}

.ctf-main-heading {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.8rem;
    font-weight: 800;
    text-align: center;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.ctf-subtitle {
    text-align: center;
    color: var(--primary-pink);
    font-size: 1.5rem;
    font-family: 'Inter', sans-serif;
    margin-bottom: 60px;
    font-style: italic;
    font-weight: 600;
}

.ctf-winners {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
    max-width: 1600px;
    margin: 0 auto;
}

.ctf-winner-card {
    background: rgba(17, 24, 39, 0.9);
    backdrop-filter: blur(20px);
    border: 3px solid transparent;
    border-radius: 25px;
    padding: 0;
    text-align: center;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.ctf-winner-card.first {
    background-image: linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)),
                      linear-gradient(135deg, #FFD700, #FFA500);
    background-origin: border-box;
    background-clip: padding-box, border-box;
}

.ctf-winner-card.second {
    background-image: linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)),
                      linear-gradient(135deg, #C0C0C0, #808080);
    background-origin: border-box;
    background-clip: padding-box, border-box;
}

.ctf-winner-card.third {
    background-image: linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)),
                      linear-gradient(135deg, #CD7F32, #8B4513);
    background-origin: border-box;
    background-clip: padding-box, border-box;
}

.ctf-winner-card.rest {
    border: 3px solid rgba(139, 92, 246, 0.4);
    min-height: 350px;
}

.ctf-winner-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: var(--gradient-1);
    transform: scaleX(0);
    transition: transform 0.4s ease;
    z-index: 2;
}

.ctf-winner-card:hover::before {
    transform: scaleX(1);
}

.ctf-winner-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 60px rgba(139, 92, 246, 0.5);
}

.ctf-winner-card.first:hover {
    box-shadow: 0 25px 60px rgba(255, 215, 0, 0.6);
}

.ctf-winner-card.second:hover {
    box-shadow: 0 25px 60px rgba(192, 192, 192, 0.6);
}

.ctf-winner-card.third:hover {
    box-shadow: 0 25px 60px rgba(205, 127, 50, 0.6);
}

.ctf-team-image-container {
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
}

.ctf-team-photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease;
}

.ctf-winner-card:hover .ctf-team-photo {
    transform: scale(1.05);
    filter: brightness(1.1);
}

.ctf-team-image-container::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 25%;
    background: linear-gradient(to top, rgba(10, 10, 15, 0.9), transparent);
    pointer-events: none;
}

.ctf-position {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.6rem;
    margin: 30px 0 12px 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.ctf-team-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2rem;
    color: white;
    margin: 10px 0;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.3;
    padding: 0 20px;
}

.ctf-winner-prize {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.8rem;
    font-weight: 800;
    background: var(--gradient-3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 12px 0 30px 0;
}

.ctf-winner-noimg {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 70px 25px;
}

.ctf-team-name-big {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.8rem;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-top: 40px;
    font-weight: 800;
    letter-spacing: 2px;
    line-height: 1.3;
}

.ctf-winner-prize-big {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.8rem;
    color: var(--primary-pink);
    font-weight: 700;
    margin: 20px 0 0 0;
}

.ctf-winner-card.first .ctf-position {
    background: linear-gradient(135deg, #FFD700, #FFA500);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.ctf-winner-card.second .ctf-position {
    background: linear-gradient(135deg, #C0C0C0, #808080);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.ctf-winner-card.third .ctf-position {
    background: linear-gradient(135deg, #CD7F32, #8B4513);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* =============================================== */
/* SPEAKERS SECTION - MODERN CARDS */
/* =============================================== */

.speakers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 35px;
}

.speaker-card-passport {
    background: rgba(17, 24, 39, 0.8);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(139, 92, 246, 0.3);
    border-radius: 25px;
    padding: 0;
    overflow: hidden;
    transition: all 0.4s ease;
    position: relative;
}

.speaker-card-passport:hover {
    border-color: var(--primary-purple);
    box-shadow: 0 20px 50px rgba(139, 92, 246, 0.4);
    transform: translateY(-8px);
}

.session-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: var(--gradient-3);
    color: white;
    padding: 8px 20px;
    border-radius: 25px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    z-index: 2;
    letter-spacing: 1px;
    text-transform: uppercase;
    box-shadow: 0 5px 15px rgba(236, 72, 153, 0.4);
}

.passport-photo-container {
    width: 100%;
    height: 300px;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
}

.passport-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease;
}

.speaker-card-passport:hover .passport-photo {
    transform: scale(1.08);
}

.speaker-details {
    padding: 30px;
    text-align: center;
}

.speaker-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.7rem;
    font-weight: 700;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
}

.speaker-role {
    font-family: 'Inter', sans-serif;
    font-size: 1.05rem;
    color: white;
    margin-bottom: 10px;
    line-height: 1.5;
    font-weight: 500;
}

.speaker-company {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: var(--text-secondary);
}

/* =============================================== */
/* ACHIEVEMENTS SECTION */
/* =============================================== */

.achievements-section {
    margin-top: 60px;
}

.achievements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 35px;
}

.achievement-card {
    background: rgba(17, 24, 39, 0.8);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(139, 92, 246, 0.3);
    border-radius: 20px;
    padding: 40px;
    text-align: center;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.achievement-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-2);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
}

.achievement-card:hover::before {
    opacity: 0.12;
}

.achievement-card:hover {
    border-color: var(--primary-blue);
    box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
    transform: translateY(-8px);
}

.achievement-card h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 18px;
}

.achievement-card p {
    font-family: 'Inter', sans-serif;
    font-size: 1.05rem;
    color: var(--text-secondary);
    line-height: 1.7;
}

/* =============================================== */
/* OUTCOMES SECTION */
/* =============================================== */

.outcomes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 30px;
    margin-bottom: 70px;
}

.outcome-card {
    background: rgba(17, 24, 39, 0.8);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(139, 92, 246, 0.3);
    border-radius: 20px;
    padding: 30px;
    display: flex;
    gap: 25px;
    align-items: flex-start;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.outcome-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-3);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
}

.outcome-card:hover::before {
    opacity: 0.1;
}

.outcome-card:hover {
    border-color: var(--primary-pink);
    box-shadow: 0 15px 40px rgba(236, 72, 153, 0.3);
    transform: translateY(-5px);
}

.outcome-number {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 3rem;
    font-weight: 900;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    flex-shrink: 0;
}

.outcome-card p {
    font-family: 'Inter', sans-serif;
    font-size: 1.08rem;
    color: var(--text-secondary);
    line-height: 1.8;
    flex: 1;
}

/* =============================================== */
/* IMPACT SECTION */
/* =============================================== */

.impact-section {
    background: rgba(17, 24, 39, 0.8);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(139, 92, 246, 0.3);
    border-radius: 30px;
    padding: 60px 40px;
    box-shadow: 0 20px 60px rgba(139, 92, 246, 0.2);
}

.impact-section h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.5rem;
    font-weight: 800;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
    margin-bottom: 50px;
    letter-spacing: 2px;
}

.impact-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
}

.impact-item {
    text-align: center;
}

.impact-value {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 3.5rem;
    font-weight: 900;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 15px;
}

.impact-label {
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
}

/* =============================================== */
/* HEXAGONAL GALLERY - CENTERED */
/* =============================================== */

.gallery-section {
    position: relative;
    background: transparent;
    z-index: 40;
    padding: 80px 20px;
    min-height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.gallery-intro {
    text-align: center;
    margin-bottom: 70px;
    max-width: 900px;
}

.gallery-intro p {
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    color: var(--text-secondary);
    line-height: 1.7;
}

.gallery-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
}

.gallery-hex-container {
    width: 280px;
    height: 320px;
    overflow: hidden;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    text-decoration: none;
    position: relative;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    background: #000;
    border: 3px solid rgba(139, 92, 246, 0.4);
}

.gallery-hex-container:hover {
    transform: translateY(-10px) scale(1.08);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.5);
    border-color: var(--primary-pink);
    z-index: 10;
}

.gallery-hex-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: all 0.4s ease;
    position: absolute;
    top: 0;
    left: 0;
}

.gallery-hex-container:hover img {
    transform: scale(1.05);
    filter: brightness(0.3);
}

.gallery-hex-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.7), rgba(236, 72, 153, 0.7));
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
}

.gallery-hex-container:hover::before {
    opacity: 1;
}

.gallery-caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    text-align: center;
    color: white;
    padding: 20px;
    font-weight: 700;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 2;
    font-family: 'Space Grotesk', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.gallery-hex-container:hover .gallery-caption {
    opacity: 1;
}

.gallery-category {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    color: white;
    padding: 8px 20px;
    border-radius: 25px;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.gallery-caption h4 {
    font-size: 1.3rem;
    margin: 0;
    line-height: 1.4;
    font-weight: 800;
    color: white;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.9);
    word-wrap: break-word;
}

/* =============================================== */
/* FOOTER */
/* =============================================== */

.footer {
    background: rgba(10, 10, 15, 0.95);
    border-top: 2px solid var(--border-color);
    padding: 60px 20px 30px;
    margin-top: 100px;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
}

.footer-section h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 20px;
}

.footer-section p {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 10px;
}

.footer-bottom {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 30px;
    border-top: 1px solid rgba(139, 92, 246, 0.2);
    text-align: center;
}

.footer-bottom p {
    font-family: 'Inter', sans-serif;
    color: var(--text-secondary);
    margin-bottom: 10px;
}

.terminal-prompt {
    font-family: 'Space Grotesk', monospace;
    color: var(--primary-purple);
    font-weight: 600;
}

/* =============================================== */
/* RESPONSIVE DESIGN */
/* =============================================== */

@media (max-width: 1200px) {
    .main-title {
        font-size: 6rem;
        gap: 25px;
    }
    
    .logo-image {
        height: 160px;
    }
    
    .content-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 968px) {
    .main-title {
        font-size: 4.5rem;
        gap: 20px;
    }
    
    .logo-image {
        height: 130px;
    }
    
    .subtitle {
        font-size: 1.2rem;
    }
    
    .gallery-hex-container {
        width: 260px;
        height: 300px;
    }
}

@media (max-width: 768px) {
    .main-title {
        font-size: 3.5rem;
        gap: 15px;
    }
    
    .logo-image {
        height: 100px;
    }
    
    .hero-line-4 {
        flex-direction: column;
        gap: 20px;
    }
    
    .section-header {
        font-size: 2.2rem;
    }
    
    .gallery-hex-container {
        width: 220px;
        height: 260px;
    }
}

@media (max-width: 480px) {
    .main-title {
        font-size: 2.5rem;
        gap: 10px;
        flex-direction: column;
    }
    
    .logo-image {
        height: 80px;
    }
    
    .subtitle {
        font-size: 1rem;
    }
    
    .section-header {
        font-size: 1.8rem;
    }
    
    .gallery-hex-container {
        width: 180px;
        height: 210px;
    }
}
