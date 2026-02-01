import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

/**
 * NotFound - 404 Error Page
 *
 * Design: "Subtle & Sleek" - Matching Linkty Brand
 * - GPU-optimized animations per PROJECT_MASTER_GUIDE
 * - Brand colors: --brand-dark, --brand-mint
 * - Clear CTA to return home
 */
const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-dark px-6 py-24">
      {/* Background Glow Effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, var(--brand-mint) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ willChange: "transform, opacity" }}
        className="relative z-10 max-w-2xl text-center"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="mb-8"
        >
          <span className="bg-gradient-to-r from-brand-mint to-brand-cyan bg-clip-text text-[120px] font-bold leading-none text-transparent md:text-[160px]">
            404
          </span>
        </motion.div>

        {/* Headline */}
        <Heading level={1} variant="display-large" colorScheme="dark" className="mb-4">
          Seite nicht gefunden
        </Heading>

        {/* Description */}
        <Text variant="body-large" colorScheme="dark" muted className="mx-auto mb-10 max-w-md">
          Die gewünschte Seite existiert nicht oder wurde verschoben.
          <br />
          Lassen Sie uns zurück zur Startseite bringen.
        </Text>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ willChange: "transform, opacity" }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link to="/">
            <InteractiveHoverButton
              text="Zurück zur Startseite"
              variant="primary"
              className="h-12 px-8"
            />
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 text-white/60 transition-colors hover:text-brand-mint"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Zurück</span>
          </button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 border-t border-white/10 pt-8"
        >
          <Text variant="body-small" colorScheme="dark" subtle className="mb-4">
            Vielleicht suchen Sie nach:
          </Text>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-brand-mint"
            >
              <Home className="h-4 w-4" />
              Startseite
            </Link>
            <span className="text-white/20">|</span>
            <Link
              to="/sprach-ki"
              className="text-sm text-white/60 transition-colors hover:text-brand-mint"
            >
              Linkty Voice
            </Link>
            <span className="text-white/20">|</span>
            <Link
              to="/content-ki"
              className="text-sm text-white/60 transition-colors hover:text-brand-mint"
            >
              Linkty Content
            </Link>
            <span className="text-white/20">|</span>
            <Link
              to="/kontakt"
              className="text-sm text-white/60 transition-colors hover:text-brand-mint"
            >
              Kontakt
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Brand Logo Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          to="/"
          className="flex items-center gap-2 opacity-50 transition-opacity hover:opacity-80"
        >
          <img
            src="/assets/brand/logo-white.png"
            alt="Linkty"
            className="h-6 w-auto brightness-0 invert"
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
