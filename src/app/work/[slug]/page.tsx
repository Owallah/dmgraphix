import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageLayout from '@/components/layout/PageLayout'
import CTABanner from '@/components/home/CTABanner'
import { ArrowLeft, ArrowUpRight, Calendar, User } from 'lucide-react'

// ─── Placeholder data — replace with Sanity fetch ────────────────────────────
const PLACEHOLDER_PROJECTS: Record<string, PlaceholderProject> = {
  '1': {
    id: '1',
    title: 'Luminary Brand Identity',
    client: 'Luminary Brands',
    year: 2024,
    category: 'branding',
    tagline: 'A bold rebrand for a growing consultancy.',
    description: `Luminary Brands approached DM Graphix after three years of inconsistent visual 
    communication that was undermining their market position. The brief was clear: build a brand 
    that reflects their premium positioning and attracts enterprise clients.

    We started with a three-week brand discovery phase — stakeholder interviews, competitor audits, 
    and a brand personality workshop. From there, we developed a refined visual system anchored in 
    deep navy and warm gold, with a bespoke wordmark that balances authority with approachability.

    The result was a complete identity system: logo suite, typography hierarchy, colour system, 
    photography art direction, and a 60-page brand guidelines document.`,
    tags: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Typography'],
    results: [
      { label: 'Increase in qualified leads', value: '65', suffix: '%' },
      { label: 'Client retention rate', value: '94', suffix: '%' },
      { label: 'Brand consistency score', value: '9.2', suffix: '/10' },
    ],
  },
  '2': {
    id: '2',
    title: 'TechNova Web Platform',
    client: 'TechNova Ltd',
    year: 2024,
    category: 'web-development',
    tagline: 'Full-stack web app with custom CMS and API integrations.',
    description: `TechNova needed a marketing website that could also serve as a client portal — 
    with gated content, real-time data dashboards, and a CMS their non-technical team could manage.

    We built on Next.js 16 with a Sanity CMS backend, PostgreSQL for client data, and a 
    custom API layer integrating with their existing Salesforce instance.

    The frontend prioritised performance above all else — achieving a Lighthouse score of 98 
    across all four categories on launch day.`,
    tags: ['Next.js', 'Sanity CMS', 'API Integration', 'Performance'],
    results: [
      { label: 'Lighthouse performance score', value: '98', suffix: '' },
      { label: 'Increase in qualified leads', value: '40', suffix: '%' },
      { label: 'Avg. page load time', value: '0.8', suffix: 's' },
    ],
  },
}

interface PlaceholderProject {
  id: string
  title: string
  client: string
  year: number
  category: string
  tagline: string
  description: string
  tags: string[]
  results: { label: string; value: string; suffix: string }[]
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = PLACEHOLDER_PROJECTS[slug]
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.title,
    description: project.tagline,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = PLACEHOLDER_PROJECTS[slug]

  if (!project) notFound()

  const CATEGORY_LABEL: Record<string, string> = {
    branding: 'Branding',
    'web-development': 'Web Development',
    'ui-ux': 'UI/UX',
    'graphic-design': 'Graphic Design',
    software: 'Software',
    print: 'Print',
  }

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 lg:py-24 dark:bg-dark-bg bg-light-bg border-b dark:border-dark-border border-light-border">
        <div className="section-container">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-display font-600 dark:text-text-muted-dark text-text-muted hover:text-brand-orange transition-colors mb-8"
          >
            <ArrowLeft size={15} /> Back to Work
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-mono text-white"
                style={{ background: 'var(--color-brand-orange)' }}
              >
                {CATEGORY_LABEL[project.category] ?? project.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono dark:text-text-muted-dark text-text-muted">
                <User size={12} /> {project.client}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono dark:text-text-muted-dark text-text-muted">
                <Calendar size={12} /> {project.year}
              </span>
            </div>

            <h1 className="font-display font-800 text-4xl lg:text-6xl dark:text-white text-text-primary mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg dark:text-text-muted-dark text-text-secondary font-body leading-relaxed">
              {project.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Cover image placeholder */}
      <section className="dark:bg-dark-bg bg-light-bg">
        <div className="section-container py-10">
          <div
            className="w-full h-64 lg:h-96 rounded-2xl flex items-center justify-center"
            style={{
              background:
                'linear-gradient(135deg, var(--color-brand-blue-dark) 0%, var(--color-brand-blue) 60%, color-mix(in srgb, var(--color-brand-blue) 70%, var(--color-brand-orange)) 100%)',
            }}
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-[0.06]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                backgroundSize: '36px 36px',
              }}
            />
            <p className="font-display font-600 text-white/40 text-sm">
              Project Cover Image
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 dark:bg-dark-bg bg-light-bg">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">

            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="font-display font-700 text-2xl dark:text-white text-text-primary mb-6">
                The Project
              </h2>
              <div className="space-y-4">
                {project.description.split('\n\n').filter(Boolean).map((para, i) => (
                  <p
                    key={i}
                    className="text-sm lg:text-base dark:text-text-muted-dark text-text-secondary leading-relaxed font-body"
                  >
                    {para.trim()}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-10">
                <p className="text-xs font-mono uppercase tracking-widest text-brand-orange mb-4">
                  Deliverables
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-xl text-xs font-display font-600 dark:bg-dark-card bg-light-surface dark:text-text-on-dark/70 text-text-secondary dark:border-dark-border border-light-border border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar — results */}
            <div>
              <div className="sticky top-28">
                <p className="text-xs font-mono uppercase tracking-widest text-brand-orange mb-6">
                  Results
                </p>
                <div className="space-y-4">
                  {project.results.map((r) => (
                    <div
                      key={r.label}
                      className="p-5 rounded-2xl dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border"
                    >
                      <p
                        className="font-display font-800 text-3xl mb-1"
                        style={{ color: 'var(--color-brand-orange)' }}
                      >
                        {r.value}{r.suffix}
                      </p>
                      <p className="text-xs dark:text-text-muted-dark text-text-muted font-body">
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-xs font-mono uppercase tracking-widest dark:text-text-muted-dark text-text-muted mb-3">
                    Client
                  </p>
                  <p className="font-display font-600 dark:text-white text-text-primary text-sm">
                    {project.client}
                  </p>
                  <p className="text-xs dark:text-text-muted-dark text-text-muted font-body mt-1">
                    {project.year}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="btn-orange w-full justify-center mt-8 text-sm"
                >
                  Start a Similar Project
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  )
}
