import React, { useState, useEffect, useRef } from "react";
import intrusionPoster from "../../img/intrusionX/IntrusionXSE.webp";
import { useNavigate } from "react-router-dom";

const Popup = ({ onClose }) => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  
  useEffect(() => {
    const modal = document.getElementById("modal-container");
    if (modal) {
      modal.classList.add("animate-in");
    }
    const button = buttonRef.current;
    if (button) {
      button.addEventListener('mousedown', createRipple);
    }
    
    return () => {
      if (button) {
        button.removeEventListener('mousedown', createRipple);
      }
    };
  }, []);
  
  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 3;
    const centerY = rect.height / 3;
    const tiltX = (y - centerY) / 90;
    const tiltY = (centerX - x) / 90;
    
    setMousePosition({ x: tiltX, y: tiltY });
  };
  
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };
  
  const createRipple = (event) => {
    const button = buttonRef.current;
    if (!button) return;
    
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    const rect = button.getBoundingClientRect();
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }
    
    button.appendChild(circle);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-black font-clash bg-opacity-60 flex justify-center items-center z-[9999] p-4">
      <div 
        id="modal-container"
        className="bg-gray-900 bg-opacity-80 text-white p-5 rounded-2xl border border-cyan-400/50 
        backdrop-filter backdrop-blur-lg relative flex flex-col items-center w-[90vw] max-w-[900px] 
        transform transition-all duration-300 opacity-0 scale-95"
      >
        <span 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer
          hover:text-cyan-400 transition-colors duration-200"
        >
          ×
        </span>

        <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center">
          IntrusionX : Second Edition
        </h2>
        
        <p className="mt-1 text-sm md:text-lg italic text-gray-300 text-center opacity-80">
          Are you ready to breach the systems?
        </p>

        <div 
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="mt-2 flex justify-center items-center overflow-hidden rounded-lg w-full perspective"
        >
          <img 
            src={intrusionPoster} 
            alt="Mystery Event" 
            className="w-auto h-[260px] object-contain transition-transform duration-200 ease-out"
            style={{ 
              transform: `rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg)`,
            }}
          />
        </div>

        <p className="mt-2 text-xs md:text-sm text-gray-400 text-center px-2">
          Stay tuned. Flags are hidden. The game begins soon 
          <span className="inline-block animate-pulse text-cyan-400 ml-1">[•••]</span>
        </p>

        <button 
          ref={buttonRef}
          onClick={() => navigate("/intrusion-x-second-edition")} 
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="mt-2 w-1/3 py-2 relative overflow-hidden rounded-md font-bold
          bg-gradient-to-r from-cyan-500 to-blue-500 text-white
          transition-all duration-300 transform
          hover:tracking-wider"
        >
          <span className="relative z-10 flex items-center justify-center">
            <span className={`transition-all duration-300 ${isHovering ? 'mr-3' : 'mr-0 opacity-0'}`}>
              →
            </span>
            <span>Explore</span>
            <span className={`transition-all duration-300 ${isHovering ? 'ml-3' : 'ml-0 opacity-0'}`}>
              ←
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

const style = document.createElement('style');
style.textContent = `
  .animate-in {
    animation: modalEnter 0.4s forwards ease-out;
  }
  
  @keyframes modalEnter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .perspective {
    perspective: 1000px;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

export default Popup;