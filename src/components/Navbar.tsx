import React, { useEffect, useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import { Menu, X, Swords } from "lucide-react";
import { profile } from "../data/portfolioData";
import { SECTION_ORDER, useSystem } from "../context/SystemContext";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { awakeningLevel } = useSystem();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_ORDER.map((n) =>
      document.getElementById(n.id)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  const navLabel = (label: string) =>
    label === "Status Window"
      ? "Home"
      : label === "Player Profile"
      ? "About"
      : label === "Stat Allocation"
      ? "Stats"
      : label === "Quest Log"
      ? "Quests"
      : "Contact";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-void/90 border-b border-arise/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 group"
          aria-label="Go to home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-arise/40 bg-void text-arise-light shadow-arise transition-transform group-hover:rotate-6">
            <Swords size={17} />
          </span>
          <span className="font-display font-bold text-sm sm:text-base text-white tracking-wide hidden sm:inline">
            {profile.name.toUpperCase()}
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1 font-display text-xs tracking-widest uppercase">
          {SECTION_ORDER.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`px-3.5 py-2 rounded-md transition-all duration-200 border ${
                  active === item.id
                    ? "border-arise/50 text-arise-light bg-arise/10 shadow-arise"
                    : "border-transparent text-slate-400 hover:text-slate-200 hover:border-arise/20"
                }`}
              >
                {navLabel(item.label)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-arise-light border border-arise/30 rounded-md px-2.5 py-1 bg-void/50">
            <span className="h-1.5 w-1.5 rounded-full bg-arise animate-pulse" />
            LV. {awakeningLevel}
          </div>

          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{
              display: { xs: "inline-flex", lg: "none" },
              color: "#e2e8f0",
            }}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </IconButton>
        </div>
      </nav>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            bgcolor: "#05070f",
            borderLeft: "1px solid rgba(96,165,250,0.25)",
            p: 2,
          },
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <span className="font-display font-bold text-arise-light tracking-widest text-sm">
            SYSTEM MENU
          </span>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "#e2e8f0" }}
            aria-label="Close menu"
          >
            <X size={20} />
          </IconButton>
        </div>
        <ul className="flex flex-col gap-1.5 font-display text-xs tracking-widest uppercase">
          {SECTION_ORDER.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-4 py-3 rounded-md border transition-colors ${
                  active === item.id
                    ? "border-arise/50 text-arise-light bg-arise/10"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                {navLabel(item.label)}
              </button>
            </li>
          ))}
        </ul>
      </Drawer>
    </header>
  );
};

export default Navbar;
