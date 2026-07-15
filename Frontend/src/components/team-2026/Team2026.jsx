import { useState } from "react";
import TitleCard from "./TitleCard";
import TeamCard from "./TeamCard";
import Footer2026 from "./Footer2026";
import { teamData } from "./teamData";

export default function Team2026() {
  const [selected, setSelected] = useState(teamData[0]);
  const [hovered, setHovered] = useState(null);

  const activeMember = hovered || selected;

  const handleNext = () => {
    const idx = teamData.findIndex((m) => m.id === selected.id);
    setSelected(teamData[(idx + 1) % teamData.length]);
  };

  const handlePrev = () => {
    const idx = teamData.findIndex((m) => m.id === selected.id);
    setSelected(teamData[(idx - 1 + teamData.length) % teamData.length]);
  };

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-800">

      {/* Gentle floating keyframes & scrollbar hiding for avatars */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatY1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes floatY2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY( 6px)} }
        @keyframes floatY3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes floatY4 { 0%,100%{transform:translateY(0)} 50%{transform:translateY( 5px)} }
        @keyframes floatY5 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }

        .animate-float-1 { animation: floatY1 4.0s ease-in-out infinite; }
        .animate-float-2 { animation: floatY2 4.8s ease-in-out infinite; }
        .animate-float-3 { animation: floatY3 3.6s ease-in-out infinite; }
        .animate-float-4 { animation: floatY4 4.4s ease-in-out infinite; }
        .animate-float-5 { animation: floatY5 5.2s ease-in-out infinite; }

        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      ` }} />

      {/* 1. Hero & Scattered Avatars Section */}
      <main className="flex-grow flex flex-col pt-12">
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center justify-end min-h-[820px] overflow-hidden">

          {/* Background Portrait — Larger, pushed to the top so face is fully visible */}
          <div className="absolute inset-0 flex justify-center items-start pt-16 pointer-events-none select-none z-[2]">
            <img
              src={activeMember.image}
              alt=""
              className="h-full max-h-[660px] md:max-h-[700px] w-auto object-contain opacity-[0.16] grayscale transition-all duration-700 ease-in-out"
            />
          </div>

          {/* Huge Semi-Transparent Typography — upper area, behind background image */}
          <div className="absolute inset-0 flex items-start justify-center pt-5 pointer-events-none select-none z-[1] overflow-hidden">
            <span className="font-sans font-black text-[5.5vw] sm:text-[6.5vw] tracking-widest uppercase text-slate-300/40 leading-none select-none whitespace-nowrap">
              CYBERONITES TEAM
            </span>
          </div>

          {/* Dynamic Role/Position label on the left side of the background image */}
          <div className="absolute left-6 md:left-12 top-[35%] -translate-y-1/2 font-clash text-sm md:text-xl uppercase tracking-[0.45em] text-slate-950 font-black select-none pointer-events-none z-[3] transition-all duration-500 ease-in-out">
            {activeMember.role}
          </div>

          {/* Central Featured Card — positioned lower, directly above circular avatars */}
          <div className={`relative z-20 mb-4 transition-all duration-300 ease-in-out min-h-[160px] flex items-center justify-center
            ${hovered ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
          `}>
            <TeamCard
              member={hovered || teamData[0]}
              variant="featured"
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </div>

          {/* Horizontally Scrollable Avatar Row */}
          <div className="relative z-30 w-full mt-2 overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing py-4 flex items-center">
            <div className="flex items-center gap-6 min-w-max px-8 md:px-16 mx-auto justify-start lg:justify-center">
              {teamData.map((member, idx) => {
                const isSelected = selected.id === member.id;
                const floatClass = `animate-float-${(idx % 5) + 1}`;
                return (
                  <div key={member.id} className={floatClass}>
                    <TeamCard
                      member={member}
                      variant="avatar"
                      isSelected={isSelected}
                      onSelect={setSelected}
                      onMouseEnter={() => setHovered(member)}
                      onMouseLeave={() => setHovered(null)}
                    />
                  </div>
                );
              })}
            </div>
          </div>

        </section>

        {/* Section Label - "Team members" Left-Aligned */}
        <TitleCard label="Team members" />
      </main>
      <Footer2026 />
    </div>
  );
}
