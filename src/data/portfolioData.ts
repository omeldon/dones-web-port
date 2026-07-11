// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit these values to personalize the
// "System" — your name, class titles, stats, quests (projects), and contact.
// ---------------------------------------------------------------------------

// Local image imports — Vite resolves these to a hashed URL at build time.
// Place your files in src/images/ using these names, or update the paths
// below to match whatever filenames you actually used.
import avatarImg from "../images/DONES_ROMMEL_G.png";
import work1 from "../images/work-1.png";
import work2 from "../images/work-2.png";
import work3 from "../images/work-3.png";
import work4 from "../images/work-4.png";
import work5 from "../images/work-5.png";
import work6 from "../images/work-6.png";
import work7 from "../images/work-7.png";
import work8 from "../images/work-8.png";
import work9 from "../images/work-9.png";

export const profile = {
  name: "Rommel Dones",
  hunterTag: "Player",
  avatar: avatarImg,
  // Rotating "class" titles, shown as a typewriter in the status window
  classes: [
    "SAP C4C Functional Consultant",
    "Computer Engineer",
    "Data Analyst",
    "Web Developer",
    "Quality Control Engineer",
  ],
  level: 26,
  title: "The Self-Taught Web Developer",
  status: "Regular Employee",
  guild: "Hired at Ascendion",
  email: "donesrommel2000@gmail.com",
  resumeUrl: "/DonesRommel.pdf",
  social: {
    github: "https://github.com/omeldon",
    linkedin: "https://www.linkedin.com/in/rommel-dones-598539202/",
    facebook: "https://web.facebook.com/rommel.dones.424/",
    email: "mailto:donesrommel2000@gmail.com",
  },
};

export const about = {
  bio: [
    "With nearly 4 years of experience spanning electronics manufacturing and IT, currently working as an SAP C4C Consultant providing functional support across Europe, North and Latin America, and Asia Pacific. Handles ticket review, change request management, queue dispatch, and non-regression testing for scheduled transports and SAP upgrades.",
    "Previously a Quality Control Engineer in electronics manufacturing, analyzing quality data to generate actionable reports for customers and stakeholders using Excel, Tibco Spotfire, and Power BI. Also handled line monitoring, internal audits, and collaborated with production and engineering teams to drive process improvements.",
  ],
  titlesEarned: [
    { label: "SAP C4C Functional Analyst", value: "Current Title" },
    { label: "Quality Control Engineer", value: "2 Years & 7 Months" },
    { label: "Computer Engineer", value: "4 Years Studying" },
  ],
};

// Skills reframed as Player Stats, mirroring the Solo Leveling status window.
export interface StatItem {
  code: "INT" | "PER" | "AGI" | "VIT";
  name: string;
  value: number; // out of 100 — drives both the bar and the rank letter
  description: string;
}

export const stats: StatItem[] = [
  {
    code: "INT",
    name: "Frontend Development",
    value: 80,
    description:
      "React, Vue, Angular, TypeScript, HTML5, CSS3, Tailwind, Bootstrap.",
  },
  {
    code: "PER",
    name: "Data Analysis",
    value: 85,
    description: "Power BI, SQL, Excel, Tableau, Tibco Spotfire.",
  },
  {
    code: "AGI",
    name: "Software Technologies",
    value: 80,
    description: "SAP C4C, Git, GitHub, XAMPP, Figma, Canva.",
  },
  {
    code: "VIT",
    name: "Microsoft 365",
    value: 95,
    description: "Word, PowerPoint, Excel, Outlook, Teams, OneDrive, Access.",
  },
];

export const arsenal = [
  "SAP C4C",
  "SAP CRM",
  "React",
  "Python",
  "Git",
  "GitHub",
  "Power BI",
];

// Rank helper — mirrors the E → S hunter-rank system.
export const rankFromValue = (value: number): "S" | "A" | "B" | "C" | "D" | "E" => {
  if (value >= 90) return "S";
  if (value >= 80) return "A";
  if (value >= 70) return "B";
  if (value >= 60) return "C";
  if (value >= 40) return "D";
  return "E";
};

