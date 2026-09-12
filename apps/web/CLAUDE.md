# Web App

Next.js 15 App Router with React 19 and Tailwind CSS 4.

## Structure

- `app/` — Routes and layout. `layout.tsx` sets Poppins font and Navbar.
- `src/components/` — Feature folders (Hero/, Work/, Slider/, Navbar/, etc.) each containing the main component and subcomponents.
- `src/icons/` — Custom SVG icon components. Also uses `@phosphor-icons/react`.
- `src/lib/` — App-specific utilities and site constants.

## Styling

Tailwind CSS 4 is primary. CSS Modules used for component-scoped styles. Theme colors are CSS variables in `app/globals.css`. Class composition uses `clsx`, `tailwind-merge`, and `tailwind-variants`.

Component variants use `tailwind-variants` — see Button component for the pattern.

## Key Libraries

- `embla-carousel-react` — Carousels/sliders
- `react-fast-marquee` — Marquee animations
- `react-type-animation` — Typing effects

## Path Alias

The configured `@/components/*`, `@/utils`, and `@/icons` aliases map to shared modules in `packages/ui/src/`.

## Contact form

- The contact form submits to `POST /api/contact`.
- Set `RESEND_API_KEY` in the environment to enable email delivery.
- The sender domain must be verified in Resend.
