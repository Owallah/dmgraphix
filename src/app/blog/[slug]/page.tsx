import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageLayout from '@/components/layout/PageLayout'
import CTABanner from '@/components/home/CTABanner'
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react'
import { formatDate } from '@/lib/utils'

// ─── Placeholder posts — replace with Sanity fetch ───────────────────────────
const PLACEHOLDER_POSTS: Record<string, PlaceholderPost> = {
  'why-brand-consistency-matters': {
    slug: 'why-brand-consistency-matters',
    title: 'Why Brand Consistency Is Your Most Valuable Asset',
    excerpt: "Inconsistent branding costs businesses credibility, recall, and revenue. Here's how to audit and lock down your visual identity.",
    category: 'Branding',
    author: 'DM Graphix Team',
    publishedAt: '2024-05-01',
    readTime: 5,
    body: [
      {
        type: 'h2',
        text: 'The Cost of Inconsistency',
      },
      {
        type: 'p',
        text: "Brand inconsistency is one of the most expensive mistakes a business can make — and most companies don't even notice they're making it. Research consistently shows that presenting a brand consistently across all platforms can increase revenue by up to 23%. Yet most businesses operate with multiple logo variations, mismatched colour palettes, and conflicting tone of voice across channels.",
      },
      {
        type: 'p',
        text: 'The problem usually starts small. A social media manager uses a slightly different shade of your brand colour. A sales deck gets updated with a new font. A contractor builds a landing page with a logo they found on Google. Before long, your brand identity exists in fragments — each telling a slightly different story.',
      },
      {
        type: 'h2',
        text: 'What a Brand Audit Reveals',
      },
      {
        type: 'p',
        text: "A brand audit is the first tool we deploy with any new client who has an existing identity. The process involves collecting every branded touchpoint — digital and physical — and assessing them against a consistent rubric: colour accuracy, typography adherence, logo usage, tone of voice, and visual hierarchy.",
      },
      {
        type: 'p',
        text: "The results are almost always illuminating. We regularly find businesses operating with three or four different logo versions, none of which match the original file. Colour values drift by 10–15% between print and digital. Typography choices get made ad hoc by whoever is building the asset that week.",
      },
      {
        type: 'h2',
        text: 'Building a Living Brand System',
      },
      {
        type: 'p',
        text: "The solution isn't a stricter brief — it's a more accessible system. Brand guidelines that live in a 60-page PDF are not used. A Figma library that your team can open in one click — that gets used. The best brand systems are the ones that make doing the right thing easier than doing the wrong thing.",
      },
    ],
  },
  'nextjs-seo-fundamentals': {
    slug: 'nextjs-seo-fundamentals',
    title: 'Next.js SEO Fundamentals Every Designer Should Know',
    excerpt: 'Core Web Vitals, structured data, and metadata — the SEO building blocks that make beautiful sites actually get found.',
    category: 'Web Development',
    author: 'DM Graphix Team',
    publishedAt: '2024-04-18',
    readTime: 8,
    body: [
      {
        type: 'h2',
        text: 'Why Designers Need to Care About SEO',
      },
      {
        type: 'p',
        text: "Design and SEO are not in conflict — they're deeply interdependent. Core Web Vitals, Google's performance-based ranking signals, are essentially a measure of how well your design performs under real-world conditions. A slow, layout-shifting, unresponsive design will hurt rankings regardless of how good the content is.",
      },
      {
        type: 'h2',
        text: 'The Metadata Foundation',
      },
      {
        type: 'p',
        text: 'Next.js 16 makes metadata management elegant with its built-in Metadata API. Every page gets a generateMetadata function where you define title, description, OG images, and canonical URLs. This is not just an SEO exercise — it directly impacts click-through rates from search results and social shares.',
      },
      {
        type: 'h2',
        text: 'Core Web Vitals in Practice',
      },
      {
        type: 'p',
        text: 'LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), and INP (Interaction to Next Paint) are the three signals that matter most. For LCP, prioritise your hero image with the priority prop on next/image. For CLS, always specify width and height on images and avoid dynamically injected content above the fold. For INP, keep your JavaScript lean and defer non-critical interactions.',
      },
    ],
  },
}

