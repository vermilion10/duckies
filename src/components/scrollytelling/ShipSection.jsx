import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Skull, Star } from 'lucide-react';
import { useI18n } from '../../lib/i18n';
import TimelineItem from './TimelineItem';

export default function ShipSection({ ship, index }) {
  const { t } = useI18n();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const isEven = index % 2 === 0;

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 px-6 overflow-hidden">
      {/* Large background kanji */}
      <motion.div
        style={{ y: imageY }}
        className="absolute top-10 right-0 md:right-10 text-[12rem] md:text-[20rem] font-jp font-black text-secondary/30 leading-none select-none pointer-events-none"
      >
        {ship.kanji}
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Ship Name Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-end gap-4 mb-2">
            <span className="font-body text-primary/60 text-xs tracking-[0.4em] uppercase">
              {ship.designation}
            </span>
          </div>
          <h2 className="font-jp text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2">
            {ship.kanji}
          </h2>
          <h3 className="font-heading text-2xl md:text-3xl text-primary italic">
            {ship.name}
          </h3>
          <p className="font-body text-muted-foreground/70 text-sm mt-2">
            "{ship.nameMeaning}"
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="relative mb-12 md:mb-16 rounded-xl overflow-hidden group"
        >
          <motion.div style={{ y: imageY }}>
            <img
              src={ship.historicalImage}
              alt={`IJN ${ship.name}`}
              className="w-full h-56 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
            <p className="text-xs text-foreground/60 font-body">{t('historical_illustration')}</p>
            <p className="text-sm text-foreground/80 font-heading italic">{ship.imageCaption}</p>
          </div>
        </motion.div>

        {/* Bio + Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16">
          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className={isEven ? "" : "md:order-2"}
          >
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Star className="w-5 h-5 text-primary" />
              {t('biography')}
            </h3>
            {ship.biography.map((para, i) => (
              <p key={i} className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={isEven ? "" : "md:order-1"}
          >
            <div className="bg-secondary/40 backdrop-blur-sm border border-border/40 rounded-xl p-6 mb-6">
              <h4 className="font-heading text-lg font-semibold text-foreground mb-4">{t('ship_data')}</h4>
              <div className="space-y-3">
                {ship.stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0">
                    <span className="text-xs text-muted-foreground font-body uppercase tracking-wider">{stat.label}</span>
                    <span className="text-sm font-body text-foreground font-medium">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* KanColle Note */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 md:p-6 flex flex-row gap-4 md:gap-6 items-center">
              <div className="flex-1">
                <p className="font-body text-[10px] md:text-xs text-primary tracking-wider uppercase mb-1 md:mb-2">{t('in_kancolle')}</p>
                <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {ship.kancolleNote}
                </p>
              </div>
              {ship.kancolleImage && (
                <div className="w-20 md:w-32 flex-shrink-0 rounded-lg overflow-hidden">
                  <img 
                    src={ship.kancolleImage} 
                    alt={`KanColle ${ship.name}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Calendar className="w-5 h-5 text-primary" />
            {t('key_events')}
          </h3>
          <div className="max-w-2xl">
            {ship.timeline.map((event, i) => (
              <TimelineItem key={i} event={event} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Fate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-secondary/30 border border-border/30 rounded-xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            {ship.survived ? (
              <MapPin className="w-5 h-5 text-primary" />
            ) : (
              <Skull className="w-5 h-5 text-destructive" />
            )}
            <h4 className="font-heading text-lg font-semibold text-foreground">
              {ship.survived ? t('final_fate') : t('sunk')}
            </h4>
          </div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{ship.fate}</p>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
    </section>
  );
}