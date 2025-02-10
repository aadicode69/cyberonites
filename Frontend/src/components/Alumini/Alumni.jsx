import "./Alu.css";
import Company from "./Comp";
import PropTypes from "prop-types";
import delloiteLogo from "../../img/company-logo/deolite.png";
import pertsolLogo from "../../img/company-logo/pertsol.png";
import netSPILogo from "../../img/company-logo/netspli.png";
import zscalerLogo from "../../img/company-logo/zscalerLogo.svg";
import juspayLogo from "../../img/company-logo/juspay.png";

export default function Explore({ heading }) {
  return (
    <section className="alumni mt-20">
      <div className="heading">
        <p className="heading-secondary font-clash">{heading}</p>
      </div>
      <div className="Alu-company-image-wrapper">
        {/* First set of logos */}
        <div className="Alu-company-image">
          <Company source={delloiteLogo} alt="Deloitte Logo" />
          <Company source={pertsolLogo} alt="Pert Sol Logo" />
          <Company source={netSPILogo} alt="NetSPI Logo" />
          <Company source={zscalerLogo} alt="ZScaler Logo" />
          <Company source={juspayLogo} alt="Juspay Logo" />
        </div>
        <div className="Alu-company-image">
          <Company source={delloiteLogo} alt="Deloitte Logo" />
          <Company source={pertsolLogo} alt="Pert Sol Logo" />
          <Company source={netSPILogo} alt="NetSPI Logo" />
          <Company source={zscalerLogo} alt="ZScaler Logo" />
          <Company source={juspayLogo} alt="Juspay Logo" />
        </div>
      </div>
    </section>
  );
}

Explore.propTypes = {
  heading: PropTypes.string.isRequired,
};