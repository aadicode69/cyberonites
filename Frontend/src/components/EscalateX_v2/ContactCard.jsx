import React from "react";

const ContactCard = ({ className }) => {
  const coordinators = [
    { name: "Nitin Sikarwar", phone: "+91 9548514037" },
    { name: "Sumit Kumar", phone: "+91 9631909422" },
  ];

  return (
    <div className={`group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 md:p-8 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      
      <div className="relative z-10 text-center">
        <h2 className="text-white font-bold text-2xl md:text-3xl mb-6 tracking-wide">
          Have Questions? <span className="text-orange-500">Contact Us!</span>
        </h2>

        <div className="mb-8 p-6 rounded-2xl bg-white/5 border border-white/10">
          <p className="text-gray-300 text-lg mb-2">General Inquiries</p>
          <a
            href="mailto:support@cyberonites.com"
            className="text-orange-400 hover:text-orange-300 font-semibold text-xl transition-colors duration-300 hover:underline"
          >
            support@cyberonites.com
          </a>
        </div>

        <div className="border-t border-white/10 pt-6">
          <h3 className="text-white font-bold text-xl mb-6">
            Event <span className="text-orange-500">Coordinators</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coordinators.map((coordinator, index) => (
              <div key={index} className="group/card p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-white font-semibold text-lg mb-3">{coordinator.name}</h4>
                  <a
                    href={`tel:${coordinator.phone}`}
                    className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {coordinator.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;