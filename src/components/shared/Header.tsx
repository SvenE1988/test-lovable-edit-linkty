import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { logos } from "../../data/content/shared";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "../ui/icons/WhatsAppIcon";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import DesktopNav from "./header/DesktopNav";
import MobileNav from "./header/MobileNav";

/**
 * Header Component - Global Navigation
 *
 * Updates:
 * - Refactored into sub-components (DesktopNav, MobileNav)
 * - Cleaner main file
 * - Added skip-to-main-content link for accessibility
 */
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const textColor = "text-brand-dark";

  return (
    <>
      {/* Skip to main content link - screen reader only until focused */}
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[60] rounded-full bg-brand-mint px-4 py-2 text-sm font-medium text-brand-dark focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-brand-mint focus:ring-offset-2"
      >
        Zum Hauptinhalt springen
      </a>
      <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 py-4">
        <div className="w-full max-w-5xl rounded-full border border-white/20 bg-white/20 p-[3px] shadow-lg backdrop-blur-lg">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center pr-6">
              <img src={logos.whiteBg} alt="Linkty" className="h-8 w-auto px-2" />
            </Link>

            {/* Desktop Navigation (Center) */}
            <DesktopNav />

            {/* Desktop Actions (Right) - PRESERVED */}
            <div className="hidden items-center lg:flex">
              <div className="flex items-center gap-3 pr-4">
                <a
                  href="https://wa.me/494074302022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-all hover:scale-105 hover:brightness-110"
                  aria-label="Chat on WhatsApp"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>

                <a
                  href="tel:+494074302022"
                  className="bg-brand-dark/5 hover:bg-brand-dark/10 flex h-10 w-10 items-center justify-center rounded-full text-brand-dark transition-all hover:scale-105"
                  aria-label="Call us"
                >
                  <Phone size={18} />
                </a>
              </div>

              <a href="tel:+494074302022" className="flex">
                <InteractiveHoverButton text="Sprachbot testen" variant="primary" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn("p-2 lg:hidden", textColor)}
              aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </header>
    </>
  );
};

export default Header;
