import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainX = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            EscalateX v2
          </span>
        </h1>
        <p className="text-gray-400 mb-8">
          This component is under development. Please visit the main EscalateX v2 page.
        </p>
        <button
          onClick={() => navigate('/escalateXv2')}
          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl transition-all duration-300 font-semibold"
        >
          Go to EscalateX v2
        </button>
      </div>
    </div>
  );
};

export default MainX;
