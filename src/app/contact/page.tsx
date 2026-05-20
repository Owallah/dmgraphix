import type { Metadata } from 'next'
import PageLayout from '@/components/layout/PageLayout'
import MultiStepForm from '@/components/contact/MultiStepForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with DM Graphix. Tell us about your brief and we\'ll get back to you within 24 hours.',
}

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'hello@dmgraphix.com', href: 'mailto:hello@dmgraphix.com' },
  { icon: Phone, label: 'Phone', value: '+254 700 000 000', href: 'tel:+254700000000' },
  { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya', href: null },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
]

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="py-24 lg:py-32 dark:bg-dark-bg bg-light-bg min-h-screen">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

            {/* Left — info */}
            <div className="lg:col-span-2">
              <span className="section-pill">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                Get In Touch
              </span>
              <h1 className="font-display font-800 text-4xl lg:text-5xl dark:text-white text-text-primary mb-4 leading-tight">
                Let&apos;s build something{' '}
                <span style={{ color: 'var(--color-brand-orange)' }}>great</span>
              </h1>
              <p className="text-sm lg:text-base dark:text-text-muted-dark text-text-secondary font-body leading-relaxed mb-10">
                Tell us about your project using the form and we&apos;ll come back with a proposal,
                timeline, and a few ideas — usually within 24 hours.
              </p>

              <div className="space-y-4">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: 'color-mix(in srgb, var(--color-brand-orange) 10%, transparent)',
                      }}
                    >
                      <item.icon size={15} style={{ color: 'var(--color-brand-orange)' }} />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest dark:text-text-muted-dark text-text-muted mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm dark:text-text-on-dark text-text-primary hover:text-brand-orange transition-colors font-body"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm dark:text-text-on-dark text-text-primary font-body">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="p-8 lg:p-10 rounded-3xl dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border">
                <MultiStepForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
