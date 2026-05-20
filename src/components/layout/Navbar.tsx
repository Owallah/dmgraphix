'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'dark:bg-dark-bg/90 bg-light-bg/90 backdrop-blur-xl border-b dark:border-dark-border border-light-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-display font-800 text-sm"
              style={{ background: 'var(--color-brand-blue)' }}
            >
              DM
            </div>
            <span className="font-display font-700 text-lg dark:text-white text-text-primary tracking-tight">
              Graphix
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative px-4 py-2 rounded-lg text-sm font-body font-500 transition-colors duration-200',
                      isActive
                        ? 'text-brand-orange'
                        : 'dark:text-text-on-dark/70 text-text-secondary hover:dark:text-white hover:text-text-primary'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg dark:bg-brand-orange/10 bg-brand-orange/8"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg dark:text-text-on-dark/60 text-text-secondary hover:dark:text-white hover:text-text-primary transition-colors dark:hover:bg-dark-card hover:bg-light-surface"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* CTA */}
            <Link
              href="/contact"
              data-cursor-label="Let's Talk"
              className="hidden lg:inline-flex btn-orange text-sm px-5 py-2.5"
            >
              Start a Project
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg dark:text-text-on-dark text-text-primary transition-colors dark:hover:bg-dark-card hover:bg-light-surface"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden dark:bg-dark-bg/95 bg-light-bg/95 backdrop-blur-xl border-b dark:border-dark-border border-light-border"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => {
                const isActive = pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href))
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-4 py-3 rounded-xl text-base font-body font-500 transition-colors',
                        isActive
                          ? 'text-brand-orange dark:bg-brand-orange/10 bg-brand-orange/8'
                          : 'dark:text-text-on-dark/80 text-text-secondary dark:hover:bg-dark-card hover:bg-light-surface'
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05 }}
                className="pt-2"
              >
                <Link href="/contact" className="btn-orange w-full justify-center">
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
