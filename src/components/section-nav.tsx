"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
];

export function SectionNav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="toc" aria-label="Seções">
      {sections.map(({ id, label }) => (
        <a key={id} href={`#${id}`} aria-current={active === id ? "true" : undefined}>
          {label}
        </a>
      ))}
    </nav>
  );
}
