# Germany Hub — Project Context

## What this is
A study abroad guide website for Indian students planning to study in Germany. Covers admissions, APS certificate, visa, scholarships, universities, finances, and life in Germany.

## Live URLs
- Production: https://germany-hub.vercel.app
- GitHub: https://github.com/KritinB/germany-hub

## Tech Stack
- React + Vite
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- Vercel Analytics (installed and active)

## Deploy workflow
Push to GitHub → Vercel auto-deploys to production. No manual deploy needed.
```bash
git add . && git commit -m "message" && git push
```

## Project structure
- `src/components/` — all homepage sections (Hero, Navbar, APS, Visa, etc.)
- `src/pages/` — individual detail pages for each section
- `src/App.jsx` — routes and homepage layout
- `public/` — static files (sitemap.xml, robots.txt, Google Search Console verification)

## Owner
- Kritin Bysani
- Gmail: kritinbysani555@gmail.com

## SEO
- Google Search Console verified and sitemap submitted
- Meta tags, Open Graph, robots.txt all set up

## What's been done
- Site built and deployed
- GitHub connected with auto-deploy via Vercel
- Vercel Analytics enabled
- SEO fully set up (meta tags, sitemap, robots.txt, Google Search Console verified)
- Contact/enquiry form built using Formspree (https://formspree.io/f/meedjyqn) — sends submissions directly to kritinbysani555@gmail.com
- Caffeine app installed on Mac to prevent sleep during long tasks
- CLAUDE.md and memory files set up for persistent context across sessions
- Contact link added to Navbar
- Per-page document.title set on all 8 detail pages (SEO)
- Journey page created at /journey — complete India-to-Germany study roadmap (7 phases, 42 steps)
- Hero CTA updated to link to Journey page; Footer updated too
- Hero announcements updated to 2026-27 cycle
- APS fee year label updated to 2025–26

## Pending / ideas
- User accounts + progress tracking (Supabase — not needed yet)
- Custom domain (not needed yet)
- Update sitemap.xml to include /journey route
