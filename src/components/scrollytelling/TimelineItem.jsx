import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

export default function TimelineItem({ event, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 pb-8 border-l border-primary/20 last:border-l-transparent last:pb-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary/60 -translate-x-[7px] transition-all duration-300"
        style={{ backgroundColor: hovered ? 'hsl(42, 78%, 60%)' : undefined }}
      />

      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <p className="text-xs font-body text-primary/70 tracking-wider uppercase mb-1">{event.date}</p>
          <h4 className="font-heading text-base md:text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
            {event.title}
            {event.detail && (
              <Info className="w-3.5 h-3.5 text-muted-foreground/50 shrink-0" />
            )}
          </h4>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{event.description}</p>
        </div>
      </div>

      {/* Hover detail card */}
      <AnimatePresence>
        {hovered && event.detail && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="mt-3 bg-card/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4"
          >
            <p className="text-xs text-primary/70 font-body uppercase tracking-wider mb-1.5">Detail</p>
            <p className="font-body text-sm text-foreground/80 leading-relaxed">{event.detail}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}