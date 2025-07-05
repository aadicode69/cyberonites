import React from 'react';

const PlatformCard = ({ 
  title = "Cyberonites", 
  description = "Professional coding environment for developers",
  buttonText = "Open Platform",
  onClick,
  gradientFrom = "from-gray-900",
  gradientTo = "to-black",
  hoverFrom = "hover:from-gray-800",
  hoverTo = "hover:to-gray-900",
  accentColor = "bg-cyan-400",
  borderColor = "",
  textAccent = ""
}) => {
  return (
    <div className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl p-8 cursor-pointer ${hoverFrom} ${hoverTo} transition-all duration-300 max-w-md w-full min-h-[280px] flex flex-col justify-between ${borderColor} hover:shadow-2xl hover:shadow-cyan-500/10`}>
      <div>
        <div className="flex items-center mb-6">
          <div className={`w-4 h-4 ${accentColor} rounded-full mr-3 shadow-sm shadow-cyan-400/50`}></div>
          <div className="w-4 h-4 bg-white rounded-full mr-3 shadow-sm"></div>
          <div className="w-4 h-4 bg-gray-600 rounded-full shadow-sm"></div>
        </div>
        <h3 className={`text-3xl font-bold mb-4 ${textAccent || 'text-white'}`}>{title}</h3>
        <p className="text-gray-400 mb-8 text-lg leading-relaxed">{description}</p>
      </div>
      <button 
        className={`${accentColor} text-black px-8 py-3 rounded-md font-semibold hover:bg-white transition-colors w-full text-lg shadow-md hover:shadow-lg`}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PlatformCard;
