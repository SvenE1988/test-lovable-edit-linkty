import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * useScrollReveal - Simple hook for checking if element is in view
 *
 * Replaces GSAP ScrollTrigger functionality for simple reveal animations.
 * Returns:
 * - ref: Attach to element
 * - isInView: boolean
 */
export const useScrollReveal = (options = { once: true, margin: "-10% 0px" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options.once,
    margin: options.margin as any,
  });

  return { ref, isInView };
};
