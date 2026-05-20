import type { Metadata } from 'next'
import PageLayout from '@/components/layout/PageLayout'
import SectionHeader from '@/components/shared/SectionHeader'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Design thinking, process breakdowns, industry insights, and creative tutorials from the DM Graphix team.',
}

// Placeholder posts — replace with Sanity fetch
const PLACEHOLDER_POSTS = [
  {
    id: '1',
    slug: 'why-brand-consistency-matters',
    title: 'Why Brand Consistency Is Your Most Valuable Asset',
    excerpt: 'Inconsistent branding costs businesses credibility, recall, and revenue. Here\'s how to audit and lock down your visual identity.',
    category: 'Branding',
    author: 'DM Graphix Team',
    publishedAt: '2024-05-01',
    readTime: 5,
  },
  {
    id: '2',
    slug: 'nextjs-seo-fundamentals',
    title: 'Next.js SEO Fundamentals Every Designer Should Know',
    excerpt: 'Core Web Vitals, structured data, and metadata — the SEO building blocks that make beautiful sites actually get found.',
    category: 'Web Development',
    author: 'DM Graphix Team',
    publishedAt: '2024-04-18',
    readTime: 8,
  },
  {
    id: '3',
    slug: 'design-systems-for-startups',
    title: 'Design Systems for Startups: When and How to Build One',
    excerpt: 'A design system is often seen as an enterprise luxury. Here\'s how early-stage companies can build one without the overhead.',
    category: 'UI/UX',
    author: 'DM Graphix Team',
    publishedAt: '2024-04-05',
    readTime: 6,
  },
  {
    id: '4',
    slug: 'colour-psychology-in-branding',
    title: 'Colour Psychology in Branding: Beyond the Basics',
    excerpt: 'Why your brand\'s colour choices go far deeper than preference — and how to use colour strategically for your audience.',
    category: 'Branding',
    author: 'DM Graphix Team',
    publishedAt: '2024-03-22',
    readTime: 7,
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  Branding: 'var(--color-brand-orange)',
  'Web Development': 'var(--color-brand-blue)',
  'UI/UX': '#8b5cf6',
  'Graphic Design': '#ec4899',
}

export default function BlogPage() {
  return (
    <PageLayout>
      <section className="py-24 lg:py-32 dark:bg-dark-bg bg-light-bg">
        <div className="section-container">
          <SectionHeader
            pill="Journal"
            title="Design thinking, "
            highlight="decoded"
            description="Process breakdowns, trend reports, and strategic insight from the DM Graphix studio."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {PLACEHOLDER_POSTS.map((post, i) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border hover:border-brand-orange/30 transition-all duration-300 overflow-hidden"
              >
                {/* Colour header */}
                <div
                  className="h-36 relative"
                  style={{
                    background: `linear-gradient(135deg, ${CATEGORY_COLORS[post.category] ?? 'var(--color-brand-blue)'}22 0%, ${CATEGORY_COLORS[post.category] ?? 'var(--color-brand-blue)'}44 100%)`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)',
                      backgroundSize: '28px 28px',
                    }}
                  />
                  <span
                    className="absolute bottom-3 left-4 px-2.5 py-1 rounded-full text-white text-xs font-mono"
                    style={{ background: CATEGORY_COLORS[post.category] ?? 'var(--color-brand-blue)' }}
                  >
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-mono dark:text-text-muted-dark text-text-muted">
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono dark:text-text-muted-dark text-text-muted">
                      <Clock size={11} />
                      {post.readTime} min read
                    </span>
                  </div>
                  <h2 className="font-display font-700 text-lg dark:text-white text-text-primary mb-2 leading-snug group-hover:text-brand-orange transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm dark:text-text-muted-dark text-text-secondary leading-relaxed font-body mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-display font-600 text-brand-orange group-hover:gap-2 transition-all">
                    Read Article <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
