import React, { createContext, useContext, useState } from 'react';

const translations = {
  id: {
    // Hero
    hero_subtitle: "Imperial Japanese Navy × KanColle",
    hero_title_en: "Akizuki-Class Destroyers",
    hero_desc: "Kisah empat kapal perusak anti-udara terbaik Angkatan Laut Kekaisaran Jepang — dari medan perang Pasifik hingga dunia KanColle",
    hero_scroll: "Scroll untuk memulai",

    // Overview
    overview_label: "Pengantar",
    overview_heading: "Perisai Udara Armada Kekaisaran",
    overview_body: "Akizuki-class (秋月型) adalah kelas kapal perusak anti-udara terbaik yang dimiliki Angkatan Laut Kekaisaran Jepang selama Perang Dunia II. Dirancang sebagai pengawal grup pertempuran kapal induk, kelas ini dilengkapi dengan meriam dual-purpose Type 98 100mm yang canggih — senjata anti-udara terbaik milik IJN. Dari 39 kapal yang direncanakan, hanya 12 yang berhasil diselesaikan.",
    overview_bottom: "Dalam dunia KanColle, keempat kapal ini — Akizuki, Teruzuki, Hatsuzuki, dan Suzutsuki — dikenal sebagai \"Akizuki-class sisters\" yang memiliki kemampuan anti-udara luar biasa, mencerminkan peran historis mereka di medan perang Pasifik.",
    spec_speed_desc: "61 km/jam",
    spec_displacement: "Displacement",
    spec_speed: "Kecepatan",
    spec_length: "Panjang",
    spec_armament: "Senjata Utama",

    // Ship section
    biography: "Biografi",
    ship_data: "Data Kapal",
    in_kancolle: "Dalam KanColle",
    key_events: "Kronologi Penting",
    historical_illustration: "Ilustrasi historis",
    final_fate: "Nasib Akhir",
    sunk: "Tenggelam",

    // Footer
    footer_subtitle: "Dikenang Selamanya",
    footer_body: "Keempat kapal perusak Akizuki-class ini telah meninggalkan jejak yang tak terhapuskan dalam sejarah angkatan laut. Dari pertempuran brutal di Pasifik hingga penjelmaan mereka sebagai karakter di KanColle, warisan mereka terus hidup — mengingatkan kita akan keberanian para pelaut yang pernah mengarungi lautan dengan kapal-kapal ini.",
    footer_credit: "Konten sejarah bersumber dari berbagai referensi publik. Karakter KanColle adalah milik DMM Games & Kadokawa Games.",
  },
  en: {
    // Hero
    hero_subtitle: "Imperial Japanese Navy × KanColle",
    hero_title_en: "Akizuki-Class Destroyers",
    hero_desc: "The story of the four finest anti-aircraft destroyers of the Imperial Japanese Navy — from the Pacific battlefields to the world of KanColle",
    hero_scroll: "Scroll to begin",

    // Overview
    overview_label: "Introduction",
    overview_heading: "The Fleet's Shield Against the Skies",
    overview_body: "The Akizuki-class (秋月型) were the finest anti-aircraft destroyers of the Imperial Japanese Navy during World War II. Designed as escorts for carrier battle groups, the class was armed with the advanced dual-purpose Type 98 100mm gun — the IJN's best anti-aircraft weapon. Of 39 planned vessels, only 12 were ever completed.",
    overview_bottom: "In the world of KanColle, these four ships — Akizuki, Teruzuki, Hatsuzuki, and Suzutsuki — are known as the \"Akizuki-class sisters\", celebrated for their extraordinary anti-aircraft ability, reflecting their historical role across the Pacific theater.",
    spec_speed_desc: "37 mph",
    spec_displacement: "Displacement",
    spec_speed: "Top Speed",
    spec_length: "Length",
    spec_armament: "Main Armament",

    // Ship section
    biography: "Biography",
    ship_data: "Ship Data",
    in_kancolle: "In KanColle",
    key_events: "Key Events",
    historical_illustration: "Historical illustration",
    final_fate: "Final Fate",
    sunk: "Sunk",

    // Footer
    footer_subtitle: "Remembered Forever",
    footer_body: "These four Akizuki-class destroyers have left an indelible mark on naval history. From the brutal battles of the Pacific to their reincarnation as characters in KanColle, their legacy lives on — reminding us of the courage of the sailors who once sailed the seas aboard these ships.",
    footer_credit: "Historical content sourced from various public references. KanColle characters are the property of DMM Games & Kadokawa Games.",
  }
};

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = (key) => translations[lang][key] ?? key;
  const toggleLang = () => setLang(l => l === 'id' ? 'en' : 'id');

  return (
    <I18nContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}