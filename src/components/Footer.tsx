import React from "react";
import { profile } from "../data/portfolioData";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-arise/15 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-mono text-xs sm:text-sm text-slate-500">
          <span className="text-arise-light">[</span> © {new Date().getFullYear()}{" "}
          {profile.name} — The System never truly closes.{" "}
          <span className="text-arise-light">]</span>
        </p>
        <p className="font-mono text-[10px] text-slate-600 mt-2">
          Built with React + TypeScript + Tailwind + MUI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
