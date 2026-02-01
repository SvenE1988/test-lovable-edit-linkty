/**
 * LINKTY - CENTRAL ASSET REGISTRY
 *
 * Diese Datei verwaltet alle Medien-Assets (Bilder, Videos, Icons).
 * Sie unterstützt sowohl lokale Pfade (aus /public/assets) als auch externe URLs.
 *
 * Verwendung in Content-Dateien:
 * import { ASSETS } from '../assets';
 * background: ASSETS.heroes.home.video
 */

export const ASSETS = {
  // ==================== BRANDING ====================
  brand: {
    favicon: "/assets/brand/favicon.png",
    logoDark: "/assets/brand/logo-dark.png",
    logoWhite: "/assets/brand/logo-white.png",
    logoImgFill: "/assets/brand/logo-img-fill.png",
  },

  // ==================== HERO SECTIONS ====================
  heroes: {
    home: {
      video: {
        src: "/assets/hero/home-hero.mp4",
        webm: "/assets/hero/home-hero.webm",
        poster: "/assets/hero/home-hero-poster.jpg",
      },
    },
    about: {
      src: "/assets/hero/about-hero.jpg",
    },
    voice: {
      src: "/assets/hero/voice-hero.jpg",
    },
    content: {
      src: "/assets/sections/content/content-hero.webp",
    },
    insurance: {
      src: "/assets/hero/insurance-hero.jpg",
    },
  },

  // ==================== PAGE SECTIONS ====================
  sections: {
    // Home Page
    solutions: {
      voice: "/assets/sections/home/solutions_voice.webp",
      content: "/assets/sections/home/solutions_content.webp",
    },
    connect: {
      hub: "/assets/sections/home/connect_hub.webp",
      modular: "/assets/sections/home/connect_modular.webp",
      integrations: "/assets/sections/home/connect_integrations.webp",
      mobile: "/assets/sections/home/connect_mobile.webp",
    },

    // About Page
    about: {
      vision: "/assets/sections/about/about-vision.jpg",
    },

    // Voice Page
    voice: {
      header: "/assets/sections/voice/voice_header.webp",
      calendar: "/assets/sections/voice/voice_calendar.webp",
      qualification: "/assets/sections/voice/voice_qualification.webp",
      alwayson: "/assets/sections/voice/voice_alwayson.webp",
      hub: "/assets/sections/voice/voice_hub.webp",
      office: "/assets/sections/voice/voice_office.webp",
    },

    // Content Page
    content: {
      brandVoice: "/assets/sections/content/content-brandvoice.webp",
      multiChannel: "/assets/sections/content/content-multichannel.webp",
      scripting: "/assets/sections/content/content-scripting.webp",
      humanInTheLoop: "/assets/sections/content/content-human-in-the-loop.webp",
      team: "/assets/sections/content/content-men-smiling.webp",
    },

    // Insurance Page
    insurance: {
      phoneTerror: "/assets/sections/insurance/insurance-phone-terror.jpg",
      mondayMorning: "/assets/sections/insurance/insurance-monday-morning.jpg",
      solution: "/assets/sections/insurance/insurance-solution.jpg",
    },
  },

  // ==================== TEAM & TESTIMONIALS ====================
  team: {
    sven: "/assets/team/sven.png",
    emir: "/assets/team/emir.png",
  },

  testimonials: {
    t1: "/assets/testimonials/t1.jpg",
    t2: "/assets/testimonials/t2.jpg",
    t3: "/assets/testimonials/t3.jpg",
    t4: "/assets/testimonials/t4.jpg",
  },
} as const;
