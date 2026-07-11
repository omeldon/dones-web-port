import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Download, Mail, Github, Linkedin, Facebook, ChevronDown } from "lucide-react";
import SystemParticles from "./SystemParticles";
import TrackedSection from "./TrackedSection";
import { profile } from "../data/portfolioData";

const useTypewriter = (words: string[]) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 40 : 85;
    const timeout = setTimeout(() => {
      const current = words[index % words.length];
      setText(current.substring(0, subIndex));

      if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words]);

  return text;
};

const Hero: React.FC = () => {
  const classText = useTypewriter([...profile.classes]);

  return (
    <TrackedSection
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <SystemParticles density="high" />

      {/* Rotating magic-circle accents */}
      <svg
        className="absolute -right-24 top-1/4 w-[420px] h-[420px] opacity-[0.12] animate-spinSlow hidden md:block"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="90" fill="none" stroke="#60a5fa" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="72" fill="none" stroke="#a78bfa" strokeWidth="0.6" />
        <polygon
          points="100,14 173,57 173,143 100,186 27,143 27,57"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="0.8"
        />
      </svg>
      <svg
        className="absolute -left-16 bottom-10 w-[280px] h-[280px] opacity-[0.1] animate-spinSlowReverse hidden md:block"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <polygon
          points="100,20 180,100 100,180 20,100"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="0.8"
        />
      </svg>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center w-full">
        {/* Left: intro copy */}
        <div className="animate-fadeUp text-center lg:text-left">
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-arise-light mb-4 flex items-center gap-2 justify-center lg:justify-start">
            <span className="h-1.5 w-1.5 rounded-full bg-arise animate-pulse" />
            The System has recognized a new Player
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] text-white text-glow">
            {profile.name}
          </h1>

          <p className="mt-4 h-8 sm:h-9 font-display text-lg sm:text-2xl text-arise-light">
            {classText}
            <span className="inline-block w-[2px] h-5 sm:h-6 bg-arise-light ml-1 align-middle animate-pulse" />
          </p>

          <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0">
            A self-learning developer, continuously grinding new stacks and
            clearing real-world projects — one quest at a time.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button
              href={profile.resumeUrl}
              download
              variant="contained"
              startIcon={<Download size={18} />}
              sx={{
                bgcolor: "#1d4ed8",
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.05em",
                "&:hover": { bgcolor: "#1e40af" },
                px: 3,
                py: 1.3,
                borderRadius: "8px",
                boxShadow: "0 0 20px rgba(59,130,246,0.35)",
              }}
            >
              Extract Resume
            </Button>
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="outlined"
              startIcon={<Mail size={18} />}
              sx={{
                borderColor: "rgba(96,165,250,0.4)",
                color: "#e2e8f0",
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.05em",
                px: 3,
                py: 1.3,
                borderRadius: "8px",
                "&:hover": {
                  borderColor: "#60a5fa",
                  bgcolor: "rgba(59,130,246,0.08)",
                },
              }}
            >
              Send Request
            </Button>

            <div className="flex items-center gap-2 ml-1">
              {[
                { icon: Github, href: profile.social.github, label: "GitHub" },
                { icon: Linkedin, href: profile.social.linkedin, label: "LinkedIn" },
                { icon: Facebook, href: profile.social.facebook, label: "Facebook" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="h-10 w-10 flex items-center justify-center rounded-md border border-arise/25 text-slate-300 hover:text-arise-light hover:border-arise/60 hover:shadow-arise transition-all"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: status window card */}
        <div className="animate-floatSlow mx-auto w-full max-w-sm">
          <div className="system-panel px-6 py-6 sm:px-8 sm:py-8 shadow-arise-lg">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-arise-light/80 mb-5">
              <span>Status Window</span>
              <span className="animate-pulse">● Live</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-md border-2 border-arise/50 bg-void flex items-center justify-center font-display text-2xl font-black text-arise-light shadow-arise">
                {profile.level}
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  Level
                </p>
                <p className="font-display text-lg font-bold text-white">
                  {profile.title}
                </p>
              </div>
            </div>

            <div className="divider-glow mb-5" />

            <dl className="space-y-3 font-mono text-sm">
              <div className="flex justify-between">
                <dt className="text-slate-500">Name</dt>
                <dd className="text-slate-200">{profile.name}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500">Job</dt>
                <dd className="text-slate-200 text-right max-w-[60%]">
                  {profile.classes[0]}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500">Status</dt>
                <dd className="text-emerald-400">{profile.status}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500">Availability</dt>
                <dd className="text-slate-200 text-right max-w-[60%]">
                  {profile.guild}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-arise-light/70 hover:text-arise-light transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={26} />
      </button>
    </TrackedSection>
  );
};

export default Hero;
