import React from 'react';
import { FaUsers, FaUniversity, FaGraduationCap, FaTrophy } from 'react-icons/fa';
import { statistics } from '../data/eventData';

const StatisticsPanel = () => {
  // Map string icon names to actual React components
  const getIcon = (iconName) => {
    const icons = {
      FaUsers: <FaUsers />,
      FaUniversity: <FaUniversity />,
      FaGraduationCap: <FaGraduationCap />,
      FaTrophy: <FaTrophy />
    };
    return icons[iconName] || null;
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
      {statistics.map((stat, idx) => (
        <div key={idx} className="border border-cyan-900 bg-black/40 backdrop-blur-sm p-4 flex flex-col items-center justify-center">
          <div className="text-cyan-500 mb-2">{getIcon(stat.icon)}</div>
          <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-400">{stat.value}</div>
          <div className="text-xs sm:text-sm text-cyan-200 mt-1 font-mono tracking-wide">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsPanel;
