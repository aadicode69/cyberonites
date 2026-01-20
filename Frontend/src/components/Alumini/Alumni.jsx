import React from "react";
import "./Alu.css";

import adeptiaLogo from "../../img/company-logo/adeptia.jpg";
import capgeminiLogo from "../../img/company-logo/capgemini.png";
import cars24Logo from "../../img/company-logo/cars24.png";
import casioLogo from "../../img/company-logo/casio.png";
import cegLogo from "../../img/company-logo/ceg.png";
import deoliteLogo from "../../img/company-logo/deolite.png";
import dsLogo from "../../img/company-logo/ds.png";
import fluitechLogo from "../../img/company-logo/fluidech.png";
import glLogo from "../../img/company-logo/gl.jpg";
import grittyLogo from "../../img/company-logo/gritty_tech_cover.jpg";
import hackeroneLogo from "../../img/company-logo/hackerone.png";
import hackitLogo from "../../img/company-logo/hacklt.png";
import hcltechLogo from "../../img/company-logo/hcltech.jpg";
import juspayLogo from "../../img/company-logo/juspay.png";
import netSPILogo from "../../img/company-logo/netspilogo.png";
import paypalLogo from "../../img/company-logo/paypal.png";
import pertsolLogo from "../../img/company-logo/pertsol.png";
import sentineloneLogo from "../../img/company-logo/sentinelone.png";
import sophosLogo from "../../img/company-logo/sophos.png";
import thalesLogo from "../../img/company-logo/sophos.png"; 
import thisLogo from "../../img/company-logo/this.png";
import ucertifyLogo from "../../img/company-logo/ucertify.png";
import zebpayLogo from "../../img/company-logo/zebpay.png";
import zscalerLogo from "../../img/company-logo/zscalerLogo.svg";
import zyppLogo from "../../img/company-logo/zypp.jpg";
import meridian from "../../img/company-logo/meridian.png";

const Alumini = ({ heading }) => {
  const alumni = [
    { href: "https://www.adeptia.com/", alt: "Adeptia", img: adeptiaLogo },
    { href: "https://www.capgemini.com/", alt: "Capgemini", img: capgeminiLogo },
    { href: "https://www.cars24.com/", alt: "Cars24", img: cars24Logo },
    { href: "https://www.casio.com/", alt: "Casio", img: casioLogo },
    { href: "https://www.ceg.com/", alt: "CEG", img: cegLogo },
    { href: "https://www2.deloitte.com/", alt: "Deloitte", img: deoliteLogo },
    { href: "https://www.ds.com/", alt: "DS", img: dsLogo },
    { href: "https://fluitech.com/", alt: "FluiTech", img: fluitechLogo },
    { href: "https://www.gla.ac.in/", alt: "GL", img: glLogo },
    { href: "https://gritty.com/", alt: "Gritty", img: grittyLogo },
    { href: "https://www.hackerone.com/", alt: "HackerOne", img: hackeroneLogo },
    { href: "https://hackit.com/", alt: "HackIt", img: hackitLogo },
    { href: "https://www.hcltech.com/", alt: "HCLTech", img: hcltechLogo },
    { href: "https://juspay.in/", alt: "Juspay", img: juspayLogo },
    { href: "https://www.netspi.com/", alt: "NetSPI", img: netSPILogo },
    { href: "https://www.paypal.com/", alt: "PayPal", img: paypalLogo },
    { href: "https://www.pertsol.com/", alt: "PertSol", img: pertsolLogo },
    { href: "https://www.sentinelone.com/", alt: "SentinelOne", img: sentineloneLogo },
    { href: "https://www.sophos.com/", alt: "Sophos", img: sophosLogo },
    { href: "https://www.thalesgroup.com/", alt: "Thales", img: thalesLogo },
    { href: "https://this.com/", alt: "THIS", img: thisLogo },
    { href: "https://www.ucertify.com/", alt: "uCertify", img: ucertifyLogo },
    { href: "https://zebpay.com/", alt: "ZebPay", img: zebpayLogo },
    { href: "https://www.zscaler.com/", alt: "Zscaler", img: zscalerLogo },
    { href: "https://zypp.app/", alt: "Zypp", img: zyppLogo },
    { href: "https://meridian.app/", alt: "meridian", img: meridian },
  ];

  return (
    <section className="alumni-section" id="alumni">
      <div className="alumni-header">
        <p className="alumni-eyebrow">Industry Network</p>
        <h2 className="alumni-title">{heading || "Our Alumni"}</h2>
        <p className="alumni-subtitle">
          Organisations where EscalateX alumni are creating real‑world impact.
        </p>
      </div>

      <div className="alumni-container">
        <div className="alumni-track">
          {[...alumni, ...alumni].map((company, index) => (
            <a
              key={`alumni-${index}`}
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              className="alumni-item"
            >
              <img
                src={company.img}
                alt={company.alt}
                className="alumni-logo"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alumini;
