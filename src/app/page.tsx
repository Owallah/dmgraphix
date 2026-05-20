import type { Metadata } from 'next'
import PageLayout from '@/components/layout/PageLayout'
import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import ServicesPreview from '@/components/home/ServicesPreview'
import ProcessSection from '@/components/home/ProcessSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'DM Graphix — Where Visions Meet Visuals',
  description:
    'Full-service creative agency specialising in graphic design, web development, UI/UX, branding, and software. Based in Nairobi, serving clients globally.',
}

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <StatsBar />
      <ServicesPreview />
      <ProcessSection />
      <TestimonialsSection />
      <CTABanner />
    </PageLayout>
  )
}
