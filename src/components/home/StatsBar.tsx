'use client'

import { motion } from 'motion/react'
import { STATS } from '@/lib/data'
import AnimatedCounter from '@/components/shared/AnimatedCounter'

export default function StatsBar() {
  return (
    <section className="py-16 dark:bg-dark-surface bg-light-surface border-y dark:border-dark-border border-light-border">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p
                className="font-display font-800 text-4xl lg:text-5xl mb-2"
                style={{ color: 'var(--color-brand-orange)' }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm font-body dark:text-text-muted-dark text-text-secondary">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
