# DM Graphix — Website

> Where Visions Meet Visuals

Full-service creative agency website built with Next.js 16, Tailwind CSS v4.3, TypeScript, Motion, and Sanity CMS v5.

---

## Stack

| Technology | Version | Notes |
|---|---|---|
| Next.js | 16.x | App Router, React Compiler, Turbopack |
| React | 19.2.x | Required by Next.js 16 + Sanity v5 |
| Tailwind CSS | 4.3.0 | CSS-first config via `@theme` — no `tailwind.config.ts` |
| TypeScript | 5.8.x | Strict mode |
| Motion | 12.x | Formerly Framer Motion — import from `motion/react` |
| Sanity | 5.x | Headless CMS, requires React 19.2 |
| React Hook Form | 7.60.x | Multi-step contact form |
| Zod | 3.25.x | Form validation |

---

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Fill in your Sanity project ID and dataset from [sanity.io/manage](https://sanity.io/manage).

### 3. Run dev server

```bash
npm run dev
```

Turbopack is on by default. Visit [http://localhost:3000](http://localhost:3000).

---

## Sanity CMS Setup

### Create a Sanity project

Go to [sanity.io/manage](https://sanity.io/manage), create a new project, then paste the project ID into `.env.local`.

Or via CLI:

```bash
npx sanity@latest init
```

### Schemas

Four document types in `/sanity/schemas/`:

| Schema | Purpose |
|---|---|
| `project` | Portfolio case studies |
| `post` | Blog articles |
| `testimonial` | Client testimonials |
| `teamMember` | Team profiles |

### Embedded Studio

The Sanity Studio is embedded at `/studio` — visit [http://localhost:3000/studio](http://localhost:3000/studio) during development.

---

## Deploying to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-org/dmgraphix.git
git push -u origin main
```

### 2. Import to Vercel

- Go to [vercel.com/new](https://vercel.com/new)
- Import your GitHub repository
- Vercel auto-detects Next.js — no build config needed

### 3. Add environment variables

In **Vercel Dashboard → Project → Settings → Environment Variables**, add:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_SITE_URL` | `https://dmgraphix.com` |

### 4. Connect your custom domain (cPanel)

Once Vercel deploys your site:

1. Go to **Vercel Dashboard → Project → Settings → Domains**
2. Add your domain: `dmgraphix.com`
3. Vercel gives you two DNS records to add — either:
   - **A record**: points `@` to Vercel's IP (`76.76.21.21`)
   - **CNAME record**: points `www` to `cname.vercel-dns.com`
4. Log into your **cPanel** → **Zone Editor** (or DNS Zone Editor)
5. Add those two records and save
6. DNS propagation takes 10–60 minutes
7. Vercel auto-provisions your SSL certificate via Let's Encrypt once DNS resolves

### Future deployments

Every push to `main` auto-deploys. No manual steps needed.

---

## Project Structure

```
src/
├── app/                         # Next.js App Router pages
│   ├── page.tsx                 # Home
│   ├── services/page.tsx        # Services
│   ├── work/
│   │   ├── page.tsx             # Portfolio grid
│   │   └── [slug]/page.tsx      # Case study
│   ├── about/page.tsx           # About
│   ├── contact/page.tsx         # Contact (multi-step form)
│   ├── blog/
│   │   ├── page.tsx             # Blog index
│   │   └── [slug]/page.tsx      # Blog post
│   └── studio/[[...tool]]/      # Embedded Sanity Studio
├── components/
│   ├── layout/                  # Navbar, Footer, PageLayout
│   ├── home/                    # Hero, ParticleCanvas, ServicesPreview, etc.
│   ├── portfolio/               # PortfolioGrid
│   ├── contact/                 # MultiStepForm
│   └── shared/                  # CustomCursor, KineticText, ParallaxLayer, etc.
├── hooks/
│   └── useParallax.ts           # Scroll-driven parallax hook
├── lib/
│   ├── data.ts                  # Static content + placeholder data
│   ├── sanity.ts                # Sanity client + GROQ queries
│   └── utils.ts                 # cn(), formatDate(), etc.
└── types/index.ts               # All TypeScript types
sanity/
├── schemas/                     # Sanity document schemas
└── index.ts                     # Schema registry
```

---

## Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `brand-blue` | `#031d80` | Primary buttons, nav active |
| `brand-orange` | `#fa7805` | Accents, CTAs, highlights |
| `dark-bg` | `#020818` | Dark mode page background |
| `dark-card` | `#071240` | Dark mode card surface |

---

## Connecting Real Content

1. Set up Sanity and add the project ID to `.env.local`
2. Add portfolio projects via `/studio`
3. Replace placeholder data in `PortfolioGrid.tsx` and `blog/page.tsx` with Sanity fetches using queries from `src/lib/sanity.ts`
4. Replace the DM logo placeholder in `Navbar.tsx` with `<Image src="/images/logo.png" />`
5. Wire the contact form `onSubmit` to a real API route or Resend
