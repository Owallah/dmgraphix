import type { Metadata } from 'next'
import PageLayout from '@/components/layout/PageLayout'
import SectionHeader from '@/components/shared/SectionHeader'
import { SERVICES, PROCESS_STEPS } from '@/lib/data'
import CTABanner from '@/components/home/CTABanner'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore DM Graphix services: graphic design, web development, UI/UX, branding, software development, and print production.',
}

export default function ServicesPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="py-24 lg:py-32 dark:bg-dark-bg bg-light-bg">
        <div className="section-container">
          <SectionHeader
            pill="Services"
            title="Everything your brand "
            highlight="needs to thrive"
            description="From concept to code, strategy to screen. We offer the full spectrum of creative and technical services under one roof."
            centered
          />
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-24 dark:bg-dark-bg bg-light-bg">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.slug}
                className="group p-8 lg:p-10 rounded-2xl dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border hover:border-brand-orange/30 transition-all duration-300 scroll-mt-24"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="text-4xl shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'color-mix(in srgb, var(--color-brand-orange) 10%, transparent)',
                      color: 'var(--color-brand-orange)',
                    }}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display font-700 text-xl dark:text-white text-text-primary mb-1">
                      {service.title}
                    </h2>
                    <p className="text-sm font-mono text-brand-orange mb-4">{service.tagline}</p>
                    <p className="text-sm dark:text-text-muted-dark text-text-secondary leading-relaxed mb-6 font-body">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm dark:text-text-on-dark/70 text-text-secondary font-body">
                          <CheckCircle2 size={14} className="text-brand-orange shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageLayout>
  )
}
