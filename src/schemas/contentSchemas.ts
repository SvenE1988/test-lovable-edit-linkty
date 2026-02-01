import { z } from "zod";

// ============================================================
// BASE SCHEMAS
// ============================================================

export const LinkSchema = z.object({
  text: z.string(),
  href: z.string(),
  variant: z.string().optional(),
  icon: z.string().optional(),
});

export const ImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});

export const SectionDataSchema = z.object({
  id: z.string(),
  kicker: z.string().optional(),
  headline: z.string(),
  headlineAccent: z.string().optional(),
  description: z.string().optional(),
  cta: LinkSchema.optional(),
});

// ============================================================
// SPECIFIC SECTION SCHEMAS
// ============================================================

// Hero
export const HeroSchema = SectionDataSchema.extend({
  backgroundImage: ImageSchema.or(z.string()).optional(),
  backgroundVideo: z
    .object({
      src: z.string(),
      webm: z.string().optional(),
      poster: z.string().optional(),
    })
    .optional(),
  cta: z
    .object({
      primary: LinkSchema.optional(),
      secondary: LinkSchema.optional(),
    })
    .optional(),
  trustBadges: z
    .array(z.string().or(z.object({ text: z.string(), icon: z.string().optional() })))
    .optional(),
});

// Bento Grid
export const BentoItemSchema = z.object({
  id: z.string().or(z.number()),
  size: z.string().optional(),
  headline: z.string().optional(),
  description: z.string().optional(),
  image: ImageSchema.or(z.string()).optional(),
  bgColor: z.string().optional(),
  label: z.string().optional(),
  quote: z.string().optional(),
});

export const BentoGridFeaturesSchema = SectionDataSchema.extend({
  items: z.array(BentoItemSchema),
});

// Feature Showcase
export const FeatureShowcaseSchema = SectionDataSchema.extend({
  image: ImageSchema.or(z.string()),
  imagePosition: z.enum(["left", "right"]).optional(),
  bullets: z.array(z.string()),
});

// Process Timeline
export const TimelineStepSchema = z.object({
  id: z.string().or(z.number()),
  period: z.string(),
  badge: z.string().optional(),
  icon: z.string().optional(),
  headline: z.string(),
  description: z.string(),
});

export const ProcessTimelineSchema = SectionDataSchema.extend({
  steps: z.array(TimelineStepSchema),
  bottomText: z.string().optional(),
});

// FAQ
export const FaqItemSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
});

export const FaqSectionSchema = SectionDataSchema.extend({
  items: z.array(FaqItemSchema),
  subline: z.string().optional(),
  ctaText: z.string().optional(),
});

// Final CTA
export const FinalCtaSchema = SectionDataSchema.extend({
  subline: z.string().optional(),
  microcopy: z.string().optional(),
  cta: z.object({
    primary: LinkSchema,
    secondary: LinkSchema.optional(),
  }),
});

// Stats Section
export const StatItemSchema = z.object({
  id: z.string().or(z.number()).optional(),
  value: z.number().or(z.string()), // Added string support for safety
  prefix: z.string().optional(),
  suffix: z.string().optional(),
  label: z.string(),
});

export const StatsSectionSchema = SectionDataSchema.extend({
  stats: z.array(StatItemSchema),
  columns: z.number().optional(),
  variant: z.enum(["dark", "light"]).optional(),
});

// Split Solutions
export const SolutionCardSchema = z.object({
  id: z.string(),
  label: z.string(),
  badge: z.object({ text: z.string(), variant: z.string() }).optional(),
  headline: z.string(),
  description: z.string(),
  bullets: z.array(z.string()),
  cta: z.object({
    primary: LinkSchema,
    secondary: LinkSchema.optional(),
  }),
  image: ImageSchema.or(z.string()),
});

export const SplitSolutionsSchema = SectionDataSchema.extend({
  subline: z.string().optional(),
  microcopy: z.string().optional(),
  tabs: z.array(SolutionCardSchema),
});

