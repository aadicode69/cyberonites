import { 
  firstPlaceWinnerImages, 
  secondPlaceWinnerImages, 
  thirdPlaceWinnerImages,
} from "./IntrusionXImages";

// Statistics for the event
export const statistics = [
  { label: "Total Teams", value: "25", icon: "FaUsers" },
  { label: "External Teams", value: "10+", icon: "FaUniversity" },
  { label: "Internal Teams", value: "15", icon: "FaGraduationCap" },
  { label: "Prize Pool", value: "₹3,00,000", icon: "FaTrophy" }
];

// Event highlights
export const highlights = [
  "25 Dynamic Teams Participation",
  "24-Hour Non-Stop Hacking",
  "Expert Panel of Judges",
  "Hands-on Cybersecurity Challenges",
  "Attractive Prizes & Certifications",
  "Networking with Industry Professionals"
];

// Navigation sections - using string names for icons to avoid JSX in JS files
export const navigationSections = [
  { id: "overview", name: "Overview", iconName: "FaTerminal" },
  { id: "challenges", name: "Challenges", iconName: "FaShieldAlt" },
  { id: "winners", name: "Winners", iconName: "FaTrophy" },
  { id: "teams", name: "Teams", iconName: "FaUsers" },
  { id: "judges", name: "Judges", iconName: "FaUserTie" },
  { id: "evaluation", name: "Evaluation", iconName: "FaClipboardCheck" },
  { id: "sponsors", name: "Sponsors", iconName: "FaHandshake" },
  { id: "gallery", name: "Gallery", iconName: "FaCamera" }
];

// Section color mapping
export const sectionColors = {
  overview: "cyan",
  challenges: "red",
  sponsors: "green",
  teams: "magenta",
  judges: "yellow",
  evaluation: "cyan",
  winners: "green", 
  gallery: "magenta"
};

// Winners data
export const winners = [
  {
    name: "Team Captcha_Unrecognised",
    college: "MRIIS, Faridabad",
    prize: "₹15,000 + ₹5,000 & CEH Practical Voucher (Cyberyaan)",
    position: "1st Prize",
    variant: "primary",
    prizeDetails: [
      "Cash Prize: ₹15,000",
      "Additional Prize: ₹5,000",
      "CEH Practical Voucher (Sponsored by Cyberyaan)"
    ],
    achievement: "Team Captcha_Unrecognised demonstrated exceptional skills in solving complex cybersecurity challenges, showcasing innovative approaches to penetration testing and vulnerability analysis.",
    images: firstPlaceWinnerImages
  },
  {
    name: "Team Deathly Hallows",
    college: "GLA University (1st Year Team)",
    prize: "₹10,000 + 3 CRTP Certificates (Altered Security)",
    position: "2nd Prize",
    variant: "secondary",
    prizeDetails: [
      "Cash Prize: ₹10,000",
      "3 CRTP Certificates (Sponsored by Altered Security)"
    ],
    images: secondPlaceWinnerImages
  },
  {
    name: "Team Cyber Sentinels",
    college: "GLA University",
    prize: "₹5,000",
    position: "3rd Prize",
    variant: "tertiary",
    prizeDetails: [
      "Cash Prize: ₹5,000"
    ],
    images: thirdPlaceWinnerImages
  }
];

// Judges/Guests data
export const guests = [
  {
    name: "Mr. Aman Singh Chauhan",
    role: "Security Researcher at HCL Technologies",
    expertise: "Web Application Security"
  },
  {
    name: "Mr. Lucky Thandel",
    role: "Security Researcher at HackIT",
    expertise: "Vulnerability Research & Bug Bounty"
  },
  {
    name: "Mr. Ritaj Sharma",
    role: "Security Consultant at Deloitte",
    expertise: "Security Assessment & Consulting"
  },
  {
    name: "Mr. Deepak Yadav",
    role: "Cyber Security Expert & Evangelist",
    expertise: "Network Security & Threat Analysis"
  },
  {
    name: "Mr. Pankaj Yadav",
    role: "Founder of Cyberyaan",
    expertise: "Cybersecurity Expert & Entrepreneur"
  },
  {
    name: "Mr. Mohsin Qureshi",
    role: "SME at Hack The Box, Trainer at Kyrion Technologies",
    expertise: "Penetration Testing & Security Research"
  },
  {
    name: "Mr. Kashish Kanojia",
    role: "Founder & CEO of IDevSec",
    expertise: "Application Security & Secure Coding"
  },
  {
    name: "Mr. Deepak Kumar",
    role: "Co-Founder of IDevSec & OWASP Noida Lead",
    expertise: "OWASP Top 10 & Web Security"
  },
];

