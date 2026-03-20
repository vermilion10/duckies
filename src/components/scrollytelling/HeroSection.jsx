import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useI18n } from '../../lib/i18n';
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');    

const HERO_IMAGE = "${baseUrl}/assets/images/hero.png";

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Akizuki-class destroyer fleet formation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-body text-primary/80 tracking-[0.35em] uppercase text-xs md:text-sm mb-4"
        >
          {t('hero_subtitle')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-jp text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-3"
        >
          秋月型駆逐艦
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-heading text-2xl md:text-4xl lg:text-5xl text-primary italic mb-8"
        >
          {t('hero_title_en')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-body text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          {t('hero_desc')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span className="text-muted-foreground/60 text-xs tracking-widest uppercase font-body">
            {t('hero_scroll')}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-primary/60" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
    </section>
  );
}