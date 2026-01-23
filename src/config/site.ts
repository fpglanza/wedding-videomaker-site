export const site = {
  name: "Wedding Videomaker",
  locale: "it_IT",
  // Keep CTA destinations configurable (Netlify env vars later).
  cta: {
    primaryLabel: "Prenota una call",
    primaryHref: import.meta.env.PUBLIC_CTA_PRIMARY_URL ?? "/contatti",
    secondaryLabel: "Contattami",
    secondaryHref: import.meta.env.PUBLIC_CTA_SECONDARY_URL ?? "/contatti",
  },
  socials: {
    instagram: import.meta.env.PUBLIC_INSTAGRAM_URL ?? "",
    youtube: import.meta.env.PUBLIC_YOUTUBE_URL ?? "",
  },
} as const;