// Participating institutions
export const participatingInstitutions = [
  "IIT Mandi", "PIET", "MRIIS, Faridabad", "Sagar Institute", "MIT", "IGNOU", 
  "GLA University", "VIT Bhopal", "Graphic Era University", "Manipal University Jaipur",
  "Dev Bhumi University"
];

// Judging criteria
export const judgingCriteria = [
  "Technical proficiency in solving cybersecurity challenges",
  "Innovation in approach and methodology",
  "Teamwork and collaboration",
  "Presentation and communication of solutions",
  "Ethical considerations and best practices"
];

// Evaluation timeline
export const evaluationSteps = [
  {
    step: "01",
    title: "INITIAL ASSESSMENT",
    description: "Judges made an initial round to understand each team's approach"
  },
  {
    step: "02",
    title: "MIDWAY EVALUATION",
    description: "Technical progress check and feedback session with teams"
  },
  {
    step: "03",
    title: "FINAL PRESENTATIONS",
    description: "Teams demonstrated their complete solutions to the judging panel"
  },
  {
    step: "04",
    title: "DELIBERATION & RESULTS",
    description: "Judges deliberated to select winners based on comprehensive evaluation"
  }
];

export const captions = [
  "Judges assessing team presentations and technical implementations",
  "Team explaining their approach to vulnerability exploitation",
  "Evaluation of defensive security measures implemented by participants",
  "Technical review of network penetration methodologies",
  "Judges analyzing solution effectiveness and innovation",
  "In-depth questioning of participants about their approach",
  "Final deliberation on technical merit and implementation"
];

