import React, { useRef, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X, MessageCircle } from "lucide-react";

interface ContactModalProps {
  trigger: React.ReactNode;
}

/**
 * ContactModal - Modal with GoHighLevel contact form iframe
 *
 * Accessibility Features:
 * - ESC key to close
 * - Focus trap within modal
 * - ARIA attributes for screen readers
 * - Keyboard navigation support
 */
export const ContactModal: React.FC<ContactModalProps> = ({ trigger }) => {
  const [open, setOpen] = React.useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Store previous focus when opening modal
  React.useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      // Focus close button when modal opens
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      // Restore focus when modal closes
      previousFocusRef.current?.focus();
    }
  }, [open]);

  // Handle ESC key
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  }, []);

  // Load the GHL form script when modal opens
  React.useEffect(() => {
    if (open) {
      // Check if script already exists
      const existingScript = document.querySelector(
        'script[src="https://link.linkty.ai/js/form_embed.js"]'
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://link.linkty.ai/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className="max-h-[90vh] max-w-xl gap-0 overflow-hidden border-none bg-white p-0 shadow-2xl [&>button]:hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onKeyDown={handleKeyDown}
      >
        <DialogHeader className="sticky top-0 z-10 flex flex-row items-center justify-between rounded-t-lg bg-brand-dark px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-brand-mint/20 flex h-10 w-10 items-center justify-center rounded-full">
              <MessageCircle className="h-5 w-5 text-brand-mint" aria-hidden="true" />
            </div>
            <div>
              <DialogTitle id="contact-modal-title" className="text-lg font-bold text-white">
                Kontakt aufnehmen
              </DialogTitle>
              <p className="text-sm text-white/60">Antwort innerhalb von 4 Stunden</p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-brand-mint focus:ring-offset-2 focus:ring-offset-brand-dark"
            aria-label="Schließen"
            data-testid="contact-modal-close-btn"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </DialogHeader>

        <div className="bg-white p-0" style={{ minHeight: "620px" }}>
          <iframe
            src="https://link.linkty.ai/widget/form/k99SZ67AhPN6dftqbGr4"
            style={{
              width: "100%",
              height: "620px",
              border: "none",
              borderRadius: "0",
            }}
            id="inline-k99SZ67AhPN6dftqbGr4"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="linkty_homepage_Kontaktformular"
            data-height="593"
            data-layout-iframe-id="inline-k99SZ67AhPN6dftqbGr4"
            data-form-id="k99SZ67AhPN6dftqbGr4"
            title="Kontaktformular - Linkty"
            aria-label="Kontaktformular für Anfragen"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
