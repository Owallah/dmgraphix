'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-24 lg:py-32 dark:bg-dark-bg bg-light-bg">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl p-10 lg:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, var(--color-brand-blue-dark) 0%, var(--color-brand-blue) 60%, color-mix(in srgb, var(--color-brand-blue) 80%, var(--color-brand-orange)) 100%)',
          }}
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Orange glow orb */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl"
            style={{ background: 'color-mix(in srgb, var(--color-brand-orange) 25%, transparent)' }}
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-white/70 text-xs font-mono uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse-slow" />
              Ready to get started?
            </span>
            <h2 className="font-display font-800 text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Let&apos;s build something{' '}
              <span style={{ color: 'var(--color-brand-orange)' }}>remarkable</span>
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 font-body leading-relaxed">
              Tell us about your project and we&apos;ll come back with ideas, a proposal,
              and a timeline — usually within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display font-700 text-brand-blue bg-white hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5 shadow-lg group"
              >
                Start a Project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display font-600 text-white border border-white/25 hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
