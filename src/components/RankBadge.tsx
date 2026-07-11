import React from "react";

const RANK_STYLES: Record<
  string,
  { text: string; border: string; glow: string }
> = {
  S: { text: "text-rankS", border: "border-rankS/50", glow: "shadow-[0_0_16px_rgba(245,158,11,0.45)]" },
  A: { text: "text-rankA", border: "border-rankA/50", glow: "shadow-[0_0_16px_rgba(167,139,250,0.45)]" },
  B: { text: "text-rankB", border: "border-rankB/50", glow: "shadow-[0_0_16px_rgba(59,130,246,0.45)]" },
  C: { text: "text-rankC", border: "border-rankC/50", glow: "shadow-[0_0_16px_rgba(34,211,238,0.4)]" },
  D: { text: "text-rankD", border: "border-rankD/50", glow: "shadow-[0_0_16px_rgba(52,211,153,0.4)]" },
  E: { text: "text-rankE", border: "border-rankE/50", glow: "" },
};

const RankBadge: React.FC<{ rank: string; size?: "sm" | "md" }> = ({
  rank,
  size = "md",
}) => {
  const style = RANK_STYLES[rank] ?? RANK_STYLES.E;
  const dims = size === "sm" ? "h-7 w-7 text-xs" : "h-10 w-10 text-base";

  return (
    <span
      className={`inline-flex items-center justify-center ${dims} rounded-md border font-display font-bold ${style.text} ${style.border} ${style.glow} bg-void/60`}
      title={`Rank ${rank}`}
    >
      {rank}
    </span>
  );
};

export default RankBadge;
