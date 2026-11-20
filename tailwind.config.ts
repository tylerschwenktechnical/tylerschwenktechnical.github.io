import type { Config } from "tailwindcss";

/**
 * Builds a Tailwind color value backed by a CSS variable holding
 * space-separated RGB channels, so opacity modifiers keep working.
 *
 * @param name - CSS variable name without the leading dashes.
 * @returns A Tailwind-compatible color string.
 */
function themeColor(name: string): string {
  return `rgb(var(--${name}) / <alpha-value>)`;
}

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: themeColor("canvas"),
        ink: themeColor("ink"),
        muted: themeColor("muted"),
        subtle: themeColor("subtle"),
        line: themeColor("line"),
        accent: themeColor("accent"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
