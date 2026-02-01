import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heading } from "../ui/heading";
import { Text, Eyebrow } from "../ui/text";
import { ShieldCheck, Cpu, MapPin, Award } from "lucide-react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { ILink } from "@/types";

interface HeroProps {
  eyebrow?: string;
  headline: string;
  headlineAccent?: string;
  description?: string;

  backgroundVideo?: {
    src: string;
    webm?: string;
    poster?: string;
  };
  backgroundImage?: { src: string; alt: string } | string;

  primaryCta?: ILink;
  secondaryCta?: ILink;

  trustBadges?: (string | { text: string; icon?: string; image?: string })[];

  variant?: "default" | "minimal" | "centered";
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  eyebrow,
  headline,
  headlineAccent,
  description,
  backgroundVideo,
  backgroundImage,
  primaryCta,
  secondaryCta,
  trustBadges = [],
  variant = "default",
}) => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [1, 0.96]);
  const borderRadius = useTransform(scrollY, [0, 400], ["0rem", "1.5rem"]);

  const contentClasses = variant === "centered" ? "max-w-3xl mx-auto text-center" : "w-full";
  // Position text at bottom-left of viewport
  const textAlignment = variant === "centered" ? "text-center" : "text-left";

  const getIconForBadge = (badge: string | { text: string }) => {
    const text = typeof badge === "string" ? badge : badge.text;
    const lowerText = text.toLowerCase();

    if (lowerText.includes("ki") || lowerText.includes("ai") || lowerText.includes("robot")) {
      return <Cpu className="h-8 w-8 text-brand-mint" strokeWidth={1.5} />;
    }
    if (
      lowerText.includes("dsgvo") ||
      lowerText.includes("sicher") ||
      lowerText.includes("datenschutz")
    ) {
      return <ShieldCheck className="h-8 w-8 text-brand-mint" strokeWidth={1.5} />;
    }
    if (lowerText.includes("germany") || lowerText.includes("deutschland")) {
      return <MapPin className="h-8 w-8 text-brand-mint" strokeWidth={1.5} />;
    }
    return <Award className="h-8 w-8 text-brand-mint" strokeWidth={1.5} />;
  };

  return (
    <section className="relative w-full bg-white">
      <motion.div
        style={{ scale, borderRadius, willChange: "transform, border-radius" }}
        className="relative min-h-screen w-full origin-top overflow-hidden bg-brand-dark shadow-2xl"
      >
        <div className="absolute inset-0 overflow-hidden">
          {backgroundVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              poster={backgroundVideo.poster}
            >
              <source src={backgroundVideo.src} type="video/mp4" />
              {backgroundVideo.webm && <source src={backgroundVideo.webm} type="video/webm" />}
            </video>
          ) : backgroundImage ? (
            <img
              src={typeof backgroundImage === "string" ? backgroundImage : backgroundImage.src}
              alt={typeof backgroundImage === "string" ? "" : backgroundImage.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : null}
          <div className="via-brand-dark/70 to-brand-dark/40 absolute inset-0 bg-gradient-to-t from-brand-dark" />
        </div>

        <div
          className={`relative z-10 flex min-h-screen w-full items-end justify-start px-4 pb-12 pt-32 md:px-0 md:pb-16 md:pl-16`}
        >
          <div className={contentClasses}>
            {eyebrow && (
              <div className="mb-4">
                <Eyebrow colorScheme="dark">{eyebrow}</Eyebrow>
              </div>
            )}

            <div>
              <Heading
                level={1}
                variant="display-huge"
                colorScheme="dark"
                className={`mb-4 whitespace-pre-wrap ${textAlignment}`}
              >
                {headline}
              </Heading>
            </div>

            {headlineAccent && (
              <div className={`mb-6 ${textAlignment}`}>
                <Heading
                  level={1}
                  variant="display-huge"
                  colorScheme="dark"
                  className="leading-tight text-brand-mint"
                >
                  {headlineAccent}
                </Heading>
              </div>
            )}

            {description && (
              <div>
                <Text
                  variant="body-large"
                  colorScheme="dark"
                  muted
                  className={`mb-8 max-w-2xl ${variant === "centered" ? "mx-auto text-center" : ""}`}
                >
                  {description}
                </Text>
              </div>
            )}

            {(primaryCta || secondaryCta) && (
              <div
                className={`mb-6 flex flex-col gap-4 sm:flex-row ${variant === "centered" ? "justify-center" : ""}`}
              >
                {primaryCta && (
                  <InteractiveHoverButton
                    text={primaryCta.text}
                    href={primaryCta.href === "#demo" ? undefined : primaryCta.href}
                    isBookingCTA={primaryCta.href === "#demo"}
                    variant="primary"
                  />
                )}
                {secondaryCta && (
                  <InteractiveHoverButton
                    text={secondaryCta.text}
                    href={secondaryCta.href || "#"}
                    variant="outline"
                  />
                )}
              </div>
            )}

            {trustBadges.length > 0 && (
              <div
                className={`flex flex-wrap items-center gap-8 ${variant === "centered" ? "justify-center" : ""}`}
              >
                {trustBadges.map((badge, index) => {
                  const badgeText = typeof badge === "string" ? badge : badge.text;
                  const badgeImage =
                    typeof badge === "object" && "image" in badge ? badge.image : undefined;

                  if (badgeImage) {
                    return (
                      <div
                        key={index}
                        title={badgeText}
                        className="opacity-50 transition-opacity duration-300 hover:opacity-100"
                      >
                        <img
                          src={badgeImage}
                          alt={badgeText}
                          className="h-8 w-auto grayscale transition-all hover:grayscale-0"
                        />
                      </div>
                    );
                  }

                  return (
                    <div
                      key={index}
                      title={badgeText}
                      className="text-white/40 transition-colors duration-300 hover:text-brand-mint"
                    >
                      {getIconForBadge(badge)}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(Hero);
