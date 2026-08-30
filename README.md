# Alexandra Barbosa — Portfolio

Personal portfolio of Alexandra Barbosa, a social media manager, copywriter and content creator based in Portugal.

The website brings together selected work across social media strategy, copywriting, community management, paid media and content creation. Each case study combines project context, credits and visual storytelling through photography, carousels and video.

## Highlights

- Bilingual experience in English and Portuguese
- Responsive project gallery and detailed case-study pages
- Animated brand identity and interactive navigation
- Image carousels, social posts and video reels
- Context-aware navigation across light and dark sections
- Accessible keyboard focus states and reduced-motion support
- Static generation for project pages

## Featured work

The portfolio currently includes work for:

- KFC Portugal
- Endesa Portugal
- Cockburn's
- Authentic Classical Pilates
- Munchie
- L&R Ópticas
- Padaria Aliança
- Feel Better
- Psicomorfose

## Tech stack

- [Next.js 15](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Turborepo](https://turbo.build/repo)
- [Embla Carousel](https://www.embla-carousel.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [pnpm](https://pnpm.io/)

## Project structure

```text
.
├── apps/
│   └── web/
│       ├── app/              # Routes, layouts and global styles
│       ├── public/           # Portfolio imagery, video and documents
│       └── src/
│           ├── components/   # Page sections and interactive UI
│           ├── data/         # Projects and translations
│           ├── icons/        # Custom SVG components
│           └── lib/          # Shared utilities
├── packages/                 # Shared configuration packages
├── pnpm-workspace.yaml
└── turbo.json
```

## Running locally

### Requirements

- Node.js 18 or newer
- pnpm 8

### Setup

```bash
git clone https://github.com/alexadinis/alexa-port.git
cd alexa-port
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

Run these commands from the repository root:

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the development environment |
| `pnpm build` | Create a production build |
| `pnpm check-types` | Run TypeScript checks |
| `pnpm lint` | Run linting across the workspace |
| `pnpm format` | Format TypeScript and Markdown files |

To run only the portfolio application:

```bash
pnpm --filter web dev
pnpm --filter web build
```

## Deployment

The site can be deployed as a Next.js application on Vercel or another Node.js-compatible platform. For a monorepo deployment, use the repository root and the standard `pnpm build` command, or configure `apps/web` as the application workspace.

## Content and credits

Design, content and development by Alexandra Barbosa.

Brand names, campaign materials, photography and other portfolio assets remain the property of their respective owners and are presented here solely as examples of professional work. They are not licensed for reuse.
