import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-9xl font-bold text-cyan-500">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-cyan-400">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-cyan-500 text-black font-medium rounded-lg shadow-md hover:bg-cyan-600 transition-all duration-300">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
