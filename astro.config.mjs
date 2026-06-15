import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Static marketing site for Jiji. Output is plain static files in `dist/`,
// served by Cloudflare Pages. `site` drives canonical URLs + the sitemap.
// https://astro.build/config
export default defineConfig({
  site: "https://jijiworkbench.com",
  integrations: [sitemap()],
});
