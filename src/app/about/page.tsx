import type { Metadata } from 'next'
import PageLayout from '@/components/layout/PageLayout'
import SectionHeader from '@/components/shared/SectionHeader'
import CTABanner from '@/components/home/CTABanner'
import StatsBar from '@/components/home/StatsBar'
import { PROCESS_STEPS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about DM Graphix — our story, our team, our values, and the process behind our creative work.',
}

const VALUES = [
  {
    title: 'Craft First',
    description: 'We believe in doing things properly. Every pixel, every line of code, every brand decision — executed with precision and intention.',
    icon: '✦',
  },
  {
    title: 'Transparent Process',
    description: 'No black boxes. We keep you in the loop at every stage — from discovery to delivery, you always know where your project stands.',
    icon: '◈',
  },
  {
    title: 'Results Driven',
    description: 'Beautiful work that doesn\'t perform is decoration. We track outcomes and optimise for impact — not just aesthetics.',
    icon: '◉',
  },
  {
    title: 'Long-Term Thinking',
    description: 'We build for the future, not just the launch day. Scalable systems, sustainable brands, and codebases that grow with you.',
    icon: '⬡',
  },
]

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-24 lg:py-32 dark:bg-dark-bg bg-light-bg">
        <div className="section-container">
          <div className="max-w-3xl">
            <SectionHeader
              pill="About Us"
              title="A studio obsessed with "
              highlight="great work"
              description="DM Graphix was built on a simple belief: that design and technology, done well, can transform any business. We've been proving it ever since."
            />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm dark:text-text-muted-dark text-text-secondary font-body leading-relaxed">
              <p>
                We are a full-service creative agency based in Nairobi, Kenya — working with 
                clients across Africa and internationally. From scrappy startups to established 
                enterprises, we bring the same level of craft and care to every brief.
              </p>
              <p>
                Our team spans graphic design, web engineering, UI/UX, brand strategy, and 
                software development. The breadth means your visual identity, your website, 
                and your product can all speak the same language — because we built them all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Values */}
      <section className="py-24 lg:py-32 dark:bg-dark-bg bg-light-bg">
        <div className="section-container">
          <SectionHeader
            pill="Our Values"
            title="What we stand "
            highlight="for"
            centered
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border"
              >
                <span className="text-3xl" style={{ color: 'var(--color-brand-orange)' }}>
                  {v.icon}
                </span>
                <h3 className="font-display font-700 text-base dark:text-white text-text-primary mt-4 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm dark:text-text-muted-dark text-text-secondary leading-relaxed font-body">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 dark:bg-dark-surface bg-light-surface">
        <div className="section-container">
          <SectionHeader
            pill="Our Process"
            title="How we turn briefs into "
            highlight="results"
            centered
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border"
              >
                <span
                  className="font-display font-800 text-5xl opacity-10 absolute top-4 right-5"
                  style={{ color: 'var(--color-brand-orange)' }}
                >
                  {step.step}
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-display font-700 text-sm mb-4"
                  style={{ background: 'var(--color-brand-orange)' }}
                >
                  {step.step}
                </div>
                <h3 className="font-display font-700 text-base dark:text-white text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm dark:text-text-muted-dark text-text-secondary leading-relaxed font-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  )
}
