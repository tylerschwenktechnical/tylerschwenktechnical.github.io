/**
 * Site-wide constants shared by the page components and SEO metadata.
 * Contact details live here so every link on the site stays in sync.
 */
export const SITE = {
  name: "Tyler Schwenk Technical",
  legalName: "Tyler Schwenk Technical LLC",
  owner: "Tyler Schwenk",
  url: "https://tylerschwenktechnical.github.io",
  email: "tylerschwenk1@yahoo.com",
  github: {
    url: "https://github.com/tyler-schwenk",
    label: "github.com/tyler-schwenk",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/tyler-schwenk-939570224/",
    label: "linkedin.com/in/tyler-schwenk",
  },
} as const;

/** Primary navigation entries, in page order. */
export const NAV_ITEMS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
