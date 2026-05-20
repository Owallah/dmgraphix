import type { Metadata } from 'next'
import PageLayout from '@/components/layout/PageLayout'
import SectionHeader from '@/components/shared/SectionHeader'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Explore the DM Graphix portfolio — case studies across branding, web development, UI/UX, graphic design, and software.',
}

export default function WorkPage() {
  return (
    <PageLayout>
      <section className="py-24 lg:py-32 dark:bg-dark-bg bg-light-bg">
        <div className="section-container">
          <SectionHeader
            pill="Portfolio"
            title="Work that speaks "
            highlight="for itself"
            description="Browse our projects by category or explore everything. Each case study includes the brief, process, and results."
            centered
            className="mb-16"
          />
          <PortfolioGrid />
        </div>
      </section>
      <CTABanner />
    </PageLayout>
  )
}
