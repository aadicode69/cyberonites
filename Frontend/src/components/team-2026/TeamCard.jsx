import React from "react";

export default function TeamCard({ 
  member, 
  variant = "avatar", 
  isSelected = false, 
  onSelect, 
  onMouseEnter, 
  onMouseLeave,
  onPrev,
  onNext
}) {
  // ── FEATURED CARD — Highly compact dimensions to prevent covering the background image ──
  if (variant === "featured") {
    return (
      <div className="w-[330px] bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.1)] border border-slate-100/90 overflow-hidden text-left">
        
        {/* Row with Photo and Basic Info */}
        <div className="flex items-center gap-3.5 p-3.5">
          {/* Square Photo — highly compact */}
          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-slate-100 shadow-sm">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right — Name, Role, Social Icons */}
          <div className="flex-1 min-w-0">
            <h3 className="font-clash text-sm font-bold text-slate-900 leading-tight truncate">
              {member.name}
            </h3>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5 tracking-wide">
              {member.role}
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-1.5 mt-2">
              {member.socials?.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-5.5 w-5.5 items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors"
                >
                  <svg className="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
              {member.socials?.github && (
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-5.5 w-5.5 items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 hover:text-slate-800 hover:border-slate-400 transition-colors"
                >
                  <svg className="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
              {member.socials?.email && (
                <a
                  href={`mailto:${member.socials.email}`}
                  aria-label="Email"
                  className="flex h-5.5 w-5.5 items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:bg-red-50 hover:text-red-500 hover:border-red-300 transition-colors"
                >
                  <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM: Full Bio text — compact */}
        <div className="px-3.5 py-2.5 border-t border-slate-100 bg-slate-50/50">
          <p className="text-slate-600 text-[11px] leading-relaxed line-clamp-4">
            {member.bio}
          </p>
        </div>

        {/* FOOTER: Prev / Next Navigation Arrows */}
        {(onPrev || onNext) && (
          <div className="flex justify-end px-3.5 pb-2.5 pt-1.5 bg-slate-50/50">
            <div className="flex items-center rounded-full overflow-hidden bg-blue-600 shadow-sm">
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous member"
                className="flex items-center justify-center w-6 h-6 text-white hover:bg-blue-700 transition-colors"
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="h-3.5 w-px bg-white/20" />
              <button
                type="button"
                onClick={onNext}
                aria-label="Next member"
                className="flex items-center justify-center w-6 h-6 text-white hover:bg-blue-700 transition-colors"
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── AVATAR VARIANT ──
  return (
    <button
      type="button"
      onClick={() => onSelect?.(member)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label={`Select ${member.name}`}
      className="group relative flex flex-col items-center focus:outline-none"
    >
      <div className={`h-16 w-16 sm:h-20 sm:w-20 rounded-full p-1 bg-white border border-slate-200 shadow-sm
        group-hover:border-blue-300 group-hover:shadow-md transition-all duration-300
        ${isSelected ? 'ring-4 ring-blue-500 ring-offset-2 border-blue-300' : ''}
      `}>
        <div className="h-full w-full rounded-full overflow-hidden bg-slate-50">
          <img
            src={member.image}
            alt={member.name}
            className={`h-full w-full object-cover transition-all duration-300
              ${isSelected ? 'grayscale-0 opacity-100' : 'grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100'}
            `}
          />
        </div>
      </div>
    </button>
  );
}
