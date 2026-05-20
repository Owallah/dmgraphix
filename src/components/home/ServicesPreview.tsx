'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/data'
import SectionHeader from '@/components/shared/SectionHeader'

export default function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32 dark:bg-dark-bg bg-light-bg">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <SectionHeader
            pill="What We Do"
            title="Six pillars of "
            highlight="creative excellence"
            description="Design. Web. Software. Brand. Print. UI/UX. We do it all — with the craft and care it deserves."
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-display font-600 text-brand-orange hover:gap-3 transition-all shrink-0"
          >
            All Services <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/services#${service.slug}`}
                className="group block p-6 lg:p-8 rounded-2xl dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border hover:border-brand-orange/40 transition-all duration-300 hover:shadow-brand-orange h-full"
              >
                <div className="text-3xl mb-4 font-body"
                  style={{ color: 'var(--color-brand-orange)' }}>
                  {service.icon}
                </div>
                <h3 className="font-display font-700 text-lg dark:text-white text-text-primary mb-2 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm dark:text-text-muted-dark text-text-secondary leading-relaxed mb-5 font-body">
                  {service.tagline}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {service.features.slice(0, 3).map((f) => (
                    <li
                      key={f}
                      className="text-xs px-2.5 py-1 rounded-full font-mono dark:bg-dark-surface bg-light-surface dark:text-text-muted-dark text-text-muted"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
