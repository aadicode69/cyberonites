import React from "react";

const CustomFooter = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/5"></div>
      </div>

      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <h3 className="text-2xl sm:text-3xl font-bold">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ESCALATE
                </span>
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  X
                </span>
                <span className="text-white text-xl ml-1">v2</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              National-level cybersecurity challenge empowering the next generation of cybersecurity professionals through hands-on competitions and expert guidance.
            </p>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 font-semibold text-sm">October 31 - November 1, 2025</span>
            </div>
          </div>

          {/* Event Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg mb-4">
              Event <span className="text-orange-500">Information</span>
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">GLA University, Noida</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">2 Days Competition</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">National Level Challenge</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">Industry Expert Sessions</span>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg mb-4">
              Get <span className="text-orange-500">Connected</span>
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:support@cyberonites.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-sm">support@cyberonites.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm">GLA University, Noida, UP</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="text-gray-400 text-sm">
              © 2025 <span className="text-orange-400 font-semibold">EscalateX v2</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Organized by <span className="text-white font-medium">Cyberonites Club</span> • GLA University
            </p>
          </div>
          
          <div className="flex items-center space-x-4 text-xs text-gray-400">
            <span>SYSTEM: <span className="text-green-400">OPERATIONAL</span></span>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>LIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-orange-500/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-orange-600/5 rounded-full blur-2xl"></div>
    </footer>
  );
};

export default CustomFooter;
