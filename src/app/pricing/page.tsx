import type { Metadata } from 'next'
import PageLayout from '@/components/layout/PageLayout'
import PricingPage from '@/components/pricing/Pricing'

export const metadata: Metadata = {
  title: 'Pricing | DM Graphix',
  description:
    'Transparent, KES-priced creative service packages — branding, social media, UI design, packaging, and more. Custom quotes available.',
}

export default function Page() {
  return (
    <PageLayout>
      <PricingPage />
    </PageLayout>
  )
}
