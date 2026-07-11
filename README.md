# The Player — Solo Leveling Styled IT Portfolio

A responsive, interactive developer portfolio themed after the Solo Leveling "System" interface — status windows, hunter ranks, and a level-up mechanic — built with React, TypeScript, Vite, Tailwind CSS, MUI, and Lucide icons.

## Design concept

Every section is framed as part of the in-universe System:

- **Home** → the **Status Window** (Player stat card, rotating job-class typewriter, magic-circle background accents)
- **About** → **Player Profile** (bio + "Titles Earned")
- **Skills** → **Stat Allocation** (skills reframed as INT / PER / AGI / VIT stats, each with an animated bar and an E–S hunter rank badge)
- **Projects** → **Quest Log** (each project is a "cleared quest" with a difficulty rank, reward tags, source/demo links, and rank filter chips)
- **Contact** → **Guild Hall** (validated contact form + direct links)

The core interactive gimmick: as you scroll through each section for the first time, a glowing **"LEVEL UP!"** notification fires — just like the show's system messages — and your **Awakening Level** (shown in the navbar and the floating HUD ring, bottom-right) increases.

## Features

- **Level-up system**: scroll-triggered notifications and a live level counter (`src/context/SystemContext.tsx`)
- **Floating System HUD**: a scroll-progress ring that doubles as a scroll-to-top button
- **Fully responsive**: mobile drawer nav, fluid grids from phone to ultra-wide
- **Interactive**: scroll-spy navbar, animated stat bars, quest-rank filter chips, validated contact form with success feedback
- Built with **MUI** components (Drawer, Card, Chip, TextField, Snackbar, LinearProgress, Fab, Tooltip) and **Lucide React** icons
- Dark-only "System" aesthetic with a glowing grid background, Orbitron/Rajdhani/Share Tech Mono fonts

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

To build for production:

```bash
npm run build
npm run preview
```

## Customizing your content

Nearly everything you'll want to personalize lives in one file:

```
src/data/portfolioData.ts
```

- `profile` — name, rotating job titles, level, résumé link, social links
- `about` — bio paragraphs and flavor "titles earned"
- `stats` — your skills, reframed as INT/PER/AGI/VIT stats (the `value` out of 100 drives both the bar and the auto-computed rank letter)
- `quests` — your projects, each with a hunter rank (`S`–`E`), description, reward tags, and GitHub/demo links
- `arsenal` — the flat list of "equipped" technologies shown as chips

### Adjusting ranks

Rank letters (S/A/B/C/D/E) are computed automatically from each stat's numeric `value` via `rankFromValue()` in `portfolioData.ts` — edit the thresholds there if you want a different curve. Quest ranks are set manually per project (`rank` field) since project difficulty isn't easily reduced to one number.

### Adding your résumé

Point `profile.resumeUrl` at your résumé — either a file placed in `public/` (e.g. `public/DonesRommel.pdf`, matching the current default) or an external link such as a Google Drive share URL.

### Wiring up the contact form

The contact form currently simulates a send with a short delay. To actually deliver messages, connect `handleSubmit` in `src/components/Contact.tsx` to a form backend such as Formspree, EmailJS, or your own API endpoint.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS (custom `void` / `panel` / `arise` / `monarch` / `system` / rank-color palette)
- MUI (Material UI) for interactive components
- Lucide React for icons
- Google Fonts: Orbitron (display/UI), Rajdhani (body), Share Tech Mono (data/labels)
