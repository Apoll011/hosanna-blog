# Hosanna Blog

Content and SEO blog for [Hosanna](https://hosanna.live) — worship planning for churches.

- **Site:** https://blog.hosanna.live  
- **Stack:** Astro 7 + MDX + Tailwind  
- **Related:** marketing site (`hosanna-saas`), Studio (`studio.hosanna.live`), API (`api.hosanna.live`)

## Develop

```bash
pnpm install
pnpm dev
```

## Deploy

- **Cloudflare Workers (static assets):** `pnpm run deploy:cf-workers` (see `wrangler.jsonc`)
- **Netlify:** `netlify.toml` builds to `dist/`

## Analytics

Google Tag Manager is wired via `astro-gtm-lite` but **disabled** until a real `gtm_id` is set in `src/config/config.json` (`google_tag_manager.enable`).

## Content

Posts and pages live under `src/content/`. Privacy policy mirrors the marketing site policy (`hosanna-saas/src/content/pp.en.md`).
