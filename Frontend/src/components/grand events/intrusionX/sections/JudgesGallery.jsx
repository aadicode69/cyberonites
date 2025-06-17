/* eslint-disable react/prop-types */
import { FaUserTie, FaAward } from 'react-icons/fa';

const JudgesGallery = ({ judges, judgeImages }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {judges.map((judge, idx) => (
        <div key={idx} className="bg-black/30 border border-yellow-800 rounded-sm overflow-hidden group hover:border-yellow-600 transition-all">
          {/* Image with overlay */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img 
              src={judgeImages[idx]} 
              alt=""
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="flex items-center text-yellow-500 mb-1">
                <FaUserTie className="mr-2" />
                <div className="h-px flex-grow bg-gradient-to-r from-yellow-500/70 to-transparent"></div>
              </div>
              <h3 className="text-white font-mono text-lg">{judge.name}</h3>
              <p className="text-yellow-200/90 text-xs font-mono">{judge.role}</p>
            </div>
          </div>
          
          {/* Details */}
          <div className="p-3 border-t border-yellow-900/50 bg-black/60">
            <div className="flex items-center mb-2">
              <FaAward className="text-yellow-500 mr-2" size={14} />
              <p className="text-xs text-gray-300">{judge.expertise}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JudgesGallery;