// Add cybersecurity challenge problems - include all 19 problems
export const challengeProblems = [
  {
    id: 1,
    title: "SIIOT DEVICES ARE TARGETED BY MALWARE, CAUSING DISRUPTIONS AND SAFETY RISKS.",
    description: "IIOT NETWORKS POWER INDUSTRIES LIKE MANUFACTURING AND ENERGY BUT OFTEN LACK SECURITY, MAKING THEM VULNERABLE TO CYBER THREATS.",
    challenges: ["LACK OF ENDPOINT SECURITY IN LEGACY IIOT DEVICES.", "REAL-TIME MALWARE DETECTION WITHOUT AFFECTING SYSTEM PERFORMANCE."]
  },
  {
    id: 2,
    title: "FIRMWARE UPDATES IN IIOT DEVICES ARE VULNERABLE TO TAMPERING AND ATTACKS.",
    description: "MANY IIOT DEVICES LACK SECURE UPDATE MECHANISMS, LEAVING THEM OPEN TO MALICIOUS FIRMWARE INJECTION.",
    challenges: ["ENSURING FIRMWARE AUTHENTICITY AND INTEGRITY.", "SECURELY DELIVERING UPDATES OVER UNTRUSTED NETWORKS."]
  },
  {
    id: 3,
    title: "TRADITIONAL SECURITY MONITORING IS INEFFECTIVE AGAINST ADVANCED CYBER THREATS.",
    description: "IIOT GENERATES VAST OPERATIONAL DATA, REQUIRING AI-DRIVEN ANOMALY DETECTION TO PREVENT CYBERATTACKS.",
    challenges: ["DIFFERENTIATING BETWEEN LEGITIMATE CHANGES AND SECURITY THREATS.", "PROCESSING LARGE-SCALE IIOT DATA IN REAL-TIME."]
  },
  {
    id: 4,
    title: "AI MODELS ARE VULNERABLE TO ADVERSARIAL ATTACKS THAT MANIPULATE PREDICTIONS.",
    description: "ATTACKERS CRAFT INPUTS THAT MISLEAD AI, AFFECTING APPLICATIONS LIKE FRAUD DETECTION",
    challenges: ["DETECTING SUBTLE ADVERSARIAL INPUT MODIFICATIONS.", "PREVENTING MODEL PERFORMANCE DEGRADATION."]
  },
  {
    id: 5,
    title: "AI-GENERATED PHISHING ATTACKS BYPASS TRADITIONAL EMAIL FILTERING",
    description: "AI CAN ANALYZE LINGUISTIC PATTERNS AND METADATA TO DETECT PHISHING ATTEMPTS.",
    challenges: ["HIGH ACCURACY IN DISTINGUISHING PHISHING EMAILS", "HANDLING MULTILINGUAL AND EVOLVING PHISHING TACTICS"]
  },
  {
    id: 6,
    title: "AI MODELS CAN BE COMPROMISED THROUGH POISONED TRAINING DATA",
    description: "DATA POISONING LEADS TO INCORRECT AI DECISIONS, AFFECTING SECURITY-SENSITIVE APPLICATIONS.",
    challenges: ["DETECTING POISONED DATA IN LARGE DATASETS", "ENSURING AI MODEL ROBUSTNESS"]
  },
  {
    id: 7,
    title: "EMPLOYEES WITH ACCESS TO CRITICAL DATA POSE SECURITY THREATS",
    description: "BEHAVIORAL ANALYTICS CAN HELP DETECT SUSPICIOUS INSIDER ACTIVITIES.",
    challenges: ["DIFFERENTIATING BETWEEN MALICIOUS AND UNINTENTIONAL ACTIONS", "DETECTING SOPHISTICATED INSIDER THREATS"]
  },
  {
    id: 8,
    title: "MISCONFIGURATIONS IN CLOUD ENVIRONMENTS EXPOSE SENSITIVE DATA",
    description: "MANY ORGANIZATIONS STRUGGLE TO DETECT AND FIX MISCONFIGURATIONS PROMPTLY.",
    challenges: ["SCANNING CLOUD INFRASTRUCTURE WITHOUT PERFORMANCE ISSUES", "AUTOMATING REMEDIATION WITHOUT DISRUPTING OPERATIONS"]
  },
  {
    id: 9,
    title: "CENTRALIZED IDENTITY SYSTEMS ARE VULNERABLE TO BREACHES",
    description: "BLOCKCHAIN ENABLES DECENTRALIZED IDENTITY VERIFICATION FOR SECURE AUTHENTICATION.",
    challenges: ["ENSURING PRIVACY WHILE ENABLING SECURE VERIFICATION", "INTEGRATING BLOCKCHAIN WITH AUTHENTICATION SYSTEMS"]
  },
  {
    id: 10,
    title: "TRADITIONAL ANTIVIRUS STRUGGLES TO DETECT EVOLVING MALWARE STRAINS",
    description: "AI-DRIVEN ANALYSIS CAN DETECT NEW THREATS BASED ON BEHAVIOR AND HEURISTICS.",
    challenges: ["DETECTING ZERO-DAY MALWARE VARIANTS", "REDUCING FALSE POSITIVES IN MALWARE CLASSIFICATION"]
  },
  {
    id: 11,
    title: "TRADITIONAL ANTIVIRUS IS INEFFECTIVE AGAINST ZERO-DAY THREATS",
    description: "AI CAN DETECT SUSPICIOUS SYSTEM BEHAVIOR INDICATING NEW EXPLOITS.",
    challenges: ["ACCURATELY DETECTING NOVEL ATTACK PATTERNS", "BALANCING SECURITY WITH SYSTEM PERFORMANCE"]
  },
  {
    id: 12,
    title: "USB DEVICES SPREAD MALWARE AND EXECUTE BADUSB ATTACKS",
    description: "A USB THREAT DETECTION TOOL CAN SCAN AND RESTRICT MALICIOUS ACTIVITIES.",
    challenges: ["PREVENTING UNAUTHORIZED DATA EXFILTRATION VIA USB"]
  },
  {
    id: 13,
    title: "MALICIOUS APPS STEAL USER DATA",
    description: "AI-POWERED SCANNING CAN ANALYZE APP BEHAVIOR AND PERMISSIONS TO IDENTIFY THREATS.",
    challenges: ["DYNAMICALLY ANALYZING APP PERMISSIONS", "MINIMIZING FALSE POSITIVES"]
  },
  {
    id: 14,
    title: "CYBERCRIMINALS EXPLOIT MOBILE PAYMENT VULNERABILITIES",
    description: "AI-BASED FRAUD DETECTION CAN SECURE TRANSACTIONS AGAINST UNAUTHORIZED ACTIVITIES.",
    challenges: ["DETECTING FRAUD WITHOUT DISRUPTING LEGITIMATE PAYMENTS"]
  },
  {
    id: 15,
    title: "DEEPFAKE TECHNOLOGY IS USED FOR IDENTITY THEFT AND MISINFORMATION",
    description: "AI-BASED DETECTION CAN HELP IDENTIFY DEEPFAKES IN REAL TIME.",
    challenges: ["IDENTIFYING DEEPFAKES WITH MINIMAL FALSE POSITIVES"]
  },
  {
    id: 16,
    title: "SENSITIVE CLOUD DATA IS FREQUENTLY EXPOSED DUE TO MISCONFIGURATIONS",
    description: "AI CAN DETECT AND PREVENT DATA LEAKS BY MONITORING ACCESS PATTERNS.",
    challenges: ["DETECTING INSIDER THREATS WITHOUT PRIVACY VIOLATIONS"]
  },
  {
    id: 17,
    title: "RANSOMWARE ENCRYPTS CRITICAL DATA AND DEMANDS RANSOM PAYMENTS",
    description: "AI-DRIVEN BEHAVIOR ANALYSIS CAN DETECT EARLY RANSOMWARE INDICATORS.",
    challenges: ["DETECTING RANSOMWARE IN REAL TIME BEFORE ENCRYPTION STARTS"]
  },
  {
    id: 18,
    title: "FINANCIAL INSTITUTIONS STRUGGLE TO TRACK AND DETECT ILLICIT MONEY LAUNDERING ACTIVITIES ACROSS GLOBAL TRANSACTIONS.",
    description: "MONEY LAUNDERING NETWORKS EXPLOIT WEAK COMPLIANCE MECHANISMS IN FINANCIAL SYSTEMS, MAKING IT DIFFICULT TO DETECT SUSPICIOUS ACTIVITIES IN REAL-TIME. AI-DRIVEN BEHAVIORAL ANALYSIS COMBINED WITH BLOCKCHAIN'S IMMUTABLE TRANSACTION RECORDS CAN IMPROVE AML COMPLIANCE. THE CHALLENGE IS TO DEVELOP AN AML SYSTEM THAT DETECTS AND PREVENTS FINANCIAL CRIMES WITH GREATER ACCURACY.",
    challenges: ["HANDLING LARGE-SCALE FINANCIAL TRANSACTIONS WHILE DETECTING SUBTLE LAUNDERING PATTERNS.", "ENSURING BLOCKCHAIN-BASED TRACKING DOES NOT VIOLATE PRIVACY LAWS"]
  },
  {
    id: 19,
    title: "CROSS-BORDER PAYMENTS ARE SLOW, EXPENSIVE, AND VULNERABLE TO FRAUD DUE TO MULTIPLE INTERMEDIARIES.",
    description: "TRADITIONAL CROSS-BORDER PAYMENT SYSTEMS INVOLVE BANKS, CLEARINGHOUSES, AND REGULATORY BODIES, LEADING TO DELAYS AND SECURITY VULNERABILITIES. BLOCKCHAIN TECHNOLOGY CAN PROVIDE A DECENTRALIZED, SECURE, AND EFFICIENT ALTERNATIVE. THE CHALLENGE IS TO DESIGN A BLOCKCHAINBASED PAYMENT SYSTEM THAT REDUCES TRANSACTION TIME AND ENSURES SECURE SETTLEMENTS.",
    challenges: ["MAINTAINING COMPLIANCE WITH INTERNATIONAL FINANCIAL REGULATIONS", "PREVENTING DOUBLE-SPENDING AND TRANSACTION ROLLBACKS"]
  }
];

