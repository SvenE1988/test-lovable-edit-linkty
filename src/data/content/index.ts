// ============================================================
// LINKTY - CONTENT DATA INDEX
// Zentrale Exports für alle Seiten
// ============================================================

// Shared content (Navigation, Footer, CTAs, Logos)
export * from './shared';

// Page-specific data objects (Unified Access)
import { homePageData } from './pages/home';
import { aboutPageData } from './pages/about';
import { voicePageData } from './pages/voice';
import { contentPageData } from './pages/content';
import { insurancePageData } from './industries/insurance';

export {
    homePageData,
    aboutPageData,
    voicePageData,
    contentPageData,
    insurancePageData
};
