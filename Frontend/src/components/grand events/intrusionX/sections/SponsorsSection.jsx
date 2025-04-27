import { sponsorLogos } from '../data/IntrusionXImages';
import { sponsors } from '../data/eventData';

const SponsorsSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="border border-green-900/70 bg-black/40 p-4 rounded-sm">
            <div className="bg-white p-4 mb-4 rounded-sm">
              <img
                src={sponsorLogos[sponsor.logo]}
                alt={sponsor.name}
                className="h-14 mx-auto object-contain"
              />
            </div>
            <h3 className="text-center text-green-400 font-mono text-lg">{sponsor.name}</h3>
            <p className="text-center text-sm mt-1">{sponsor.role}</p>
            <p className="text-center text-xs mt-1 text-green-200">
              {sponsor.contribution && `Contribution: ${sponsor.contribution}`}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SponsorsSection;
