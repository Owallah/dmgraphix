'use client'

import { motion } from 'motion/react'
import { Star } from 'lucide-react'
import { PLACEHOLDER_TESTIMONIALS } from '@/lib/data'
import SectionHeader from '@/components/shared/SectionHeader'

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 dark:bg-dark-bg bg-light-bg">
      <div className="section-container">
        <SectionHeader
          pill="Client Love"
          title="What our clients "
          highlight="say"
          description="Real results, real relationships. Here's how we've made an impact."
          centered
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLACEHOLDER_TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 lg:p-8 rounded-2xl dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" className="text-brand-orange" />
                ))}
              </div>

              <p className="text-sm dark:text-text-on-dark/85 text-text-secondary leading-relaxed mb-6 font-body">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-700 text-sm shrink-0"
                  style={{ background: 'var(--color-brand-blue)' }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-600 text-sm dark:text-white text-text-primary">
                    {t.name}
                  </p>
                  <p className="text-xs dark:text-text-muted-dark text-text-muted font-body">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
