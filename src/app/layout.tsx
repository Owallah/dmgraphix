import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import CustomCursorLoader from '@/components/shared/CustomCursorLoader'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#020818' },
    { media: '(prefers-color-scheme: light)', color: '#f8f9ff' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'DM Graphix — Where Visions Meet Visuals',
    template: '%s | DM Graphix',
  },
  description:
    'DM Graphix is a full-service creative agency specialising in graphic design, web development, UI/UX, branding, and software solutions. Where visions meet visuals.',
  keywords: [
    'graphic design',
    'web design',
    'branding',
    'UI UX',
    'software development',
    'creative agency',
    'DM Graphix',
  ],
  authors: [{ name: 'DM Graphix' }],
  creator: 'DM Graphix',
  metadataBase: new URL('https://dmgraphix.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dmgraphix.com',
    siteName: 'DM Graphix',
    title: 'DM Graphix — Where Visions Meet Visuals',
    description:
      'Full-service creative agency: graphic design, branding, web & software development.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'DM Graphix' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DM Graphix — Where Visions Meet Visuals',
    description:
      'Full-service creative agency: graphic design, branding, web & software development.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {/* Custom cursor — renders globally, hidden on touch devices */}
          {/* test */}
          <CustomCursorLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
