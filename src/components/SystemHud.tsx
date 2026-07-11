import React, { useEffect, useState } from "react";
import { Fab, Zoom, Tooltip } from "@mui/material";
import { ArrowUp } from "lucide-react";
import { useSystem } from "../context/SystemContext";

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const SystemHud: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const { awakeningLevel, totalSections } = useSystem();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dashOffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <Zoom in={visible}>
      <Tooltip
        title={`Awakening Level ${awakeningLevel} / ${totalSections + 1}`}
        placement="left"
      >
        <Fab
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          sx={{
            position: "fixed",
            bottom: { xs: 20, sm: 32 },
            right: { xs: 20, sm: 32 },
            bgcolor: "#0b1224",
            border: "1px solid rgba(96,165,250,0.4)",
            color: "#60a5fa",
            "&:hover": { bgcolor: "#111c36" },
            zIndex: 40,
            boxShadow: "0 0 20px rgba(59,130,246,0.3)",
          }}
        >
          <div className="relative flex items-center justify-center h-12 w-12">
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 52 52">
              <circle
                cx="26"
                cy="26"
                r={RADIUS}
                fill="none"
                stroke="rgba(96,165,250,0.15)"
                strokeWidth="3"
              />
              <circle
                cx="26"
                cy="26"
                r={RADIUS}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={dashOffset}
                style={{ transition: "stroke-dashoffset 0.2s linear" }}
              />
            </svg>
            <ArrowUp size={16} />
          </div>
        </Fab>
      </Tooltip>
    </Zoom>
  );
};

export default SystemHud;
