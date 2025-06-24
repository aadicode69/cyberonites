import { FaMedal, FaUniversity } from 'react-icons/fa';
import co_mentor  from '../../../../img/intrusionX/DSC_0477.webp'

const Co_mentor = ({ name, department }) => {
    return (
        <div className="mb-6 border-2 border-cyan-700/70 bg-black/40 p-6 rounded-sm shadow-lg shadow-cyan-900/20">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="mb-6 lg:mb-0 lg:mr-8 relative">
                    <div className="absolute inset-0 border-2 border-cyan-500 rounded-md transform rotate-3 bg-cyan-900/10"></div>
                    <div className="relative z-10 w-64 h-64 rounded-md overflow-hidden border-2 border-cyan-500 shadow-lg shadow-cyan-900/30">
                        <img
                            src={co_mentor}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-cyan-800 text-cyan-100 px-3 py-1 rounded-sm z-20 shadow-md transform rotate-3 border border-cyan-500">
                        <div className="flex items-center">
                            <FaMedal className="mr-2 text-yellow-300" />
                            <span className="font-mono text-sm">CO-MENTOR</span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-cyan-300 font-mono mb-3">{name}</h2>

                    <div className="flex items-center justify-center lg:justify-start mb-4">
                        <FaUniversity className="text-cyan-400 mr-2" />
                        <p className="text-cyan-200">{department}</p>
                    </div>

                    <div className="bg-cyan-900/20 p-4 border border-cyan-800/40 rounded-sm">
                        <p className="text-cyan-100 italic">
                            &quot;IntrusionX challenged participants to create bold, modern solutions against today’s cyber threats.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Co_mentor;