interface PlaceholderPost {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  publishedAt: string
  readTime: number
  body: { type: string; text: string }[]
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = PLACEHOLDER_POSTS[slug]
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = PLACEHOLDER_POSTS[slug]

  if (!post) notFound()

  const CATEGORY_COLORS: Record<string, string> = {
    Branding: 'var(--color-brand-orange)',
    'Web Development': 'var(--color-brand-blue)',
    'UI/UX': '#8b5cf6',
    'Graphic Design': '#ec4899',
  }

  return (
    <PageLayout>
      {/* Header */}
      <section className="py-16 lg:py-20 dark:bg-dark-bg bg-light-bg border-b dark:border-dark-border border-light-border">
        <div className="section-container">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-display font-600 dark:text-text-muted-dark text-text-muted hover:text-brand-orange transition-colors mb-8"
          >
            <ArrowLeft size={15} /> Back to Blog
          </Link>

          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-mono text-white"
                style={{ background: CATEGORY_COLORS[post.category] ?? 'var(--color-brand-blue)' }}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono dark:text-text-muted-dark text-text-muted">
                <Calendar size={12} />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono dark:text-text-muted-dark text-text-muted">
                <Clock size={12} />
                {post.readTime} min read
              </span>
            </div>

            <h1 className="font-display font-800 text-3xl lg:text-5xl dark:text-white text-text-primary leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-base dark:text-text-muted-dark text-text-secondary font-body leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Cover image placeholder */}
      <section className="dark:bg-dark-bg bg-light-bg">
        <div className="section-container py-8">
          <div
            className="w-full h-56 lg:h-80 rounded-2xl relative overflow-hidden flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${CATEGORY_COLORS[post.category] ?? 'var(--color-brand-blue)'}22 0%, ${CATEGORY_COLORS[post.category] ?? 'var(--color-brand-blue)'}55 100%)`,
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <p className="font-display font-600 text-sm" style={{ color: `${CATEGORY_COLORS[post.category]}88` }}>
              Article Cover Image
            </p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 lg:py-20 dark:bg-dark-bg bg-light-bg">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">

            {/* Article */}
            <article className="lg:col-span-3 prose-custom">
              {post.body.map((block, i) => {
                if (block.type === 'h2') {
                  return (
                    <h2
                      key={i}
                      className="font-display font-700 text-xl lg:text-2xl dark:text-white text-text-primary mt-10 mb-4 first:mt-0"
                    >
                      {block.text}
                    </h2>
                  )
                }
                return (
                  <p
                    key={i}
                    className="text-sm lg:text-base dark:text-text-muted-dark text-text-secondary leading-relaxed font-body mb-5"
                  >
                    {block.text}
                  </p>
                )
              })}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Author */}
                <div className="p-5 rounded-2xl dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border">
                  <p className="text-xs font-mono uppercase tracking-widest text-brand-orange mb-4">
                    Written By
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-700 text-sm shrink-0"
                      style={{ background: 'var(--color-brand-blue)' }}
                    >
                      DM
                    </div>
                    <div>
                      <p className="font-display font-600 text-sm dark:text-white text-text-primary">
                        {post.author}
                      </p>
                      <p className="text-xs dark:text-text-muted-dark text-text-muted font-body">
                        DM Graphix Studio
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-5 rounded-2xl dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border">
                  <p className="font-display font-700 text-sm dark:text-white text-text-primary mb-2">
                    Need help with this?
                  </p>
                  <p className="text-xs dark:text-text-muted-dark text-text-muted font-body mb-4 leading-relaxed">
                    We build brands and websites that get found and convert.
                  </p>
                  <Link href="/contact" className="btn-orange text-xs px-4 py-2.5 w-full justify-center">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  )
}
