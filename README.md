# jiji-site

Marketing + download site for [Jiji](https://github.com/scullionw/jiji), a desktop workbench for [Jujutsu](https://github.com/jj-vcs/jj).

Built with [Astro](https://astro.build) as a static site. It reuses Jiji's own design tokens (`src/styles/tokens.css`) so the site looks like the app — including the same ten themes, live-switchable on the page.

## Develop

```bash
bun install
bun run dev      # http://localhost:4321
```

```bash
bun run build    # static output in dist/
bun run preview  # serve the built site locally
```

## Deploy (Cloudflare Pages)

- Framework preset: **Astro**
- Build command: `bun run build`
- Output directory: `dist`
- Custom domain: `jijiworkbench.com` (registered at Porkbun; point nameservers at Cloudflare)

## Configuration

All outward-facing URLs live in one place: [`src/config.ts`](src/config.ts).

Before launch, replace the placeholders marked `TODO`:

- `SOLO_CHECKOUT_URL` / `PERSONAL_CHECKOUT_URL` — Polar checkout links (created once the Polar products exist)
- `SUPPORT_EMAIL` — set up forwarding for the domain
- `public/og.png` — a proper 1200×630 social image (currently the app icon)

The macOS download link (`DOWNLOAD_URL`) points at the latest GitHub Release DMG and is already live.
