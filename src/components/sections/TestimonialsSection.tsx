import React, { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heading } from "../ui/heading";
import { Text, Eyebrow } from "../ui/text";
import { ITestimonialsData, ITestimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: ITestimonial;
}

// Logo placeholder component with brand color variations
const LogoPlaceholder = ({ company }: { company: string }) => {
  // Generate a consistent color based on company name
  const colors = [
    "bg-brand-teal/20",
    "bg-brand-mint/20",
    "bg-brand-cyan/20",
    "bg-white/10",
    "bg-brand-teal/10",
    "bg-brand-mint/10",
  ];
  const colorIndex = company.length % colors.length;

  return (
    <div
      className={cn("flex h-12 w-24 items-center justify-center rounded-lg", colors[colorIndex])}
    >
      <span className="text-xs font-medium text-white/30">{company.charAt(0)}</span>
    </div>
  );
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const name = testimonial.author?.name || testimonial.name;
  const role = testimonial.author?.role || (testimonial as ITestimonial & { role?: string }).role;
  const company = testimonial.author?.company || testimonial.company;

  return (
    <div className="w-[400px] flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      {/* Stars - Brand Teal */}
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < testimonial.rating
                ? "fill-brand-teal text-brand-teal"
                : "fill-brand-slate-600 text-brand-slate-600"
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <Text variant="body-medium" colorScheme="dark" className="mb-6 italic leading-relaxed">
        "{testimonial.quote}"
      </Text>

      {/* Author - No image, with logo placeholder */}
      <div className="flex items-center gap-4">
        <LogoPlaceholder company={company || "C"} />
        <div>
          <Text variant="body-medium" colorScheme="dark" className="font-semibold">
            {name}
          </Text>
          <Text variant="body-small" colorScheme="dark" subtle>
            {role}
            {company && `, ${company}`}
          </Text>
        </div>
      </div>
    </div>
  );
};

interface TestimonialsSectionProps {
  data: ITestimonialsData;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ data }) => {
  const items = data.items || data.testimonials || [];
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Split testimonials into two rows
  const midPoint = Math.ceil(items.length / 2);
  const row1 = items.slice(0, midPoint);
  const row2 = items.slice(midPoint);

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Row 1 moves left as user scrolls down
  const row1X = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  // Row 2 moves right (counter-scroll) as user scrolls down
  const row2X = useTransform(scrollYProgress, [0, 1], ["-15%", "0%"]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Duplicate items for infinite scroll effect
  const duplicatedRow1 = [...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative overflow-hidden bg-brand-dark py-24 lg:py-32"
    >
      {/* Background gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-16 px-6 text-center">
          {data.kicker && <Eyebrow colorScheme="dark">{data.kicker}</Eyebrow>}
          <Heading
            level={2}
            variant="display-large"
            colorScheme="dark"
            accent={data.headlineAccent}
            className="mb-4"
          >
            {data.headline}
          </Heading>
        </div>

        {/* Scrolling Rows Container */}
        <div className="space-y-6">
          {/* Row 1 - Scrolls Left */}
          <motion.div
            className="flex gap-6"
            style={{ x: row1X, willChange: "transform" }}
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {duplicatedRow1.map((testimonial, index) => (
              <TestimonialCard
                key={`row1-${testimonial.id || index}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </motion.div>

          {/* Row 2 - Scrolls Right (Counter) */}
          <motion.div
            className="flex gap-6"
            style={{ x: row2X, willChange: "transform" }}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {duplicatedRow2.map((testimonial, index) => (
              <TestimonialCard
                key={`row2-${testimonial.id || index}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TestimonialsSection);