// Projects reframed as cleared quests / dungeon raids.
export interface Quest {
  id: number;
  title: string;
  rank: "S" | "A" | "B" | "C" | "D" | "E";
  brief: string;
  rewards: string[];
  github: string;
  demo?: string;
}

export const quests: Quest[] = [
  {
    id: 1,
    image: work1,
    title: "Rock Paper Scissors Duel",
    rank: "E",
    brief:
      "A two-player Rock-Paper-Scissors game built in Emu8086 using Assembly Language, determining the winner based on player inputs.",
    rewards: ["Emu8086", "Assembly Language"],
    github: "https://github.com/omeldon/Assembly-language",
  },
  {
    id: 2,
    image: work2,
    title: "Resistor Value Divination",
    rank: "E",
    brief:
      "A Python-based tool that calculates resistor values from color codes, providing quick and accurate results for electronics projects.",
    rewards: ["Python", "Tkinter"],
    github: "https://github.com/omeldon/Python-Codes",
  },
  {
    id: 3,
    image: work3,
    title: "Bi-Verse",
    rank: "B",
    brief:
      "A responsive web app for exploring and displaying Bible verses, built with React, Material-UI, Vite, and Tailwind for a clean, modern interface.",
    rewards: ["React", "Material-UI", "Vite", "Tailwind"],
    github: "https://github.com/omeldon/bible-ReactJS",
    demo: "https://bi-verse.vercel.app/",
  },
  {
    id: 4,
    image: work4,
    title: "Silent Tongue: FSL Interpreter",
    rank: "A",
    brief:
      "A machine learning project that recognizes and interprets static Filipino Sign Language gestures using Python and TensorFlow, built to assist communication and promote accessibility.",
    rewards: ["Python", "Machine Learning", "TensorFlow"],
    github: "https://github.com/omeldon/Python-Codes",
  },
  {
    id: 5,
    image: work5,
    title: "Intruder Alert Wardstone",
    rank: "D",
    brief:
      "An Arduino-based security system that detects intruders using an ultrasonic sensor and triggers an alert, designed and simulated in TinkerCAD.",
    rewards: ["Arduino", "TinkerCAD"],
    github: "https://github.com/omeldon/Arduino-Codes",
  },
  {
    id: 6,
    image: work6,
    title: "Autonomous Line-Follower",
    rank: "D",
    brief:
      "A robotics project using an Arduino and L293D motor driver to create an autonomous robot capable of following a track, simulated in TinkerCAD.",
    rewards: ["Arduino", "L293D", "TinkerCAD"],
    github: "https://github.com/omeldon/Arduino-Codes",
  },
  {
    id: 7,
    image: work7,
    title: "Sales Insight Dashboard",
    rank: "C",
    brief:
      "An interactive Power BI dashboard designed to visualize and analyze sales performance data, including KPIs, trend analysis, and dynamic filters.",
    rewards: ["Power BI"],
    github: "https://github.com/omeldon/Power-BI-Projects",
  },
  {
    id: 8,
    image: work8,
    title: "Call Center Metrics Dashboard",
    rank: "C",
    brief:
      "A Power BI dashboard showcasing call center metrics such as employee demographics, performance, and retention for data-driven decisions.",
    rewards: ["Power BI"],
    github: "https://github.com/omeldon/Power-BI-Projects",
  },
  {
    id: 9,
    image: work9,
    title: "Direcho Trabaho Web Portal",
    rank: "B",
    brief:
      "A modern and responsive website built with React and Tailwind CSS, focused on clean UI, reusable components, and optimized performance.",
    rewards: ["React", "Material-UI", "Tailwind"],
    github:
      "https://github.com/omeldon/direcho-trabaho-project-figma-mockup-master",
    demo: "https://dt-final-project.vercel.app/",
  },
];