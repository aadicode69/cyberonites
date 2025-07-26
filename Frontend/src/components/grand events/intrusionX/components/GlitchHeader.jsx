import { FaArrowLeft } from 'react-icons/fa';
import '../styles/glitch-effect.css';

const GlitchHeader = ({ onReturnClick, backgroundImage }) => {
  return (
    <div className="mb-8">
      <button
        onClick={onReturnClick}
        className="flex items-center text-blue-400 mb-4 border border-blue-900 px-4 py-2 rounded-sm bg-black/30 hover:bg-black/50 transition-colors hover-scale hover-glow z-20 relative"
      >
        <FaArrowLeft className="mr-2" />
        <span className="font-mono">RETURN TO HOME</span>
      </button>
      
      <div className="glitch-hero-container rounded-sm">
        <div 
          className="glitch-environment" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="scanner"></div>
        <h1 className="glitch-title glitch-text glitch-layers" data-text="INTRUSION">
          <span>INTRUSION</span>
        </h1>
        <h1 className="glitch-title glitch-text glitch-layers text-[10em]" data-text="X">
          <span>X</span>
        </h1>
        
        <p className="glitch-subtitle">
          \\ A PREMIER CYBERSECURITY HACKATHON // <br/> \\ APRIL 11-12, 2025 //
        </p>
        
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
