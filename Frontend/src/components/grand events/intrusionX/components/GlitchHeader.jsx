import React from 'react';
import { FaArrowLeft, FaMapMarkerAlt, FaUsers, FaTrophy, FaCalendarAlt } from 'react-icons/fa';
import '../styles/glitch-effect.css';

const GlitchHeader = ({ onReturnClick, backgroundImage }) => {
  return (
    <div className="mb-8">
      <button
        onClick={onReturnClick}
        className="flex items-center text-blue-400 mb-4 border border-blue-900 px-4 py-2 rounded-sm bg-black/30 hover:bg-black/50 transition-colors hover-scale hover-glow z-20 relative"
      >
        <FaArrowLeft className="mr-2" />
        <span className="font-mono">RETURN TO EVENTS</span>
      </button>
      
      <div className="glitch-hero-container rounded-sm">
        {/* Fixed background image rendering */}
        <div 
          className="glitch-environment" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        
        {/* Scanner effect */}
        <div className="scanner"></div>
        
        {/* Main glitch effect - ensure data-text attribute is correctly set */}
        <h1 className="glitch-title glitch-text glitch-layers" data-text="IntrusionX">
          <span>IntrusionX</span>
        </h1>
        
        <p className="glitch-subtitle">
          A PREMIER CYBERSECURITY HACKATHON // APRIL 15-16, 2023
        </p>
        
        <div className="glitch-event-details">
          <div className="glitch-detail-item">
            <FaMapMarkerAlt className="text-pink-500 glitch-detail-icon" />
            <span>GLA University, Mathura</span>
          </div>
          <div className="glitch-detail-item">
            <FaUsers className="text-yellow-500 glitch-detail-icon" />
            <span>25 Teams</span>
          </div>
          <div className="glitch-detail-item">
            <FaTrophy className="text-green-500 glitch-detail-icon" />
            <span>₹3,00,000 Prize Pool</span>
          </div>
          <div className="glitch-detail-item">
            <FaCalendarAlt className="text-blue-500 glitch-detail-icon" />
            <span>36-Hour Non-Stop Challenge</span>
          </div>
        </div>
        
        {/* Terminal command effect */}
        <div className="mt-8 text-left inline-block bg-black/50 px-4 py-2 rounded-sm font-mono text-xs md:text-sm">
          <div className="text-blue-400">root@intrusionx:~#</div>
          <div className="flex">
            <span className="text-blue-400 mr-2">$</span>
            <span className="terminal-entry">./launch_hackathon --mode=cybersecurity --teams=25</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlitchHeader;
