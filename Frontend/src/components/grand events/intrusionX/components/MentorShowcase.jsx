/* eslint-disable react/prop-types */
import { FaStar, FaUserShield, FaServer } from 'react-icons/fa';
import { mentorImages } from '../data/IntrusionXImages';

const MentorShowcase = ({ mentors }) => {
    return (
        <div className="mt-6 border border-cyan-900/60 bg-black/30 p-6 rounded-sm">
            <h4 className="text-cyan-400 font-mono text-xl mb-6 border-b border-cyan-900/50 pb-2 text-center flex items-center justify-center">
                <FaStar className="mr-2" /> EVENT MENTORS <FaStar className="ml-2" />
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mentors.map((mentor, idx) => (
                    <div key={idx} className="group overflow-hidden rounded-md relative">
                        {/* Large image section with enhanced styling */}
                        <div className="relative overflow-hidden">
                            {/* Top decorative header */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-900 via-cyan-500 to-cyan-900 z-10"></div>
                            
                            {/* Role badge - enhanced with better positioning */}
                            <div className="absolute top-4 right-4 bg-black/80 text-cyan-300 font-mono text-xs py-1.5 px-3 rounded-sm z-20 flex items-center border border-cyan-700 backdrop-blur-sm shadow-md">
                                {idx === 0 ? 
                                    <><FaUserShield className="mr-2" /> PRIMARY MENTOR</> : 
                                    <><FaServer className="mr-2" /> CO-MENTOR</>
                                }
                            </div>
                            
                            {/* Mentor image with enhanced depth */}
                            <div className="h-80 overflow-hidden">
                                {mentor.imgPath ? (
                                    <img 
                                        src={mentorImages[mentor.imgPath]} 
                                        alt={mentor.name} 
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-cyan-900/40 flex items-center justify-center text-cyan-300 text-4xl font-bold">
                                        {mentor.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                )}
                                
                                {/* Gradient overlay - enhanced for better text visibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                            </div>
                        </div>
                        
                        {/* Text content with enhanced styling */}
                        <div className="relative p-5 bg-gradient-to-b from-black to-cyan-950/10 border-x border-b border-cyan-900/60">
                            {/* Side accent line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-700"></div>
                            
                            {/* Content with improved typography */}
                            <div className="pl-3">
                                <h3 className="text-cyan-300 font-mono font-bold text-xl tracking-wide mb-1">{mentor.name}</h3>
                                <div className="flex items-center mb-1">
                                    <div className="w-8 h-0.5 bg-cyan-700 mr-2"></div>
                                    <p className="text-cyan-400 font-medium">{mentor.role}</p>
                                </div>
                                <p className="text-gray-300 text-sm opacity-90">{mentor.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MentorShowcase;
