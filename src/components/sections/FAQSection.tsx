import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heading } from "../ui/heading";
import { Text, Eyebrow } from "../ui/text";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { IFaqData, IFaqItem } from "@/types";
import { ContactModal } from "../ui/contact-modal";

/**
 * FAQSection - Häufig gestellte Fragen
 *
 * Updated: Uses InteractiveHoverButton
 */

interface FAQItemProps {
  item: IFaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="faq-item border-b border-brand-slate-200">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Antwort schließen" : "Antwort anzeigen"}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-brand-mint"
      >
        <Heading level={3} variant="display-medium" colorScheme="light" className="pr-8">
          {item.question}
        </Heading>
        <ChevronDown
          className={cn(
            "h-5 w-5 flex-shrink-0 text-brand-slate-400 transition-transform duration-300",
            isOpen && "rotate-180 text-brand-mint"
          )}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -10,
        }}
        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="overflow-hidden"
        style={{ willChange: "height, opacity, transform" }}
      >
        <Text variant="body-medium" colorScheme="light" muted className="pb-6 pr-12">
          {item.answer}
        </Text>
      </motion.div>
    </div>
  );
};

interface FAQSectionProps {
  data: IFaqData;
}

const FAQSection: React.FC<FAQSectionProps> = ({ data }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          {data.kicker && <Eyebrow colorScheme="light">{data.kicker}</Eyebrow>}
          <Heading level={2} variant="display-large" colorScheme="light" className="mb-4">
            {data.headline}
          </Heading>
          {data.subline && (
            <Text variant="body-large" colorScheme="light" muted>
              {data.subline}
            </Text>
          )}
        </div>

        {/* FAQ List */}
        <div className="border-t border-brand-slate-200">
          {data.items.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openItem === item.id}
              onToggle={() => setOpenItem(openItem === item.id ? null : item.id)}
            />
          ))}
        </div>

        {/* CTA */}
        {data.cta && (
          <div className="mt-12 text-center">
            <p className="mb-4 text-content-muted">{data.ctaText}</p>
            <ContactModal
              trigger={
                <InteractiveHoverButton
                  text={data.cta.text}
                  variant="outline"
                  className="border-brand-dark text-brand-dark"
                />
              }
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
