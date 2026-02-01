import React from "react";
import { Layers, Smartphone, Zap, Globe } from "lucide-react";
import { StackingCards, StackingCardItem } from "../ui/stacking-cards";
import { cn } from "@/lib/utils";
import { Heading } from "../ui/heading";
import { Text, Eyebrow } from "../ui/text";

interface CardStackItem {
  id: string;
  icon: string;
  headline: string;
  description: string;
  image: { src: string; alt: string } | string;
  cta?: { text: string; href: string };
}

interface CardStackData {
  id: string;
  kicker: string;
  headline: string;
  description: string;
  cards: CardStackItem[];
}

interface CardStackSectionProps {
  data: CardStackData;
}

/**
 * CardStackSection - "Stacked Cards" Layout for Linkty Connect
 *
 * Updated to use Framer Motion & Lenis via StackingCards component
 */
const CardStackSection: React.FC<CardStackSectionProps> = ({ data }) => {
  const renderIcon = (iconName: string, textColor: string) => {
    const iconClass = cn(
      "w-12 h-12 rounded-xl flex items-center justify-center",
      textColor === "text-white" ? "bg-white/20 text-white" : "bg-brand-mint/20 text-brand-dark"
    );

    let IconComponent;
    switch (iconName) {
      case "Layers":
        IconComponent = Layers;
        break;
      case "Smartphone":
        IconComponent = Smartphone;
        break;
      case "Zap":
        IconComponent = Zap;
        break;
      case "Globe":
        IconComponent = Globe;
        break;
      default:
        IconComponent = Layers;
        break;
    }

    return (
      <div className={iconClass}>
        <IconComponent size={24} />
      </div>
    );
  };

  // Map existing data to StackingCardItem format (memoized for performance)
  const items: StackingCardItem[] = React.useMemo(
    () =>
      data.cards.map((card, index) => {
        // Determine styles based on index to match original design
        const isDark = index === 1 || index === 3; // 2nd and 4th cards are colored/dark

        let className = "bg-white";
        if (index === 1) className = "bg-gradient-to-br from-brand-dark to-brand-slate-900";
        if (index === 3) className = "bg-gradient-to-br from-brand-cyan to-brand-mint";

        const textColor = isDark ? "text-white" : "text-brand-dark";

        return {
          id: card.id,
          headline: card.headline,
          description: card.description,
          image: card.image,
          cta: card.cta,
          className: className,
          textColor: textColor,
          icon: renderIcon(card.icon, textColor),
        };
      }),
    [data.cards]
  );

  return (
    <section
      id={data.id}
      className="relative flex flex-col items-center bg-surface-muted pb-24 pt-24 text-brand-dark"
    >
      {/* Header (Static at top of section) */}
      <div className="relative z-10 mb-16 max-w-3xl px-6 text-center">
        <Eyebrow colorScheme="light">{data.kicker}</Eyebrow>
        <Heading level={2} variant="display-large" colorScheme="light" className="mb-6">
          {data.headline}
        </Heading>
        <Text variant="body-large" colorScheme="light" muted>
          {data.description}
        </Text>
      </div>

      {/* Cards Container */}
      <div className="flex w-full justify-center px-6">
        <StackingCards items={items} />
      </div>
    </section>
  );
};

export default React.memo(CardStackSection);
