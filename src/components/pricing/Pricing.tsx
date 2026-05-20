'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Check, ArrowRight, Sparkles, Tag, Layers, Share2, Package, Monitor, RefreshCw } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

// ─── Data ─────────────────────────────────────────────────────────────────────

const BRANDING_PACKAGES = [
  {
    id: 'starter-brand',
    tier: 'Starter',
    name: 'Starter Brand Package',
    price: 'KES 15,000 – 30,000',
    badge: null,
    description: 'Everything you need to launch a clean, consistent brand presence from day one.',
    features: [
      '1–2 logo concepts',
      'Primary logo design',
      'Brand color palette',
      'Typography selection',
      'Basic brand guideline',
      'Business card design',
      'Social media profile image',
    ],
  },
  {
    id: 'professional-brand',
    tier: 'Professional',
    name: 'Professional Brand Identity Package',
    price: 'KES 45,000 – 90,000',
    badge: 'Most Popular',
    description: 'A complete brand identity system for businesses ready to make a lasting impression.',
    features: [
      '3–5 logo concepts',
      'Full logo suite',
      'Brand color system',
      'Typography system',
      'Comprehensive brand guide',
      'Business card & letterhead',
      'Email signature',
      'Social media kit',
      'Stationery mockups',
    ],
  },
  {
    id: 'premium-brand',
    tier: 'Premium',
    name: 'Premium Branding Package',
    price: 'KES 120,000 – 300,000',
    badge: 'Full-Service',
    description: 'End-to-end brand strategy and identity for enterprises demanding world-class visual presence.',
    features: [
      'Full visual identity system',
      'Brand strategy session',
      'Advanced logo suite',
      'Brand patterns & textures',
      'Packaging concepts',
      'Social media templates',
      'Presentation deck',
      'Website UI concept',
      'Comprehensive brand manual',
    ],
  },
]

const SOCIAL_PACKAGES = [
  {
    id: 'basic-social',
    tier: 'Basic',
    name: 'Basic Social Media Package',
    price: 'KES 10,000 – 20,000',
    period: '/ month',
    badge: null,
    description: 'Consistent, on-brand content to keep your social presence active every month.',
    features: [
      '6–9 branded posts',
      'Static social media graphics',
      'Basic resizing for platforms',
      'Simple content direction',
    ],
  },
  {
    id: 'growth-social',
    tier: 'Growth',
    name: 'Growth Social Media Package',
    price: 'KES 25,000 – 50,000',
    period: '/ month',
    badge: 'Most Popular',
    description: 'High-volume, multi-format content that fuels consistent growth across channels.',
    features: [
      '12–20 branded posts',
      'Carousel graphics',
      'Story templates',
      'Ad creatives',
      'Branded reusable templates',
    ],
  },
  {
    id: 'premium-social',
    tier: 'Premium',
    name: 'Premium Social Media Package',
    price: 'KES 60,000 – 120,000',
    period: '/ month',
    badge: 'Full-Service',
    description: 'A complete monthly content system with motion, campaigns, and creative direction.',
    features: [
      'Full monthly content system',
      'Motion graphics',
      'Campaign graphics',
      'Reels covers',
      'Creative direction support',
    ],
  },
]

const STANDALONE_PACKAGES = [
  {
    id: 'marketing-design',
    icon: Tag,
    name: 'Marketing Design',
    price: 'KES 5,000 – 15,000',
    period: 'per item',
    description: 'Print and digital marketing assets crafted to stop the scroll and drive action.',
    features: ['Flyers', 'Brochures', 'Posters', 'Roll-up banners', 'Event graphics', 'Ad creatives'],
  },
  {
    id: 'starter-packaging',
    icon: Package,
    name: 'Starter Packaging',
    price: 'KES 20,000 – 40,000',
    period: null,
    description: 'Beautiful single-product packaging that stands out on shelves and in hands.',
    features: ['Single product packaging', 'Label design', 'Basic mockups', 'Print-ready export'],
  },
  {
    id: 'retail-packaging',
    icon: Layers,
    name: 'Retail Packaging',
    price: 'KES 50,000 – 120,000',
    period: null,
    description: 'Production-grade multi-variant packaging for retail-ready product lines.',
    features: ['Full packaging design', '3D mockups', 'Multiple product variants', 'Print-ready production files'],
  },
  {
    id: 'landing-page-ui',
    icon: Monitor,
    name: 'Landing Page UI',
    price: 'KES 25,000 – 60,000',
    period: null,
    description: 'A conversion-focused single-page UI, pixel-perfect and ready for developers.',
    features: ['One-page website UI', 'Mobile responsive layout', 'Call-to-action sections', 'Developer handoff files'],
  },
  {
    id: 'business-website-ui',
    icon: Monitor,
    name: 'Business Website UI',
    price: 'KES 70,000 – 180,000',
    period: null,
    description: 'A complete multi-page website design system ready for any tech stack.',
    features: ['Multi-page website UI', 'Desktop & mobile versions', 'UI style guide', 'Wireframes', 'Developer-ready assets'],
  },
  {
    id: 'social-media-standalone',
    icon: Share2,
    name: 'Social Media (Standalone)',
    price: 'Included in',
    period: 'social packages above',
    description: 'Need custom one-off social creatives? We can quote individual campaigns separately.',
    features: ['Campaign graphics', 'Ad sets', 'Story & reel covers', 'Profile assets'],
  },
]

