import React from "react";
import "./styles/sponsors.css";

// Import sponsor logos
import alteredSecurityLogo from "../../img/sponsor-logo/altered-security.png";
import offsecLogo from "../../img/sponsor-logo/offsec.png";
import cigLogo from "../../img/sponsor-logo/cig-logo.png";
import multigradLogo from "../../img/sponsor-logo/multigrade.png";
import ycfLogo from "../../img/sponsor-logo/ycf-logo.jpg";
import escalateXLogo from "../../img/escalateXv2/logo.png";
// Additional logo variations
import alteredSecurityLogoAlt from "../../img/sponsor-logo/altered-security-logo.jpg";
import offsecLogoAlt from "../../img/sponsor-logo/offsec-logo.png";

// ==========================================
// CONFIGURATION CONSTANTS
// ==========================================
const CONTACT_EMAIL = "support@cyberonites.com";
const PREVIOUS_EVENT_YEAR = "2024";
const CURRENT_EVENT_NAME = "EscalateX v2";

/**
 * SponsorsSection Component
 * 
 * Displays past sponsors and current sponsorship opportunities for EscalateX v2.
 * Features responsive grid layouts, tier-based sponsor cards, and contact information.
 * 
 * @param {string} className - Additional CSS classes to apply to the section
 * @returns {JSX.Element} The sponsors section component
 */

