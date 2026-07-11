import React, { useEffect, useRef, useState } from "react";
import { LinearProgress } from "@mui/material";
import { Brain, Eye, Wind, HeartPulse } from "lucide-react";
import TrackedSection from "./TrackedSection";
import RankBadge from "./RankBadge";
import { stats, rankFromValue, arsenal } from "../data/portfolioData";

const STAT_ICONS: Record<string, React.ComponentType<any>> = {
  INT: Brain,
  PER: Eye,
  AGI: Wind,
  VIT: HeartPulse,
};

const STAT_FULL_NAME: Record<string, string> = {
  INT: "Intelligence",
  PER: "Perception",
  AGI: "Agility",
  VIT: "Vitality",
};

const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <TrackedSection id="stats" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-arise-light mb-3">
            Stat Allocation
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Player Stats
          </h2>
          <div className="divider-glow w-24 mx-auto mt-5" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {stats.map((stat) => {
            const Icon = STAT_ICONS[stat.code];
            const rank = rankFromValue(stat.value);
            return (
              <div
                key={stat.code}
                className="system-panel p-6 sm:p-7 shadow-system hover:shadow-arise transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="h-11 w-11 rounded-md border border-arise/30 bg-void/60 flex items-center justify-center text-arise-light">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                        {stat.code} · {STAT_FULL_NAME[stat.code]}
                      </p>
                      <h3 className="font-display text-base font-bold text-white">
                        {stat.name}
                      </h3>
                    </div>
                  </div>
                  <RankBadge rank={rank} />
                </div>

                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {stat.description}
                </p>

                <div className="flex items-center gap-3">
                  <LinearProgress
                    variant="determinate"
                    value={inView ? stat.value : 0}
                    sx={{
                      flex: 1,
                      height: 8,
                      borderRadius: 999,
                      backgroundColor: "rgba(96,165,250,0.12)",
                      transition: "all 1.1s ease",
                      "& .MuiLinearProgress-bar": {
                        borderRadius: 999,
                        backgroundImage:
                          "linear-gradient(90deg, #3b82f6, #7c3aed)",
                        transitionDuration: "1.1s",
                      },
                    }}
                  />
                  <span className="font-mono text-xs text-arise-light w-10 text-right">
                    {stat.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arsenal chips */}
        <div className="mt-14 text-center">
          <h3 className="font-display text-xs tracking-[0.25em] uppercase text-slate-500 mb-5">
            Equipped Arsenal
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {arsenal.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-md font-mono text-xs border border-arise/25 text-slate-300 hover:border-arise/60 hover:text-arise-light hover:shadow-arise transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </TrackedSection>
  );
};

export default Stats;