// ─── Subcomponents ─────────────────────────────────────────────────────────────

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
        style={{ background: 'color-mix(in srgb, var(--color-brand-orange) 15%, transparent)' }}
      >
        <Check size={10} className="text-brand-orange" strokeWidth={3} />
      </span>
      <span className="text-sm dark:text-text-muted-dark text-text-secondary font-body leading-relaxed">
        {text}
      </span>
    </li>
  )
}

function TierBadge({ label, featured }: { label: string; featured?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-500 uppercase tracking-widest"
      style={
        featured
          ? {
              background: 'color-mix(in srgb, var(--color-brand-orange) 15%, transparent)',
              color: 'var(--color-brand-orange)',
            }
          : {
              background: 'color-mix(in srgb, var(--color-brand-blue) 12%, transparent)',
              color: 'var(--color-brand-blue)',
            }
      }
    >
      {featured && <Sparkles size={10} />}
      {label}
    </span>
  )
}

// ─── Branding / Social pricing card ────────────────────────────────────────────

function PricingCard({
  pkg,
  index,
  hasPeriod = false,
}: {
  pkg: (typeof BRANDING_PACKAGES)[0] & { period?: string }
  index: number
  hasPeriod?: boolean
}) {
  const isFeatured = pkg.badge === 'Most Popular'

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="relative flex flex-col"
    >
      {/* Featured border glow */}
      {isFeatured && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, color-mix(in srgb, var(--color-brand-orange) 30%, transparent) 0%, transparent 60%)',
            padding: '1px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
      )}

      <div
        className={`flex flex-col h-full p-6 lg:p-8 rounded-2xl border transition-all duration-300 ${
          isFeatured
            ? 'dark:bg-dark-card bg-light-card border-brand-orange/40 shadow-brand-orange'
            : 'dark:bg-dark-card bg-light-card dark:border-dark-border border-light-border hover:border-brand-orange/30'
        }`}
      >
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <TierBadge label={pkg.tier} featured={isFeatured} />
            {pkg.badge && pkg.badge !== 'Most Popular' && (
              <span className="text-xs font-mono dark:text-text-muted-dark text-text-muted uppercase tracking-widest">
                {pkg.badge}
              </span>
            )}
          </div>
          <h3 className="font-display font-700 text-xl dark:text-white text-text-primary mb-2 leading-snug">
            {pkg.name}
          </h3>
          <p className="text-sm dark:text-text-muted-dark text-text-secondary font-body leading-relaxed">
            {pkg.description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-6 pb-6 border-b dark:border-dark-border border-light-border">
          <p
            className="font-display font-800 text-2xl lg:text-3xl"
            style={{ color: 'var(--color-brand-orange)' }}
          >
            {pkg.price}
          </p>
          {hasPeriod && pkg.period && (
            <p className="text-xs font-mono dark:text-text-muted-dark text-text-muted mt-1">
              {pkg.period}
            </p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3 flex-1 mb-8">
          {pkg.features.map((f) => (
            <FeatureItem key={f} text={f} />
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-display font-600 text-sm transition-all duration-300 group ${
            isFeatured
              ? 'btn-orange'
              : 'btn-outline hover:border-brand-orange/60'
          }`}
        >
          Get a Quote
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}

// ─── Standalone / one-off card ──────────────────────────────────────────────

function StandaloneCard({
  pkg,
  index,
}: {
  pkg: (typeof STANDALONE_PACKAGES)[0]
  index: number
}) {
  const Icon = pkg.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <div className="group h-full p-6 rounded-2xl dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border hover:border-brand-orange/35 transition-all duration-300 hover:shadow-brand-orange flex flex-col">
        {/* Icon */}
        <div
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
          style={{ background: 'color-mix(in srgb, var(--color-brand-orange) 12%, transparent)' }}
        >
          <Icon size={18} className="text-brand-orange" />
        </div>

        {/* Name + price */}
        <h3 className="font-display font-700 text-lg dark:text-white text-text-primary mb-1 group-hover:text-brand-orange transition-colors">
          {pkg.name}
        </h3>
        <p className="font-display font-700 text-base mb-1" style={{ color: 'var(--color-brand-orange)' }}>
          {pkg.price}
          {pkg.period && (
            <span className="font-mono font-400 text-xs dark:text-text-muted-dark text-text-muted ml-1.5">
              {pkg.period}
            </span>
          )}
        </p>
        <p className="text-sm dark:text-text-muted-dark text-text-secondary font-body leading-relaxed mb-5 flex-1">
          {pkg.description}
        </p>

        {/* Feature tags */}
        <ul className="flex flex-wrap gap-1.5 mt-auto">
          {pkg.features.map((f) => (
            <li
              key={f}
              className="text-xs px-2.5 py-1 rounded-full font-mono dark:bg-dark-surface bg-light-surface dark:text-text-muted-dark text-text-muted"
            >
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

// ─── Retainer Banner ────────────────────────────────────────────────────────

function RetainerBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl p-10 lg:p-14"
      style={{
        background:
          'linear-gradient(135deg, var(--color-brand-blue-dark) 0%, var(--color-brand-blue) 60%, color-mix(in srgb, var(--color-brand-blue) 75%, var(--color-brand-orange)) 100%)',
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Orb */}
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl"
        style={{ background: 'color-mix(in srgb, var(--color-brand-orange) 20%, transparent)' }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-white/70 text-xs font-mono uppercase tracking-widest mb-5">
            <RefreshCw size={11} />
            Ongoing Partnership
          </span>
          <h3 className="font-display font-800 text-3xl lg:text-4xl text-white mb-3 leading-tight">
            Creative Retainer Package
          </h3>
          <p className="text-white/70 font-body leading-relaxed max-w-xl">
            Ongoing design support with priority revisions, monthly creative assets, and a dedicated
            design partnership — so your brand never misses a beat.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-2">
            {['Ongoing design support', 'Priority revisions', 'Monthly creative assets', 'Dedicated design partnership'].map(
              (f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-white/80 font-body">
                  <Check size={13} className="text-brand-orange shrink-0" strokeWidth={3} />
                  {f}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="shrink-0 text-center lg:text-right">
          <p className="font-display font-800 text-4xl lg:text-5xl text-white mb-1">
            KES 40,000
          </p>
          <p className="text-white/60 font-mono text-sm mb-1">– 250,000 / month</p>
          <p className="text-white/50 text-xs font-body mb-6">Tailored to your needs</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display font-700 text-brand-blue bg-white hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5 shadow-lg group"
          >
            Discuss Retainer
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden dark:bg-dark-bg bg-light-bg">
        {/* Grid bg */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-brand-blue) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-blue) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Radial atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 15% 80%, color-mix(in srgb, var(--color-brand-blue) 14%, transparent) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 10%, color-mix(in srgb, var(--color-brand-orange) 10%, transparent) 0%, transparent 60%)',
          }}
        />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-pill">
              <Sparkles size={12} />
              Transparent Pricing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl dark:text-white text-text-primary leading-tight tracking-tight mt-4 mb-6 max-w-4xl"
          >
            Creative services,{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #7b8fff 0%, var(--color-brand-orange) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}
            >
              clear prices
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg lg:text-xl dark:text-text-muted-dark text-text-secondary leading-relaxed max-w-2xl font-body"
          >
            All packages are priced in Kenyan Shillings and tailored to the unique scope of your
            project. Choose a package below or reach out for a custom quote.
          </motion.p>
        </div>
      </section>

      {/* ── Branding ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 dark:bg-dark-bg bg-light-bg">
        <div className="section-container">
          <SectionHeader
            pill="Brand Identity"
            title="Branding "
            highlight="packages"
            description="From first logo to full identity system — pick the tier that fits your stage and ambition."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRANDING_PACKAGES.map((pkg, i) => (
              <PricingCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Media ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 dark:bg-dark-surface bg-light-surface border-y dark:border-dark-border border-light-border">
        <div className="section-container">
          <SectionHeader
            pill="Social Media"
            title="Social media "
            highlight="packages"
            description="Monthly content systems that keep your brand active, consistent, and growing across every platform."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOCIAL_PACKAGES.map((pkg, i) => (
              <PricingCard key={pkg.id} pkg={pkg} index={i} hasPeriod />
            ))}
          </div>
        </div>
      </section>

      {/* ── Standalone / One-Off ─────────────────────────────────── */}
      <section className="py-24 lg:py-32 dark:bg-dark-bg bg-light-bg">
        <div className="section-container">
          <SectionHeader
            pill="À La Carte"
            title="Standalone "
            highlight="services"
            description="Marketing collateral, packaging, UI design, and more — priced per project with full creative care."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {STANDALONE_PACKAGES.map((pkg, i) => (
              <StandaloneCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Retainer ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-28 dark:bg-dark-surface bg-light-surface border-t dark:border-dark-border border-light-border">
        <div className="section-container">
          <RetainerBanner />
        </div>
      </section>

      {/* ── FAQ / Custom note ────────────────────────────────────── */}
      <section className="py-16 lg:py-20 dark:bg-dark-bg bg-light-bg">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display font-700 text-3xl lg:text-4xl dark:text-white text-text-primary mb-4">
              Not sure which package fits?
            </h2>
            <p className="dark:text-text-muted-dark text-text-secondary font-body leading-relaxed mb-8">
              Custom packages can be tailored based on your project scope, timelines, and business
              requirements. Tell us what you need and we&apos;ll put together a personalised proposal —
              usually within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-orange group">
                Get a Custom Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/services" className="btn-outline">
                Browse All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
