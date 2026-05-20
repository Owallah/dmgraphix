'use client'

import { motion } from 'motion/react'
import { PROCESS_STEPS } from '@/lib/data'
import SectionHeader from '@/components/shared/SectionHeader'

export default function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 dark:bg-dark-surface bg-light-surface">
      <div className="section-container">
        <SectionHeader
          pill="How We Work"
          title="A process built for "
          highlight="results"
          description="No guesswork. No surprises. Just a proven creative process from brief to delivery."
          centered
          className="mb-16"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border"
            >
              {/* Step number */}
              <span
                className="font-display font-800 text-5xl opacity-10 absolute top-4 right-5"
                style={{ color: 'var(--color-brand-orange)' }}
              >
                {step.step}
              </span>
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-white font-display font-700 text-sm mb-4"
                style={{ background: 'var(--color-brand-orange)' }}
              >
                {step.step}
              </div>
              <h3 className="font-display font-700 text-lg dark:text-white text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm dark:text-text-muted-dark text-text-secondary leading-relaxed font-body">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
