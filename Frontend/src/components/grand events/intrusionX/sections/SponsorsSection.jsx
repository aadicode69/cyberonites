import React from 'react';
import { sponsorLogos } from '../data/IntrusionXImages';

const SponsorsSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Main sponsor */}
        <div className="lg:col-span-2 border border-green-900 bg-black/40 p-4 rounded-sm">
          <div className="bg-white p-4 mb-4 rounded-sm">
            <img 
              src={sponsorLogos.cyberyaan} 
              alt="Cyberyaan" 
              className="h-16 mx-auto object-contain"
            />
          </div>
          <h3 className="text-center text-green-400 font-mono text-lg">CYBERYAAN</h3>
          <p className="text-center text-sm mt-2">Premium Sponsor</p>
        </div>
        
        {/* Other sponsors */}
        <div className="border border-green-900/70 bg-black/40 p-4 rounded-sm">
          <div className="bg-white p-4 mb-4 rounded-sm">
            <img 
              src={sponsorLogos.alteredSecurity} 
              alt="Altered Security" 
              className="h-14 mx-auto object-contain"
            />
          </div>
          <h3 className="text-center text-green-400 font-mono">ALTERED SECURITY</h3>
          <p className="text-center text-sm mt-1">Training Partner</p>
        </div>
        
        <div className="border border-green-900/70 bg-black/40 p-4 rounded-sm">
          <div className="bg-white p-4 mb-4 rounded-sm">
            <img 
              src={sponsorLogos.unstop} 
              alt="Unstop" 
              className="h-14 mx-auto object-contain"
            />
          </div>
          <h3 className="text-center text-green-400 font-mono">UNSTOP</h3>
          <p className="text-center text-sm mt-1">Platform Partner</p>
        </div>
      </div>
      
      {/* Add new sponsor row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {/* New .xyz sponsor with placeholder for future image */}
        <div className="border border-green-900/70 bg-black/40 p-4 rounded-sm">
          <div className="bg-white/10 p-4 mb-4 rounded-sm flex items-center justify-center h-20 border border-dashed border-green-700">
            <p className="text-green-400 text-sm font-mono text-center">
              .xyz logo will be added here
            </p>
          </div>
          <h3 className="text-center text-green-400 font-mono">.XYZ</h3>
          <p className="text-center text-sm mt-1">Domain Partner</p>
        </div>
      </div>
      
      {/* CEO highlight */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 border border-green-900 bg-black/20 p-4 rounded-sm">
        <div>
          <img 
            src="/src/img/intrusionX/DSC_0820.JPG" 
            alt="Mr. Pankaj Yadav, CEO of CyberYaan" 
            className="w-full h-auto rounded-sm"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-mono text-green-400 mb-2">Mr. Pankaj Yadav</h3>
          <p className="text-white mb-2">Founder & CEO of CyberYaan</p>
          <p className="text-sm">
            Our primary sponsor, CyberYaan, led by Mr. Pankaj Yadav, provided invaluable support 
            for IntrusionX. His expertise in cybersecurity and commitment to nurturing young talent 
            made a significant contribution to the success of the event.
          </p>
        </div>
      </div>
    </>
  );
};

export default SponsorsSection;
