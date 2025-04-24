import React from 'react';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import WinnerCarousel from '../sections/WinnerCarousel'; // Updated import path

const WinnerCard = ({ winner, isFirst = false }) => {
  const { name, college, position, variant, prizeDetails, achievement, images } = winner;
  
  // Set variant-specific styling
  const variantStyles = {
    primary: {
      border: "border-green-900",
      gradient: "from-green-700 to-green-500",
      iconBg: "border-green-700 bg-green-900/20 text-green-500",
      badge: "text-green-500 bg-green-900/30",
      line: "bg-green-600/50",
      title: "text-green-400",
      subtitle: "text-green-300/70",
      icon: <FaTrophy className="text-2xl md:text-3xl" />,
      cardBg: "border-green-900/50",
      bulletColor: "bg-green-500",
      textColor: "text-green-100"
    },
    secondary: {
      border: "border-gray-700",
      gradient: "from-gray-700 to-gray-500",
      iconBg: "border-gray-700 bg-gray-800/50 text-gray-400",
      badge: "text-gray-500 bg-gray-800/60",
      line: "bg-gray-600/50",
      title: "text-gray-400",
      subtitle: "text-gray-400/70",
      icon: <FaMedal className="text-xl" />,
      cardBg: "border-gray-800/70",
      bulletColor: "bg-gray-500",
      textColor: "text-gray-300"
    },
    tertiary: {
      border: "border-orange-900",
      gradient: "from-orange-900 to-orange-700",
      iconBg: "border-orange-800 bg-orange-900/20 text-orange-500",
      badge: "text-orange-500 bg-orange-900/30",
      line: "bg-orange-700/50",
      title: "text-orange-400",
      subtitle: "text-orange-400/70",
      icon: <FaMedal className="text-xl" />,
      cardBg: "border-orange-900/50",
      bulletColor: "bg-orange-500",
      textColor: "text-orange-200"
    }
  };
  
  const style = variantStyles[variant] || variantStyles.primary;
  
  return (
    <div className={`bg-black/30 ${style.border} rounded-sm overflow-hidden ${isFirst ? 'mb-10' : ''} cyber-card reveal`}>
      <div className={`h-1 bg-gradient-to-r ${style.gradient}`}></div>
      <div className={`${isFirst ? 'p-6' : 'p-5'}`}>
        <div className="flex items-center mb-6">
          <div className={`${isFirst ? 'p-3' : 'p-2'} mr-${isFirst ? '4' : '3'} border ${style.iconBg} rounded-sm animate-pulse`}>
            {style.icon}
          </div>
          <div>
            <div className="flex items-center">
              <span className={`text-xs font-mono ${style.badge} uppercase px-2 py-0.5 rounded-sm mr-2`}>{position}</span>
              <span className={`h-px w-${isFirst ? '16' : '12'} ${style.line}`}></span>
            </div>
            <h3 className={`${isFirst ? 'text-xl md:text-2xl' : 'text-lg'} font-mono ${style.title} mt-1 animate-glow`}>{name}</h3>
            <p className={`${style.subtitle} text-xs`}>{college}</p>
          </div>
        </div>
        
        <div className={`${isFirst ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'block'}`}>
          <WinnerCarousel 
            images={images}
            variant={variant}
          />
          
          <div className={`bg-black/40 ${style.cardBg} p-${isFirst ? '5' : '4'} ${!isFirst ? 'mt-4' : ''} rounded-sm flex flex-col justify-center`}>
            <h4 className={`${style.title} ${isFirst ? 'text-lg' : 'text-sm'} font-mono mb-${isFirst ? '4' : '3'} flex items-center border-b ${style.cardBg} pb-2`}>
              {style.icon} <span className="ml-2">PRIZE DETAILS</span>
            </h4>
            <ul className={`space-y-${isFirst ? '3' : '2'} ${!isFirst ? 'text-sm' : ''}`}>
              {prizeDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <span className={`w-1.5 h-1.5 ${style.bulletColor} mr-2 rounded-full mt-${isFirst ? '2' : '1'}`}></span>
                  <span className={style.textColor}>{detail}</span>
                </li>
              ))}
            </ul>
            
            {achievement && (
              <div className="mt-6 pt-4 border-t border-green-900/30">
                <h5 className="text-green-400 font-mono text-sm mb-2">ACHIEVEMENT</h5>
                <p className="text-xs text-green-200/80">{achievement}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
