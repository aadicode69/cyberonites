import React from 'react';
import { motion } from 'framer-motion';

const LatestUpdates = () => {
  // Sample updates data - replace with your actual data source
  const latestUpdates = [
    {
      id: 1,
      title: "IntrusionX 2024 Registration Open",
      date: "2024-01-15",
      type: "Event",
      description: "Join our flagship cybersecurity competition"
    },
    {
      id: 2,
      title: "New Cybersecurity Workshop Series",
      date: "2024-01-10",
      type: "Workshop",
      description: "Advanced penetration testing techniques"
    },
    {
      id: 3,
      title: "Industry Partnership Announcement",
      date: "2024-01-05",
      type: "News",
      description: "Collaboration with leading security firms"
    },
    {
      id: 4,
      title: "Ethical Hacking Bootcamp Launch",
      date: "2024-01-02",
      type: "Workshop",
      description: "Intensive 7-day ethical hacking training program"
    },
    {
      id: 5,
      title: "Cyber Defense Competition Results",
      date: "2023-12-28",
      type: "Event",
      description: "Winners announced for annual defense challenge"
    }
  ];

  return (
    <div className="w-full max-w-lg">
      {/* Updates Container with Enhanced Background */}
      <div className="relative bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 rounded-2xl pointer-events-none"></div>
        
        {/* Sharp corner accents - single enhanced corners */}
        <div className="absolute top-0 left-0 w-16 h-16">
          <div className="absolute top-0 left-0 w-16 h-1 bg-cyan-400 rounded-br-lg"></div>
          <div className="absolute top-0 left-0 w-1 h-16 bg-cyan-400 rounded-br-lg"></div>
        </div>
        <div className="absolute top-0 right-0 w-16 h-16">
          <div className="absolute top-0 right-0 w-16 h-1 bg-cyan-400 rounded-bl-lg"></div>
          <div className="absolute top-0 right-0 w-1 h-16 bg-cyan-400 rounded-bl-lg"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-16 h-16">
          <div className="absolute bottom-0 left-0 w-16 h-1 bg-cyan-400 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-1 h-16 bg-cyan-400 rounded-tr-lg"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16">
          <div className="absolute bottom-0 right-0 w-16 h-1 bg-cyan-400 rounded-tl-lg"></div>
          <div className="absolute bottom-0 right-0 w-1 h-16 bg-cyan-400 rounded-tl-lg"></div>
        </div>

        {/* Updates Header */}
        <motion.div
          className="mb-6 text-left relative z-10 mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="relative inline-block">
            <h3 className="text-2xl font-bold mb-1 flex items-center justify-start relative">
              <span className="mr-3 text-2xl animate-pulse">🛡️</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-blue-400">
                Latest Updates
              </span>
            </h3>
            {/* Simple thin underline */}
            <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 rounded-full animate-gradient-x"></div>
          </div>
        </motion.div>

        {/* Updates Items - Enhanced Scrollable Container */}
        <div className="max-h-[25rem] overflow-y-auto scrollbar-cyber pr-2 relative z-10 mb-4">
          <div className="space-y-3">
            {latestUpdates.map((update, index) => (
              <motion.div
                key={update.id}
                className="relative group overflow-hidden rounded-lg border border-cyan-400/20 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm p-4 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-gray-800/60 hover:to-gray-900/80 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              >
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                
                {/* Minimalist side accent */}
                <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-r-full opacity-70 group-hover:opacity-100 group-hover:w-1 transition-all duration-300"></div>
                
                <div className="relative z-10 ml-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium border backdrop-blur-sm ${
                      update.type === 'Event' 
                        ? 'bg-cyan-400/15 text-cyan-300 border-cyan-400/30' :
                      update.type === 'Workshop' 
                        ? 'bg-green-400/15 text-green-300 border-green-400/30' :
                        'bg-blue-400/15 text-blue-300 border-blue-400/30'
                    }`}>
                      {update.type}
                    </span>
                    <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded backdrop-blur-sm">
                      {new Date(update.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1.5 group-hover:text-cyan-300 transition-colors duration-300">
                    {update.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {update.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-6 left-6 right-6 h-3 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none rounded-b-xl"></div>
      </div>
    </div>
  );
};

export default LatestUpdates;
