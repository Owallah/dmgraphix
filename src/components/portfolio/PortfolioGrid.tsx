'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { SERVICE_CATEGORIES } from '@/lib/data'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

// Placeholder projects until Sanity is connected
const PLACEHOLDER_PROJECTS = [
  { id: '1', title: 'Luminary Brand Identity', category: 'branding', client: 'Luminary Brands', year: 2024, tagline: 'A bold rebrand for a growing consultancy.' },
  { id: '2', title: 'TechNova Web Platform', category: 'web-development', client: 'TechNova Ltd', year: 2024, tagline: 'Full-stack web app with custom CMS.' },
  { id: '3', title: 'Roots & Routes App UI', category: 'ui-ux', client: 'Roots & Routes', year: 2024, tagline: 'Travel app redesign, 3× engagement uplift.' },
  { id: '4', title: 'Campaign Social Suite', category: 'graphic-design', client: 'NovaPeak Agency', year: 2023, tagline: '120-asset social campaign in 72 hours.' },
  { id: '5', title: 'Inventory SaaS System', category: 'software', client: 'KitabuTech', year: 2024, tagline: 'Real-time inventory management platform.' },
  { id: '6', title: 'Annual Report 2024', category: 'print', client: 'Strata Capital', year: 2024, tagline: '72-page print publication, award-nominated.' },
  { id: '7', title: 'Bloom Skincare Identity', category: 'branding', client: 'Bloom Beauty', year: 2023, tagline: 'Packaging and brand identity system.' },
  { id: '8', title: 'EduPortal Web App', category: 'web-development', client: 'EduPath Kenya', year: 2023, tagline: 'Student management portal for 5,000+ users.' },
]

const CATEGORY_COLORS: Record<string, string> = {
  branding: 'var(--color-brand-blue)',
  'web-development': 'var(--color-brand-orange)',
  'ui-ux': '#8b5cf6',
  'graphic-design': '#ec4899',
  software: '#14b8a6',
  print: '#f59e0b',
}

export default function PortfolioGrid() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? PLACEHOLDER_PROJECTS
    : PLACEHOLDER_PROJECTS.filter((p) => p.category === active)

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {SERVICE_CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={cn(
              'px-4 py-2 rounded-xl text-sm font-display font-600 transition-all duration-200',
              active === cat.value
                ? 'text-white'
                : 'dark:bg-dark-card bg-light-card dark:text-text-muted-dark text-text-secondary dark:border-dark-border border-light-border border hover:border-brand-orange/30'
            )}
            style={active === cat.value ? { background: 'var(--color-brand-orange)' } : undefined}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/work/${project.id}`}
                data-cursor-label="View"
                className="group block rounded-2xl overflow-hidden dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border hover:border-brand-orange/30 transition-all duration-300 h-full"
              >
                {/* Colour placeholder for image */}
                <div
                  className="h-44 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${CATEGORY_COLORS[project.category] ?? '#031d80'}22, ${CATEGORY_COLORS[project.category] ?? '#031d80'}55)`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div
                    className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-white text-xs font-mono"
                    style={{ background: CATEGORY_COLORS[project.category] }}
                  >
                    {project.category.replace('-', ' ')}
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="absolute top-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-mono dark:text-text-muted-dark text-text-muted mb-1">
                    {project.client} · {project.year}
                  </p>
                  <h3 className="font-display font-700 text-base dark:text-white text-text-primary mb-1 group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs dark:text-text-muted-dark text-text-muted font-body leading-relaxed">
                    {project.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
