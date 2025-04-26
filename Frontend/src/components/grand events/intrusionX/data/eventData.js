import { FaTerminal, FaHandshake, FaUsers, FaUserTie, FaClipboardCheck, FaTrophy, FaCamera } from "react-icons/fa";

// Statistics for the event
export const statistics = [
  { label: "Total Teams", value: "25", icon: "FaUsers" },
  { label: "External Teams", value: "10+", icon: "FaUniversity" },
  { label: "GLA Teams", value: "15", icon: "FaGraduationCap" },
  { label: "Prize Pool", value: "₹3,00,000", icon: "FaTrophy" }
];

// Event highlights
export const highlights = [
  "25 Dynamic Teams Participation",
  "36-Hour Non-Stop Hacking",
  "Expert Panel of Judges",
  "Hands-on Cybersecurity Challenges",
  "Attractive Prizes & Certifications",
  "Networking with Industry Professionals"
];

// Navigation sections - using string names for icons to avoid JSX in JS files
export const navigationSections = [
  { id: "overview", name: "Overview", iconName: "FaTerminal" },
  { id: "sponsors", name: "Sponsors", iconName: "FaHandshake" },
  { id: "teams", name: "Teams", iconName: "FaUsers" },
  { id: "judges", name: "Judges", iconName: "FaUserTie" },
  { id: "evaluation", name: "Evaluation", iconName: "FaClipboardCheck" },
  { id: "winners", name: "Winners", iconName: "FaTrophy" },
  { id: "gallery", name: "Gallery", iconName: "FaCamera" }
];

// Section color mapping
export const sectionColors = {
  overview: "cyan",
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
    images: [
      "/src/img/intrusionX/DSC_0540.JPG",
      "/src/img/intrusionX/DSC_7101.JPG",
      "/src/img/intrusionX/DSC_7300.JPG",
      "/src/img/intrusionX/DSC_7419.JPG"
    ]
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
    images: [
      "/src/img/intrusionX/DSC_7414.JPG",
      "/src/img/intrusionX/DSC_7105.JPG"
    ]
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
    images: [
      "/src/img/intrusionX/DSC_7411.JPG",
      "/src/img/intrusionX/DSC_7436.JPG"
    ]
  }
];

// Judges/Guests data
export const guests = [
  {
    name: "Mr. Aman Singh Chauhan",
    role: "Graduate Engineer Trainee at HCL",
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
    name: "Mr. Kashish Kanojia",
    role: "Founder & CEO of IDevSec",
    expertise: "Application Security & Secure Coding"
  },
  {
    name: "Mr. Deepak Kumar",
    role: "Co-Founder of IDevSec & OWASP Noida Lead",
    expertise: "OWASP Top 10 & Web Security"
  },
  {
    name: "Mr. Mohsin Quresh",
    role: "Subject Matter Expert at Hack The Box & IBM Trainer",
    expertise: "Penetration Testing & Security Research"
  },
];

// Participating institutions
export const participatingInstitutions = [
  "IIT Mandi", "PIET", "MRIIS, Faridabad", "Sagar Institute", "MIT", "IGNOU", 
  "GLA University", "VIT Bhopal", "Graphic Era University", "Manipal University Jaipur"
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

// Challenge categories
export const challengeCategories = [
  { name: "Web Application Security", color: "cyan" },
  { name: "Network Penetration Testing", color: "pink" },
  { name: "Reverse Engineering", color: "yellow" },
  { name: "Cryptography", color: "green" },
  { name: "Digital Forensics", color: "blue" }
];

// Event timeline
export const eventTimeline = [
  { day: "DAY 1", title: "Registration & Kickoff", description: "Team Formation, Problem Statement" },
  { day: "NIGHT", title: "Hacking Session", description: "36-Hour Non-Stop Challenge" },
  { day: "DAY 2", title: "Presentations & Awards", description: "Evaluation, Prize Distribution" }
];

// Event leaders
export const eventLeaders = [
  "Dr. Sandeep Rathod – HOD, CEA",
  "Dr. Hitendra Garg – HOD, Specialization",
  "Dr. Asheesh Tiwari – Associate Professor",
  "Akash Chaudhary – Assistant Professor",
  "Rahul Shandilya – Assistant Professor",
  "Shamsher Khan – Assistant Professor",
  "Arvind Prasad – Assistant Professor",
  "Shubham Shukla – Assistant Professor"
];
