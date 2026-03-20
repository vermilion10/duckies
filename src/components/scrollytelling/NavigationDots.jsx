import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: "hero", label: "秋月型" },
  { id: "overview", label: "概要" },
  { id: "akizuki", label: "秋月" },
  { id: "teruzuki", label: "照月" },
  { id: "hatsuzuki", label: "初月" },
  { id: "suzutsuki", label: "涼月" },
  { id: "footer", label: "終" },
];

export default function NavigationDots() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      const sectionEls = sections.map(s => document.getElementById(s.id));

      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i];
        if (el && el.offsetTop <= scrollPos) {
          setActive(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-3">
      {sections.map((section, i) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          className="flex items-center gap-2 group"
        >
          <AnimatePresence>
            {hovered === i && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="text-xs font-jp text-primary/80"
              >
                {section.label}
              </motion.span>
            )}
          </AnimatePresence>
          <motion.div
            animate={{
              scale: active === i ? 1 : 0.6,
              backgroundColor: active === i ? 'hsl(42, 78%, 60%)' : 'hsl(220, 15%, 30%)',
            }}
            transition={{ duration: 0.3 }}
            className="w-2.5 h-2.5 rounded-full"
          />
        </a>
      ))}
    </nav>
  );
}