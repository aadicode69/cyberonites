import React from "react";
import "./Spon.css";
import Company from "./Company";
import AlteredSecurityLogo from "../../img/sponsor-logo/altered-security-logo.jpg";
import MultigradLogo from "../../img/sponsor-logo/multigrade.png";
import CIGLogo from "../../img/sponsor-logo/cia.png";

import OffsecLogo from "../../img/sponsor-logo/offsec.png";
import YCFLogo from "../../img/sponsor-logo/ycf-logo.jpg";

export default function Sponsor(props) {
  return (
    <section className="alumni">
      <div className="heading">
        <p className="heading-secondary font-clash">{props.heading}</p>
      </div>
      <div className="Spo-company-image-wrapper">
        {/* First set of logos */}
        <div className="Spo-company-image">
          <a
            href="https://www.alteredsecurity.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Company source={AlteredSecurityLogo} alt="Altered Security Logo" />
          </a>
          <a
            href="https://www.cyintglobal.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Company
              source={CIGLogo}
              alt="Cyber Intelligence Global LLP Logo"
            />
          </a>
          <a href="https://www.multigrad.in/" target="_blank" rel="noreferrer">
            <Company source={MultigradLogo} alt="Multigrad Logo" />
          </a>
          <a href="https://www.offsec.com/" target="_blank" rel="noreferrer">
            <Company source={OffsecLogo} alt="Offensive Security Logo" />
          </a>
          <a href="https://www.ycfteam.in/" target="_blank" rel="noreferrer">
            <Company source={YCFLogo} alt="YCF Team Logo" />
          </a>
        </div>
        <div className="Spo-company-image small">
          <a
            href="https://www.alteredsecurity.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Company source={AlteredSecurityLogo} alt="Altered Security Logo" />
          </a>
          <a
            href="https://www.cyintglobal.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Company
              source={CIGLogo}
              alt="Cyber Intelligence Global LLP Logo"
            />
          </a>
          <a href="https://www.multigrad.in/" target="_blank" rel="noreferrer">
            <Company source={MultigradLogo} alt="Multigrad Logo" />
          </a>
          <a href="https://www.offsec.com/" target="_blank" rel="noreferrer">
            <Company source={OffsecLogo} alt="Offensive Security Logo" />
          </a>
          <a href="https://www.ycfteam.in/" target="_blank" rel="noreferrer">
            <Company source={YCFLogo} alt="YCF Team Logo" />
          </a>
        </div>
      </div>
    </section>
  );
}