const SponsorsSection = ({ className }) => {
  // ==========================================
  // PAST SPONSORS DATA (EscalateX 2024)
  // ==========================================
  const pastSponsors = [
    {
      name: "Altered Security",
      tier: "PLATINUM",
      logo: alteredSecurityLogo,
      description: "Leading cybersecurity training and certification provider"
    },
    {
      name: "OffSec",
      tier: "GOLD",
      logo: offsecLogo,
      description: "Pioneers in hands-on cybersecurity training"
    },
    {
      name: "Cyber Intelligence Global",
      tier: "GOLD",
      logo: cigLogo,
      description: "Global cybersecurity intelligence and consulting"
    },
    {
      name: "Unstop",
      tier: "SILVER",
      logo: null, // No logo available
      description: "India's largest talent discovery platform"
    },
    {
      name: "YCF",
      tier: "SILVER",
      logo: ycfLogo,
      description: "Youth development and education foundation"
    },
    {
      name: "Multigrad",
      tier: "SILVER",
      logo: multigradLogo,
      description: "Educational technology and skill development"
    },
    {
      name: "Cyberyaan",
      tier: "BRONZE",
      logo: null, // No logo available
      description: "Cybersecurity awareness and training"
    },
    {
      name: ".XYZ",
      tier: "BRONZE",
      logo: null, // No logo available
      description: "Domain registry and web services"
    }
  ];

  // ==========================================
  // SPONSORSHIP TIERS & PRICING
  // ==========================================
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
        "Logo on Event T-shirts",
        "3 Dedicated Social Media Posts"
      ]
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
        "Mention in Opening & Closing",
        "Shared Social Media Posts"
      ]
    },
    {
      tier: "SILVER",
      price: "₹25,000",
      benefits: [
        "Medium Logo on Materials",
        "Medium Logo on Website",
        "1 VIP Pass",
        "Recruitment Opportunities",
        "Mention in Opening & Closing",
        "Shared Social Media Posts"
      ]
    },
    {
      tier: "BRONZE",
      price: "₹10,000",
      benefits: [
        "Small Logo on Materials",
        "Small Logo on Website",
        "1 Social Media Mention"
      ]
    }
  ];

  // ==========================================
  // COMPONENT: INDIVIDUAL SPONSOR CARD
  // ==========================================
  const SponsorCard = ({ sponsor }) => {
    const handleImageError = (e) => {
      console.warn(`Failed to load logo for ${sponsor.name}`);
      e.target.style.display = 'none';
      // Create fallback element
      const fallbackDiv = document.createElement('div');
      fallbackDiv.className = 'w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center exv2-sponsor-fallback';
      fallbackDiv.innerHTML = `<span class="text-white font-bold text-lg exv2-font-clouds">${sponsor.name.charAt(0)}</span>`;
      e.target.parentElement.appendChild(fallbackDiv);
    };

    return (
      <article className="exv2-sponsors-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:bg-white/8 hover:border-orange-500/20 transition-all duration-300 group">
        {/* Sponsor Logo Display */}
        <figure className="w-full h-20 flex items-center justify-center mb-6 p-3 rounded-xl bg-white/10 group-hover:bg-white/15 transition-all duration-300">
          {sponsor.logo ? (
            <img 
              src={sponsor.logo} 
              alt={`${sponsor.name} company logo`}
              className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center group-hover:from-orange-400 group-hover:to-orange-600 transition-all duration-300 exv2-sponsor-fallback">
              <span className="text-white font-bold text-lg exv2-font-clouds">
                {sponsor.name.charAt(0)}
              </span>
            </div>
          )}
        </figure>
        
        {/* Sponsor Name */}
        <h4 className="text-white text-lg font-bold mb-3 exv2-font-tavo group-hover:text-orange-300 transition-colors duration-300">
          {sponsor.name}
        </h4>
        
        {/* Sponsor Tier Badge */}
        <aside className={`exv2-sponsors-tier-${sponsor.tier.toLowerCase()} inline-block px-3 py-2 rounded-lg text-xs font-medium uppercase tracking-wide mb-4 exv2-font-clouds border transition-all duration-300`}>
          {sponsor.tier}
        </aside>
        
        {/* Sponsor Description */}
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {sponsor.description}
        </p>
      </article>
    );
  };

  // ==========================================
  // COMPONENT: SPONSORSHIP TIER CARD
  // ==========================================
  const TierCard = ({ tier }) => (
    <article className="exv2-sponsors-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-orange-500/30 transition-all duration-300 group">
      {/* Tier Name */}
      <header className="text-orange-400 text-xl font-bold mb-2 text-center uppercase tracking-wide exv2-font-cyberjunkies">
        {tier.tier}
      </header>
      
      {/* Tier Price */}
      <div className="text-white text-2xl font-bold mb-4 text-center exv2-font-clouds">
        {tier.price}
      </div>
      
      {/* Tier Benefits List */}
      <ul className="space-y-2 mb-6">
        {tier.benefits.map((benefit, idx) => 
          <li key={idx} className="text-gray-300 text-sm leading-relaxed pl-5 relative">
            <span className="absolute left-0 top-0 text-orange-400 font-semibold">✓</span>
            {benefit}
          </li>
        )}
      </ul>
      
      {/* Contact Button */}
      <footer>
        <a 
          href={`mailto:${CONTACT_EMAIL}`} 
          className="block w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-sm uppercase tracking-wide rounded-xl hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 text-center exv2-font-clouds"
        >
          Sponsor {tier.tier}
        </a>
      </footer>
    </article>
  );

  // ==========================================
  // MAIN COMPONENT RENDER
  // ==========================================
  return (
    <section className={`py-16 px-6 relative ${className}`}>
      {/* ===== SECTION HEADER ===== */}
      <header className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-wide exv2-font-cyberjunkies">
          <span className="text-white">PARTNERSHIP &</span> <span className="text-orange-500">SPONSORSHIP</span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Join us as a partner and showcase your brand to the next generation of cybersecurity professionals
        </p>
      </header>
      
      {/* ===== PAST SPONSORS SECTION ===== */}
      <section className="mb-16">
        <header className="text-center mb-8">
          <h3 className="text-orange-400 text-2xl font-bold mb-4 exv2-font-clouds flex items-center justify-center gap-3">
            Past Sponsors (Escalate
            <img 
              src={escalateXLogo} 
              alt="EscalateX logo" 
              className="w-8 h-8 object-contain inline-block filter brightness-0 invert"
              onError={(e) => {
                // Fallback to text-based X if image fails
                e.target.outerHTML = '<span class="exv2-logo-x-small inline-block mx-1 text-orange-500">✕</span>';
              }}
            />
            {PREVIOUS_EVENT_YEAR})
          </h3>
          <p className="text-gray-400 text-sm">
            Thank you to our amazing sponsors who made EscalateX 2024 a huge success
          </p>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pastSponsors.map((sponsor, index) => (
            <SponsorCard key={`sponsor-${index}`} sponsor={sponsor} />
          ))}
        </main>
      </section>

      {/* ===== SPONSORSHIP OPPORTUNITIES SECTION ===== */}
      <section className="mb-16">
        <header className="text-center mb-8">
          <h3 className="text-orange-400 text-2xl font-bold mb-4 exv2-font-clouds">
            Sponsorship Opportunities
          </h3>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Partner with us and reach 800+ cybersecurity enthusiasts, students, and professionals
          </p>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {sponsorshipTiers.map((tier, index) => (
            <TierCard key={`tier-${index}`} tier={tier} />
          ))}
        </main>
      </section>

      {/* ===== CONTACT FOOTER ===== */}
      <footer className="text-center max-w-2xl mx-auto p-8 bg-gradient-to-br from-orange-500/5 to-orange-600/5 border border-orange-500/20 rounded-2xl backdrop-blur-lg">
        <h3 className="text-white text-xl font-bold mb-4 exv2-font-clouds">
          Partnership Contact
        </h3>
        <p className="text-gray-300 text-base leading-relaxed mb-6">
          Ready to partner with {CURRENT_EVENT_NAME}? Contact us for detailed sponsorship packages and custom opportunities.
        </p>
        <a 
          href={`mailto:${CONTACT_EMAIL}`} 
          className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-base rounded-xl hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 exv2-font-clouds"
        >
          {CONTACT_EMAIL}
        </a>
      </footer>
    </section>
  );
};

export default SponsorsSection;