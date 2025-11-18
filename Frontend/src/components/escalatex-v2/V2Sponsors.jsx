import React from 'react';
import ibuddy from '../../img/escalate-v2/sponsor/interviewbuddy.png';
import csata from '../../img/escalate-v2/sponsor/csata.jpg';
import unstop from '../../img/escalate-v2/sponsor/unstop.png';
import abhibus from '../../img/escalate-v2/sponsor/abhibus.jpg';
import bootcoding from '../../img/escalate-v2/sponsor/Bootcoding.png';
import ctf7 from '../../img/escalate-v2/sponsor/CTF7.png';
import cyberfrat from '../../img/escalate-v2/sponsor/Cyberfratnextgen.png';
import defronix from '../../img/escalate-v2/sponsor/defronix.jpg';
import fizzify from '../../img/escalate-v2/sponsor/Fizzify.webp';
import gmc from '../../img/escalate-v2/sponsor/givemycerti.png';
import offsec from '../../img/escalate-v2/sponsor/OffSec.png';
import modsec from '../../img/escalate-v2/sponsor/ModernSecurity.jpg';
import osen from '../../img/escalate-v2/sponsor/OSEN.png';
import secops from '../../img/escalate-v2/sponsor/SecOps.png';
import squareboat from '../../img/escalate-v2/sponsor/SquareBoat.png';
import burgerjn from '../../img/escalate-v2/sponsor/burgerjn.png';
import marketmafia from '../../img/escalate-v2/sponsor/marketmafia.png';

const V2Sponsors = () => {
  const sponsors = [
    { id: 1, logo: ibuddy },
    { id: 2, logo: csata },
    { id: 3, logo: unstop },
    { id: 4, logo: abhibus },
    { id: 5, logo: bootcoding },
    { id: 6, logo: ctf7 },
    { id: 7, logo: offsec },
    { id: 8, logo: modsec },
    { id: 9, logo: osen },
    { id: 10, logo: secops },
    { id: 11, logo: squareboat },
    { id: 12, logo: burgerjn },
    { id: 13, logo: marketmafia },
    { id: 14, logo: defronix },
    { id: 15, logo: fizzify },
    { id: 16, logo: gmc },
    { id: 17, logo: cyberfrat },
  ];

  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="w-full py-20 overflow-hidden relative">
      {/* Gradient glow behind heading */}
      <div className="absolute top-0 left-0 right-0 h-48 "></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-clash uppercase font-extrabold text-center mb-4 text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] tracking-wide">
          Our Sponsors
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
                <div className="bg-gray-300 rounded-lg p-4 flex items-center justify-center w-40 h-28 shadow-inner">
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

export default V2Sponsors;
