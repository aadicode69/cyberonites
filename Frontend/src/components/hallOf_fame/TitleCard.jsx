import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const TitleCard = ({
  name,
  role,
  profileImage,
  bannerImage,
  description,
  linkedin,
  email,
}) => {
  return (
    <div className="relative w-full max-w-xs border border-transparent rounded-xl shadow-xl backdrop-blur-xl p-5 overflow-hidden transition-all duration-300 group">
      <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-1/2 h-[3px] bg-blue-500"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-[3px] bg-purple-500"></div>
        <div className="absolute top-0 left-0 h-1/2 w-[3px] bg-blue-500"></div>
        <div className="absolute bottom-0 right-0 h-1/2 w-[3px] bg-purple-500"></div>
      </div>
      <div className="w-full h-32 rounded-t-xl overflow-hidden relative">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="absolute top-14 left-1/2 transform -translate-x-1/2 rounded-full shadow-xl border-[3px] border-purple-300 group-hover:border-purple-500 transition-all duration-300">
        <img
          className="w-28 h-28 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
          src={profileImage}
          alt={name}
        />
      </div>
      <div className="flex flex-col items-center pt-20 pb-6 px-5">
        <h5 className="text-xl font-extrabold text-white tracking-wide">{name}</h5>
        <span className="text-sm font-medium text-gray-400 mb-3">{role}</span>
        <p className="text-center text-gray-300 text-sm leading-relaxed mb-5">
          {description}
        </p>
        <div className="flex space-x-3">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center px-5 py-2 text-sm font-medium text-white rounded-full transition-all duration-300 border border-blue-500 bg-transparent hover:bg-blue-500/30 hover:shadow-[0px_0px_15px_#00d9ff] hover:scale-110"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>

          <a
            href={email}
            className="relative flex items-center px-5 py-2 text-sm font-medium text-white rounded-full transition-all duration-300 border border-purple-400 bg-transparent hover:bg-purple-500/30 hover:shadow-[0px_0px_15px_#ff00ff] hover:scale-110"
          >
            <FaEnvelope className="mr-2" /> Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;


// {
//   "name": "Manmohan Singh",
//   "role": "Development Team Member",
//   "profileImage": "src/img/Team/Vaibhav.jpg",
//   "bannerImage": "src/img/Team/banner-AG.jpg",
//   "description": "Passionate about technology and development. Leading teams to build innovative solutions in the tech space.",
//   "linkedin": "https://www.linkedin.com",
//   "email": "mailto:rahul@gmail.com",
//   "head": "Aaditya Goyal"
// }