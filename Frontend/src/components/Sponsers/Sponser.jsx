import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Spon.css";

import AlteredSecurityLogo from "../../img/sponsor-logo/altered-security.png";
import MultigradLogo from "../../img/sponsor-logo/multigrade.png";
import CIGLogo from "../../img/sponsor-logo/cia.png";
import OffsecLogo from "../../img/sponsor-logo/offsec.png";
import YCFLogo from "../../img/sponsor-logo/ycf-logo.jpg";
import AbhibusLogo from "../../img/escalate-v2/sponsor/abhibus.webp";
import BootcodingLogo from "../../img/escalate-v2/sponsor/Bootcoding.webp";
import BurgerjnLogo from "../../img/escalate-v2/sponsor/burgerjn.webp";
import CsataLogo from "../../img/escalate-v2/sponsor/csata.webp";
import CTF7Logo from "../../img/escalate-v2/sponsor/CTF7.webp";
import CyberfratNextgenLogo from "../../img/escalate-v2/sponsor/Cyberfratnextgen.webp";
import DefronixLogo from "../../img/escalate-v2/sponsor/defronix.webp";
import FizzifyLogo from "../../img/escalate-v2/sponsor/Fizzify.webp";
import GiveMyCertiLogo from "../../img/escalate-v2/sponsor/givemycerti.webp";
import InterviewBuddyLogo from "../../img/escalate-v2/sponsor/interviewbuddy.webp";
import MarketMafiaLogo from "../../img/escalate-v2/sponsor/marketmafia.webp";
import ModernSecurityLogo from "../../img/escalate-v2/sponsor/ModernSecurity.webp";
import OffSecNewLogo from "../../img/escalate-v2/sponsor/OffSec.webp";
import OSENLogo from "../../img/escalate-v2/sponsor/OSEN.webp";
import SecOpsLogo from "../../img/escalate-v2/sponsor/SecOps.webp";
import SquareBoatLogo from "../../img/escalate-v2/sponsor/SquareBoat.webp";
import UnstopLogo from "../../img/escalate-v2/sponsor/unstop.webp";

import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import './Spon.css';


const Sponsor = ({ heading }) => {
  const sponsors = [
    { href: "https://www.alteredsecurity.com/", alt: "Altered Security", img: AlteredSecurityLogo },
    { href: "https://www.cyintglobal.com/", alt: "Cyber Intelligence Global", img: CIGLogo },
    { href: "https://www.multigrad.in/", alt: "Multigrad", img: MultigradLogo },
    { href: "https://www.offsec.com/", alt: "Offensive Security", img: OffsecLogo },
    { href: "https://ycfteam.in/", alt: "YCF Team", img: YCFLogo },
    { href: "#", alt: "Abhibus", img: AbhibusLogo },
    { href: "#", alt: "Bootcoding", img: BootcodingLogo },
    { href: "#", alt: "Burgerjn", img: BurgerjnLogo },
    { href: "#", alt: "CSATA", img: CsataLogo },
    { href: "#", alt: "CTF7", img: CTF7Logo },
    { href: "#", alt: "Cyberfrat Nextgen", img: CyberfratNextgenLogo },
    { href: "#", alt: "Defronix", img: DefronixLogo },
    { href: "#", alt: "Fizzify", img: FizzifyLogo },
    { href: "#", alt: "GiveMyCerti", img: GiveMyCertiLogo },
    { href: "#", alt: "InterviewBuddy", img: InterviewBuddyLogo },
    { href: "#", alt: "Market Mafia", img: MarketMafiaLogo },
    { href: "#", alt: "Modern Security", img: ModernSecurityLogo },
    { href: "#", alt: "OffSec", img: OffSecNewLogo },
    { href: "#", alt: "OSEN", img: OSENLogo },
    { href: "#", alt: "SecOps", img: SecOpsLogo },
    { href: "#", alt: "SquareBoat", img: SquareBoatLogo },
    { href: "#", alt: "Unstop", img: UnstopLogo },
  ];

  return (
    <section className="logo-loop-section" id="sponsors">
      <div className="logo-loop-header">
        <p className="logo-loop-eyebrow">Powering EscalateX</p>
        <h2 className="logo-loop-title">{heading || "Our Sponsors"}</h2>
        <p className="logo-loop-subtitle">
          Brands that support and amplify the EscalateX cyber‑security ecosystem.
        </p>
      </div>

      <div className="logo-loop-container">
        <div className="logo-loop-track">
         
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.href}
              target="_blank"
              rel="noreferrer"
              className="logo-loop-item"
            >
              <img
                src={sponsor.img}
                alt={sponsor.alt}
                className="logo-loop-image"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;