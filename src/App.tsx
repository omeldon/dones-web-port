import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { SystemProvider } from "./context/SystemContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import QuestLog from "./components/QuestLog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SystemHud from "./components/SystemHud";
import LevelUpToast from "./components/LevelUpToast";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#3b82f6" },
    secondary: { main: "#7c3aed" },
    background: { default: "#05070f", paper: "#0b1224" },
  },
  typography: {
    fontFamily: "'Rajdhani', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 600 },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SystemProvider>
        <div className="min-h-screen font-body antialiased bg-void bg-grid-glow bg-grid">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Stats />
            <QuestLog />
            <Contact />
          </main>
          <Footer />
          <SystemHud />
          <LevelUpToast />
        </div>
      </SystemProvider>
    </ThemeProvider>
  );
};

export default App;
