import Link from 'next/link'
import PageLayout from '@/components/layout/PageLayout'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <PageLayout>
      <section className="min-h-[70vh] flex items-center dark:bg-dark-bg bg-light-bg">
        <div className="section-container text-center">
          <p
            className="font-display font-800 text-8xl lg:text-[10rem] leading-none mb-6 opacity-10"
            style={{ color: 'var(--color-brand-orange)' }}
          >
            404
          </p>
          <h1 className="font-display font-700 text-3xl lg:text-4xl dark:text-white text-text-primary mb-4 -mt-4">
            Page not found
          </h1>
          <p className="dark:text-text-muted-dark text-text-secondary font-body text-sm max-w-md mx-auto mb-8 leading-relaxed">
            The page you&apos;re looking for has moved, been removed, or never existed.
            Let&apos;s get you back on track.
          </p>
          <Link href="/" className="btn-orange inline-flex">
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
