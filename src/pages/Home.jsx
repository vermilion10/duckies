import React from 'react';
import { I18nProvider, useI18n } from '../lib/i18n';
import { ThemeProvider } from '../lib/theme';
import { getShips } from '../lib/shipData';
import HeroSection from '../components/scrollytelling/HeroSection';
import ClassOverview from '../components/scrollytelling/ClassOverview';
import ShipSection from '../components/scrollytelling/ShipSection';
import NavigationDots from '../components/scrollytelling/NavigationDots';
import FooterSection from '../components/scrollytelling/FooterSection';
import LangToggle from '../components/scrollytelling/LangToggle';

function HomeContent() {
  const { lang } = useI18n();
  const ships = getShips(lang);

  return (
    <div className="relative bg-background min-h-screen">
      <LangToggle />
      <NavigationDots />

      <div id="hero">
        <HeroSection />
      </div>

      <div id="overview">
        <ClassOverview />
      </div>

      {ships.map((ship, index) => (
        <div key={ship.id} id={ship.id}>
          <ShipSection ship={ship} index={index} />
        </div>
      ))}

      <FooterSection />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <HomeContent />
      </I18nProvider>
    </ThemeProvider>
  );
}