# jiji-site

The website for [Jiji](https://github.com/scullionw/jiji), a desktop workbench for [Jujutsu](https://github.com/jj-vcs/jj), served at [jijiworkbench.com](https://jijiworkbench.com).

A static [Astro](https://astro.build) site. `src/styles/tokens.css` is a verbatim copy of the app's design tokens, so the page uses the product's surfaces, type and ten themes; the pricing section's swatches re-theme the page.

## Develop

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # static output in dist/
bun run preview  # serve the built site locally
```

## Deploy

Cloudflare Pages builds `main` (`bun run build`, output `dist/`) and serves it on `jijiworkbench.com`. Pushing `main` deploys.

## Keeping it current

- **Facts and links** live in [`src/config.ts`](src/config.ts). Bump `VERSION` with each app release; `DOWNLOAD_URL` always serves the newest release's DMG.
- **Tokens**: copy the app's `src/lib/styles/tokens.css` over `src/styles/tokens.css` when the app's palette changes, and mirror theme swatches in `src/themes.ts`.
- **Screenshots** in `public/screens/` are the app's real frontend rendered with the visual harness (`scripts/visual-harness` in the app repo) over a clone of the jj repository. The copies in `docs/images/` of the app repo come from the same captures.
- **Claims**: every feature, FAQ answer and privacy line must stay true of the current release.
