// The same ten palettes Jiji ships, mirrored for the site's live theme
// switcher. ids + swatch colors are kept in sync with the app's
// src/lib/state/theme.svelte.ts; the full palettes live in styles/tokens.css
// under [data-theme="<id>"]. Midnight is the base palette on :root.

export interface SiteTheme {
  id: string;
  label: string;
  scheme: "dark" | "light";
  /** Representative colors for the picker swatch (bg-1, accent). */
  bg: string;
  accent: string;
}

export const themes: SiteTheme[] = [
  { id: "midnight", label: "Midnight", scheme: "dark", bg: "#15151a", accent: "#8b8df2" },
  { id: "graphite", label: "Graphite", scheme: "dark", bg: "#181818", accent: "#7fa3cc" },
  { id: "abyss", label: "Abyss", scheme: "dark", bg: "#0d1422", accent: "#45b8e0" },
  { id: "moss", label: "Moss", scheme: "dark", bg: "#131a14", accent: "#7bc788" },
  { id: "ember", label: "Ember", scheme: "dark", bg: "#1a1614", accent: "#e8875a" },
  { id: "paper", label: "Paper", scheme: "light", bg: "#f6f6f9", accent: "#5558d9" },
  { id: "linen", label: "Linen", scheme: "light", bg: "#f6f2ea", accent: "#c05f3c" },
  { id: "glacier", label: "Glacier", scheme: "light", bg: "#f2f6fa", accent: "#2272c8" },
  { id: "meadow", label: "Meadow", scheme: "light", bg: "#f3f6f1", accent: "#2c8050" },
  { id: "dawn", label: "Dawn", scheme: "light", bg: "#f8f2f3", accent: "#b13767" },
];

export const DEFAULT_THEME = "midnight";
export const STORAGE_KEY = "jiji-site-theme";
