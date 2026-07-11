import React from "react";
import { ScrollText, Award } from "lucide-react";
import TrackedSection from "./TrackedSection";
import { about, profile } from "../data/portfolioData";

const About: React.FC = () => {
  return (
    <TrackedSection
      id="about"
      className="py-20 sm:py-28 relative bg-void-soft/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-arise-light mb-3">
            Player Profile
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            About the Player
          </h2>
          <div className="divider-glow w-24 mx-auto mt-5" />
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          {/* Player card */}
          <div className="system-panel p-6 sm:p-8 shadow-system">
            <div className="flex items-center gap-2 mb-4 font-mono text-[10px] uppercase tracking-widest text-arise-light/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Online
            </div>
            <div className="h-24 w-24 mx-auto rounded-md border-2 border-arise/40 bg-void-soft flex items-center justify-center font-display text-3xl font-black text-arise-light mb-6 shadow-arise">
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>

            <div className="divider-glow mb-5" />

            <h3 className="font-display text-sm text-white mb-4 flex items-center gap-2 tracking-wide">
              <Award size={16} className="text-arise-light" />
              Titles Earned
            </h3>
            <div className="space-y-3">
              {about.titlesEarned.map((t) => (
                <div
                  key={t.label}
                  className="flex items-center justify-between font-mono text-xs sm:text-sm border border-arise/15 rounded-md px-3 py-2 bg-void/40"
                >
                  <span className="text-slate-500 uppercase tracking-wide">
                    {t.label}
                  </span>
                  <span className="text-arise-light">{t.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio / lore log */}
          <div className="system-panel p-6 sm:p-8 shadow-system">
            <h3 className="font-display text-sm text-white mb-5 flex items-center gap-2 tracking-wide uppercase">
              <ScrollText size={16} className="text-arise-light" />
              Player Log
            </h3>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-body">
              {about.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TrackedSection>
  );
};

export default About;
