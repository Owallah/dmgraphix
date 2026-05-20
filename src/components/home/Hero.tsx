'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import dynamic from 'next/dynamic'
import KineticText from '@/components/shared/KineticText'
import ParallaxLayer from '@/components/shared/ParallaxLayer'

// Dynamically import canvas — avoids SSR issues with window/canvas APIs
const ParticleCanvas = dynamic(() => import('./ParticleCanvas'), { ssr: false })

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll-driven transforms scoped to the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Hero content fades + rises as user scrolls out
  const contentY       = useTransform(scrollYProgress, [0, 1], ['0px', '80px'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  // Three orbs at different parallax speeds — creates depth
  const orb1Y = useTransform(scrollYProgress, [0, 1], ['0px', '-120px'])
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['0px',  '-60px'])
  const orb3Y = useTransform(scrollYProgress, [0, 1], ['0px', '-200px'])

  // Scroll indicator fades out on first scroll
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  return (
    <section
      ref={sectionRef}
      style={{position: "relative"}}
      className="relative min-h-svh flex items-center overflow-hidden dark:bg-dark-bg bg-light-bg"
    >
      {/* Layer 1 — grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-brand-blue) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-blue) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Layer 2 — radial gradient atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 65% at 10% 60%, color-mix(in srgb, var(--color-brand-blue) 18%, transparent) 0%, transparent 70%), radial-gradient(ellipse 45% 55% at 85% 15%, color-mix(in srgb, var(--color-brand-orange) 12%, transparent) 0%, transparent 60%)',
        }}
      />

      {/* Layer 3 — cursor-reactive particle field */}
      <ParticleCanvas />

      {/* Layer 4 — floating orbs, each at a different parallax speed */}
      <motion.div
        className="absolute bottom-1/4 left-[4%] w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{
          y: orb1Y,
          background: 'radial-gradient(circle, color-mix(in srgb, var(--color-brand-blue) 30%, transparent), transparent 70%)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-[15%] right-[8%] w-56 h-56 rounded-full blur-3xl pointer-events-none"
        style={{
          y: orb2Y,
          background: 'radial-gradient(circle, color-mix(in srgb, var(--color-brand-orange) 25%, transparent), transparent 70%)',
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-[30%] left-[25%] w-32 h-32 rounded-full blur-2xl pointer-events-none"
        style={{
          y: orb3Y,
          background: 'radial-gradient(circle, color-mix(in srgb, var(--color-brand-orange) 20%, transparent), transparent 70%)',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        aria-hidden="true"
      />

      {/* Layer 5 — hero content, fades out on scroll */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="section-container relative z-10 py-24 lg:py-36 will-change-transform"
      >
        <div className="max-w-5xl">

          {/* Entrance pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="section-pill">
              <Sparkles size={12} />
              Full-Service Creative Agency
            </span>
          </motion.div>

          {/* Kinetic headline — three layers at different parallax speeds */}
          <h1 className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] dark:text-white text-text-primary leading-none tracking-tight mb-2 mt-4">

            {/* Line 1 — slowest parallax */}
            <ParallaxLayer speed={0.08} className="block">
              <KineticText text="Where Visions" stagger={0.03} />
            </ParallaxLayer>

            {/* Line 2 — medium parallax, gradient on "Visuals" */}
            <ParallaxLayer speed={0.14} className="block mt-1">
              <KineticText text="Meet " stagger={0.05} />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #7b8fff 0%, var(--color-brand-orange) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}
              >
                <KineticText text="Visuals" stagger={0.04} />
              </span>
            </ParallaxLayer>

          </h1>

          {/* Subheading — gentle parallax */}
          <ParallaxLayer speed={0.05}>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
              className="text-lg lg:text-xl dark:text-text-muted-dark text-text-secondary leading-relaxed max-w-2xl mt-6 mb-10 font-body"
            >
              We design brands, build websites, and engineer software that turns
              heads and drives results. From concept to code. One studio, endless capability.
            </motion.p>
          </ParallaxLayer>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/work" className="btn-orange group" data-cursor-label="View">
              See Our Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="btn-outline">
              Start a Project
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-16 flex flex-wrap items-center gap-6"
          >
            <p className="text-xs font-mono uppercase tracking-widest dark:text-text-muted-dark text-text-muted">
              Trusted by
            </p>
            {['Brands', 'Startups', 'Enterprises', 'Agencies'].map((lbl, i) => (
              <motion.span
                key={lbl}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="text-sm font-display font-500 dark:text-text-on-dark/30 text-text-muted"
              >
                {lbl}
              </motion.span>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border dark:border-dark-border border-light-border flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-brand-orange" />
        </motion.div>
        <p className="text-xs font-mono dark:text-text-muted-dark text-text-muted opacity-60">
          scroll
        </p>
      </motion.div>
    </section>
  )
}
