import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const TitleCard = ({ name, role, profileImage, description, linkedin, email, tier }) => {
  const getTierStyles = (tier, role) => {
    const styles = {
      leadership: {
        card: "from-white/10 to-white/5",
        gradient: "from-yellow-400 via-orange-400 to-red-400",
        size: role === "President" ? "w-44 h-44" : "w-40 h-40",
        width: role === "President" ? "w-[380px]" : "w-[360px]",
        shadow: "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        border: "border-t border-l border-white/20"
      },
      head: {
        card: "from-white/10 to-white/5",
        gradient: "from-blue-400 via-cyan-400 to-teal-400",
        size: "w-36 h-36",
        width: "w-[340px]",
        shadow: "shadow-[0_8px_24px_rgba(0,0,0,0.25)]",
        border: "border-t border-l border-white/20"
      },
      dev: {
        card: "from-white/10 to-white/5",
        gradient: "from-indigo-400 via-purple-400 to-pink-400",
        size: "w-32 h-32",
        width: "w-[320px]",
        shadow: "shadow-[0_8px_16px_rgba(0,0,0,0.2)]",
        border: "border-t border-l border-white/20"
      }
    };
    
    return styles[tier] || styles.dev;
  };

  const style = getTierStyles(tier, role);

  return (
    <div className={`${style.width} relative rounded-2xl bg-gradient-to-br ${style.card} 
      backdrop-blur-xl ${style.shadow} ${style.border}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
      
      <div className="relative p-8 rounded-2xl">
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <div className={`relative ${style.size} rounded-full p-[3px] bg-gradient-to-r ${style.gradient}
            shadow-[0_8px_16px_rgba(0,0,0,0.3)]`}>
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img
                src={profileImage}
                alt={name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/0 via-black/0 to-black/30"></div>
            </div>
          </div>
        </div>

        <div className="pt-24 text-center">
          <h3 className={`text-2xl font-bold bg-gradient-to-r ${style.gradient} bg-clip-text text-transparent
            drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]`}>
            {name}
          </h3>
          <p className="text-base text-white/90 mt-2 font-medium tracking-wide">{role}</p>
          <p className="mt-4 text-base text-white/70 line-clamp-2 px-4 leading-relaxed">
            {description}
          </p>
          
          <div className="flex justify-center gap-4 mt-6">
            <SocialButton 
              href={linkedin} 
              icon={<FaLinkedin size={18} />} 
              gradient={style.gradient}
              label="LinkedIn" 
            />
            <SocialButton 
              href={email} 
              icon={<FaEnvelope size={18} />}
              gradient={style.gradient}
              label="Email" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialButton = ({ href, icon, label, gradient }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center justify-center w-12 h-12 rounded-full
      bg-white/10 backdrop-blur-sm border border-white/10
      shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-all duration-300
      hover:bg-gradient-to-r ${gradient} hover:border-transparent
      hover:shadow-[0_8px_16px_rgba(0,0,0,0.3)]
      hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-white/50
      active:bg-white/20`}
    aria-label={label}
  >
    <div className="text-white/70 group-hover:text-black group-focus-visible:text-black transition-colors duration-300">
      {icon}
    </div>
  </a>
);


export default TitleCard;