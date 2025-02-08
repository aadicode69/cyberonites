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
    <div className="w-full max-w-xs border-2 border-gradient-to-r from-purple-700 via-pink-600 to-purple-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative bg-opacity-5 backdrop-blur-2xl rounded-xl">
        <div className="w-full h-28 rounded-t-xl overflow-hidden">
          <img
            src={bannerImage}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 rounded-full">
          <img
            className="w-28 h-28 rounded-full object-cover"
            src={profileImage}
            alt={name}
          />
        </div>
      </div>

      <div className="flex flex-col items-center pt-12 pb-6 px-5">
        <h5 className="text-2xl font-bold text-gray-900 dark:text-white font-clash">
          {name}
        </h5>
        <span className="text-md font-semibold text-gray-500 dark:text-gray-400 mb-3 font-clash">
          {role}
        </span>
        <p className="text-center text-gray-500 dark:text-gray-300 text-sm leading-relaxed mb-2 font-ranade">
          {description}
        </p>

        <div className="flex mt-3 space-x-3 font-cyberfont">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-200"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
          <a
            href={email}
            className="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:bg-gradient-to-l focus:outline-none dark:text-white dark:border-gray-600 dark:hover:text-gray-900 dark:hover:bg-gray-700 transition-all duration-200"
          >
            <FaEnvelope className="mr-2" /> Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
