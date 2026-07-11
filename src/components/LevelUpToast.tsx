import React, { useEffect, useState } from "react";
import { Snackbar } from "@mui/material";
import { ArrowUpCircle } from "lucide-react";
import { useSystem } from "../context/SystemContext";

const LevelUpToast: React.FC = () => {
  const { lastEvent, clearEvent } = useSystem();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (lastEvent) {
      setOpen(true);
      const timer = setTimeout(() => {
        setOpen(false);
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [lastEvent]);

  if (!lastEvent) return null;

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={() => setOpen(false)}
      TransitionProps={{ onExited: clearEvent }}
      sx={{ top: { xs: 76, sm: 96 } }}
    >
      <div className="system-panel px-6 py-4 sm:px-10 sm:py-5 shadow-arise-lg animate-levelUpIn text-center min-w-[260px]">
        <p className="font-display text-arise-light text-xs sm:text-sm tracking-[0.3em] uppercase mb-1 animate-flicker">
          The System
        </p>
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <ArrowUpCircle className="text-arise-light shrink-0" size={22} />
          <p className="font-display font-bold text-lg sm:text-2xl text-glow text-white tracking-wide">
            LEVEL UP!
          </p>
        </div>
        <p className="font-mono text-[11px] sm:text-xs text-slate-300 mt-2">
          Awakening Level {lastEvent.level} reached — {lastEvent.sectionLabel}{" "}
          unlocked
        </p>
      </div>
    </Snackbar>
  );
};

export default LevelUpToast;
