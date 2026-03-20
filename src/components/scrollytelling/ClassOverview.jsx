import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Anchor, Shield, Gauge, Crosshair } from 'lucide-react';
import { useI18n } from '../../lib/i18n';

const KANCOLLE_IMAGE = "/assets/images/overview.jpg";

function SpecCard({ icon: Icon, labelKey, value, descKey, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { t } = useI18n();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-lg p-5 text-center"
    >
      <Icon className="w-5 h-5 text-primary mx-auto mb-3" />
      <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">{t(labelKey)}</p>
      <p className="text-xl font-heading font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground/70 font-body mt-1">{t(descKey)}</p>
    </motion.div>
  );
}

const SPECS = [
  { icon: Anchor, labelKey: "spec_displacement", value: "2,700 t", descKey: "spec_displacement" },
  { icon: Gauge, labelKey: "spec_speed", value: "33 kn", descKey: "spec_speed_desc" },
  { icon: Shield, labelKey: "spec_length", value: "134.2 m", descKey: "spec_length" },
  { icon: Crosshair, labelKey: "spec_armament", value: "8×100mm", descKey: "spec_armament" },
];

export default function ClassOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section className="relative py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-primary/70 tracking-[0.3em] uppercase text-xs mb-3">{t('overview_label')}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            {t('overview_heading')}
          </h2>
          <div className="w-20 h-px bg-primary/40 mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
            {t('overview_body')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="relative mb-16 rounded-xl overflow-hidden"
        >
          <img
            src={KANCOLLE_IMAGE}
            alt="KanColle Akizuki-class characters"
            className="w-full h-48 md:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
            <p className="font-body text-xs text-primary/80 tracking-wider uppercase">KanColle</p>
            <p className="font-heading text-lg md:text-xl text-foreground">
              Akizuki, Teruzuki, Hatsuzuki & Suzutsuki
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SPECS.map((spec, i) => (
            <SpecCard key={spec.labelKey} {...spec} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-muted-foreground/60 text-xs font-body mt-12 max-w-2xl mx-auto leading-relaxed"
        >
          {t('overview_bottom')}
        </motion.p>
      </div>
    </section>
  );
}