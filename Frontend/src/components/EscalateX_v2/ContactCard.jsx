import React from "react";
import { FaEnvelope, FaUser, FaHeadset } from "react-icons/fa";
import "./EscX_v2_custom.css";

const ContactCard = ({ className }) => {
  const coordinators = [
    { name: "Nitin Sikarwar", role: "Lead Event Coordinator" },
    { name: "Sumit Kumar", role: "Technical Coordinator" },
  ];

  return (
    <section className={`py-16 px-6 relative ${className}`}>
      <header className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-wide exv2-font-cyberjunkies">
          <span className="text-white">CONTACT</span> <span className="text-orange-500">US</span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Get in touch with our team for event inquiries and support
        </p>
      </header>
      
      <div className="max-w-4xl mx-auto">
        <article className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
          <header className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-orange-500/20 rounded-xl">
              <FaEnvelope className="text-orange-400 text-2xl" />
            </div>
            <h3 className="text-white text-xl font-bold exv2-font-clouds">Event Information & Support</h3>
          </header>
          
          <section className="mb-8">
            <h4 className="flex items-center gap-3 text-orange-400 text-lg font-semibold mb-4 exv2-font-clouds">
              <FaEnvelope className="text-base" />
              General Inquiries
            </h4>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400 font-medium min-w-32">Email:</span>
                <a 
                  href="mailto:support@cyberonites.com" 
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  support@cyberonites.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400 font-medium min-w-32">Response Time:</span>
                <span className="text-white">Within 24 hours</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400 font-medium min-w-32">Venue:</span>
                <span className="text-white">GLA University, Mathura, UP</span>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent mb-8"></div>

          <section>
            <h4 className="flex items-center gap-3 text-orange-400 text-lg font-semibold mb-4 exv2-font-clouds">
              <FaUser className="text-base" />
              Event Coordinators
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coordinators.map((coordinator, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <FaHeadset className="text-orange-400 text-lg" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold exv2-font-clouds">{coordinator.name}</h5>
                    <p className="text-gray-400 text-sm">{coordinator.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </section>
  );
};

export default ContactCard;