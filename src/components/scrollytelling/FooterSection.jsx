import React from 'react';
import { motion } from 'framer-motion';
import { Anchor } from 'lucide-react';
import { useI18n } from '../../lib/i18n';

export default function FooterSection() {
  const { t } = useI18n();

  return (
    <section id="footer" className="relative py-24 md:py-36 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Anchor className="w-8 h-8 text-primary/40 mx-auto mb-6" />

          <h2 className="font-jp text-3xl md:text-5xl font-bold text-foreground mb-4">
            永遠に記憶される
          </h2>
          <p className="font-heading text-xl md:text-2xl text-primary italic mb-8">
            {t('footer_subtitle')}
          </p>

          <div className="w-20 h-px bg-primary/30 mx-auto mb-8" />

          <p className="font-body text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-6">
            {t('footer_body')}
          </p>

          <p className="font-body text-muted-foreground/50 text-xs max-w-xl mx-auto leading-relaxed">
            Akizuki (秋月) — Teruzuki (照月) — Hatsuzuki (初月) — Suzutsuki (涼月)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-border/30"
        >
          <p className="font-body text-muted-foreground/40 text-xs">
            {t('footer_credit')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}