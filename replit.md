# Garage Marketing Site

A complete, production-quality marketing website for a local automobile garage/workshop. Dark cinematic automotive theme — builds trust, showcases services, and drives customers to call or visit.

## Run & Operate

- `pnpm --filter @workspace/garage-site run dev` — run the frontend (Vite dev server)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, Framer Motion, Lucide React
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/garage-site/src/lib/constants.ts` — **ALL editable content lives here**: garage name, phone, address, hours, services, testimonials, quotes, etc. Owner edits this file only.
- `artifacts/garage-site/src/components/sections/` — page sections (Hero, About, Services, etc.)
- `artifacts/garage-site/src/components/layout/` — Navbar, Footer, FloatingButtons
- `artifacts/garage-site/src/components/ui/` — reusable UI (Counter, StarRating, Lightbox, etc.)
- `artifacts/garage-site/src/lib/animations.ts` — shared Framer Motion variants
- `lib/api-spec/openapi.yaml` — API contract (contact + booking endpoints)
- `lib/db/src/schema/contact_submissions.ts` — contact form submissions table
- `lib/db/src/schema/bookings.ts` — appointment bookings table
- `artifacts/api-server/src/routes/contact.ts` — POST /api/contact handler
- `artifacts/api-server/src/routes/booking.ts` — POST /api/booking handler

## Architecture decisions

- All editable content is in `constants.ts` as typed data — zero hardcoded inline JSX text, ready for CMS swap.
- Dark theme by default; `.dark` class on `<html>` element controls theming.
- Contact and booking forms post to Express API routes that persist to PostgreSQL. Add a real email service (Resend/Nodemailer) in the route files where marked with `// TODO:`.
- Google Maps embed URL is a placeholder in constants.ts — replace `MAP_EMBED_URL` with the real iframe src.
- Gallery uses styled gradient placeholder divs — replace with real images in `/public/images/gallery/` and update the `GALLERY_IMAGES` array in constants.ts.

## Product

- **Hero** — cinematic full-viewport entrance, ambient CSS animations, Book Service + Call Now CTAs
- **About** — proprietor story + credential badge chips
- **Services** — 15-service animated card grid (engine, oil, brakes, AC, alignment, painting, etc.)
- **Why Choose Us** — animated count-up stat counters + feature bullets
- **Work Process** — animated horizontal/vertical timeline
- **Gallery** — masonry grid with lightbox (keyboard nav, prev/next)
- **Testimonials** — auto-advancing carousel with star ratings
- **Quotes** — 6 original automotive motivational quotes
- **Location** — Google Maps embed placeholder + hours table
- **Contact** — validated form + direct call/WhatsApp CTAs

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- After any OpenAPI spec change, run codegen before touching routes or frontend hooks.
- The Google Maps embed URL must be set in `constants.ts` (MAP_EMBED_URL) for the Location section to show a real map.
- Garage name, phone, WhatsApp number, email, and address are all `[PLACEHOLDER]` values in `constants.ts` — owner must fill these in before going live.
- Email notifications on form submission need a real service wired in `artifacts/api-server/src/routes/contact.ts` and `booking.ts`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
