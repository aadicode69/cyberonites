import BugBountyImage from "../../img/security/bug-bounty.jpg";
import introductionImage from "../../img/security/introduction.png";
import scopeImage from "../../img/security/scope.png";
import unauthorizedImage from "../../img/security/unauthorized.png";
import acceptImage from "../../img/security/accept.png";
import awardsImage from "../../img/security/awards.png";
import safeHarbourImage from "../../img/security/safe-harbour.png";
import RedcrossSvgVector from "./svg/redcross-svg-vector";
import CheckMarkSvgVector from "./svg/check-mark-svg-vector";

export const secutityData = [
  {
    image: BugBountyImage,
    title: "Our",
    subtitle: "Vulnerability Disclosure Program",
    description: `To ensure a streamlined and efficient review process, only reports
            submitted through our designated contact form will be considered for
            evaluation and potential inclusion in our Hall of Fame.`,
    button: "Submit Report",
    buttonLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScGfpNqJ-LFN71vjKv_EZtpDHOQcNWkuLCThwR3nIjsHrUDFQ/viewform",
  },
  {
    image: introductionImage,
    title: "Introduction",
    description: `As one of the fastest-growing tech club, Cyberonites is dedicated to securing millions of careers and future aspirations. While we strive to protect our users, we invite security researchers and bug hunters to help secure Cyberonites. Our goals are scalability, reliability, and security. Despite our robust in-house security measures, we value peer review from the technical community. We take every vulnerability disclosure seriously. If you want to be our "extra pair of eyes," read on!`,
  },
  {
    image: scopeImage,
    title: "Scope",
    subtitle: "TARGET : cyberonites.com/*",
    description: `Our target in scope includes the comprehensive defense of our applications, and data against an evolving array of cyber threats. Any endpoint or asset not explicitly mentioned in the scope, including vendor endpoints, third-party application endpoints, or internal and external endpoints belonging to the Cyberonites domain, is strictly off-limits for testing purposes. This applies to all phases of the MITRE ATT&CK framework and the Lockheed Martin Cyber Kill Chain.`,
  },
  {
    image: unauthorizedImage,
    title: "Unauthorized",
    description: `Any type of Denial of Service (DoS) or Distributed Denial of Service (DDoS) attacks, whether conducted with automated scanners or manually, are strictly prohibited. Brute-forcing and dictionary attacks are also banned. Social engineering techniques are explicitly forbidden. These restrictions are in place to safeguard the integrity, availability, and confidentiality of systems and data, ensuring that all security testing activities are conducted responsibly and within ethical boundaries.`,
  },
  {
    image: acceptImage,
    title: "Accepted Bugs",
    description: `Cyberonites accepts any vulnerability, whether part of the OWASP Top 10 or SANS 25, provided they are directly associated with systems in scope, are unique (not previously reported), and are not classified as P5 issues according to Bugcrowd\’s VRT / Vulnerability Rating taxonomy. The following vulnerabilities are not accepted:`,
    grid: {
      icon: RedcrossSvgVector,
      items: [
        "Insecure Cookies",
        "Known Issues",
        "Intended Functionalities",
        "HTTP Errors",
        "Public File Disclosure",
        "Clickjacking Restrictions",
        "Error Message",
        "Fingerprinting",
        "Duplicate Reports",
      ],
    },
  },
  {
    image: awardsImage,
    title: "Rewards",
    description: `If your findings adhere to our accepted vulnerabilities criteria without violating our expectations, we appreciate your effort and time. You will be acknowledged in our Hall of Fame and Acknowledgement Certificate. You may publicly disclose your findings for educational purposes after we resolve the issue and notify you. Cyberonites currently does not offer cash rewards for vulnerability disclosures but plans to introduce them in the future.`,
  },
  {
    image: safeHarbourImage,
    title: "Safe Harbour",
    description: `When conducting vulnerability research, according to this policy, we consider this research conducted under this policy to be:`,
    list: {
      icon: CheckMarkSvgVector,
      items: [
        "Authorized no legal action for accidental, good-faith violations.",
        "Authorized under anti-circumvention laws; waive claims for bypassing tech controls.",
        "Exempt from TOS/AUP restrictions limiting security research, on a limited basis.",
        "Conducted lawfully, enhancing Cyberonites's security, in good faith.",
        "Adhere to all laws; compliance affirmed if legal action arises.",
        "No authorization for third-party activities without written consent; disclaim liability.",
      ],
    },
  },
];
