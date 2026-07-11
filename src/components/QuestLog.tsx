import React, { useMemo, useState } from "react";
import { Card, CardContent, CardActions, Button, Chip } from "@mui/material";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import TrackedSection from "./TrackedSection";
import RankBadge from "./RankBadge";
import SystemParticles from "./SystemParticles";
import { quests } from "../data/portfolioData";

const RANK_FILTERS = ["All", "S", "A", "B", "C", "D", "E"] as const;

const QuestLog: React.FC = () => {
  const [filter, setFilter] = useState<(typeof RANK_FILTERS)[number]>("All");

  const filtered = useMemo(
    () => (filter === "All" ? quests : quests.filter((q) => q.rank === filter)),
    [filter]
  );

  return (
    <TrackedSection id="quests" className="py-20 sm:py-28 relative">
      <SystemParticles density="low" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 sm:mb-14">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-arise-light mb-3">
            Quest Log
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Cleared Quests
          </h2>
          <div className="divider-glow w-24 mx-auto mt-5" />
        </div>

        {/* Rank filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {RANK_FILTERS.map((r) => (
            <Chip
              key={r}
              label={r === "All" ? "All Ranks" : `Rank ${r}`}
              onClick={() => setFilter(r)}
              sx={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "0.72rem",
                bgcolor: filter === r ? "#1d4ed8" : "transparent",
                color: filter === r ? "#e0f2fe" : "#94a3b8",
                border: "1px solid",
                borderColor:
                  filter === r ? "#3b82f6" : "rgba(96,165,250,0.25)",
                "&:hover": {
                  bgcolor: filter === r ? "#1e40af" : "rgba(59,130,246,0.1)",
                },
              }}
            />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((quest) => (
            <Card
              key={quest.id}
              elevation={0}
              sx={{
                borderRadius: "10px",
                border: "1px solid rgba(96,165,250,0.18)",
                background:
                  "linear-gradient(160deg, rgba(15,23,42,0.7), rgba(11,18,36,0.85))",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "rgba(96,165,250,0.5)",
                  boxShadow: "0 0 25px rgba(59,130,246,0.25)",
                },
              }}
            >
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <RankBadge rank={quest.rank} size="sm" />
                  <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                    <CheckCircle2 size={13} />
                    Cleared
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2 leading-snug">
                  {quest.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {quest.brief}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {quest.rewards.map((r) => (
                    <span
                      key={r}
                      className="font-mono text-[10px] px-2 py-1 rounded border border-arise/20 text-slate-400"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2, gap: 1 }}>
                <Button
                  size="small"
                  startIcon={<Github size={15} />}
                  href={quest.github}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    color: "#94a3b8",
                    textTransform: "none",
                    fontFamily: "'Rajdhani', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Source
                </Button>
                {quest.demo && (
                  <Button
                    size="small"
                    startIcon={<ExternalLink size={15} />}
                    href={quest.demo}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      color: "#60a5fa",
                      textTransform: "none",
                      fontFamily: "'Rajdhani', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Enter Dungeon
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-12 font-mono text-sm">
            No quests cleared at this rank yet.
          </p>
        )}
      </div>
    </TrackedSection>
  );
};

export default QuestLog;
