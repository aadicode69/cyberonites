import React, { useState } from "react";

export default function Footer2026() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#18181b] border-t border-zinc-800 text-zinc-300 font-sans py-16 px-6 sm:px-12 md:px-20 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-start">
        
        {/* COLUMN 1: CONTACT US */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-850 pb-2">
            Contact Us
          </h4>
          <p className="text-sm text-zinc-300 font-medium hover:text-white transition-colors mt-2">
            GLA University, Mathura,<br />
            India - 281406
          </p>
          <a
            href="mailto:support@cyberonites.com"
            className="text-sm text-cyan-400 font-semibold hover:underline"
          >
            support@cyberonites.com
          </a>
        </div>

        {/* COLUMN 2: EXPLORE */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-850 pb-2">
            Explore
          </h4>
          <ul className="flex flex-col gap-2.5 mt-2">
            <li>
              <a href="/" className="text-sm hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/our_team" className="text-sm hover:text-white transition-colors">
                Our Team
              </a>
            </li>
            <li>
              <a href="/#About" className="text-sm hover:text-white transition-colors">
                Connect
              </a>
            </li>
            <li>
              <a href="https://playground.cyberonites.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                Playground
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: INFORMATION */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-850 pb-2">
            Information
          </h4>
          <ul className="flex flex-col gap-2.5 mt-2">
            <li>
              <a href="/security" className="text-sm hover:text-white transition-colors">
                Security & Disclosure
              </a>
            </li>
            <li>
              <a href="https://www.freeprivacypolicy.com/live/af9fbbb5-1acc-481f-8d06-ac6b84b7a27c" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/GLA+University/@27.6056887,77.5907496,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cyan-400 hover:underline"
              >
                See on Maps
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMN 4: NEWSLETTER */}
        <div className="flex flex-col gap-3 lg:col-span-2">
          <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-850 pb-2">
            Subscribe to our newsletter
          </h4>
          <p className="text-xs text-zinc-400 leading-relaxed mt-2">
            Receive updates about upcoming events, workshops, guest lectures, and security programs.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 mt-2 w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              className="bg-white text-zinc-950 hover:bg-zinc-200 transition-colors font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg whitespace-nowrap shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* COPYRIGHT & BRANDING */}
      <div className="max-w-7xl mx-auto border-t border-zinc-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <div>
          <h3 className="font-clash text-xl font-black tracking-widest text-white uppercase">
            CYBERONITES
          </h3>
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5 font-mono">
            Be Powerful.
          </p>
        </div>
        <p className="text-xs text-zinc-500 font-medium">
          &copy; {new Date().getFullYear()} Cyberonites. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