// Event timeline
export const eventTimeline = [
  { day: "DAY 1", title: "Registration & Kickoff", description: "Team Formation, Problem Statement" },
  { day: "NIGHT", title: "Hacking Session", description: "24-Hour Non-Stop Challenge" },
  { day: "DAY 2", title: "Presentations & Awards", description: "Evaluation, Prize Distribution" }
];

// Event leaders
export const eventLeaders = [
  "Dr. Sandeep Rathod – HOD, CEA",
  "Dr. Hitendra Garg – HOD, Specialization, CEA",
  "Dr. Asheesh Tiwari – Faculty Coordinator",
  "Akash Chaudhary – Assistant Professor",
  "Rahul Shandilya – Assistant Professor",
  "Shamsher Khan – Assistant Professor",
  "Arvind Prasad – Assistant Professor",
  "Shubham Shukla – Assistant Professor",
  "Deepak Kumar Sah – Assistant Professor",
  "Rohini Raina – Lady Proctor"
];

// Add problem statement contributors
export const problemStatementContributors = [
  {
    name: "Dr. Ram Kumar G",
    role: "Cybersecurity & Risk Leader, Global Automotive Company",
    experience: "22 years",
    count: "3 problem statements"
  },
  {
    name: "Dr. Lalit Gupta",
    role: "President, Cybersecurity Council",
    experience: "30 years",
    count: "4 problem statements"
  },
  {
    name: "Dhiraj Tandon",
    role: "Senior Solutions Architect, Binalyze",
    experience: "18 years",
    count: "4 problem statements"
  },
  {
    name: "Sanjeev Multani",
    role: "Security Lead, Nuvollo Corp | Ex-Professor, DU",
    experience: "10 years",
    count: "2 problem statements"
  },
  {
    name: "Mr. Mohsin Qureshi",
    role: "SME at Hack The Box, Trainer at Kyrion Technologies",
    experience: "10 years",
    count: "5 problem statements"
  },
  {
    name: "Gaurav Gogia",
    role: "Security Engineer, Qualys",
    experience: "8 years",
    count: "2 problem statements"
  }
];

