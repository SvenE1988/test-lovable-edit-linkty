import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown } from "lucide-react";
import { navigation, NavItem } from "../../../data/content/shared";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "../../ui/icons/WhatsAppIcon";
import { InteractiveHoverButton } from "../../ui/interactive-hover-button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * MobileNav - Overlay Menu for Mobile
 */
const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  if (!isOpen) return null;

  // Helper to check active state (including children)
  const isActive = (item: NavItem) => {
    if (item.href && location.pathname === item.href) return true;
    if (item.children) {
      return item.children.some((child) => child.href && location.pathname === child.href);
    }
    return false;
  };

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <div
      className="bg-white/98 fixed inset-0 top-[80px] z-[100] overflow-y-auto backdrop-blur-xl lg:hidden"
      data-testid="mobile-menu-overlay"
    >
      <nav className="flex flex-col gap-2 p-6 pb-24 pt-8">
        {navigation.links.map((link) => (
          <div key={link.label} className="border-brand-dark/10 border-b last:border-0">
            {link.children ? (
              // Accordion Item
              <div>
                <button
                  onClick={() => toggleMobileExpand(link.label)}
                  className={cn(
                    "flex w-full items-center justify-between py-4 text-xl font-medium transition-colors",
                    isActive(link) ? "text-brand-teal" : "text-brand-dark"
                  )}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform duration-300",
                      mobileExpanded === link.label ? "rotate-180" : ""
                    )}
                  />
                </button>

                {/* Submenu */}
                <div
                  className={cn(
                    "overflow-hidden pl-4 transition-all duration-300 ease-in-out",
                    mobileExpanded === link.label
                      ? "mb-4 max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="border-brand-dark/10 flex flex-col gap-3 border-l pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href || "#"}
                        className="text-brand-dark/70 block py-2 hover:text-brand-teal"
                        onClick={onClose}
                      >
                        <span className="block text-base font-medium">{child.label}</span>
                        <span className="text-brand-dark/40 text-xs">{child.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Simple Link
              <Link
                to={link.href || "#"}
                className={cn(
                  "block py-4 text-xl font-medium transition-colors",
                  isActive(link) ? "text-brand-teal" : "text-brand-dark"
                )}
                onClick={onClose}
              >
                {link.label}
              </Link>
            )}
          </div>
        ))}

        {/* Manual "Über uns" link */}
        <div className="border-brand-dark/10 border-b last:border-0">
          <Link
            to="/ueber-uns"
            className={cn(
              "block py-4 text-xl font-medium transition-colors",
              location.pathname === "/ueber-uns" ? "text-brand-teal" : "text-brand-dark"
            )}
            onClick={onClose}
          >
            Über uns
          </Link>
        </div>

        <div className="mt-8 flex flex-col gap-6">
          {/* Mobile Action Buttons - PRESERVED */}
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/494074302022"
              aria-label="WhatsApp Chat öffnen"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
            >
              <WhatsAppIcon className="h-7 w-7" />
            </a>
            <a
              href="tel:+494074302022"
              aria-label="Anrufen"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-lg"
            >
              <Phone size={28} />
            </a>
          </div>

          <div className="flex justify-center">
            <a href="tel:+494074302022" onClick={onClose} className="w-full">
              <InteractiveHoverButton
                text="Sprachbot testen"
                variant="primary"
                className="w-full justify-center"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
