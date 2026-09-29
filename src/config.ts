// Every outward-facing URL and fact the site states, in one place.

export const SITE_URL = "https://jijiworkbench.com";
export const VERSION = "0.4.0";

// GitHub serves the newest release's universal DMG at this address, so the
// link never needs bumping per release.
export const DOWNLOAD_URL =
  "https://github.com/scullionw/jiji/releases/latest/download/Jiji_darwin_universal.dmg";

export const GITHUB_URL = "https://github.com/scullionw/jiji";
export const RELEASES_URL = "https://github.com/scullionw/jiji/releases";
export const CHANGELOG_URL = "https://github.com/scullionw/jiji/blob/main/CHANGELOG.md";
export const LICENSE_URL = "https://github.com/scullionw/jiji/blob/main/LICENSE";
export const CLI_DOCS_URL = "https://github.com/scullionw/jiji/blob/main/docs/cli.md";
export const ISSUES_URL = "https://github.com/scullionw/jiji/issues";

export const JJ_URL = "https://github.com/jj-vcs/jj";
export const JJPR_URL = "https://github.com/michaeldhopkins/jjpr";

// Polar hosted checkout for the two one-time products. The app's
// registration popover links to the same checkouts and validates the
// resulting key against Polar.
export const SOLO_CHECKOUT_URL =
  "https://buy.polar.sh/polar_cl_5MwwECsz2qK0oUEHHLfeXktj9kSxsjlnRWOA60jKFGl";
export const PERSONAL_CHECKOUT_URL =
  "https://buy.polar.sh/polar_cl_2vELWWSZMb7KoKqDjsILXonFNpeHyS1JtwZxg2ixOUw";

export const SUPPORT_EMAIL = "hello@jijiworkbench.com";

export const PRICING = {
  solo: {
    name: "Solo",
    price: "$15",
    devices: "1 device",
    url: SOLO_CHECKOUT_URL,
  },
  personal: {
    name: "Personal",
    price: "$20",
    devices: "Up to 5 devices",
    url: PERSONAL_CHECKOUT_URL,
  },
} as const;