// Add sponsor contributions
export const sponsorContributions = [
  {
    name: "Cyberyaan",
    contributions: [
      "CEH Certification for winners: ₹60,000",
      "₹5,000 Cash for Winners",
      "CEH Training for 3 anchors: ₹30,000",
      "Internships (2 months) for Club President & VP: ₹20,000/month",
      "50% Discount on CEH for other team members"
    ],
    totalValue: "₹2,85,000"
  },
  {
    name: "Altered Security",
    contributions: [
      "Sponsored 3 CRTP licenses worth $270 each"
    ],
    totalValue: "$810 (Approx. ₹67,000)"
  },
  {
    name: ".xyz",
    contributions: [
      "Provided 50 domain names (1-year) worth $20 each"
    ],
    totalValue: "$1,000 (Approx. ₹82,000)"
  },
  {
    name: "Unstop",
    contributions: [
      "Outreach support, media promotion & visibility"
    ],
    totalValue: "Non-monetary"
  }
];

// Add participant testimonials
export const testimonials = [
  {
    quote: "IntrusionX was one of the most intense and rewarding hackathons I've ever attended.",
    author: "Participant from IIT Mandi"
  },
  {
    quote: "Great platform for students to experience real-world cyber problem-solving. We'll definitely come back!",
    author: "Participant from VIT Bhopal"
  }
];

// Add sponsor data
export const sponsors = [
  {
    name: "CYBERYAAN",
    logo: "cyberyaan",
    role: "Premium Sponsor",
    contribution: "₹2,85,000"
  },
  {
    name: "ALTERED SECURITY",
    logo: "alteredSecurity",
    role: "Training Partner",
    contribution: "₹67,000"
  },
  {
    name: "UNSTOP",
    logo: "unstop",
    role: "Platform Partner",
    contribution: "Outreach & Promotion"
  },
  {
    name: ".XYZ",
    logo: "xyz",
    role: "Domain Partner",
    contribution: "₹82,000"
  }
];

// Add mentors data
export const mentors = [
  {
    name: "Dr. Sandeep Rathod",
    role: "Primary Mentor",
    position: "Head of Department, CEA",
    expertise: "Cybersecurity Policy & Leadership",
    imgPath: "mentor1" // Using key for mentorImages object
  },
  {
    name: "Dr. Arvind Prasad",
    role: "Co-Mentor",
    position: "Assistant Professor, Cyberonites",
    expertise: "Network Security & Digital Forensics",
    imgPath: "mentor2" // Using key for mentorImages object
  }
];

// Rename this export from challengeCategories to challengeCategoriesList
export const challengeCategoriesList = [
  { name: "IIoT Security", color: "red" },
  { name: "AI Security", color: "blue" },
  { name: "Blockchain", color: "yellow" },
  { name: "Malware Analysis", color: "purple" },
  { name: "Mobile Security", color: "green" },
  { name: "Cloud Security", color: "orange" },
  { name: "Deepfake Detection", color: "gray" },
  { name: "Insider Threats", color: "indigo" }
];
