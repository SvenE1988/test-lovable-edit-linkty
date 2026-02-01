import React from 'react';
import { Calendar } from 'lucide-react';
import { BookingModal } from '@/components/ui/booking-modal';
import { cn } from '@/lib/utils';

/**
 * StickyCTA - Fixed CTA button at bottom of screen on mobile
 * Improves conversion by keeping the main action always visible
 */
export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isAtBottom, setIsAtBottom] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      const shouldShow = window.scrollY > 400;
      setIsVisible(shouldShow);

      // Hide when near footer (last 400px of page)
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = window.scrollY;
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
      setIsAtBottom(distanceFromBottom < 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only show on mobile and when scrolled
  if (!isVisible || isAtBottom) return null;

  return (
    <div 
      className={cn(
        "fixed bottom-4 left-4 right-4 z-50 md:hidden",
        "transition-all duration-300 ease-out",
        isVisible && !isAtBottom ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}
    >
      <BookingModal
        trigger={
          <button
            className={cn(
              "w-full min-h-[52px] px-6 py-3",
              "bg-brand-mint text-brand-dark font-semibold text-base",
              "rounded-full shadow-2xl shadow-brand-mint/30",
              "flex items-center justify-center gap-2",
              "hover:bg-brand-mint/90 active:scale-[0.98]",
              "transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
            )}
            data-testid="sticky-cta-btn"
          >
            <Calendar className="w-5 h-5" />
            <span>Kostenlose Demo buchen</span>
          </button>
        }
      />
    </div>
  );
};

export default StickyCTA;