// Card Stack
export const CardStackItemSchema = z.object({
  id: z.string(),
  icon: z.string(),
  headline: z.string(),
  description: z.string(),
  image: ImageSchema.or(z.string()),
  cta: LinkSchema.optional(),
});

export const CardStackSectionSchema = SectionDataSchema.extend({
  cards: z.array(CardStackItemSchema),
});

// Custom Section
export const CustomCardSchema = z.object({
  id: z.string(),
  icon: z.string(),
  headline: z.string(),
  description: z.string(),
});

export const CustomSectionSchema = SectionDataSchema.extend({
  subline: z.string().optional(),
  cards: z.array(CustomCardSchema),
  cta: LinkSchema.optional(),
  microcopy: z.string().optional(),
});

// Testimonials
export const TestimonialAuthorSchema = z.object({
  name: z.string(),
  role: z.string().optional(),
  company: z.string().optional(),
  image: ImageSchema.or(z.string()).optional(),
});

export const TestimonialSchema = z.object({
  id: z.string().or(z.number()).optional(),
  rating: z.number(),
  quote: z.string(),
  author: TestimonialAuthorSchema.optional(),
  name: z.string().optional(),
  headline: z.string().optional(),
  company: z.string().optional(),
  image: ImageSchema.or(z.string()).optional(),
});

export const TestimonialsSectionSchema = SectionDataSchema.extend({
  subline: z.string().optional(),
  items: z.array(TestimonialSchema).optional(),
  testimonials: z.array(TestimonialSchema).optional(),
});

// Logo Marquee
export const LogoItemSchema = z.object({
  id: z.string().or(z.number()).optional(),
  name: z.string(),
  image: z.string().optional(),
});

export const LogoMarqueeSchema = SectionDataSchema.extend({
  theme: z.enum(["light", "dark"]).optional(),
  items: z.array(z.string().or(LogoItemSchema)).optional(),
  logos: z.array(z.string().or(LogoItemSchema)).optional(),
});

// ============================================================
// TYPE EXPORTS
// ============================================================

export type ILink = z.infer<typeof LinkSchema>;
export type IImage = z.infer<typeof ImageSchema>;
export type ISectionData = z.infer<typeof SectionDataSchema>;
export type IHeroData = z.infer<typeof HeroSchema>;
export type IBentoItem = z.infer<typeof BentoItemSchema>;
export type IBentoGridData = z.infer<typeof BentoGridFeaturesSchema>;
export type IFeatureShowcaseData = z.infer<typeof FeatureShowcaseSchema>;
export type ITimelineStep = z.infer<typeof TimelineStepSchema>;
export type IProcessTimelineData = z.infer<typeof ProcessTimelineSchema>;
export type IFaqItem = z.infer<typeof FaqItemSchema>;
export type IFaqData = z.infer<typeof FaqSectionSchema>;
export type IFinalCtaData = z.infer<typeof FinalCtaSchema>;
export type IStatItem = z.infer<typeof StatItemSchema>;
export type IStatsSectionData = z.infer<typeof StatsSectionSchema>;
export type ISolutionCard = z.infer<typeof SolutionCardSchema>;
export type ISplitSolutionsData = z.infer<typeof SplitSolutionsSchema>;
export type ICardStackItem = z.infer<typeof CardStackItemSchema>;
export type ICardStackData = z.infer<typeof CardStackSectionSchema>;
export type ICustomCard = z.infer<typeof CustomCardSchema>;
export type ICustomSectionData = z.infer<typeof CustomSectionSchema>;
export type ITestimonialAuthor = z.infer<typeof TestimonialAuthorSchema>;
export type ITestimonial = z.infer<typeof TestimonialSchema>;
export type ITestimonialsData = z.infer<typeof TestimonialsSectionSchema>;
export type ILogoItem = z.infer<typeof LogoItemSchema>;
export type ILogoMarqueeData = z.infer<typeof LogoMarqueeSchema>;
