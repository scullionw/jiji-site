// The ten palettes Jiji ships, mirrored for the page's theme switcher. Ids,
// labels and swatches follow the app's src/lib/state/theme.svelte.ts; the
// palettes themselves live in styles/tokens.css under [data-theme="<id>"].

export interface SiteTheme {
  id: string;
  label: string;
  scheme: "dark" | "light";
  /** Representative colors for the swatch (bg-1, accent). */
  bg: string;
  accent: string;
}

export const themes: SiteTheme[] = [
  { id: "midnight", label: "Midnight", scheme: "dark", bg: "#15161b", accent: "#7078ee" },
  { id: "graphite", label: "Graphite", scheme: "dark", bg: "#171717", accent: "#7d9fc8" },
  { id: "abyss", label: "Abyss", scheme: "dark", bg: "#0e1422", accent: "#3eb3dc" },
  { id: "moss", label: "Moss", scheme: "dark", bg: "#111713", accent: "#6fbf80" },
  { id: "ember", label: "Ember", scheme: "dark", bg: "#181413", accent: "#e2844f" },
  { id: "paper", label: "Paper", scheme: "light", bg: "#fcfcfd", accent: "#4e54d6" },
  { id: "linen", label: "Linen", scheme: "light", bg: "#fbf8f3", accent: "#b75a37" },
  { id: "glacier", label: "Glacier", scheme: "light", bg: "#f8fafc", accent: "#1f6fc5" },
  { id: "meadow", label: "Meadow", scheme: "light", bg: "#f9fbf8", accent: "#2a7c4d" },
  { id: "dawn", label: "Dawn", scheme: "light", bg: "#fcf8f9", accent: "#ad3564" },
];

export const DARK_DEFAULT = "midnight";
export const LIGHT_DEFAULT = "paper";
export const STORAGE_KEY = "jiji-site-theme";
