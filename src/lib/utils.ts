import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Tailwind-merge needs to know about our custom typography tokens (e.g. `text-display-huge`).
// Otherwise it may incorrectly treat them as conflicting with text color classes (e.g. `text-white`)
// and drop the font-size class.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-huge",
            "display-large",
            "display-medium",
            "heading-1",
            "heading-2",
            "body-large",
            "body-medium",
            "body-small",
            "label",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
