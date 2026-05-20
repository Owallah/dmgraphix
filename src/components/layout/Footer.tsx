import Link from 'next/link'
import { NAV_ITEMS } from '@/lib/data'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'Dribbble', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="dark:bg-dark-surface bg-light-surface border-t dark:border-dark-border border-light-border">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-display font-800"
                style={{ background: 'var(--color-brand-blue)' }}
              >
                DM
              </div>
              <span className="font-display font-700 text-xl dark:text-white text-text-primary">
                Graphix
              </span>
            </Link>
            <p className="font-body dark:text-text-muted-dark text-text-secondary text-sm leading-relaxed max-w-xs mb-8">
              Where visions meet visuals. A full-service creative agency crafting design, 
              web, and software solutions that move people and move businesses.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@dmgraphix.com"
                className="flex items-center gap-3 dark:text-text-on-dark/70 text-text-secondary hover:text-brand-orange transition-colors text-sm"
              >
                <Mail size={15} className="text-brand-orange shrink-0" />
                hello@dmgraphix.com
              </a>
              <a
                href="tel:+254700000000"
                className="flex items-center gap-3 dark:text-text-on-dark/70 text-text-secondary hover:text-brand-orange transition-colors text-sm"
              >
                <Phone size={15} className="text-brand-orange shrink-0" />
                +254 700 000 000
              </a>
              <span className="flex items-center gap-3 dark:text-text-on-dark/70 text-text-secondary text-sm">
                <MapPin size={15} className="text-brand-orange shrink-0" />
                Nairobi, Kenya
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs font-500 uppercase tracking-widest text-brand-orange mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm dark:text-text-on-dark/70 text-text-secondary hover:text-brand-orange transition-colors font-body"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <p className="font-mono text-xs font-500 uppercase tracking-widest text-brand-orange mb-6">
              Follow Us
            </p>
            <ul className="space-y-3 mb-8">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm dark:text-text-on-dark/70 text-text-secondary hover:text-brand-orange transition-colors font-body group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-orange text-sm px-5 py-3">
              Start a Project
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t dark:border-dark-border border-light-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs dark:text-text-muted-dark text-text-muted font-body">
            © {year} DM Graphix. All rights reserved.
          </p>
          <p className="text-xs dark:text-text-muted-dark text-text-muted font-body">
            Where Visions Meet Visuals
          </p>
        </div>
      </div>
    </footer>
  )
}
