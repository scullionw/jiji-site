// Every outward-facing URL the site links to, in one place.
//
// The macOS download already resolves to the latest GitHub Release DMG.
// The Polar checkout links and support email are placeholders — replace the
// ones marked TODO before launch (see README).

export const SITE_URL = "https://jijiworkbench.com";
export const VERSION = "0.1.0";

// Download — live now. GitHub serves the newest release's universal DMG here,
// so this link never needs bumping per release.
export const DOWNLOAD_URL =
  "https://github.com/scullionw/jiji/releases/latest/download/Jiji_darwin_universal.dmg";

// Source / project links.
export const GITHUB_URL = "https://github.com/scullionw/jiji";
export const RELEASES_URL = "https://github.com/scullionw/jiji/releases";
export const CHANGELOG_URL =
  "https://github.com/scullionw/jiji/blob/main/CHANGELOG.md";
export const LICENSE_URL = "https://github.com/scullionw/jiji/blob/main/LICENSE";
export const CONTRIBUTING_URL =
  "https://github.com/scullionw/jiji/blob/main/CONTRIBUTING.md";

// Jujutsu, for the curious.
export const JJ_URL = "https://github.com/jj-vcs/jj";

// Polar hosted checkout links for the two one-time products (Jiji Solo $15,
// Jiji Personal $20). These are the same links the app's registration popover
// uses; the app validates the resulting key against Polar org a37fb037-….
export const SOLO_CHECKOUT_URL =
  "https://buy.polar.sh/polar_cl_5MwwECsz2qK0oUEHHLfeXktj9kSxsjlnRWOA60jKFGl";
export const PERSONAL_CHECKOUT_URL =
  "https://buy.polar.sh/polar_cl_2vELWWSZMb7KoKqDjsILXonFNpeHyS1JtwZxg2ixOUw";

// TODO(launch): set up forwarding for this address on the domain.
export const SUPPORT_EMAIL = "hello@jijiworkbench.com";

export const PRICING = {
  solo: {
    name: "Solo",
    price: "$15",
    blurb: "For one person, one machine.",
    devices: "1 device activation",
    url: SOLO_CHECKOUT_URL,
  },
  personal: {
    name: "Personal",
    price: "$20",
    blurb: "For your laptop and your desktop.",
    devices: "2 device activations",
    url: PERSONAL_CHECKOUT_URL,
  },
} as const;
