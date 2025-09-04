import React from "react";
import "../styles/Sponsors.css";
import alteredSecurityLogo from "../img/sponsor-logo/altered-security.png";
import offsecLogo from "../img/sponsor-logo/offsec.png";
import cigLogo from "../img/sponsor-logo/cig-logo.png";
import ycfLogo from "../img/sponsor-logo/ycf-logo.jpg";
import multigradLogo from "../img/sponsor-logo/multigrad-logo.png";
import cyberyaanLogo from "../img/sponsor-logo/cyberyaan-logo.png";
import unstopLogo from "../img/sponsor-logo/unstop-logo.png";
import xyzLogo from "../img/sponsor-logo/xyz-logo.png";

const SponsorshipTiers = () => {
  const sponsorshipTiers = [
    {
      tier: "TITLE",
      price: "₹75,000",
      benefits: [
        "Exclusive 'Presented By' Branding",
        "10-Minute Sponsor Session",
        "Largest Logo on All Materials",
        "4 VIP Passes",
        "Recruitment Opportunities",
      ],
    },
    {
      tier: "GOLD",
      price: "₹50,000",
      benefits: [
        "Large Logo on Banners & Certificates",
        "Large Logo on Website",
        "2 VIP Passes",
        "Recruitment Opportunities",
        "Logo on Event T-shirts",
      ],
    },
    {
      tier: "SILVER",
      price: "₹25,000",
      benefits: [
        "Medium Logo on Materials",
        "Medium Logo on Website",
        "1 VIP Pass",
        "Recruitment Opportunities",
        "Shared Social Media Posts",
      ],
    },
    {
      tier: "BRONZE",
      price: "₹10,000",
      benefits: [
        "Small Logo on Materials",
        "Small Logo on Website",
        "1 Social Media Mention",
      ],
    },
  ];

  return (
    <section className="w-full mb-6">
      {/* reduced margin-bottom */}
      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
        {sponsorshipTiers.map((tier) => (
          <article
            key={tier.tier}
            className="sponsorship-tier-card p-4 text-left flex flex-col escalateX-cyber-terminal escalateX-holographic relative z-10"
          >
            {/* Tier level indicator */}
            <div
              className="absolute top-3 right-3 w-3 h-3 bg-orange-500 opacity-60 animate-pulse"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            ></div>

            <header className="mb-2 relative z-20">
              {/* reduced margin-bottom */}
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
                <h4 className="text-orange-400 text-lg uppercase font-bold tracking-wider font-orbitron">
                  {tier.tier}
                </h4>
              </div>
              <p className="text-white text-2xl font-black mb-1 font-orbitron">
                {tier.price}
              </p>
              <div className="w-full h-0.5 bg-gradient-to-r from-orange-500/50 via-orange-500/20 to-transparent"></div>
            </header>

            <ul className="space-y-2 mb-3 text-gray-300 text-xs flex-grow font-mono relative z-20">
              {/* reduced mb */}
              {tier.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1 neon-text text-base">
                    ▸
                  </span>
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </section>
  );
};

const PastSponsors = () => {
  const pastSponsors = [
    { name: "Altered Security", tier: "PLATINUM", logo: alteredSecurityLogo },
    { name: "OffSec", tier: "GOLD", logo: offsecLogo },
    { name: "Cyber Intelligence Global", tier: "GOLD", logo: cigLogo },
    { name: "Unstop", tier: "SILVER", logo: unstopLogo },
    { name: "YCF", tier: "SILVER", logo: ycfLogo },
    { name: "Multigrad", tier: "SILVER", logo: multigradLogo },
    { name: "Cyberyaan", tier: "BRONZE", logo: cyberyaanLogo },
    { name: ".XYZ", tier: "BRONZE", logo: xyzLogo },
  ];

  // Duplicate the sponsors array for smooth infinite scrolling
  const duplicatedSponsors = [...pastSponsors, ...pastSponsors];

  return (
    <section className="w-full mb-2">
      {/* reduced margin-bottom */}
      {/* Simplified Marquee Container - No background, minimal styling */}
      <div className="relative w-full overflow-hidden py-2">
        {/* reduced padding */}

        {/* Enhanced Marquee Track with faster animation */}
        <div className="flex animate-marquee-fast hover:pause-marquee">
          {duplicatedSponsors.map((sponsor, index) => (
            <article
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 mx-8 w-40 relative group"
            >
              <div
                className="relative border border-orange-500/20 text-center transition-all duration-300 group-hover:border-orange-500/40"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
                  background: "rgba(10, 10, 15, 0.3)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div
                  className="absolute top-0 right-0 w-3 h-3 bg-orange-500/60 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                />
                <div className="relative w-full h-16 flex items-center justify-center">
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="relative z-10 h-full w-full object-contain filter brightness-90 group-hover:brightness-120 transition-all duration-300 group-hover:scale-125"
                  />
                </div>
                {/* <h4 className="text-white font-bold font-orbitron text-[10px] mb-1 relative z-10 truncate group-hover:text-orange-200 transition-colors duration-300">
                                    {sponsor.name}
                                </h4> */}
                <div className="relative inline-block">
                  <p
                    className="text-orange-400 text-[10px] font-semibold uppercase font-mono tracking-wider relative z-10 px-1.5 py-0.5 mb-3 border border-orange-500/40 group-hover:border-orange-500/70 transition-all duration-300"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                      background: "transparent",
                    }}
                  >
                    {sponsor.tier}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Sponsors = () => {
  return (
    <section id="section6" className="carousel-section main-section">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center py-8 px-4 h-full overflow-y-auto">
        {/* hide overflow to avoid sidebar */}
        <header className="mb-4">
          {/* compact header */}
          <h2 className="text-2xl md:text-3xl font-black mb-2 font-orbitron">
            {/* smaller heading */}
            <span className="text-white">PARTNERSHIP & </span>
            <span
              className=""
              data-text="SPONSORSHIP"
              style={{ color: "var(--escalate-orange)" }}
            >
              SPONSORSHIP
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto font-mono">
            Join us as a partner and showcase your brand to the next generation
            of cybersecurity professionals.
          </p>
        </header>

        <SponsorshipTiers />

        {/* Past Sponsors Year Label */}
        <div className="my-4">
          {/* reduced margin */}
          <p className="text-orange-500 text-xs md:text-sm font-mono tracking-wide opacity-80">
            - Past Sponsors 2024 -
          </p>
        </div>

        <PastSponsors />
      </div>
    </section>
  );
};

export default Sponsors;
