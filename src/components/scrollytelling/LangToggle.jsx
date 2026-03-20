import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useI18n } from '../../lib/i18n';
import { useTheme } from '../../lib/theme';

export default function LangToggle() {
  const { lang, toggleLang } = useI18n();
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="fixed top-4 right-4 md:top-6 md:right-6 z-50 flex items-center gap-2"
    >
      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-9 h-9 bg-secondary/80 backdrop-blur-md border border-border/60 rounded-full hover:border-primary/50 hover:bg-secondary transition-all duration-300"
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-primary" />
        ) : (
          <Moon className="w-4 h-4 text-primary" />
        )}
      </button>

      {/* Language toggle */}
      <button
        onClick={toggleLang}
        className="flex items-center gap-1.5 bg-secondary/80 backdrop-blur-md border border-border/60 rounded-full px-4 py-2 text-xs font-body font-medium tracking-widest uppercase hover:border-primary/50 hover:bg-secondary transition-all duration-300"
      >
        <span className={lang === 'id' ? 'text-primary' : 'text-muted-foreground'}>ID</span>
        <span className="text-border">|</span>
        <span className={lang === 'en' ? 'text-primary' : 'text-muted-foreground'}>EN</span>
      </button>
    </motion.div>
  );
}