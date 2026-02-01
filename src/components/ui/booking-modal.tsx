import React, { useRef, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X, Calendar } from "lucide-react";

interface BookingModalProps {
  trigger: React.ReactNode;
  title?: string;
}

/**
 * BookingModal - Modal with GoHighLevel calendar booking iframe
 * Used for "Demo buchen" CTAs throughout the site
 *
 * Accessibility Features:
 * - ESC key to close
 * - Focus management
 * - ARIA attributes for screen readers
 * - Keyboard navigation support
 */
export const BookingModal: React.FC<BookingModalProps> = ({
  trigger,
  title = "Demo-Termin buchen",
}) => {
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
        className="max-h-[90vh] max-w-2xl gap-0 overflow-hidden border-none bg-white p-0 shadow-2xl [&>button]:hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        onKeyDown={handleKeyDown}
      >
        <DialogHeader className="sticky top-0 z-10 flex flex-row items-center justify-between rounded-t-lg bg-brand-dark px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-brand-mint/20 flex h-10 w-10 items-center justify-center rounded-full">
              <Calendar className="h-5 w-5 text-brand-mint" aria-hidden="true" />
            </div>
            <div>
              <DialogTitle id="booking-modal-title" className="text-lg font-bold text-white">
                {title}
              </DialogTitle>
              <p className="text-sm text-white/60">15 Minuten • Kostenlos & unverbindlich</p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            onClick={() => setOpen(false)}
            className="flex h-10 min-h-[44px] w-10 min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-brand-mint focus:ring-offset-2 focus:ring-offset-brand-dark"
            aria-label="Schließen"
            data-testid="booking-modal-close-btn"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </DialogHeader>

        <div className="bg-white p-0" style={{ minHeight: "650px" }}>
          <iframe
            src="https://link.linkty.ai/widget/booking/EAqjBUlT5vgXjUg1UxFG"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              overflow: "hidden",
            }}
            scrolling="no"
            id="EAqjBUlT5vgXjUg1UxFG_1768895571815"
            title="Linkty Demo-Termin Buchung"
            aria-label="Kalender zur Terminbuchung"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
