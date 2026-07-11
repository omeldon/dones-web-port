import React, {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

// Ordered list of trackable sections. Visiting a new one advances the
// session's "Awakening Level" and fires a LEVEL UP notification, echoing
// the status-window mechanic from Solo Leveling.
export const SECTION_ORDER = [
  { id: "home", label: "Status Window" },
  { id: "about", label: "Player Profile" },
  { id: "stats", label: "Stat Allocation" },
  { id: "quests", label: "Quest Log" },
  { id: "contact", label: "Guild Hall" },
] as const;

export type SectionId = (typeof SECTION_ORDER)[number]["id"];

interface LevelUpEvent {
  level: number;
  sectionLabel: string;
  key: number;
}

interface SystemContextType {
  visited: SectionId[];
  registerSection: (id: SectionId) => void;
  awakeningLevel: number;
  totalSections: number;
  lastEvent: LevelUpEvent | null;
  clearEvent: () => void;
}

const SystemContext = createContext<SystemContextType>({
  visited: [],
  registerSection: () => {},
  awakeningLevel: 1,
  totalSections: SECTION_ORDER.length,
  lastEvent: null,
  clearEvent: () => {},
});

export const useSystem = () => useContext(SystemContext);

export const SystemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [visited, setVisited] = useState<SectionId[]>([]);
  const [lastEvent, setLastEvent] = useState<LevelUpEvent | null>(null);

  const registerSection = useCallback((id: SectionId) => {
    setVisited((prev) => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      const meta = SECTION_ORDER.find((s) => s.id === id);
      setLastEvent({
        level: next.length + 1, // +1 since level 1 is the starting state
        sectionLabel: meta?.label ?? id,
        key: Date.now(),
      });
      return next;
    });
  }, []);

  const clearEvent = useCallback(() => setLastEvent(null), []);

  return (
    <SystemContext.Provider
      value={{
        visited,
        registerSection,
        awakeningLevel: visited.length + 1,
        totalSections: SECTION_ORDER.length,
        lastEvent,
        clearEvent,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};
