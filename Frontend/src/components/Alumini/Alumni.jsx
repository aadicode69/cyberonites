import "./Alu.css";
import Company from "./Comp";
import delloiteLogo from "../../img/company-logo/deolite.png";
import pertsolLogo from "../../img/company-logo/pertsol.png";
import netSPILogo from "../../img/company-logo/netspli.png";
import zscalerLogo from "../../img/company-logo/zscalerLogo.svg";
import juspayLogo from "../../img/company-logo/juspay.png";

export default function Alumini({ heading }) {
  const Alumni = [
    {
      href: "",
      alt: "Deloitte Logo",
      img: delloiteLogo
    },
    {
      href: "",
      alt: "Pert Sol Logo",
      img: pertsolLogo
    },
    {
      href: "",
      alt: "NetSPI Logo",
      img: netSPILogo
    },
    {
      href: "",
      alt: "ZScaler Logo",
      img: zscalerLogo
    },
    {
      href: "",
      alt: "Juspay Logo",
      img: juspayLogo
    }
  ];

export default function Alumini({ heading }) {
  const Alumni = [
    {
      href: "",
      alt: "Deloitte Logo",
      img: delloiteLogo
    },
    {
      href: "",
      alt: "Pert Sol Logo",
      img: pertsolLogo
    },
    {
      href: "",
      alt: "NetSPI Logo",
      img: netSPILogo
    },
    {
      href: "",
      alt: "ZScaler Logo",
      img: zscalerLogo
    },
    {
      href: "",
      alt: "Juspay Logo",
      img: juspayLogo
    }
  ];

  return (
    <div className="alumni-container">
      <div className="alumni-circle" style={{backgroundImage: `url('sssss.jpg')`}}>
        <h2 className="alumni-heading">{heading}</h2>
        <div className="alumni-items">
          {Alumni.map((alumni, index) => (
            <div
              key={index}
              href={alumni.href}
              className="alumni-item"
              target="_blank"
              rel="noreferrer"
              style={{
                '--pos': index
              }}
            >
              <Company source={alumni.img} alt={alumni.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}