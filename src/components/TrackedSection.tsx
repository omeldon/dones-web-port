import React, { useEffect, useRef } from "react";
import { useSystem, SectionId } from "../context/SystemContext";

interface Props {
  id: SectionId;
  className?: string;
  children: React.ReactNode;
}

const TrackedSection: React.FC<Props> = ({ id, className, children }) => {
  const ref = useRef<HTMLElement>(null);
  const { registerSection } = useSystem();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          registerSection(id);
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id, registerSection]);

  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  );
};

export default TrackedSection;
