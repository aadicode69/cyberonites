import React from "react";
import "./Spon.css";
import Company from "./Company";
import AlteredSecurityLogo from "../../img/sponsor-logo/altered-security.png";
import MultigradLogo from "../../img/sponsor-logo/multigrade.png";
import CIGLogo from "../../img/sponsor-logo/cia.png";
import OffsecLogo from "../../img/sponsor-logo/offsec.png";
import YCFLogo from "../../img/sponsor-logo/ycf-logo.jpg";

const Sponsor = ({ heading }) => {
  const sponsors = [
    {
      href: "https://www.alteredsecurity.com/",
      alt: "Altered Security Logo",
      img: AlteredSecurityLogo
    },
    {
      href: "https://www.cyintglobal.com/",
      alt: "Cyber Intelligence Global LLP Logo",
      img: CIGLogo
    },
    {
      href: "https://www.multigrad.in/",
      alt: "Multigrad Logo",
      img: MultigradLogo
    },
    {
      href: "https://www.offsec.com/",
      alt: "Offensive Security Logo",
      img: OffsecLogo
    },
    {
      href: "https://ycfteam.in/",
      alt: "YCF Team Logo",
      img: YCFLogo
    }
  ];

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.style.display = 'none';
  };

  return (
    <div className="sponsor-container">
      <div className="sponsor-circle" style={{backgroundImage: `url('sssss.jpg')`}}>
        <h2 className="sponsor-heading">{heading}</h2>
        <div className="sponsor-items">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.href}
              className="sponsor-item"
              target="_blank"
              rel="noreferrer"
              style={{
                '--pos': index
              }}
            >
              <Company 
                source={sponsor.img} 
                alt={sponsor.alt}
                onError={handleImageError}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
