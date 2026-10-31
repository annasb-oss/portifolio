import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LifestyleSection } from './components/LifestyleSection';
import { PinkShowcase } from './components/PinkShowcase';
import { MarqueeTicker } from './components/MarqueeTicker';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { MenuDrawer } from './components/MenuDrawer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#890039] text-white flex flex-col font-sans selection:bg-[#fedb3f] selection:text-black">
      
      {/* Top Header - Clean without logo next to ANNA SILVA, without PROJECTS (4), and without doodles */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Top Hero: Monumental ANNA SILVA */}
        <Hero />

        {/* Full-width Visual Direction with natural wave transition & portrait */}
        <LifestyleSection />

        {/* Section: About Me (Vinho Bordô) */}
        <PinkShowcase />

        {/* Linha Infinita: PORTFOLIO entre o slide Vinho Bordô e a Galeria de Design (Verde Escuro) */}
        <MarqueeTicker />

        {/* Galeria de Design com artes originais (Verde Escuro) */}
        <ProductGrid onSelectProject={() => scrollTo('campaign-visual')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Menu Drawer */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={scrollTo}
      />
    </div>
  );
}
