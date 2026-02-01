import {} from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { LegalModal, ImpressumContent, DatenschutzContent } from "../ui/legal-modal";
import { ContactModal } from "../ui/contact-modal";
import { footer, logos } from "../../data/content/shared";

// ============================================================
// TYPES
// ============================================================

interface CtaData {
  headline: string;
  subline: string;
  cta: {
    primary?: { text: string; href: string };
    secondary?: { text: string; href: string };
  };
  microcopy?: string;
  headlineAccent?: string;
}

interface MasterFooterProps {
  ctaData?: CtaData;
}

// ============================================================
// COMPONENT
// ============================================================

/**
 * MasterFooter - Global Footer Component
 *
 * Contains:
 * 1. Optional CTA Section (Props driven)
 * 2. Main Footer Navigation
 * 3. Copyright & Legal (with Modals for Impressum/Datenschutz/Kontakt)
 */
const MasterFooter: React.FC<MasterFooterProps> = ({ ctaData }) => {
  const currentYear = new Date().getFullYear();

  // Helper to render footer link - handles modals for legal pages
  const renderFooterLink = (link: { label: string; href: string }, columnType: string) => {
    // Special handling for Rechtliches column - use modals
    if (
      columnType === "rechtliches" ||
      link.href === "#datenschutz" ||
      link.href === "#impressum"
    ) {
      if (link.href === "/datenschutz" || link.href === "#datenschutz") {
        return (
          <LegalModal
            trigger={
              <button
                className="text-left text-white/60 transition-colors hover:text-brand-mint"
                data-testid="footer-datenschutz-btn"
              >
                {link.label}
              </button>
            }
            title="Datenschutzerklärung"
          >
            <DatenschutzContent />
          </LegalModal>
        );
      }
      if (link.href === "/impressum" || link.href === "#impressum") {
        return (
          <LegalModal
            trigger={
              <button
                className="text-left text-white/60 transition-colors hover:text-brand-mint"
                data-testid="footer-impressum-btn"
              >
                {link.label}
              </button>
            }
            title="Impressum"
          >
            <ImpressumContent />
          </LegalModal>
        );
      }
    }

    // Special handling for Kontakt - use modal
    if (link.href === "/kontakt" || link.href === "#kontakt") {
      return (
        <ContactModal
          trigger={
            <button
              className="text-left text-white/60 transition-colors hover:text-brand-mint"
              data-testid="footer-kontakt-btn"
            >
              {link.label}
            </button>
          }
        />
      );
    }

    // External links
    if (link.href.startsWith("http")) {
      return (
        <a
          href={link.href}
          className="text-white/60 transition-colors hover:text-brand-mint"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      );
    }

    // Internal navigation links
    return (
      <Link to={link.href} className="text-white/60 transition-colors hover:text-brand-mint">
        {link.label}
      </Link>
    );
  };

  return (
    <footer className="relative overflow-hidden bg-brand-dark pt-0">
      {/* 1. Optional CTA Section - Only rendered if data provided */}
      {ctaData && (
        <div className="relative px-6 pb-32 pt-24">
          {/* Background Gradient */}
          <div className="bg-brand-mint/10 pointer-events-none absolute left-1/2 top-0 h-[600px] w-full max-w-[1200px] -translate-x-1/2 rounded-[100%] blur-[120px]" />

          <div className="global-wrapper relative z-10 mx-auto max-w-4xl text-center">
            <Heading level={2} variant="cta" colorScheme="dark" className="mb-6">
              {ctaData.headline} <br />
              <span className="text-brand-mint">{ctaData.headlineAccent}</span>
            </Heading>

            <Text
              as="p"
              variant="body-large"
              colorScheme="dark"
              muted
              className="mx-auto mb-10 max-w-2xl"
            >
              {ctaData.subline}
            </Text>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {ctaData.cta.primary && (
                <div className="w-full sm:w-auto">
                  <InteractiveHoverButton
                    text={ctaData.cta.primary.text}
                    href={
                      ctaData.cta.primary.href === "#demo" ? undefined : ctaData.cta.primary.href
                    }
                    isBookingCTA={ctaData.cta.primary.href === "#demo"}
                    variant="primary"
                    className="h-12 w-full px-8 sm:w-auto"
                  />
                </div>
              )}

              {ctaData.cta.secondary && (
                <div className="w-full sm:w-auto">
                  <InteractiveHoverButton
                    text={ctaData.cta.secondary.text}
                    href={ctaData.cta.secondary.href}
                    variant="outline"
                    className="h-12 w-full px-8 sm:w-auto"
                  />
                </div>
              )}
            </div>

            {ctaData.microcopy && (
              <Text as="p" variant="body-small" colorScheme="dark" subtle className="mt-6">
                {ctaData.microcopy}
              </Text>
            )}
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 2. Main Footer Navigation */}
      <div className="px-6 pb-12 pt-14">
        <div className="global-wrapper grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-8 lg:col-span-4">
            <Link to="/" className="block">
              <img
                src={logos.whiteBg}
                alt="Linkty Logo"
                className="h-8 w-auto opacity-90 brightness-0 invert"
              />
            </Link>
            <Text as="p" variant="body-large" colorScheme="dark" muted className="max-w-sm">
              {footer.claim}
            </Text>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-brand-mint">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-mint" />
              {footer.badge}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {/* Produkte */}
            <div className="space-y-6">
              <Text
                as="h4"
                variant="label"
                colorScheme="dark"
                uppercase
                className="font-bold tracking-widest text-white"
              >
                {footer.columns.produkte.headline}
              </Text>
              <ul className="space-y-4">
                {footer.columns.produkte.links.map((link) => (
                  <li key={link.label}>{renderFooterLink(link, "produkte")}</li>
                ))}
              </ul>
            </div>

            {/* Lösungen */}
            <div className="space-y-6">
              <Text
                as="h4"
                variant="label"
                colorScheme="dark"
                uppercase
                className="font-bold tracking-widest text-white"
              >
                {footer.columns.loesungen.headline}
              </Text>
              <ul className="space-y-4">
                {footer.columns.loesungen.links.map((link) => (
                  <li key={link.label}>{renderFooterLink(link, "loesungen")}</li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <Text
                as="h4"
                variant="label"
                colorScheme="dark"
                uppercase
                className="font-bold tracking-widest text-white"
              >
                {footer.columns.company.headline}
              </Text>
              <ul className="space-y-4">
                {footer.columns.company.links.map((link) => (
                  <li key={link.label}>{renderFooterLink(link, "company")}</li>
                ))}
              </ul>
            </div>

            {/* Rechtliches */}
            <div className="space-y-6">
              <Text
                as="h4"
                variant="label"
                colorScheme="dark"
                uppercase
                className="font-bold tracking-widest text-white"
              >
                {footer.columns.rechtliches.headline}
              </Text>
              <ul className="space-y-4">
                {footer.columns.rechtliches.links.map((link) => (
                  <li key={link.label}>{renderFooterLink(link, "rechtliches")}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="global-wrapper mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-5 md:flex-row">
          <Text as="p" variant="body-small" colorScheme="dark" subtle>
            © {currentYear} Linkty. Alle Rechte vorbehalten.
          </Text>

          <div className="flex items-center gap-4">
            {/* Socials with real links */}
            <div className="flex gap-3">
              {footer.social.map((social) => {
                const Icon = social.platform === "linkedin" ? Linkedin : Instagram;
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    data-testid={`footer-social-${social.platform}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all hover:bg-white/10 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MasterFooter;
