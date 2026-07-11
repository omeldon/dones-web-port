/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Orbitron'", "sans-serif"],
        body: ["'Rajdhani'", "sans-serif"],
        mono: ["'Share Tech Mono'", "monospace"],
      },
      colors: {
        void: {
          DEFAULT: "#05070f",
          soft: "#0a0e1a",
        },
        panel: "#0b1224",
        arise: {
          DEFAULT: "#3b82f6",
          light: "#60a5fa",
          deep: "#1d4ed8",
        },
        monarch: {
          DEFAULT: "#7c3aed",
          light: "#a78bfa",
        },
        system: "#22d3ee",
        rankS: "#f59e0b",
        rankA: "#a78bfa",
        rankB: "#3b82f6",
        rankC: "#22d3ee",
        rankD: "#34d399",
        rankE: "#94a3b8",
      },
      backgroundImage: {
        "grid-glow":
          "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      boxShadow: {
        arise: "0 0 20px rgba(59,130,246,0.35), 0 0 60px rgba(124,58,237,0.15)",
        "arise-lg":
          "0 0 30px rgba(59,130,246,0.45), 0 0 90px rgba(124,58,237,0.25)",
        system: "0 0 0 1px rgba(96,165,250,0.3), 0 0 25px rgba(59,130,246,0.2)",
      },
      keyframes: {
        levelPulse: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(59,130,246,0.4)" },
          "50%": { boxShadow: "0 0 35px rgba(59,130,246,0.85)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        spinSlowReverse: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
        },
        levelUpIn: {
          "0%": { opacity: "0", transform: "scale(0.85) translateY(10px)" },
          "60%": { opacity: "1", transform: "scale(1.03) translateY(0)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        levelPulse: "levelPulse 2.2s ease-in-out infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        spinSlow: "spinSlow 18s linear infinite",
        spinSlowReverse: "spinSlowReverse 24s linear infinite",
        fadeUp: "fadeUp 0.7s ease-out forwards",
        flicker: "flicker 2.5s ease-in-out infinite",
        levelUpIn: "levelUpIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards",
      },
    },
  },
  plugins: [],
};
