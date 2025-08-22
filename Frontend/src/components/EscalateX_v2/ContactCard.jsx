import React from "react";
import { FaEnvelope, FaUser, FaHeadset } from "react-icons/fa";

const ContactCard = ({ className }) => {
  const coordinators = [
    { name: "Nitin Sikarwar", role: "Lead Event Coordinator" },
    { name: "Sumit Kumar", role: "Technical Coordinator" },
  ];

  return (
    <section className={`py-16 px-6 relative ${className}`} aria-labelledby="contact-heading">
      <header className="text-center max-w-4xl mx-auto mb-12">
        <h2 id="contact-heading" className="text-4xl md:text-5xl font-black text-white mb-6 tracking-wide exv2-font-cyberjunkies">
          <span className="text-white">CONTACT</span> <span className="text-orange-500">US</span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Get in touch with our team for event inquiries and support
        </p>
      </header>
      
      <main className="max-w-4xl mx-auto">
        <article className="exv2-contact-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
          <header className="flex items-center gap-4 mb-8">
            <aside className="p-3 bg-orange-500/20 rounded-xl" aria-hidden="true">
              <FaEnvelope className="text-orange-400 text-2xl" />
            </aside>
            <h3 className="text-white text-xl font-bold exv2-font-clouds">Event Information & Support</h3>
          </header>
          
          <section className="mb-8" aria-labelledby="general-inquiries">
            <h4 id="general-inquiries" className="flex items-center gap-3 text-orange-400 text-lg font-semibold mb-4 exv2-font-clouds">
              <FaEnvelope className="text-base" aria-hidden="true" />
              General Inquiries
            </h4>
            <dl className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <dt className="text-gray-400 font-medium min-w-32">Email:</dt>
                <dd>
                  <a 
                    href="mailto:support@cyberonites.com" 
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    support@cyberonites.com
                  </a>
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <dt className="text-gray-400 font-medium min-w-32">Response Time:</dt>
                <dd className="text-white">Within 24 hours</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <dt className="text-gray-400 font-medium min-w-32">Venue:</dt>
                <dd className="text-white">GLA University, Mathura, UP</dd>
              </div>
            </dl>
          </section>

          <hr className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent mb-8" />

          <section aria-labelledby="coordinators-heading">
            <h4 id="coordinators-heading" className="flex items-center gap-3 text-orange-400 text-lg font-semibold mb-4 exv2-font-clouds">
              <FaUser className="text-base" aria-hidden="true" />
              Event Coordinators
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coordinators.map((coordinator, index) => (
                <li key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <aside className="p-2 bg-orange-500/20 rounded-lg" aria-hidden="true">
                    <FaHeadset className="text-orange-400 text-lg" />
                  </aside>
                  <div>
                    <h5 className="text-white font-semibold exv2-font-clouds">{coordinator.name}</h5>
                    <p className="text-gray-400 text-sm">{coordinator.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
    </section>
  );
};

export default ContactCard;