import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const CyberCard = ({
  name,
  role,
  profileImage,
  description,
  linkedin,
  email,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative w-[340px] pt-20 pb-8 px-6
        rounded-2xl
        bg-[#1c1f26]
        border border-white/10
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        text-center"
    >
      {/* Avatar */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2">
        <div className="w-32 h-32 rounded-full bg-[#22d3ee]
          flex items-center justify-center
          shadow-[0_0_30px_rgba(34,211,238,0.6)]">
          <img
            src={profileImage}
            alt={name}
            className="w-[120px] h-[120px] rounded-full object-cover bg-black"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="mt-6 text-xl font-semibold text-[#22d3ee]">
        {name}
      </h3>

      {/* Role */}
      <p className="mt-1 text-sm text-slate-300">
        {role}
      </p>

      {/* Description */}
      <p className="mt-4 text-sm text-slate-400 leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-6">
        {linkedin && (
          <Social href={linkedin} icon={<FaLinkedin />} />
        )}
        {email && (
          <Social href={email} icon={<FaEnvelope />} />
        )}
      </div>
    </motion.div>
  );
};

const Social = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center
      rounded-full
      bg-[#2a2e37]
      text-[#22d3ee]
      hover:bg-[#22d3ee]
      hover:text-black
      transition-all duration-300"
  >
    {icon}
  </a>
);

export default CyberCard;
