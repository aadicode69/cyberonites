import React from 'react';
import oxo from '../../img/escalate-v2/partners/0x0pirates_logo.jpg';
import bsidesJ from '../../img/escalate-v2/partners/BSidesJ.jpg';
import cybersurge from '../../img/escalate-v2/partners/cybersurge.png';
import dcgG from '../../img/escalate-v2/partners/dcg_gurugram_logo.jpg';
import eventsinfo from '../../img/escalate-v2/partners/eventsinfo.jpg';
import hackhalt from '../../img/escalate-v2/partners/hackhalt.jpeg';
import hackloop from '../../img/escalate-v2/partners/hackloop-logo.png';
import linentTree from '../../img/escalate-v2/partners/lenint_tree.png';
import logo from '../../img/escalate-v2/partners/logo.jpg';

const V2Community = () => {
  const sponsors = [
    { id: 1, logo: oxo },
    { id: 2, logo: bsidesJ },
    { id: 3, logo: cybersurge },
    { id: 4, logo: dcgG },
    { id: 5, logo: eventsinfo },
    { id: 6, logo: hackhalt },
    { id: 7, logo: logo },
    { id: 8, logo: hackloop },
    { id: 9, logo: linentTree },
  ];

  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="w-full py-20 overflow-hidden relative">
      {/* Gradient glow behind heading */}
      <div className="absolute top-0 left-0 right-0 h-48 "></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-clash uppercase font-extrabold text-center mb-4 text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] tracking-wide">
          Our Community Partners
        </h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto mb-12 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.7)]"></div>
        
        {/* Scrolling container */}
        <div className="relative">
          <div className="flex animate-scroll gap-16 px-8">
            {duplicatedSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.id}-${index}`}
                className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-cyan-900/20 to-cyan-950/40 border-2 border-cyan-500/30 rounded-xl flex items-center justify-center hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group"
              >
                <div className="bg-black rounded-lg p-4 flex items-center justify-center w-40 h-28 shadow-inner">
                  <img
                    src={sponsor.logo}
                    alt={`Sponsor ${sponsor.id}`}
                    className="max-h-20 max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 35s linear infinite;
          display: flex;
          width: max-content;
          align-items: center;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default V2Community;