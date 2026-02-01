import React from 'react';
import Header from '../shared/Header';
import MasterFooter from '../master/MasterFooter';
import { ScrollProvider } from '../../context/ScrollContext';
import { StickyCTA } from '../ui/sticky-cta';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  ctaData?: {
    headline: string;
    subline: string;
    cta: {
      primary?: { text: string; href: string };
      secondary?: { text: string; href: string };
    };
    microcopy?: string;
  };
  /** Show sticky mobile CTA (default: true) */
  showStickyCTA?: boolean;
}

/**
 * PageLayout - Global Shell Component
 * 
 * ARCHITEKTUR (Stand Januar 2026):
 * - Natives Browser-Scrolling (CSS scroll-behavior: smooth)
 * - ScrollProvider für Scroll-State (isScrolled, scrollY, scrollTo)
 * - Framer Motion für Animationen (nur in erlaubten Komponenten)
 * - MasterFooter mit integriertem CTA (global für alle Seiten)
 * - StickyCTA für Mobile Conversion-Optimierung
 * 
 * Wraps all pages with consistent structure:
 * - ScrollProvider (Native scroll events)
 * - Header (uses ScrollContext for scroll state)
 * - Main content area
 * - StickyCTA (Mobile only, scroll-aware)
 * - MasterFooter (CTA + Footer combined)
 */
const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  className = '', 
  ctaData,
  showStickyCTA = true 
}) => {
  return (
    <ScrollProvider>
      <div className={`min-h-screen bg-brand-dark ${className}`}>
        <Header />
        <main>{children}</main>
        {showStickyCTA && <StickyCTA />}
        <MasterFooter ctaData={ctaData} />
      </div>
    </ScrollProvider>
  );
};

export default PageLayout;
